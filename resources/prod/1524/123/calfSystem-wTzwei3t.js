function e(e){return void 0===e}function t(e){return new Promise((t=>{const n=document.createElement("script")
n.async=!0,n.onload=t,n.src=e,document.body.appendChild(n)}))}function n(e,t){return t?t.getElementById(e):document.getElementById(e)}function o(e){if(e instanceof Node)return e.textContent}function r(e,t){return e.exec(t)}function a(e,t){const n=r(e,t)
if(n)return n[1]}let i=null
function s(){const e=n("holdtext")
if(e&&!i){const t=a(/fallensword.com\/\?ref=(?<id>\d+)/,o(e))
t&&(i=Number(t))}return i}let c=null
const u=()=>function(){const e=n("statbar-character")
return e&&o(e)}()||"string"==typeof window.self&&window.self
function l(){if(!c){const e=u()
e&&(c=e)}return c}var f={}
const d=["www.keeprefreshing.com"]
let p=!1,g=!1
function m(){if(!g){const e=a(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
p=d.includes(e),g=!0}return p}function h(){!function(){t("https://www.googletagmanager.com/gtag/js?id=G-14Y99WX8XL"),window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},gtag("js",new Date)
const e=l()
gtag("config","G-14Y99WX8XL",{app_name:"fshApp",app_version:`${f.fshVer}(${f.calfVer})`,send_page_view:!1,...e&&{user_id:e}})}()}function y(){return m()||e(window.ga)}function b(e){y()||(ga("fshApp.set","screenName",e),ga("fshApp.send","screenview"))}const v={}
function w(e,t,n){v[`${e}:${t}:${n}`]=1e3*performance.now()}function _(e,t,n){y()||function(e,t,n){const o=Math.round(1e3*performance.now()-v[`${e}:${t}:${n}`])/1e3
o>10&&ga("fshApp.send","timing",e,t,Math.round(o),n)}(e,t,n)}function k(e){return"function"==typeof e}function j(e){return"object"==typeof e}function x(e,t){try{return JSON.parse(e,t)}catch(e){}}function S(e,t){return t?t.querySelector(e):document.querySelector(e)}function L(e){const t=S("link",document.body)
return new Promise((n=>{const o=document.createElement("link")
o.type="text/css",o.rel="stylesheet",o.onload=()=>{n()},o.href=e,t?t.before(o):document.body.append(o)}))}var E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function P(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var O={exports:{}}
O.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==E?E:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var o=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})})),n}var o={},r={},a={},i={},s="<unknown>"
function c(e){return e.split("\n").reduce((function(e,t){var n=f(t)||p(t)||h(t)||w(t)||b(t)
return n&&e.push(n),e}),[])}var u=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,l=/\((\S*)(?::(\d+))(?::(\d+))\)/
function f(e){var t=u.exec(e)
if(!t)return null
var n=t[2]&&0===t[2].indexOf("native"),o=t[2]&&0===t[2].indexOf("eval"),r=l.exec(t[2])
return o&&null!=r&&(t[2]=r[1],t[3]=r[2],t[4]=r[3]),{file:n?null:t[2],methodName:t[1]||s,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var d=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function p(e){var t=d.exec(e)
return t?{file:t[2],methodName:t[1]||s,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var g=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,m=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function h(e){var t=g.exec(e)
if(!t)return null
var n=t[3]&&t[3].indexOf(" > eval")>-1,o=m.exec(t[3])
return n&&null!=o&&(t[3]=o[1],t[4]=o[2],t[5]=null),{file:t[3],methodName:t[1]||s,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var y=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i
function b(e){var t=y.exec(e)
return t?{file:t[3],methodName:t[1]||s,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var v=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
function w(e){var t=v.exec(e)
return t?{file:t[2],methodName:t[1]||s,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var _=n(Object.freeze({__proto__:null,parse:c}));(function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n)
var r=Object.getOwnPropertyDescriptor(t,n)
r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),o=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return o(t,e),t},a=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function s(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):r(e.value).then(i,s)}c((o=o.apply(e,t||[])).next())}))},i=e&&e.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a
function s(e){return function(t){return c([e,t])}}function c(a){if(n)throw new TypeError("Generator is already executing.")
for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r
switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a
break
case 4:return i.label++,{value:a[1],done:!1}
case 5:i.label++,o=a[1],a=[0]
continue
case 7:a=i.ops.pop(),i.trys.pop()
continue
default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0
continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1]
break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a
break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a)
break}r[2]&&i.ops.pop(),i.trys.pop()
continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1]
return{value:a[0]?a[1]:void 0,done:!0}}}
Object.defineProperty(t,"__esModule",{value:!0}),t.logDeprecatedMethod=t.globalThisOrWindow=t.isBrowserConfig=t.clone=t.formatCGIData=t.filterUrl=t.filter=t.generateStackTrace=t.endpoint=t.instrumentConsole=t.instrument=t.isErrorObject=t.makeNotice=t.logger=t.sanitize=t.shallowClone=t.runAfterNotifyHandlers=t.runBeforeNotifyHandlers=t.getSourceForBacktrace=t.getCauses=t.calculateBacktraceShift=t.DEFAULT_BACKTRACE_SHIFT=t.makeBacktrace=t.objectIsExtensible=t.objectIsEmpty=t.mergeNotice=t.merge=void 0
var s=r(_)
function c(e,t){var n={}
for(var o in e)n[o]=e[o]
for(var o in t)n[o]=t[o]
return n}function u(e,t){var n=c(e,t)
return e.context&&t.context&&(n.context=c(e.context,t.context)),n}function l(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
return!0}function f(e){return"function"!=typeof Object.isExtensible||Object.isExtensible(e)}function d(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=console),!e)return[]
try{var o=s.parse(e).map((function(e){return{file:e.file,method:e.methodName,number:e.lineNumber,column:e.column}}))
return t&&o.splice(0,g(o)),o}catch(e){return n.debug(e),[]}}function p(e){var t=!1,n=!1
return e.file&&(t=e.file.toLowerCase().indexOf("@honeybadger-io")>-1),e.method&&(n=e.method.toLowerCase().indexOf("@honeybadger-io")>-1),t||n}function g(e){for(var n=0,o=0;o<e.length;o++){var r=e[o]
if(!p(r)){if(!r.file||"<anonymous>"===r.file){var a=e[o+1]
if(a&&p(a)){n++
continue}}break}n++}return n||t.DEFAULT_BACKTRACE_SHIFT}function m(e,t){if(e.cause){for(var n=[],o=e;n.length<3&&(o=o.cause);)n.push({class:o.name,message:o.message,backtrace:"string"==typeof o.stack?d(o.stack,!1,t):null})
return n}return[]}function h(e,t){return a(this,void 0,void 0,(function(){var n,o,r,a
return i(this,(function(i){switch(i.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
o=0,i.label=1
case 1:return e.length?(r=e.splice(0)[o],[4,t(r.file)]):[3,3]
case 2:return a=i.sent(),n[o]=H(a,r.number),o++,[3,1]
case 3:return[2,n]}}))}))}function y(e,t){for(var n=[],o=!0,r=0,a=t.length;r<a;r++){var i=(0,t[r])(e)
!1===i&&(o=!1),n.push(i)}return{results:n,result:o}}function b(e,t,n){e&&e.afterNotify&&e.afterNotify(n,e)
for(var o=0,r=t.length;o<r;o++)t[o](n,e)
return!0}function v(e){if("object"!=typeof e||null===e)return{}
var t={}
for(var n in e)t[n]=e[n]
return t}function w(e,t){void 0===t&&(t=8)
var n=[]
function o(e){if(!e||"object"!=typeof e)return!1
for(var t=0;t<n.length;t++)if(n[t]===e)return!0
return n.push(e),!1}function r(e){var t=typeof e
return/function/.test(t)?"toJSON"===e.name:!/symbol/.test(t)&&null!==e&&("object"!=typeof e||void 0!==e.hasOwnProperty)}function a(e,n){if(void 0===n&&(n=0),n>=t)return"[DEPTH]"
if(!r(e))return Object.prototype.toString.call(e)
if(o(e))return"[RECURSION]"
if(Array.isArray(e))return e.map((function(e){return i(e,n+1)}))
if("object"==typeof e){var a={}
for(var s in e){var c=e[s]
Object.prototype.hasOwnProperty.call(e,s)&&null!=s&&null!=c&&(a[s]=i(c,n+1))}return a}return e}function i(e,t){void 0===t&&(t=0)
try{return a(e,t)}catch(e){return"[ERROR] ".concat(e)}}return i(e)}function k(e){var t=function(t){return function(){for(var n,o=[],r=0;r<arguments.length;r++)o[r]=arguments[r]
if("debug"===t){if(!e.config.debug)return
t="log"}o.unshift("[Honeybadger]"),(n=e.config.logger)[t].apply(n,o)}}
return{log:t("log"),info:t("info"),debug:t("debug"),warn:t("warn"),error:t("error")}}function j(e){var t
if(e)if(x(e)){var n=e
t=c(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?v(e):{message:String(e)}
else t={}
return t}function x(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function S(e,t,n){if(e&&t&&n&&t in e)try{for(var o=e[t];o&&o.__hb_original;)o=o.__hb_original
e[t]=n(o),e[t].__hb_original=o}catch(e){}}t.merge=c,t.mergeNotice=u,t.objectIsEmpty=l,t.objectIsExtensible=f,t.makeBacktrace=d,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=g,t.getCauses=m,t.getSourceForBacktrace=h,t.runBeforeNotifyHandlers=y,t.runAfterNotifyHandlers=b,t.shallowClone=v,t.sanitize=w,t.logger=k,t.makeNotice=j,t.isErrorObject=x,t.instrument=S
var $=!1,L=[]
function E(e,t){e&&e.console&&t&&(L.push(t),$||($=!0,["debug","info","warn","error","log"].forEach((function(t){S(e.console,t,(function(n){return function(){var o=Array.prototype.slice.call(arguments)
L.forEach((function(e){try{e(t,o)}catch(e){}})),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}}))}))))}function P(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function O(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function C(e,t){if(N("Object",e)){N("Array",t)||(t=[])
var n=[]
return o(e)}function o(e){var r,a
if(N("Object",e)||N("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(N("Object",e)){for(r in a={},e)T(r,t)?a[r]="[FILTERED]":a[r]=o(e[r])
return a}return N("Array",e)?e.map((function(e){return o(e)})):N("Function",e)?"[FUNC]":e}}function T(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function N(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function A(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var o=e
return n.split(/[&]\s?/).forEach((function(e){var n=e.split("=",2),r=n[0],a=n[1]
T(r,t)&&(o=o.replace("".concat(r,"=").concat(a),"".concat(r,"=[FILTERED]")))})),o}function M(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach((function(o){var r=t+o.replace(/\W/g,"_").toUpperCase()
n[r]=e[o]})),n}function B(e){return JSON.parse(JSON.stringify(e))}function H(e,t,n){if(void 0===n&&(n=2),!e)return null
var o=e.split("\n")
o.unshift("")
for(var r=t+n,a={},i=t-n;i<=r;i++){var s=o[i]
"string"==typeof s&&(a[i]=s)}return a}function R(e){return void 0!==e.async}function D(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.instrumentConsole=E,t.endpoint=P,t.generateStackTrace=O,t.filter=C,t.filterUrl=A,t.formatCGIData=M,t.clone=B,t.isBrowserConfig=R,t.globalThisOrWindow=D
var I={}
function U(e,t,n,o){void 0===o&&(o=100)
var r="".concat(t,"-").concat(n)
if(void 0===I[r]&&(I[r]=0),I[r]%o==0){var a="Deprecation warning: ".concat(t," has been deprecated; please use ").concat(n," instead.")
e.warn(a),I[r]++}else I[r]++}t.logDeprecatedMethod=U})(i),Object.defineProperty(a,"__esModule",{value:!0})
var k=i
function j(e){return void 0===e&&(e=(0,k.globalThisOrWindow)()),{shouldReloadOnConfigure:!1,load:function(t){function n(){return t.config.eventsEnabled}n()&&(0,k.instrumentConsole)(e,(function(e,o){if(n()&&0!==o.length){var r={severity:e}
"string"==typeof o[0]?(r.message=o[0],r.args=o.slice(1)):r.args=o,t.event("log",r)}}))}}}a.default=j
var x={},S={}
Object.defineProperty(S,"__esModule",{value:!0}),S.GlobalStore=void 0
var $=i,L=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,$.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
S.GlobalStore=L
var P={}
class O{static parse(e){return e.trim().split("\n").map((e=>JSON.parse(e)))}static stringify(e){return e.map((e=>JSON.stringify(e))).join("\n")}}var C=Object.freeze({__proto__:null,NdJson:O}),T=n(C),N={}
Object.defineProperty(N,"__esModule",{value:!0}),N.CONFIG=void 0,N.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var A=e&&e.__assign||function(){return A=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},A.apply(this,arguments)},M=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function s(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):r(e.value).then(i,s)}c((o=o.apply(e,t||[])).next())}))},B=e&&e.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a
function s(e){return function(t){return c([e,t])}}function c(a){if(n)throw new TypeError("Generator is already executing.")
for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r
switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a
break
case 4:return i.label++,{value:a[1],done:!1}
case 5:i.label++,o=a[1],a=[0]
continue
case 7:a=i.ops.pop(),i.trys.pop()
continue
default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0
continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1]
break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a
break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a)
break}r[2]&&i.ops.pop(),i.trys.pop()
continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1]
return{value:a[0]?a[1]:void 0,done:!0}}}
Object.defineProperty(P,"__esModule",{value:!0}),P.ThrottledEventsLogger=void 0
var H=T,R=i,D=N,I=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=A(A({},D.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.processQueue=function(){var e=this
if(0!==this.queue.length&&!this.isProcessing){this.isProcessing=!0
var t=this.queue.slice()
this.queue=[]
var n=H.NdJson.stringify(t)
this.makeHttpRequest(n).then((function(){setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})).catch((function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)}))}},e.prototype.makeHttpRequest=function(e){return M(this,void 0,void 0,(function(){var t=this
return B(this,(function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,R.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then((function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")})).catch((function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))}))]}))}))},e.prototype.originalLogger=function(){var e,t,n,o,r
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(o=console.warn.__hb_original)&&void 0!==o?o:console.warn,error:null!==(r=console.error.__hb_original)&&void 0!==r?r:console.error}},e}()
P.ThrottledEventsLogger=I
var U=e&&e.__assign||function(){return U=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},U.apply(this,arguments)},G=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function s(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):r(e.value).then(i,s)}c((o=o.apply(e,t||[])).next())}))},q=e&&e.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a
function s(e){return function(t){return c([e,t])}}function c(a){if(n)throw new TypeError("Generator is already executing.")
for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r
switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a
break
case 4:return i.label++,{value:a[1],done:!1}
case 5:i.label++,o=a[1],a=[0]
continue
case 7:a=i.ops.pop(),i.trys.pop()
continue
default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0
continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1]
break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a
break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a)
break}r[2]&&i.ops.pop(),i.trys.pop()
continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1]
return{value:a[0]?a[1]:void 0,done:!0}}}
Object.defineProperty(x,"__esModule",{value:!0}),x.Client=void 0
var F=i,W=S,Q=P,J=N,z=/,|\s+/,K=/\S/,X=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.9.1"},this.config=U(U({},J.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new Q.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,F.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
return this.__eventsLogger.configure(this.config),this.loadPlugins(),this},e.prototype.loadPlugins=function(){var e=this;(this.__pluginsLoaded?this.config.__plugins.filter((function(e){return e.shouldReloadOnConfigure})):this.config.__plugins).forEach((function(t){return t.load(e)})),this.__pluginsLoaded=!0},e.prototype.__initStore=function(){this.__store=new W.GlobalStore({context:{},breadcrumbs:[]},this.config.maxBreadcrumbs)},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&null!=e&&this.__store.setContext(e),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__store.clear(),"object"==typeof e&&null!==e&&this.__store.setContext(e),this},e.prototype.clear=function(){return this.__store.clear(),this},e.prototype.notify=function(e,t,n){var o=this
void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var r=this.makeNotice(e,t,n),a=r&&r.backtrace?r.backtrace.map((function(e){return(0,F.shallowClone)(e)})):null,i=this.__runPreconditions(r)
return i instanceof Error?((0,F.runAfterNotifyHandlers)(r,this.__afterNotifyHandlers,i),!1):i instanceof Promise?(i.then((function(e){return e instanceof Error?((0,F.runAfterNotifyHandlers)(r,o.__afterNotifyHandlers,e),!1):o.__send(r,a)})),!0):(this.__send(r,a).catch((function(e){})),!0)},e.prototype.notifyAsync=function(e,t,n){var o=this
return void 0===t&&(t=void 0),void 0===n&&(n=void 0),new Promise((function(r,a){var i,s
i=e.afterNotify?e:t&&t.afterNotify?t:n&&n.afterNotify?n:t&&"object"==typeof t?t:n||(t={}),s=i.afterNotify,i.afterNotify=function(e){if(null==s||s.call(o,e),e)return a(e)
r()},o.notify(e,t,n)}))},e.prototype.makeNotice=function(e,t,n){void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var o=(0,F.makeNotice)(e)
if(t&&"object"!=typeof t&&(t={name:String(t)}),t&&(o=(0,F.mergeNotice)(o,t)),"object"==typeof n&&null!==n&&(o=(0,F.mergeNotice)(o,n)),(0,F.objectIsEmpty)(o))return null
var r=this.__store.getContents("context"),a=this.__constructTags(o.tags),i=this.__constructTags(r.tags),s=this.__constructTags(this.config.tags),c=a.concat(i).concat(s),u=c.filter((function(e,t){return c.indexOf(e)===t}))
return o=(0,F.merge)(o,{name:o.name||"Error",context:(0,F.merge)(r,o.context),projectRoot:o.projectRoot||this.config.projectRoot,environment:o.environment||this.config.environment,component:o.component||this.config.component,action:o.action||this.config.action,revision:o.revision||this.config.revision,tags:u}),Array.isArray(o.backtrace)&&o.backtrace.length||("string"==typeof o.stack&&o.stack.trim()?o.backtrace=(0,F.makeBacktrace)(o.stack,!1,this.logger):(o.stack=(0,F.generateStackTrace)(),o.backtrace=(0,F.makeBacktrace)(o.stack,!0,this.logger))),o},e.prototype.addBreadcrumb=function(e,t){if(this.config.breadcrumbsEnabled){t=t||{}
var n=(0,F.shallowClone)(t.metadata),o=t.category||"custom",r=(new Date).toISOString()
return this.__store.addBreadcrumb({category:o,message:e,metadata:n,timestamp:r}),this}},e.prototype.logEvent=function(e){(0,F.logDeprecatedMethod)(this.logger,"Honeybadger.logEvent","Honeybadger.event"),this.event("log",e)},e.prototype.event=function(e,t){var n
"object"==typeof e&&(t=e,e=null!==(n=e.event_type)&&void 0!==n?n:void 0),this.__eventsLogger.log(U({event_type:e,ts:(new Date).toISOString()},t))},e.prototype.__getBreadcrumbs=function(){return this.__store.getContents("breadcrumbs").slice()},e.prototype.__getContext=function(){return this.__store.getContents("context")},e.prototype.__developmentMode=function(){return!0!==this.config.reportData&&this.config.environment&&this.config.developmentEnvironments.includes(this.config.environment)},e.prototype.__buildPayload=function(e){var t=(0,F.filter)(e.headers,this.config.filters)||{},n=(0,F.filter)(U(U({},e.cgiData),(0,F.formatCGIData)(t,"HTTP_")),this.config.filters)
return{notifier:this.__notifier,breadcrumbs:{enabled:!!this.config.breadcrumbsEnabled,trail:e.__breadcrumbs||[]},error:{class:e.name,message:e.message,backtrace:e.backtrace,fingerprint:e.fingerprint,tags:e.tags,causes:(0,F.getCauses)(e,this.logger)},request:{url:(0,F.filterUrl)(e.url,this.config.filters),component:e.component,action:e.action,context:e.context,cgi_data:n,params:(0,F.filter)(e.params,this.config.filters)||{},session:(0,F.filter)(e.session,this.config.filters)||{}},server:{project_root:e.projectRoot,environment_name:e.environment,revision:e.revision,hostname:this.config.hostname,time:(new Date).toUTCString()},details:e.details||{}}},e.prototype.__constructTags=function(e){return e?e.toString().split(z).filter((function(e){return K.test(e)})):[]},e.prototype.__runPreconditions=function(e){var t=this,n=null
e||(this.logger.debug("failed to build error report"),n=new Error("failed to build error report")),!1===this.config.reportData&&(this.logger.debug("skipping error report: honeybadger.js is disabled",e),n=new Error("honeybadger.js is disabled")),this.__developmentMode()&&(this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.",e),n=new Error("honeybadger.js is in development mode")),this.config.apiKey||(this.logger.warn("could not send error report: no API key has been configured",e),n=new Error("missing API key"))
var o=(0,F.runBeforeNotifyHandlers)(e,this.__beforeNotifyHandlers)
return n||o.result||(this.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers returned false")),o.results.length&&o.results.some((function(e){return e instanceof Promise}))?Promise.allSettled(o.results).then((function(o){if(!n&&o.some((function(e){return"rejected"===e.status||!1===e.value}))&&(t.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers (async) returned false")),n)return n})):n},e.prototype.__send=function(e,t){var n=this
return this.config.breadcrumbsEnabled?(this.addBreadcrumb("Honeybadger Notice",{category:"notice",metadata:{message:e.message,name:e.name,stack:e.stack}}),e.__breadcrumbs=this.__store.getContents("breadcrumbs")):e.__breadcrumbs=[],(0,F.getSourceForBacktrace)(t,this.__getSourceFileHandler).then((function(t){return G(n,void 0,void 0,(function(){var n
return q(this,(function(o){return t.forEach((function(t,n){e.backtrace[n].source=t})),n=this.__buildPayload(e),[2,this.__transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json",Accept:"text/json, application/json"},method:"POST",endpoint:(0,F.endpoint)(this.config.endpoint,"/v1/notices/js"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},n)]}))}))})).then((function(t){if(201!==t.statusCode)return(0,F.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,new Error("Bad HTTP response: ".concat(t.statusCode))),n.logger.warn("Error report failed: unknown response from server. code=".concat(t.statusCode)),!1
var o=JSON.parse(t.body).id
return(0,F.runAfterNotifyHandlers)((0,F.merge)(e,{id:o}),n.__afterNotifyHandlers),n.logger.info("Error report sent ⚡ https://app.honeybadger.io/notice/".concat(o)),!0})).catch((function(t){return n.logger.error("Error report failed: an unknown error occurred.","message=".concat(t.message)),(0,F.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,t),!1}))},e}()
x.Client=X
var V={}
Object.defineProperty(V,"__esModule",{value:!0}),function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n)
var r=Object.getOwnPropertyDescriptor(t,n)
r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),o=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||n(t,e,o)},s=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return o(t,e),t},c=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Util=t.Types=t.Client=void 0
var u=c(a),l=x
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return l.Client}}),r(S,t),t.Types=s(V),t.Util=s(i),t.Plugins={events:u.default}}(r)
var Y={}
Object.defineProperty(Y,"__esModule",{value:!0}),Y.preferCatch=Y.encodeCookie=Y.decodeCookie=Y.localURLPathname=Y.parseURL=Y.nativeFetch=Y.stringTextOfElement=Y.stringSelectorOfElement=Y.stringNameOfElement=void 0
var Z=r.Util.globalThisOrWindow
function ee(e){if(!e||!e.tagName)return""
var t=e.tagName.toLowerCase()
if("html"===t)return""
e.id&&(t+="#".concat(e.id))
var n=e.getAttribute("class")
n&&n.split(/\s+/).forEach((function(e){t+=".".concat(e)})),["alt","name","title","type"].forEach((function(n){var o=e.getAttribute(n)
o&&(t+="[".concat(n,'="').concat(o,'"]'))}))
var o=ue(e)
return o.length>1&&(t+=":nth-child(".concat(Array.prototype.indexOf.call(o,e)+1,")")),t}function te(e){var t=ee(e)
if(e.parentNode&&e.parentNode.tagName){var n=te(e.parentNode)
if(n.length>0)return"".concat(n," > ").concat(t)}return t}function ne(e){var t=e.textContent||e.innerText||""
return t||"submit"!==e.type&&"button"!==e.type||(t=e.value),le(t.trim(),300)}function oe(){var e=Z()
if(!e.fetch)return!1
if(re(e.fetch))return!0
if("undefined"==typeof document)return!1
try{var t=document.createElement("iframe")
t.style.display="none",document.head.appendChild(t)
var n=t.contentWindow.fetch&&re(t.contentWindow.fetch)
return document.head.removeChild(t),n}catch(e){console&&console.warn&&console.warn("failed to detect native fetch via iframe: "+e)}return!1}function re(e){return-1!==e.toString().indexOf("native")}function ae(e){var t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)||{}
return{protocol:t[2],host:t[4],pathname:t[5]}}function ie(e){var t=ae(e),n=ae(document.URL)
return t.host&&t.protocol?t.protocol===n.protocol&&t.host===n.host?t.pathname:"".concat(t.protocol,"://").concat(t.host).concat(t.pathname):t.pathname}function se(e){var t={}
return e.split(/[;,]\s?/).forEach((function(e){var n=e.split("=",2),o=n[0],r=n[1]
t[o]=r})),t}function ce(e){if("object"==typeof e){var t=[]
for(var n in e)t.push(n+"="+e[n])
return t.join(";")}}function ue(e){try{var t=e.parentNode.childNodes,n=[]
return Array.prototype.forEach.call(t,(function(t){t.tagName&&t.tagName===e.tagName&&n.push(t)})),n}catch(e){return[]}}function le(e,t){return e.length>t&&(e=e.substr(0,t)+"..."),e}Y.stringNameOfElement=ee,Y.stringSelectorOfElement=te,Y.stringTextOfElement=ne,Y.nativeFetch=oe,Y.parseURL=ae,Y.localURLPathname=ie,Y.decodeCookie=se,Y.encodeCookie=ce,Y.preferCatch=function(){var e=!0
if("undefined"==typeof window)return e
if(window.atob||(e=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(e=!1)}catch(e){}return e}()
var fe={}
Object.defineProperty(fe,"__esModule",{value:!0}),fe.onError=fe.ignoreNextOnError=void 0
var de,pe=r,ge=pe.Util.instrument,me=pe.Util.makeNotice,he=pe.Util.globalThisOrWindow,ye=0
function be(){ye+=1,clearTimeout(de),de=setTimeout((function(){ye=0}))}function ve(e){return void 0===e&&(e=he()),{load:function(t){ge(e,"onerror",(function(n){var o=function(e,n,o,r,a){if(t.logger.debug("window.onerror callback invoked",arguments),ye>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(ye-=1)
if(0===o&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var i=me(a)
i.name||(i.name="window.onerror"),i.message||(i.message=e),i.stack||(i.stack=[i.message,"\n    at ? (",n||"unknown",":",o||0,":",r||0,")"].join("")),t.addBreadcrumb("window.onerror"!==i.name&&i.name?"window.onerror: ".concat(i.name):"window.onerror",{category:"error",metadata:{name:i.name,message:i.message,stack:i.stack}}),t.config.enableUncaught&&t.notify(i)}}
return function(t,r,a,i,s){return o(t,r,a,i,s),"function"==typeof n&&n.apply(e,arguments)}}))}}}fe.ignoreNextOnError=be,fe.onError=ve
var we={}
Object.defineProperty(we,"__esModule",{value:!0})
var _e=r,ke=_e.Util.instrument,je=_e.Util.globalThisOrWindow
function xe(e){return void 0===e&&(e=je()),{load:function(t){t.config.enableUnhandledRejection&&ke(e,"onunhandledrejection",(function(e){function n(e){var n
if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var o=e.reason
if(o instanceof Error){var r="unknown",a=0,i="".concat(o.message,"\n    at ? (").concat(r,":").concat(a,")"),s=o.stack||i,c={name:o.name,message:"UnhandledPromiseRejectionWarning: ".concat(o),stack:s}
return t.addBreadcrumb("window.onunhandledrejection: ".concat(c.name),{category:"error",metadata:c}),void t.notify(c)}var u="string"==typeof o?o:null!==(n=JSON.stringify(o))&&void 0!==n?n:"Unspecified reason"
t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: ".concat(u)})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}}))}}}we.default=xe
var Se={}
Object.defineProperty(Se,"__esModule",{value:!0})
var $e=r,Le=Y,Ee=$e.Util.sanitize,Pe=$e.Util.instrument,Oe=$e.Util.instrumentConsole,Ce=$e.Util.globalThisOrWindow
function Te(e){return void 0===e&&(e=Ce()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function o(e){return Array.isArray(e)?e.map((function(e){try{return String(e)}catch(e){return"[unknown]"}})).join(" "):""}n("console")&&Oe(e,(function(e,n){var r=o(n),a={category:"log",metadata:{level:e,arguments:Ee(n,3)}}
t.addBreadcrumb(r,a)}))}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",(function(e){var n,o,r
try{n=(0,Le.stringNameOfElement)(e.target),o=(0,Le.stringSelectorOfElement)(e.target),r=(0,Le.stringTextOfElement)(e.target)}catch(e){n="UI Click",o="[unknown]",r="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:o,text:r,event:e}})}),!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Pe(XMLHttpRequest.prototype,"open",(function(e){return function(){var t=this,n=arguments[1],o="string"==typeof n?n:String(n),r="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],a="".concat(r," ").concat((0,Le.localURLPathname)(o))
this.__hb_xhr={type:"xhr",method:r,url:o,message:a},"function"==typeof e&&e.apply(t,arguments)}})),Pe(XMLHttpRequest.prototype,"send",(function(e){return function(){var n=this
function o(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Pe(n,"onreadystatechange",(function(e){return function(){o(),"function"==typeof e&&e.apply(this,arguments)}})):n.onreadystatechange=o,"function"==typeof e&&e.apply(n,arguments)}}))),n("network")&&(0,Le.nativeFetch)()&&Pe(e,"fetch",(function(n){return function(){var o,r=arguments[0],a="GET"
"string"==typeof r?o=r:"Request"in e&&r instanceof Request?(o=r.url,r.method&&(a=r.method)):o=String(r),arguments[1]&&arguments[1].method&&(a=arguments[1].method),"string"==typeof a&&(a=a.toUpperCase())
var i="".concat(a," ").concat("undefined"==typeof document?o:(0,Le.localURLPathname)(o)),s={type:"fetch",method:a,url:o}
return n.apply(this,arguments).then((function(e){return s.status_code=e.status,t.addBreadcrumb(i,{category:"request",metadata:s}),e})).catch((function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:s}),e}))}})),function(){if(n("navigation")&&null!=e.location){var o=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",(function(t){r(o,e.location.href)})),void 0!==e.history&&(Pe(e.history,"pushState",a),Pe(e.history,"replaceState",a))}function r(e,n){o=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function a(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&r(o,String(t)),e.apply(this,arguments)}}}()}}}Se.default=Te
var Ne={}
Object.defineProperty(Ne,"__esModule",{value:!0})
var Ae=r,Me=Ae.Util.instrument,Be=Ae.Util.globalThisOrWindow
function He(e){return void 0===e&&(e=Be()),{load:function(t){!function(){function n(e){return function(n){return function(o,r){if("function"==typeof o){var a=Array.prototype.slice.call(arguments,2)
return o=t.__wrap(o,e),n((function(){o.apply(void 0,a)}),r)}return n(o,r)}}}Me(e,"setTimeout",n({component:"setTimeout"})),Me(e,"setInterval",n({component:"setInterval"}))}()}}}Ne.default=He
var Re={}
Object.defineProperty(Re,"__esModule",{value:!0})
var De=r,Ie=De.Util.instrument,Ue=De.Util.globalThisOrWindow
function Ge(e){return void 0===e&&(e=Ue()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach((function(n){var o=e[n]&&e[n].prototype
o&&Object.prototype.hasOwnProperty.call(o,"addEventListener")&&(Ie(o,"addEventListener",(function(e){var o={component:"".concat(n,".prototype.addEventListener")}
return function(n,r,a,i){try{r&&null!=r.handleEvent&&(r.handleEvent=t.__wrap(r.handleEvent,o))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(r,o),a,i)}})),Ie(o,"removeEventListener",(function(e){return function(n,o,r,a){return e.call(this,n,o,r,a),e.call(this,n,t.__wrap(o),r,a)}})))}))}}}Re.default=Ge
var qe={},Fe=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function s(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):r(e.value).then(i,s)}c((o=o.apply(e,t||[])).next())}))},We=e&&e.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a
function s(e){return function(t){return c([e,t])}}function c(a){if(n)throw new TypeError("Generator is already executing.")
for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r
switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a
break
case 4:return i.label++,{value:a[1],done:!1}
case 5:i.label++,o=a[1],a=[0]
continue
case 7:a=i.ops.pop(),i.trys.pop()
continue
default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0
continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1]
break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a
break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a)
break}r[2]&&i.ops.pop(),i.trys.pop()
continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1]
return{value:a[0]?a[1]:void 0,done:!0}}}
Object.defineProperty(qe,"__esModule",{value:!0}),qe.BrowserTransport=void 0
var Qe=r,Je=Qe.Util.sanitize,ze=Qe.Util.globalThisOrWindow
function Ke(e){return Object.entries(e)}var Xe=function(){function e(e){void 0===e&&(e={}),this.headers={},this.headers=e}return e.prototype.defaultHeaders=function(){return this.headers},e.prototype.send=function(e,t){return Fe(this,void 0,void 0,(function(){var n,o,r,a,i
return We(this,(function(s){switch(s.label){case 0:return n=e.headers?Ke(e.headers):[],o=this.defaultHeaders(),n.forEach((function(e){var t=e[0],n=e[1]
null!=t&&null!=n&&(o[String(t)]=String(n))})),r={method:e.method,headers:o},"POST"===e.method&&t&&(r.body="string"==typeof t?t:JSON.stringify(Je(t,e.maxObjectDepth))),[4,ze().fetch(e.endpoint,r)]
case 1:return[4,(a=s.sent()).text()]
case 2:return i=s.sent(),[2,Promise.resolve({statusCode:a.status,body:i})]}}))}))},e}()
qe.BrowserTransport=Xe,function(t){var n,o=e&&e.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),a=e&&e.__assign||function(){return a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},a.apply(this,arguments)},i=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function s(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):r(e.value).then(i,s)}c((o=o.apply(e,t||[])).next())}))},s=e&&e.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a
function s(e){return function(t){return c([e,t])}}function c(a){if(n)throw new TypeError("Generator is already executing.")
for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r
switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a
break
case 4:return i.label++,{value:a[1],done:!1}
case 5:i.label++,o=a[1],a=[0]
continue
case 7:a=i.ops.pop(),i.trys.pop()
continue
default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0
continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1]
break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a
break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a)
break}r[2]&&i.ops.pop(),i.trys.pop()
continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1]
return{value:a[0]?a[1]:void 0,done:!0}}},c=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Types=t.getUserFeedbackScriptUrl=void 0
var u=r,l=Y,f=fe,d=c(we),p=c(Se),g=c(Ne),m=c(Re),h=qe,y=u.Util.merge,b=u.Util.filter,v=u.Util.objectIsExtensible,w=u.Util.globalThisOrWindow,_=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},k=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=k
var j=function(n){function r(e){void 0===e&&(e={})
var t=n.call(this,a({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:_()},e),new h.BrowserTransport({"User-Agent":S()}))||this
return t.__errorsSent=0,t.__lastWrapErr=void 0,t.__lastNoticeId=void 0,t.__beforeNotifyHandlers=[function(e){return t.__exceedsMaxErrors()?(t.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),t.__incrementErrorsCount(),!0)}],t.__afterNotifyHandlers=[function(e,n){n&&(t.__lastNoticeId=n.id)}],t}return o(r,n),r.prototype.configure=function(e){return void 0===e&&(e={}),n.prototype.configure.call(this,e)},r.prototype.resetMaxErrors=function(){return this.__errorsSent=0},r.prototype.factory=function(e){var t=new r(e)
return t.setNotifier(this.getNotifier()),t},r.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},r.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var t
return s(this,(function(n){return this.config&&this.config.apiKey?this.__lastNoticeId?void 0===(t=w()).document?(this.logger.debug("global.document is undefined. Cannot attach script"),[2]):this.isUserFeedbackScriptUrlAlreadyVisible()?(this.logger.debug("User feedback form is already visible"),[2]):(t.honeybadgerUserFeedbackOptions=a(a({},e),{apiKey:this.config.apiKey,endpoint:this.config.userFeedbackEndpoint,noticeId:this.__lastNoticeId}),this.appendUserFeedbackScriptTag(t,e),[2]):(this.logger.debug("Can't show user feedback form without a notice already reported"),[2]):(this.logger.debug("Client not initialized"),[2])}))}))},r.prototype.appendUserFeedbackScriptTag=function(t,n){void 0===n&&(n={})
var o=t.document.createElement("script")
o.setAttribute("src",this.getUserFeedbackSubmitUrl()),o.setAttribute("async","true"),n.onLoad&&(o.onload=n.onLoad),(e.document.head||e.document.body).appendChild(o)},r.prototype.isUserFeedbackScriptUrlAlreadyVisible=function(){for(var e=w(),t=this.getUserFeedbackSubmitUrl(),n=0;n<e.document.scripts.length;n++)if(e.document.scripts[n].src===t)return!0
return!1},r.prototype.getUserFeedbackSubmitUrl=function(){return(0,t.getUserFeedbackScriptUrl)(this.getVersion())},r.prototype.__buildPayload=function(e){var t,o={HTTP_USER_AGENT:void 0,HTTP_REFERER:void 0,HTTP_COOKIE:void 0}
"undefined"!=typeof navigator&&navigator.userAgent&&(o.HTTP_USER_AGENT=navigator.userAgent),"undefined"!=typeof document&&document.referrer.match(/\S/)&&(o.HTTP_REFERER=document.referrer),(t="string"==typeof e.cookies?(0,l.decodeCookie)(e.cookies):e.cookies)&&(o.HTTP_COOKIE=(0,l.encodeCookie)(b(t,this.config.filters)))
var r=n.prototype.__buildPayload.call(this,e)
return r.request.cgi_data=y(o,r.request.cgi_data),r},r.prototype.__wrap=function(e,t){void 0===t&&(t={})
var n=e
t||(t={})
try{if("function"!=typeof n)return n
if(!v(n))return n
if(!n.___hb){var o=this
n.___hb=function(){if(!l.preferCatch)return n.apply(this,arguments)
try{return n.apply(this,arguments)}catch(e){if(o.__lastWrapErr===e)throw e
throw o.__lastWrapErr=e,(0,f.ignoreNextOnError)(),o.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),o.config.enableUncaught&&o.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},r.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},r.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},r}(u.Client),x={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.9.1"},S=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(x.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(x.version,"; n/a; n/a")},$=new j({__plugins:[(0,f.onError)(),(0,d.default)(),(0,g.default)(),(0,m.default)(),(0,p.default)(),u.Plugins.events()]})
$.setNotifier(x)
var L=r
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return L.Types}}),t.default=$}(o)
var Ve=t(o)
return Ve}()
var C=P(O.exports)
const T=["attackplayer.min.js","dynamically imported module","fs.min.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","play method is not allowed","world.min.js","openuserjs.org"],N=e=>T.some((t=>e.includes(t)))
function A(e){if(N(e.stack))return!1}function M(){!function(){C.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.123"})
const e=l()
e&&C.setContext({user_id:e}),C.beforeNotify(A)}()}function B(...e){console.log(...e)}function H(e,t,n,o){e instanceof EventTarget&&e.addEventListener(t,n,o)}function R(e){return null===e}const D=`${document.location.protocol}//${document.location.host}/`,I=window.HCS?.defines?.cdn,U=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],G=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],F=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,W=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,Q=/guild_id=(?<guildId>\d+)/,J=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,z=/player_id=(?<playerId>\d+)/,K=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,X=/VL:.+?(?<vl>\d+)/,V=.2,Y="joinallgroupsundersize",Z="index.php",ee="?cmd=",te=`${Z}${ee}`,ne="&subcmd=",oe="&target_username=",re=`${te}auctionhouse`,ae=`${re}&search=`,ie=`${te}log`,se=`${te}ignore${ne}add&ignore_username=`,ce=`${te}profile`,ue=`${ce}&player_id=`,le=`${ce}${ne}dropitems`,fe=`${te}trade&target_player=`,de=`${te}trade${ne}createsecure${oe}`,pe=`${te}arena${ne}`,ge=`${Z}${`${ee}notepad&blank=1${ne}`}`,me=`${ge}auctionsearch`,he=`${te}points`,ye=`${te}guild${ne}`,be=`${ye}log`,ve=`${ye}scouttower`,we=`${ye}groups&subcmd2=`,_e=`${ye}inventory&subcmd2=report&user=`,ke=`${ye}view&guild_id=`,je=`${we}joinall`,xe=`${we}${Y}`,Se=`${te}world`,$e=`${te}findplayer`,Le=`${$e}&search_show_first=1&search_username=`,Ee=`${te}blacksmith`,Pe=`${te}quickbuff`,Oe=`${te}composing`,Ce=`${te}attackplayer${oe}`,Te=`${te}${ne}viewupdatearchive`,Ne=`${te}${ne}viewarchive`,Ae=`${te}bounty`,Me=`${te}inventing${ne}viewrecipe&recipe_id=`,Be=`https://guide.fallensword.com/${te}`,He="after-update.actionlist",Re="buffs.player",De="update.player",Ie="level.stats-player",Ue="gold.stats-player",Ge="prompt.worldDialogShop",qe="keydown.controls",Fe="update.realm",We="-success.action-response",Qe=`-1${We}`,Je=`1${We}`,ze=`2${We}`,Ke=`9${We}`,Xe=`5${We}`,Ve=`25${We}`,Ye=1,Ze=2,et=16,tt=128,nt=256,ot="needToCompose",rt="lastComposeCheck",at="characterVirtualLevel",it="enableGuildActivityTracker",st="lastLadderReset",ct="form",ut="table",lt="td",ft="tr",dt="fsh_buffLog",pt="statbar-level-tooltip-general",gt="stat-level",mt="stat-defense",ht="stat-attack",yt="stat-damage",bt="stat-armor",vt="stat-hp",wt="stat-vl",_t="GM_",kt=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],jt=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],xt=`${I}ui/world/action_spinner.gif`,St=".fa-envelope",$t='a[href*="&player_id="]',Lt=.002,Et=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],Pt='input[name="blockedSkillList[]"]'
var Ot={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1}
const Ct=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function Tt(t,n){const o=window.localStorage.getItem(_t+t)
return R(o)||e(o)?n:function(e){const t=Ct.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(o)}function Nt(e){return Tt(e,Ot[e])}function At(e){Nt("betaOptIn")&&B("sendException",e),C.notify(e)}function Mt(e,t){return e||t}const Bt=[null]
function Ht(e,t){return Bt[e]&&Bt[e].priority<Bt[t].priority}function Rt(e,t){const n=Bt[e]
Bt[e]=Bt[t],Bt[t]=n}function Dt(e,t){return e?2*t:2*t+1}function It(){if(1===Bt.length)return
const e=Bt[1].data,t=Bt.pop()
return Bt.length>1&&(Bt[1]=t,function(e){let t=e
for(;2*t<Bt.length;){const e=Dt(!Ht(2*t+1,2*t),t)
if(Ht(t,e))break
Rt(t,e),t=e}}(1)),e}function Ut(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Ht(t,e))break
Rt(t,e),t=e}}(Bt.push({data:e,priority:t})-1)}let Gt=!0
const qt="fshMessage"
let Ft=0
function Wt(){Bt.length-1==0?Gt=!0:(Gt=!1,window.postMessage(qt,window.location.origin))}function Qt(){const t=It()
var n
k(t)?t():e(n=t)||At(`pop() was not a function (${typeof n})`)}function Jt(e){const t=e.data
e.origin===window.location.origin&&t===qt&&function(){try{Qt()}catch(e){C.notify(e)}finally{Wt()}}()}function zt(e,t,n,o){if(k(t)){Ft||(H(window,"message",Jt),Ft=!0)
const r=Mt(o,window),a=Mt(n,[])
Ut(t.bind(r,...a),e),Gt&&Wt()}}function Kt(e,t){return new URLSearchParams(e).get(t)}function Xt(e){return Kt(decodeURIComponent(window.location.search),e)}function Vt(){}const Yt=e=>e
function Zt(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}function en(e){return e()}function tn(){return Object.create(null)}function nn(e){e.forEach(en)}function on(e){return"function"==typeof e}function rn(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let an
function sn(e,t){return e===t||(an||(an=document.createElement("a")),an.href=t,e===an.href)}function cn(e,...t){if(null==e){for(const e of t)e(void 0)
return Vt}const n=e.subscribe(...t)
return n.unsubscribe?()=>n.unsubscribe():n}function un(e){let t
return cn(e,(e=>t=e))(),t}function ln(e,t,n){e.$$.on_destroy.push(cn(t,n))}function fn(e,t,n,o){if(e){const r=dn(e,t,n,o)
return e[0](r)}}function dn(e,t,n,o){return e[1]&&o?function(e,t){for(const n in t)e[n]=t[n]
return e}(n.ctx.slice(),e[1](o(t))):n.ctx}function pn(e,t,n,o){if(e[2]&&o){const r=e[2](o(n))
if(void 0===t.dirty)return r
if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length)
for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o]
return e}return t.dirty|r}return t.dirty}function gn(e,t,n,o,r,a){if(r){const i=dn(t,n,o,a)
e.p(i,r)}}function mn(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32
for(let e=0;e<n;e++)t[e]=-1
return t}return-1}function hn(e){const t={}
for(const n in e)t[n]=!0
return t}function yn(e){let t=!1
return function(...n){t||(t=!0,e.call(this,...n))}}function bn(e){return null==e?"":e}function vn(e){return e&&on(e.destroy)?e.destroy:Vt}function wn(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const _n="undefined"!=typeof window
let kn=_n?()=>window.performance.now():()=>Date.now(),jn=_n?e=>requestAnimationFrame(e):Vt
const xn=new Set
function Sn(e){xn.forEach((t=>{t.c(e)||(xn.delete(t),t.f())})),0!==xn.size&&jn(Sn)}function $n(e,t){e.appendChild(t)}function Ln(e){if(!e)return document
const t=e.getRootNode?e.getRootNode():e.ownerDocument
return t&&t.host?t:e.ownerDocument}function En(e){const t=Tn("style")
return t.textContent="/* empty */",function(e,t){$n(e.head||e,t),t.sheet}(Ln(e),t),t.sheet}function Pn(e,t,n){e.insertBefore(t,n||null)}function On(e){e.parentNode&&e.parentNode.removeChild(e)}function Cn(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function Tn(e){return document.createElement(e)}function Nn(e){return document.createTextNode(e)}function An(){return Nn(" ")}function Mn(){return Nn("")}function Bn(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function Hn(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Rn(e){return function(t){t.target===this&&e.call(this,t)}}function Dn(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function In(e,t,n){const o=t.toLowerCase()
o in e?e[o]="boolean"==typeof e[o]&&""===n||n:t in e?e[t]="boolean"==typeof e[t]&&""===n||n:Dn(e,t,n)}function Un(e){let t
return{p(...n){t=n,t.forEach((t=>e.push(t)))},r(){t.forEach((t=>e.splice(e.indexOf(t),1)))}}}function Gn(e){return""===e?null:+e}function qn(e,t){t=""+t,e.data!==t&&(e.data=t)}function Fn(e,t){e.value=null==t?"":t}function Wn(e,t,n,o){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function Qn(e,t,n){for(let n=0;n<e.options.length;n+=1){const o=e.options[n]
if(o.__value===t)return void(o.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function Jn(e){const t=e.querySelector(":checked")
return t&&t.__value}let zn
function Kn(){if(void 0===zn){zn=!1
try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){zn=!0}}return zn}function Xn(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative")
const n=Tn("iframe")
n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1
const o=Kn()
let r
return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=Bn(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=Bn(n.contentWindow,"resize",t),t()}),$n(e,n),()=>{(o||r&&n.contentWindow)&&r(),On(n)}}function Vn(e,t,n){e.classList.toggle(t,!!n)}function Yn(e,t,{bubbles:n=!1,cancelable:o=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:o})}function Zn(e,t){return new e(t)}const eo=new Map
let to,no=0
function oo(e,t,n,o,r,a,i,s=0){const c=16.666/o
let u="{\n"
for(let e=0;e<=1;e+=c){const o=t+(n-t)*a(e)
u+=100*e+`%{${i(o,1-o)}}\n`}const l=u+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(e){let t=5381,n=e.length
for(;n--;)t=(t<<5)-t^e.charCodeAt(n)
return t>>>0}(l)}_${s}`,d=Ln(e),{stylesheet:p,rules:g}=eo.get(d)||function(e,t){const n={stylesheet:En(t),rules:{}}
return eo.set(e,n),n}(d,e)
g[f]||(g[f]=!0,p.insertRule(`@keyframes ${f} ${l}`,p.cssRules.length))
const m=e.style.animation||""
return e.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,no+=1,f}function ro(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-o.length
r&&(e.style.animation=o.join(", "),no-=r,no||jn((()=>{no||(eo.forEach((e=>{const{ownerNode:t}=e.stylesheet
t&&On(t)})),eo.clear())})))}function ao(e){to=e}function io(){if(!to)throw new Error("Function called outside component initialization")
return to}function so(e){io().$$.on_mount.push(e)}function co(e){io().$$.after_update.push(e)}function uo(e){io().$$.on_destroy.push(e)}function lo(){const e=io()
return(t,n,{cancelable:o=!1}={})=>{const r=e.$$.callbacks[t]
if(r){const a=Yn(t,n,{cancelable:o})
return r.slice().forEach((t=>{t.call(e,a)})),!a.defaultPrevented}return!0}}function fo(e,t){const n=e.$$.callbacks[t.type]
n&&n.slice().forEach((e=>e.call(this,t)))}const po=[],go=[]
let mo=[]
const ho=[],yo=Promise.resolve()
let bo=!1
function vo(){bo||(bo=!0,yo.then($o))}function wo(){return vo(),yo}function _o(e){mo.push(e)}function ko(e){ho.push(e)}const jo=new Set
let xo,So=0
function $o(){if(0!==So)return
const e=to
do{try{for(;So<po.length;){const e=po[So]
So++,ao(e),Lo(e.$$)}}catch(e){throw po.length=0,So=0,e}for(ao(null),po.length=0,So=0;go.length;)go.pop()()
for(let e=0;e<mo.length;e+=1){const t=mo[e]
jo.has(t)||(jo.add(t),t())}mo.length=0}while(po.length)
for(;ho.length;)ho.pop()()
bo=!1,jo.clear(),ao(e)}function Lo(e){if(null!==e.fragment){e.update(),nn(e.before_update)
const t=e.dirty
e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_o)}}function Eo(e,t,n){e.dispatchEvent(Yn(`${t?"intro":"outro"}${n}`))}const Po=new Set
let Oo
function Co(){Oo={r:0,c:[],p:Oo}}function To(){Oo.r||nn(Oo.c),Oo=Oo.p}function No(e,t){e&&e.i&&(Po.delete(e),e.i(t))}function Ao(e,t,n,o){if(e&&e.o){if(Po.has(e))return
Po.add(e),Oo.c.push((()=>{Po.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}else o&&o()}const Mo={duration:0}
function Bo(e,t,n,o){let r,a=t(e,n,{direction:"both"}),i=o?0:1,s=null,c=null,u=null
function l(){u&&ro(e,u)}function f(e,t){const n=e.b-i
return t*=Math.abs(n),{a:i,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function d(t){const{delay:n=0,duration:o=300,easing:d=Yt,tick:p=Vt,css:g}=a||Mo,m={start:kn()+n,b:t}
t||(m.group=Oo,Oo.r+=1),"inert"in e&&(t?void 0!==r&&(e.inert=r):(r=e.inert,e.inert=!0)),s||c?c=m:(g&&(l(),u=oo(e,i,t,o,n,d,g)),t&&p(0,1),s=f(m,o),_o((()=>Eo(e,t,"start"))),function(e){let t
0===xn.size&&jn(Sn),new Promise((n=>{xn.add(t={c:e,f:n})}))}((t=>{if(c&&t>c.start&&(s=f(c,o),c=null,Eo(e,s.b,"start"),g&&(l(),u=oo(e,i,s.b,s.duration,0,d,a.css))),s)if(t>=s.end)p(i=s.b,1-i),Eo(e,s.b,"end"),c||(s.b?l():--s.group.r||nn(s.group.c)),s=null
else if(t>=s.start){const e=t-s.start
i=s.a+s.d*d(e/s.duration),p(i,1-i)}return!(!s&&!c)})))}return{run(e){on(a)?(xo||(xo=Promise.resolve(),xo.then((()=>{xo=null}))),xo).then((()=>{a=a({direction:e?"in":"out"}),d(e)})):d(e)},end(){l(),s=c=null}}}function Ho(e){return void 0!==e?.length?e:Array.from(e)}function Ro(e,t){e.d(1),t.delete(e.key)}function Do(e,t){Ao(e,1,1,(()=>{t.delete(e.key)}))}function Io(e,t,n,o,r,a,i,s,c,u,l,f){let d=e.length,p=a.length,g=d
const m={}
for(;g--;)m[e[g].key]=g
const h=[],y=new Map,b=new Map,v=[]
for(g=p;g--;){const e=f(r,a,g),o=n(e)
let s=i.get(o)
s?v.push((()=>s.p(e,t))):(s=u(o,e),s.c()),y.set(o,h[g]=s),o in m&&b.set(o,Math.abs(g-m[o]))}const w=new Set,_=new Set
function k(e){No(e,1),e.m(s,l),i.set(e.key,e),l=e.first,p--}for(;d&&p;){const t=h[p-1],n=e[d-1],o=t.key,r=n.key
t===n?(l=t.first,d--,p--):y.has(r)?!i.has(o)||w.has(o)?k(t):_.has(r)?d--:b.get(o)>b.get(r)?(_.add(o),k(t)):(w.add(r),d--):(c(n,i),d--)}for(;d--;){const t=e[d]
y.has(t.key)||c(t,i)}for(;p;)k(h[p-1])
return nn(v),h}function Uo(e,t,n){const o=e.$$.props[t]
void 0!==o&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function Go(e){e&&e.c()}function qo(e,t,n){const{fragment:o,after_update:r}=e.$$
o&&o.m(t,n),_o((()=>{const t=e.$$.on_mount.map(en).filter(on)
e.$$.on_destroy?e.$$.on_destroy.push(...t):nn(t),e.$$.on_mount=[]})),r.forEach(_o)}function Fo(e,t){const n=e.$$
null!==n.fragment&&(!function(e){const t=[],n=[]
mo.forEach((o=>-1===e.indexOf(o)?t.push(o):n.push(o))),n.forEach((e=>e())),mo=t}(n.after_update),nn(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Wo(e,t,n,o,r,a,i=null,s=[-1]){const c=to
ao(e)
const u=e.$$={fragment:null,ctx:[],props:a,update:Vt,not_equal:r,bound:tn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:tn(),dirty:s,skip_bound:!1,root:t.target||c.$$.root}
i&&i(u.root)
let l=!1
if(u.ctx=n?n(e,t.props||{},((t,n,...o)=>{const a=o.length?o[0]:n
return u.ctx&&r(u.ctx[t],u.ctx[t]=a)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](a),l&&function(e,t){-1===e.$$.dirty[0]&&(po.push(e),vo(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],u.update(),l=!0,nn(u.before_update),u.fragment=!!o&&o(u.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target)
u.fragment&&u.fragment.l(e),e.forEach(On)}else u.fragment&&u.fragment.c()
t.intro&&No(e.$$.fragment),qo(e,t.target,t.anchor),$o()}ao(c)}class Qo{$$=void 0
$$set=void 0
$destroy(){Fo(this,1),this.$destroy=Vt}$on(e,t){if(!on(t))return Vt
const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[])
return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t
this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Jo=[]
function zo(e,t=Vt){let n
const o=new Set
function r(t){if(rn(e,t)&&(e=t,n)){const t=!Jo.length
for(const t of o)t[1](),Jo.push(t,e)
if(t){for(let e=0;e<Jo.length;e+=2)Jo[e][0](Jo[e+1])
Jo.length=0}}}function a(t){r(t(e))}return{set:r,update:a,subscribe:function(i,s=Vt){const c=[i,s]
return o.add(c),1===o.size&&(n=t(r,a)||Vt),i(e),()=>{o.delete(c),0===o.size&&n&&(n(),n=null)}}}}function Ko(e,t,n){const o=!Array.isArray(e),r=o?[e]:e
if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const a=t.length<2
return function(e,t){return{subscribe:zo(e,t).subscribe}}(n,((e,n)=>{let i=!1
const s=[]
let c=0,u=Vt
const l=()=>{if(c)return
u()
const r=t(o?s[0]:s,e,n)
a?e(r):u=on(r)?r:Vt},f=r.map(((e,t)=>cn(e,(e=>{s[t]=e,c&=~(1<<t),i&&l()}),(()=>{c|=1<<t}))))
return i=!0,l(),function(){nn(f),u(),i=!1}}))}const Xo=zo("")
function Vo(e){const t=e-1
return t*t*t+1}function Yo(e,{delay:t=0,duration:n=400,easing:o=Yt}={}){const r=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:o,css:e=>"opacity: "+e*r}}function Zo(e,{delay:t=0,duration:n=400,easing:o=Vo,x:r=0,y:a=0,opacity:i=0}={}){const s=getComputedStyle(e),c=+s.opacity,u="none"===s.transform?"":s.transform,l=c*(1-i),[f,d]=wn(r),[p,g]=wn(a)
return{delay:t,duration:n,easing:o,css:(e,t)=>`\n\t\t\ttransform: ${u} translate(${(1-e)*f}${d}, ${(1-e)*p}${g});\n\t\t\topacity: ${c-l*t}`}}function er(e,{delay:t=0,duration:n=400,easing:o=Vo,axis:r="y"}={}){const a=getComputedStyle(e),i=+a.opacity,s="y"===r?"height":"width",c=parseFloat(a[s]),u="y"===r?["top","bottom"]:["left","right"],l=u.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),f=parseFloat(a[`padding${l[0]}`]),d=parseFloat(a[`padding${l[1]}`]),p=parseFloat(a[`margin${l[0]}`]),g=parseFloat(a[`margin${l[1]}`]),m=parseFloat(a[`border${l[0]}Width`]),h=parseFloat(a[`border${l[1]}Width`])
return{delay:t,duration:n,easing:o,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*i};${s}: ${e*c}px;padding-${u[0]}: ${e*f}px;padding-${u[1]}: ${e*d}px;margin-${u[0]}: ${e*p}px;margin-${u[1]}: ${e*g}px;border-${u[0]}-width: ${e*m}px;border-${u[1]}-width: ${e*h}px;`}}function tr(e){let t,n,o,r,a,i,s
return{c(){t=Tn("div"),n=Tn("p"),o=Nn(e[0]),Dn(n,"class","svelte-zbl6pg"),Dn(t,"role","alert"),Dn(t,"class","svelte-zbl6pg"),Wn(t,"transform",e[2])},m(r,c){Pn(r,t,c),$n(t,n),$n(n,o),a=!0,i||(s=Bn(t,"click",e[4]),i=!0)},p(e,n){(!a||1&n)&&qn(o,e[0]),4&n&&Wn(t,"transform",e[2])},i(e){a||(e&&_o((()=>{a&&(r||(r=Bo(t,Zo,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1))})),a=!0)},o(e){e&&(r||(r=Bo(t,Zo,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0)),a=!1},d(e){e&&On(t),e&&r&&r.end(),i=!1,s()}}}function nr(e){let t,n=e[1]&&tr(e)
return{c(){n&&n.c(),t=Mn()},m(e,o){n&&n.m(e,o),Pn(e,t,o)},p(e,[o]){e[1]?n?(n.p(e,o),2&o&&No(n,1)):(n=tr(e),n.c(),No(n,1),n.m(t.parentNode,t)):n&&(Co(),Ao(n,1,1,(()=>{n=null})),To())},i(e){No(n)},o(e){Ao(n)},d(e){e&&On(t),n&&n.d(e)}}}function or(e,t,n){let o
ln(e,Xo,(e=>n(0,o=e)))
let{ms:r=3e3}=t,a=!1,i=0,s=""
const c=(e,t)=>{clearTimeout(i),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
n(2,s=`translate(${t}px, ${e.offsetTop}px)`),n(1,a=!0)}(),t>0&&(i=setTimeout((()=>{var e
n(1,a=!1),o="",e=o,Xo.set(e)}),t))):n(1,a=!1)}
uo((()=>clearTimeout(i)))
return e.$$set=e=>{"ms"in e&&n(3,r=e.ms)},e.$$.update=()=>{9&e.$$.dirty&&c(o,r)},[o,a,s,r,()=>{n(1,a=!1)}]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class rr extends Qo{constructor(e){super(),Wo(this,e,or,nr,rn,{ms:3})}}let ar
function ir(e){e&&(!function(){if(!ar)ar=!0,new rr({target:document.body})}(),Xo.set(e))}function sr(e,t){return Array.from(e,t)}function cr(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function ur(e,t){return sr(cr(e,t))}function lr(e){return"string"==typeof e}function fr(e){return e.trim()}function dr(e){const t=o(e)
if(lr(t))return fr(t)}function pr(e,t){return dr(t).includes(e)}function gr(e,...t){return(...n)=>e(...t,...n)}let mr,hr,yr,br,vr,wr,_r=0,kr=0,jr=0
function xr(){return _r||(_r=n("pCL")),_r}function Sr(){return kr||(kr=n("pCC")),kr}function $r(){const e=ur("a",xr()).filter(function(e){return gr(pr,e)}("message"))
e.length&&async function(){const e=new Audio(Nt("defaultMessageSound"))
try{await e.play()}catch(e){ir("Message Sound Not Allowed")}}()}function Lr(e){return"boolean"==typeof e}function Er(e,t,n,o){var r
H(e,t,n,{once:!0,...(r=o,Lr(r)?{capture:r}:r)})}function Pr(e){hr=e.clientX,yr=e.clientY}function Or(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(mr,null).transform)
br=e[0]-hr,vr=e[1]-yr}function Cr(e){e.clientX===hr&&e.clientY===yr||(mr.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+br).toString()}, ${(e.clientY+vr).toString()})`,Pr(e))}function Tr(e){return function(e){const t=performance.now()
t-wr>16&&(Cr(e),wr=t)}(e),e.preventDefault(),!1}function Nr(e){return Cr(e),function(e,t,n,o){e instanceof EventTarget&&e.removeEventListener(t,n,o)}(document.body,"dragover",Tr),e.preventDefault(),!1}function Ar(e,t){!function(e,t){mr=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),Pr(t),Or(),wr=0,t.dataTransfer.setData("text/plain",""),H(document.body,"dragover",Tr),Er(document.body,"drop",Nr)}function Mr(e,t){e.draggable=!0,H(e,"dragstart",gr(Ar,t))}function Br(){return k(window.jQuery)}function Hr(e,t,n){y()||ga("fshApp.send","event",e,t,n)}function Rr(e){return Object.entries(e)}function Dr(e,t,[n,o]){j(o)&&null!==o?e(t[n],o):t[n]=o}function Ir(e,t){Rr(t).forEach(gr(Dr,Ir,e))}function Ur(e,t){const n=document.createElement(e)
return t&&Ir(n,t),n}function Gr(e){return Ur("div",e)}function qr(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Fr(e,t){return sr(qr(e,t))}function Wr(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Qr(e,t){t instanceof Element&&(t.innerHTML=String(e))}function Jr(e){let t=n("content")
t?Qr("",t):(t=Gr({id:"content",style:{display:"none"}}),Wr(document.body,t)),$(t).dialog({width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}),Fr("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(t)}async function zr(e){(await e).default()}function Kr(){zr(import("./buffLog-Dw6Q8MX6.js"))}function Xr(){zr(import("./combatLog-BL1Pxw5s.js"))}function Vr(){zr(import("./creatureLog-DC_SMR3b.js"))}function Yr(){zr(import("./fsboxlog-BSx5sVba.js"))}function Zr(){zr(import("./guildLog-BWkUE6ea.js"))}function ea(){zr(import("./guildTracker-bNpaZsWi.js"))}async function ta(e){(await import("./injectAuctionSearch-DzNzVj2n.js")).default(e)}async function na(e){(await import("./findBuffs-DobyZvF1.js")).injectFindBuffs(e)}async function oa(e){(await import("./findBuffs-DobyZvF1.js")).injectFindOther(e)}async function ra(e){(await import("./injectOnlinePlayers-CjyNhMsy.js")).default(e)}function aa(){zr(import("./potReport-CTjpJLam.js"))}function ia(){zr(import("./quickExtract-Bbfz3S98.js"))}function sa(){zr(import("./quickLinksManager-DgR8GXkQ.js"))}async function ca(e){(await import("./quickWear-CSTpjvxC.js")).default(e)}function ua(){zr(import("./recipeMgr-enZBvw38.js"))}function la(){zr(import("./reliclist-j-wb46dh.js"))}function fa(){zr(import("./superelite-D56oYJ04.js"))}function da(e){return new Promise((t=>{setTimeout(t,e)}))}function pa(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class ma extends Error{constructor([e,t,n,o],...r){super(function(e,t,n,o){const r=`${t.status} ${t.statusText} - `
if(t.statusText===o.toString())return r+pa(e)
const a=`${r+n} ${o} - ${pa(e)}`
return"parsererror"===n?`${a} - ${t.responseText}`:a}(e,t,n,o),...r),Error.captureStackTrace&&Error.captureStackTrace(this,ma),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=o}}function ha(e){H(window,"beforeunload",(()=>e.abort()))}const ya=900
let ba=0
const va=5
let wa=0
async function _a(){wa<va-$.active&&performance.now()-ba>=ya?(wa=va-$.active,ba=performance.now()):await da(100)}async function ka(e,t=10){await async function(){for(;wa<1;)await _a()
wa-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=ha,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return ka(e,t-1)
!function(e,t){if(0!==t.status)throw new ma([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function ja(e){return Ir(e,{url:Z,data:{no_mobile:1}}),ka(e)}async function xa(e){return x(await ja({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function Sa(e){return xa({cmd:"export",...e})}function $a(){return Sa({inc_tagged:"1",subcmd:"guild_store"})}let La,Ea=0
function Pa(e){const t=a(/\sguildId: (?<id>\d{1,6}),/,o(e))
t&&(Ea=Number(t))}function Oa(){return Ea||ur("script",document.body).forEach(Pa),Ea}function Ca(e){return Ur("a",e)}function Ta(e){e instanceof Element&&e.click()}function Na(e,t){const n=URL.createObjectURL(e),o=Ca({download:t,href:n,style:{display:"none"}})
Wr(document.body,o),Ta(o),document.body.removeChild(o),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function Aa(e,t){return x(await ka({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function Ma(e){return Aa(e,{method:"POST"})}function Ba(e,t){const n=[]
for(let o=0;o<t.length;o+=e)n.push(t.slice(o,o+e))
return n}function Ha(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function Ra(){return La||(La=function(e,t){const n=indexedDB.open(e)
n.onupgradeneeded=()=>n.result.createObjectStore(t)
const o=Ha(n)
return(e,n)=>o.then((o=>n(o.transaction(t,e).objectStore(t))))}("keyval-store","keyval")),La}const Da=e=>{e&&"NotFoundError"!==e.name&&C.notify(e)}
async function Ia(e,t){try{return await function(e,t=Ra()){return t("readonly",(t=>Ha(t.get(e))))}(e,t)}catch(e){Da(e)}}async function Ua(e,t,n){try{return await function(e,t,n=Ra()){return n("readwrite",(n=>(n.put(t,e),Ha(n.transaction))))}(e,t,n)}catch(e){Da(e)}}const Ga=({folder_id:e})=>-2!==(e??-2),qa=({folder_id:e})=>-2===e,Fa=({player_id:e})=>-1!==(e??-1),Wa=({player_id:e})=>e,Qa=({player_id:e})=>-1===e,Ja=([e,t,n])=>Ba(20,e).map((e=>[e,t,n])),za=e=>({inv_id:t})=>t===e.inv_id,Ka=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,Xa=(e,t)=>({...t,armor:Ka(e,2),attack:Ka(e,0),damage:Ka(e,4),defense:Ka(e,1),hp:Ka(e,3),set_name:e.set_name??""}),Va=(e,t)=>t.forge||t.stats?.set_name,Ya=e=>e?.s?e.r.items:[],Za=e=>[[e.filter(Ga),s,0],[e.filter(qa),s,1],[e.filter(Fa),Wa,7],[e.filter(Qa),s,4]].flatMap(Ja)
function ei(e){return function(){const t=this.data(),n=e.find(za(t))
n?.attributes&&(t.stats=Xa(n,t.stats),this.invalidate())}}const ti=async()=>await Ia(`fsh_${f.subcmd}_cache`)??[],ni=e=>Ua(`fsh_${f.subcmd}_cache`,e),oi=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function ri(e,t,n){const o=await(r={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},Ma({cmd:"fetchitem",compare:0,...r}))
var r
return o?.s&&(o.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,o.r.items),await async function(e){const t=(await ti()).filter(oi(e))
await ni(t.concat(e))}(o.r.items)),o}const ai=(e,t)=>{return t.filter((n=sr(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function ii(e){const t=e.rows(Va),n=await async function(e){const t=await ti(),n=ai(e,t)
return await ni(n),n}(t)
t.every(ei(n))}async function si(e){const t=new DataTable(e)
await ii(t),t.draw()}const ci=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],ui=e=>{return[...ci(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function li(e){return()=>Jr(e)}var fi=[{section:"Character",menu:[{label:"Buff Log",fn:Kr},{label:"Combat Log",fn:Xr},{label:"Creature Log",fn:Vr},{label:"Recipe Manager",fn:ua},{label:"Quick Links",fn:sa},{label:"Inventory Manager",href:`${ge}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:li(na)},{label:"Find Other",fn:li(oa)},{label:"Online Players",fn:li(ra)},{label:"AH Quick Search",fn:li(ta)}]},{section:"Guild",menu:[{label:"Guild Inventory",href:`${ge}guildinvmgr`},{label:"New Guild Log",fn:Zr},{label:"Merc Hunter",fn:function(){zr(import("./mercs-UbdCcAU7.js"))}},{label:"Pot Report",fn:aa},{label:"Guild Tracker",fn:ea}]},{section:"Extra",menu:[{label:"Quick Extract",fn:ia},{label:"Quick Wear",fn:li(ca)},{label:"FS Box Log",fn:Yr},{label:"SE Tracker",fn:fa}]},{section:"Beta Features",menu:[{label:"Relic List",fn:la,beta:!0},{label:"GS Export",fn:async function(){if(!Oa())return
const e=await $a(),t=await Ia("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:Ka(n,2),attack:Ka(n,0),damage:Ka(n,4),defense:Ka(n,1),hp:Ka(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:Ka(n.set_bonuses,2)},...n.set_name&&{set_attack:Ka(n.set_bonuses,0)},...n.set_name&&{set_damage:Ka(n.set_bonuses,4)},...n.set_name&&{set_defense:Ka(n.set_bonuses,1)},...n.set_name&&{set_hp:Ka(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var o
Na((o=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(ui).join("\n"))(n)}\n`,new Blob([o],{type:"text/csv"})),"gs_export.csv")},beta:!0}]},{section:"Dev Links",menu:[{label:"Combat Set Manager",fn:function(){zr(import("./setmgr-CAYoS3j4.js"))},beta:!0},{label:"Quest Book",fn:function(){zr(import("./questbook-g39sjO2g.js"))}},{label:"New Quick Wear",fn:function(){zr(import("./quickwear-aVQgdHhz.js"))}}]},{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}]
function di(e,t,n){const o=e.slice()
return o[7]=t[n],o}function pi(e,t,n){const o=e.slice()
return o[10]=t[n],o}function gi(e){let t,n,o,r,a
function i(){return e[5](e[10])}return{c(){t=Tn("button"),t.textContent="PM",n=An(),o=Tn("a"),o.textContent=`${e[10].playerName}`,Dn(t,"type","button"),Dn(t,"class","helperDevBtn svelte-1f5kv75"),Dn(o,"href",ue+"menuItem.playerId"),Dn(o,"class","svelte-1f5kv75")},m(e,s){Pn(e,t,s),Pn(e,n,s),Pn(e,o,s),r||(a=Bn(t,"click",i),r=!0)},p(t,n){e=t},d(e){e&&(On(t),On(n),On(o)),r=!1,a()}}}function mi(e){let t,n,o
function r(){return e[4](e[10])}return{c(){t=Tn("a"),t.textContent=`${e[10].label}`,Dn(t,"href",e[10].href),Dn(t,"class","svelte-1f5kv75")},m(e,a){Pn(e,t,a),n||(o=Bn(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&On(t),n=!1,o()}}}function hi(e){let t,n,o
function r(){return e[3](e[10])}return{c(){t=Tn("button"),t.textContent=`${e[10].label}`,Dn(t,"type","button"),Dn(t,"class","svelte-1f5kv75")},m(e,a){Pn(e,t,a),n||(o=Bn(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&On(t),n=!1,o()}}}function yi(e){let t,n
let o=function(e,t){return e[10].fn?hi:e[10].href?mi:e[10].playerName?gi:void 0}(e),r=o&&o(e),a=e[10].beta&&function(e){let t
return{c(){t=Tn("sup"),t.textContent="beta",Dn(t,"class","fshRed")},m(e,n){Pn(e,t,n)},d(e){e&&On(t)}}}()
return{c(){t=Tn("li"),r&&r.c(),n=An(),a&&a.c()},m(e,o){Pn(e,t,o),r&&r.m(t,null),$n(t,n),a&&a.m(t,null)},p(e,t){r&&r.p(e,t)},d(e){e&&On(t),r&&r.d(),a&&a.d()}}}function bi(e){let t,n,o,r,a=Ho(e[7].menu),i=[]
for(let t=0;t<a.length;t+=1)i[t]=yi(pi(e,a,t))
return{c(){t=Tn("h2"),t.textContent=`${e[7].section}`,n=An(),o=Tn("ul")
for(let e=0;e<i.length;e+=1)i[e].c()
r=An(),Dn(t,"class","svelte-1f5kv75")},m(e,a){Pn(e,t,a),Pn(e,n,a),Pn(e,o,a)
for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(o,null)
$n(o,r)},p(e,t){if(7&t){let n
for(a=Ho(e[7].menu),n=0;n<a.length;n+=1){const s=pi(e,a,n)
i[n]?i[n].p(s,t):(i[n]=yi(s),i[n].c(),i[n].m(o,r))}for(;n<i.length;n+=1)i[n].d(1)
i.length=a.length}},d(e){e&&(On(t),On(n),On(o)),Cn(i,e)}}}function vi(e){let t,n=Ho(fi),o=[]
for(let t=0;t<n.length;t+=1)o[t]=bi(di(e,n,t))
return{c(){for(let e=0;e<o.length;e+=1)o[e].c()
t=Mn()},m(e,n){for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(e,n)
Pn(e,t,n)},p(e,[r]){if(7&r){let a
for(n=Ho(fi),a=0;a<n.length;a+=1){const i=di(e,n,a)
o[a]?o[a].p(i,r):(o[a]=bi(i),o[a].c(),o[a].m(t.parentNode,t))}for(;a<o.length;a+=1)o[a].d(1)
o.length=n.length}},i:Vt,o:Vt,d(e){e&&On(t),Cn(o,e)}}}function wi(e){const t=lo()
function n(e){Hr("helperMenu",e)}function o(e,o){k(o)&&(n(e),t("toggle"),o())}function r(e){t("toggle"),n("sendMsg"),openQuickMsgDialog(e)}return[n,o,r,e=>o(e.label,e.fn),e=>n(e.label),e=>r(e.playerName)]}class _i extends Qo{constructor(e){super(),Wo(this,e,wi,vi,rn,{})}}function ki(e){let t,n,o,r
return n=new _i({}),n.$on("toggle",e[5]),{c(){t=Tn("div"),Go(n.$$.fragment),Dn(t,"class","modal svelte-vem4gq")},m(e,o){Pn(e,t,o),qo(n,t,null),r=!0},p:Vt,i(e){r||(No(n.$$.fragment,e),e&&_o((()=>{r&&(o||(o=Bo(t,Yo,{duration:100},!0)),o.run(1))})),r=!0)},o(e){Ao(n.$$.fragment,e),e&&(o||(o=Bo(t,Yo,{duration:100},!1)),o.run(0)),r=!1},d(e){e&&On(t),Fo(n),e&&o&&o.end()}}}function ji(e){let t,n,o
return n=new _i({}),n.$on("toggle",e[5]),{c(){t=Tn("div"),Go(n.$$.fragment),Dn(t,"class","modal svelte-vem4gq")},m(e,r){Pn(e,t,r),qo(n,t,null),o=!0},p:Vt,i(e){o||(No(n.$$.fragment,e),o=!0)},o(e){Ao(n.$$.fragment,e),o=!1},d(e){e&&On(t),Fo(n)}}}function xi(e){let t,n,o,r,a,i,s,c
const u=[ji,ki],l=[]
function f(e,t){return e[1]&&e[4]?0:e[1]?1:-1}return~(r=f(e))&&(a=l[r]=u[r](e)),{c(){t=Tn("div"),n=Tn("button"),n.textContent="Helper Menu",o=An(),a&&a.c(),Dn(n,"type","button"),Dn(n,"class","toggle svelte-vem4gq"),Vn(n,"helper-menu-move",e[3]),Dn(t,"class","helper-menu svelte-vem4gq"),Vn(t,"helper-menu-fixed",e[2])},m(a,u){Pn(a,t,u),$n(t,n),$n(t,o),~r&&l[r].m(t,null),e[6](t),i=!0,s||(c=Bn(n,"click",e[5]),s=!0)},p(e,[n]){let o=r
r=f(e),r===o?~r&&l[r].p(e,n):(a&&(Co(),Ao(l[o],1,1,(()=>{l[o]=null})),To()),~r?(a=l[r],a?a.p(e,n):(a=l[r]=u[r](e),a.c()),No(a,1),a.m(t,null)):a=null)},i(e){i||(No(a),i=!0)},o(e){Ao(a),i=!1},d(n){n&&On(t),~r&&l[r].d(),e[6](null),s=!1,c()}}}function Si(e,t,o){const r=Nt("keepHelperMenuOnScreen"),a=Nt("draggableHelperMenu"),i=Br()&&n("worldPage")&&window.GameData
let s=0
so((()=>{a&&Mr(s)}))
let c=!1
return[s,c,r,a,i,function(){o(1,c=!c)},function(e){go[e?"unshift":"push"]((()=>{s=e,o(0,s)}))}]}class $i extends Qo{constructor(e){super(),Wo(this,e,Si,xi,rn,{})}}function Li(){const e=S(".mainbody")
e&&function(e,t){new $i({target:t.parentElement,props:{props:e}})}({},e)}function Ei(e){return(new DOMParser).parseFromString(e,"text/html")}function Pi(e){return ja({data:e})}async function Oi(e){const t=await Pi(e)
if(t)return Ei(t)}function Ci(e){const t=n("info-msg",e)
if(t){const e=t.innerHTML
return e?e.replace(/<br.*/,""):""}}function Ti(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(_t+e,t+n)}const Ni=[[lr,(e,t)=>{Ti(e,"S]",t)}],[function(e){return"number"==typeof e},(e,t)=>{t.toString().indexOf(".")<0&&Ti(e,"N]",t)}],[Lr,(e,t)=>{Ti(e,"B]",t)}]]
function Ai(e,t){const n=Ni.find((e=>e[0](t)))
n&&n[1](e,t)}let Mi=0
const Bi=()=>Mi
function Hi(){Mi=Nt("sendGoldonWorld")}async function Ri(){if(!Bi())return
Hr("NewMap","doSendGold")
const e=await Oi({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")})
e&&function(e){const t=Ci(e)
"You successfully sent gold!"!==t&&""!==t||(Ai("currentGoldSentTotal",parseInt(Nt("currentGoldSentTotal"),10)+parseInt(Nt("goldAmount"),10)),GameData.fetch(Ye))}(e)}function Di(e){window.location=e}function Ii(e){Nt("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function Ui(e){Hr("keyHandler",e)}function Gi(e){return e?.toLowerCase?.()}function qi(e,t){return Gi(e)<Gi(t)?-1:Gi(e)>Gi(t)?1:0}function Fi(e){return Aa(e,{method:"GET"})}function Wi(e){return Fi({cmd:"profile",...e})}async function Qi(){const e=await Wi({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>qi(e.name,t.name)))}:e}function Ji(e,t,...n){return e(...n)}function zi(){return Ji(Qi)}const Ki=[e=>e?.s,(e,t)=>e.r?.length>t]
async function Xi(e){const t=await zi()
if(((e,t)=>Ki.every((n=>n(t,e))))(e,t)){Ui("changeCombatSet")
const n=t.r[e].id
Ii("2"),Di(`${ce+ne}managecombatset&submit=Use&combatSetId=${n}`)}}function Vi(e,t){n("worldPage")||(Ui(e),Di(t))}function Yi(){f.enableMaxGroupSizeToJoin?Di(xe):Di(je)}function Zi(){Ui("logPage"),Ii("2"),Di(ie)}function es(e){const t=S(`#pCC input[value="${e}"]`)
t&&(Ui("movePage"),Ta(t))}const ts=[["!",Xi,0],["@",Xi,1],['"',Xi,1],["#",Xi,2],["£",Xi,2],["$",Xi,3],["%",Xi,4],["^",Xi,5],["&",Xi,6],["*",Xi,7],["(",Xi,8],["0",function(){Vi("toWorld",Se)}],["<",es,"<"],[">",es,">"],["G",function(){Ui("createGroup"),Ii("4"),Di(`${we}create`)}],["L",Zi],["b",function(){Ui("backpack"),Ii("2"),Di(le)}],["g",function(){Ui("gotoGuild"),Ii("4"),Di(`${ye}manage`)}],["j",function(){Ui("joinAllGroup"),Ii("4"),Yi()}],["l",Zi],["p",function(){Ui("profile"),Ii("2"),Di(ce)}],["r",function(){Vi("doRepair",`${Ee+ne}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in f&&!f.dialogIsClosed()||(Ui("insertQuickWear"),Jr(ca))}],["y",Ri]]
const ns=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function os(e){var t;(t=e,ns.some((e=>e(t))))||function(e){const t=ts.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function rs(){H(document,"keyup",os)}function as(e,t){return dr(t)===e}function is(e){return gr(as,e)}function ss(e,t,n){H(e,"click",t,n)}function cs(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function us(e,t){return sr(cs(e,t))}function ls(e){ss(e,(()=>{Hr("chrome","Game Help link")})),Qr(`<a href="${te}settings">Game Help</a>`,e)}function fs(){us("#pCR h3").filter(is("Game Help")).forEach(ls)}function ds(e){f[e]=Nt(e)}function ps(e,t){if(t instanceof Element)return t.closest(e)}function gs(e){e?.classList&&e.classList.add("fshHide")}function ms(e){const t=ps("a",e.target)
t?.getAttribute("href")===be&&(Hr("useNewGuildLog","Alter Href"),e.preventDefault(),Zr(),gs(n("notification-guild-log")))}function hs(e){e.forEach((e=>zt(3,e)))}function ys(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function bs(){return!Br()}var vs=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function ws(e){return function(e){return-1!==e&&0===S(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(Hr("accordion","collapse"),-1):e}const _s=(e,t,n)=>$(e).data(`${n}${t}`)
function ks(e,t,n){return new Promise((o=>{const r=_s(e,t,n)
r?o(r):function(e,t,n,o){$(e).on(`${Gi(t)}create`,(()=>{o(_s(e,t,n))}))}(e,t,n,o)}))}const js=[[e=>!j(e),()=>At("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>At("$('#nav').data('hcsNav').heights does not exist")]]
async function xs(){const e=n("nav"),t=await ks(e,"Nav","hcs")
return function(e){const t=js.find((([t])=>t(e)))
return!t||(t[1](),!1)}(t)?{theNav:e,myNav:t}:{}}function Ss(){!function(){const e=Nt("lastActiveQuestPage")
Nt("storeLastQuestPage")&&e.length>0&&(n("nav-character-questbook").href=e)}(),function(){const e=Nt("lastScavPage")
Nt("storeLastScavPage")&&e.length>0&&(n("nav-actions-artisanship-scavenging").href=e)}()}async function $s(){const{theNav:e,myNav:t}=await xs()
e&&t&&(Ss(),async function(e,t){const n=vs.map((e=>[e,Nt(e)]))
n.some((([,e])=>e))&&(await import("./injectItems-BL8BsVz8.js")).default(e,t,ys(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,ws(n))}}(t))}function Ls(e,t){return t?.classList?.contains(e)}function Es(e,t){t instanceof Node&&(t.textContent=String(e))}let Ps
function Os(){return Ps||(Ps=n("quickMessageDialog")),Ps}let Cs,Ts=0
function Ns(e){(function(){if(!Ts){const e=qr("validateTips",Os())
1===e.length&&([Ts]=e)}return Ts})()&&Es(Mt(e,""),Ts)}function As(){return Cs||(Cs=n("quickMsgDialog_msg"),Cs.maxLength=512),Cs}let Ms,Bs=null,Hs=0,Rs=0
function Ds(e){"Enter"!==e.key||e.shiftKey||(Hr("messaging","sendOnEnter"),e.preventDefault(),function(){if(!Rs){const e=$(Os()).dialog("option","buttons")
Rs=e["Send Message"]}return Rs}()())}function Is(){R(Bs)&&(Bs=Nt("enterForSendMessage")),Bs&&!Hs&&(H(As(),"keypress",Ds),Hs=!0)}function Us(e,t){return Ls(t[0],e)}function Gs(e,t,n){const{target:o}=n,r=t.find(gr(e,o))
if(r)return r[1](o)}function qs(e){return gr(Gs,Us,e)}function Fs(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function Ws(e,t){Fs(e,"beforeend",t)}function Qs(e,t){if("string"==typeof t){const e=r(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function Js(e){const t=Nt(e)
if(t)return x(t,Qs)}function zs(e,t,n){return JSON.stringify(e,t,n)}function Ks(e,t){Ai(e,zs(t))}let Xs=0,Vs=0,Ys=0
function Zs(e,t,n){const o=Vs.insertRow(e)
let r=o.insertCell(-1)
Ws(r,t),r=o.insertCell(-1),Ws(r,n)}function ec(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function tc(e,t){Zs(e,ec("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const nc=[["del-button",function(e){Hr("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
Vs.deleteRow(t),Xs.splice(t-2,1),Ks("quickMsg",Xs)}],["add-button",function(e){Hr("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){tc(e.parentNode.parentNode.rowIndex,n),t.value="",Xs.push(n),Ks("quickMsg",Xs)}}],["add-template",function(e){Hr("messaging","insertTemplate"),As().value+=`${o(e).replace(/\{playername\}/g,Ms)}`}]]
function oc(e){tc(-1,e)}function rc(){Nt("enableMessageTemplates")&&!Ys&&(ss((Vs||(Vs=Os().lastElementChild),Vs),qs(nc)),(Xs||(Xs=Js("quickMsg")),Xs).forEach(oc),Zs(-1,ec("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),Ys=!0)}function ac(e,t,o){const r=Os()
Ls("ui-dialog-content",r)&&(!function(e){Ms=e,Es(e,n("quickMsgDialog_targetUsername"))}(e),function(e){const t=As()
t.value=Mt(e,""),t.disabled=!1}(t),Ns(o),rc(),Is(),$(r).dialog("open"))}function ic(e){const t=n(e)
t&&(t.classList.add("pCR"),Wr(xr(),t))}function sc(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function cc(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?sc(t,e.firstChild):Wr(e,t)}(e,t)}function uc(e){const t=n(e)
t&&cc((jr||(jr=n("pCR")),jr),t)}const lc=[function(){Nt("moveGuildList")&&uc("minibox-guild")},function(){Nt("moveOnlineAlliesList")&&uc("minibox-allies")},function(){Nt("moveXmasBox")&&ic("minibox-xmas")},function(){Nt("moveDailyQuest")&&ic("minibox-daily-quest")},function(){Nt("moveFSBox")&&ic("minibox-fsbox")},function(){(f.enableAllyOnlineList||f.enableEnemyOnlineList)&&zr(import("./allyEnemy-CB13ipkh.js"))},function(){(f.enableWantedList||f.enableActiveBountyList)&&zr(import("./activeWantedBounties-B1W_W5-K.js"))},function(){f.enableGuildInfoWidgets&&zr(import("./addGuildInfoWidgets-CFWXIM94.js"))},function(){f.enableOnlineAlliesWidgets&&zr(import("./addOnlineAlliesWidgets-DvPyxaYz.js"))},function(){f.enableTempleAlert&&zr(import("./injectTempleAlert-BnCya1Un.js"))},function(){f.enableUpgradeAlert&&zr(import("./injectUpgradeAlert-DFxFxV8R.js"))},function(){f.enableComposingAlert&&zr(import("./injectComposeAlert-C-oiiGF-.js"))},function(){xr()&&!bs()&&$s()},function(){bs()||(window.openQuickMsgDialog=ac)},function(){Nt("statBarLinks")&&zr(import("./statBar-4YTHIb45.js"))},function(){Nt("staminaCalculator")&&zr(import("./injectStaminaCalculator-CA1wDfYO.js"))},function(){Nt("levelUpCalculator")&&zr(import("./injectLevelupCalculator-B4nF7Rkt.js"))},function(){Nt("fsboxlog")&&zr(import("./fsbox-CGx0GCaa.js"))},function(){Nt("resizeQuickBuff")&&zr(import("./interceptQuickBuff-C4XxNpjp.js"))},function(){Nt("joinAllLink")&&zr(import("./injectJoinAllLink-39YZrZ3d.js"))},function(){Nt("addServerNode")&&zr(import("./injectServerNode-BAaGqvi4.js"))},function(){Nt("addScoutTowerLink")&&zr(import("./scoutTowerLink-BliQjIfj.js"))},function(){Br()&&Nt(it)&&zr(import("./guildActivity-CsTHaXT9.js"))},async function(){if(Br()&&f.enableSeTracker){(await import("./trackerPrefStore-D9zZSp-w.js").then((function(e){return e.a}))).default.set(f.enableSeTracker)}}]
const fc=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function dc(){f.huntingMode||(fc.forEach(ds),f.allyEnemyOnlineRefreshTime=1e3*Nt("allyEnemyOnlineRefreshTime"),f.useNewGuildLog&&(H(document.body,"click",ms),H(document.body,"auxclick",ms)),hs(lc))}function pc(e){const t=x(e)
t?.["new-ui"]&&(Nt("gameHelpLink")&&zt(3,fs),f.huntingMode=Nt("huntingMode"),zt(3,rs),dc(),Nt("hideHelperMenu")||zt(3,Li))}function gc(){const e=function(){const e=n("html")
if(e?.dataset)return e.dataset.hcs}()
e&&pc(e)}function mc(){Br()&&n("worldPage")&&window.GameData&&zr(import("./newMap-Dhdp63Ss.js"))}function hc(e){$(e).qtip("hide")}function yc(e){Ai("needToPray",e),Ai("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}let bc=0
const vc='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',wc=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${te}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
async function _c(e){const t=e.target.getAttribute("praytype")
t&&(Hr("notification","prayToGods"),hc(e.target),await Pi({cmd:"temple",subcmd:"pray",type:t}),bc.outerHTML=vc,yc(!1))}function kc(){Ws(n("notifications"),wc),bc=n("helperPrayToGods"),Er(bc,"click",_c)}async function jc(){if(!f.enableTempleAlert)return
const e="temple"===f.cmd?document:await Oi({cmd:"temple"})
if(!e)return
const t=S("#pCC",e)
if(!t)return
const n="You are currently praying at the temple."!==dr(t)
n&&kc(),yc(n)}function xc(){zr(import("./bioWidgets-BXEtD0I7.js"))}function Sc(){zr(import("./injectGuild-CnPwy9Ua.js"))}const $c=()=>{zr(import("./guildAdvisor-Cv9_parA.js"))}
const Lc=()=>{zr(import("./groups-BpTq34Oj.js"))}
const Ec=()=>{zr(import("./addRemoveTags-CX6VIK3W.js"))}
const Pc=()=>{zr(import("./guildChat-Dfv89n45.js"))}
function Oc(){zr(import("./viewRecipe-BI0wL9BG.js"))}function Cc(){zr(import("./ufsgAllowBack-BHmYDq7J.js"))}function Tc(){zr(import("./profile-BWglVUkX.js").then((function(e){return e.p})))}function Nc(){zr(import("./news-B5kSH18C.js"))}function Ac(){zr(import("./viewArchive-B3-3Gr_K.js"))}const Mc=()=>{zr(import("./inventory-DrCDdfNz.js"))},Bc=()=>{zr(import("./bazaar-DxoZ53IN.js"))}
function Hc(){zr(import("./injectQuestBookFull--BJe6qXQ.js"))}const Rc=()=>{zr(import("./scavenging-BsDwGDlB.js"))}
const Dc=()=>{zr(import("./toprated-D9dhFyoU.js"))}
const Ic=()=>{zr(import("./trade-vq7Sr2Td.js"))}
var Uc={creatures:{"-":{"-":Cc}},items:{"-":{"-":Cc},view:{"-":()=>{zr(import("./itemsView-B_E12ip7.js"))}}},masterrealms:{"-":{"-":Cc}},quests:{"-":{"-":Cc},view:{"-":()=>{zr(import("./showAllQuestSteps-B1nazN-T.js"))}}},realms:{"-":{"-":Cc}},relics:{"-":{"-":Cc}},shops:{"-":{"-":Cc}},"-":{news:{"-":Nc},viewupdatearchive:{"-":Ac},viewarchive:{"-":Ac},"-":{"-":()=>{zr(import("./unknownPage-Ba922aC-.js"))}}},arena:{"-":{"-":()=>{zr(import("./arena-CQ7TMb_n.js").then((function(e){return e.c})))}},dojoin:{"-":()=>{zr(import("./arenaDoJoin-OYGDhx-6.js"))}},join:{"-":()=>{zr(import("./arenaJoin-3578uP8s.js"))}},completed:{"-":()=>{zr(import("./completedArenas-DK9JWFhO.js"))}},pickmove:{"-":()=>{zr(import("./storeMoves-ClfjGVMg.js"))}},setup:{"-":()=>{zr(import("./setupMoves-5CF71OLi.js"))}}},auctionhouse:{"-":{"-":()=>{zr(import("./injectAuctionHouse-DZBQuobf.js"))}},quickcreate:{"-":()=>{zr(import("./quickCreate-DHqkz2wT.js"))}}},bank:{"-":{"-":()=>{zr(import("./injectBank-CNFrXHi_.js"))}}},blacksmith:{repairall:{"-":function(){Xt("fromworld")&&mc()}}},buffmarket:{"-":{"-":()=>{zr(import("./injectBuffmarket-BZyGyfY4.js"))}}},combat:{attackplayer:{"-":Tc}},composing:{"-":{"-":()=>{zr(import("./composing-F6kn06ju.js"))}},breakdown:{"-":()=>{zr(import("./breakdown-C2MRWxef.js"))}},create:{"-":()=>{zr(import("./composingCreate-3on3SqG4.js"))}}},findplayer:{"-":{"-":()=>{zr(import("./findplayer-fKj9eLHk.js"))}}},guild:{inventory:{report:()=>{zr(import("./guildReport-CjvX1a1Y.js"))},addtags:Ec,removetags:Ec,storeitems:()=>{zr(import("./storeitems-Do4tthRH.js"))}},chat:{"-":Pc},dochat:{"-":Pc},log:{"-":()=>{zr(import("./guildLog-CgIHUHH9.js"))}},groups:{viewstats:()=>{zr(import("./injectGroupStats-SJ6NOe6Z.js"))},joinallgroupsundersize:Lc,joinall:Lc,"-":Lc},manage:{"-":Sc},advisor:{"-":$c,weekly:$c},history:{"-":xc},view:{"-":Sc},scouttower:{"-":()=>{zr(import("./injectScouttower-BXvycd1M.js"))}},mailbox:{"-":()=>{zr(import("./guildMailbox-B6AXuUKE.js"))}},ranks:{"-":()=>{zr(import("./rank-Cn-U6D3e.js"))}},conflicts:{rpupgrades:()=>{zr(import("./injectRPUpgrades-Cc3n49Gk.js"))}},bank:{"-":()=>{zr(import("./injectGuildBank-DRPR0i9V.js"))}},hall:{"-":()=>{zr(import("./hall-DHs3Lt_2.js"))},post:xc},"-":{"-":Sc}},hellforge:{"-":{"-":()=>{zr(import("./hellforge-C4AnxMr5.js"))}}},inventing:{"-":{"-":function(){zr(import("./inventing-C1O9o6Hv.js"))}},doinvent:{"-":Oc},viewrecipe:{"-":Oc}},log:{"-":{"-":()=>{zr(import("./playerLog-Dflm9HwB.js"))}}},marketplace:{createreq:{"-":()=>{zr(import("./marketplace-B2-33eor.js"))}}},news:{fsbox:{"-":()=>{zr(import("./newsFsbox-HChUNlep.js"))}},"-":{"-":Nc},shoutbox:{"-":()=>{zr(import("./newsShoutbox-Ccjb1xZe.js"))}},viewupdatearchive:{"-":Ac},viewarchive:{"-":Ac}},notepad:{showlogs:{"-":Xr},invmanagernew:{"-":Mc},guildinvmgr:{"-":Mc},recipemanager:{"-":ua},auctionsearch:{"-":ta},onlineplayers:{"-":ra},quicklinkmanager:{"-":sa},monsterlog:{"-":Vr},quickextract:{"-":ia},quickwear:{"-":ca},fsboxcontent:{"-":Yr},bufflogcontent:{"-":Kr},newguildlog:{"-":Zr},findbuffs:{"-":na},findother:{"-":oa},savesettings:{"-":()=>{zr(import("./load-Dwy1xa0O.js"))}},reliclist:{"-":la},whosgotwhat:{"-":()=>{}}},points:{"-":{"-":()=>{zr(import("./points-CRobLT_w.js"))}}},potionbazaar:{"-":{"-":Bc},buyitem:{"-":Bc}},privatemessage:{"-":{"-":()=>{zr(import("./privateMsg-DO-29sxu.js"))}}},profile:{"-":{"-":Tc},managecombatset:{"-":Tc},report:{"-":Tc},equipitem:{"-":Tc},useitem:{"-":Tc},changebio:{"-":xc},dropitems:{"-":function(){zr(import("./injectProfileDropItems-DyqgfW_w.js"))}}},pvpladder:{"-":{"-":()=>{zr(import("./ladder-B-TKfWRd.js"))}}},questbook:{"-":{"-":Hc},atoz:{"-":Hc},viewquest:{"-":()=>{zr(import("./injectQuestTracker-Bf1VlZch.js"))}}},quickbuff:{"-":{"-":()=>{zr(import("./quickBuff-CbEmI-c2.js"))}}},scavenging:{"-":{"-":Rc},process:{"-":Rc}},settings:{"-":{"-":()=>{zr(import("./injectSettings-BNZVDAzD.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{zr(import("./superelite-yxWKDVs2.js"))}}},tempinv:{"-":{"-":()=>{zr(import("./mailbox-C3re059Z.js"))}}},temple:{"-":{"-":jc}},titan:{"-":{"-":()=>{zr(import("./injectTitan-Cv_nKeZ4.js"))}}},toprated:{xp:{"-":Dc},monthlyxp:{"-":Dc},gold:{"-":Dc},killstreak:{"-":Dc},bounties:{"-":Dc},risingstars:{"-":Dc},arena:{"-":Dc},superelites:{"-":Dc},smasher:{"-":Dc},globalquest:{"-":()=>{zr(import("./globalQuest-CDzZHu9a.js"))}}},trade:{"-":{"-":Ic},sendgold:{"-":Ic},createsecure:{"-":Ic},docreatesecure:{"-":Ic}},world:{"-":{"-":mc}}}
function Gc(e){return Ur("li",e)}function qc(e){return Ur("ul",e)}const Fc=()=>Gr({className:"fshQuickLinks",style:{left:`${Nt("quickLinksLeftPx")}px`,top:`${Nt("quickLinksTopPx")}px`}}),Wc=e=>"newWindow"in e&&e.url&&e.name
function Qc(e,t){const n=Wr(t,qc())
e.filter(Wc).forEach((e=>{Wr(Wr(n,Gc()),function(e){const t=Ca({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return ss(t,(()=>Hr("chrome","quick link",e.name))),t}(e))}))}function Jc(){if(!S(".mainbody"))return
const e=Js("quickLinks")||[]
e.length&&function(e){const t=Fc()
t.classList.toggle("fshFixed",Nt("keepHelperMenuOnScreen")),Nt("draggableQuickLinks")&&(t.classList.add("fshMove"),Mr(t)),Qc(e,t),Wr(document.body,t)}(e)}let zc=0,Kc=0,Xc=0,Vc="",Yc=0,Zc=0
function eu(e){return Xt(e)||"-"}function tu(e){const t=S(e)
return t?.value||"-"}function nu(){if(j(Uc[zc])&&j(Uc[zc][Kc])&&k(Uc[zc][Kc][Xc]))return Uc[zc][Kc][Xc]}function ou(){""!==document.location.search?(zc=eu("cmd"),Kc=eu("subcmd"),Xc=eu("subcmd2"),["points","privatemessage"].includes(zc)&&(Vc=`/${eu("type")}`)):(zc=tu('input[name="cmd"]'),Kc=tu('input[name="subcmd"]'),Xc=tu('input[name="subcmd2"]')),f.cmd=zc,f.subcmd=Kc,f.subcmd2=Xc,Zc=`${zc}/${Kc}/${Xc}${Vc}`,Yc=nu()}function ru(){k(Yc)&&(b(Zc),w("JS Perf",Zc),Yc(),_("JS Perf",Zc))}async function au(e){w("JS Perf","FSH.runCore"),ou(),await e,gc(),zt(3,ru),Nt("playNewMessageSound")&&zt(3,$r),f.huntingMode||zt(3,Jc),_("JS Perf","FSH.runCore")}const iu=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,m]
function su(e,t){if(w("JS Perf","FSH.dispatch"),iu.some((e=>e())))return
const n=L("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
M(),function(e,t){f.gmInfo=x(decodeURIComponent(t)),f.gmInfo?f.fshVer=e:f.fshVer=`${e}_native`,f.calfVer="123"}(e,t),h(),au(n),_("JS Perf","FSH.dispatch")}export{Ji as $,W as A,qc as B,Rr as C,Ls as D,Ba as E,Ma as F,Pi as G,Ei as H,Et as I,Pt as J,cs as K,Wo as L,rn as M,Ho as N,Tn as O,An as P,Dn as Q,_o as R,Qo as S,Pn as T,$n as U,Qn as V,Fn as W,Bn as X,Rn as Y,Io as Z,Vt as _,Fi as a,fr as a$,On as a0,nn as a1,Js as a2,Nn as a3,qn as a4,Ro as a5,Jn as a6,Ks as a7,o as a8,Es as a9,Ta as aA,fa as aB,l as aC,et as aD,Re as aE,De as aF,Fe as aG,Ie as aH,hc as aI,s as aJ,Se as aK,ne as aL,Be as aM,I as aN,Ia as aO,ze as aP,Ua as aQ,ka as aR,x as aS,zt as aT,qr as aU,ht as aV,mt as aW,bt as aX,yt as aY,vt as aZ,sr as a_,Xt as aa,ir as ab,Xr as ac,Vr as ad,Ai as ae,ks as af,f as ag,zs as ah,Nt as ai,Fr as aj,ve as ak,Lr as al,Mn as am,st as an,D as ao,te as ap,dr as aq,Gi as ar,Us as as,fe as at,de as au,Kt as av,Ce as aw,se as ax,St as ay,cr as az,H as b,is as b$,e as b0,k as b1,He as b2,Wn as b3,Cn as b4,Le as b5,sn as b6,ke as b7,wo as b8,q as b9,Hi as bA,Bi as bB,Ri as bC,Ue as bD,Ge as bE,Ve as bF,Je as bG,gs as bH,Ci as bI,Wi as bJ,bn as bK,jt as bL,zi as bM,j as bN,Ot as bO,ut as bP,Oa as bQ,w as bR,_ as bS,Di as bT,pe as bU,xt as bV,cc as bW,At as bX,Oe as bY,ja as bZ,ot as b_,Qe as ba,Xe as bb,No as bc,Co as bd,To as be,Ao as bf,lo as bg,Go as bh,qo as bi,Fo as bj,G as bk,Pe as bl,Ko as bm,zo as bn,V as bo,Mt as bp,Lt as bq,ue as br,qi as bs,ln as bt,uo as bu,Ke as bv,qe as bw,Ze as bx,tt as by,nt as bz,gr as c,Y as c$,rt as c0,F as c1,Br as c2,Ur as c3,ye as c4,at as c5,gt as c6,Z as c7,r as c8,ft as c9,wt as cA,J as cB,dt as cC,b as cD,Nc as cE,Hc as cF,Oc as cG,B as cH,$a as cI,U as cJ,si as cK,Va as cL,Za as cM,ei as cN,Ya as cO,ri as cP,kt as cQ,_t as cR,Gn as cS,on as cT,ee as cU,Q as cV,K as cW,X as cX,it as cY,ea as cZ,_e as c_,Gs as ca,fn as cb,Vn as cc,gn as cd,mn as ce,pn as cf,fo as cg,go as ch,Uo as ci,ko as cj,Zt as ck,io as cl,ao as cm,$o as cn,Fs as co,Sa as cp,he as cq,Gc as cr,t as cs,L as ct,lt as cu,zr as cv,vn as cw,as as cx,ae as cy,R as cz,Qr as d,qs as d0,z as d1,aa as d2,Sc as d3,Hn as d4,Bo as d5,er as d6,Te as d7,Ne as d8,so as d9,jc as dA,kc as dB,Yr as dC,Na as dD,je as dE,xe as dF,pt as dG,da as dH,Ee as dI,le as dJ,Un as dK,un as dL,Yi as dM,re as dN,yn as dO,ia as dP,ca as dQ,su as dR,Mr as da,lr as db,In as dc,Xn as dd,Do as de,be as df,ce as dg,Zn as dh,me as di,co as dj,hn as dk,Me as dl,hs as dm,Jr as dn,ua as dp,ge as dq,Kr as dr,sa as ds,ta as dt,ra as du,oa as dv,na as dw,Zr as dx,xr as dy,Ae as dz,Oi as e,ys as f,n as g,ps as h,Wr as i,ct as j,us as k,$t as l,Gr as m,Ca as n,ss as o,Sr as p,S as q,a as r,Hr as s,$e as t,xa as u,Ws as v,bs as w,ur as x,sc as y,Er as z}
//# sourceMappingURL=calfSystem-wTzwei3t.js.map
