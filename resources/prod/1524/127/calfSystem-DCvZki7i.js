function e(e){return new Promise((t=>{const n=document.createElement("script")
n.async=!0,n.onload=t,n.src=e,document.body.appendChild(n)}))}function t(e,t){return t?t.getElementById(e):document.getElementById(e)}function n(e){if(e instanceof Node)return e.textContent}let i=null
const r=()=>function(){const e=t("statbar-character")
return e&&n(e)}()||"string"==typeof window.self&&window.self
function o(){if(!i){const e=r()
e&&(i=e)}return i}function s(){!function(){e("https://www.googletagmanager.com/gtag/js?id=G-14Y99WX8XL"),window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},gtag("js",new Date)
const t=o()
t&&gtag("config","G-14Y99WX8XL",{user_id:t})}()}function a(e,t){return e.exec(t)}function u(e,t){const n=a(e,t)
if(n)return n[1]}const c=["www.keeprefreshing.com"]
let l=!1,d=!1
function f(){if(!d){const e=u(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
l=c.includes(e),d=!0}return l}function h(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?h(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var i,r,o=[],s=!0,a=!1
try{for(n=n.call(e);!(s=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);s=!0);}catch(e){a=!0,r=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw r}}return o}}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return S(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n]
return i}function E(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=k(e))||t){n&&(e=n)
var i=0,r=function(){}
return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}var x={DEBUG:!1,LIB_VERSION:"1.161.0"},P=Array.isArray,C=Object.prototype,T=C.hasOwnProperty,O=C.toString,I=P||function(e){return"[object Array]"===O.call(e)},R=function(e){return"function"==typeof e},L=function(e){return e===Object(e)&&!I(e)},F=function(e){if(L(e)){for(var t in e)if(T.call(e,t))return!1
return!0}return!1},A=function(e){return void 0===e},j=function(e){return"[object String]"==O.call(e)},M=function(e){return j(e)&&0===e.trim().length},N=function(e){return null===e},D=function(e){return A(e)||N(e)},B=function(e){return"[object Number]"==O.call(e)},q=function(e){return"[object Boolean]"===O.call(e)},H=function(e){return e instanceof FormData},U="undefined"!=typeof window?window:void 0,G="undefined"!=typeof globalThis?globalThis:U,W=Array.prototype,z=W.forEach,V=W.indexOf,Q=null==G?void 0:G.navigator,J=null==G?void 0:G.document,K=null==G?void 0:G.location,X=null==G?void 0:G.fetch,Y=null!=G&&G.XMLHttpRequest&&"withCredentials"in new G.XMLHttpRequest?G.XMLHttpRequest:void 0,Z=null==G?void 0:G.AbortController,ee=null==Q?void 0:Q.userAgent,te=null!=U?U:{},ne="[PostHog.js]",ie={_log:function(e){if(U&&(x.DEBUG||te.POSTHOG_DEBUG)&&!A(U.console)&&U.console){for(var t=("__rrweb_original__"in U.console[e]?U.console[e].__rrweb_original__:U.console[e]),n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r]
t.apply(void 0,[ne].concat(i))}},info:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
ie._log.apply(ie,["log"].concat(t))},warn:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
ie._log.apply(ie,["warn"].concat(t))},error:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
ie._log.apply(ie,["error"].concat(t))},critical:function(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=console).error.apply(e,[ne].concat(n))},uninitializedWarning:function(e){ie.error("You must initialize PostHog before calling ".concat(e))}},re={},oe=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}
function se(e,t,n){if(I(e))if(z&&e.forEach===z)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===re)return}function ae(e,t,n){if(!D(e)){if(I(e))return se(e,t,n)
if(H(e)){var i,r=E(e.entries())
try{for(r.s();!(i=r.n()).done;){var o=i.value
if(t.call(n,o[1],o[0])===re)return}}catch(e){r.e(e)}finally{r.f()}}else for(var s in e)if(T.call(e,s)&&t.call(n,e[s],s)===re)return}}var ue=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
return se(n,(function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])})),e}
function ce(e,t){return-1!==e.indexOf(t)}function le(e){for(var t=Object.keys(e),n=t.length,i=new Array(n);n--;)i[n]=[t[n],e[t[n]]]
return i}var de=function(){return Date.now=Date.now||function(){return+new Date},Date.now()},fe=function(e){try{return e()}catch(e){return}},he=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i]
return e.apply(this,n)}catch(e){ie.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),ie.critical(e)}}},pe=function(e){var t={}
return ae(e,(function(e,n){j(e)&&e.length>0&&(t[n]=e)})),t},ge=function(e){return e.replace(/^\$/,"")}
var ve,me=function(){function e(t){return t&&(t.preventDefault=e.preventDefault,t.stopPropagation=e.stopPropagation),t}return e.preventDefault=function(){this.returnValue=!1},e.stopPropagation=function(){this.cancelBubble=!0},function(t,n,i,r,o){if(t)if(t.addEventListener&&!r)t.addEventListener(n,i,!!o)
else{var s="on"+n,a=t[s]
t[s]=function(t,n,i){return function(r){if(r=r||e(null==U?void 0:U.event)){var o,s=!0
R(i)&&(o=i(r))
var a=n.call(t,r)
return!1!==o&&!1!==a||(s=!1),s}}}(t,i,a)}else ie.error("No valid element provided to register_event")}}()
function _e(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}!function(e){e.GZipJS="gzip-js",e.Base64="base64"}(ve||(ve={}))
var ye="$people_distinct_id",be="__alias",we="__timers",ke="$autocapture_disabled_server_side",Se="$heatmaps_enabled_server_side",Ee="$exception_capture_enabled_server_side",xe="$exception_capture_endpoint_suffix",Pe="$web_vitals_enabled_server_side",$e="$web_vitals_allowed_metrics",Ce="$session_recording_enabled_server_side",Te="$console_log_recording_enabled_server_side",Oe="$session_recording_network_payload_capture",Ie="$session_recording_canvas_recording",Re="$replay_sample_rate",Le="$replay_minimum_duration",Fe="$sesid",Ae="$session_is_sampled",je="$enabled_feature_flags",Me="$early_access_features",Ne="$stored_person_properties",De="$stored_group_properties",Be="$surveys",qe="$surveys_activated",He="$flag_call_reported",Ue="$user_state",Ge="$client_session_props",We="$capture_rate_limit",ze="$initial_campaign_params",Ve="$initial_referrer_info",Qe="$initial_person_info",Je="$epp",Ke="__POSTHOG_TOOLBAR__",Xe=[ye,be,"__cmpns",we,Ce,Se,Fe,je,Ue,Me,De,Ne,Be,He,Ge,We,ze,Ve,Je],Ye="$active_feature_flags",Ze="$override_feature_flags",et="$feature_flag_payloads",tt=function(e){var t,n={},i=E(le(e||{}))
try{for(i.s();!(t=i.n()).done;){var r=b(t.value,2),o=r[0],s=r[1]
s&&(n[o]=s)}}catch(e){i.e(e)}finally{i.f()}return n},nt=function(){function e(t){v(this,e),this.instance=t,this._override_warning=!1,this.featureFlagEventHandlers=[],this.reloadFeatureFlagsQueued=!1,this.reloadFeatureFlagsInAction=!1}return _(e,[{key:"getFlags",value:function(){return Object.keys(this.getFlagVariants())}},{key:"getFlagVariants",value:function(){var e=this.instance.get_property(je),t=this.instance.get_property(Ze)
if(!t)return e||{}
for(var n=ue({},e),i=Object.keys(t),r=0;r<i.length;r++)n[i[r]]=t[i[r]]
return this._override_warning||(ie.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}},{key:"getFlagPayloads",value:function(){return this.instance.get_property(et)||{}}},{key:"reloadFeatureFlags",value:function(){this.reloadFeatureFlagsQueued||(this.reloadFeatureFlagsQueued=!0,this._startReloadTimer())}},{key:"setAnonymousDistinctId",value:function(e){this.$anon_distinct_id=e}},{key:"setReloadingPaused",value:function(e){this.reloadFeatureFlagsInAction=e}},{key:"resetRequestQueue",value:function(){this.reloadFeatureFlagsQueued=!1}},{key:"_startReloadTimer",value:function(){var e=this
this.reloadFeatureFlagsQueued&&!this.reloadFeatureFlagsInAction&&setTimeout((function(){!e.reloadFeatureFlagsInAction&&e.reloadFeatureFlagsQueued&&(e.reloadFeatureFlagsQueued=!1,e._reloadFeatureFlagsRequest())}),5)}},{key:"_reloadFeatureFlagsRequest",value:function(){var e=this
if(!this.instance.config.advanced_disable_feature_flags){this.setReloadingPaused(!0)
var t=this.instance.config.token,n=this.instance.get_property(Ne),i=this.instance.get_property(De),r={token:t,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:n,group_properties:i,disable_flags:this.instance.config.advanced_disable_feature_flags||void 0}
this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:r,compression:this.instance.config.disable_compression?void 0:ve.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:function(t){var n
e.setReloadingPaused(!1)
var i=!0
200===t.statusCode&&(e.$anon_distinct_id=void 0,i=!1),e.receivedFeatureFlags(null!==(n=t.json)&&void 0!==n?n:{},i),e._startReloadTimer()}})}}},{key:"getFeatureFlag",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this.instance.decideEndpointWasHit||this.getFlags()&&this.getFlags().length>0){var n,i=this.getFlagVariants()[e],r="".concat(i),o=this.instance.get_property(He)||{}
return!t.send_event&&"send_event"in t||e in o&&o[e].includes(r)||(I(o[e])?o[e].push(r):o[e]=[r],null===(n=this.instance.persistence)||void 0===n||n.register(y({},He,o)),this.instance.capture("$feature_flag_called",{$feature_flag:e,$feature_flag_response:i})),i}ie.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}},{key:"getFeatureFlagPayload",value:function(e){return this.getFlagPayloads()[e]}},{key:"isFeatureEnabled",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this.instance.decideEndpointWasHit||this.getFlags()&&this.getFlags().length>0)return!!this.getFeatureFlag(e,t)
ie.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}},{key:"addFeatureFlagsHandler",value:function(e){this.featureFlagEventHandlers.push(e)}},{key:"removeFeatureFlagsHandler",value:function(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter((function(t){return t!==e}))}},{key:"receivedFeatureFlags",value:function(e,t){if(this.instance.persistence){this.instance.decideEndpointWasHit=!0
var n=this.getFlagVariants(),i=this.getFlagPayloads()
!function(e,t){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e.featureFlags,s=e.featureFlagPayloads
if(o)if(I(o)){var a,u={}
if(o)for(var c=0;c<o.length;c++)u[o[c]]=!0
t&&t.register((y(a={},Ye,o),y(a,je,u),a))}else{var l=o,d=s
e.errorsWhileComputingFlags&&(l=p(p({},i),l),d=p(p({},r),d)),t&&t.register((y(n={},Ye,Object.keys(tt(l))),y(n,je,l||{}),y(n,et,d||{}),n))}}(e,this.instance.persistence,n,i),this._fireFeatureFlagsCallbacks(t)}}},{key:"override",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(!this.instance.__loaded||!this.instance.persistence)return ie.uninitializedWarning("posthog.feature_flags.override")
if(this._override_warning=t,!1===e)this.instance.persistence.unregister(Ze)
else if(I(e)){for(var n={},i=0;i<e.length;i++)n[e[i]]=!0
this.instance.persistence.register(y({},Ze,n))}else this.instance.persistence.register(y({},Ze,e))}},{key:"onFeatureFlags",value:function(e){var t=this
if(this.addFeatureFlagsHandler(e),this.instance.decideEndpointWasHit){var n=this._prepareFeatureFlagsForCallbacks(),i=n.flags,r=n.flagVariants
e(i,r)}return function(){return t.removeFeatureFlagsHandler(e)}}},{key:"updateEarlyAccessFeatureEnrollment",value:function(e,t){var n,i,r=y({},"$feature_enrollment/".concat(e),t)
this.instance.capture("$feature_enrollment_update",{$feature_flag:e,$feature_enrollment:t,$set:r}),this.setPersonPropertiesForFlags(r,!1)
var o=p(p({},this.getFlagVariants()),{},y({},e,t))
null===(n=this.instance.persistence)||void 0===n||n.register((y(i={},Ye,Object.keys(tt(o))),y(i,je,o),i)),this._fireFeatureFlagsCallbacks()}},{key:"getEarlyAccessFeatures",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.instance.get_property(Me)
if(i&&!n)return e(i)
this.instance._send_request({transport:"XHR",url:this.instance.requestRouter.endpointFor("api","/api/early_access_features/?token=".concat(this.instance.config.token)),method:"GET",callback:function(n){var i
if(n.json){var r=n.json.earlyAccessFeatures
return null===(i=t.instance.persistence)||void 0===i||i.register(y({},Me,r)),e(r)}}})}},{key:"_prepareFeatureFlagsForCallbacks",value:function(){var e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter((function(e){return t[e]})),flagVariants:Object.keys(t).filter((function(e){return t[e]})).reduce((function(e,n){return e[n]=t[n],e}),{})}}},{key:"_fireFeatureFlagsCallbacks",value:function(e){var t=this._prepareFeatureFlagsForCallbacks(),n=t.flags,i=t.flagVariants
this.featureFlagEventHandlers.forEach((function(t){return t(n,i,{errorsLoading:e})}))}},{key:"setPersonPropertiesForFlags",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.instance.get_property(Ne)||{}
this.instance.register(y({},Ne,p(p({},n),e))),t&&this.instance.reloadFeatureFlags()}},{key:"resetPersonPropertiesForFlags",value:function(){this.instance.unregister(Ne)}},{key:"setGroupPropertiesForFlags",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.instance.get_property(De)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach((function(t){n[t]=p(p({},n[t]),e[t]),delete e[t]})),this.instance.register(y({},De,p(p({},n),e))),t&&this.instance.reloadFeatureFlags()}},{key:"resetGroupPropertiesForFlags",value:function(e){if(e){var t=this.instance.get_property(De)||{}
this.instance.register(y({},De,p(p({},t),{},y({},e,{}))))}else this.instance.unregister(De)}}]),e}()
Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return B(e)&&isFinite(e)&&Math.floor(e)===e})
var it="0123456789abcdef",rt=function(){function e(t){if(v(this,e),this.bytes=t,16!==t.length)throw new TypeError("not 128-bit length")}return _(e,[{key:"toString",value:function(){for(var e="",t=0;t<this.bytes.length;t++)e=e+it.charAt(this.bytes[t]>>>4)+it.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}},{key:"clone",value:function(){return new e(this.bytes.slice(0))}},{key:"equals",value:function(e){return 0===this.compareTo(e)}},{key:"compareTo",value:function(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}],[{key:"fromFieldsV7",value:function(t,n,i,r){if(!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(i)||!Number.isInteger(r)||t<0||n<0||i<0||r<0||t>0xffffffffffff||n>4095||i>1073741823||r>4294967295)throw new RangeError("invalid field value")
var o=new Uint8Array(16)
return o[0]=t/Math.pow(2,40),o[1]=t/Math.pow(2,32),o[2]=t/Math.pow(2,24),o[3]=t/Math.pow(2,16),o[4]=t/Math.pow(2,8),o[5]=t,o[6]=112|n>>>8,o[7]=n,o[8]=128|i>>>24,o[9]=i>>>16,o[10]=i>>>8,o[11]=i,o[12]=r>>>24,o[13]=r>>>16,o[14]=r>>>8,o[15]=r,new e(o)}}]),e}(),ot=function(){function e(){v(this,e),y(this,"timestamp",0),y(this,"counter",0),y(this,"random",new ut)}return _(e,[{key:"generate",value:function(){var e=this.generateOrAbort()
if(A(e)){this.timestamp=0
var t=this.generateOrAbort()
if(A(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}},{key:"generateOrAbort",value:function(){var e=Date.now()
if(e>this.timestamp)this.timestamp=e,this.resetCounter()
else{if(!(e+1e4>this.timestamp))return
this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter())}return rt.fromFieldsV7(this.timestamp,Math.trunc(this.counter/Math.pow(2,30)),this.counter&Math.pow(2,30)-1,this.random.nextUint32())}},{key:"resetCounter",value:function(){this.counter=1024*this.random.nextUint32()+(1023&this.random.nextUint32())}}]),e}(),st=function(e){if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
U&&!A(U.crypto)&&crypto.getRandomValues&&(st=function(e){return crypto.getRandomValues(e)})
var at,ut=function(){function e(){v(this,e),y(this,"buffer",new Uint32Array(8)),y(this,"cursor",1/0)}return _(e,[{key:"nextUint32",value:function(){return this.cursor>=this.buffer.length&&(st(this.buffer),this.cursor=0),this.buffer[this.cursor++]}}]),e}(),ct=function(){return lt().toString()},lt=function(){return(at||(at=new ot)).generate()},dt="",ft=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
var ht,pt={is_supported:function(){return!!J},error:function(e){ie.error("cookieStore error: "+e)},get:function(e){if(J){try{for(var t=e+"=",n=J.cookie.split(";").filter((function(e){return e.length})),i=0;i<n.length;i++){for(var r=n[i];" "==r.charAt(0);)r=r.substring(1,r.length)
if(0===r.indexOf(t))return decodeURIComponent(r.substring(t.length,r.length))}}catch(e){}return null}},parse:function(e){var t
try{t=JSON.parse(pt.get(e))||{}}catch(e){}return t},set:function(e,t,n,i,r){if(J)try{var o="",s="",a=function(e,t){if(t){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J
if(dt)return dt
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
for(var n=e.split("."),i=Math.min(n.length,8),r="dmn_chk_"+ct(),o=new RegExp("(^|;)\\s*"+r+"=1");!dt&&i--;){var s=n.slice(i).join("."),a=r+"=1;domain=."+s
t.cookie=a,o.test(t.cookie)&&(t.cookie=a+";expires=Thu, 01 Jan 1970 00:00:00 GMT",dt=s)}return dt}(e)
if(!n){var i=function(e){var t=e.match(ft)
return t?t[0]:""}(e)
i!==n&&ie.info("Warning: cookie subdomain discovery mismatch",i,n),n=i}return n?"; domain=."+n:""}return""}(J.location.hostname,i)
if(n){var u=new Date
u.setTime(u.getTime()+24*n*60*60*1e3),o="; expires="+u.toUTCString()}r&&(s="; secure")
var c=e+"="+encodeURIComponent(JSON.stringify(t))+o+"; SameSite=Lax; path=/"+a+s
return c.length>3686.4&&ie.warn("cookieStore warning: large cookie, len="+c.length),J.cookie=c,c}catch(e){return}},remove:function(e,t){try{pt.set(e,"",-1,t)}catch(e){return}}},gt=null,vt={is_supported:function(){if(!N(gt))return gt
var e=!0
if(A(U))e=!1
else try{var t="__mplssupport__"
vt.set(t,"xyz"),'"xyz"'!==vt.get(t)&&(e=!1),vt.remove(t)}catch(t){e=!1}return e||ie.error("localStorage unsupported; falling back to cookie store"),gt=e,e},error:function(e){ie.error("localStorage error: "+e)},get:function(e){try{return null==U?void 0:U.localStorage.getItem(e)}catch(e){vt.error(e)}return null},parse:function(e){try{return JSON.parse(vt.get(e))||{}}catch(e){}return null},set:function(e,t){try{null==U||U.localStorage.setItem(e,JSON.stringify(t))}catch(e){vt.error(e)}},remove:function(e){try{null==U||U.localStorage.removeItem(e)}catch(e){vt.error(e)}}},mt=["distinct_id",Fe,Ae,Je],_t=p(p({},vt),{},{parse:function(e){try{var t={}
try{t=pt.parse(e)||{}}catch(e){}var n=ue(t,JSON.parse(vt.get(e)||"{}"))
return vt.set(e,n),n}catch(e){}return null},set:function(e,t,n,i,r,o){try{vt.set(e,t,void 0,void 0,o)
var s={}
mt.forEach((function(e){t[e]&&(s[e]=t[e])})),Object.keys(s).length&&pt.set(e,s,n,i,r,o)}catch(e){vt.error(e)}},remove:function(e,t){try{null==U||U.localStorage.removeItem(e),pt.remove(e,t)}catch(e){vt.error(e)}}}),yt={},bt={is_supported:function(){return!0},error:function(e){ie.error("memoryStorage error: "+e)},get:function(e){return yt[e]||null},parse:function(e){return yt[e]||null},set:function(e,t){yt[e]=t},remove:function(e){delete yt[e]}},wt=null,kt={is_supported:function(){if(!N(wt))return wt
if(wt=!0,A(U))wt=!1
else try{var e="__support__"
kt.set(e,"xyz"),'"xyz"'!==kt.get(e)&&(wt=!1),kt.remove(e)}catch(e){wt=!1}return wt},error:function(e){ie.error("sessionStorage error: ",e)},get:function(e){try{return null==U?void 0:U.sessionStorage.getItem(e)}catch(e){kt.error(e)}return null},parse:function(e){try{return JSON.parse(kt.get(e))||null}catch(e){}return null},set:function(e,t){try{null==U||U.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){kt.error(e)}},remove:function(e){try{null==U||U.sessionStorage.removeItem(e)}catch(e){kt.error(e)}}},St=["localhost","127.0.0.1"],Et=function(e){var t=null==J?void 0:J.createElement("a")
return A(t)?null:(t.href=e,t)},xt=function(e,t){return!!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t)&&new RegExp(t).test(e)},Pt=function(e,t){for(var n,i=((e.split("#")[0]||"").split("?")[1]||"").split("&"),r=0;r<i.length;r++){var o=i[r].split("=")
if(o[0]===t){n=o
break}}if(!I(n)||n.length<2)return""
var s=n[1]
try{s=decodeURIComponent(s)}catch(e){ie.error("Skipping decoding for malformed query param: "+s)}return s.replace(/\+/g," ")},$t=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},Ct="Mobile",Tt="iOS",Ot="Android",It="Tablet",Rt=Ot+" "+It,Lt="iPad",Ft="Apple",At=Ft+" Watch",jt="Safari",Mt="BlackBerry",Nt="Samsung",Dt=Nt+"Browser",Bt=Nt+" Internet",qt="Chrome",Ht=qt+" OS",Ut=qt+" "+Tt,Gt="Internet Explorer",Wt=Gt+" "+Ct,zt="Opera",Vt=zt+" Mini",Qt="Edge",Jt="Microsoft "+Qt,Kt="Firefox",Xt=Kt+" "+Tt,Yt="Nintendo",Zt="PlayStation",en="Xbox",tn=Ot+" "+Ct,nn=Ct+" "+jt,rn="Windows",on=rn+" Phone",sn="Nokia",an="Ouya",un="Generic",cn=un+" "+Ct.toLowerCase(),ln=un+" "+It.toLowerCase(),dn="Konqueror",fn="(\\d+(\\.\\d+)?)",hn=new RegExp("Version/"+fn),pn=new RegExp(en,"i"),gn=new RegExp(Zt+" \\w+","i"),vn=new RegExp(Yt+" \\w+","i"),mn=new RegExp(Mt+"|PlayBook|BB10","i"),_n={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},yn=function(e,t){return t=t||"",ce(e," OPR/")&&ce(e,"Mini")?Vt:ce(e," OPR/")?zt:mn.test(e)?Mt:ce(e,"IE"+Ct)||ce(e,"WPDesktop")?Wt:ce(e,Dt)?Bt:ce(e,Qt)||ce(e,"Edg/")?Jt:ce(e,"FBIOS")?"Facebook "+Ct:ce(e,"UCWEB")||ce(e,"UCBrowser")?"UC Browser":ce(e,"CriOS")?Ut:ce(e,"CrMo")?qt:ce(e,Ot)&&ce(e,jt)?tn:ce(e,qt)?qt:ce(e,"FxiOS")?Xt:ce(e.toLowerCase(),dn.toLowerCase())?dn:function(e,t){return t&&ce(t,Ft)||function(e){return ce(e,jt)&&!ce(e,qt)&&!ce(e,Ot)}(e)}(e,t)?ce(e,Ct)?nn:jt:ce(e,Kt)?Kt:ce(e,"MSIE")||ce(e,"Trident/")?Gt:ce(e,"Gecko")?Kt:""},bn=(y(ht={},Wt,[new RegExp("rv:"+fn)]),y(ht,Jt,[new RegExp(Qt+"?\\/"+fn)]),y(ht,qt,[new RegExp("("+qt+"|CrMo)\\/"+fn)]),y(ht,Ut,[new RegExp("CriOS\\/"+fn)]),y(ht,"UC Browser",[new RegExp("(UCBrowser|UCWEB)\\/"+fn)]),y(ht,jt,[hn]),y(ht,nn,[hn]),y(ht,zt,[new RegExp("(Opera|OPR)\\/"+fn)]),y(ht,Kt,[new RegExp(Kt+"\\/"+fn)]),y(ht,Xt,[new RegExp("FxiOS\\/"+fn)]),y(ht,dn,[new RegExp("Konqueror[:/]?"+fn,"i")]),y(ht,Mt,[new RegExp(Mt+" "+fn),hn]),y(ht,tn,[new RegExp("android\\s"+fn,"i")]),y(ht,Bt,[new RegExp(Dt+"\\/"+fn)]),y(ht,Gt,[new RegExp("(rv:|MSIE )"+fn)]),y(ht,"Mozilla",[new RegExp("rv:"+fn)]),ht),wn=[[new RegExp(en+"; "+en+" (.*?)[);]","i"),function(e){return[en,e&&e[1]||""]}],[new RegExp(Yt,"i"),[Yt,""]],[new RegExp(Zt,"i"),[Zt,""]],[mn,[Mt,""]],[new RegExp(rn,"i"),function(e,t){if(/Phone/.test(t)||/WPDesktop/.test(t))return[on,""]
if(new RegExp(Ct).test(t)&&!/IEMobile\b/.test(t))return[rn+" "+Ct,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var i=n[1],r=_n[i]||""
return/arm/i.test(t)&&(r="RT"),[rn,r]}return[rn,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,function(e){if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[Tt,t.join(".")]}return[Tt,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,function(e){var t=""
return e&&e.length>=3&&(t=A(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+Ot+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+Ot+")","i"),function(e){if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[Ot,t.join(".")]}return[Ot,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,function(e){var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[Ht,""]],[/Linux|debian/i,["Linux",""]]],kn=function(e){return vn.test(e)?Yt:gn.test(e)?Zt:pn.test(e)?en:new RegExp(an,"i").test(e)?an:new RegExp("("+on+"|WPDesktop)","i").test(e)?on:/iPad/.test(e)?Lt:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?At:mn.test(e)?Mt:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(sn,"i").test(e)?sn:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(Ct).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?Ot:Rt:Ot:new RegExp("(pda|"+Ct+")","i").test(e)?cn:new RegExp(It,"i").test(e)&&!new RegExp(It+" pc","i").test(e)?ln:""},Sn="https?://(.*)",En=["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gclid","gad_source","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","mc_cid","igshid","ttclid","rdt_cid"],xn={campaignParams:function(e){return J?this._campaignParamsFromUrl(J.URL,e):{}},_campaignParamsFromUrl:function(e,t){var n=En.concat(t||[]),i={}
return ae(n,(function(t){var n=Pt(e,t)
n&&(i[t]=n)})),i},_searchEngine:function(e){return e?0===e.search(Sn+"google.([^/?]*)")?"google":0===e.search(Sn+"bing.com")?"bing":0===e.search(Sn+"yahoo.com")?"yahoo":0===e.search(Sn+"duckduckgo.com")?"duckduckgo":null:null},_searchInfoFromReferrer:function(e){var t=xn._searchEngine(e),n="yahoo"!=t?"q":"p",i={}
if(!N(t)){i.$search_engine=t
var r=J?Pt(J.referrer,n):""
r.length&&(i.ph_keyword=r)}return i},searchInfo:function(){var e=null==J?void 0:J.referrer
return e?this._searchInfoFromReferrer(e):{}},browser:yn,browserVersion:function(e,t){var n=yn(e,t),i=bn[n]
if(A(i))return null
for(var r=0;r<i.length;r++){var o=i[r],s=e.match(o)
if(s)return parseFloat(s[s.length-2])}return null},browserLanguage:function(){return navigator.language||navigator.userLanguage},os:function(e){for(var t=0;t<wn.length;t++){var n=b(wn[t],2),i=n[0],r=n[1],o=i.exec(e),s=o&&(R(r)?r(o,e):r)
if(s)return s}return["",""]},device:kn,deviceType:function(e){var t=kn(e)
return t===Lt||t===Rt||"Kobo"===t||"Kindle Fire"===t||t===ln?It:t===Yt||t===en||t===Zt||t===an?"Console":t===At?"Wearable":t?Ct:"Desktop"},referrer:function(){return(null==J?void 0:J.referrer)||"$direct"},referringDomain:function(){var e
return null!=J&&J.referrer&&(null===(e=Et(J.referrer))||void 0===e?void 0:e.host)||"$direct"},referrerInfo:function(){return{$referrer:this.referrer(),$referring_domain:this.referringDomain()}},initialPersonInfo:function(){return{r:this.referrer(),u:null==K?void 0:K.href}},initialPersonPropsFromInfo:function(e){var t,n=e.r,i=e.u,r={$initial_referrer:n,$initial_referring_domain:null==n?void 0:"$direct"==n?"$direct":null===(t=Et(n))||void 0===t?void 0:t.host}
if(i){r.$initial_current_url=i
var o=Et(i)
r.$initial_host=null==o?void 0:o.host,r.$initial_pathname=null==o?void 0:o.pathname,ae(this._campaignParamsFromUrl(i),(function(e,t){r["$initial_"+ge(t)]=e}))}return n&&ae(this._searchInfoFromReferrer(n),(function(e,t){r["$initial_"+ge(t)]=e})),r},properties:function(){if(!ee)return{}
var e=b(xn.os(ee),2),t=e[0],n=e[1]
return ue(pe({$os:t,$os_version:n,$browser:xn.browser(ee,navigator.vendor),$device:xn.device(ee),$device_type:xn.deviceType(ee)}),{$current_url:null==K?void 0:K.href,$host:null==K?void 0:K.host,$pathname:null==K?void 0:K.pathname,$raw_user_agent:ee.length>1e3?ee.substring(0,997)+"...":ee,$browser_version:xn.browserVersion(ee,navigator.vendor),$browser_language:xn.browserLanguage(),$screen_height:null==U?void 0:U.screen.height,$screen_width:null==U?void 0:U.screen.width,$viewport_height:null==U?void 0:U.innerHeight,$viewport_width:null==U?void 0:U.innerWidth,$lib:"web",$lib_version:x.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:de()/1e3})},people_properties:function(){if(!ee)return{}
var e=b(xn.os(ee),2),t=e[0],n=e[1]
return ue(pe({$os:t,$os_version:n,$browser:xn.browser(ee,navigator.vendor)}),{$browser_version:xn.browserVersion(ee,navigator.vendor)})}},Pn=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"],$n=function(){function e(t){v(this,e),this.config=t,this.props={},this.campaign_params_saved=!1,this.name=function(e){var t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"}(t),this.storage=this.buildStorage(t),this.load(),t.debug&&ie.info("Persistence loaded",t.persistence,p({},this.props)),this.update_config(t,t),this.save()}return _(e,[{key:"buildStorage",value:function(e){-1===Pn.indexOf(e.persistence.toLowerCase())&&(ie.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
var t=e.persistence.toLowerCase()
return"localstorage"===t&&vt.is_supported()?vt:"localstorage+cookie"===t&&_t.is_supported()?_t:"sessionstorage"===t&&kt.is_supported()?kt:"memory"===t?bt:"cookie"===t?pt:_t.is_supported()?_t:pt}},{key:"properties",value:function(){var e={}
return ae(this.props,(function(t,n){if(n===je&&L(t))for(var i=Object.keys(t),r=0;r<i.length;r++)e["$feature/".concat(i[r])]=t[i[r]]
else s=n,a=!1,(N(o=Xe)?a:V&&o.indexOf===V?-1!=o.indexOf(s):(ae(o,(function(e){if(a||(a=e===s))return re})),a))||(e[n]=t)
var o,s,a})),e}},{key:"load",value:function(){if(!this.disabled){var e=this.storage.parse(this.name)
e&&(this.props=ue({},e))}}},{key:"save",value:function(){this.disabled||this.storage.set(this.name,this.props,this.expire_days,this.cross_subdomain,this.secure,this.config.debug)}},{key:"remove",value:function(){this.storage.remove(this.name,!1),this.storage.remove(this.name,!0)}},{key:"clear",value:function(){this.remove(),this.props={}}},{key:"register_once",value:function(e,t,n){var i=this
if(L(e)){A(t)&&(t="None"),this.expire_days=A(n)?this.default_expiry:n
var r=!1
if(ae(e,(function(e,n){i.props.hasOwnProperty(n)&&i.props[n]!==t||(i.props[n]=e,r=!0)})),r)return this.save(),!0}return!1}},{key:"register",value:function(e,t){var n=this
if(L(e)){this.expire_days=A(t)?this.default_expiry:t
var i=!1
if(ae(e,(function(t,r){e.hasOwnProperty(r)&&n.props[r]!==t&&(n.props[r]=t,i=!0)})),i)return this.save(),!0}return!1}},{key:"unregister",value:function(e){e in this.props&&(delete this.props[e],this.save())}},{key:"update_campaign_params",value:function(){this.campaign_params_saved||(this.register(xn.campaignParams(this.config.custom_campaign_params)),this.campaign_params_saved=!0)}},{key:"update_search_keyword",value:function(){this.register(xn.searchInfo())}},{key:"update_referrer_info",value:function(){this.register_once(xn.referrerInfo(),void 0)}},{key:"set_initial_person_info",value:function(){this.props[ze]||this.props[Ve]||this.register_once(y({},Qe,xn.initialPersonInfo()),void 0)}},{key:"get_referrer_info",value:function(){return pe({$referrer:this.props.$referrer,$referring_domain:this.props.$referring_domain})}},{key:"get_initial_props",value:function(){var e=this,t={}
ae([Ve,ze],(function(n){var i=e.props[n]
i&&ae(i,(function(e,n){t["$initial_"+ge(n)]=e}))}))
var n=this.props[Qe]
if(n){var i=xn.initialPersonPropsFromInfo(n)
ue(t,i)}return t}},{key:"safe_merge",value:function(e){return ae(this.props,(function(t,n){n in e||(e[n]=t)})),e}},{key:"update_config",value:function(e,t){if(this.default_expiry=this.expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var n=this.buildStorage(e),i=this.props
this.clear(),this.storage=n,this.props=i,this.save()}}},{key:"set_disabled",value:function(e){this.disabled=e,this.disabled?this.remove():this.save()}},{key:"set_cross_subdomain",value:function(e){e!==this.cross_subdomain&&(this.cross_subdomain=e,this.remove(),this.save())}},{key:"get_cross_subdomain",value:function(){return!!this.cross_subdomain}},{key:"set_secure",value:function(e){e!==this.secure&&(this.secure=e,this.remove(),this.save())}},{key:"set_event_timer",value:function(e,t){var n=this.props[we]||{}
n[e]=t,this.props[we]=n,this.save()}},{key:"remove_event_timer",value:function(e){var t=(this.props[we]||{})[e]
return A(t)||(delete this.props[we][e],this.save()),t}},{key:"get_property",value:function(e){return this.props[e]}},{key:"set_property",value:function(e,t){this.props[e]=t,this.save()}}]),e}()
function Cn(e){return JSON.stringify(e,(t=[],function(e,n){if(L(n)){for(;t.length>0&&t.at(-1)!==this;)t.pop()
return t.includes(n)?"[Circular]":(t.push(n),n)}return n})).length
var t}var Tn=2,On=4
function In(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6606028.8
if(e.size>=t&&e.data.length>1){var n=Math.floor(e.data.length/2),i=e.data.slice(0,n),r=e.data.slice(n)
return[In({size:Cn(i),data:i,sessionId:e.sessionId,windowId:e.windowId}),In({size:Cn(r),data:r,sessionId:e.sessionId,windowId:e.windowId})].flatMap((function(e){return e}))}return[e]}var Rn=function(e){return e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e}(Rn||{}),Ln=function(e){return e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e}(Ln||{})
function Fn(e){return e?oe(e).split(/\s+/):[]}function An(e){var t=null==U?void 0:U.location.href
return!!(t&&e&&e.some((function(e){return t.match(e)})))}function jn(e){var t=""
switch(g(e.className)){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return Fn(t)}function Mn(e){return D(e)?null:oe(e).split(/(\s+)/).filter((function(e){return ei(e)})).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function Nn(e){var t=""
return zn(e)&&!Vn(e)&&e.childNodes&&e.childNodes.length&&ae(e.childNodes,(function(e){var n
qn(e)&&e.textContent&&(t+=null!==(n=Mn(e.textContent))&&void 0!==n?n:"")})),oe(t)}function Dn(e){return!!e&&1===e.nodeType}function Bn(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function qn(e){return!!e&&3===e.nodeType}function Hn(e){return!!e&&11===e.nodeType}var Un=["a","button","form","input","select","textarea","label"]
function Gn(e){var t=e.parentNode
return!(!t||!Dn(t))&&t}function Wn(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0
if(!U||!e||Bn(e,"html")||!Dn(e))return!1
if(null!=n&&n.url_allowlist&&!An(n.url_allowlist))return!1
if(null!=n&&n.url_ignorelist&&An(n.url_ignorelist))return!1
if(null!=n&&n.dom_event_allowlist){var o=n.dom_event_allowlist
if(o&&!o.some((function(e){return t.type===e})))return!1}for(var s=!1,a=[e],u=!0,c=e;c.parentNode&&!Bn(c,"body");)if(Hn(c.parentNode))a.push(c.parentNode.host),c=c.parentNode.host
else{if(!(u=Gn(c)))break
if(i||Un.indexOf(u.tagName.toLowerCase())>-1)s=!0
else{var l=U.getComputedStyle(u)
l&&"pointer"===l.getPropertyValue("cursor")&&(s=!0)}a.push(u),c=u}if(!function(e,t){var n=null==t?void 0:t.element_allowlist
if(A(n))return!0
var i,r=E(e)
try{var o=function(){var e=i.value
if(n.some((function(t){return e.tagName.toLowerCase()===t})))return{v:!0}}
for(r.s();!(i=r.n()).done;){var s=o()
if("object"===g(s))return s.v}}catch(e){r.e(e)}finally{r.f()}return!1}(a,n))return!1
if(!function(e,t){var n=null==t?void 0:t.css_selector_allowlist
if(A(n))return!0
var i,r=E(e)
try{var o=function(){var e=i.value
if(n.some((function(t){return e.matches(t)})))return{v:!0}}
for(r.s();!(i=r.n()).done;){var s=o()
if("object"===g(s))return s.v}}catch(e){r.e(e)}finally{r.f()}return!1}(a,n))return!1
var d=U.getComputedStyle(e)
if(d&&"pointer"===d.getPropertyValue("cursor")&&"click"===t.type)return!0
var f=e.tagName.toLowerCase()
switch(f){case"html":return!1
case"form":return(r||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(r||["change","click"]).indexOf(t.type)>=0
default:return s?(r||["click"]).indexOf(t.type)>=0:(r||["click"]).indexOf(t.type)>=0&&(Un.indexOf(f)>-1||"true"===e.getAttribute("contenteditable"))}}function zn(e){for(var t=e;t.parentNode&&!Bn(t,"body");t=t.parentNode){var n=jn(t)
if(ce(n,"ph-sensitive")||ce(n,"ph-no-capture"))return!1}if(ce(jn(e),"ph-include"))return!0
var i=e.type||""
if(j(i))switch(i.toLowerCase()){case"hidden":case"password":return!1}var r=e.name||e.id||""
return!j(r)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g,""))}function Vn(e){return!!(Bn(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||Bn(e,"select")||Bn(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var Qn="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",Jn=new RegExp("^(?:".concat(Qn,")$")),Kn=new RegExp(Qn),Xn="\\d{3}-?\\d{2}-?\\d{4}",Yn=new RegExp("^(".concat(Xn,")$")),Zn=new RegExp("(".concat(Xn,")"))
function ei(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(D(e))return!1
if(j(e)){if(e=oe(e),(t?Jn:Kn).test((e||"").replace(/[- ]/g,"")))return!1
if((t?Yn:Zn).test(e))return!1}return!0}function ti(e){var t=Nn(e)
return ei(t="".concat(t," ").concat(ni(e)).trim())?t:""}function ni(e){var t=""
return e&&e.childNodes&&e.childNodes.length&&ae(e.childNodes,(function(e){var n
if(e&&"span"===(null===(n=e.tagName)||void 0===n?void 0:n.toLowerCase()))try{var i=Nn(e)
t="".concat(t," ").concat(i).trim(),e.childNodes&&e.childNodes.length&&(t="".concat(t," ").concat(ni(e)).trim())}catch(e){ie.error(e)}})),t}function ii(e){return function(e){var t=e.map((function(e){var t,n,i=""
if(e.tag_name&&(i+=e.tag_name),e.attr_class){e.attr_class.sort()
var r,o=E(e.attr_class)
try{for(o.s();!(r=o.n()).done;){var s=r.value
i+=".".concat(s.replace(/"/g,""))}}catch(e){o.e(e)}finally{o.f()}}var a=p(p(p(p({},e.text?{text:e.text}:{}),{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0},e.href?{href:e.href}:{}),e.attr_id?{attr_id:e.attr_id}:{}),e.attributes),u={}
return le(a).sort((function(e,t){var n=b(e,1)[0],i=b(t,1)[0]
return n.localeCompare(i)})).forEach((function(e){var t=b(e,2),n=t[0],i=t[1]
return u[ri(n.toString())]=ri(i.toString())})),(i+=":")+le(a).map((function(e){var t=b(e,2),n=t[0],i=t[1]
return"".concat(n,'="').concat(i,'"')})).join("")}))
return t.join(";")}(function(e){return e.map((function(e){var t,n,i={text:null===(t=e.$el_text)||void 0===t?void 0:t.slice(0,400),tag_name:e.tag_name,href:null===(n=e.attr__href)||void 0===n?void 0:n.slice(0,2048),attr_class:oi(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return le(e).filter((function(e){return 0===b(e,1)[0].indexOf("attr__")})).forEach((function(e){var t=b(e,2),n=t[0],r=t[1]
return i.attributes[n]=r})),i}))}(e))}function ri(e){return e.replace(/"|\\"/g,'\\"')}function oi(e){var t=e.attr__class
return t?I(t)?t:Fn(t):void 0}var si="[SessionRecording]",ai="redacted",ui={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:function(e){return e},recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io"]},ci=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],li=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],di=["/s/","/e/","/i/"]
function fi(e,t,n,i){if(D(e))return e
var r=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e)
return j(r)&&(r=parseInt(r)),r>n?si+" ".concat(i," body too large to record (").concat(r," bytes)"):e}function hi(e,t){if(D(e))return e
var n=e
return ei(n,!1)||(n=si+" "+t+" body "+ai),ae(li,(function(e){var i,r
null!==(i=n)&&void 0!==i&&i.length&&-1!==(null===(r=n)||void 0===r?void 0:r.indexOf(e))&&(n=si+" "+t+" body "+ai+" as might contain: "+e)})),n}var pi,gi=_((function e(t){var n,i,r=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
v(this,e),y(this,"bucketSize",100),y(this,"refillRate",10),y(this,"mutationBuckets",{}),y(this,"loggedTracker",{}),y(this,"refillBuckets",(function(){Object.keys(r.mutationBuckets).forEach((function(e){r.mutationBuckets[e]=r.mutationBuckets[e]+r.refillRate,r.mutationBuckets[e]>=r.bucketSize&&delete r.mutationBuckets[e]}))})),y(this,"getNodeOrRelevantParent",(function(e){var t=r.rrweb.mirror.getNode(e)
if("svg"!==(null==t?void 0:t.nodeName)&&t instanceof Element){var n=t.closest("svg")
if(n)return[r.rrweb.mirror.getId(n),n]}return[e,t]})),y(this,"numberOfChanges",(function(e){var t,n,i,r,o,s,a,u
return(null!==(t=null===(n=e.removes)||void 0===n?void 0:n.length)&&void 0!==t?t:0)+(null!==(i=null===(r=e.attributes)||void 0===r?void 0:r.length)&&void 0!==i?i:0)+(null!==(o=null===(s=e.texts)||void 0===s?void 0:s.length)&&void 0!==o?o:0)+(null!==(a=null===(u=e.adds)||void 0===u?void 0:u.length)&&void 0!==a?a:0)})),y(this,"throttleMutations",(function(e){if(3!==e.type||0!==e.data.source)return e
var t=e.data,n=r.numberOfChanges(t)
t.attributes&&(t.attributes=t.attributes.filter((function(e){var t,n,i,o=b(r.getNodeOrRelevantParent(e.id),2),s=o[0],a=o[1]
return 0!==r.mutationBuckets[s]&&(r.mutationBuckets[s]=null!==(t=r.mutationBuckets[s])&&void 0!==t?t:r.bucketSize,r.mutationBuckets[s]=Math.max(r.mutationBuckets[s]-1,0),0===r.mutationBuckets[s]&&(r.loggedTracker[s]||(r.loggedTracker[s]=!0,null===(n=(i=r.options).onBlockedNode)||void 0===n||n.call(i,s,a))),e)})))
var i=r.numberOfChanges(t)
return 0!==i||n===i?e:void 0})),this.rrweb=t,this.options=o,this.refillRate=null!==(n=this.options.refillRate)&&void 0!==n?n:this.refillRate,this.bucketSize=null!==(i=this.options.bucketSize)&&void 0!==i?i:this.bucketSize,setInterval((function(){r.refillBuckets()}),1e3)})),vi=[Ln.MouseMove,Ln.MouseInteraction,Ln.Scroll,Ln.ViewportResize,Ln.Input,Ln.TouchMove,Ln.MediaInteraction,Ln.Drag],mi=function(e){return{rrwebMethod:e,enqueuedAt:Date.now(),attempt:1}},_i="[SessionRecording]",yi=function(){function e(t){var n=this
if(v(this,e),y(this,"queuedRRWebEvents",[]),y(this,"isIdle",!1),y(this,"_linkedFlagSeen",!1),y(this,"_lastActivityTimestamp",Date.now()),y(this,"_linkedFlag",null),y(this,"_forceAllowLocalhostNetworkCapture",!1),y(this,"_onBeforeUnload",(function(){n._flushBuffer()})),y(this,"_onOffline",(function(){n._tryAddCustomEvent("browser offline",{})})),y(this,"_onOnline",(function(){n._tryAddCustomEvent("browser online",{})})),y(this,"_onVisibilityChange",(function(){if(null!=J&&J.visibilityState){var e="window "+J.visibilityState
n._tryAddCustomEvent(e,{})}})),y(this,"_samplingSessionListener",null),this.instance=t,this._captureStarted=!1,this._endpoint="/s/",this.stopRrweb=void 0,this.receivedDecide=!1,!this.instance.sessionManager)throw ie.error(_i+" started without valid sessionManager"),new Error(_i+" started without valid sessionManager. This is a bug.")
var i=this.sessionManager.checkAndGetSessionAndWindowId(),r=i.sessionId,o=i.windowId
this.sessionId=r,this.windowId=o,this.buffer=this.clearBuffer(),this._setupSampling()}return _(e,[{key:"rrwebRecord",get:function(){var e
return null==te||null===(e=te.rrweb)||void 0===e?void 0:e.record}},{key:"started",get:function(){return this._captureStarted}},{key:"sessionManager",get:function(){if(!this.instance.sessionManager)throw new Error(_i+" must be started with a valid sessionManager.")
return this.instance.sessionManager}},{key:"fullSnapshotIntervalMillis",get:function(){var e
return(null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.full_snapshot_interval_millis)||3e5}},{key:"isSampled",get:function(){var e=this.instance.get_property(Ae)
return q(e)?e:null}},{key:"sessionDuration",get:function(){var e,t,n=null===(e=this.buffer)||void 0===e?void 0:e.data[(null===(t=this.buffer)||void 0===t?void 0:t.data.length)-1],i=this.sessionManager.checkAndGetSessionAndWindowId(!0).sessionStartTimestamp
return n?n.timestamp-i:null}},{key:"isRecordingEnabled",get:function(){var e=!!this.instance.get_property(Ce),t=!this.instance.config.disable_session_recording
return U&&e&&t}},{key:"isConsoleLogCaptureEnabled",get:function(){var e=!!this.instance.get_property(Te),t=this.instance.config.enable_recording_console_log
return null!=t?t:e}},{key:"canvasRecording",get:function(){var e=this.instance.get_property(Ie)
return e&&e.fps&&e.quality?{enabled:e.enabled,fps:e.fps,quality:e.quality}:void 0}},{key:"networkPayloadCapture",get:function(){var e,t,n=this.instance.get_property(Oe),i={recordHeaders:null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.recordHeaders,recordBody:null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.recordBody},r=(null==i?void 0:i.recordHeaders)||(null==n?void 0:n.recordHeaders),o=(null==i?void 0:i.recordBody)||(null==n?void 0:n.recordBody),s=L(this.instance.config.capture_performance)?this.instance.config.capture_performance.network_timing:this.instance.config.capture_performance,a=!!(q(s)?s:null==n?void 0:n.capturePerformance)
return r||o||a?{recordHeaders:r,recordBody:o,recordPerformance:a}:void 0}},{key:"sampleRate",get:function(){var e=this.instance.get_property(Re)
return B(e)?e:null}},{key:"minimumDuration",get:function(){var e=this.instance.get_property(Le)
return B(e)?e:null}},{key:"status",get:function(){return this.receivedDecide?this.isRecordingEnabled?D(this._linkedFlag)||this._linkedFlagSeen?q(this.isSampled)?this.isSampled?"sampled":"disabled":"active":"buffering":"disabled":"buffering"}},{key:"startIfEnabledOrStop",value:function(){this.isRecordingEnabled?(this._startCapture(),null==U||U.addEventListener("beforeunload",this._onBeforeUnload),null==U||U.addEventListener("offline",this._onOffline),null==U||U.addEventListener("online",this._onOnline),null==U||U.addEventListener("visibilitychange",this._onVisibilityChange),ie.info(_i+" started")):(this.stopRecording(),this.clearBuffer(),clearInterval(this._fullSnapshotTimer))}},{key:"stopRecording",value:function(){this._captureStarted&&this.stopRrweb&&(this.stopRrweb(),this.stopRrweb=void 0,this._captureStarted=!1,null==U||U.removeEventListener("beforeunload",this._onBeforeUnload),null==U||U.removeEventListener("offline",this._onOffline),null==U||U.removeEventListener("online",this._onOnline),null==U||U.removeEventListener("visibilitychange",this._onVisibilityChange),ie.info(_i+" stopped"))}},{key:"makeSamplingDecision",value:function(e){var t,n=this.sessionId!==e,i=this.sampleRate
if(B(i)){var r,o=this.isSampled,s=n||!q(o)
!(r=s?Math.random()<i:o)&&s&&ie.warn(_i+" Sample rate (".concat(i,") has determined that this sessionId (").concat(e,") will not be sent to the server.")),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:i}),null===(t=this.instance.persistence)||void 0===t||t.register(y({},Ae,r))}else{var a
null===(a=this.instance.persistence)||void 0===a||a.register(y({},Ae,null))}}},{key:"afterDecideResponse",value:function(e){var t,n,i,r=this
if(this._persistDecideResponse(e),this._linkedFlag=(null===(t=e.sessionRecording)||void 0===t?void 0:t.linkedFlag)||null,null!==(n=e.sessionRecording)&&void 0!==n&&n.endpoint&&(this._endpoint=null===(i=e.sessionRecording)||void 0===i?void 0:i.endpoint),this._setupSampling(),!D(this._linkedFlag)&&!this._linkedFlagSeen){var o=j(this._linkedFlag)?this._linkedFlag:this._linkedFlag.flag,s=j(this._linkedFlag)?null:this._linkedFlag.variant
this.instance.onFeatureFlags((function(e,t){var n=L(t)&&o in t,i=s?t[o]===s:n
if(i){var a={linkedFlag:o,linkedVariant:s},u="linked flag matched"
ie.info(_i+" "+u,a),r._tryAddCustomEvent(u,a)}r._linkedFlagSeen=i}))}this.receivedDecide=!0,this.startIfEnabledOrStop()}},{key:"_setupSampling",value:function(){var e=this
B(this.sampleRate)&&N(this._samplingSessionListener)&&(this._samplingSessionListener=this.sessionManager.onSessionId((function(t){e.makeSamplingDecision(t)})))}},{key:"_persistDecideResponse",value:function(e){if(this.instance.persistence){var t=this.instance.persistence,n=function(){var n,i,r,o,s,a,u,c,l=null===(n=e.sessionRecording)||void 0===n?void 0:n.sampleRate,d=D(l)?null:parseFloat(l),f=null===(i=e.sessionRecording)||void 0===i?void 0:i.minimumDurationMilliseconds
t.register((y(c={},Ce,!!e.sessionRecording),y(c,Te,null===(r=e.sessionRecording)||void 0===r?void 0:r.consoleLogRecordingEnabled),y(c,Oe,p({capturePerformance:e.capturePerformance},null===(o=e.sessionRecording)||void 0===o?void 0:o.networkPayloadCapture)),y(c,Ie,{enabled:null===(s=e.sessionRecording)||void 0===s?void 0:s.recordCanvas,fps:null===(a=e.sessionRecording)||void 0===a?void 0:a.canvasFps,quality:null===(u=e.sessionRecording)||void 0===u?void 0:u.canvasQuality}),y(c,Re,d),y(c,Le,A(f)?null:f),c))}
n(),this.sessionManager.onSessionId(n)}}},{key:"log",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log"
null===(t=this.instance.sessionRecording)||void 0===t||t.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:n,trace:[],payload:[JSON.stringify(e)]}},timestamp:de()})}},{key:"_startCapture",value:function(){var e=this
A(Object.assign)||this._captureStarted||this.instance.config.disable_session_recording||this.instance.consent.isOptedOut()||(this._captureStarted=!0,this.sessionManager.checkAndGetSessionAndWindowId(),this.rrwebRecord?this._onScriptLoaded():this.instance.requestRouter.loadScript("/static/recorder.js?v=".concat(x.LIB_VERSION),(function(t){if(t)return ie.error(_i+" could not load recorder.js",t)
e._onScriptLoaded()})))}},{key:"isInteractiveEvent",value:function(e){var t
return 3===e.type&&-1!==vi.indexOf(null===(t=e.data)||void 0===t?void 0:t.source)}},{key:"_updateWindowAndSessionIds",value:function(e){var t=this.isInteractiveEvent(e)
t||this.isIdle||e.timestamp-this._lastActivityTimestamp>3e5&&(this.isIdle=!0,clearInterval(this._fullSnapshotTimer),this._flushBuffer())
var n=!1
if(t&&(this._lastActivityTimestamp=e.timestamp,this.isIdle&&(this.isIdle=!1,this._tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),n=!0)),!this.isIdle){var i=this.sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),r=i.windowId,o=i.sessionId,s=this.sessionId!==o,a=this.windowId!==r
this.windowId=r,this.sessionId=o,(n||-1===[Tn,On].indexOf(e.type)&&(a||s||A(this._fullSnapshotTimer)))&&this._tryTakeFullSnapshot()}}},{key:"_tryRRWebMethod",value:function(e){try{return e.rrwebMethod(),!0}catch(t){return this.queuedRRWebEvents.length<10?this.queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):ie.warn(_i+" could not emit queued rrweb event.",t,e),!1}}},{key:"_tryAddCustomEvent",value:function(e,t){var n=this
return this._tryRRWebMethod(mi((function(){return n.rrwebRecord.addCustomEvent(e,t)})))}},{key:"_tryTakeFullSnapshot",value:function(){var e=this
return this._tryRRWebMethod(mi((function(){return e.rrwebRecord.takeFullSnapshot()})))}},{key:"_onScriptLoaded",value:function(){for(var e,t=this,n={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},i=this.instance.config.session_recording,r=0,o=Object.entries(i||{});r<o.length;r++){var s=b(o[r],2),a=s[0],u=s[1]
a in n&&("maskInputOptions"===a?n.maskInputOptions=p({password:!0},u):n[a]=u)}if(this.canvasRecording&&this.canvasRecording.enabled&&(n.recordCanvas=!0,n.sampling={canvas:this.canvasRecording.fps},n.dataURLOptions={type:"image/webp",quality:this.canvasRecording.quality}),this.rrwebRecord){this.mutationRateLimiter=null!==(e=this.mutationRateLimiter)&&void 0!==e?e:new gi(this.rrwebRecord,{onBlockedNode:function(e,n){var i="Too many mutations on node '".concat(e,"'. Rate limiting. This could be due to SVG animations or something similar")
ie.info(i,{node:n}),t.log(_i+" "+i,"warn")}})
var c=this._gatherRRWebPlugins()
this.stopRrweb=this.rrwebRecord(p({emit:function(e){t.onRRwebEmit(e)},plugins:c},n)),this.instance._addCaptureHook((function(e){try{if("$pageview"===e){var n=U?t._maskUrl(U.location.href):""
if(!n)return
t._tryAddCustomEvent("$pageview",{href:n})}}catch(e){ie.error("Could not add $pageview to rrweb session",e)}})),this._lastActivityTimestamp=Date.now(),this.isIdle=!1,this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:n,activePlugins:c.map((function(e){return null==e?void 0:e.name}))}),this._tryAddCustomEvent("$posthog_config",{config:this.instance.config})}else ie.error(_i+"onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")}},{key:"_scheduleFullSnapshot",value:function(){var e=this
if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),!this.isIdle){var t=this.fullSnapshotIntervalMillis
t&&(this._fullSnapshotTimer=setInterval((function(){e._tryTakeFullSnapshot()}),t))}}},{key:"_gatherRRWebPlugins",value:function(){var e=[]
return te.rrwebConsoleRecord&&this.isConsoleLogCaptureEnabled&&e.push(te.rrwebConsoleRecord.getRecordConsolePlugin()),this.networkPayloadCapture&&R(te.getRecordNetworkPlugin)&&(!St.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?e.push(te.getRecordNetworkPlugin(function(e,t){var n,i,r,o={payloadSizeLimitBytes:ui.payloadSizeLimitBytes,performanceEntryTypeToObserve:w(ui.performanceEntryTypeToObserve),payloadHostDenyList:[].concat(w(t.payloadHostDenyList||[]),w(ui.payloadHostDenyList))},s=!1!==e.session_recording.recordHeaders&&t.recordHeaders,a=!1!==e.session_recording.recordBody&&t.recordBody,u=!1!==e.capture_performance&&t.recordPerformance,c=(n=o,r=Math.min(1e6,null!==(i=n.payloadSizeLimitBytes)&&void 0!==i?i:1e6),function(e){return null!=e&&e.requestBody&&(e.requestBody=fi(e.requestBody,e.requestHeaders,r,"Request")),null!=e&&e.responseBody&&(e.responseBody=fi(e.responseBody,e.responseHeaders,r,"Response")),e}),l=function(e){return c(function(e){var t=Et(e.name)
if(!(t&&t.pathname&&di.some((function(e){return 0===t.pathname.indexOf(e)}))))return e}((n=(t=e).requestHeaders,D(n)||ae(Object.keys(null!=n?n:{}),(function(e){ci.includes(e.toLowerCase())&&(n[e]=ai)})),t)))
var t,n},d=R(e.session_recording.maskNetworkRequestFn)
return d&&R(e.session_recording.maskCapturedNetworkRequestFn)&&ie.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),d&&(e.session_recording.maskCapturedNetworkRequestFn=function(t){var n=e.session_recording.maskNetworkRequestFn({url:t.name})
return p(p({},t),{},{name:null==n?void 0:n.url})}),o.maskRequestFn=R(e.session_recording.maskCapturedNetworkRequestFn)?function(t){var n,i,r,o=l(t)
return o&&null!==(n=null===(i=(r=e.session_recording).maskCapturedNetworkRequestFn)||void 0===i?void 0:i.call(r,o))&&void 0!==n?n:void 0}:function(e){return function(e){if(!A(e))return e.requestBody=hi(e.requestBody,"Request"),e.responseBody=hi(e.responseBody,"Response"),e}(l(e))},p(p(p({},ui),o),{},{recordHeaders:s,recordBody:a,recordPerformance:u,recordInitialRequests:u})}(this.instance.config,this.networkPayloadCapture))):ie.info(_i+" NetworkCapture not started because we are on localhost.")),e}},{key:"onRRwebEmit",value:function(e){if(this._processQueuedEvents(),e&&L(e)){if(e.type===Rn.Meta){var t=this._maskUrl(e.data.href)
if(this._lastHref=t,!t)return
e.data.href=t}else this._pageViewFallBack()
e.type===Rn.FullSnapshot&&this._scheduleFullSnapshot()
var n=this.mutationRateLimiter?this.mutationRateLimiter.throttleMutations(e):e
if(n){var i=function(e){var t=e
if(t&&L(t)&&6===t.type&&L(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
for(var n=[],i=0;i<t.data.payload.payload.length;i++)t.data.payload.payload[i]&&t.data.payload.payload[i].length>2e3?n.push(t.data.payload.payload[i].slice(0,2e3)+"...[truncated]"):n.push(t.data.payload.payload[i])
return t.data.payload.payload=n,e}return e}(n),r=Cn(i)
if(this._updateWindowAndSessionIds(i),!this.isIdle||i.type===Rn.Custom){var o={$snapshot_bytes:r,$snapshot_data:i,$session_id:this.sessionId,$window_id:this.windowId}
"disabled"!==this.status?this._captureSnapshotBuffered(o):this.clearBuffer()}}}}},{key:"_pageViewFallBack",value:function(){if(!this.instance.config.capture_pageview&&U){var e=this._maskUrl(U.location.href)
this._lastHref!==e&&(this._tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}}},{key:"_processQueuedEvents",value:function(){var e=this
if(this.queuedRRWebEvents.length){var t=w(this.queuedRRWebEvents)
this.queuedRRWebEvents=[],t.forEach((function(t){Date.now()-t.enqueuedAt<=2e3&&e._tryRRWebMethod(t)}))}}},{key:"_maskUrl",value:function(e){var t=this.instance.config.session_recording
if(t.maskNetworkRequestFn){var n,i={url:e}
return null===(n=i=t.maskNetworkRequestFn(i))||void 0===n?void 0:n.url}return e}},{key:"clearBuffer",value:function(){return this.buffer={size:0,data:[],sessionId:this.sessionId,windowId:this.windowId},this.buffer}},{key:"_flushBuffer",value:function(){var e=this
this.flushBufferTimer&&(clearTimeout(this.flushBufferTimer),this.flushBufferTimer=void 0)
var t=this.minimumDuration,n=this.sessionDuration,i=B(n)&&n>=0,r=B(t)&&i&&n<t
return"buffering"===this.status||r?(this.flushBufferTimer=setTimeout((function(){e._flushBuffer()}),2e3),this.buffer):(this.buffer.data.length>0&&In(this.buffer).forEach((function(t){e._captureSnapshot({$snapshot_bytes:t.size,$snapshot_data:t.data,$session_id:t.sessionId,$window_id:t.windowId})})),this.clearBuffer())}},{key:"_captureSnapshotBuffered",value:function(e){var t,n=this,i=2+((null===(t=this.buffer)||void 0===t?void 0:t.data.length)||0)
!this.isIdle&&(this.buffer.size+e.$snapshot_bytes+i>943718.4||this.buffer.sessionId!==this.sessionId)&&(this.buffer=this._flushBuffer()),this.buffer.size+=e.$snapshot_bytes,this.buffer.data.push(e.$snapshot_data),this.flushBufferTimer||this.isIdle||(this.flushBufferTimer=setTimeout((function(){n._flushBuffer()}),2e3))}},{key:"_captureSnapshot",value:function(e){this.instance.capture("$snapshot",e,{_url:this.instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}},{key:"overrideLinkedFlag",value:function(){this._linkedFlagSeen=!0}}]),e}(),bi=function(){function e(t){v(this,e),this.instance=t,this.instance.decideEndpointWasHit=this.instance._hasBootstrappedFeatureFlags()}return _(e,[{key:"call",value:function(){var e=this,t={token:this.instance.config.token,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),person_properties:this.instance.get_property(Ne),group_properties:this.instance.get_property(De),disable_flags:this.instance.config.advanced_disable_feature_flags||this.instance.config.advanced_disable_feature_flags_on_first_load||void 0}
this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:t,compression:this.instance.config.disable_compression?void 0:ve.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:function(t){return e.parseDecideResponse(t.json)}})}},{key:"parseDecideResponse",value:function(e){var t=this
this.instance.featureFlags.setReloadingPaused(!1),this.instance.featureFlags._startReloadTimer()
var n=!e
if(this.instance.config.advanced_disable_feature_flags_on_first_load||this.instance.config.advanced_disable_feature_flags||this.instance.featureFlags.receivedFeatureFlags(null!=e?e:{},n),n)ie.error("Failed to fetch feature flags from PostHog.")
else{if(!J||!J.body)return ie.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout((function(){t.parseDecideResponse(e)}),500)
if(this.instance._afterDecideResponse(e),e.siteApps)if(this.instance.config.opt_in_site_apps){var i,r=E(e.siteApps)
try{var o=function(){var e=i.value,n=e.id,r=e.url,o=t.instance.requestRouter.endpointFor("api",r)
te["__$$ph_site_app_".concat(n)]=t.instance,t.instance.requestRouter.loadScript(o,(function(e){if(e)return ie.error("Error while initializing PostHog app with config id ".concat(n),e)}))}
for(r.s();!(i=r.n()).done;)o()}catch(e){r.e(e)}finally{r.f()}}else e.siteApps.length>0&&ie.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}}]),e}(),wi=null!=U&&U.location?$t(U.location.hash,"__posthog")||$t(location.hash,"state"):null,ki="_postHogToolbarParams"
!function(e){e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(pi||(pi={}))
var Si=function(){function e(t){v(this,e),this.instance=t}return _(e,[{key:"setToolbarState",value:function(e){te.ph_toolbar_state=e}},{key:"getToolbarState",value:function(){var e
return null!==(e=te.ph_toolbar_state)&&void 0!==e?e:pi.UNINITIALIZED}},{key:"maybeLoadToolbar",value:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
if(!U||!J)return!1
n=null!==(e=n)&&void 0!==e?e:U.location,r=null!==(t=r)&&void 0!==t?t:U.history
try{if(!i){try{U.localStorage.setItem("test","test"),U.localStorage.removeItem("test")}catch(e){return!1}i=null==U?void 0:U.localStorage}var o,s=wi||$t(n.hash,"__posthog")||$t(n.hash,"state"),a=s?fe((function(){return JSON.parse(atob(decodeURIComponent(s)))}))||fe((function(){return JSON.parse(decodeURIComponent(s))})):null
return a&&"ph_authorize"===a.action?((o=a).source="url",o&&Object.keys(o).length>0&&(a.desiredHash?n.hash=a.desiredHash:r?r.replaceState(r.state,"",n.pathname+n.search):n.hash="")):((o=JSON.parse(i.getItem(ki)||"{}")).source="localstorage",delete o.userIntent),!(!o.token||this.instance.config.token!==o.token||(this.loadToolbar(o),0))}catch(e){return!1}}},{key:"_callLoadToolbar",value:function(e){(te.ph_load_toolbar||te.ph_load_editor)(e,this.instance)}},{key:"loadToolbar",value:function(e){var t=this,n=!(null==J||!J.getElementById(Ke))
if(!U||n)return!1
var i="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,r=p(p({token:this.instance.config.token},e),{},{apiURL:this.instance.requestRouter.endpointFor("ui")},i?{instrument:!1}:{})
if(U.localStorage.setItem(ki,JSON.stringify(p(p({},r),{},{source:void 0}))),this.getToolbarState()===pi.LOADED)this._callLoadToolbar(r)
else if(this.getToolbarState()===pi.UNINITIALIZED){this.setToolbarState(pi.LOADING)
var o=3e5,s=Math.floor(Date.now()/o)*o
this.instance.requestRouter.loadScript("/static/toolbar.js?t=".concat(s),(function(e){if(e)return ie.error("Failed to load toolbar",e),void t.setToolbarState(pi.UNINITIALIZED)
t.setToolbarState(pi.LOADED),t._callLoadToolbar(r)})),me(U,"turbolinks:load",(function(){t.setToolbarState(pi.UNINITIALIZED),t.loadToolbar(r)}))}return!0}},{key:"_loadEditor",value:function(e){return this.loadToolbar(e)}},{key:"maybeLoadEditor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
return this.maybeLoadToolbar(e,t,n)}}]),e}(),Ei=function(){function e(t){v(this,e),y(this,"isPaused",!0),y(this,"queue",[]),y(this,"flushTimeoutMs",3e3),this.sendRequest=t}return _(e,[{key:"enqueue",value:function(e){this.queue.push(e),this.flushTimeout||this.setFlushTimeout()}},{key:"unload",value:function(){var e=this
this.clearFlushTimeout()
var t=this.queue.length>0?this.formatQueue():{},n=Object.values(t);[].concat(w(n.filter((function(e){return 0===e.url.indexOf("/e")}))),w(n.filter((function(e){return 0!==e.url.indexOf("/e")})))).map((function(t){e.sendRequest(p(p({},t),{},{transport:"sendBeacon"}))}))}},{key:"enable",value:function(){this.isPaused=!1,this.setFlushTimeout()}},{key:"setFlushTimeout",value:function(){var e=this
this.isPaused||(this.flushTimeout=setTimeout((function(){if(e.clearFlushTimeout(),e.queue.length>0){var t=e.formatQueue(),n=function(n){var i=t[n],r=(new Date).getTime()
i.data&&I(i.data)&&ae(i.data,(function(e){e.offset=Math.abs(e.timestamp-r),delete e.timestamp})),e.sendRequest(i)}
for(var i in t)n(i)}}),this.flushTimeoutMs))}},{key:"clearFlushTimeout",value:function(){clearTimeout(this.flushTimeout),this.flushTimeout=void 0}},{key:"formatQueue",value:function(){var e={}
return ae(this.queue,(function(t){var n,i=t,r=(i?i.batchKey:null)||i.url
A(e[r])&&(e[r]=p(p({},i),{},{data:[]})),null===(n=e[r].data)||void 0===n||n.push(i.data)})),this.queue=[],e}}]),e}(),xi=Uint8Array,Pi=Uint16Array,$i=Uint32Array,Ci=new xi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ti=new xi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Oi=new xi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ii=function(e,t){for(var n=new Pi(31),i=0;i<31;++i)n[i]=t+=1<<e[i-1]
var r=new $i(n[30])
for(i=1;i<30;++i)for(var o=n[i];o<n[i+1];++o)r[o]=o-n[i]<<5|i
return[n,r]},Ri=Ii(Ci,2),Li=Ri[0],Fi=Ri[1]
Li[28]=258,Fi[258]=28
for(var Ai=Ii(Ti,0)[1],ji=new Pi(32768),Mi=0;Mi<32768;++Mi){var Ni=(43690&Mi)>>>1|(21845&Mi)<<1
Ni=(61680&(Ni=(52428&Ni)>>>2|(13107&Ni)<<2))>>>4|(3855&Ni)<<4,ji[Mi]=((65280&Ni)>>>8|(255&Ni)<<8)>>>1}var Di=function(e,t,n){for(var i=e.length,r=0,o=new Pi(t);r<i;++r)++o[e[r]-1]
var s,a=new Pi(t)
for(r=0;r<t;++r)a[r]=a[r-1]+o[r-1]<<1
for(s=new Pi(i),r=0;r<i;++r)s[r]=ji[a[e[r]-1]++]>>>15-e[r]
return s},Bi=new xi(288)
for(Mi=0;Mi<144;++Mi)Bi[Mi]=8
for(Mi=144;Mi<256;++Mi)Bi[Mi]=9
for(Mi=256;Mi<280;++Mi)Bi[Mi]=7
for(Mi=280;Mi<288;++Mi)Bi[Mi]=8
var qi=new xi(32)
for(Mi=0;Mi<32;++Mi)qi[Mi]=5
var Hi=Di(Bi,9),Ui=Di(qi,5),Gi=function(e){return(e/8>>0)+(7&e&&1)},Wi=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var i=new(e instanceof Pi?Pi:e instanceof $i?$i:xi)(n-t)
return i.set(e.subarray(t,n)),i},zi=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8},Vi=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8,e[i+2]|=n>>>16},Qi=function(e,t){for(var n=[],i=0;i<e.length;++i)e[i]&&n.push({s:i,f:e[i]})
var r=n.length,o=n.slice()
if(!r)return[new xi(0),0]
if(1==r){var s=new xi(n[0].s+1)
return s[n[0].s]=1,[s,1]}n.sort((function(e,t){return e.f-t.f})),n.push({s:-1,f:25001})
var a=n[0],u=n[1],c=0,l=1,d=2
for(n[0]={s:-1,f:a.f+u.f,l:a,r:u};l!=r-1;)a=n[n[c].f<n[d].f?c++:d++],u=n[c!=l&&n[c].f<n[d].f?c++:d++],n[l++]={s:-1,f:a.f+u.f,l:a,r:u}
var f=o[0].s
for(i=1;i<r;++i)o[i].s>f&&(f=o[i].s)
var h=new Pi(f+1),p=Ji(n[l-1],h,0)
if(p>t){i=0
var g=0,v=p-t,m=1<<v
for(o.sort((function(e,t){return h[t.s]-h[e.s]||e.f-t.f}));i<r;++i){var _=o[i].s
if(!(h[_]>t))break
g+=m-(1<<p-h[_]),h[_]=t}for(g>>>=v;g>0;){var y=o[i].s
h[y]<t?g-=1<<t-h[y]++-1:++i}for(;i>=0&&g;--i){var b=o[i].s
h[b]==t&&(--h[b],++g)}p=t}return[new xi(h),p]},Ji=function e(t,n,i){return-1==t.s?Math.max(e(t.l,n,i+1),e(t.r,n,i+1)):n[t.s]=i},Ki=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new Pi(++t),i=0,r=e[0],o=1,s=function(e){n[i++]=e},a=1;a<=t;++a)if(e[a]==r&&a!=t)++o
else{if(!r&&o>2){for(;o>138;o-=138)s(32754)
o>2&&(s(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(s(r),--o;o>6;o-=6)s(8304)
o>2&&(s(o-3<<5|8208),o=0)}for(;o--;)s(r)
o=1,r=e[a]}return[n.subarray(0,i),t]},Xi=function(e,t){for(var n=0,i=0;i<t.length;++i)n+=e[i]*t[i]
return n},Yi=function(e,t,n){var i=n.length,r=Gi(t+2)
e[r]=255&i,e[r+1]=i>>>8,e[r+2]=255^e[r],e[r+3]=255^e[r+1]
for(var o=0;o<i;++o)e[r+o+4]=n[o]
return 8*(r+4+i)},Zi=function(e,t,n,i,r,o,s,a,u,c,l){zi(t,l++,n),++r[256]
for(var d=Qi(r,15),f=d[0],h=d[1],p=Qi(o,15),g=p[0],v=p[1],m=Ki(f),_=m[0],y=m[1],b=Ki(g),w=b[0],k=b[1],S=new Pi(19),E=0;E<_.length;++E)S[31&_[E]]++
for(E=0;E<w.length;++E)S[31&w[E]]++
for(var x=Qi(S,7),P=x[0],$=x[1],C=19;C>4&&!P[Oi[C-1]];--C);var T,O,I,R,L=c+5<<3,F=Xi(r,Bi)+Xi(o,qi)+s,A=Xi(r,f)+Xi(o,g)+s+14+3*C+Xi(S,P)+(2*S[16]+3*S[17]+7*S[18])
if(L<=F&&L<=A)return Yi(t,l,e.subarray(u,u+c))
if(zi(t,l,1+(A<F)),l+=2,A<F){T=Di(f,h),O=f,I=Di(g,v),R=g
var j=Di(P,$)
for(zi(t,l,y-257),zi(t,l+5,k-1),zi(t,l+10,C-4),l+=14,E=0;E<C;++E)zi(t,l+3*E,P[Oi[E]])
l+=3*C
for(var M=[_,w],N=0;N<2;++N){var D=M[N]
for(E=0;E<D.length;++E){var B=31&D[E]
zi(t,l,j[B]),l+=P[B],B>15&&(zi(t,l,D[E]>>>5&127),l+=D[E]>>>12)}}}else T=Hi,O=Bi,I=Ui,R=qi
for(E=0;E<a;++E)if(i[E]>255){B=i[E]>>>18&31,Vi(t,l,T[B+257]),l+=O[B+257],B>7&&(zi(t,l,i[E]>>>23&31),l+=Ci[B])
var q=31&i[E]
Vi(t,l,I[q]),l+=R[q],q>3&&(Vi(t,l,i[E]>>>5&8191),l+=Ti[q])}else Vi(t,l,T[i[E]]),l+=O[i[E]]
return Vi(t,l,T[256]),l+O[256]},er=new $i([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),tr=function(){for(var e=new $i(256),t=0;t<256;++t){for(var n=t,i=9;--i;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),nr=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8}
function ir(e,t){void 0===t&&(t={})
var n=function(){var e=4294967295
return{p:function(t){for(var n=e,i=0;i<t.length;++i)n=tr[255&n^t[i]]^n>>>8
e=n},d:function(){return 4294967295^e}}}(),i=e.length
n.p(e)
var r,o=function(e,t,n,i,r){return function(e,t,n,i,r,o){var s=e.length,a=new xi(i+s+5*(1+Math.floor(s/7e3))+r),u=a.subarray(i,a.length-r),c=0
if(!t||s<8)for(var l=0;l<=s;l+=65535){var d=l+65535
d<s?c=Yi(u,c,e.subarray(l,d)):(u[l]=o,c=Yi(u,c,e.subarray(l,s)))}else{for(var f=er[t-1],h=f>>>13,p=8191&f,g=(1<<n)-1,v=new Pi(32768),m=new Pi(g+1),_=Math.ceil(n/3),y=2*_,b=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<y)&g},w=new $i(25e3),k=new Pi(288),S=new Pi(32),E=0,x=0,P=(l=0,0),$=0,C=0;l<s;++l){var T=b(l),O=32767&l,I=m[T]
if(v[O]=I,m[T]=O,$<=l){var R=s-l
if((E>7e3||P>24576)&&R>423){c=Zi(e,u,0,w,k,S,x,P,C,l-C,c),P=E=x=0,C=l
for(var L=0;L<286;++L)k[L]=0
for(L=0;L<30;++L)S[L]=0}var F=2,A=0,j=p,M=O-I&32767
if(R>2&&T==b(l-M))for(var N=Math.min(h,R)-1,D=Math.min(32767,l),B=Math.min(258,R);M<=D&&--j&&O!=I;){if(e[l+F]==e[l+F-M]){for(var q=0;q<B&&e[l+q]==e[l+q-M];++q);if(q>F){if(F=q,A=M,q>N)break
var H=Math.min(M,q-2),U=0
for(L=0;L<H;++L){var G=l-M+L+32768&32767,W=G-v[G]+32768&32767
W>U&&(U=W,I=G)}}}M+=(O=I)-(I=v[O])+32768&32767}if(A){w[P++]=268435456|Fi[F]<<18|Ai[A]
var z=31&Fi[F],V=31&Ai[A]
x+=Ci[z]+Ti[V],++k[257+z],++S[V],$=l+F,++E}else w[P++]=e[l],++k[e[l]]}}c=Zi(e,u,o,w,k,S,x,P,C,l-C,c)}return Wi(a,0,i+Gi(c)+r)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,i,!r)}(e,t,10+((r=t).filename&&r.filename.length+1||0),8),s=o.length
return function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&nr(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var i=0;i<=n.length;++i)e[i+10]=n.charCodeAt(i)}}(o,t),nr(o,s-8,n.d()),nr(o,s-4,i),o}var rr=!!Y||!!X,or="text/plain",sr=function(e,t){var n=b(e.split("?"),2),i=n[0],r=n[1],o=p({},t)
null==r||r.split("&").forEach((function(e){var t=b(e.split("="),1)[0]
delete o[t]}))
var s=function(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",r=[]
return ae(e,(function(e,i){A(e)||A(i)||"undefined"===i||(t=encodeURIComponent(function(e){return e instanceof File}(e)?e.name:e.toString()),n=encodeURIComponent(i),r[r.length]=n+"="+t)})),r.join(i)}(o)
return s=s?(r?r+"&":"")+s:r,"".concat(i,"?").concat(s)},ar=function(e){return"data="+encodeURIComponent("string"==typeof e?e:JSON.stringify(e))},ur=function(e){var t=e.data,n=e.compression
if(t){if(n===ve.GZipJS){var i=ir(function(e,t){var n=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var i=new xi(e.length+(e.length>>>1)),r=0,o=function(e){i[r++]=e},s=0;s<n;++s){if(r+5>i.length){var a=new xi(r+8+(n-s<<1))
a.set(i),i=a}var u=e.charCodeAt(s)
u<128?o(u):u<2048?(o(192|u>>>6),o(128|63&u)):u>55295&&u<57344?(o(240|(u=65536+(1047552&u)|1023&e.charCodeAt(++s))>>>18),o(128|u>>>12&63),o(128|u>>>6&63),o(128|63&u)):(o(224|u>>>12),o(128|u>>>6&63),o(128|63&u))}return Wi(i,0,r)}(JSON.stringify(t)),{mtime:0})
return{contentType:or,body:new Blob([i],{type:or})}}if(n===ve.Base64){var r=function(e){var t,n,i,r,o,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,u=0,c="",l=[]
if(!e)return e
e=function(e){var t,n,i,r,o=""
for(t=n=0,i=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,r=0;r<i;r++){var s=e.charCodeAt(r),a=null
s<128?n++:a=s>127&&s<2048?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),N(a)||(n>t&&(o+=e.substring(t,n)),o+=a,t=n=r+1)}return n>t&&(o+=e.substring(t,e.length)),o}(e)
do{t=(o=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=o>>12&63,i=o>>6&63,r=63&o,l[u++]=s.charAt(t)+s.charAt(n)+s.charAt(i)+s.charAt(r)}while(a<e.length)
switch(c=l.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}(JSON.stringify(t))
return{contentType:"application/x-www-form-urlencoded",body:ar(r)}}return{contentType:"application/json",body:JSON.stringify(t)}}},cr=[]
Y&&cr.push({transport:"XHR",method:function(e){var t,n=new Y
n.open(e.method||"GET",e.url,!0)
var i=null!==(t=ur(e))&&void 0!==t?t:{},r=i.contentType,o=i.body
ae(e.headers,(function(e,t){n.setRequestHeader(t,e)})),r&&n.setRequestHeader("Content-Type",r),e.timeout&&(n.timeout=e.timeout),n.withCredentials=!0,n.onreadystatechange=function(){if(4===n.readyState){var t,i={statusCode:n.status,text:n.responseText}
if(200===n.status)try{i.json=JSON.parse(n.responseText)}catch(e){}null===(t=e.callback)||void 0===t||t.call(e,i)}},n.send(o)}}),X&&cr.push({transport:"fetch",method:function(e){var t,n,i=null!==(t=ur(e))&&void 0!==t?t:{},r=i.contentType,o=i.body,s=new Headers
ae(e.headers,(function(e,t){s.append(t,e)})),r&&s.append("Content-Type",r)
var a=e.url,u=null
if(Z){var c=new Z
u={signal:c.signal,timeout:setTimeout((function(){return c.abort()}),e.timeout)}}X(a,{method:(null==e?void 0:e.method)||"GET",headers:s,keepalive:"POST"===e.method,body:o,signal:null===(n=u)||void 0===n?void 0:n.signal}).then((function(t){return t.text().then((function(n){var i,r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){ie.error(e)}null===(i=e.callback)||void 0===i||i.call(e,r)}))})).catch((function(t){var n
ie.error(t),null===(n=e.callback)||void 0===n||n.call(e,{statusCode:0,text:t})})).finally((function(){return u?clearTimeout(u.timeout):null}))}}),null!=Q&&Q.sendBeacon&&cr.push({transport:"sendBeacon",method:function(e){var t=sr(e.url,{beacon:"1"})
try{var n,i=null!==(n=ur(e))&&void 0!==n?n:{},r=i.contentType,o=i.body,s="string"==typeof o?new Blob([o],{type:r}):o
Q.sendBeacon(t,s)}catch(e){}}})
var lr,dr=["retriesPerformedSoFar"],fr=function(){function e(t){var n=this
v(this,e),y(this,"isPolling",!1),y(this,"pollIntervalMs",3e3),y(this,"queue",[]),this.instance=t,this.queue=[],this.areWeOnline=!0,!A(U)&&"onLine"in U.navigator&&(this.areWeOnline=U.navigator.onLine,U.addEventListener("online",(function(){n.areWeOnline=!0,n.flush()})),U.addEventListener("offline",(function(){n.areWeOnline=!1})))}return _(e,[{key:"retriableRequest",value:function(e){var t=this,n=e.retriesPerformedSoFar,i=function(e,t){if(null==e)return{}
var n,i,r=function(e,t){if(null==e)return{}
var n,i,r={},o=Object.keys(e)
for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n])
return r}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,dr)
B(n)&&n>0&&(i.url=sr(i.url,{retry_count:n})),this.instance._send_request(p(p({},i),{},{callback:function(e){var r
200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=n?n:0)<10?t.enqueue(p({retriesPerformedSoFar:n},i)):null===(r=i.callback)||void 0===r||r.call(i,e)}}))}},{key:"enqueue",value:function(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,i=Math.min(18e5,t),r=(Math.random()-.5)*(i-n)
return Math.ceil(i+r)}(t),i=Date.now()+n
this.queue.push({retryAt:i,requestOptions:e})
var r="Enqueued failed request for retry in ".concat(n)
navigator.onLine||(r+=" (Browser is offline)"),ie.warn(r),this.isPolling||(this.isPolling=!0,this.poll())}},{key:"poll",value:function(){var e=this
this.poller&&clearTimeout(this.poller),this.poller=setTimeout((function(){e.areWeOnline&&e.queue.length>0&&e.flush(),e.poll()}),this.pollIntervalMs)}},{key:"flush",value:function(){var e=Date.now(),t=[],n=this.queue.filter((function(n){return n.retryAt<e||(t.push(n),!1)}))
if(this.queue=t,n.length>0){var i,r=E(n)
try{for(r.s();!(i=r.n()).done;){var o=i.value.requestOptions
this.retriableRequest(o)}}catch(e){r.e(e)}finally{r.f()}}}},{key:"unload",value:function(){this.poller&&(clearTimeout(this.poller),this.poller=void 0)
var e,t=E(this.queue)
try{for(t.s();!(e=t.n()).done;){var n=e.value.requestOptions
try{this.instance._send_request(p(p({},n),{},{transport:"sendBeacon"}))}catch(e){ie.error(e)}}}catch(e){t.e(e)}finally{t.f()}this.queue=[]}}]),e}(),hr=1800,pr=function(){function e(t,n,i,r){var o
v(this,e),y(this,"_sessionIdChangedHandlers",[]),this.config=t,this.persistence=n,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=i||ct,this._windowIdGenerator=r||ct
var s=t.persistence_name||t.token,a=t.session_idle_timeout_seconds||hr
if(B(a)?a>hr?ie.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead."):a<60&&ie.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead."):(ie.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."),a=hr),this._sessionTimeoutMs=1e3*Math.min(Math.max(a,60),hr),this._window_id_storage_key="ph_"+s+"_window_id",this._primary_window_exists_storage_key="ph_"+s+"_primary_window_exists",this._canUseSessionStorage()){var u=kt.parse(this._window_id_storage_key),c=kt.parse(this._primary_window_exists_storage_key)
u&&!c?this._windowId=u:kt.remove(this._window_id_storage_key),kt.set(this._primary_window_exists_storage_key,!0)}if(null!==(o=this.config.bootstrap)&&void 0!==o&&o.sessionID)try{var l=function(e){var t=e.replace(/-/g,"")
if(32!==t.length)throw new Error("Not a valid UUID")
if("7"!==t[12])throw new Error("Not a UUIDv7")
return parseInt(t.substring(0,12),16)}(this.config.bootstrap.sessionID)
this._setSessionId(this.config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){ie.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}return _(e,[{key:"onSessionId",value:function(e){var t=this
return A(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),function(){t._sessionIdChangedHandlers=t._sessionIdChangedHandlers.filter((function(t){return t!==e}))}}},{key:"_canUseSessionStorage",value:function(){return"memory"!==this.config.persistence&&!this.persistence.disabled&&kt.is_supported()}},{key:"_setWindowId",value:function(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&kt.set(this._window_id_storage_key,e))}},{key:"_getWindowId",value:function(){return this._windowId?this._windowId:this._canUseSessionStorage()?kt.parse(this._window_id_storage_key):null}},{key:"_setSessionId",value:function(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this.persistence.register(y({},Fe,[t,e,n])))}},{key:"_getSessionId",value:function(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
var e=this.persistence.props[Fe]
return I(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}},{key:"resetSessionId",value:function(){this._setSessionId(null,null,null)}},{key:"_listenToReloadWindow",value:function(){var e=this
null==U||U.addEventListener("beforeunload",(function(){e._canUseSessionStorage()&&kt.remove(e._primary_window_exists_storage_key)}))}},{key:"checkAndGetSessionAndWindowId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)||(new Date).getTime(),n=b(this._getSessionId(),3),i=n[0],r=n[1],o=n[2],s=this._getWindowId(),a=o&&o>0&&Math.abs(t-o)>864e5,u=!1,c=!r,l=!e&&Math.abs(t-i)>this._sessionTimeoutMs
c||l||a?(r=this._sessionIdGenerator(),s=this._windowIdGenerator(),ie.info("[SessionId] new session ID generated",{sessionId:r,windowId:s,changeReason:{noSessionId:c,activityTimeout:l,sessionPastMaximumLength:a}}),o=t,u=!0):s||(s=this._windowIdGenerator(),u=!0)
var d=0===i||!e||a?t:i,f=0===o?(new Date).getTime():o
return this._setWindowId(s),this._setSessionId(r,d,f),u&&this._sessionIdChangedHandlers.forEach((function(e){return e(r,s)})),{sessionId:r,windowId:s,sessionStartTimestamp:f}}}]),e}()
!function(e){e.US="us",e.EU="eu",e.CUSTOM="custom"}(lr||(lr={}))
var gr="i.posthog.com",vr=function(){function e(t){v(this,e),y(this,"_regionCache",{}),this.instance=t}return _(e,[{key:"apiHost",get:function(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}},{key:"uiHost",get:function(){var e,t=null===(e=this.instance.config.ui_host)||void 0===e?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace(".".concat(gr),".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}},{key:"region",get:function(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=lr.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=lr.EU:this._regionCache[this.apiHost]=lr.CUSTOM),this._regionCache[this.apiHost]}},{key:"endpointFor",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
if(t&&(t="/"===t[0]?t:"/".concat(t)),"ui"===e)return this.uiHost+t
if(this.region===lr.CUSTOM)return this.apiHost+t
var n=gr+t
switch(e){case"assets":return"https://".concat(this.region,"-assets.").concat(n)
case"api":return"https://".concat(this.region,".").concat(n)}}},{key:"loadScript",value:function(e,t){if(this.instance.config.disable_external_dependency_loading)return ie.warn("".concat(e," was requested but loading of external scripts is disabled.")),t("Loading of external scripts is disabled")
var n="/"===e[0]?this.endpointFor("assets",e):e,i=function(){if(!J)return t("document not found")
var e=J.createElement("script")
e.type="text/javascript",e.src=n,e.onload=function(e){return t(void 0,e)},e.onerror=function(e){return t(e)}
var i,r=J.querySelectorAll("body > script")
r.length>0?null===(i=r[0].parentNode)||void 0===i||i.insertBefore(e,r[0]):J.body.appendChild(e)}
null!=J&&J.body?i():null==J||J.addEventListener("DOMContentLoaded",i)}}]),e}(),mr="posthog-js"
function _r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.organization,i=t.projectId,r=t.prefix,o=t.severityAllowList,s=void 0===o?["error"]:o
return function(t){var o,a,u,c,l
if("*"!==s&&!s.includes(t.level)||!e.__loaded)return t
t.tags||(t.tags={})
var d=e.requestRouter.endpointFor("ui","/project/".concat(e.config.token,"/person/").concat(e.get_distinct_id()))
t.tags["PostHog Person URL"]=d,e.sessionRecordingStarted()&&(t.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
var f=(null===(o=t.exception)||void 0===o?void 0:o.values)||[],h={$exception_message:(null===(a=f[0])||void 0===a?void 0:a.value)||t.message,$exception_type:null===(u=f[0])||void 0===u?void 0:u.type,$exception_personURL:d,$exception_level:t.level,$sentry_event_id:t.event_id,$sentry_exception:t.exception,$sentry_exception_message:(null===(c=f[0])||void 0===c?void 0:c.value)||t.message,$sentry_exception_type:null===(l=f[0])||void 0===l?void 0:l.type,$sentry_tags:t.tags,$level:t.level}
return n&&i&&(h.$sentry_url=(r||"https://sentry.io/organizations/")+n+"/issues/?project="+i+"&query="+t.event_id),e.exceptions.sendExceptionEvent(h),t}}var yr=_((function e(t,n,i,r,o){v(this,e),this.name=mr,this.setupOnce=function(e){e(_r(t,{organization:n,projectId:i,prefix:r,severityAllowList:o}))}}))
var br,wr,kr,Sr=function(){function e(t){v(this,e),this._instance=t}return _(e,[{key:"doPageView",value:function(e){var t,n=this._previousPageViewProperties(e)
return this._currentPath=null!==(t=null==U?void 0:U.location.pathname)&&void 0!==t?t:"",this._instance.scrollManager.resetContext(),this._prevPageviewTimestamp=e,n}},{key:"doPageLeave",value:function(e){return this._previousPageViewProperties(e)}},{key:"_previousPageViewProperties",value:function(e){var t=this._currentPath,n=this._prevPageviewTimestamp,i=this._instance.scrollManager.getContext()
if(!n)return{}
var r={}
if(i){var o=i.maxScrollHeight,s=i.lastScrollY,a=i.maxScrollY,u=i.maxContentHeight,c=i.lastContentY,l=i.maxContentY
A(o)||A(s)||A(a)||A(u)||A(c)||A(l)||(o=Math.ceil(o),s=Math.ceil(s),a=Math.ceil(a),u=Math.ceil(u),c=Math.ceil(c),l=Math.ceil(l),r={$prev_pageview_last_scroll:s,$prev_pageview_last_scroll_percentage:o<=1?1:Er(s/o,0,1),$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:o<=1?1:Er(a/o,0,1),$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:u<=1?1:Er(c/u,0,1),$prev_pageview_max_content:l,$prev_pageview_max_content_percentage:u<=1?1:Er(l/u,0,1)})}return t&&(r.$prev_pageview_pathname=t),n&&(r.$prev_pageview_duration=(e.getTime()-n.getTime())/1e3),r}}]),e}()
function Er(e,t,n){return Math.max(t,Math.min(e,n))}!function(e){e.Popover="popover",e.API="api",e.Widget="widget"}(br||(br={})),function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}(wr||(wr={})),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}(kr||(kr={}))
var xr=function(){function e(){v(this,e),y(this,"events",{}),this.events={}}return _(e,[{key:"on",value:function(e,t){var n=this
return this.events[e]||(this.events[e]=[]),this.events[e].push(t),function(){n.events[e]=n.events[e].filter((function(e){return e!==t}))}}},{key:"emit",value:function(e,t){var n,i=E(this.events[e]||[])
try{for(i.s();!(n=i.n()).done;)(0,n.value)(t)}catch(e){i.e(e)}finally{i.f()}var r,o=E(this.events["*"]||[])
try{for(o.s();!(r=o.n()).done;)(0,r.value)(e,t)}catch(e){o.e(e)}finally{o.f()}}}]),e}(),Pr=function(){function e(t){var n=this
v(this,e),y(this,"_debugEventEmitter",new xr),y(this,"checkStep",(function(e,t){return n.checkStepEvent(e,t)&&n.checkStepUrl(e,t)&&n.checkStepElement(e,t)})),y(this,"checkStepEvent",(function(e,t){return null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event)})),this.instance=t,this.actionEvents=new Set,this.actionRegistry=new Set}return _(e,[{key:"init",value:function(){var e,t,n=this
A(null===(e=this.instance)||void 0===e?void 0:e._addCaptureHook)||(null===(t=this.instance)||void 0===t||t._addCaptureHook((function(e,t){n.on(e,t)})))}},{key:"register",value:function(e){var t,n,i=this
if(!A(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)&&(e.forEach((function(e){var t,n
null===(t=i.actionRegistry)||void 0===t||t.add(e),null===(n=e.steps)||void 0===n||n.forEach((function(e){var t
null===(t=i.actionEvents)||void 0===t||t.add((null==e?void 0:e.event)||"")}))})),null!==(n=this.instance)&&void 0!==n&&n.autocapture)){var r,o=new Set
e.forEach((function(e){var t
null===(t=e.steps)||void 0===t||t.forEach((function(e){null!=e&&e.selector&&o.add(null==e?void 0:e.selector)}))})),null===(r=this.instance)||void 0===r||r.autocapture.setElementSelectors(o)}}},{key:"on",value:function(e,t){var n,i=this
null!=t&&0!=e.length&&(this.actionEvents.has(e)||this.actionEvents.has(null==t?void 0:t.event))&&this.actionRegistry&&(null===(n=this.actionRegistry)||void 0===n?void 0:n.size)>0&&this.actionRegistry.forEach((function(e){i.checkAction(t,e)&&i._debugEventEmitter.emit("actionCaptured",e.name)}))}},{key:"_addActionHook",value:function(e){this.onAction("actionCaptured",(function(t){return e(t)}))}},{key:"checkAction",value:function(e,t){if(null==(null==t?void 0:t.steps))return!1
var n,i=E(t.steps)
try{for(i.s();!(n=i.n()).done;){var r=n.value
if(this.checkStep(e,r))return!0}}catch(e){i.e(e)}finally{i.f()}return!1}},{key:"onAction",value:function(e,t){return this._debugEventEmitter.on(e,t)}},{key:"checkStepUrl",value:function(t,n){if(null!=n&&n.url){var i,r=null==t||null===(i=t.properties)||void 0===i?void 0:i.$current_url
if(!r||"string"!=typeof r)return!1
if(!e.matchString(r,null==n?void 0:n.url,(null==n?void 0:n.url_matching)||"contains"))return!1}return!0}},{key:"checkStepElement",value:function(t,n){if((null!=n&&n.href||null!=n&&n.tag_name||null!=n&&n.text)&&!this.getElementsList(t).some((function(t){return!(null!=n&&n.href&&!e.matchString(t.href||"",null==n?void 0:n.href,(null==n?void 0:n.href_matching)||"exact")||null!=n&&n.tag_name&&t.tag_name!==(null==n?void 0:n.tag_name)||null!=n&&n.text&&!e.matchString(t.text||"",null==n?void 0:n.text,(null==n?void 0:n.text_matching)||"exact")&&!e.matchString(t.$el_text||"",null==n?void 0:n.text,(null==n?void 0:n.text_matching)||"exact"))})))return!1
if(null!=n&&n.selector){var i,r=null==t||null===(i=t.properties)||void 0===i?void 0:i.$element_selectors
if(!r)return!1
if(!r.includes(null==n?void 0:n.selector))return!1}return!0}},{key:"getElementsList",value:function(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}],[{key:"matchString",value:function(t,n,i){switch(i){case"regex":return!!U&&xt(t,n)
case"exact":return n===t
case"contains":var r=e.escapeStringRegexp(n).replace(/_/g,".").replace(/%/g,".*")
return xt(t,r)
default:return!1}}},{key:"escapeStringRegexp",value:function(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}}]),e}(),$r=function(){function e(t){v(this,e),this.instance=t,this.eventToSurveys=new Map,this.actionToSurveys=new Map}return _(e,[{key:"register",value:function(e){var t
A(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)||(this.setupEventBasedSurveys(e),this.setupActionBasedSurveys(e))}},{key:"setupActionBasedSurveys",value:function(e){var t=this,n=e.filter((function(e){var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.actions)&&(null===(n=e.conditions)||void 0===n||null===(i=n.actions)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0}))
0!==n.length&&(null==this.actionMatcher&&(this.actionMatcher=new Pr(this.instance),this.actionMatcher.init(),this.actionMatcher._addActionHook((function(e){t.onAction(e)}))),n.forEach((function(e){var n,i,r,o,s,a,u,c,l,d
e.conditions&&null!==(n=e.conditions)&&void 0!==n&&n.actions&&null!==(i=e.conditions)&&void 0!==i&&null!==(r=i.actions)&&void 0!==r&&r.values&&(null===(o=e.conditions)||void 0===o||null===(s=o.actions)||void 0===s||null===(a=s.values)||void 0===a?void 0:a.length)>0&&(null===(u=t.actionMatcher)||void 0===u||u.register(e.conditions.actions.values),null===(c=e.conditions)||void 0===c||null===(l=c.actions)||void 0===l||null===(d=l.values)||void 0===d||d.forEach((function(n){if(n&&n.name){var i=t.actionToSurveys.get(n.name)
i&&i.push(e.id),t.actionToSurveys.set(n.name,i||[e.id])}})))})))}},{key:"setupEventBasedSurveys",value:function(e){var t,n=this
0!==e.filter((function(e){var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0})).length&&(null===(t=this.instance)||void 0===t||t._addCaptureHook((function(e,t){n.onEvent(e,t)})),e.forEach((function(e){var t,i,r
null===(t=e.conditions)||void 0===t||null===(i=t.events)||void 0===i||null===(r=i.values)||void 0===r||r.forEach((function(t){if(t&&t.name){var i=n.eventToSurveys.get(t.name)
i&&i.push(e.id),n.eventToSurveys.set(t.name,i||[e.id])}}))})))}},{key:"onEvent",value:function(t,n){var i,r,o=(null===(i=this.instance)||void 0===i||null===(r=i.persistence)||void 0===r?void 0:r.props[qe])||[]
if(e.SURVEY_SHOWN_EVENT_NAME==t&&n&&o.length>0){var s,a=null==n||null===(s=n.properties)||void 0===s?void 0:s.$survey_id
if(a){var u=o.indexOf(a)
u>=0&&(o.splice(u,1),this._updateActivatedSurveys(o))}}else this.eventToSurveys.has(t)&&this._updateActivatedSurveys(o.concat(this.eventToSurveys.get(t)||[]))}},{key:"onAction",value:function(e){var t,n,i=(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n?void 0:n.props[qe])||[]
this.actionToSurveys.has(e)&&this._updateActivatedSurveys(i.concat(this.actionToSurveys.get(e)||[]))}},{key:"_updateActivatedSurveys",value:function(e){var t,n
null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register(y({},qe,w(new Set(e))))}},{key:"getSurveys",value:function(){var e,t
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t?void 0:t.props[qe])||[]}},{key:"getEventToSurveys",value:function(){return this.eventToSurveys}},{key:"_getActionMatcher",value:function(){return this.actionMatcher}}]),e}()
y($r,"SURVEY_SHOWN_EVENT_NAME","survey shown")
var Cr="[Surveys]",Tr={icontains:function(e){return!!U&&U.location.href.toLowerCase().indexOf(e.toLowerCase())>-1},not_icontains:function(e){return!!U&&-1===U.location.href.toLowerCase().indexOf(e.toLowerCase())},regex:function(e){return!!U&&xt(U.location.href,e)},not_regex:function(e){return!!U&&!xt(U.location.href,e)},exact:function(e){return(null==U?void 0:U.location.href)===e},is_not:function(e){return(null==U?void 0:U.location.href)!==e}},Or=function(){function e(t){v(this,e),this.instance=t,this._surveyEventReceiver=null}return _(e,[{key:"afterDecideResponse",value:function(e){this._decideServerResponse=!!e.surveys,this.loadIfEnabled()}},{key:"loadIfEnabled",value:function(){var e=this,t=null==te?void 0:te.extendPostHogWithSurveys
this.instance.config.disable_surveys||!this._decideServerResponse||t||(null==this._surveyEventReceiver&&(this._surveyEventReceiver=new $r(this.instance)),this.instance.requestRouter.loadScript("/static/surveys.js",(function(t){if(t)return ie.error(Cr,"Could not load surveys script",t)
e._surveyManager=te.extendPostHogWithSurveys(e.instance)})))}},{key:"getSurveys",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(this.instance.config.disable_surveys)return e([])
null==this._surveyEventReceiver&&(this._surveyEventReceiver=new $r(this.instance))
var i=this.instance.get_property(Be)
if(i&&!n)return e(i)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/surveys/?token=".concat(this.instance.config.token)),method:"GET",transport:"XHR",callback:function(n){var i
if(200!==n.statusCode||!n.json)return e([])
var r,o=n.json.surveys||[],s=o.filter((function(e){var t,n,i,r,o,s,a,u,c,l,d,f
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i?void 0:i.values)&&(null===(r=e.conditions)||void 0===r||null===(o=r.events)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0||(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(u=e.conditions)||void 0===u||null===(c=u.actions)||void 0===c?void 0:c.values)&&(null===(l=e.conditions)||void 0===l||null===(d=l.actions)||void 0===d||null===(f=d.values)||void 0===f?void 0:f.length)>0}))
return s.length>0&&(null===(r=t._surveyEventReceiver)||void 0===r||r.register(s)),null===(i=t.instance.persistence)||void 0===i||i.register(y({},Be,o)),e(o)}})}},{key:"getActiveMatchingSurveys",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.getSurveys((function(n){var i,r=n.filter((function(e){return!(!e.start_date||e.end_date)})).filter((function(e){var t,n,i,r
if(!e.conditions)return!0
var o=null===(t=e.conditions)||void 0===t||!t.url||Tr[null!==(n=null===(i=e.conditions)||void 0===i?void 0:i.urlMatchType)&&void 0!==n?n:"icontains"](e.conditions.url),s=null===(r=e.conditions)||void 0===r||!r.selector||(null==J?void 0:J.querySelector(e.conditions.selector))
return o&&s})),o=null===(i=t._surveyEventReceiver)||void 0===i?void 0:i.getSurveys(),s=r.filter((function(e){var n,i,r,s,a,u,c,l,d,f
if(!e.linked_flag_key&&!e.targeting_flag_key&&!e.internal_targeting_flag_key)return!0
var h=!e.linked_flag_key||t.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),p=!e.targeting_flag_key||t.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key),g=(null===(n=e.conditions)||void 0===n?void 0:n.events)&&(null===(i=e.conditions)||void 0===i||null===(r=i.events)||void 0===r?void 0:r.values)&&(null===(s=e.conditions)||void 0===s||null===(a=s.events)||void 0===a?void 0:a.values.length)>0,v=(null===(u=e.conditions)||void 0===u?void 0:u.actions)&&(null===(c=e.conditions)||void 0===c||null===(l=c.actions)||void 0===l?void 0:l.values)&&(null===(d=e.conditions)||void 0===d||null===(f=d.actions)||void 0===f?void 0:f.values.length)>0,m=!g&&!v||(null==o?void 0:o.includes(e.id)),_=t._canActivateRepeatedly(e),y=!(e.internal_targeting_flag_key&&!_)||t.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key)
return h&&p&&y&&m}))
return e(s)}),n)}},{key:"getNextSurveyStep",value:function(e,t,n){var i,r=e.questions[t],o=t+1
if(null===(i=r.branching)||void 0===i||!i.type)return t===e.questions.length-1?kr.End:o
if(r.branching.type===kr.End)return kr.End
if(r.branching.type===kr.SpecificQuestion){if(Number.isInteger(r.branching.index))return r.branching.index}else if(r.branching.type===kr.ResponseBased){if(r.type===wr.SingleChoice){var s,a,u=r.choices.indexOf("".concat(n))
if(null!==(s=r.branching)&&void 0!==s&&null!==(a=s.responseValues)&&void 0!==a&&a.hasOwnProperty(u)){var c=r.branching.responseValues[u]
return Number.isInteger(c)?c:c===kr.End?kr.End:o}}else if(r.type===wr.Rating){var l,d
if("number"!=typeof n||!Number.isInteger(n))throw new Error("The response type must be an integer")
var f=function(e,t){if(3===t){if(e<1||e>3)throw new Error("The response must be in range 1-3")
return 1===e?"negative":2===e?"neutral":"positive"}if(5===t){if(e<1||e>5)throw new Error("The response must be in range 1-5")
return e<=2?"negative":3===e?"neutral":"positive"}if(10===t){if(e<0||e>10)throw new Error("The response must be in range 0-10")
return e<=6?"detractors":e<=8?"passives":"promoters"}throw new Error("The scale must be one of: 3, 5, 10")}(n,r.scale)
if(null!==(l=r.branching)&&void 0!==l&&null!==(d=l.responseValues)&&void 0!==d&&d.hasOwnProperty(f)){var h=r.branching.responseValues[f]
return Number.isInteger(h)?h:h===kr.End?kr.End:o}}return o}return ie.warn(Cr,"Falling back to next question index due to unexpected branching type"),o}},{key:"_canActivateRepeatedly",value:function(e){return D(te.__PosthogExtensions__.canActivateRepeatedly)&&ie.warn(Cr,"canActivateRepeatedly is not defined, must init before calling"),te.__PosthogExtensions__.canActivateRepeatedly(e)}},{key:"canRenderSurvey",value:function(e){var t=this
D(this._surveyManager)?ie.warn(Cr,"canActivateRepeatedly is not defined, must init before calling"):this.getSurveys((function(n){var i=n.filter((function(t){return t.id===e}))[0]
t._surveyManager.canRenderSurvey(i)}))}},{key:"renderSurvey",value:function(e,t){var n=this
D(this._surveyManager)?ie.warn(Cr,"canActivateRepeatedly is not defined, must init before calling"):this.getSurveys((function(i){var r=i.filter((function(t){return t.id===e}))[0]
n._surveyManager.renderSurvey(r,null==J?void 0:J.querySelector(t))}))}}]),e}(),Ir=function(){function e(t){var n,i,r=this
v(this,e),y(this,"serverLimits",{}),y(this,"lastEventRateLimited",!1),y(this,"checkForLimiting",(function(e){var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach((function(e){ie.info("[RateLimiter] ".concat(e||"events"," is quota limited.")),r.serverLimits[e]=(new Date).getTime()+6e4}))}catch(e){return void ie.warn('[RateLimiter] could not rate limit - continuing. Error: "'.concat(null==e?void 0:e.message,'"'),{text:t})}})),this.instance=t,this.captureEventsPerSecond=(null===(n=t.config.rate_limiting)||void 0===n?void 0:n.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null===(i=t.config.rate_limiting)||void 0===i?void 0:i.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}return _(e,[{key:"clientRateLimitContext",value:function(){var e,t,n,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=(new Date).getTime(),o=null!==(e=null===(t=this.instance.persistence)||void 0===t?void 0:t.get_property(We))&&void 0!==e?e:{tokens:this.captureEventsBurstLimit,last:r}
o.tokens+=(r-o.last)/1e3*this.captureEventsPerSecond,o.last=r,o.tokens>this.captureEventsBurstLimit&&(o.tokens=this.captureEventsBurstLimit)
var s=o.tokens<1
return s||i||(o.tokens=Math.max(0,o.tokens-1)),!s||this.lastEventRateLimited||i||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond," events per second and ").concat(this.captureEventsBurstLimit," events burst limit.")},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=s,null===(n=this.instance.persistence)||void 0===n||n.set_property(We,o),{isRateLimited:s,remainingTokens:o.tokens}}},{key:"isServerRateLimited",value:function(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}]),e}(),Rr=function(){return p({initialPathName:(null==K?void 0:K.pathname)||"",referringDomain:xn.referringDomain()},xn.campaignParams())},Lr=function(){function e(t,n,i){var r=this
v(this,e),y(this,"_onSessionIdCallback",(function(e){var t=r._getStoredProps()
if(!t||t.sessionId!==e){var n={sessionId:e,props:r._sessionSourceParamGenerator()}
r._persistence.register(y({},Ge,n))}})),this._sessionIdManager=t,this._persistence=n,this._sessionSourceParamGenerator=i||Rr,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}return _(e,[{key:"_getStoredProps",value:function(){return this._persistence.props[Ge]}},{key:"getSessionProps",value:function(){var e,t=null===(e=this._getStoredProps())||void 0===e?void 0:e.props
return t?{$client_session_initial_referring_host:t.referringDomain,$client_session_initial_pathname:t.initialPathName,$client_session_initial_utm_source:t.utm_source,$client_session_initial_utm_campaign:t.utm_campaign,$client_session_initial_utm_medium:t.utm_medium,$client_session_initial_utm_content:t.utm_content,$client_session_initial_utm_term:t.utm_term}:{}}}]),e}(),Fr=["ahrefsbot","ahrefssiteaudit","applebot","baiduspider","bingbot","bingpreview","bot.htm","bot.php","crawler","deepscan","duckduckbot","facebookexternal","facebookcatalog","gptbot","http://yandex.com/bots","hubspot","ia_archiver","linkedinbot","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","semrushbot","sitebulb","slurp","turnitin","twitterbot","vercelbot","yahoo! slurp","yandexbot","headlesschrome","cypress","Google-HotelAdsVerifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleweblight","mediapartners-google","storebot-google","Bytespider;"],Ar=function(e,t){if(!e)return!1
var n=e.toLowerCase()
return Fr.concat(t||[]).some((function(e){var t=e.toLowerCase()
return-1!==n.indexOf(t)}))},jr=function(){function e(){v(this,e),this.clicks=[]}return _(e,[{key:"isRageClick",value:function(e,t,n){var i=this.clicks[this.clicks.length-1]
if(i&&Math.abs(e-i.x)+Math.abs(t-i.y)<30&&n-i.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}]),e}()
function Mr(e){var t
return e.id===Ke||!(null===(t=e.closest)||void 0===t||!t.call(e,"#"+Ke))}var Nr=function(){function e(t){var n,i=this
v(this,e),y(this,"rageclicks",new jr),y(this,"_enabledServerSide",!1),y(this,"_initialized",!1),y(this,"_flushInterval",null),this.instance=t,this._enabledServerSide=!(null===(n=this.instance.persistence)||void 0===n||!n.props[Se]),null==U||U.addEventListener("beforeunload",(function(){i.flush()}))}return _(e,[{key:"flushIntervalMilliseconds",get:function(){var e=5e3
return L(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}},{key:"isEnabled",get:function(){return A(this.instance.config.capture_heatmaps)?A(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}},{key:"startIfEnabled",value:function(){if(this.isEnabled){if(this._initialized)return
ie.info("[heatmaps] starting..."),this._setupListeners(),this._flushInterval=setInterval(this.flush.bind(this),this.flushIntervalMilliseconds)}else{var e
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),this.getAndClearBuffer()}}},{key:"afterDecideResponse",value:function(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register(y({},Se,t)),this._enabledServerSide=t,this.startIfEnabled()}},{key:"getAndClearBuffer",value:function(){var e=this.buffer
return this.buffer=void 0,e}},{key:"_setupListeners",value:function(){var e=this
U&&J&&(me(J,"click",(function(t){return e._onClick(t||(null==U?void 0:U.event))}),!1,!0),me(J,"mousemove",(function(t){return e._onMouseMove(t||(null==U?void 0:U.event))}),!1,!0),this._initialized=!0)}},{key:"_getProperties",value:function(e,t){var n=this.instance.scrollManager.scrollY(),i=this.instance.scrollManager.scrollX(),r=this.instance.scrollManager.scrollElement(),o=function(e,t,n){for(var i=e;i&&!Bn(i,"body");){if(i===n)return!1
if(ce(t,null==U?void 0:U.getComputedStyle(i).position))return!0
i=Gn(i)}return!1}(e.target,["fixed","sticky"],r)
return{x:e.clientX+(o?0:i),y:e.clientY+(o?0:n),target_fixed:o,type:t}}},{key:"_onClick",value:function(e){var t
if(!Mr(e.target)){var n=this._getProperties(e,"click")
null!==(t=this.rageclicks)&&void 0!==t&&t.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(p(p({},n),{},{type:"rageclick"})),this._capture(n)}}},{key:"_onMouseMove",value:function(e){var t=this
Mr(e.target)||(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout((function(){t._capture(t._getProperties(e,"mousemove"))}),500))}},{key:"_capture",value:function(e){if(U){var t=U.location.href
this.buffer=this.buffer||{},this.buffer[t]||(this.buffer[t]=[]),this.buffer[t].push(e)}}},{key:"flush",value:function(){this.buffer&&!F(this.buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}]),e}(),Dr=function(){function e(t){var n=this
v(this,e),y(this,"_updateScrollData",(function(){var e,t,i,r
n.context||(n.context={})
var o=n.scrollElement(),s=n.scrollY(),a=o?Math.max(0,o.scrollHeight-o.clientHeight):0,u=s+((null==o?void 0:o.clientHeight)||0),c=(null==o?void 0:o.scrollHeight)||0
n.context.lastScrollY=Math.ceil(s),n.context.maxScrollY=Math.max(s,null!==(e=n.context.maxScrollY)&&void 0!==e?e:0),n.context.maxScrollHeight=Math.max(a,null!==(t=n.context.maxScrollHeight)&&void 0!==t?t:0),n.context.lastContentY=u,n.context.maxContentY=Math.max(u,null!==(i=n.context.maxContentY)&&void 0!==i?i:0),n.context.maxContentHeight=Math.max(c,null!==(r=n.context.maxContentHeight)&&void 0!==r?r:0)})),this.instance=t}return _(e,[{key:"getContext",value:function(){return this.context}},{key:"resetContext",value:function(){var e=this.context
return setTimeout(this._updateScrollData,0),e}},{key:"startMeasuringScrollPosition",value:function(){null==U||U.addEventListener("scroll",this._updateScrollData,!0),null==U||U.addEventListener("scrollend",this._updateScrollData,!0),null==U||U.addEventListener("resize",this._updateScrollData)}},{key:"scrollElement",value:function(){if(!this.instance.config.scroll_root_selector)return null==U?void 0:U.document.documentElement
var e,t=E(I(this.instance.config.scroll_root_selector)?this.instance.config.scroll_root_selector:[this.instance.config.scroll_root_selector])
try{for(t.s();!(e=t.n()).done;){var n=e.value,i=null==U?void 0:U.document.querySelector(n)
if(i)return i}}catch(e){t.e(e)}finally{t.f()}}},{key:"scrollY",value:function(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return U&&(U.scrollY||U.pageYOffset||U.document.documentElement.scrollTop)||0}},{key:"scrollX",value:function(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return U&&(U.scrollX||U.pageXOffset||U.document.documentElement.scrollLeft)||0}}]),e}(),Br="$copy_autocapture"
function qr(e,t){return t.length>e?t.slice(0,e)+"...":t}var Hr,Ur=function(){function e(t){v(this,e),y(this,"_initialized",!1),y(this,"_isDisabledServerSide",null),y(this,"rageclicks",new jr),y(this,"_elementsChainAsString",!1),this.instance=t,this._elementSelectors=null}return _(e,[{key:"config",get:function(){var e,t,n=L(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null===(e=n.url_allowlist)||void 0===e?void 0:e.map((function(e){return new RegExp(e)})),n.url_ignorelist=null===(t=n.url_ignorelist)||void 0===t?void 0:t.map((function(e){return new RegExp(e)})),n}},{key:"_addDomEventHandlers",value:function(){var e=this
if(this.isBrowserSupported()){if(U&&J){var t=function(t){t=t||(null==U?void 0:U.event)
try{e._captureEvent(t)}catch(e){ie.error("Failed to capture event",e)}},n=function(t){t=t||(null==U?void 0:U.event),e._captureEvent(t,Br)}
me(J,"submit",t,!1,!0),me(J,"change",t,!1,!0),me(J,"click",t,!1,!0),this.config.capture_copied_text&&(me(J,"copy",n,!1,!0),me(J,"cut",n,!1,!0))}}else ie.info("Disabling Automatic Event Collection because this browser is not supported")}},{key:"startIfEnabled",value:function(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}},{key:"afterDecideResponse",value:function(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register(y({},ke,!!e.autocapture_opt_out)),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}},{key:"setElementSelectors",value:function(e){this._elementSelectors=e}},{key:"getElementSelectors",value:function(e){var t,n=[]
return null===(t=this._elementSelectors)||void 0===t||t.forEach((function(t){var i=null==J?void 0:J.querySelectorAll(t)
null==i||i.forEach((function(i){e===i&&n.push(t)}))})),n}},{key:"isEnabled",get:function(){var e,t,n=null===(e=this.instance.persistence)||void 0===e?void 0:e.props[ke],i=this._isDisabledServerSide
if(N(i)&&!q(n)&&!this.instance.config.advanced_disable_decide)return!1
var r=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!r}},{key:"_previousElementSibling",value:function(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!Dn(t))
return t}},{key:"_getAugmentPropertiesFromElement",value:function(e){if(!zn(e))return{}
var t={}
return ae(e.attributes,(function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var n=e.name.replace("data-ph-capture-attribute-",""),i=e.value
n&&i&&ei(i)&&(t[n]=i)}})),t}},{key:"_getPropertiesFromElement",value:function(e,t,n){var i,r=e.tagName.toLowerCase(),o={tag_name:r}
Un.indexOf(r)>-1&&!n&&("a"===r.toLowerCase()||"button"===r.toLowerCase()?o.$el_text=qr(1024,ti(e)):o.$el_text=qr(1024,Nn(e)))
var s=jn(e)
s.length>0&&(o.classes=s.filter((function(e){return""!==e})))
var a=null===(i=this.config)||void 0===i?void 0:i.element_attribute_ignorelist
ae(e.attributes,(function(n){var i
if((!Vn(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==a||!a.includes(n.name))&&!t&&ei(n.value)&&(i=n.name,!j(i)||"_ngcontent"!==i.substring(0,10)&&"_nghost"!==i.substring(0,7))){var r=n.value
"class"===n.name&&(r=Fn(r).join(" ")),o["attr__"+n.name]=qr(1024,r)}}))
for(var u=1,c=1,l=e;l=this._previousElementSibling(l);)u++,l.tagName===e.tagName&&c++
return o.nth_child=u,o.nth_of_type=c,o}},{key:"_getDefaultProperties",value:function(e){return{$event_type:e,$ce_version:1}}},{key:"_getEventTarget",value:function(e){return A(e.target)?e.srcElement||null:null!==(t=e.target)&&void 0!==t&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}},{key:"_captureEvent",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$autocapture"
if(this.isEnabled){var i,r=this._getEventTarget(e)
qn(r)&&(r=r.parentNode||null),"$autocapture"===n&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!==(i=this.rageclicks)&&void 0!==i&&i.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._captureEvent(e,"$rageclick")
var o=n===Br
if(r&&Wn(r,e,this.config,o,o?["copy","cut"]:void 0)){for(var s,a,u=[r],c=r;c.parentNode&&!Bn(c,"body");)Hn(c.parentNode)?(u.push(c.parentNode.host),c=c.parentNode.host):(u.push(c.parentNode),c=c.parentNode)
var l,d,f=[],h={},p=!1
if(ae(u,(function(e){var n=zn(e)
"a"===e.tagName.toLowerCase()&&(l=e.getAttribute("href"),l=n&&ei(l)&&l),ce(jn(e),"ph-no-capture")&&(p=!0),f.push(t._getPropertiesFromElement(e,t.instance.config.mask_all_element_attributes,t.instance.config.mask_all_text))
var i=t._getAugmentPropertiesFromElement(e)
ue(h,i)})),this.instance.config.mask_all_text||("a"===r.tagName.toLowerCase()||"button"===r.tagName.toLowerCase()?f[0].$el_text=ti(r):f[0].$el_text=Nn(r)),l){var g,v
f[0].attr__href=l
var m=null===(g=Et(l))||void 0===g?void 0:g.host,_=null==U||null===(v=U.location)||void 0===v?void 0:v.host
m&&_&&m!==_&&(d=l)}if(p)return!1
var y=ue(this._getDefaultProperties(e.type),this._elementsChainAsString?{$elements_chain:ii(f)}:{$elements:f},null!==(s=f[0])&&void 0!==s&&s.$el_text?{$el_text:null===(a=f[0])||void 0===a?void 0:a.$el_text}:{},d&&"click"===e.type?{$external_click_url:d}:{},h),b=this.getElementSelectors(r)
if(b&&b.length>0&&(y.$element_selectors=b),n===Br){var w,k=Mn(null==U||null===(w=U.getSelection())||void 0===w?void 0:w.toString()),S=e.type||"clipboard"
if(!k)return!1
y.$selected_content=k,y.$copy_type=S}return this.instance.capture(n,y),!0}}}},{key:"isBrowserSupported",value:function(){return R(null==J?void 0:J.querySelectorAll)}}]),e}(),Gr=function(){function e(t){var n=this
v(this,e),y(this,"_restoreXHRPatch",void 0),y(this,"_restoreFetchPatch",void 0),y(this,"_startCapturing",(function(){A(n._restoreXHRPatch)&&te.postHogTracingHeadersPatchFns._patchXHR(n.instance.sessionManager),A(n._restoreFetchPatch)&&te.postHogTracingHeadersPatchFns._patchFetch(n.instance.sessionManager)})),this.instance=t}return _(e,[{key:"_loadScript",value:function(e){te.postHogTracingHeadersPatchFns&&e(),this.instance.requestRouter.loadScript("/static/tracing-headers.js?v=".concat(x.LIB_VERSION),(function(t){if(t)return ie.error("[TRACING-HEADERS] failed to load script",t)
e()}))}},{key:"startIfEnabledOrStop",value:function(){var e,t
this.instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null===(e=this._restoreXHRPatch)||void 0===e||e.call(this),null===(t=this._restoreFetchPatch)||void 0===t||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}]),e}()
!function(e){e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED"}(Hr||(Hr={}))
var Wr=function(){function e(t){v(this,e),this.instance=t}return _(e,[{key:"config",get:function(){return this.instance.config}},{key:"consent",get:function(){return this.getDnt()?Hr.DENIED:this.storedConsent}},{key:"isOptedOut",value:function(){return this.consent===Hr.DENIED||this.consent===Hr.PENDING&&this.config.opt_out_capturing_by_default}},{key:"isOptedIn",value:function(){return!this.isOptedOut()}},{key:"optInOut",value:function(e){this.storage.set(this.storageKey,e?1:0,this.config.cookie_expiration,this.config.cross_subdomain_cookie,this.config.secure_cookie)}},{key:"reset",value:function(){this.storage.remove(this.storageKey,this.config.cross_subdomain_cookie)}},{key:"storageKey",get:function(){var e=this.instance.config,t=e.token
return(e.opt_out_capturing_cookie_prefix||"__ph_opt_in_out_")+t}},{key:"storedConsent",get:function(){var e=this.storage.get(this.storageKey)
return"1"===e?Hr.GRANTED:"0"===e?Hr.DENIED:Hr.PENDING}},{key:"storage",get:function(){if(!this._storage){var e=this.config.opt_out_capturing_persistence_type
this._storage="localStorage"===e?vt:pt
var t="localStorage"===e?pt:vt
t.get(this.storageKey)&&(this._storage.get(this.storageKey)||this.optInOut("1"===t.get(this.storageKey)),t.remove(this.storageKey,this.config.cross_subdomain_cookie))}return this._storage}},{key:"getDnt",value:function(){return!!this.config.respect_dnt&&!!_e([null==Q?void 0:Q.doNotTrack,null==Q?void 0:Q.msDoNotTrack,te.doNotTrack],(function(e){return ce([!0,1,"1","yes"],e)}))}}]),e}(),zr="[Exception Autocapture]",Vr=function(){function e(t){var n,i=this
v(this,e),y(this,"originalOnUnhandledRejectionHandler",void 0),y(this,"startCapturing",(function(){if(U&&i.isEnabled&&!i.hasHandlers&&!i.isCapturing){var e=U.posthogErrorWrappingFunctions.wrapOnError,t=U.posthogErrorWrappingFunctions.wrapUnhandledRejection
if(e&&t)try{i.unwrapOnError=e(i.captureException.bind(i)),i.unwrapUnhandledRejection=t(i.captureException.bind(i))}catch(e){ie.error(zr+" failed to start",e),i.stopCapturing()}else ie.error(zr+" failed to load error wrapping functions - cannot start")}})),this.instance=t,this.remoteEnabled=!(null===(n=this.instance.persistence)||void 0===n||!n.props[Ee]),this.startIfEnabled()}return _(e,[{key:"isEnabled",get:function(){var e
return null!==(e=this.remoteEnabled)&&void 0!==e&&e}},{key:"isCapturing",get:function(){var e
return!(null==U||null===(e=U.onerror)||void 0===e||!e.__POSTHOG_INSTRUMENTED__)}},{key:"hasHandlers",get:function(){return this.originalOnUnhandledRejectionHandler||this.unwrapOnError}},{key:"startIfEnabled",value:function(){this.isEnabled&&!this.isCapturing&&(ie.info(zr+" enabled, starting..."),this.loadScript(this.startCapturing))}},{key:"loadScript",value:function(e){this.hasHandlers&&e(),this.instance.requestRouter.loadScript("/static/exception-autocapture.js?v=".concat(x.LIB_VERSION),(function(t){if(t)return ie.error(zr+" failed to load script",t)
e()}))}},{key:"stopCapturing",value:function(){var e,t
null===(e=this.unwrapOnError)||void 0===e||e.call(this),null===(t=this.unwrapUnhandledRejection)||void 0===t||t.call(this)}},{key:"afterDecideResponse",value:function(e){var t=e.autocaptureExceptions
this.remoteEnabled=!!t||!1,this.instance.persistence&&this.instance.persistence.register(y({},Ee,this.remoteEnabled)),this.startIfEnabled()}},{key:"captureException",value:function(e){var t=this.instance.requestRouter.endpointFor("ui")
e.$exception_personURL="".concat(t,"/project/").concat(this.instance.config.token,"/person/").concat(this.instance.get_distinct_id()),this.instance.exceptions.sendExceptionEvent(e)}}]),e}(),Qr=9e5,Jr="[Web Vitals]",Kr=function(){function e(t){var n,i=this
v(this,e),y(this,"_enabledServerSide",!1),y(this,"_initialized",!1),y(this,"buffer",{url:void 0,metrics:[],firstMetricTimestamp:void 0}),y(this,"_flushToCapture",(function(){clearTimeout(i._delayedFlushTimer),0!==i.buffer.metrics.length&&(i.instance.capture("$web_vitals",i.buffer.metrics.reduce((function(e,t){var n
return p(p({},e),{},(y(n={},"$web_vitals_".concat(t.name,"_event"),p({},t)),y(n,"$web_vitals_".concat(t.name,"_value"),t.value),n))}),{})),i.buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})})),y(this,"_addToBuffer",(function(e){var t,n=null===(t=i.instance.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0)
if(A(n))ie.error(Jr+"Could not read session ID. Dropping metrics!")
else{i.buffer=i.buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var r=i._currentURL()
A(r)||(D(null==e?void 0:e.name)||D(null==e?void 0:e.value)?ie.error(Jr+"Invalid metric received",e):i._maxAllowedValue&&e.value>=i._maxAllowedValue?ie.error(Jr+"Ignoring metric with value >= "+i._maxAllowedValue,e):(i.buffer.url!==r&&(i._flushToCapture(),i._delayedFlushTimer=setTimeout(i._flushToCapture,8e3)),A(i.buffer.url)&&(i.buffer.url=r),i.buffer.firstMetricTimestamp=A(i.buffer.firstMetricTimestamp)?Date.now():i.buffer.firstMetricTimestamp,i.buffer.metrics.push(p(p({},e),{},{$current_url:r,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),i.buffer.metrics.length===i.allowedMetrics.length&&i._flushToCapture()))}})),y(this,"_startCapturing",(function(){var e,t,n,r,o=te.__PosthogExtensions__
if(!A(o)){var s=o.postHogWebVitalsCallbacks
e=s.onLCP,t=s.onCLS,n=s.onFCP,r=s.onINP}e&&t&&n&&r?(i.allowedMetrics.indexOf("LCP")>-1&&e(i._addToBuffer.bind(i)),i.allowedMetrics.indexOf("CLS")>-1&&t(i._addToBuffer.bind(i)),i.allowedMetrics.indexOf("FCP")>-1&&n(i._addToBuffer.bind(i)),i.allowedMetrics.indexOf("INP")>-1&&r(i._addToBuffer.bind(i)),i._initialized=!0):ie.error(Jr+"web vitals callbacks not loaded - not starting")})),this.instance=t,this._enabledServerSide=!(null===(n=this.instance.persistence)||void 0===n||!n.props[Pe]),this.startIfEnabled()}return _(e,[{key:"allowedMetrics",get:function(){var e,t,n=L(this.instance.config.capture_performance)?null===(e=this.instance.config.capture_performance)||void 0===e?void 0:e.web_vitals_allowed_metrics:void 0
return A(n)?(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[$e])||["CLS","FCP","INP","LCP"]:n}},{key:"_maxAllowedValue",get:function(){var e=L(this.instance.config.capture_performance)&&B(this.instance.config.capture_performance.__web_vitals_max_value)?this.instance.config.capture_performance.__web_vitals_max_value:Qr
return 0<e&&e<=6e4?Qr:e}},{key:"isEnabled",get:function(){var e=L(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals:void 0
return q(e)?e:this._enabledServerSide}},{key:"startIfEnabled",value:function(){this.isEnabled&&!this._initialized&&(ie.info(Jr+" enabled, starting..."),this.loadScript(this._startCapturing))}},{key:"afterDecideResponse",value:function(e){var t=L(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=L(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this.instance.persistence&&(this.instance.persistence.register(y({},Pe,t)),this.instance.persistence.register(y({},$e,n))),this._enabledServerSide=t,this.startIfEnabled()}},{key:"loadScript",value:function(e){var t
null!==(t=te.__PosthogExtensions__)&&void 0!==t&&t.postHogWebVitalsCallbacks&&e(),this.instance.requestRouter.loadScript("/static/web-vitals.js?v=".concat(x.LIB_VERSION),(function(t){t?ie.error(Jr+" failed to load script",t):e()}))}},{key:"_currentURL",value:function(){var e=U?U.location.href:void 0
return e||ie.error(Jr+"Could not determine current URL"),e}}]),e}(),Xr=function(){function e(t){var n
v(this,e),this.instance=t,this._endpointSuffix=(null===(n=this.instance.persistence)||void 0===n?void 0:n.props[xe])||"/e/"}return _(e,[{key:"endpoint",get:function(){return this.instance.requestRouter.endpointFor("api",this._endpointSuffix)}},{key:"afterDecideResponse",value:function(e){var t=e.autocaptureExceptions
this._endpointSuffix=L(t)&&t.endpoint||"/e/",this.instance.persistence&&this.instance.persistence.register(y({},xe,this._endpointSuffix))}},{key:"sendExceptionEvent",value:function(e){this.instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent",_url:this.endpoint})}}]),e}(),Yr={},Zr=function(){},eo="posthog",to=!rr&&-1===(null==ee?void 0:ee.indexOf("MSIE"))&&-1===(null==ee?void 0:ee.indexOf("Mozilla")),no=function(){var e,t,n
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:(t=null==J?void 0:J.location,n=null==t?void 0:t.hostname,!!j(n)&&"herokuapp.com"!==n.split(".").slice(-2).join(".")),persistence:"localStorage+cookie",persistence_name:"",loaded:Zr,store_google:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:!0,capture_pageleave:"if_capture_pageview",debug:K&&j(null==K?void 0:K.search)&&-1!==K.search.indexOf("__posthog_debug=true")||!1,verbose:!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_surveys:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==U||null===(e=U.location)||void 0===e?void 0:e.protocol),ip:!0,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},inapp_protocol:"//",inapp_link_new_window:!1,request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,on_request_error:function(e){var t="Bad HTTP status: "+e.statusCode+" "+e.text
ie.error(t)},get_device_id:function(e){return e},_onCapture:Zr,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"always",__add_tracing_headers:!1}},io=function(e){var t={}
A(e.process_person)||(t.person_profiles=e.process_person),A(e.xhr_headers)||(t.request_headers=e.xhr_headers),A(e.cookie_name)||(t.persistence_name=e.cookie_name),A(e.disable_cookie)||(t.disable_persistence=e.disable_cookie)
var n=ue({},t,e)
return I(e.property_blacklist)&&(A(e.property_denylist)?n.property_denylist=e.property_blacklist:I(e.property_denylist)?n.property_denylist=[].concat(w(e.property_blacklist),w(e.property_denylist)):ie.error("Invalid value for property_denylist config: "+e.property_denylist)),n},ro=function(){function e(){v(this,e),y(this,"__forceAllowLocalhost",!1)}return _(e,[{key:"_forceAllowLocalhost",get:function(){return this.__forceAllowLocalhost},set:function(e){ie.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}]),e}(),oo=function(){function e(){var t=this
v(this,e),y(this,"webPerformance",new ro),y(this,"version",x.LIB_VERSION),y(this,"_internalEventEmitter",new xr),this.config=no(),this.decideEndpointWasHit=!1,this.SentryIntegration=yr,this.sentryIntegration=function(e){return function(e,t){var n=_r(e,t)
return{name:mr,processEvent:function(e){return n(e)}}}(t,e)},this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this.featureFlags=new nt(this),this.toolbar=new Si(this),this.scrollManager=new Dr(this),this.pageViewManager=new Sr(this),this.surveys=new Or(this),this.exceptions=new Xr(this),this.rateLimiter=new Ir(this),this.requestRouter=new vr(this),this.consent=new Wr(this),this.people={set:function(e,n,i){var r=j(e)?y({},e,n):e
t.setPersonProperties(r),null==i||i({})},set_once:function(e,n,i){var r=j(e)?y({},e,n):e
t.setPersonProperties(void 0,r),null==i||i({})}},this.on("eventCaptured",(function(e){return ie.info("send",e)}))}return _(e,[{key:"init",value:function(t,n,i){if(i&&i!==eo){var r,o=null!==(r=Yr[i])&&void 0!==r?r:new e
return o._init(t,n,i),Yr[i]=o,Yr[eo][i]=o,o}return this._init(t,n,i)}},{key:"_init",value:function(e){var t,n,i=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0
if(A(e)||M(e))return ie.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return ie.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._triggered_notifs=[],this.set_config(ue({},no(),io(r),{name:o,token:e})),this.config.on_xhr_error&&ie.error("[posthog] on_xhr_error is deprecated. Use on_request_error instead"),this.compression=r.disable_compression?void 0:ve.GZipJS,this.persistence=new $n(this.config),this.sessionPersistence="sessionStorage"===this.config.persistence?this.persistence:new $n(p(p({},this.config),{},{persistence:"sessionStorage"}))
var s=p({},this.persistence.props),a=p({},this.sessionPersistence.props)
if(this._requestQueue=new Ei((function(e){return i._send_retriable_request(e)})),this._retryQueue=new fr(this),this.__request_queue=[],this.sessionManager=new pr(this.config,this.persistence),this.sessionPropsManager=new Lr(this.sessionManager,this.persistence),new Gr(this).startIfEnabledOrStop(),this.sessionRecording=new yi(this),this.sessionRecording.startIfEnabledOrStop(),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new Ur(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new Nr(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new Kr(this),this.exceptionObserver=new Vr(this),this.exceptionObserver.startIfEnabled(),x.DEBUG=x.DEBUG||this.config.debug,x.DEBUG&&ie.info("Starting in debug mode",{this:this,config:r,thisC:p({},this.config),p:s,s:a}),this._sync_opt_out_with_persistence(),void 0!==(null===(t=r.bootstrap)||void 0===t?void 0:t.distinctID)){var u,c,l=this.config.get_device_id(ct()),d=null!==(u=r.bootstrap)&&void 0!==u&&u.isIdentifiedID?l:r.bootstrap.distinctID
this.persistence.set_property(Ue,null!==(c=r.bootstrap)&&void 0!==c&&c.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:r.bootstrap.distinctID,$device_id:d})}if(this._hasBootstrappedFeatureFlags()){var f,h,g=Object.keys((null===(f=r.bootstrap)||void 0===f?void 0:f.featureFlags)||{}).filter((function(e){var t,n
return!(null===(t=r.bootstrap)||void 0===t||null===(n=t.featureFlags)||void 0===n||!n[e])})).reduce((function(e,t){var n,i
return e[t]=(null===(n=r.bootstrap)||void 0===n||null===(i=n.featureFlags)||void 0===i?void 0:i[t])||!1,e}),{}),v=Object.keys((null===(h=r.bootstrap)||void 0===h?void 0:h.featureFlagPayloads)||{}).filter((function(e){return g[e]})).reduce((function(e,t){var n,i,o,s
return null!==(n=r.bootstrap)&&void 0!==n&&null!==(i=n.featureFlagPayloads)&&void 0!==i&&i[t]&&(e[t]=null===(o=r.bootstrap)||void 0===o||null===(s=o.featureFlagPayloads)||void 0===s?void 0:s[t]),e}),{})
this.featureFlags.receivedFeatureFlags({featureFlags:g,featureFlagPayloads:v})}if(!this.get_distinct_id()){var m=this.config.get_device_id(ct())
this.register_once({distinct_id:m,$device_id:m},""),this.persistence.set_property(Ue,"anonymous")}return null==U||null===(n=U.addEventListener)||void 0===n||n.call(U,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this)),this.toolbar.maybeLoadToolbar(),r.segment?function(e,t){var n=e.config.segment
if(!n)return t()
!function(e,t){var n=e.config.segment
if(!n)return t()
var i=function(n){var i=function(){return n.anonymousId()||ct()}
e.config.get_device_id=i,n.id()&&(e.register({distinct_id:n.id(),$device_id:i()}),e.persistence.set_property(Ue,"identified")),t()},r=n.user()
"then"in r&&R(r.then)?r.then((function(e){return i(e)})):i(r)}(e,(function(){n.register(function(e){Promise&&Promise.resolve||ie.warn("This browser does not have Promise support, and can not use the segment integration")
var t=function(t,n){var i
if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(ie.info("Segment integration does not have a userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(ie.info("Segment integration has a userId set, identifying with PostHog"),e.identify(t.event.userId))
var r=e._calculate_event_properties(n,null!==(i=t.event.properties)&&void 0!==i?i:{},new Date)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},track:function(e){return t(e,e.event.event)},page:function(e){return t(e,"$pageview")},identify:function(e){return t(e,"$identify")},screen:function(e){return t(e,"$screen")}}}(e)).then((function(){t()}))}))}(this,(function(){return i._loaded()})):this._loaded(),R(this.config._onCapture)&&this.on("eventCaptured",(function(e){return i.config._onCapture(e.event,e)})),this}},{key:"_afterDecideResponse",value:function(e){var t,n,i,r,o,s,a,u
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=ce(e.supportedCompression,ve.GZipJS)?ve.GZipJS:ce(e.supportedCompression,ve.Base64)?ve.Base64:void 0),null!==(t=e.analytics)&&void 0!==t&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),null===(n=this.sessionRecording)||void 0===n||n.afterDecideResponse(e),null===(i=this.autocapture)||void 0===i||i.afterDecideResponse(e),null===(r=this.heatmaps)||void 0===r||r.afterDecideResponse(e),null===(o=this.surveys)||void 0===o||o.afterDecideResponse(e),null===(s=this.webVitalsAutocapture)||void 0===s||s.afterDecideResponse(e),null===(a=this.exceptions)||void 0===a||a.afterDecideResponse(e),null===(u=this.exceptionObserver)||void 0===u||u.afterDecideResponse(e)}},{key:"_loaded",value:function(){var e=this,t=this.config.advanced_disable_decide
t||this.featureFlags.setReloadingPaused(!0)
try{this.config.loaded(this)}catch(e){ie.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout((function(){e.consent.isOptedIn()&&e._captureInitialPageview()}),1),t||(new bi(this).call(),this.featureFlags.resetRequestQueue())}},{key:"_start_queue_if_opted_in",value:function(){var e
this.has_opted_out_capturing()||this.config.request_batching&&(null===(e=this._requestQueue)||void 0===e||e.enable())}},{key:"_dom_loaded",value:function(){var e=this
this.has_opted_out_capturing()||se(this.__request_queue,(function(t){return e._send_retriable_request(t)})),this.__request_queue=[],this._start_queue_if_opted_in()}},{key:"_handle_unload",value:function(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null===(e=this._requestQueue)||void 0===e||e.unload(),null===(t=this._retryQueue)||void 0===t||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}},{key:"_send_request",value:function(e){var t=this
this.__loaded&&(to?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=sr(e.url,{ip:this.config.ip?1:0}),e.headers=p({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,function(e){var t,n,i,r=p({},e)
r.timeout=r.timeout||6e4,r.url=sr(r.url,{_:(new Date).getTime().toString(),ver:x.LIB_VERSION,compression:r.compression})
var o=null!==(t=r.transport)&&void 0!==t?t:"XHR",s=null!==(n=null===(i=_e(cr,(function(e){return e.transport===o})))||void 0===i?void 0:i.method)&&void 0!==n?n:cr[0].method
if(!s)throw new Error("No available transport method")
s(r)}(p(p({},e),{},{callback:function(n){var i,r,o
t.rateLimiter.checkForLimiting(n),n.statusCode>=400&&(null===(r=(o=t.config).on_request_error)||void 0===r||r.call(o,n)),null===(i=e.callback)||void 0===i||i.call(e,n)}}))))}},{key:"_send_retriable_request",value:function(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}},{key:"_execute_array",value:function(e){var t,n=this,i=[],r=[],o=[]
se(e,(function(e){e&&(t=e[0],I(t)?o.push(e):R(e)?e.call(n):I(e)&&"alias"===t?i.push(e):I(e)&&-1!==t.indexOf("capture")&&R(n[t])?o.push(e):r.push(e))}))
var s=function(e,t){se(e,(function(e){if(I(e[0])){var n=t
ae(e,(function(e){n=n[e[0]].apply(n,e.slice(1))}))}else this[e[0]].apply(this,e.slice(1))}),t)}
s(i,this),s(r,this),s(o,this)}},{key:"_hasBootstrappedFeatureFlags",value:function(){var e,t
return(null===(e=this.config.bootstrap)||void 0===e?void 0:e.featureFlags)&&Object.keys(null===(t=this.config.bootstrap)||void 0===t?void 0:t.featureFlags).length>0||!1}},{key:"push",value:function(e){this._execute_array([e])}},{key:"capture",value:function(e,t,n){var i
if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(!this.consent.isOptedOut())if(!A(e)&&j(e)){if(this.config.opt_out_useragent_filter||!this._is_bot()){var r=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null==r||!r.isRateLimited){this.sessionPersistence.update_search_keyword(),this.config.store_google&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.store_google||this.config.save_referrer)&&this.persistence.set_initial_person_info()
var o=new Date,s=(null==n?void 0:n.timestamp)||o,a={uuid:ct(),event:e,properties:this._calculate_event_properties(e,t||{},s)}
r&&(a.properties.$lib_rate_limit_remaining_tokens=r.remainingTokens),(null==n?void 0:n.$set)&&(a.$set=null==n?void 0:n.$set)
var u=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
u&&(a.$set_once=u),(a=function(e,t){return n=e,i=function(e){return j(e)&&!N(t)?e.slice(0,t):e},r=new Set,function e(t,n){return t!==Object(t)?i?i(t):t:r.has(t)?void 0:(r.add(t),I(t)?(o=[],se(t,(function(t){o.push(e(t))}))):(o={},ae(t,(function(t,n){r.has(t)||(o[n]=e(t,n))}))),o)
var o}(n)
var n,i,r}(a,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=s,A(null==n?void 0:n.timestamp)||(a.properties.$event_time_override_provided=!0,a.properties.$event_time_override_system_time=o)
var c=p(p({},a.properties.$set),a.$set)
F(c)||this.setPersonPropertiesForFlags(c),this._internalEventEmitter.emit("eventCaptured",a)
var l={method:"POST",url:null!==(i=null==n?void 0:n._url)&&void 0!==i?i:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:a,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(l):this._requestQueue.enqueue(l),a}ie.critical("This capture call is ignored due to client rate limiting.")}}else ie.error("No event name provided to posthog.capture")}else ie.uninitializedWarning("posthog.capture")}},{key:"_addCaptureHook",value:function(e){this.on("eventCaptured",(function(t){return e(t.event,t)}))}},{key:"_calculate_event_properties",value:function(e,t,n){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var i=this.persistence.remove_event_timer(e),r=p({},t)
if(r.token=this.config.token,"$snapshot"===e){var o=p(p({},this.persistence.properties()),this.sessionPersistence.properties())
return r.distinct_id=o.distinct_id,(!j(r.distinct_id)&&!B(r.distinct_id)||M(r.distinct_id))&&ie.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),r}var s=xn.properties()
if(this.sessionManager){var a=this.sessionManager.checkAndGetSessionAndWindowId(),u=a.sessionId,c=a.windowId
r.$session_id=u,r.$window_id=c}if(this.requestRouter.region===lr.CUSTOM&&(r.$lib_custom_api_host=this.config.api_host),this.sessionPropsManager&&this.config.__preview_send_client_session_params&&("$pageview"===e||"$pageleave"===e||"$autocapture"===e)){var l=this.sessionPropsManager.getSessionProps()
r=ue(r,l)}if(!this.config.disable_scroll_properties){var d={}
"$pageview"===e?d=this.pageViewManager.doPageView(n):"$pageleave"===e&&(d=this.pageViewManager.doPageLeave(n)),r=ue(r,d)}if("$pageview"===e&&J&&(r.title=J.title),!A(i)){var f=n.getTime()-i
r.$duration=parseFloat((f/1e3).toFixed(3))}ee&&this.config.opt_out_useragent_filter&&(r.$browser_type=this._is_bot()?"bot":"browser"),(r=ue({},s,this.persistence.properties(),this.sessionPersistence.properties(),r)).$is_identified=this._isIdentified(),I(this.config.property_denylist)?ae(this.config.property_denylist,(function(e){delete r[e]})):ie.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var h=this.config.sanitize_properties
return h&&(r=h(r,e)),r.$process_person_profile=this._hasPersonProcessing(),r}},{key:"_calculate_set_once_properties",value:function(e){if(!this.persistence||!this._hasPersonProcessing())return e
var t=ue({},this.persistence.get_initial_props(),e||{})
return F(t)?void 0:t}},{key:"register",value:function(e,t){var n
null===(n=this.persistence)||void 0===n||n.register(e,t)}},{key:"register_once",value:function(e,t,n){var i
null===(i=this.persistence)||void 0===i||i.register_once(e,t,n)}},{key:"register_for_session",value:function(e){var t
null===(t=this.sessionPersistence)||void 0===t||t.register(e)}},{key:"unregister",value:function(e){var t
null===(t=this.persistence)||void 0===t||t.unregister(e)}},{key:"unregister_for_session",value:function(e){var t
null===(t=this.sessionPersistence)||void 0===t||t.unregister(e)}},{key:"_register_single",value:function(e,t){this.register(y({},e,t))}},{key:"getFeatureFlag",value:function(e,t){return this.featureFlags.getFeatureFlag(e,t)}},{key:"getFeatureFlagPayload",value:function(e){var t=this.featureFlags.getFeatureFlagPayload(e)
try{return JSON.parse(t)}catch(e){return t}}},{key:"isFeatureEnabled",value:function(e,t){return this.featureFlags.isFeatureEnabled(e,t)}},{key:"reloadFeatureFlags",value:function(){this.featureFlags.reloadFeatureFlags()}},{key:"updateEarlyAccessFeatureEnrollment",value:function(e,t){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t)}},{key:"getEarlyAccessFeatures",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return this.featureFlags.getEarlyAccessFeatures(e,t)}},{key:"on",value:function(e,t){return this._internalEventEmitter.on(e,t)}},{key:"onFeatureFlags",value:function(e){return this.featureFlags.onFeatureFlags(e)}},{key:"onSessionId",value:function(e){var t,n
return null!==(t=null===(n=this.sessionManager)||void 0===n?void 0:n.onSessionId(e))&&void 0!==t?t:function(){}}},{key:"getSurveys",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.surveys.getSurveys(e,t)}},{key:"getActiveMatchingSurveys",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.surveys.getActiveMatchingSurveys(e,t)}},{key:"renderSurvey",value:function(e,t){this.surveys.renderSurvey(e,t)}},{key:"canRenderSurvey",value:function(e){this.surveys.canRenderSurvey(e)}},{key:"getNextSurveyStep",value:function(e,t,n){return this.surveys.getNextSurveyStep(e,t,n)}},{key:"identify",value:function(e,t,n){if(!this.__loaded||!this.persistence)return ie.uninitializedWarning("posthog.identify")
if(B(e)&&(e=e.toString(),ie.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e){if(["distinct_id","distinctid"].includes(e.toLowerCase()))ie.critical('The string "'.concat(e,'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'))
else if(this._requirePersonProcessing("posthog.identify")){var i=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){var r=i
this.register_once({$had_persisted_distinct_id:!0,$device_id:r},"")}e!==i&&e!==this.get_property(be)&&(this.unregister(be),this.register({distinct_id:e}))
var o="anonymous"===(this.persistence.get_property(Ue)||"anonymous")
e!==i&&o?(this.persistence.set_property(Ue,"identified"),this.setPersonPropertiesForFlags(t||{},!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:i},{$set:t||{},$set_once:n||{}}),this.featureFlags.setAnonymousDistinctId(i)):(t||n)&&this.setPersonProperties(t,n),e!==i&&(this.reloadFeatureFlags(),this.unregister(He))}}else ie.error("Unique user id has not been set in posthog.identify")}},{key:"setPersonProperties",value:function(e,t){(e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")&&(this.setPersonPropertiesForFlags(e||{}),this.capture("$set",{$set:e||{},$set_once:t||{}}))}},{key:"group",value:function(e,t,n){if(e&&t){if(this._requirePersonProcessing("posthog.group")){var i=this.getGroups()
i[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:p(p({},i),{},y({},e,t))}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags(y({},e,n))),i[e]===t||n||this.reloadFeatureFlags()}}else ie.error("posthog.group requires a group type and group key")}},{key:"resetGroups",value:function(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}},{key:"setPersonPropertiesForFlags",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setPersonPropertiesForFlags")&&this.featureFlags.setPersonPropertiesForFlags(e,t)}},{key:"resetPersonPropertiesForFlags",value:function(){this.featureFlags.resetPersonPropertiesForFlags()}},{key:"setGroupPropertiesForFlags",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}},{key:"resetGroupPropertiesForFlags",value:function(e){this.featureFlags.resetGroupPropertiesForFlags(e)}},{key:"reset",value:function(e){var t,n,i,r
if(ie.info("reset"),!this.__loaded)return ie.uninitializedWarning("posthog.reset")
var o=this.get_property("$device_id")
this.consent.reset(),null===(t=this.persistence)||void 0===t||t.clear(),null===(n=this.sessionPersistence)||void 0===n||n.clear(),null===(i=this.persistence)||void 0===i||i.set_property(Ue,"anonymous"),null===(r=this.sessionManager)||void 0===r||r.resetSessionId()
var s=this.config.get_device_id(ct())
this.register_once({distinct_id:s,$device_id:e?s:o},"")}},{key:"get_distinct_id",value:function(){return this.get_property("distinct_id")}},{key:"getGroups",value:function(){return this.get_property("$groups")||{}}},{key:"get_session_id",value:function(){var e,t
return null!==(e=null===(t=this.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}},{key:"get_session_replay_url",value:function(e){if(!this.sessionManager)return""
var t=this.sessionManager.checkAndGetSessionAndWindowId(!0),n=t.sessionId,i=t.sessionStartTimestamp,r=this.requestRouter.endpointFor("ui","/project/".concat(this.config.token,"/replay/").concat(n))
if(null!=e&&e.withTimestamp&&i){var o,s=null!==(o=e.timestampLookBack)&&void 0!==o?o:10
if(!i)return r
var a=Math.max(Math.floor(((new Date).getTime()-i)/1e3)-s,0)
r+="?t=".concat(a)}return r}},{key:"alias",value:function(e,t){return e===this.get_property(ye)?(ie.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(A(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(be,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(ie.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}},{key:"set_config",value:function(e){var t,n,i,r,o=p({},this.config)
L(e)&&(ue(this.config,io(e)),null===(t=this.persistence)||void 0===t||t.update_config(this.config,o),this.sessionPersistence="sessionStorage"===this.config.persistence?this.persistence:new $n(p(p({},this.config),{},{persistence:"sessionStorage"})),vt.is_supported()&&"true"===vt.get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(x.DEBUG=!0,ie.info("set_config",{config:e,oldConfig:o,newConfig:p({},this.config)})),null===(n=this.sessionRecording)||void 0===n||n.startIfEnabledOrStop(),null===(i=this.autocapture)||void 0===i||i.startIfEnabled(),null===(r=this.heatmaps)||void 0===r||r.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence())}},{key:"startSessionRecording",value:function(e){var t,n=q(e)&&e
if(n||null!=e&&e.sampling){var i,r,o=null===(i=this.sessionManager)||void 0===i?void 0:i.checkAndGetSessionAndWindowId()
null===(r=this.persistence)||void 0===r||r.register(y({},Ae,!0)),ie.info("Session recording started with sampling override for session: ",null==o?void 0:o.sessionId)}(n||null!=e&&e.linked_flag)&&(null===(t=this.sessionRecording)||void 0===t||t.overrideLinkedFlag(),ie.info("Session recording started with linked_flags override")),this.set_config({disable_session_recording:!1})}},{key:"stopSessionRecording",value:function(){this.set_config({disable_session_recording:!0})}},{key:"sessionRecordingStarted",value:function(){var e
return!(null===(e=this.sessionRecording)||void 0===e||!e.started)}},{key:"captureException",value:function(e,t){var n=R(te.parseErrorAsProperties)?te.parseErrorAsProperties([e.message,void 0,void 0,void 0,e]):p({$exception_type:e.name,$exception_message:e.message,$exception_level:"error"},t)
this.exceptions.sendExceptionEvent(n)}},{key:"loadToolbar",value:function(e){return this.toolbar.loadToolbar(e)}},{key:"get_property",value:function(e){var t
return null===(t=this.persistence)||void 0===t?void 0:t.props[e]}},{key:"getSessionProperty",value:function(e){var t
return null===(t=this.sessionPersistence)||void 0===t?void 0:t.props[e]}},{key:"toString",value:function(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:eo
return t!==eo&&(t=eo+"."+t),t}},{key:"_isIdentified",value:function(){var e,t
return"identified"===(null===(e=this.persistence)||void 0===e?void 0:e.get_property(Ue))||"identified"===(null===(t=this.sessionPersistence)||void 0===t?void 0:t.get_property(Ue))}},{key:"_hasPersonProcessing",value:function(){var e,t,n,i
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&F(this.getGroups())&&(null===(e=this.persistence)||void 0===e||null===(t=e.props)||void 0===t||!t[be])&&(null===(n=this.persistence)||void 0===n||null===(i=n.props)||void 0===i||!i[Je]))}},{key:"_shouldCapturePageleave",value:function(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&this.config.capture_pageview}},{key:"createPersonProfile",value:function(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}},{key:"_requirePersonProcessing",value:function(e){return"never"===this.config.person_profiles?(ie.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(Je,!0),!0)}},{key:"_sync_opt_out_with_persistence",value:function(){var e,t,n,i,r=this.consent.isOptedOut(),o=this.config.opt_out_persistence_by_default,s=this.config.disable_persistence||r&&!!o;(null===(e=this.persistence)||void 0===e?void 0:e.disabled)!==s&&(null===(n=this.persistence)||void 0===n||n.set_disabled(s)),(null===(t=this.sessionPersistence)||void 0===t?void 0:t.disabled)!==s&&(null===(i=this.sessionPersistence)||void 0===i||i.set_disabled(s))}},{key:"opt_in_capturing",value:function(e){var t
this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),(A(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()}},{key:"opt_out_capturing",value:function(){this.consent.optInOut(!1),this._sync_opt_out_with_persistence()}},{key:"has_opted_in_capturing",value:function(){return this.consent.isOptedIn()}},{key:"has_opted_out_capturing",value:function(){return this.consent.isOptedOut()}},{key:"clear_opt_in_out_capturing",value:function(){this.consent.reset(),this._sync_opt_out_with_persistence()}},{key:"_is_bot",value:function(){return Q?function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&Ar(n,t))return!0
try{var i=null==e?void 0:e.userAgentData
if(null!=i&&i.brands&&i.brands.some((function(e){return Ar(null==e?void 0:e.brand,t)})))return!0}catch(e){}return!!e.webdriver}(Q,this.config.custom_blocked_useragents):void 0}},{key:"_captureInitialPageview",value:function(){J&&!this._initialPageviewCaptured&&(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:J.title},{send_instantly:!0}))}},{key:"debug",value:function(e){!1===e?(null==U||U.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==U||U.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}}]),e}()
!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=he(e.prototype[t[n]])}(oo,["identify"])
var so,ao=(so=Yr[eo]=new oo,function(){function e(){e.done||(e.done=!0,to=!1,ae(Yr,(function(e){e._dom_loaded()})))}null!=J&&J.addEventListener&&("complete"===J.readyState?e():J.addEventListener("DOMContentLoaded",e,!1)),U&&me(U,"load",e,!0)}(),so)
function uo(e){return void 0===e}function co(){return f()||uo(window.ga)}function lo(e){co()||(ga("fshApp.set","screenName",e),ga("fshApp.send","screenview"))}function fo(e){return"function"==typeof e}function ho(e){return"object"==typeof e}function po(e,t){try{return JSON.parse(e,t)}catch(e){}}function go(e,t){return t?t.querySelector(e):document.querySelector(e)}function vo(e){const t=go("link",document.body)
return new Promise((n=>{const i=document.createElement("link")
i.type="text/css",i.rel="stylesheet",i.onload=()=>{n()},i.href=e,t?t.before(i):document.body.append(i)}))}var mo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function _o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yo={exports:{}}
yo.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==mo?mo:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),n}var i={},r={},o={},s={},a="<unknown>"
function u(e){return e.split("\n").reduce((function(e,t){var n=d(t)||h(t)||v(t)||b(t)||_(t)
return n&&e.push(n),e}),[])}var c=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,l=/\((\S*)(?::(\d+))(?::(\d+))\)/
function d(e){var t=c.exec(e)
if(!t)return null
var n=t[2]&&0===t[2].indexOf("native"),i=t[2]&&0===t[2].indexOf("eval"),r=l.exec(t[2])
return i&&null!=r&&(t[2]=r[1],t[3]=r[2],t[4]=r[3]),{file:n?null:t[2],methodName:t[1]||a,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var f=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function h(e){var t=f.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var p=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,g=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function v(e){var t=p.exec(e)
if(!t)return null
var n=t[3]&&t[3].indexOf(" > eval")>-1,i=g.exec(t[3])
return n&&null!=i&&(t[3]=i[1],t[4]=i[2],t[5]=null),{file:t[3],methodName:t[1]||a,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var m=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i
function _(e){var t=m.exec(e)
return t?{file:t[3],methodName:t[1]||a,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var y=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
function b(e){var t=y.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var w=n(Object.freeze({__proto__:null,parse:u}));(function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n)
var r=Object.getOwnPropertyDescriptor(t,n)
r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),i=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return i(t,e),t},o=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){e.done?n(e.value):r(e.value).then(s,a)}u((i=i.apply(e,t||[])).next())}))},s=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.")
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
function u(e,t){var n={}
for(var i in e)n[i]=e[i]
for(var i in t)n[i]=t[i]
return n}function c(e,t){var n=u(e,t)
return e.context&&t.context&&(n.context=u(e.context,t.context)),n}function l(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
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
case 2:return o=s.sent(),n[i]=M(o,r.number),i++,[3,1]
case 3:return[2,n]}}))}))}function m(e,t){for(var n=[],i=!0,r=0,o=t.length;r<o;r++){var s=(0,t[r])(e)
!1===s&&(i=!1),n.push(s)}return{results:n,result:i}}function _(e,t,n){e&&e.afterNotify&&e.afterNotify(n,e)
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
for(var a in e){var u=e[a]
Object.prototype.hasOwnProperty.call(e,a)&&null!=a&&null!=u&&(o[a]=s(u,n+1))}return o}return e}function s(e,t){void 0===t&&(t=0)
try{return o(e,t)}catch(e){return"[ERROR] ".concat(e)}}return s(e)}function k(e){var t=function(t){return function(){for(var n,i=[],r=0;r<arguments.length;r++)i[r]=arguments[r]
if("debug"===t){if(!e.config.debug)return
t="log"}i.unshift("[Honeybadger]"),(n=e.config.logger)[t].apply(n,i)}}
return{log:t("log"),info:t("info"),debug:t("debug"),warn:t("warn"),error:t("error")}}function S(e){var t
if(e)if(E(e)){var n=e
t=u(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?y(e):{message:String(e)}
else t={}
return t}function E(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function x(e,t,n){if(e&&t&&n&&t in e)try{for(var i=e[t];i&&i.__hb_original;)i=i.__hb_original
e[t]=n(i),e[t].__hb_original=i}catch(e){}}t.merge=u,t.mergeNotice=c,t.objectIsEmpty=l,t.objectIsExtensible=d,t.makeBacktrace=f,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=p,t.getCauses=g,t.getSourceForBacktrace=v,t.runBeforeNotifyHandlers=m,t.runAfterNotifyHandlers=_,t.shallowClone=y,t.sanitize=b,t.logger=k,t.makeNotice=S,t.isErrorObject=E,t.instrument=x
var P=!1,$=[]
function C(e,t){e&&e.console&&t&&($.push(t),P||(P=!0,["debug","info","warn","error","log"].forEach((function(t){x(e.console,t,(function(n){return function(){var i=Array.prototype.slice.call(arguments)
$.forEach((function(e){try{e(t,i)}catch(e){}})),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}}))}))))}function T(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function O(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function I(e,t){if(L("Object",e)){L("Array",t)||(t=[])
var n=[]
return i(e)}function i(e){var r,o
if(L("Object",e)||L("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(L("Object",e)){for(r in o={},e)R(r,t)?o[r]="[FILTERED]":o[r]=i(e[r])
return o}return L("Array",e)?e.map((function(e){return i(e)})):L("Function",e)?"[FUNC]":e}}function R(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function L(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function F(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var i=e
return n.split(/[&]\s?/).forEach((function(e){var n=e.split("=",2),r=n[0],o=n[1]
R(r,t)&&(i=i.replace("".concat(r,"=").concat(o),"".concat(r,"=[FILTERED]")))})),i}function A(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach((function(i){var r=t+i.replace(/\W/g,"_").toUpperCase()
n[r]=e[i]})),n}function j(e){return JSON.parse(JSON.stringify(e))}function M(e,t,n){if(void 0===n&&(n=2),!e)return null
var i=e.split("\n")
i.unshift("")
for(var r=t+n,o={},s=t-n;s<=r;s++){var a=i[s]
"string"==typeof a&&(o[s]=a)}return o}function N(e){return void 0!==e.async}function D(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.instrumentConsole=C,t.endpoint=T,t.generateStackTrace=O,t.filter=I,t.filterUrl=F,t.formatCGIData=A,t.clone=j,t.isBrowserConfig=N,t.globalThisOrWindow=D
var B={}
function q(e,t,n,i){void 0===i&&(i=100)
var r="".concat(t,"-").concat(n)
if(void 0===B[r]&&(B[r]=0),B[r]%i==0){var o="Deprecation warning: ".concat(t," has been deprecated; please use ").concat(n," instead.")
e.warn(o),B[r]++}else B[r]++}t.logDeprecatedMethod=q})(s),Object.defineProperty(o,"__esModule",{value:!0})
var k=s
function S(e){return void 0===e&&(e=(0,k.globalThisOrWindow)()),{shouldReloadOnConfigure:!1,load:function(t){function n(){return t.config.eventsEnabled}n()&&(0,k.instrumentConsole)(e,(function(e,i){if(n()&&0!==i.length){var r={severity:e}
"string"==typeof i[0]?(r.message=i[0],r.args=i.slice(1)):r.args=i,t.event("log",r)}}))}}}o.default=S
var E={},x={}
Object.defineProperty(x,"__esModule",{value:!0}),x.GlobalStore=void 0
var P=s,$=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,P.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
x.GlobalStore=$
var C={}
class T{static parse(e){return e.trim().split("\n").map((e=>JSON.parse(e)))}static stringify(e){return e.map((e=>JSON.stringify(e))).join("\n")}}var O=Object.freeze({__proto__:null,NdJson:T}),I=n(O),R={}
Object.defineProperty(R,"__esModule",{value:!0}),R.CONFIG=void 0,R.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var L=e&&e.__assign||function(){return L=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},L.apply(this,arguments)},F=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){e.done?n(e.value):r(e.value).then(s,a)}u((i=i.apply(e,t||[])).next())}))},A=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.")
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
Object.defineProperty(C,"__esModule",{value:!0}),C.ThrottledEventsLogger=void 0
var j=I,M=s,N=R,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=L(L({},N.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.processQueue=function(){var e=this
if(0!==this.queue.length&&!this.isProcessing){this.isProcessing=!0
var t=this.queue.slice()
this.queue=[]
var n=j.NdJson.stringify(t)
this.makeHttpRequest(n).then((function(){setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})).catch((function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)}))}},e.prototype.makeHttpRequest=function(e){return F(this,void 0,void 0,(function(){var t=this
return A(this,(function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,M.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then((function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")})).catch((function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))}))]}))}))},e.prototype.originalLogger=function(){var e,t,n,i,r
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(i=console.warn.__hb_original)&&void 0!==i?i:console.warn,error:null!==(r=console.error.__hb_original)&&void 0!==r?r:console.error}},e}()
C.ThrottledEventsLogger=D
var B=e&&e.__assign||function(){return B=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},B.apply(this,arguments)},q=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){e.done?n(e.value):r(e.value).then(s,a)}u((i=i.apply(e,t||[])).next())}))},H=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.")
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
var U=s,G=x,W=C,z=R,V=/,|\s+/,Q=/\S/,J=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.10.0"},this.config=B(B({},z.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new W.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,U.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
return this.__eventsLogger.configure(this.config),this.loadPlugins(),this},e.prototype.loadPlugins=function(){var e=this;(this.__pluginsLoaded?this.config.__plugins.filter((function(e){return e.shouldReloadOnConfigure})):this.config.__plugins).forEach((function(t){return t.load(e)})),this.__pluginsLoaded=!0},e.prototype.__initStore=function(){this.__store=new G.GlobalStore({context:{},breadcrumbs:[]},this.config.maxBreadcrumbs)},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&null!=e&&this.__store.setContext(e),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__store.clear(),"object"==typeof e&&null!==e&&this.__store.setContext(e),this},e.prototype.clear=function(){return this.__store.clear(),this},e.prototype.notify=function(e,t,n){var i=this
void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var r=this.makeNotice(e,t,n),o=r&&r.backtrace?r.backtrace.map((function(e){return(0,U.shallowClone)(e)})):null,s=this.__runPreconditions(r)
return s instanceof Error?((0,U.runAfterNotifyHandlers)(r,this.__afterNotifyHandlers,s),!1):s instanceof Promise?(s.then((function(e){return e instanceof Error?((0,U.runAfterNotifyHandlers)(r,i.__afterNotifyHandlers,e),!1):i.__send(r,o)})),!0):(this.__send(r,o).catch((function(e){})),!0)},e.prototype.notifyAsync=function(e,t,n){var i=this
return void 0===t&&(t=void 0),void 0===n&&(n=void 0),new Promise((function(r,o){var s,a
s=e.afterNotify?e:t&&t.afterNotify?t:n&&n.afterNotify?n:t&&"object"==typeof t?t:n||(t={}),a=s.afterNotify,s.afterNotify=function(e){if(null==a||a.call(i,e),e)return o(e)
r()},i.notify(e,t,n)}))},e.prototype.makeNotice=function(e,t,n){void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var i=(0,U.makeNotice)(e)
if(t&&"object"!=typeof t&&(t={name:String(t)}),t&&(i=(0,U.mergeNotice)(i,t)),"object"==typeof n&&null!==n&&(i=(0,U.mergeNotice)(i,n)),(0,U.objectIsEmpty)(i))return null
var r=this.__store.getContents("context"),o=this.__constructTags(i.tags),s=this.__constructTags(r.tags),a=this.__constructTags(this.config.tags),u=o.concat(s).concat(a),c=u.filter((function(e,t){return u.indexOf(e)===t}))
return i=(0,U.merge)(i,{name:i.name||"Error",context:(0,U.merge)(r,i.context),projectRoot:i.projectRoot||this.config.projectRoot,environment:i.environment||this.config.environment,component:i.component||this.config.component,action:i.action||this.config.action,revision:i.revision||this.config.revision,tags:c}),Array.isArray(i.backtrace)&&i.backtrace.length||("string"==typeof i.stack&&i.stack.trim()?i.backtrace=(0,U.makeBacktrace)(i.stack,!1,this.logger):(i.stack=(0,U.generateStackTrace)(),i.backtrace=(0,U.makeBacktrace)(i.stack,!0,this.logger))),i},e.prototype.addBreadcrumb=function(e,t){if(this.config.breadcrumbsEnabled){t=t||{}
var n=(0,U.shallowClone)(t.metadata),i=t.category||"custom",r=(new Date).toISOString()
return this.__store.addBreadcrumb({category:i,message:e,metadata:n,timestamp:r}),this}},e.prototype.logEvent=function(e){(0,U.logDeprecatedMethod)(this.logger,"Honeybadger.logEvent","Honeybadger.event"),this.event("log",e)},e.prototype.event=function(e,t){var n
"object"==typeof e&&(t=e,e=null!==(n=e.event_type)&&void 0!==n?n:void 0),this.__eventsLogger.log(B({event_type:e,ts:(new Date).toISOString()},t))},e.prototype.__getBreadcrumbs=function(){return this.__store.getContents("breadcrumbs").slice()},e.prototype.__getContext=function(){return this.__store.getContents("context")},e.prototype.__developmentMode=function(){return!0!==this.config.reportData&&this.config.environment&&this.config.developmentEnvironments.includes(this.config.environment)},e.prototype.__buildPayload=function(e){var t=(0,U.filter)(e.headers,this.config.filters)||{},n=(0,U.filter)(B(B({},e.cgiData),(0,U.formatCGIData)(t,"HTTP_")),this.config.filters)
return{notifier:this.__notifier,breadcrumbs:{enabled:!!this.config.breadcrumbsEnabled,trail:e.__breadcrumbs||[]},error:{class:e.name,message:e.message,backtrace:e.backtrace,fingerprint:e.fingerprint,tags:e.tags,causes:(0,U.getCauses)(e,this.logger)},request:{url:(0,U.filterUrl)(e.url,this.config.filters),component:e.component,action:e.action,context:e.context,cgi_data:n,params:(0,U.filter)(e.params,this.config.filters)||{},session:(0,U.filter)(e.session,this.config.filters)||{}},server:{project_root:e.projectRoot,environment_name:e.environment,revision:e.revision,hostname:this.config.hostname,time:(new Date).toUTCString()},details:e.details||{}}},e.prototype.__constructTags=function(e){return e?e.toString().split(V).filter((function(e){return Q.test(e)})):[]},e.prototype.__runPreconditions=function(e){var t=this,n=null
e||(this.logger.debug("failed to build error report"),n=new Error("failed to build error report")),!1===this.config.reportData&&(this.logger.debug("skipping error report: honeybadger.js is disabled",e),n=new Error("honeybadger.js is disabled")),this.__developmentMode()&&(this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.",e),n=new Error("honeybadger.js is in development mode")),this.config.apiKey||(this.logger.warn("could not send error report: no API key has been configured",e),n=new Error("missing API key"))
var i=(0,U.runBeforeNotifyHandlers)(e,this.__beforeNotifyHandlers)
return n||i.result||(this.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers returned false")),i.results.length&&i.results.some((function(e){return e instanceof Promise}))?Promise.allSettled(i.results).then((function(i){if(!n&&i.some((function(e){return"rejected"===e.status||!1===e.value}))&&(t.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers (async) returned false")),n)return n})):n},e.prototype.__send=function(e,t){var n=this
return this.config.breadcrumbsEnabled?(this.addBreadcrumb("Honeybadger Notice",{category:"notice",metadata:{message:e.message,name:e.name,stack:e.stack}}),e.__breadcrumbs=this.__store.getContents("breadcrumbs")):e.__breadcrumbs=[],(0,U.getSourceForBacktrace)(t,this.__getSourceFileHandler).then((function(t){return q(n,void 0,void 0,(function(){var n
return H(this,(function(i){return t.forEach((function(t,n){e.backtrace[n].source=t})),n=this.__buildPayload(e),[2,this.__transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json",Accept:"text/json, application/json"},method:"POST",endpoint:(0,U.endpoint)(this.config.endpoint,"/v1/notices/js"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},n)]}))}))})).then((function(t){if(201!==t.statusCode)return(0,U.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,new Error("Bad HTTP response: ".concat(t.statusCode))),n.logger.warn("Error report failed: unknown response from server. code=".concat(t.statusCode)),!1
var i=JSON.parse(t.body).id
return(0,U.runAfterNotifyHandlers)((0,U.merge)(e,{id:i}),n.__afterNotifyHandlers),n.logger.info("Error report sent ⚡ https://app.honeybadger.io/notice/".concat(i)),!0})).catch((function(t){return n.logger.error("Error report failed: an unknown error occurred.","message=".concat(t.message)),(0,U.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,t),!1}))},e}()
E.Client=J
var K={}
Object.defineProperty(K,"__esModule",{value:!0}),function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n)
var r=Object.getOwnPropertyDescriptor(t,n)
r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),i=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)},a=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return i(t,e),t},u=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Util=t.Types=t.Client=void 0
var c=u(o),l=E
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return l.Client}}),r(x,t),t.Types=a(K),t.Util=a(s),t.Plugins={events:c.default}}(r)
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
var i=ue(e)
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
return t.join(";")}}function ue(e){try{var t=e.parentNode.childNodes,n=[]
return Array.prototype.forEach.call(t,(function(t){t.tagName&&t.tagName===e.tagName&&n.push(t)})),n}catch(e){return[]}}function ce(e,t){return e.length>t&&(e=e.substr(0,t)+"..."),e}X.stringNameOfElement=Z,X.stringSelectorOfElement=ee,X.stringTextOfElement=te,X.nativeFetch=ne,X.parseURL=re,X.localURLPathname=oe,X.decodeCookie=se,X.encodeCookie=ae,X.preferCatch=function(){var e=!0
if("undefined"==typeof window)return e
if(window.atob||(e=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(e=!1)}catch(e){}return e}()
var le={}
Object.defineProperty(le,"__esModule",{value:!0}),le.onError=le.ignoreNextOnError=void 0
var de,fe=r,he=fe.Util.instrument,pe=fe.Util.makeNotice,ge=fe.Util.globalThisOrWindow,ve=0
function me(){ve+=1,clearTimeout(de),de=setTimeout((function(){ve=0}))}function _e(e){return void 0===e&&(e=ge()),{load:function(t){he(e,"onerror",(function(n){var i=function(e,n,i,r,o){if(t.logger.debug("window.onerror callback invoked",arguments),ve>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(ve-=1)
if(0===i&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var s=pe(o)
s.name||(s.name="window.onerror"),s.message||(s.message=e),s.stack||(s.stack=[s.message,"\n    at ? (",n||"unknown",":",i||0,":",r||0,")"].join("")),t.addBreadcrumb("window.onerror"!==s.name&&s.name?"window.onerror: ".concat(s.name):"window.onerror",{category:"error",metadata:{name:s.name,message:s.message,stack:s.stack}}),t.config.enableUncaught&&t.notify(s)}}
return function(t,r,o,s,a){return i(t,r,o,s,a),"function"==typeof n&&n.apply(e,arguments)}}))}}}le.ignoreNextOnError=me,le.onError=_e
var ye={}
Object.defineProperty(ye,"__esModule",{value:!0})
var be=r,we=be.Util.instrument,ke=be.Util.globalThisOrWindow
function Se(e){return void 0===e&&(e=ke()),{load:function(t){t.config.enableUnhandledRejection&&we(e,"onunhandledrejection",(function(e){function n(e){var n
if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var i=e.reason
if(i instanceof Error){var r="unknown",o=0,s="".concat(i.message,"\n    at ? (").concat(r,":").concat(o,")"),a=i.stack||s,u={name:i.name,message:"UnhandledPromiseRejectionWarning: ".concat(i),stack:a}
return t.addBreadcrumb("window.onunhandledrejection: ".concat(u.name),{category:"error",metadata:u}),void t.notify(u)}var c="string"==typeof i?i:null!==(n=JSON.stringify(i))&&void 0!==n?n:"Unspecified reason"
t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: ".concat(c)})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}}))}}}ye.default=Se
var Ee={}
Object.defineProperty(Ee,"__esModule",{value:!0})
var xe=r,Pe=X,$e=xe.Util.sanitize,Ce=xe.Util.instrument,Te=xe.Util.instrumentConsole,Oe=xe.Util.globalThisOrWindow
function Ie(e){return void 0===e&&(e=Oe()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function i(e){return Array.isArray(e)?e.map((function(e){try{return String(e)}catch(e){return"[unknown]"}})).join(" "):""}n("console")&&Te(e,(function(e,n){var r=i(n),o={category:"log",metadata:{level:e,arguments:$e(n,3)}}
t.addBreadcrumb(r,o)}))}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",(function(e){var n,i,r
try{n=(0,Pe.stringNameOfElement)(e.target),i=(0,Pe.stringSelectorOfElement)(e.target),r=(0,Pe.stringTextOfElement)(e.target)}catch(e){n="UI Click",i="[unknown]",r="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:i,text:r,event:e}})}),!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Ce(XMLHttpRequest.prototype,"open",(function(e){return function(){var t=this,n=arguments[1],i="string"==typeof n?n:String(n),r="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],o="".concat(r," ").concat((0,Pe.localURLPathname)(i))
this.__hb_xhr={type:"xhr",method:r,url:i,message:o},"function"==typeof e&&e.apply(t,arguments)}})),Ce(XMLHttpRequest.prototype,"send",(function(e){return function(){var n=this
function i(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Ce(n,"onreadystatechange",(function(e){return function(){i(),"function"==typeof e&&e.apply(this,arguments)}})):n.onreadystatechange=i,"function"==typeof e&&e.apply(n,arguments)}}))),n("network")&&(0,Pe.nativeFetch)()&&Ce(e,"fetch",(function(n){return function(){var i,r=arguments[0],o="GET"
"string"==typeof r?i=r:"Request"in e&&r instanceof Request?(i=r.url,r.method&&(o=r.method)):i=String(r),arguments[1]&&arguments[1].method&&(o=arguments[1].method),"string"==typeof o&&(o=o.toUpperCase())
var s="".concat(o," ").concat("undefined"==typeof document?i:(0,Pe.localURLPathname)(i)),a={type:"fetch",method:o,url:i}
return n.apply(this,arguments).then((function(e){return a.status_code=e.status,t.addBreadcrumb(s,{category:"request",metadata:a}),e})).catch((function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:a}),e}))}})),function(){if(n("navigation")&&null!=e.location){var i=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",(function(t){r(i,e.location.href)})),void 0!==e.history&&(Ce(e.history,"pushState",o),Ce(e.history,"replaceState",o))}function r(e,n){i=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function o(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&r(i,String(t)),e.apply(this,arguments)}}}()}}}Ee.default=Ie
var Re={}
Object.defineProperty(Re,"__esModule",{value:!0})
var Le=r,Fe=Le.Util.instrument,Ae=Le.Util.globalThisOrWindow
function je(e){return void 0===e&&(e=Ae()),{load:function(t){!function(){function n(e){return function(n){return function(i,r){if("function"==typeof i){var o=Array.prototype.slice.call(arguments,2)
return i=t.__wrap(i,e),n((function(){i.apply(void 0,o)}),r)}return n(i,r)}}}Fe(e,"setTimeout",n({component:"setTimeout"})),Fe(e,"setInterval",n({component:"setInterval"}))}()}}}Re.default=je
var Me={}
Object.defineProperty(Me,"__esModule",{value:!0})
var Ne=r,De=Ne.Util.instrument,Be=Ne.Util.globalThisOrWindow
function qe(e){return void 0===e&&(e=Be()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach((function(n){var i=e[n]&&e[n].prototype
i&&Object.prototype.hasOwnProperty.call(i,"addEventListener")&&(De(i,"addEventListener",(function(e){var i={component:"".concat(n,".prototype.addEventListener")}
return function(n,r,o,s){try{r&&null!=r.handleEvent&&(r.handleEvent=t.__wrap(r.handleEvent,i))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(r,i),o,s)}})),De(i,"removeEventListener",(function(e){return function(n,i,r,o){return e.call(this,n,i,r,o),e.call(this,n,t.__wrap(i),r,o)}})))}))}}}Me.default=qe
var He={},Ue=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){e.done?n(e.value):r(e.value).then(s,a)}u((i=i.apply(e,t||[])).next())}))},Ge=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.")
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
Object.defineProperty(He,"__esModule",{value:!0}),He.BrowserTransport=void 0
var We=r,ze=We.Util.sanitize,Ve=We.Util.globalThisOrWindow
function Qe(e){return Object.entries(e)}var Je=function(){function e(e){void 0===e&&(e={}),this.headers={},this.headers=e}return e.prototype.defaultHeaders=function(){return this.headers},e.prototype.send=function(e,t){return Ue(this,void 0,void 0,(function(){var n,i,r,o,s
return Ge(this,(function(a){switch(a.label){case 0:return n=e.headers?Qe(e.headers):[],i=this.defaultHeaders(),n.forEach((function(e){var t=e[0],n=e[1]
null!=t&&null!=n&&(i[String(t)]=String(n))})),r={method:e.method,headers:i},"POST"===e.method&&t&&(r.body="string"==typeof t?t:JSON.stringify(ze(t,e.maxObjectDepth))),[4,Ve().fetch(e.endpoint,r)]
case 1:return[4,(o=a.sent()).text()]
case 2:return s=a.sent(),[2,Promise.resolve({statusCode:o.status,body:s})]}}))}))},e}()
He.BrowserTransport=Je
var Ke={},Xe=e&&e.__assign||function(){return Xe=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},Xe.apply(this,arguments)}
Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.BrowserFeedbackForm=void 0
var Ye=r.Util.globalThisOrWindow,Ze=function(){function t(e,t,n){this.config=e,this.logger=t,this.scriptUrl=n}return t.prototype.show=function(e,t){if(void 0===t&&(t={}),this.config&&this.config.apiKey)if(e){var n=Ye()
void 0!==n.document?this.isUserFeedbackScriptUrlAlreadyVisible()?this.logger.debug("User feedback form is already visible"):(n.honeybadgerUserFeedbackOptions=Xe(Xe({},t),{apiKey:this.config.apiKey,endpoint:this.config.userFeedbackEndpoint,noticeId:e}),this.appendUserFeedbackScriptTag(n,t)):this.logger.debug("global.document is undefined. Cannot attach script")}else this.logger.debug("Can't show user feedback form without a notice already reported")
else this.logger.debug("Client not initialized")},t.prototype.appendUserFeedbackScriptTag=function(t,n){void 0===n&&(n={})
var i=t.document.createElement("script")
i.setAttribute("src",this.scriptUrl),i.setAttribute("async","true"),n.onLoad&&(i.onload=n.onLoad),(e.document.head||e.document.body).appendChild(i)},t.prototype.isUserFeedbackScriptUrlAlreadyVisible=function(){for(var e=Ye(),t=this.scriptUrl,n=0;n<e.document.scripts.length;n++)if(e.document.scripts[n].src===t)return!0
return!1},t}()
Ke.BrowserFeedbackForm=Ze,function(t){var n,i=e&&e.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),o=e&&e.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},o.apply(this,arguments)},s=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){e.done?n(e.value):r(e.value).then(s,a)}u((i=i.apply(e,t||[])).next())}))},a=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.")
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
return{value:o[0]?o[1]:void 0,done:!0}}},u=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Types=t.getUserFeedbackScriptUrl=void 0
var c=r,l=X,d=le,f=u(ye),h=u(Ee),p=u(Re),g=u(Me),v=He,m=Ke,_=c.Util.merge,y=c.Util.filter,b=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},S=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=S
var E=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,o({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new v.BrowserTransport({"User-Agent":P()}))||this
return n.__errorsSent=0,n.__lastWrapErr=void 0,n.__lastNoticeId=void 0,n.__beforeNotifyHandlers=[function(e){return n.__exceedsMaxErrors()?(n.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),n.__incrementErrorsCount(),!0)}],n.__afterNotifyHandlers=[function(e,t){t&&(n.__lastNoticeId=t.id)}],n}return i(n,e),n.prototype.configure=function(t){return void 0===t&&(t={}),e.prototype.configure.call(this,t)},n.prototype.resetMaxErrors=function(){return this.__errorsSent=0},n.prototype.factory=function(e){var t=new n(e)
return t.setNotifier(this.getNotifier()),t},n.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},n.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),s(this,void 0,void 0,(function(){return a(this,(function(t){return new m.BrowserFeedbackForm(this.config,this.logger,this.getUserFeedbackSubmitUrl()).show(this.__lastNoticeId,e),[2]}))}))},n.prototype.getUserFeedbackSubmitUrl=function(){return(0,t.getUserFeedbackScriptUrl)(this.getVersion())},n.prototype.__buildPayload=function(t){var n,i={HTTP_USER_AGENT:void 0,HTTP_REFERER:void 0,HTTP_COOKIE:void 0}
"undefined"!=typeof navigator&&navigator.userAgent&&(i.HTTP_USER_AGENT=navigator.userAgent),"undefined"!=typeof document&&document.referrer.match(/\S/)&&(i.HTTP_REFERER=document.referrer),(n="string"==typeof t.cookies?(0,l.decodeCookie)(t.cookies):t.cookies)&&(i.HTTP_COOKIE=(0,l.encodeCookie)(y(n,this.config.filters)))
var r=e.prototype.__buildPayload.call(this,t)
return r.request.cgi_data=_(i,r.request.cgi_data),r},n.prototype.__wrap=function(e,t){void 0===t&&(t={})
var n=e
t||(t={})
try{if("function"!=typeof n)return n
if(!b(n))return n
if(!n.___hb){var i=this
n.___hb=function(){if(!l.preferCatch)return n.apply(this,arguments)
try{return n.apply(this,arguments)}catch(e){if(i.__lastWrapErr===e)throw e
throw i.__lastWrapErr=e,(0,d.ignoreNextOnError)(),i.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),i.config.enableUncaught&&i.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),x={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.10.0"},P=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(x.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(x.version,"; n/a; n/a")},$=new E({__plugins:[(0,d.onError)(),(0,f.default)(),(0,p.default)(),(0,g.default)(),(0,h.default)(),c.Plugins.events()]})
$.setNotifier(x)
var C=r
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return C.Types}}),t.default=$}(i)
var et=t(i)
return et}()
var bo=_o(yo.exports)
const wo=["attackplayer.min.js","dynamically imported module","fs.min.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","play method is not allowed","world.min.js","openuserjs.org"],ko=e=>wo.some((t=>e.includes(t)))
function So(e){if(ko(e.stack))return!1}function Eo(){!function(){bo.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.127"})
const e=o()
e&&bo.setContext({user_id:e}),bo.beforeNotify(So)}()}var xo={}
function Po(...e){console.log(...e)}function $o(e,t,n,i){e instanceof EventTarget&&e.addEventListener(t,n,i)}function Co(e){return null===e}const To=`${document.location.protocol}//${document.location.host}/`,Oo=window.HCS?.defines?.cdn,Io=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],Ro=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],Lo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Fo=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,Ao=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,jo=/guild_id=(?<guildId>\d+)/,Mo=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,No=/player_id=(?<playerId>\d+)/,Do=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,Bo=/VL:.+?(?<vl>\d+)/,qo=.2,Ho="joinallgroupsundersize",Uo="index.php",Go="?cmd=",Wo=`${Uo}${Go}`,zo="&subcmd=",Vo="&target_username=",Qo=`${Wo}auctionhouse`,Jo=`${Qo}&search=`,Ko=`${Wo}log`,Xo=`${Wo}ignore${zo}add&ignore_username=`,Yo=`${Wo}profile`,Zo=`${Yo}&player_id=`,es=`${Yo}${zo}dropitems`,ts=`${Wo}trade&target_player=`,ns=`${Wo}trade${zo}createsecure${Vo}`,is=`${Wo}arena${zo}`,rs=`${Uo}${`${Go}notepad&blank=1${zo}`}`,os=`${rs}auctionsearch`,ss=`${Wo}points`,as=`${Wo}guild${zo}`,us=`${as}log`,cs=`${as}scouttower`,ls=`${as}groups&subcmd2=`,ds=`${as}inventory&subcmd2=report&user=`,fs=`${as}view&guild_id=`,hs=`${ls}joinall`,ps=`${ls}${Ho}`,gs=`${Wo}world`,vs=`${Wo}findplayer`,ms=`${vs}&search_show_first=1&search_username=`,_s=`${Wo}blacksmith`,ys=`${Wo}quickbuff`,bs=`${Wo}composing`,ws=`${Wo}attackplayer${Vo}`,ks=`${Wo}${zo}viewupdatearchive`,Ss=`${Wo}${zo}viewarchive`,Es=`${Wo}bounty`,xs=`${Wo}inventing${zo}viewrecipe&recipe_id=`,Ps=`https://guide.fallensword.com/${Wo}`,$s="after-update.actionlist",Cs="buffs.player",Ts="update.player",Os="level.stats-player",Is="gold.stats-player",Rs="prompt.worldDialogShop",Ls="keydown.controls",Fs="update.realm",As="-success.action-response",js=`-1${As}`,Ms=`1${As}`,Ns=`2${As}`,Ds=`9${As}`,Bs=`5${As}`,qs=`25${As}`,Hs=1,Us=2,Gs=16,Ws=128,zs=256,Vs="needToCompose",Qs="lastComposeCheck",Js="characterVirtualLevel",Ks="enableGuildActivityTracker",Xs="lastLadderReset",Ys="form",Zs="table",ea="td",ta="tr",na="fsh_buffLog",ia="statbar-level-tooltip-general",ra="stat-level",oa="stat-defense",sa="stat-attack",aa="stat-damage",ua="stat-armor",ca="stat-hp",la="stat-vl",da="GM_",fa=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],ha=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],pa=`${Oo}ui/world/action_spinner.gif`,va=".fa-envelope",ma='a[href*="&player_id="]',_a=.002,ya=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],ba='input[name="blockedSkillList[]"]'
var wa={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1}
const ka=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function Sa(e,t){const n=window.localStorage.getItem(da+e)
return Co(n)||uo(n)?t:function(e){const t=ka.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(n)}function Ea(e){return Sa(e,wa[e])}function xa(e){Ea("betaOptIn")&&Po("sendException",e),bo.notify(e)}function Pa(e,t){return e||t}const $a=[null]
function Ca(e,t){return $a[e]&&$a[e].priority<$a[t].priority}function Ta(e,t){const n=$a[e]
$a[e]=$a[t],$a[t]=n}function Oa(e,t){return e?2*t:2*t+1}function Ia(){if(1===$a.length)return
const e=$a[1].data,t=$a.pop()
return $a.length>1&&($a[1]=t,function(e){let t=e
for(;2*t<$a.length;){const e=Oa(!Ca(2*t+1,2*t),t)
if(Ca(t,e))break
Ta(t,e),t=e}}(1)),e}function Ra(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Ca(t,e))break
Ta(t,e),t=e}}($a.push({data:e,priority:t})-1)}let La=!0
const Fa="fshMessage"
let Aa=0
function ja(){$a.length-1==0?La=!0:(La=!1,window.postMessage(Fa,window.location.origin))}function Ma(){const e=Ia()
fo(e)?e():function(e){uo(e)||xa(`pop() was not a function (${typeof e})`)}(e)}function Na(e){const t=e.data
e.origin===window.location.origin&&t===Fa&&function(){try{Ma()}catch(e){bo.notify(e)}finally{ja()}}()}function Da(e,t,n,i){if(fo(t)){Aa||($o(window,"message",Na),Aa=!0)
const r=Pa(i,window),o=Pa(n,[])
Ra(t.bind(r,...o),e),La&&ja()}}function Ba(e,t){return new URLSearchParams(e).get(t)}function qa(e){try{return Ba(decodeURIComponent(window.location.search),e)}catch(e){return Po(e),""}}function Ha(){}const Ua=e=>e
function Ga(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}function Wa(e){return e()}function za(){return Object.create(null)}function Va(e){e.forEach(Wa)}function Qa(e){return"function"==typeof e}function Ja(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let Ka
function Xa(e,t){return e===t||(Ka||(Ka=document.createElement("a")),Ka.href=t,e===Ka.href)}function Ya(e,...t){if(null==e){for(const e of t)e(void 0)
return Ha}const n=e.subscribe(...t)
return n.unsubscribe?()=>n.unsubscribe():n}function Za(e){let t
return Ya(e,(e=>t=e))(),t}function eu(e,t,n){e.$$.on_destroy.push(Ya(t,n))}function tu(e,t,n,i){if(e){const r=nu(e,t,n,i)
return e[0](r)}}function nu(e,t,n,i){return e[1]&&i?function(e,t){for(const n in t)e[n]=t[n]
return e}(n.ctx.slice(),e[1](i(t))):n.ctx}function iu(e,t,n,i){if(e[2]&&i){const r=e[2](i(n))
if(void 0===t.dirty)return r
if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length)
for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|r[i]
return e}return t.dirty|r}return t.dirty}function ru(e,t,n,i,r,o){if(r){const s=nu(t,n,i,o)
e.p(s,r)}}function ou(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32
for(let e=0;e<n;e++)t[e]=-1
return t}return-1}function su(e){const t={}
for(const n in e)t[n]=!0
return t}function au(e){let t=!1
return function(...n){t||(t=!0,e.call(this,...n))}}function uu(e){return null==e?"":e}function cu(e){return e&&Qa(e.destroy)?e.destroy:Ha}function lu(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const du="undefined"!=typeof window
let fu=du?()=>window.performance.now():()=>Date.now(),hu=du?e=>requestAnimationFrame(e):Ha
const pu=new Set
function gu(e){pu.forEach((t=>{t.c(e)||(pu.delete(t),t.f())})),0!==pu.size&&hu(gu)}function vu(e,t){e.appendChild(t)}function mu(e){if(!e)return document
const t=e.getRootNode?e.getRootNode():e.ownerDocument
return t&&t.host?t:e.ownerDocument}function _u(e){const t=ku("style")
return t.textContent="/* empty */",function(e,t){vu(e.head||e,t),t.sheet}(mu(e),t),t.sheet}function yu(e,t,n){e.insertBefore(t,n||null)}function bu(e){e.parentNode&&e.parentNode.removeChild(e)}function wu(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function ku(e){return document.createElement(e)}function Su(e){return document.createTextNode(e)}function Eu(){return Su(" ")}function xu(){return Su("")}function Pu(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function $u(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Cu(e){return function(t){t.target===this&&e.call(this,t)}}function Tu(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ou(e,t,n){const i=t.toLowerCase()
i in e?e[i]="boolean"==typeof e[i]&&""===n||n:t in e?e[t]="boolean"==typeof e[t]&&""===n||n:Tu(e,t,n)}function Iu(e){let t
return{p(...n){t=n,t.forEach((t=>e.push(t)))},r(){t.forEach((t=>e.splice(e.indexOf(t),1)))}}}function Ru(e){return""===e?null:+e}function Lu(e,t){t=""+t,e.data!==t&&(e.data=t)}function Fu(e,t){e.value=null==t?"":t}function Au(e,t,n,i){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function ju(e,t,n){for(let n=0;n<e.options.length;n+=1){const i=e.options[n]
if(i.__value===t)return void(i.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function Mu(e){const t=e.querySelector(":checked")
return t&&t.__value}let Nu
function Du(){if(void 0===Nu){Nu=!1
try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){Nu=!0}}return Nu}function Bu(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative")
const n=ku("iframe")
n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1
const i=Du()
let r
return i?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=Pu(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=Pu(n.contentWindow,"resize",t),t()}),vu(e,n),()=>{(i||r&&n.contentWindow)&&r(),bu(n)}}function qu(e,t,n){e.classList.toggle(t,!!n)}function Hu(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}function Uu(e,t){return new e(t)}const Gu=new Map
let Wu,zu=0
function Vu(e,t,n,i,r,o,s,a=0){const u=16.666/i
let c="{\n"
for(let e=0;e<=1;e+=u){const i=t+(n-t)*o(e)
c+=100*e+`%{${s(i,1-i)}}\n`}const l=c+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length
for(;n--;)t=(t<<5)-t^e.charCodeAt(n)
return t>>>0}(l)}_${a}`,f=mu(e),{stylesheet:h,rules:p}=Gu.get(f)||function(e,t){const n={stylesheet:_u(t),rules:{}}
return Gu.set(e,n),n}(f,e)
p[d]||(p[d]=!0,h.insertRule(`@keyframes ${d} ${l}`,h.cssRules.length))
const g=e.style.animation||""
return e.style.animation=`${g?`${g}, `:""}${d} ${i}ms linear ${r}ms 1 both`,zu+=1,d}function Qu(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-i.length
r&&(e.style.animation=i.join(", "),zu-=r,zu||hu((()=>{zu||(Gu.forEach((e=>{const{ownerNode:t}=e.stylesheet
t&&bu(t)})),Gu.clear())})))}function Ju(e){Wu=e}function Ku(){if(!Wu)throw new Error("Function called outside component initialization")
return Wu}function Xu(e){Ku().$$.on_mount.push(e)}function Yu(e){Ku().$$.after_update.push(e)}function Zu(e){Ku().$$.on_destroy.push(e)}function ec(){const e=Ku()
return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t]
if(r){const o=Hu(t,n,{cancelable:i})
return r.slice().forEach((t=>{t.call(e,o)})),!o.defaultPrevented}return!0}}function tc(e,t){const n=e.$$.callbacks[t.type]
n&&n.slice().forEach((e=>e.call(this,t)))}const nc=[],ic=[]
let rc=[]
const oc=[],sc=Promise.resolve()
let ac=!1
function uc(){ac||(ac=!0,sc.then(gc))}function cc(){return uc(),sc}function lc(e){rc.push(e)}function dc(e){oc.push(e)}const fc=new Set
let hc,pc=0
function gc(){if(0!==pc)return
const e=Wu
do{try{for(;pc<nc.length;){const e=nc[pc]
pc++,Ju(e),vc(e.$$)}}catch(e){throw nc.length=0,pc=0,e}for(Ju(null),nc.length=0,pc=0;ic.length;)ic.pop()()
for(let e=0;e<rc.length;e+=1){const t=rc[e]
fc.has(t)||(fc.add(t),t())}rc.length=0}while(nc.length)
for(;oc.length;)oc.pop()()
ac=!1,fc.clear(),Ju(e)}function vc(e){if(null!==e.fragment){e.update(),Va(e.before_update)
const t=e.dirty
e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(lc)}}function mc(e,t,n){e.dispatchEvent(Hu(`${t?"intro":"outro"}${n}`))}const _c=new Set
let yc
function bc(){yc={r:0,c:[],p:yc}}function wc(){yc.r||Va(yc.c),yc=yc.p}function kc(e,t){e&&e.i&&(_c.delete(e),e.i(t))}function Sc(e,t,n,i){if(e&&e.o){if(_c.has(e))return
_c.add(e),yc.c.push((()=>{_c.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}const Ec={duration:0}
function xc(e,t,n,i){let r,o=t(e,n,{direction:"both"}),s=i?0:1,a=null,u=null,c=null
function l(){c&&Qu(e,c)}function d(e,t){const n=e.b-s
return t*=Math.abs(n),{a:s,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function f(t){const{delay:n=0,duration:i=300,easing:f=Ua,tick:h=Ha,css:p}=o||Ec,g={start:fu()+n,b:t}
t||(g.group=yc,yc.r+=1),"inert"in e&&(t?void 0!==r&&(e.inert=r):(r=e.inert,e.inert=!0)),a||u?u=g:(p&&(l(),c=Vu(e,s,t,i,n,f,p)),t&&h(0,1),a=d(g,i),lc((()=>mc(e,t,"start"))),function(e){let t
0===pu.size&&hu(gu),new Promise((n=>{pu.add(t={c:e,f:n})}))}((t=>{if(u&&t>u.start&&(a=d(u,i),u=null,mc(e,a.b,"start"),p&&(l(),c=Vu(e,s,a.b,a.duration,0,f,o.css))),a)if(t>=a.end)h(s=a.b,1-s),mc(e,a.b,"end"),u||(a.b?l():--a.group.r||Va(a.group.c)),a=null
else if(t>=a.start){const e=t-a.start
s=a.a+a.d*f(e/a.duration),h(s,1-s)}return!(!a&&!u)})))}return{run(e){Qa(o)?(hc||(hc=Promise.resolve(),hc.then((()=>{hc=null}))),hc).then((()=>{o=o({direction:e?"in":"out"}),f(e)})):f(e)},end(){l(),a=u=null}}}function Pc(e){return void 0!==e?.length?e:Array.from(e)}function $c(e,t){e.d(1),t.delete(e.key)}function Cc(e,t){Sc(e,1,1,(()=>{t.delete(e.key)}))}function Tc(e,t,n,i,r,o,s,a,u,c,l,d){let f=e.length,h=o.length,p=f
const g={}
for(;p--;)g[e[p].key]=p
const v=[],m=new Map,_=new Map,y=[]
for(p=h;p--;){const e=d(r,o,p),i=n(e)
let a=s.get(i)
a?y.push((()=>a.p(e,t))):(a=c(i,e),a.c()),m.set(i,v[p]=a),i in g&&_.set(i,Math.abs(p-g[i]))}const b=new Set,w=new Set
function k(e){kc(e,1),e.m(a,l),s.set(e.key,e),l=e.first,h--}for(;f&&h;){const t=v[h-1],n=e[f-1],i=t.key,r=n.key
t===n?(l=t.first,f--,h--):m.has(r)?!s.has(i)||b.has(i)?k(t):w.has(r)?f--:_.get(i)>_.get(r)?(w.add(i),k(t)):(b.add(r),f--):(u(n,s),f--)}for(;f--;){const t=e[f]
m.has(t.key)||u(t,s)}for(;h;)k(v[h-1])
return Va(y),v}function Oc(e,t,n){const i=e.$$.props[t]
void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Ic(e){e&&e.c()}function Rc(e,t,n){const{fragment:i,after_update:r}=e.$$
i&&i.m(t,n),lc((()=>{const t=e.$$.on_mount.map(Wa).filter(Qa)
e.$$.on_destroy?e.$$.on_destroy.push(...t):Va(t),e.$$.on_mount=[]})),r.forEach(lc)}function Lc(e,t){const n=e.$$
null!==n.fragment&&(!function(e){const t=[],n=[]
rc.forEach((i=>-1===e.indexOf(i)?t.push(i):n.push(i))),n.forEach((e=>e())),rc=t}(n.after_update),Va(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Fc(e,t,n,i,r,o,s=null,a=[-1]){const u=Wu
Ju(e)
const c=e.$$={fragment:null,ctx:[],props:o,update:Ha,not_equal:r,bound:za(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:za(),dirty:a,skip_bound:!1,root:t.target||u.$$.root}
s&&s(c.root)
let l=!1
if(c.ctx=n?n(e,t.props||{},((t,n,...i)=>{const o=i.length?i[0]:n
return c.ctx&&r(c.ctx[t],c.ctx[t]=o)&&(!c.skip_bound&&c.bound[t]&&c.bound[t](o),l&&function(e,t){-1===e.$$.dirty[0]&&(nc.push(e),uc(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],c.update(),l=!0,Va(c.before_update),c.fragment=!!i&&i(c.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target)
c.fragment&&c.fragment.l(e),e.forEach(bu)}else c.fragment&&c.fragment.c()
t.intro&&kc(e.$$.fragment),Rc(e,t.target,t.anchor),gc()}Ju(u)}class Ac{$$=void 0
$$set=void 0
$destroy(){Lc(this,1),this.$destroy=Ha}$on(e,t){if(!Qa(t))return Ha
const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[])
return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t
this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const jc=[]
function Mc(e,t=Ha){let n
const i=new Set
function r(t){if(Ja(e,t)&&(e=t,n)){const t=!jc.length
for(const t of i)t[1](),jc.push(t,e)
if(t){for(let e=0;e<jc.length;e+=2)jc[e][0](jc[e+1])
jc.length=0}}}function o(t){r(t(e))}return{set:r,update:o,subscribe:function(s,a=Ha){const u=[s,a]
return i.add(u),1===i.size&&(n=t(r,o)||Ha),s(e),()=>{i.delete(u),0===i.size&&n&&(n(),n=null)}}}}function Nc(e,t,n){const i=!Array.isArray(e),r=i?[e]:e
if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const o=t.length<2
return s=(e,n)=>{let s=!1
const a=[]
let u=0,c=Ha
const l=()=>{if(u)return
c()
const r=t(i?a[0]:a,e,n)
o?e(r):c=Qa(r)?r:Ha},d=r.map(((e,t)=>Ya(e,(e=>{a[t]=e,u&=~(1<<t),s&&l()}),(()=>{u|=1<<t}))))
return s=!0,l(),function(){Va(d),c(),s=!1}},{subscribe:Mc(n,s).subscribe}
var s}const Dc=Mc("")
function Bc(e){const t=e-1
return t*t*t+1}function qc(e,{delay:t=0,duration:n=400,easing:i=Ua}={}){const r=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:i,css:e=>"opacity: "+e*r}}function Hc(e,{delay:t=0,duration:n=400,easing:i=Bc,x:r=0,y:o=0,opacity:s=0}={}){const a=getComputedStyle(e),u=+a.opacity,c="none"===a.transform?"":a.transform,l=u*(1-s),[d,f]=lu(r),[h,p]=lu(o)
return{delay:t,duration:n,easing:i,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*h}${p});\n\t\t\topacity: ${u-l*t}`}}function Uc(e,{delay:t=0,duration:n=400,easing:i=Bc,axis:r="y"}={}){const o=getComputedStyle(e),s=+o.opacity,a="y"===r?"height":"width",u=parseFloat(o[a]),c="y"===r?["top","bottom"]:["left","right"],l=c.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),d=parseFloat(o[`padding${l[0]}`]),f=parseFloat(o[`padding${l[1]}`]),h=parseFloat(o[`margin${l[0]}`]),p=parseFloat(o[`margin${l[1]}`]),g=parseFloat(o[`border${l[0]}Width`]),v=parseFloat(o[`border${l[1]}Width`])
return{delay:t,duration:n,easing:i,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*s};${a}: ${e*u}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*h}px;margin-${c[1]}: ${e*p}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*v}px;`}}function Gc(e){let t,n,i,r,o,s,a
return{c(){t=ku("div"),n=ku("p"),i=Su(e[0]),Tu(n,"class","svelte-zbl6pg"),Tu(t,"role","alert"),Tu(t,"class","svelte-zbl6pg"),Au(t,"transform",e[2])},m(r,u){yu(r,t,u),vu(t,n),vu(n,i),o=!0,s||(a=Pu(t,"click",e[4]),s=!0)},p(e,n){(!o||1&n)&&Lu(i,e[0]),4&n&&Au(t,"transform",e[2])},i(e){o||(e&&lc((()=>{o&&(r||(r=xc(t,Hc,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1))})),o=!0)},o(e){e&&(r||(r=xc(t,Hc,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0)),o=!1},d(e){e&&bu(t),e&&r&&r.end(),s=!1,a()}}}function Wc(e){let t,n=e[1]&&Gc(e)
return{c(){n&&n.c(),t=xu()},m(e,i){n&&n.m(e,i),yu(e,t,i)},p(e,[i]){e[1]?n?(n.p(e,i),2&i&&kc(n,1)):(n=Gc(e),n.c(),kc(n,1),n.m(t.parentNode,t)):n&&(bc(),Sc(n,1,1,(()=>{n=null})),wc())},i(e){kc(n)},o(e){Sc(n)},d(e){e&&bu(t),n&&n.d(e)}}}function zc(e,t,n){let i
eu(e,Dc,(e=>n(0,i=e)))
let{ms:r=3e3}=t,o=!1,s=0,a=""
const u=(e,t)=>{clearTimeout(s),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
n(2,a=`translate(${t}px, ${e.offsetTop}px)`),n(1,o=!0)}(),t>0&&(s=setTimeout((()=>{var e
n(1,o=!1),i="",e=i,Dc.set(e)}),t))):n(1,o=!1)}
Zu((()=>clearTimeout(s)))
return e.$$set=e=>{"ms"in e&&n(3,r=e.ms)},e.$$.update=()=>{9&e.$$.dirty&&u(i,r)},[i,o,a,r,()=>{n(1,o=!1)}]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class Vc extends Ac{constructor(e){super(),Fc(this,e,zc,Wc,Ja,{ms:3})}}let Qc
function Jc(e){e&&(!function(){if(!Qc)Qc=!0,new Vc({target:document.body})}(),Dc.set(e))}function Kc(e,t){return Array.from(e,t)}function Xc(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function Yc(e,t){return Kc(Xc(e,t))}function Zc(e){return"string"==typeof e}function el(e){return e.trim()}function tl(e){const t=n(e)
if(Zc(t))return el(t)}function nl(e,t){return tl(t).includes(e)}function il(e,...t){return(...n)=>e(...t,...n)}let rl,ol,sl,al,ul,cl,ll=0,dl=0,fl=0
function hl(){return ll||(ll=t("pCL")),ll}function pl(){return dl||(dl=t("pCC")),dl}function gl(){const e=Yc("a",hl()).filter(function(e){return il(nl,e)}("message"))
e.length&&async function(){const e=new Audio(Ea("defaultMessageSound"))
try{await e.play()}catch(e){Jc("Message Sound Not Allowed")}}()}function vl(e){return"boolean"==typeof e}function ml(e,t,n,i){var r
$o(e,t,n,{once:!0,...(r=i,vl(r)?{capture:r}:r)})}function _l(e){ol=e.clientX,sl=e.clientY}function yl(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(rl,null).transform)
al=e[0]-ol,ul=e[1]-sl}function bl(e){e.clientX===ol&&e.clientY===sl||(rl.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+al).toString()}, ${(e.clientY+ul).toString()})`,_l(e))}function wl(e){return function(e){const t=performance.now()
t-cl>16&&(bl(e),cl=t)}(e),e.preventDefault(),!1}function kl(e){return bl(e),function(e,t,n,i){e instanceof EventTarget&&e.removeEventListener(t,n,i)}(document.body,"dragover",wl),e.preventDefault(),!1}function Sl(e,t){!function(e,t){rl=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),_l(t),yl(),cl=0,t.dataTransfer.setData("text/plain",""),$o(document.body,"dragover",wl),ml(document.body,"drop",kl)}function El(e,t){e.draggable=!0,$o(e,"dragstart",il(Sl,t))}function xl(){return fo(window.jQuery)}function Pl(e,t,n){co()||ga("fshApp.send","event",e,t,n)}function $l(e){return Object.entries(e)}function Cl(e,t,[n,i]){ho(i)&&null!==i?e(t[n],i):t[n]=i}function Tl(e,t){$l(t).forEach(il(Cl,Tl,e))}function Ol(e,t){const n=document.createElement(e)
return t&&Tl(n,t),n}function Il(e){return Ol("div",e)}function Rl(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Ll(e,t){return Kc(Rl(e,t))}function Fl(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Al(e,t){t instanceof Element&&(t.innerHTML=String(e))}function jl(e){let n=t("content")
n?Al("",n):(n=Il({id:"content",style:{display:"none"}}),Fl(document.body,n)),$(n).dialog({width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}),Ll("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(n)}async function Ml(e){(await e).default()}function Nl(){Ml(import("./buffLog-DLNs_kih.js"))}function Dl(){Ml(import("./combatLog-BYfVlW6l.js"))}function Bl(){Ml(import("./creatureLog-Bcj8BvPi.js"))}function ql(){Ml(import("./fsboxlog-AqUHkTOJ.js"))}function Hl(){Ml(import("./guildLog-awd4VMsK.js"))}function Ul(){Ml(import("./guildTracker-C10uuB9F.js"))}async function Gl(e){(await import("./injectAuctionSearch-BdqULQsg.js")).default(e)}async function Wl(e){(await import("./findBuffs-Ca79R5PG.js")).injectFindBuffs(e)}async function zl(e){(await import("./findBuffs-Ca79R5PG.js")).injectFindOther(e)}async function Vl(e){(await import("./injectOnlinePlayers-CnH3NBaX.js")).default(e)}function Ql(){Ml(import("./potReport-CkN6Mohm.js"))}function Jl(){Ml(import("./quickExtract-3zWP8L5G.js"))}function Kl(){Ml(import("./quickLinksManager-ClKPzfHf.js"))}async function Xl(e){(await import("./quickWear-5SbxOeWI.js")).default(e)}function Yl(){Ml(import("./recipeMgr-cmieWq7s.js"))}function Zl(){Ml(import("./reliclist-CDVPny3l.js"))}function ed(){Ml(import("./superelite-D06Wji1n.js"))}function td(e){return new Promise((t=>{setTimeout(t,e)}))}function nd(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class id extends Error{constructor([e,t,n,i],...r){super(function(e,t,n,i){const r=`${t.status} ${t.statusText} - `
if(t.statusText===i.toString())return r+nd(e)
const o=`${r+n} ${i} - ${nd(e)}`
return"parsererror"===n?`${o} - ${t.responseText}`:o}(e,t,n,i),...r),Error.captureStackTrace&&Error.captureStackTrace(this,id),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=i}}function rd(e){$o(window,"beforeunload",(()=>e.abort()))}const od=900
let sd=0
const ad=5
let ud=0
async function cd(){ud<ad-$.active&&performance.now()-sd>=od?(ud=ad-$.active,sd=performance.now()):await td(100)}async function ld(e,t=10){await async function(){for(;ud<1;)await cd()
ud-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=rd,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return ld(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new id([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function dd(e){return Tl(e,{url:Uo,data:{no_mobile:1}}),ld(e)}async function fd(e){return po(await dd({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function hd(e){return fd({cmd:"export",...e})}function pd(){return hd({inc_tagged:"1",subcmd:"guild_store"})}let gd=0
function vd(e){const t=u(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(gd=Number(t))}function md(){return gd||Yc("script",document.body).forEach(vd),gd}function _d(e){return Ol("a",e)}function yd(e){e instanceof Element&&e.click()}function bd(e,t){const n=URL.createObjectURL(e),i=_d({download:t,href:n,style:{display:"none"}})
Fl(document.body,i),yd(i),document.body.removeChild(i),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function wd(e,t){return po(await ld({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function kd(e){return wd(e,{method:"POST"})}function Sd(e,t){const n=[]
for(let i=0;i<t.length;i+=e)n.push(t.slice(i,i+e))
return n}let Ed,xd=null
function Pd(){const e=t("holdtext")
if(e&&!xd){const t=u(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(xd=Number(t))}return xd}function $d(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function Cd(){return Ed||(Ed=function(e,t){const n=indexedDB.open(e)
n.onupgradeneeded=()=>n.result.createObjectStore(t)
const i=$d(n)
return(e,n)=>i.then((i=>n(i.transaction(t,e).objectStore(t))))}("keyval-store","keyval")),Ed}const Td=e=>{e&&"NotFoundError"!==e.name&&bo.notify(e)}
async function Od(e,t){try{return await function(e,t=Cd()){return t("readonly",(t=>$d(t.get(e))))}(e,t)}catch(e){Td(e)}}async function Id(e,t,n){try{return await function(e,t,n=Cd()){return n("readwrite",(n=>(n.put(t,e),$d(n.transaction))))}(e,t,n)}catch(e){Td(e)}}const Rd=({folder_id:e})=>-2!==(e??-2),Ld=({folder_id:e})=>-2===e,Fd=({player_id:e})=>-1!==(e??-1),Ad=({player_id:e})=>e,jd=({player_id:e})=>-1===e,Md=([e,t,n])=>Sd(20,e).map((e=>[e,t,n])),Nd=e=>({inv_id:t})=>t===e.inv_id,Dd=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,Bd=(e,t)=>({...t,armor:Dd(e,2),attack:Dd(e,0),damage:Dd(e,4),defense:Dd(e,1),hp:Dd(e,3),set_name:e.set_name??""}),qd=(e,t)=>t.forge||t.stats?.set_name,Hd=e=>e?.s?e.r.items:[],Ud=e=>[[e.filter(Rd),Pd,0],[e.filter(Ld),Pd,1],[e.filter(Fd),Ad,7],[e.filter(jd),Pd,4]].flatMap(Md)
function Gd(e){return function(){const t=this.data(),n=e.find(Nd(t))
n?.attributes&&(t.stats=Bd(n,t.stats),this.invalidate())}}const Wd=async()=>await Od(`fsh_${xo.subcmd}_cache`)??[],zd=e=>Id(`fsh_${xo.subcmd}_cache`,e),Vd=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function Qd(e,t,n){const i=await(r={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},kd({cmd:"fetchitem",compare:0,...r}))
var r
return i?.s&&(i.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,i.r.items),await async function(e){const t=(await Wd()).filter(Vd(e))
await zd(t.concat(e))}(i.r.items)),i}const Jd=(e,t)=>{return t.filter((n=Kc(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function Kd(e){const t=e.rows(qd),n=await async function(e){const t=await Wd(),n=Jd(e,t)
return await zd(n),n}(t)
t.every(Gd(n))}async function Xd(e){const t=new DataTable(e)
await Kd(t),t.draw()}const Yd=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],Zd=e=>{return[...Yd(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function ef(e){return()=>jl(e)}var tf=[{section:"Character",menu:[{label:"Buff Log",fn:Nl},{label:"Combat Log",fn:Dl},{label:"Creature Log",fn:Bl},{label:"Recipe Manager",fn:Yl},{label:"Quick Links",fn:Kl},{label:"Inventory Manager",href:`${rs}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:ef(Wl)},{label:"Find Other",fn:ef(zl)},{label:"Online Players",fn:ef(Vl)},{label:"AH Quick Search",fn:ef(Gl)}]},{section:"Guild",menu:[{label:"Guild Inventory",href:`${rs}guildinvmgr`},{label:"New Guild Log",fn:Hl},{label:"Merc Hunter",fn:function(){Ml(import("./mercs-B0gVYObG.js"))}},{label:"Pot Report",fn:Ql},{label:"Guild Tracker",fn:Ul}]},{section:"Extra",menu:[{label:"Quick Extract",fn:Jl},{label:"Quick Wear",fn:ef(Xl)},{label:"FS Box Log",fn:ql},{label:"SE Tracker",fn:ed}]},{section:"Beta Features",menu:[{label:"Relic List",fn:Zl,beta:!0},{label:"GS Export",fn:async function(){if(!md())return
const e=await pd(),t=await Od("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:Dd(n,2),attack:Dd(n,0),damage:Dd(n,4),defense:Dd(n,1),hp:Dd(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:Dd(n.set_bonuses,2)},...n.set_name&&{set_attack:Dd(n.set_bonuses,0)},...n.set_name&&{set_damage:Dd(n.set_bonuses,4)},...n.set_name&&{set_defense:Dd(n.set_bonuses,1)},...n.set_name&&{set_hp:Dd(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var i
bd((i=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(Zd).join("\n"))(n)}\n`,new Blob([i],{type:"text/csv"})),"gs_export.csv")},beta:!0}]},{section:"Dev Links",menu:[{label:"Combat Set Manager",fn:function(){Ml(import("./setmgr-CSB5psx5.js"))},beta:!0},{label:"Quest Book",fn:function(){Ml(import("./questbook-DvFqMiOJ.js"))}},{label:"New Quick Wear",fn:function(){Ml(import("./quickwear-APjT2XDL.js"))}}]},{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}]
function nf(e,t,n){const i=e.slice()
return i[7]=t[n],i}function rf(e,t,n){const i=e.slice()
return i[10]=t[n],i}function of(e){let t,n,i,r,o
function s(){return e[5](e[10])}return{c(){t=ku("button"),t.textContent="PM",n=Eu(),i=ku("a"),i.textContent=`${e[10].playerName}`,Tu(t,"type","button"),Tu(t,"class","helperDevBtn svelte-1f5kv75"),Tu(i,"href",Zo+"menuItem.playerId"),Tu(i,"class","svelte-1f5kv75")},m(e,a){yu(e,t,a),yu(e,n,a),yu(e,i,a),r||(o=Pu(t,"click",s),r=!0)},p(t,n){e=t},d(e){e&&(bu(t),bu(n),bu(i)),r=!1,o()}}}function sf(e){let t,n,i
function r(){return e[4](e[10])}return{c(){t=ku("a"),t.textContent=`${e[10].label}`,Tu(t,"href",e[10].href),Tu(t,"class","svelte-1f5kv75")},m(e,o){yu(e,t,o),n||(i=Pu(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&bu(t),n=!1,i()}}}function af(e){let t,n,i
function r(){return e[3](e[10])}return{c(){t=ku("button"),t.textContent=`${e[10].label}`,Tu(t,"type","button"),Tu(t,"class","svelte-1f5kv75")},m(e,o){yu(e,t,o),n||(i=Pu(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&bu(t),n=!1,i()}}}function uf(e){let t,n
let i=function(e,t){return e[10].fn?af:e[10].href?sf:e[10].playerName?of:void 0}(e),r=i&&i(e),o=e[10].beta&&function(e){let t
return{c(){t=ku("sup"),t.textContent="beta",Tu(t,"class","fshRed")},m(e,n){yu(e,t,n)},d(e){e&&bu(t)}}}()
return{c(){t=ku("li"),r&&r.c(),n=Eu(),o&&o.c()},m(e,i){yu(e,t,i),r&&r.m(t,null),vu(t,n),o&&o.m(t,null)},p(e,t){r&&r.p(e,t)},d(e){e&&bu(t),r&&r.d(),o&&o.d()}}}function cf(e){let t,n,i,r,o=Pc(e[7].menu),s=[]
for(let t=0;t<o.length;t+=1)s[t]=uf(rf(e,o,t))
return{c(){t=ku("h2"),t.textContent=`${e[7].section}`,n=Eu(),i=ku("ul")
for(let e=0;e<s.length;e+=1)s[e].c()
r=Eu(),Tu(t,"class","svelte-1f5kv75")},m(e,o){yu(e,t,o),yu(e,n,o),yu(e,i,o)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(i,null)
vu(i,r)},p(e,t){if(7&t){let n
for(o=Pc(e[7].menu),n=0;n<o.length;n+=1){const a=rf(e,o,n)
s[n]?s[n].p(a,t):(s[n]=uf(a),s[n].c(),s[n].m(i,r))}for(;n<s.length;n+=1)s[n].d(1)
s.length=o.length}},d(e){e&&(bu(t),bu(n),bu(i)),wu(s,e)}}}function lf(e){let t,n=Pc(tf),i=[]
for(let t=0;t<n.length;t+=1)i[t]=cf(nf(e,n,t))
return{c(){for(let e=0;e<i.length;e+=1)i[e].c()
t=xu()},m(e,n){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,n)
yu(e,t,n)},p(e,[r]){if(7&r){let o
for(n=Pc(tf),o=0;o<n.length;o+=1){const s=nf(e,n,o)
i[o]?i[o].p(s,r):(i[o]=cf(s),i[o].c(),i[o].m(t.parentNode,t))}for(;o<i.length;o+=1)i[o].d(1)
i.length=n.length}},i:Ha,o:Ha,d(e){e&&bu(t),wu(i,e)}}}function df(e){const t=ec()
function n(e){Pl("helperMenu",e)}function i(e,i){fo(i)&&(n(e),t("toggle"),i())}function r(e){t("toggle"),n("sendMsg"),openQuickMsgDialog(e)}return[n,i,r,e=>i(e.label,e.fn),e=>n(e.label),e=>r(e.playerName)]}class ff extends Ac{constructor(e){super(),Fc(this,e,df,lf,Ja,{})}}function hf(e){let t,n,i,r
return n=new ff({}),n.$on("toggle",e[5]),{c(){t=ku("div"),Ic(n.$$.fragment),Tu(t,"class","modal svelte-vem4gq")},m(e,i){yu(e,t,i),Rc(n,t,null),r=!0},p:Ha,i(e){r||(kc(n.$$.fragment,e),e&&lc((()=>{r&&(i||(i=xc(t,qc,{duration:100},!0)),i.run(1))})),r=!0)},o(e){Sc(n.$$.fragment,e),e&&(i||(i=xc(t,qc,{duration:100},!1)),i.run(0)),r=!1},d(e){e&&bu(t),Lc(n),e&&i&&i.end()}}}function pf(e){let t,n,i
return n=new ff({}),n.$on("toggle",e[5]),{c(){t=ku("div"),Ic(n.$$.fragment),Tu(t,"class","modal svelte-vem4gq")},m(e,r){yu(e,t,r),Rc(n,t,null),i=!0},p:Ha,i(e){i||(kc(n.$$.fragment,e),i=!0)},o(e){Sc(n.$$.fragment,e),i=!1},d(e){e&&bu(t),Lc(n)}}}function gf(e){let t,n,i,r,o,s,a,u
const c=[pf,hf],l=[]
function d(e,t){return e[1]&&e[4]?0:e[1]?1:-1}return~(r=d(e))&&(o=l[r]=c[r](e)),{c(){t=ku("div"),n=ku("button"),n.textContent="Helper Menu",i=Eu(),o&&o.c(),Tu(n,"type","button"),Tu(n,"class","toggle svelte-vem4gq"),qu(n,"helper-menu-move",e[3]),Tu(t,"class","helper-menu svelte-vem4gq"),qu(t,"helper-menu-fixed",e[2])},m(o,c){yu(o,t,c),vu(t,n),vu(t,i),~r&&l[r].m(t,null),e[6](t),s=!0,a||(u=Pu(n,"click",e[5]),a=!0)},p(e,[n]){let i=r
r=d(e),r===i?~r&&l[r].p(e,n):(o&&(bc(),Sc(l[i],1,1,(()=>{l[i]=null})),wc()),~r?(o=l[r],o?o.p(e,n):(o=l[r]=c[r](e),o.c()),kc(o,1),o.m(t,null)):o=null)},i(e){s||(kc(o),s=!0)},o(e){Sc(o),s=!1},d(n){n&&bu(t),~r&&l[r].d(),e[6](null),a=!1,u()}}}function vf(e,n,i){const r=Ea("keepHelperMenuOnScreen"),o=Ea("draggableHelperMenu"),s=xl()&&t("worldPage")&&window.GameData
let a=0
Xu((()=>{o&&El(a)}))
let u=!1
return[a,u,r,o,s,function(){i(1,u=!u)},function(e){ic[e?"unshift":"push"]((()=>{a=e,i(0,a)}))}]}class mf extends Ac{constructor(e){super(),Fc(this,e,vf,gf,Ja,{})}}function _f(){const e=go(".mainbody")
e&&function(e,t){new mf({target:t.parentElement,props:{props:e}})}({},e)}function yf(e){return(new DOMParser).parseFromString(e,"text/html")}function bf(e){return dd({data:e})}async function wf(e){const t=await bf(e)
if(t)return yf(t)}function kf(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}function Sf(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(da+e,t+n)}const Ef=[[Zc,(e,t)=>{Sf(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&Sf(e,"N]",t)}],[vl,(e,t)=>{Sf(e,"B]",t)}]]
function xf(e,t){const n=Ef.find((e=>e[0](t)))
n&&n[1](e,t)}let Pf=0
const $f=()=>Pf
function Cf(){Pf=Ea("sendGoldonWorld")}async function Tf(){if(!$f())return
Pl("NewMap","doSendGold")
const e=await wf({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")})
e&&function(e){const t=kf(e)
"You successfully sent gold!"!==t&&""!==t||(xf("currentGoldSentTotal",parseInt(Ea("currentGoldSentTotal"),10)+parseInt(Ea("goldAmount"),10)),GameData.fetch(Hs))}(e)}function Of(e){window.location=e}function If(e){Ea("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function Rf(e){Pl("keyHandler",e)}function Lf(e){return e?.toLowerCase?.()}function Ff(e,t){return Lf(e)<Lf(t)?-1:Lf(e)>Lf(t)?1:0}function Af(e){return wd(e,{method:"GET"})}function jf(e){return Af({cmd:"profile",...e})}async function Mf(){const e=await jf({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>Ff(e.name,t.name)))}:e}function Nf(e,t,...n){return e(...n)}function Df(){return Nf(Mf)}const Bf=[e=>e?.s,(e,t)=>e.r?.length>t]
async function qf(e){const t=await Df()
if(((e,t)=>Bf.every((n=>n(t,e))))(e,t)){Rf("changeCombatSet")
const n=t.r[e].id
If("2"),Of(`${Yo+zo}managecombatset&submit=Use&combatSetId=${n}`)}}function Hf(e,n){t("worldPage")||(Rf(e),Of(n))}function Uf(){xo.enableMaxGroupSizeToJoin?Of(ps):Of(hs)}function Gf(){Rf("logPage"),If("2"),Of(Ko)}function Wf(e){const t=go(`#pCC input[value="${e}"]`)
t&&(Rf("movePage"),yd(t))}const zf=[["!",qf,0],["@",qf,1],['"',qf,1],["#",qf,2],["£",qf,2],["$",qf,3],["%",qf,4],["^",qf,5],["&",qf,6],["*",qf,7],["(",qf,8],["0",function(){Hf("toWorld",gs)}],["<",Wf,"<"],[">",Wf,">"],["G",function(){Rf("createGroup"),If("4"),Of(`${ls}create`)}],["L",Gf],["b",function(){Rf("backpack"),If("2"),Of(es)}],["g",function(){Rf("gotoGuild"),If("4"),Of(`${as}manage`)}],["j",function(){Rf("joinAllGroup"),If("4"),Uf()}],["l",Gf],["p",function(){Rf("profile"),If("2"),Of(Yo)}],["r",function(){Hf("doRepair",`${_s+zo}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in xo&&!xo.dialogIsClosed()||(Rf("insertQuickWear"),jl(Xl))}],["y",Tf]]
const Vf=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function Qf(e){var t;(t=e,Vf.some((e=>e(t))))||function(e){const t=zf.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function Jf(){$o(document,"keyup",Qf)}function Kf(e,t){return tl(t)===e}function Xf(e){return il(Kf,e)}function Yf(e,t,n){$o(e,"click",t,n)}function Zf(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function eh(e,t){return Kc(Zf(e,t))}function th(e){Yf(e,(()=>{Pl("chrome","Game Help link")})),Al(`<a href="${Wo}settings">Game Help</a>`,e)}function nh(){eh("#pCR h3").filter(Xf("Game Help")).forEach(th)}function ih(e){xo[e]=Ea(e)}function rh(e,t){if(t instanceof Element)return t.closest(e)}function oh(e){e?.classList&&e.classList.add("fshHide")}function sh(e){const n=rh("a",e.target)
n?.getAttribute("href")===us&&(Pl("useNewGuildLog","Alter Href"),e.preventDefault(),Hl(),oh(t("notification-guild-log")))}function ah(){return xo.huntingMode&&window.realmKeyHandler}function uh(e){e.forEach((e=>Da(3,e)))}function ch(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function lh(){return!xl()}var dh=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function fh(e){return function(e){return-1!==e&&0===go(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(Pl("accordion","collapse"),-1):e}const hh=(e,t,n)=>$(e).data(`${n}${t}`)
function ph(e,t,n){return new Promise((i=>{const r=hh(e,t,n)
r?i(r):function(e,t,n,i){$(e).on(`${Lf(t)}create`,(()=>{i(hh(e,t,n))}))}(e,t,n,i)}))}const gh=[[e=>!ho(e),()=>xa("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>xa("$('#nav').data('hcsNav').heights does not exist")]]
async function vh(){const e=t("nav"),n=await ph(e,"Nav","hcs")
return function(e){const t=gh.find((([t])=>t(e)))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function mh(){!function(){const e=Ea("lastActiveQuestPage")
Ea("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=Ea("lastScavPage")
Ea("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function _h(){const{theNav:e,myNav:t}=await vh()
e&&t&&(mh(),async function(e,t){const n=dh.map((e=>[e,Ea(e)]))
n.some((([,e])=>e))&&(await import("./injectItems-CQ9RtdBx.js")).default(e,t,ch(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,fh(n))}}(t))}function yh(e,t){return t?.classList?.contains(e)}function bh(e,t){t instanceof Node&&(t.textContent=String(e))}let wh
function kh(){return wh||(wh=t("quickMessageDialog")),wh}let Sh,Eh=0
function xh(e){(function(){if(!Eh){const e=Rl("validateTips",kh())
1===e.length&&([Eh]=e)}return Eh})()&&bh(Pa(e,""),Eh)}function Ph(){return Sh||(Sh=t("quickMsgDialog_msg"),Sh.maxLength=512),Sh}let $h,Ch=null,Th=0,Oh=0
function Ih(e){"Enter"!==e.key||e.shiftKey||(Pl("messaging","sendOnEnter"),e.preventDefault(),function(){if(!Oh){const e=$(kh()).dialog("option","buttons")
Oh=e["Send Message"]}return Oh}()())}function Rh(){Co(Ch)&&(Ch=Ea("enterForSendMessage")),Ch&&!Th&&($o(Ph(),"keypress",Ih),Th=!0)}function Lh(e,t){return yh(t[0],e)}function Fh(e,t,n){const{target:i}=n,r=t.find(il(e,i))
if(r)return r[1](i)}function Ah(e){return il(Fh,Lh,e)}function jh(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function Mh(e,t){jh(e,"beforeend",t)}function Nh(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function Dh(e){const t=Ea(e)
if(t)return po(t,Nh)}function Bh(e,t,n){return JSON.stringify(e,t,n)}function qh(e,t){xf(e,Bh(t))}let Hh=0,Uh=0,Gh=0
function Wh(e,t,n){const i=Uh.insertRow(e)
let r=i.insertCell(-1)
Mh(r,t),r=i.insertCell(-1),Mh(r,n)}function zh(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function Vh(e,t){Wh(e,zh("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const Qh=[["del-button",function(e){Pl("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
Uh.deleteRow(t),Hh.splice(t-2,1),qh("quickMsg",Hh)}],["add-button",function(e){Pl("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){Vh(e.parentNode.parentNode.rowIndex,n),t.value="",Hh.push(n),qh("quickMsg",Hh)}}],["add-template",function(e){Pl("messaging","insertTemplate"),Ph().value+=`${n(e).replace(/\{playername\}/g,$h)}`}]]
function Jh(e){Vh(-1,e)}function Kh(){Ea("enableMessageTemplates")&&!Gh&&(Yf((Uh||(Uh=kh().lastElementChild),Uh),Ah(Qh)),(Hh||(Hh=Dh("quickMsg")),Hh).forEach(Jh),Wh(-1,zh("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),Gh=!0)}function Xh(e,n,i){const r=kh()
yh("ui-dialog-content",r)&&(!function(e){$h=e,bh(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=Ph()
t.value=Pa(e,""),t.disabled=!1}(n),xh(i),Kh(),Rh(),$(r).dialog("open"))}function Yh(e){const n=t(e)
n&&(n.classList.add("pCR"),Fl(hl(),n))}function Zh(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function ep(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?Zh(t,e.firstChild):Fl(e,t)}(e,t)}function tp(e){const n=t(e)
n&&ep((fl||(fl=t("pCR")),fl),n)}const np=[function(){Ea("moveGuildList")&&tp("minibox-guild")},function(){Ea("moveOnlineAlliesList")&&tp("minibox-allies")},function(){Ea("moveXmasBox")&&Yh("minibox-xmas")},function(){Ea("moveDailyQuest")&&Yh("minibox-daily-quest")},function(){Ea("moveFSBox")&&Yh("minibox-fsbox")},function(){(xo.enableAllyOnlineList||xo.enableEnemyOnlineList)&&Ml(import("./allyEnemy-DtPGg7CN.js"))},function(){(xo.enableWantedList||xo.enableActiveBountyList)&&Ml(import("./activeWantedBounties-BBoAr7ec.js"))},function(){xo.enableGuildInfoWidgets&&Ml(import("./addGuildInfoWidgets-DYb4LA1E.js"))},function(){xo.enableOnlineAlliesWidgets&&Ml(import("./addOnlineAlliesWidgets-C6yzw8uR.js"))},function(){xo.enableTempleAlert&&Ml(import("./injectTempleAlert-BwGU3zX4.js"))},function(){xo.enableUpgradeAlert&&Ml(import("./injectUpgradeAlert-CIZM_BYm.js"))},function(){xo.enableComposingAlert&&Ml(import("./injectComposeAlert-jkhCw86D.js"))},function(){hl()&&!lh()&&_h()},function(){lh()||(window.openQuickMsgDialog=Xh)},function(){Ea("statBarLinks")&&Ml(import("./statBar-CsyfeNMH.js"))},function(){Ea("staminaCalculator")&&Ml(import("./injectStaminaCalculator-COf3XX1z.js"))},function(){Ea("levelUpCalculator")&&Ml(import("./injectLevelupCalculator-CuTikZor.js"))},function(){Ea("fsboxlog")&&Ml(import("./fsbox-DEWuTgbf.js"))},function(){Ea("resizeQuickBuff")&&Ml(import("./interceptQuickBuff-CFRshiHq.js"))},function(){Ea("joinAllLink")&&Ml(import("./injectJoinAllLink-Cyt54Lu0.js"))},function(){Ea("addServerNode")&&Ml(import("./injectServerNode-Fr-45wXH.js"))},function(){Ea("addScoutTowerLink")&&Ml(import("./scoutTowerLink-BO-DjlfN.js"))},function(){xl()&&Ea(Ks)&&Ml(import("./guildActivity-CerX29sN.js"))},async function(){if(xl()&&xo.enableSeTracker){const e=await import("./trackerPrefStore-DbIzJOZY.js").then((function(e){return e.a}))
e.default.set(xo.enableSeTracker)}}]
const ip=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function rp(){ah()||(ip.forEach(ih),xo.allyEnemyOnlineRefreshTime=1e3*Ea("allyEnemyOnlineRefreshTime"),xo.useNewGuildLog&&($o(document.body,"click",sh),$o(document.body,"auxclick",sh)),uh(np))}function op(e){const t=po(e)
t?.["new-ui"]&&(Ea("gameHelpLink")&&Da(3,nh),xo.huntingMode=Ea("huntingMode"),Da(3,Jf),rp(),Ea("hideHelperMenu")||Da(3,_f))}function sp(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&op(e)}function ap(){xl()&&t("worldPage")&&window.GameData&&Ml(import("./newMap-BkAvKxXw.js"))}function up(e){$(e).qtip("hide")}function cp(e){xf("needToPray",e),xf("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}let lp=0
const dp='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',fp=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${Wo}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
async function hp(e){const t=e.target.getAttribute("praytype")
t&&(Pl("notification","prayToGods"),up(e.target),await bf({cmd:"temple",subcmd:"pray",type:t}),lp.outerHTML=dp,cp(!1))}function pp(){Mh(t("notifications"),fp),lp=t("helperPrayToGods"),ml(lp,"click",hp)}async function gp(){if(!xo.enableTempleAlert)return
const e="temple"===xo.cmd?document:await wf({cmd:"temple"})
if(!e)return
const t=go("#pCC",e)
if(!t)return
const n="You are currently praying at the temple."!==tl(t)
n&&pp(),cp(n)}const vp={"-":{"-":()=>{Ml(import("./arena-BQROV-b0.js").then((function(e){return e.c})))}},dojoin:{"-":()=>{Ml(import("./arenaDoJoin-C7S475px.js"))}},join:{"-":()=>{Ml(import("./arenaJoin-Bp1mSHnW.js"))}},completed:{"-":()=>{Ml(import("./completedArenas-v9DGbPSX.js"))}},pickmove:{"-":()=>{Ml(import("./storeMoves-BR6V3tIB.js"))}},setup:{"-":()=>{Ml(import("./setupMoves-DdL_6O5V.js"))}}}
function mp(){Ml(import("./bioWidgets-Bg-U8M_w.js"))}function _p(){Ml(import("./injectGuild-DVJxeht3.js"))}const yp=()=>{Ml(import("./guildAdvisor-CAiP-ktN.js"))}
const bp=()=>{Ml(import("./groups-CGAJZ4rg.js"))}
const wp=()=>{Ml(import("./addRemoveTags-C5VRGO7L.js"))}
const kp=()=>{Ml(import("./guildChat-BH4NzxtG.js"))}
function Sp(){Ml(import("./viewRecipe-Bu9lLcqy.js"))}function Ep(){Ml(import("./ufsgAllowBack-DHACNqdn.js"))}function xp(){Ml(import("./profile-DCTr2-OX.js").then((function(e){return e.p})))}function Pp(){Ml(import("./news-BOa7tAH_.js"))}function $p(){Ml(import("./viewArchive-BPziP86D.js"))}const Cp=()=>{Ml(import("./inventory-PZcYcdty.js"))},Tp=()=>{Ml(import("./bazaar-DUzPll2M.js"))}
function Op(){Ml(import("./injectQuestBookFull-BKPIIG35.js"))}const Ip=()=>{Ml(import("./scavenging-BTPdUAtW.js"))}
const Rp=()=>{Ml(import("./toprated-Bxz3oIM7.js"))}
const Lp=()=>{Ml(import("./trade-SbfBBU7N.js"))}
var Fp={creatures:{"-":{"-":Ep}},items:{"-":{"-":Ep},view:{"-":()=>{Ml(import("./itemsView-Z8Z6zPJy.js"))}}},masterrealms:{"-":{"-":Ep}},quests:{"-":{"-":Ep},view:{"-":()=>{Ml(import("./showAllQuestSteps-is_iCEyV.js"))}}},realms:{"-":{"-":Ep}},relics:{"-":{"-":Ep}},shops:{"-":{"-":Ep}},"-":{news:{"-":Pp},viewupdatearchive:{"-":$p},viewarchive:{"-":$p},"-":{"-":()=>{Ml(import("./unknownPage-BXzBg1ua.js"))}}},arena:vp,auctionhouse:{"-":{"-":()=>{Ml(import("./injectAuctionHouse-CyNrhXoJ.js"))}},quickcreate:{"-":()=>{Ml(import("./quickCreate-Dnw2Szhn.js"))}}},bank:{"-":{"-":()=>{Ml(import("./injectBank-CYhEAxQx.js"))}}},blacksmith:{repairall:{"-":function(){qa("fromworld")&&ap()}}},buffmarket:{"-":{"-":()=>{Ml(import("./injectBuffmarket-sZ0FbJh8.js"))}}},combat:{attackplayer:{"-":xp}},composing:{"-":{"-":()=>{Ml(import("./composing-DkP_Y_Wq.js"))}},breakdown:{"-":()=>{Ml(import("./breakdown-BfUVO4Af.js"))}},create:{"-":()=>{Ml(import("./composingCreate-CR_wOOKe.js"))}}},findplayer:{"-":{"-":()=>{Ml(import("./findplayer-BNWJ6sJ4.js"))}}},guild:{inventory:{report:()=>{Ml(import("./guildReport-DjdhZTrk.js"))},addtags:wp,removetags:wp,storeitems:()=>{Ml(import("./storeitems-D3smTNVs.js"))}},chat:{"-":kp},dochat:{"-":kp},log:{"-":()=>{Ml(import("./guildLog-4OKqmDOo.js"))}},groups:{viewstats:()=>{Ml(import("./injectGroupStats-DL_77nBw.js"))},joinallgroupsundersize:bp,joinall:bp,"-":bp},manage:{"-":_p},advisor:{"-":yp,weekly:yp},history:{"-":mp},view:{"-":_p},scouttower:{"-":()=>{Ml(import("./injectScouttower-CgeD5HSp.js"))}},mailbox:{"-":()=>{Ml(import("./guildMailbox-BNCNOAS3.js"))}},ranks:{"-":()=>{Ml(import("./rank-Bj0MJcFX.js"))}},conflicts:{rpupgrades:()=>{Ml(import("./injectRPUpgrades-CWqVE8dM.js"))}},bank:{"-":()=>{Ml(import("./injectGuildBank-DOwxgCgJ.js"))}},hall:{"-":()=>{Ml(import("./hall-Cc5jKb3N.js"))},post:mp},"-":{"-":_p}},hellforge:{"-":{"-":()=>{Ml(import("./hellforge-w2gLIygZ.js"))}}},inventing:{"-":{"-":function(){Ml(import("./inventing-D0xkE9uO.js"))}},doinvent:{"-":Sp},viewrecipe:{"-":Sp}},log:{"-":{"-":()=>{Ml(import("./playerLog-CyIUDg3a.js"))}}},marketplace:{createreq:{"-":()=>{Ml(import("./marketplace-0qH_S7RV.js"))}}},news:{fsbox:{"-":()=>{Ml(import("./newsFsbox-DTayJGRg.js"))}},"-":{"-":Pp},shoutbox:{"-":()=>{Ml(import("./newsShoutbox-D9Q5s8Hx.js"))}},viewupdatearchive:{"-":$p},viewarchive:{"-":$p}},notepad:{showlogs:{"-":Dl},invmanagernew:{"-":Cp},guildinvmgr:{"-":Cp},recipemanager:{"-":Yl},auctionsearch:{"-":Gl},onlineplayers:{"-":Vl},quicklinkmanager:{"-":Kl},monsterlog:{"-":Bl},quickextract:{"-":Jl},quickwear:{"-":Xl},fsboxcontent:{"-":ql},bufflogcontent:{"-":Nl},newguildlog:{"-":Hl},findbuffs:{"-":Wl},findother:{"-":zl},savesettings:{"-":()=>{Ml(import("./load-CE1YhKvZ.js"))}},reliclist:{"-":Zl},whosgotwhat:{"-":()=>{}}},points:{"-":{"-":()=>{Ml(import("./points-3SMxLNp_.js"))}}},potionbazaar:{"-":{"-":Tp},buyitem:{"-":Tp}},privatemessage:{"-":{"-":()=>{Ml(import("./privateMsg-WPnu0OvY.js"))}}},profile:{"-":{"-":xp},managecombatset:{"-":xp},report:{"-":xp},equipitem:{"-":xp},useitem:{"-":xp},changebio:{"-":mp},dropitems:{"-":function(){Ml(import("./injectProfileDropItems-DxQw2RUL.js"))}}},pvpladder:{"-":{"-":()=>{Ml(import("./ladder-B_DMefWp.js"))}}},questbook:{"-":{"-":Op},atoz:{"-":Op},viewquest:{"-":()=>{Ml(import("./injectQuestTracker-VdHpc6kL.js"))}}},quickbuff:{"-":{"-":()=>{Ml(import("./quickBuff-HjxTybbw.js"))}}},scavenging:{"-":{"-":Ip},process:{"-":Ip}},settings:{"-":{"-":()=>{Ml(import("./injectSettings-DoaN0E2L.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{Ml(import("./superelite-DCWVNPJF.js"))}}},tempinv:{"-":{"-":()=>{Ml(import("./mailbox-R-SG8ONK.js"))}}},temple:{"-":{"-":gp}},titan:{"-":{"-":()=>{Ml(import("./injectTitan-DBY8unBT.js"))}}},toprated:{xp:{"-":Rp},monthlyxp:{"-":Rp},gold:{"-":Rp},killstreak:{"-":Rp},bounties:{"-":Rp},risingstars:{"-":Rp},arena:{"-":Rp},superelites:{"-":Rp},smasher:{"-":Rp},globalquest:{"-":()=>{Ml(import("./globalQuest-DLZMYjRf.js"))}}},trade:{"-":{"-":Lp},sendgold:{"-":Lp},createsecure:{"-":Lp},docreatesecure:{"-":Lp}},world:{"-":{"-":ap}}}
function Ap(e){return Ol("li",e)}function jp(e){return Ol("ul",e)}const Mp=()=>Il({className:"fshQuickLinks",style:{left:`${Ea("quickLinksLeftPx")}px`,top:`${Ea("quickLinksTopPx")}px`}}),Np=e=>"newWindow"in e&&e.url&&e.name
function Dp(e,t){const n=Fl(t,jp())
e.filter(Np).forEach((e=>{Fl(Fl(n,Ap()),function(e){const t=_d({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return Yf(t,(()=>Pl("chrome","quick link",e.name))),t}(e))}))}function Bp(){if(!go(".mainbody"))return
const e=Dh("quickLinks")||[]
e.length&&function(e){const t=Mp()
t.classList.toggle("fshFixed",Ea("keepHelperMenuOnScreen")),Ea("draggableQuickLinks")&&(t.classList.add("fshMove"),El(t)),Dp(e,t),Fl(document.body,t)}(e)}let qp=0,Hp=0,Up=0,Gp="",Wp=0,zp=0
function Vp(e){return qa(e)||"-"}function Qp(e){const t=go(e)
return t?.value||"-"}function Jp(){if(ho(Fp[qp])&&ho(Fp[qp][Hp])&&fo(Fp[qp][Hp][Up]))return Fp[qp][Hp][Up]}function Kp(){""!==document.location.search?(qp=Vp("cmd"),Hp=Vp("subcmd"),Up=Vp("subcmd2"),["points","privatemessage"].includes(qp)&&(Gp=`/${Vp("type")}`)):(qp=Qp('input[name="cmd"]'),Hp=Qp('input[name="subcmd"]'),Up=Qp('input[name="subcmd2"]')),xo.cmd=qp,xo.subcmd=Hp,xo.subcmd2=Up,zp=`${qp}/${Hp}/${Up}${Gp}`,Wp=Jp()}function Xp(){fo(Wp)&&(lo(zp),Wp())}async function Yp(e){Kp(),await e,sp(),Da(3,Xp),Ea("playNewMessageSound")&&Da(3,gl),ah()||Da(3,Bp)}const Zp=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,f]
function eg(e,t){if(Zp.some((e=>e())))return
const n=vo("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
Eo(),function(e,t){xo.gmInfo=po(decodeURIComponent(t)),xo.gmInfo?xo.fshVer=e:xo.fshVer=`${e}_native`,xo.calfVer="127"}(e,t),s(),function(){try{ao.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{api_host:"https://us.i.posthog.com",person_profiles:"identified_only",persistence:"localStorage"})}catch(e){}}(),Yp(n)}export{Nf as $,Ao as A,jp as B,$l as C,yh as D,Sd as E,kd as F,bf as G,yf as H,ya as I,ba as J,Zf as K,Fc as L,Ja as M,Pc as N,ku as O,Eu as P,Tu as Q,lc as R,Ac as S,yu as T,vu as U,ju as V,Fu as W,Pu as X,Cu as Y,Tc as Z,Ha as _,Af as a,el as a$,bu as a0,Va as a1,Dh as a2,Su as a3,Lu as a4,$c as a5,Mu as a6,qh as a7,n as a8,bh as a9,yd as aA,ed as aB,o as aC,Gs as aD,Cs as aE,Ts as aF,Fs as aG,Os as aH,up as aI,Pd as aJ,gs as aK,zo as aL,Ps as aM,Oo as aN,Od as aO,Ns as aP,Id as aQ,ld as aR,po as aS,Da as aT,Rl as aU,sa as aV,oa as aW,ua as aX,aa as aY,ca as aZ,Kc as a_,qa as aa,Jc as ab,Dl as ac,Bl as ad,xf as ae,ph as af,xo as ag,Bh as ah,Ea as ai,Ll as aj,cs as ak,vl as al,xu as am,Xs as an,To as ao,Wo as ap,tl as aq,Lf as ar,Lh as as,ts as at,ns as au,Ba as av,ws as aw,Xo as ax,va as ay,Xc as az,$o as b,Fo as b$,uo as b0,fo as b1,$s as b2,Au as b3,wu as b4,ms as b5,Xa as b6,fs as b7,cc as b8,Lo as b9,Cf as bA,$f as bB,Tf as bC,Is as bD,Rs as bE,qs as bF,Ms as bG,oh as bH,kf as bI,jf as bJ,uu as bK,ha as bL,Df as bM,ho as bN,wa as bO,Zs as bP,md as bQ,Of as bR,is as bS,pa as bT,ep as bU,xa as bV,bs as bW,dd as bX,Vs as bY,Xf as bZ,Qs as b_,js as ba,Bs as bb,kc as bc,bc as bd,wc as be,Sc as bf,ec as bg,Ic as bh,Rc as bi,Lc as bj,Ro as bk,ys as bl,Nc as bm,Mc as bn,qo as bo,Pa as bp,_a as bq,Zo as br,Ff as bs,eu as bt,Zu as bu,Ds as bv,Ls as bw,Us as bx,Ws as by,zs as bz,il as c,No as c$,xl as c0,Ol as c1,as as c2,Js as c3,ra as c4,Uo as c5,a as c6,ta as c7,Fh as c8,tu as c9,na as cA,lo as cB,Pp as cC,Op as cD,Sp as cE,Po as cF,pd as cG,Io as cH,Xd as cI,qd as cJ,Ud as cK,Gd as cL,Hd as cM,Qd as cN,fa as cO,da as cP,Ru as cQ,Qa as cR,Go as cS,jo as cT,Do as cU,Bo as cV,Ks as cW,Ul as cX,ds as cY,Ho as cZ,Ah as c_,qu as ca,ru as cb,ou as cc,iu as cd,tc as ce,ic as cf,Oc as cg,dc as ch,Ga as ci,Ku as cj,Ju as ck,gc as cl,jh as cm,hd as cn,ss as co,Ap as cp,e as cq,vo as cr,ea as cs,Ml as ct,cu,Kf as cv,Jo as cw,Co as cx,la as cy,Mo as cz,Al as d,Ql as d0,_p as d1,$u as d2,xc as d3,Uc as d4,ks as d5,Ss as d6,Xu as d7,El as d8,Zc as d9,ql as dA,bd as dB,hs as dC,ps as dD,ia as dE,td as dF,_s as dG,es as dH,Iu as dI,Za as dJ,Uf as dK,Qo as dL,au as dM,Jl as dN,Xl as dO,eg as dP,Ou as da,Bu as db,Cc as dc,us as dd,Yo as de,Uu as df,os as dg,Yu as dh,su as di,xs as dj,uh as dk,jl as dl,Yl as dm,rs as dn,Nl as dp,Kl as dq,Gl as dr,Vl as ds,zl as dt,Wl as du,Hl as dv,hl as dw,Es as dx,gp as dy,pp as dz,wf as e,ch as f,t as g,rh as h,Fl as i,Ys as j,eh as k,ma as l,Il as m,_d as n,Yf as o,pl as p,go as q,u as r,Pl as s,vs as t,fd as u,Mh as v,lh as w,Yc as x,Zh as y,ml as z}
//# sourceMappingURL=calfSystem-DCvZki7i.js.map
