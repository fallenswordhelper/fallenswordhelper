function e(e){return void 0===e}function t(e){return new Promise((t=>{const n=document.createElement("script")
n.async=!0,n.onload=t,n.src=e,document.body.appendChild(n)}))}function n(e,t){return t?t.getElementById(e):document.getElementById(e)}function o(e){if(e instanceof Node)return e.textContent}function r(e,t){return e.exec(t)}function i(e,t){const n=r(e,t)
if(n)return n[1]}let a=null
function s(){const e=n("holdtext")
if(e&&!a){const t=i(/fallensword.com\/\?ref=(?<id>\d+)/,o(e))
t&&(a=Number(t))}return a}let c=null
const u=()=>function(){const e=n("statbar-character")
return e&&o(e)}()||"string"==typeof window.self&&window.self
function l(){if(!c){const e=u()
e&&(c=e)}return c}var f={}
const d=["www.keeprefreshing.com"]
let p=!1,g=!1
function h(){if(!g){const e=i(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
p=d.includes(e),g=!0}return p}function m(){!function(){t("https://www.googletagmanager.com/gtag/js?id=G-14Y99WX8XL"),window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},gtag("js",new Date)
const e=l()
gtag("config","G-14Y99WX8XL",{app_name:"fshApp",app_version:`${f.fshVer}(${f.calfVer})`,send_page_view:!1,...e&&{user_id:e}})}()}function y(){return h()||e(window.ga)}function b(e){y()||(ga("fshApp.set","screenName",e),ga("fshApp.send","screenview"))}const v={}
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
Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})})),n}var o={},r={},i={},a={},s="<unknown>"
function c(e){return e.split("\n").reduce((function(e,t){var n=f(t)||p(t)||m(t)||w(t)||b(t)
return n&&e.push(n),e}),[])}var u=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,l=/\((\S*)(?::(\d+))(?::(\d+))\)/
function f(e){var t=u.exec(e)
if(!t)return null
var n=t[2]&&0===t[2].indexOf("native"),o=t[2]&&0===t[2].indexOf("eval"),r=l.exec(t[2])
return o&&null!=r&&(t[2]=r[1],t[3]=r[2],t[4]=r[3]),{file:n?null:t[2],methodName:t[1]||s,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var d=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function p(e){var t=d.exec(e)
return t?{file:t[2],methodName:t[1]||s,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var g=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,h=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function m(e){var t=g.exec(e)
if(!t)return null
var n=t[3]&&t[3].indexOf(" > eval")>-1,o=h.exec(t[3])
return n&&null!=o&&(t[3]=o[1],t[4]=o[2],t[5]=null),{file:t[3],methodName:t[1]||s,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var y=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i
function b(e){var t=y.exec(e)
return t?{file:t[3],methodName:t[1]||s,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var v=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
function w(e){var t=v.exec(e)
return t?{file:t[2],methodName:t[1]||s,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var _=n(Object.freeze({__proto__:null,parse:c}));(function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n)
var r=Object.getOwnPropertyDescriptor(t,n)
r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),o=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return o(t,e),t},i=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):r(e.value).then(a,s)}c((o=o.apply(e,t||[])).next())}))},a=e&&e.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i
function s(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r
switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i
break
case 4:return a.label++,{value:i[1],done:!1}
case 5:a.label++,o=i[1],i=[0]
continue
case 7:i=a.ops.pop(),a.trys.pop()
continue
default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0
continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1]
break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i
break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i)
break}r[2]&&a.ops.pop(),a.trys.pop()
continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1]
return{value:i[0]?i[1]:void 0,done:!0}}}
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
if(!p(r)){if(!r.file||"<anonymous>"===r.file){var i=e[o+1]
if(i&&p(i)){n++
continue}}break}n++}return n||t.DEFAULT_BACKTRACE_SHIFT}function h(e,t){if(e.cause){for(var n=[],o=e;n.length<3&&(o=o.cause);)n.push({class:o.name,message:o.message,backtrace:"string"==typeof o.stack?d(o.stack,!1,t):null})
return n}return[]}function m(e,t){return i(this,void 0,void 0,(function(){var n,o,r,i
return a(this,(function(a){switch(a.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
o=0,a.label=1
case 1:return e.length?(r=e.splice(0)[o],[4,t(r.file)]):[3,3]
case 2:return i=a.sent(),n[o]=H(i,r.number),o++,[3,1]
case 3:return[2,n]}}))}))}function y(e,t){for(var n=[],o=!0,r=0,i=t.length;r<i;r++){var a=(0,t[r])(e)
!1===a&&(o=!1),n.push(a)}return{results:n,result:o}}function b(e,t,n){e&&e.afterNotify&&e.afterNotify(n,e)
for(var o=0,r=t.length;o<r;o++)t[o](n,e)
return!0}function v(e){if("object"!=typeof e||null===e)return{}
var t={}
for(var n in e)t[n]=e[n]
return t}function w(e,t){void 0===t&&(t=8)
var n=[]
function o(e){if(!e||"object"!=typeof e)return!1
for(var t=0;t<n.length;t++)if(n[t]===e)return!0
return n.push(e),!1}function r(e){var t=typeof e
return/function/.test(t)?"toJSON"===e.name:!/symbol/.test(t)&&null!==e&&("object"!=typeof e||void 0!==e.hasOwnProperty)}function i(e,n){if(void 0===n&&(n=0),n>=t)return"[DEPTH]"
if(!r(e))return Object.prototype.toString.call(e)
if(o(e))return"[RECURSION]"
if(Array.isArray(e))return e.map((function(e){return a(e,n+1)}))
if("object"==typeof e){var i={}
for(var s in e){var c=e[s]
Object.prototype.hasOwnProperty.call(e,s)&&null!=s&&null!=c&&(i[s]=a(c,n+1))}return i}return e}function a(e,t){void 0===t&&(t=0)
try{return i(e,t)}catch(e){return"[ERROR] ".concat(e)}}return a(e)}function k(e){var t=function(t){return function(){for(var n,o=[],r=0;r<arguments.length;r++)o[r]=arguments[r]
if("debug"===t){if(!e.config.debug)return
t="log"}o.unshift("[Honeybadger]"),(n=e.config.logger)[t].apply(n,o)}}
return{log:t("log"),info:t("info"),debug:t("debug"),warn:t("warn"),error:t("error")}}function j(e){var t
if(e)if(x(e)){var n=e
t=c(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?v(e):{message:String(e)}
else t={}
return t}function x(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function S(e,t,n){if(e&&t&&n&&t in e)try{for(var o=e[t];o&&o.__hb_original;)o=o.__hb_original
e[t]=n(o),e[t].__hb_original=o}catch(e){}}t.merge=c,t.mergeNotice=u,t.objectIsEmpty=l,t.objectIsExtensible=f,t.makeBacktrace=d,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=g,t.getCauses=h,t.getSourceForBacktrace=m,t.runBeforeNotifyHandlers=y,t.runAfterNotifyHandlers=b,t.shallowClone=v,t.sanitize=w,t.logger=k,t.makeNotice=j,t.isErrorObject=x,t.instrument=S
var $=!1,L=[]
function E(e,t){e&&e.console&&t&&(L.push(t),$||($=!0,["debug","info","warn","error","log"].forEach((function(t){S(e.console,t,(function(n){return function(){var o=Array.prototype.slice.call(arguments)
L.forEach((function(e){try{e(t,o)}catch(e){}})),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}}))}))))}function P(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function O(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function C(e,t){if(N("Object",e)){N("Array",t)||(t=[])
var n=[]
return o(e)}function o(e){var r,i
if(N("Object",e)||N("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(N("Object",e)){for(r in i={},e)T(r,t)?i[r]="[FILTERED]":i[r]=o(e[r])
return i}return N("Array",e)?e.map((function(e){return o(e)})):N("Function",e)?"[FUNC]":e}}function T(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function N(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function A(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var o=e
return n.split(/[&]\s?/).forEach((function(e){var n=e.split("=",2),r=n[0],i=n[1]
T(r,t)&&(o=o.replace("".concat(r,"=").concat(i),"".concat(r,"=[FILTERED]")))})),o}function M(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach((function(o){var r=t+o.replace(/\W/g,"_").toUpperCase()
n[r]=e[o]})),n}function B(e){return JSON.parse(JSON.stringify(e))}function H(e,t,n){if(void 0===n&&(n=2),!e)return null
var o=e.split("\n")
o.unshift("")
for(var r=t+n,i={},a=t-n;a<=r;a++){var s=o[a]
"string"==typeof s&&(i[a]=s)}return i}function R(e){return void 0!==e.async}function I(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.instrumentConsole=E,t.endpoint=P,t.generateStackTrace=O,t.filter=C,t.filterUrl=A,t.formatCGIData=M,t.clone=B,t.isBrowserConfig=R,t.globalThisOrWindow=I
var D={}
function U(e,t,n,o){void 0===o&&(o=100)
var r="".concat(t,"-").concat(n)
if(void 0===D[r]&&(D[r]=0),D[r]%o==0){var i="Deprecation warning: ".concat(t," has been deprecated; please use ").concat(n," instead.")
e.warn(i),D[r]++}else D[r]++}t.logDeprecatedMethod=U})(a),Object.defineProperty(i,"__esModule",{value:!0})
var k=a
function j(e){return void 0===e&&(e=(0,k.globalThisOrWindow)()),{shouldReloadOnConfigure:!1,load:function(t){function n(){return t.config.eventsEnabled}n()&&(0,k.instrumentConsole)(e,(function(e,o){if(n()&&0!==o.length){var r={severity:e}
"string"==typeof o[0]?(r.message=o[0],r.args=o.slice(1)):r.args=o,t.event("log",r)}}))}}}i.default=j
var x={},S={}
Object.defineProperty(S,"__esModule",{value:!0}),S.GlobalStore=void 0
var $=a,L=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,$.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
S.GlobalStore=L
var P={}
class O{static parse(e){return e.trim().split("\n").map((e=>JSON.parse(e)))}static stringify(e){return e.map((e=>JSON.stringify(e))).join("\n")}}var C=Object.freeze({__proto__:null,NdJson:O}),T=n(C),N={}
Object.defineProperty(N,"__esModule",{value:!0}),N.CONFIG=void 0,N.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var A=e&&e.__assign||function(){return A=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},A.apply(this,arguments)},M=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):r(e.value).then(a,s)}c((o=o.apply(e,t||[])).next())}))},B=e&&e.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i
function s(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r
switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i
break
case 4:return a.label++,{value:i[1],done:!1}
case 5:a.label++,o=i[1],i=[0]
continue
case 7:i=a.ops.pop(),a.trys.pop()
continue
default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0
continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1]
break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i
break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i)
break}r[2]&&a.ops.pop(),a.trys.pop()
continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1]
return{value:i[0]?i[1]:void 0,done:!0}}}
Object.defineProperty(P,"__esModule",{value:!0}),P.ThrottledEventsLogger=void 0
var H=T,R=a,I=N,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=A(A({},I.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.processQueue=function(){var e=this
if(0!==this.queue.length&&!this.isProcessing){this.isProcessing=!0
var t=this.queue.slice()
this.queue=[]
var n=H.NdJson.stringify(t)
this.makeHttpRequest(n).then((function(){setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})).catch((function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)}))}},e.prototype.makeHttpRequest=function(e){return M(this,void 0,void 0,(function(){var t=this
return B(this,(function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,R.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then((function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")})).catch((function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))}))]}))}))},e.prototype.originalLogger=function(){var e,t,n,o,r
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(o=console.warn.__hb_original)&&void 0!==o?o:console.warn,error:null!==(r=console.error.__hb_original)&&void 0!==r?r:console.error}},e}()
P.ThrottledEventsLogger=D
var U=e&&e.__assign||function(){return U=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},U.apply(this,arguments)},G=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):r(e.value).then(a,s)}c((o=o.apply(e,t||[])).next())}))},F=e&&e.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i
function s(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r
switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i
break
case 4:return a.label++,{value:i[1],done:!1}
case 5:a.label++,o=i[1],i=[0]
continue
case 7:i=a.ops.pop(),a.trys.pop()
continue
default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0
continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1]
break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i
break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i)
break}r[2]&&a.ops.pop(),a.trys.pop()
continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1]
return{value:i[0]?i[1]:void 0,done:!0}}}
Object.defineProperty(x,"__esModule",{value:!0}),x.Client=void 0
var q=a,W=S,Q=P,J=N,z=/,|\s+/,K=/\S/,X=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.9.1"},this.config=U(U({},J.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new Q.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,q.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
return this.__eventsLogger.configure(this.config),this.loadPlugins(),this},e.prototype.loadPlugins=function(){var e=this;(this.__pluginsLoaded?this.config.__plugins.filter((function(e){return e.shouldReloadOnConfigure})):this.config.__plugins).forEach((function(t){return t.load(e)})),this.__pluginsLoaded=!0},e.prototype.__initStore=function(){this.__store=new W.GlobalStore({context:{},breadcrumbs:[]},this.config.maxBreadcrumbs)},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&null!=e&&this.__store.setContext(e),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__store.clear(),"object"==typeof e&&null!==e&&this.__store.setContext(e),this},e.prototype.clear=function(){return this.__store.clear(),this},e.prototype.notify=function(e,t,n){var o=this
void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var r=this.makeNotice(e,t,n),i=r&&r.backtrace?r.backtrace.map((function(e){return(0,q.shallowClone)(e)})):null,a=this.__runPreconditions(r)
return a instanceof Error?((0,q.runAfterNotifyHandlers)(r,this.__afterNotifyHandlers,a),!1):a instanceof Promise?(a.then((function(e){return e instanceof Error?((0,q.runAfterNotifyHandlers)(r,o.__afterNotifyHandlers,e),!1):o.__send(r,i)})),!0):(this.__send(r,i).catch((function(e){})),!0)},e.prototype.notifyAsync=function(e,t,n){var o=this
return void 0===t&&(t=void 0),void 0===n&&(n=void 0),new Promise((function(r,i){var a,s
a=e.afterNotify?e:t&&t.afterNotify?t:n&&n.afterNotify?n:t&&"object"==typeof t?t:n||(t={}),s=a.afterNotify,a.afterNotify=function(e){if(null==s||s.call(o,e),e)return i(e)
r()},o.notify(e,t,n)}))},e.prototype.makeNotice=function(e,t,n){void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var o=(0,q.makeNotice)(e)
if(t&&"object"!=typeof t&&(t={name:String(t)}),t&&(o=(0,q.mergeNotice)(o,t)),"object"==typeof n&&null!==n&&(o=(0,q.mergeNotice)(o,n)),(0,q.objectIsEmpty)(o))return null
var r=this.__store.getContents("context"),i=this.__constructTags(o.tags),a=this.__constructTags(r.tags),s=this.__constructTags(this.config.tags),c=i.concat(a).concat(s),u=c.filter((function(e,t){return c.indexOf(e)===t}))
return o=(0,q.merge)(o,{name:o.name||"Error",context:(0,q.merge)(r,o.context),projectRoot:o.projectRoot||this.config.projectRoot,environment:o.environment||this.config.environment,component:o.component||this.config.component,action:o.action||this.config.action,revision:o.revision||this.config.revision,tags:u}),Array.isArray(o.backtrace)&&o.backtrace.length||("string"==typeof o.stack&&o.stack.trim()?o.backtrace=(0,q.makeBacktrace)(o.stack,!1,this.logger):(o.stack=(0,q.generateStackTrace)(),o.backtrace=(0,q.makeBacktrace)(o.stack,!0,this.logger))),o},e.prototype.addBreadcrumb=function(e,t){if(this.config.breadcrumbsEnabled){t=t||{}
var n=(0,q.shallowClone)(t.metadata),o=t.category||"custom",r=(new Date).toISOString()
return this.__store.addBreadcrumb({category:o,message:e,metadata:n,timestamp:r}),this}},e.prototype.logEvent=function(e){(0,q.logDeprecatedMethod)(this.logger,"Honeybadger.logEvent","Honeybadger.event"),this.event("log",e)},e.prototype.event=function(e,t){var n
"object"==typeof e&&(t=e,e=null!==(n=e.event_type)&&void 0!==n?n:void 0),this.__eventsLogger.log(U({event_type:e,ts:(new Date).toISOString()},t))},e.prototype.__getBreadcrumbs=function(){return this.__store.getContents("breadcrumbs").slice()},e.prototype.__getContext=function(){return this.__store.getContents("context")},e.prototype.__developmentMode=function(){return!0!==this.config.reportData&&this.config.environment&&this.config.developmentEnvironments.includes(this.config.environment)},e.prototype.__buildPayload=function(e){var t=(0,q.filter)(e.headers,this.config.filters)||{},n=(0,q.filter)(U(U({},e.cgiData),(0,q.formatCGIData)(t,"HTTP_")),this.config.filters)
return{notifier:this.__notifier,breadcrumbs:{enabled:!!this.config.breadcrumbsEnabled,trail:e.__breadcrumbs||[]},error:{class:e.name,message:e.message,backtrace:e.backtrace,fingerprint:e.fingerprint,tags:e.tags,causes:(0,q.getCauses)(e,this.logger)},request:{url:(0,q.filterUrl)(e.url,this.config.filters),component:e.component,action:e.action,context:e.context,cgi_data:n,params:(0,q.filter)(e.params,this.config.filters)||{},session:(0,q.filter)(e.session,this.config.filters)||{}},server:{project_root:e.projectRoot,environment_name:e.environment,revision:e.revision,hostname:this.config.hostname,time:(new Date).toUTCString()},details:e.details||{}}},e.prototype.__constructTags=function(e){return e?e.toString().split(z).filter((function(e){return K.test(e)})):[]},e.prototype.__runPreconditions=function(e){var t=this,n=null
e||(this.logger.debug("failed to build error report"),n=new Error("failed to build error report")),!1===this.config.reportData&&(this.logger.debug("skipping error report: honeybadger.js is disabled",e),n=new Error("honeybadger.js is disabled")),this.__developmentMode()&&(this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.",e),n=new Error("honeybadger.js is in development mode")),this.config.apiKey||(this.logger.warn("could not send error report: no API key has been configured",e),n=new Error("missing API key"))
var o=(0,q.runBeforeNotifyHandlers)(e,this.__beforeNotifyHandlers)
return n||o.result||(this.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers returned false")),o.results.length&&o.results.some((function(e){return e instanceof Promise}))?Promise.allSettled(o.results).then((function(o){if(!n&&o.some((function(e){return"rejected"===e.status||!1===e.value}))&&(t.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers (async) returned false")),n)return n})):n},e.prototype.__send=function(e,t){var n=this
return this.config.breadcrumbsEnabled?(this.addBreadcrumb("Honeybadger Notice",{category:"notice",metadata:{message:e.message,name:e.name,stack:e.stack}}),e.__breadcrumbs=this.__store.getContents("breadcrumbs")):e.__breadcrumbs=[],(0,q.getSourceForBacktrace)(t,this.__getSourceFileHandler).then((function(t){return G(n,void 0,void 0,(function(){var n
return F(this,(function(o){return t.forEach((function(t,n){e.backtrace[n].source=t})),n=this.__buildPayload(e),[2,this.__transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json",Accept:"text/json, application/json"},method:"POST",endpoint:(0,q.endpoint)(this.config.endpoint,"/v1/notices/js"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},n)]}))}))})).then((function(t){if(201!==t.statusCode)return(0,q.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,new Error("Bad HTTP response: ".concat(t.statusCode))),n.logger.warn("Error report failed: unknown response from server. code=".concat(t.statusCode)),!1
var o=JSON.parse(t.body).id
return(0,q.runAfterNotifyHandlers)((0,q.merge)(e,{id:o}),n.__afterNotifyHandlers),n.logger.info("Error report sent ⚡ https://app.honeybadger.io/notice/".concat(o)),!0})).catch((function(t){return n.logger.error("Error report failed: an unknown error occurred.","message=".concat(t.message)),(0,q.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,t),!1}))},e}()
x.Client=X
var V={}
Object.defineProperty(V,"__esModule",{value:!0}),function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n)
var r=Object.getOwnPropertyDescriptor(t,n)
r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),o=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||n(t,e,o)},s=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return o(t,e),t},c=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Util=t.Types=t.Client=void 0
var u=c(i),l=x
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return l.Client}}),r(S,t),t.Types=s(V),t.Util=s(a),t.Plugins={events:u.default}}(r)
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
return document.head.removeChild(t),n}catch(e){console&&console.warn&&console.warn("failed to detect native fetch via iframe: "+e)}return!1}function re(e){return-1!==e.toString().indexOf("native")}function ie(e){var t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)||{}
return{protocol:t[2],host:t[4],pathname:t[5]}}function ae(e){var t=ie(e),n=ie(document.URL)
return t.host&&t.protocol?t.protocol===n.protocol&&t.host===n.host?t.pathname:"".concat(t.protocol,"://").concat(t.host).concat(t.pathname):t.pathname}function se(e){var t={}
return e.split(/[;,]\s?/).forEach((function(e){var n=e.split("=",2),o=n[0],r=n[1]
t[o]=r})),t}function ce(e){if("object"==typeof e){var t=[]
for(var n in e)t.push(n+"="+e[n])
return t.join(";")}}function ue(e){try{var t=e.parentNode.childNodes,n=[]
return Array.prototype.forEach.call(t,(function(t){t.tagName&&t.tagName===e.tagName&&n.push(t)})),n}catch(e){return[]}}function le(e,t){return e.length>t&&(e=e.substr(0,t)+"..."),e}Y.stringNameOfElement=ee,Y.stringSelectorOfElement=te,Y.stringTextOfElement=ne,Y.nativeFetch=oe,Y.parseURL=ie,Y.localURLPathname=ae,Y.decodeCookie=se,Y.encodeCookie=ce,Y.preferCatch=function(){var e=!0
if("undefined"==typeof window)return e
if(window.atob||(e=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(e=!1)}catch(e){}return e}()
var fe={}
Object.defineProperty(fe,"__esModule",{value:!0}),fe.onError=fe.ignoreNextOnError=void 0
var de,pe=r,ge=pe.Util.instrument,he=pe.Util.makeNotice,me=pe.Util.globalThisOrWindow,ye=0
function be(){ye+=1,clearTimeout(de),de=setTimeout((function(){ye=0}))}function ve(e){return void 0===e&&(e=me()),{load:function(t){ge(e,"onerror",(function(n){var o=function(e,n,o,r,i){if(t.logger.debug("window.onerror callback invoked",arguments),ye>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(ye-=1)
if(0===o&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var a=he(i)
a.name||(a.name="window.onerror"),a.message||(a.message=e),a.stack||(a.stack=[a.message,"\n    at ? (",n||"unknown",":",o||0,":",r||0,")"].join("")),t.addBreadcrumb("window.onerror"!==a.name&&a.name?"window.onerror: ".concat(a.name):"window.onerror",{category:"error",metadata:{name:a.name,message:a.message,stack:a.stack}}),t.config.enableUncaught&&t.notify(a)}}
return function(t,r,i,a,s){return o(t,r,i,a,s),"function"==typeof n&&n.apply(e,arguments)}}))}}}fe.ignoreNextOnError=be,fe.onError=ve
var we={}
Object.defineProperty(we,"__esModule",{value:!0})
var _e=r,ke=_e.Util.instrument,je=_e.Util.globalThisOrWindow
function xe(e){return void 0===e&&(e=je()),{load:function(t){t.config.enableUnhandledRejection&&ke(e,"onunhandledrejection",(function(e){function n(e){var n
if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var o=e.reason
if(o instanceof Error){var r="unknown",i=0,a="".concat(o.message,"\n    at ? (").concat(r,":").concat(i,")"),s=o.stack||a,c={name:o.name,message:"UnhandledPromiseRejectionWarning: ".concat(o),stack:s}
return t.addBreadcrumb("window.onunhandledrejection: ".concat(c.name),{category:"error",metadata:c}),void t.notify(c)}var u="string"==typeof o?o:null!==(n=JSON.stringify(o))&&void 0!==n?n:"Unspecified reason"
t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: ".concat(u)})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}}))}}}we.default=xe
var Se={}
Object.defineProperty(Se,"__esModule",{value:!0})
var $e=r,Le=Y,Ee=$e.Util.sanitize,Pe=$e.Util.instrument,Oe=$e.Util.instrumentConsole,Ce=$e.Util.globalThisOrWindow
function Te(e){return void 0===e&&(e=Ce()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function o(e){return Array.isArray(e)?e.map((function(e){try{return String(e)}catch(e){return"[unknown]"}})).join(" "):""}n("console")&&Oe(e,(function(e,n){var r=o(n),i={category:"log",metadata:{level:e,arguments:Ee(n,3)}}
t.addBreadcrumb(r,i)}))}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",(function(e){var n,o,r
try{n=(0,Le.stringNameOfElement)(e.target),o=(0,Le.stringSelectorOfElement)(e.target),r=(0,Le.stringTextOfElement)(e.target)}catch(e){n="UI Click",o="[unknown]",r="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:o,text:r,event:e}})}),!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Pe(XMLHttpRequest.prototype,"open",(function(e){return function(){var t=this,n=arguments[1],o="string"==typeof n?n:String(n),r="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],i="".concat(r," ").concat((0,Le.localURLPathname)(o))
this.__hb_xhr={type:"xhr",method:r,url:o,message:i},"function"==typeof e&&e.apply(t,arguments)}})),Pe(XMLHttpRequest.prototype,"send",(function(e){return function(){var n=this
function o(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Pe(n,"onreadystatechange",(function(e){return function(){o(),"function"==typeof e&&e.apply(this,arguments)}})):n.onreadystatechange=o,"function"==typeof e&&e.apply(n,arguments)}}))),n("network")&&(0,Le.nativeFetch)()&&Pe(e,"fetch",(function(n){return function(){var o,r=arguments[0],i="GET"
"string"==typeof r?o=r:"Request"in e&&r instanceof Request?(o=r.url,r.method&&(i=r.method)):o=String(r),arguments[1]&&arguments[1].method&&(i=arguments[1].method),"string"==typeof i&&(i=i.toUpperCase())
var a="".concat(i," ").concat("undefined"==typeof document?o:(0,Le.localURLPathname)(o)),s={type:"fetch",method:i,url:o}
return n.apply(this,arguments).then((function(e){return s.status_code=e.status,t.addBreadcrumb(a,{category:"request",metadata:s}),e})).catch((function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:s}),e}))}})),function(){if(n("navigation")&&null!=e.location){var o=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",(function(t){r(o,e.location.href)})),void 0!==e.history&&(Pe(e.history,"pushState",i),Pe(e.history,"replaceState",i))}function r(e,n){o=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function i(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&r(o,String(t)),e.apply(this,arguments)}}}()}}}Se.default=Te
var Ne={}
Object.defineProperty(Ne,"__esModule",{value:!0})
var Ae=r,Me=Ae.Util.instrument,Be=Ae.Util.globalThisOrWindow
function He(e){return void 0===e&&(e=Be()),{load:function(t){!function(){function n(e){return function(n){return function(o,r){if("function"==typeof o){var i=Array.prototype.slice.call(arguments,2)
return o=t.__wrap(o,e),n((function(){o.apply(void 0,i)}),r)}return n(o,r)}}}Me(e,"setTimeout",n({component:"setTimeout"})),Me(e,"setInterval",n({component:"setInterval"}))}()}}}Ne.default=He
var Re={}
Object.defineProperty(Re,"__esModule",{value:!0})
var Ie=r,De=Ie.Util.instrument,Ue=Ie.Util.globalThisOrWindow
function Ge(e){return void 0===e&&(e=Ue()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach((function(n){var o=e[n]&&e[n].prototype
o&&Object.prototype.hasOwnProperty.call(o,"addEventListener")&&(De(o,"addEventListener",(function(e){var o={component:"".concat(n,".prototype.addEventListener")}
return function(n,r,i,a){try{r&&null!=r.handleEvent&&(r.handleEvent=t.__wrap(r.handleEvent,o))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(r,o),i,a)}})),De(o,"removeEventListener",(function(e){return function(n,o,r,i){return e.call(this,n,o,r,i),e.call(this,n,t.__wrap(o),r,i)}})))}))}}}Re.default=Ge
var Fe={},qe=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):r(e.value).then(a,s)}c((o=o.apply(e,t||[])).next())}))},We=e&&e.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i
function s(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r
switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i
break
case 4:return a.label++,{value:i[1],done:!1}
case 5:a.label++,o=i[1],i=[0]
continue
case 7:i=a.ops.pop(),a.trys.pop()
continue
default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0
continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1]
break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i
break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i)
break}r[2]&&a.ops.pop(),a.trys.pop()
continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1]
return{value:i[0]?i[1]:void 0,done:!0}}}
Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.BrowserTransport=void 0
var Qe=r,Je=Qe.Util.sanitize,ze=Qe.Util.globalThisOrWindow
function Ke(e){return Object.entries(e)}var Xe=function(){function e(e){void 0===e&&(e={}),this.headers={},this.headers=e}return e.prototype.defaultHeaders=function(){return this.headers},e.prototype.send=function(e,t){return qe(this,void 0,void 0,(function(){var n,o,r,i,a
return We(this,(function(s){switch(s.label){case 0:return n=e.headers?Ke(e.headers):[],o=this.defaultHeaders(),n.forEach((function(e){var t=e[0],n=e[1]
null!=t&&null!=n&&(o[String(t)]=String(n))})),r={method:e.method,headers:o},"POST"===e.method&&t&&(r.body="string"==typeof t?t:JSON.stringify(Je(t,e.maxObjectDepth))),[4,ze().fetch(e.endpoint,r)]
case 1:return[4,(i=s.sent()).text()]
case 2:return a=s.sent(),[2,Promise.resolve({statusCode:i.status,body:a})]}}))}))},e}()
Fe.BrowserTransport=Xe,function(t){var n,o=e&&e.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),i=e&&e.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},i.apply(this,arguments)},a=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):r(e.value).then(a,s)}c((o=o.apply(e,t||[])).next())}))},s=e&&e.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i
function s(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r
switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i
break
case 4:return a.label++,{value:i[1],done:!1}
case 5:a.label++,o=i[1],i=[0]
continue
case 7:i=a.ops.pop(),a.trys.pop()
continue
default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0
continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1]
break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i
break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i)
break}r[2]&&a.ops.pop(),a.trys.pop()
continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1]
return{value:i[0]?i[1]:void 0,done:!0}}},c=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Types=t.getUserFeedbackScriptUrl=void 0
var u=r,l=Y,f=fe,d=c(we),p=c(Se),g=c(Ne),h=c(Re),m=Fe,y=u.Util.merge,b=u.Util.filter,v=u.Util.objectIsExtensible,w=u.Util.globalThisOrWindow,_=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},k=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=k
var j=function(n){function r(e){void 0===e&&(e={})
var t=n.call(this,i({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:_()},e),new m.BrowserTransport({"User-Agent":S()}))||this
return t.__errorsSent=0,t.__lastWrapErr=void 0,t.__lastNoticeId=void 0,t.__beforeNotifyHandlers=[function(e){return t.__exceedsMaxErrors()?(t.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),t.__incrementErrorsCount(),!0)}],t.__afterNotifyHandlers=[function(e,n){n&&(t.__lastNoticeId=n.id)}],t}return o(r,n),r.prototype.configure=function(e){return void 0===e&&(e={}),n.prototype.configure.call(this,e)},r.prototype.resetMaxErrors=function(){return this.__errorsSent=0},r.prototype.factory=function(e){var t=new r(e)
return t.setNotifier(this.getNotifier()),t},r.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},r.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),a(this,void 0,void 0,(function(){var t
return s(this,(function(n){return this.config&&this.config.apiKey?this.__lastNoticeId?void 0===(t=w()).document?(this.logger.debug("global.document is undefined. Cannot attach script"),[2]):this.isUserFeedbackScriptUrlAlreadyVisible()?(this.logger.debug("User feedback form is already visible"),[2]):(t.honeybadgerUserFeedbackOptions=i(i({},e),{apiKey:this.config.apiKey,endpoint:this.config.userFeedbackEndpoint,noticeId:this.__lastNoticeId}),this.appendUserFeedbackScriptTag(t,e),[2]):(this.logger.debug("Can't show user feedback form without a notice already reported"),[2]):(this.logger.debug("Client not initialized"),[2])}))}))},r.prototype.appendUserFeedbackScriptTag=function(t,n){void 0===n&&(n={})
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
throw o.__lastWrapErr=e,(0,f.ignoreNextOnError)(),o.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),o.config.enableUncaught&&o.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},r.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},r.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},r}(u.Client),x={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.9.1"},S=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(x.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(x.version,"; n/a; n/a")},$=new j({__plugins:[(0,f.onError)(),(0,d.default)(),(0,g.default)(),(0,h.default)(),(0,p.default)(),u.Plugins.events()]})
$.setNotifier(x)
var L=r
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return L.Types}}),t.default=$}(o)
var Ve=t(o)
return Ve}()
var C=P(O.exports)
const T=["attackplayer.min.js","dynamically imported module","fs.min.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","play method is not allowed","world.min.js","openuserjs.org"],N=e=>T.some((t=>e.includes(t)))
function A(e){if(N(e.stack))return!1}function M(){!function(){C.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.121"})
const e=l()
e&&C.setContext({user_id:e}),C.beforeNotify(A)}()}function B(...e){console.log(...e)}function H(e,t,n,o){e instanceof EventTarget&&e.addEventListener(t,n,o)}function R(e){return null===e}const I=`${document.location.protocol}//${document.location.host}/`,D=window.HCS?.defines?.cdn,U=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],G=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],q=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,W=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,Q=/guild_id=(?<guildId>\d+)/,J=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,z=/player_id=(?<playerId>\d+)/,K=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,X=/VL:.+?(?<vl>\d+)/,V=.2,Y="joinallgroupsundersize",Z="index.php",ee="?cmd=",te=`${Z}${ee}`,ne="&subcmd=",oe="&target_username=",re=`${te}auctionhouse`,ie=`${re}&search=`,ae=`${te}log`,se=`${te}ignore${ne}add&ignore_username=`,ce=`${te}profile`,ue=`${ce}&player_id=`,le=`${ce}${ne}dropitems`,fe=`${te}trade&target_player=`,de=`${te}trade${ne}createsecure${oe}`,pe=`${te}arena${ne}`,ge=`${Z}${`${ee}notepad&blank=1${ne}`}`,he=`${ge}auctionsearch`,me=`${te}points`,ye=`${te}guild${ne}`,be=`${ye}log`,ve=`${ye}scouttower`,we=`${ye}groups&subcmd2=`,_e=`${ye}inventory&subcmd2=report&user=`,ke=`${ye}view&guild_id=`,je=`${we}joinall`,xe=`${we}${Y}`,Se=`${te}world`,$e=`${te}findplayer`,Le=`${$e}&search_show_first=1&search_username=`,Ee=`${te}blacksmith`,Pe=`${te}quickbuff`,Oe=`${te}composing`,Ce=`${te}attackplayer${oe}`,Te=`${te}${ne}viewupdatearchive`,Ne=`${te}${ne}viewarchive`,Ae=`${te}bounty`,Me=`${te}inventing${ne}viewrecipe&recipe_id=`,Be=`https://guide.fallensword.com/${te}`,He="after-update.actionlist",Re="buffs.player",Ie="update.player",De="level.stats-player",Ue="gold.stats-player",Ge="prompt.worldDialogShop",Fe="keydown.controls",qe="update.realm",We="-success.action-response",Qe=`-1${We}`,Je=`1${We}`,ze=`2${We}`,Ke=`9${We}`,Xe=`5${We}`,Ve=`25${We}`,Ye=1,Ze=2,et=16,tt=128,nt=256,ot="needToCompose",rt="lastComposeCheck",it="characterVirtualLevel",at="enableGuildActivityTracker",st="lastLadderReset",ct="form",ut="table",lt="td",ft="tr",dt="fsh_buffLog",pt="statbar-level-tooltip-general",gt="stat-level",ht="stat-defense",mt="stat-attack",yt="stat-damage",bt="stat-armor",vt="stat-hp",wt="stat-vl",_t="GM_",kt=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],jt=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],xt=`${D}ui/world/action_spinner.gif`,St=".fa-envelope",$t='a[href*="&player_id="]',Lt=.002,Et=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],Pt='input[name="blockedSkillList[]"]'
var Ot={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252"}
const Ct=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function Tt(t,n){const o=window.localStorage.getItem(_t+t)
return R(o)||e(o)?n:function(e){const t=Ct.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(o)}function Nt(e){return Tt(e,Ot[e])}function At(e){Nt("betaOptIn")&&B("sendException",e),C.notify(e)}function Mt(e,t){return e||t}const Bt=[null]
function Ht(e,t){return Bt[e]&&Bt[e].priority<Bt[t].priority}function Rt(e,t){const n=Bt[e]
Bt[e]=Bt[t],Bt[t]=n}function It(e,t){return e?2*t:2*t+1}function Dt(){if(1===Bt.length)return
const e=Bt[1].data,t=Bt.pop()
return Bt.length>1&&(Bt[1]=t,function(e){let t=e
for(;2*t<Bt.length;){const e=It(!Ht(2*t+1,2*t),t)
if(Ht(t,e))break
Rt(t,e),t=e}}(1)),e}function Ut(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Ht(t,e))break
Rt(t,e),t=e}}(Bt.push({data:e,priority:t})-1)}let Gt=!0
const Ft="fshMessage"
let qt=0
function Wt(){Bt.length-1==0?Gt=!0:(Gt=!1,window.postMessage(Ft,window.location.origin))}function Qt(){const t=Dt()
var n
k(t)?t():e(n=t)||At(`pop() was not a function (${typeof n})`)}function Jt(e){const t=e.data
e.origin===window.location.origin&&t===Ft&&function(){try{Qt()}catch(e){C.notify(e)}finally{Wt()}}()}function zt(e,t,n,o){if(k(t)){qt||(H(window,"message",Jt),qt=!0)
const r=Mt(o,window),i=Mt(n,[])
Ut(t.bind(r,...i),e),Gt&&Wt()}}function Kt(e,t){return new URLSearchParams(e).get(t)}function Xt(e){return Kt(decodeURIComponent(window.location.search),e)}function Vt(){}const Yt=e=>e
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
return e}return t.dirty|r}return t.dirty}function gn(e,t,n,o,r,i){if(r){const a=dn(t,n,o,i)
e.p(a,r)}}function hn(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32
for(let e=0;e<n;e++)t[e]=-1
return t}return-1}function mn(e){const t={}
for(const n in e)t[n]=!0
return t}function yn(e){let t=!1
return function(...n){t||(t=!0,e.call(this,...n))}}function bn(e){return null==e?"":e}function vn(e){return e&&on(e.destroy)?e.destroy:Vt}function wn(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const _n="undefined"!=typeof window
let kn=_n?()=>window.performance.now():()=>Date.now(),jn=_n?e=>requestAnimationFrame(e):Vt
const xn=new Set
function Sn(e){xn.forEach((t=>{t.c(e)||(xn.delete(t),t.f())})),0!==xn.size&&jn(Sn)}function $n(e,t){e.appendChild(t)}function Ln(e){if(!e)return document
const t=e.getRootNode?e.getRootNode():e.ownerDocument
return t&&t.host?t:e.ownerDocument}function En(e){const t=Tn("style")
return t.textContent="/* empty */",function(e,t){$n(e.head||e,t),t.sheet}(Ln(e),t),t.sheet}function Pn(e,t,n){e.insertBefore(t,n||null)}function On(e){e.parentNode&&e.parentNode.removeChild(e)}function Cn(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function Tn(e){return document.createElement(e)}function Nn(e){return document.createTextNode(e)}function An(){return Nn(" ")}function Mn(){return Nn("")}function Bn(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function Hn(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Rn(e){return function(t){t.target===this&&e.call(this,t)}}function In(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Dn(e,t,n){const o=t.toLowerCase()
o in e?e[o]="boolean"==typeof e[o]&&""===n||n:t in e?e[t]="boolean"==typeof e[t]&&""===n||n:In(e,t,n)}function Un(e){let t
return{p(...n){t=n,t.forEach((t=>e.push(t)))},r(){t.forEach((t=>e.splice(e.indexOf(t),1)))}}}function Gn(e){return""===e?null:+e}function Fn(e,t){t=""+t,e.data!==t&&(e.data=t)}function qn(e,t){e.value=null==t?"":t}function Wn(e,t,n,o){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function Qn(e,t,n){for(let n=0;n<e.options.length;n+=1){const o=e.options[n]
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
function oo(e,t,n,o,r,i,a,s=0){const c=16.666/o
let u="{\n"
for(let e=0;e<=1;e+=c){const o=t+(n-t)*i(e)
u+=100*e+`%{${a(o,1-o)}}\n`}const l=u+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(e){let t=5381,n=e.length
for(;n--;)t=(t<<5)-t^e.charCodeAt(n)
return t>>>0}(l)}_${s}`,d=Ln(e),{stylesheet:p,rules:g}=eo.get(d)||function(e,t){const n={stylesheet:En(t),rules:{}}
return eo.set(e,n),n}(d,e)
g[f]||(g[f]=!0,p.insertRule(`@keyframes ${f} ${l}`,p.cssRules.length))
const h=e.style.animation||""
return e.style.animation=`${h?`${h}, `:""}${f} ${o}ms linear ${r}ms 1 both`,no+=1,f}function ro(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-o.length
r&&(e.style.animation=o.join(", "),no-=r,no||jn((()=>{no||(eo.forEach((e=>{const{ownerNode:t}=e.stylesheet
t&&On(t)})),eo.clear())})))}function io(e){to=e}function ao(){if(!to)throw new Error("Function called outside component initialization")
return to}function so(e){ao().$$.on_mount.push(e)}function co(e){ao().$$.after_update.push(e)}function uo(e){ao().$$.on_destroy.push(e)}function lo(){const e=ao()
return(t,n,{cancelable:o=!1}={})=>{const r=e.$$.callbacks[t]
if(r){const i=Yn(t,n,{cancelable:o})
return r.slice().forEach((t=>{t.call(e,i)})),!i.defaultPrevented}return!0}}function fo(e,t){const n=e.$$.callbacks[t.type]
n&&n.slice().forEach((e=>e.call(this,t)))}const po=[],go=[]
let ho=[]
const mo=[],yo=Promise.resolve()
let bo=!1
function vo(){bo||(bo=!0,yo.then($o))}function wo(){return vo(),yo}function _o(e){ho.push(e)}function ko(e){mo.push(e)}const jo=new Set
let xo,So=0
function $o(){if(0!==So)return
const e=to
do{try{for(;So<po.length;){const e=po[So]
So++,io(e),Lo(e.$$)}}catch(e){throw po.length=0,So=0,e}for(io(null),po.length=0,So=0;go.length;)go.pop()()
for(let e=0;e<ho.length;e+=1){const t=ho[e]
jo.has(t)||(jo.add(t),t())}ho.length=0}while(po.length)
for(;mo.length;)mo.pop()()
bo=!1,jo.clear(),io(e)}function Lo(e){if(null!==e.fragment){e.update(),nn(e.before_update)
const t=e.dirty
e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_o)}}function Eo(e,t,n){e.dispatchEvent(Yn(`${t?"intro":"outro"}${n}`))}const Po=new Set
let Oo
function Co(){Oo={r:0,c:[],p:Oo}}function To(){Oo.r||nn(Oo.c),Oo=Oo.p}function No(e,t){e&&e.i&&(Po.delete(e),e.i(t))}function Ao(e,t,n,o){if(e&&e.o){if(Po.has(e))return
Po.add(e),Oo.c.push((()=>{Po.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}else o&&o()}const Mo={duration:0}
function Bo(e,t,n,o){let r,i=t(e,n,{direction:"both"}),a=o?0:1,s=null,c=null,u=null
function l(){u&&ro(e,u)}function f(e,t){const n=e.b-a
return t*=Math.abs(n),{a:a,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function d(t){const{delay:n=0,duration:o=300,easing:d=Yt,tick:p=Vt,css:g}=i||Mo,h={start:kn()+n,b:t}
t||(h.group=Oo,Oo.r+=1),"inert"in e&&(t?void 0!==r&&(e.inert=r):(r=e.inert,e.inert=!0)),s||c?c=h:(g&&(l(),u=oo(e,a,t,o,n,d,g)),t&&p(0,1),s=f(h,o),_o((()=>Eo(e,t,"start"))),function(e){let t
0===xn.size&&jn(Sn),new Promise((n=>{xn.add(t={c:e,f:n})}))}((t=>{if(c&&t>c.start&&(s=f(c,o),c=null,Eo(e,s.b,"start"),g&&(l(),u=oo(e,a,s.b,s.duration,0,d,i.css))),s)if(t>=s.end)p(a=s.b,1-a),Eo(e,s.b,"end"),c||(s.b?l():--s.group.r||nn(s.group.c)),s=null
else if(t>=s.start){const e=t-s.start
a=s.a+s.d*d(e/s.duration),p(a,1-a)}return!(!s&&!c)})))}return{run(e){on(i)?(xo||(xo=Promise.resolve(),xo.then((()=>{xo=null}))),xo).then((()=>{i=i({direction:e?"in":"out"}),d(e)})):d(e)},end(){l(),s=c=null}}}function Ho(e){return void 0!==e?.length?e:Array.from(e)}function Ro(e,t){e.d(1),t.delete(e.key)}function Io(e,t){Ao(e,1,1,(()=>{t.delete(e.key)}))}function Do(e,t,n,o,r,i,a,s,c,u,l,f){let d=e.length,p=i.length,g=d
const h={}
for(;g--;)h[e[g].key]=g
const m=[],y=new Map,b=new Map,v=[]
for(g=p;g--;){const e=f(r,i,g),o=n(e)
let s=a.get(o)
s?v.push((()=>s.p(e,t))):(s=u(o,e),s.c()),y.set(o,m[g]=s),o in h&&b.set(o,Math.abs(g-h[o]))}const w=new Set,_=new Set
function k(e){No(e,1),e.m(s,l),a.set(e.key,e),l=e.first,p--}for(;d&&p;){const t=m[p-1],n=e[d-1],o=t.key,r=n.key
t===n?(l=t.first,d--,p--):y.has(r)?!a.has(o)||w.has(o)?k(t):_.has(r)?d--:b.get(o)>b.get(r)?(_.add(o),k(t)):(w.add(r),d--):(c(n,a),d--)}for(;d--;){const t=e[d]
y.has(t.key)||c(t,a)}for(;p;)k(m[p-1])
return nn(v),m}function Uo(e,t,n){const o=e.$$.props[t]
void 0!==o&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function Go(e){e&&e.c()}function Fo(e,t,n){const{fragment:o,after_update:r}=e.$$
o&&o.m(t,n),_o((()=>{const t=e.$$.on_mount.map(en).filter(on)
e.$$.on_destroy?e.$$.on_destroy.push(...t):nn(t),e.$$.on_mount=[]})),r.forEach(_o)}function qo(e,t){const n=e.$$
null!==n.fragment&&(!function(e){const t=[],n=[]
ho.forEach((o=>-1===e.indexOf(o)?t.push(o):n.push(o))),n.forEach((e=>e())),ho=t}(n.after_update),nn(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Wo(e,t,n,o,r,i,a=null,s=[-1]){const c=to
io(e)
const u=e.$$={fragment:null,ctx:[],props:i,update:Vt,not_equal:r,bound:tn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:tn(),dirty:s,skip_bound:!1,root:t.target||c.$$.root}
a&&a(u.root)
let l=!1
if(u.ctx=n?n(e,t.props||{},((t,n,...o)=>{const i=o.length?o[0]:n
return u.ctx&&r(u.ctx[t],u.ctx[t]=i)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](i),l&&function(e,t){-1===e.$$.dirty[0]&&(po.push(e),vo(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],u.update(),l=!0,nn(u.before_update),u.fragment=!!o&&o(u.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target)
u.fragment&&u.fragment.l(e),e.forEach(On)}else u.fragment&&u.fragment.c()
t.intro&&No(e.$$.fragment),Fo(e,t.target,t.anchor),$o()}io(c)}class Qo{$$=void 0
$$set=void 0
$destroy(){qo(this,1),this.$destroy=Vt}$on(e,t){if(!on(t))return Vt
const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[])
return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t
this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Jo=[]
function zo(e,t=Vt){let n
const o=new Set
function r(t){if(rn(e,t)&&(e=t,n)){const t=!Jo.length
for(const t of o)t[1](),Jo.push(t,e)
if(t){for(let e=0;e<Jo.length;e+=2)Jo[e][0](Jo[e+1])
Jo.length=0}}}function i(t){r(t(e))}return{set:r,update:i,subscribe:function(a,s=Vt){const c=[a,s]
return o.add(c),1===o.size&&(n=t(r,i)||Vt),a(e),()=>{o.delete(c),0===o.size&&n&&(n(),n=null)}}}}function Ko(e,t,n){const o=!Array.isArray(e),r=o?[e]:e
if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const i=t.length<2
return function(e,t){return{subscribe:zo(e,t).subscribe}}(n,((e,n)=>{let a=!1
const s=[]
let c=0,u=Vt
const l=()=>{if(c)return
u()
const r=t(o?s[0]:s,e,n)
i?e(r):u=on(r)?r:Vt},f=r.map(((e,t)=>cn(e,(e=>{s[t]=e,c&=~(1<<t),a&&l()}),(()=>{c|=1<<t}))))
return a=!0,l(),function(){nn(f),u(),a=!1}}))}const Xo=zo("")
function Vo(e){const t=e-1
return t*t*t+1}function Yo(e,{delay:t=0,duration:n=400,easing:o=Yt}={}){const r=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:o,css:e=>"opacity: "+e*r}}function Zo(e,{delay:t=0,duration:n=400,easing:o=Vo,x:r=0,y:i=0,opacity:a=0}={}){const s=getComputedStyle(e),c=+s.opacity,u="none"===s.transform?"":s.transform,l=c*(1-a),[f,d]=wn(r),[p,g]=wn(i)
return{delay:t,duration:n,easing:o,css:(e,t)=>`\n\t\t\ttransform: ${u} translate(${(1-e)*f}${d}, ${(1-e)*p}${g});\n\t\t\topacity: ${c-l*t}`}}function er(e,{delay:t=0,duration:n=400,easing:o=Vo,axis:r="y"}={}){const i=getComputedStyle(e),a=+i.opacity,s="y"===r?"height":"width",c=parseFloat(i[s]),u="y"===r?["top","bottom"]:["left","right"],l=u.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),f=parseFloat(i[`padding${l[0]}`]),d=parseFloat(i[`padding${l[1]}`]),p=parseFloat(i[`margin${l[0]}`]),g=parseFloat(i[`margin${l[1]}`]),h=parseFloat(i[`border${l[0]}Width`]),m=parseFloat(i[`border${l[1]}Width`])
return{delay:t,duration:n,easing:o,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*a};${s}: ${e*c}px;padding-${u[0]}: ${e*f}px;padding-${u[1]}: ${e*d}px;margin-${u[0]}: ${e*p}px;margin-${u[1]}: ${e*g}px;border-${u[0]}-width: ${e*h}px;border-${u[1]}-width: ${e*m}px;`}}function tr(e){let t,n,o,r,i,a,s
return{c(){t=Tn("div"),n=Tn("p"),o=Nn(e[0]),In(n,"class","svelte-zbl6pg"),In(t,"role","alert"),In(t,"class","svelte-zbl6pg"),Wn(t,"transform",e[2])},m(r,c){Pn(r,t,c),$n(t,n),$n(n,o),i=!0,a||(s=Bn(t,"click",e[4]),a=!0)},p(e,n){(!i||1&n)&&Fn(o,e[0]),4&n&&Wn(t,"transform",e[2])},i(e){i||(e&&_o((()=>{i&&(r||(r=Bo(t,Zo,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1))})),i=!0)},o(e){e&&(r||(r=Bo(t,Zo,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0)),i=!1},d(e){e&&On(t),e&&r&&r.end(),a=!1,s()}}}function nr(e){let t,n=e[1]&&tr(e)
return{c(){n&&n.c(),t=Mn()},m(e,o){n&&n.m(e,o),Pn(e,t,o)},p(e,[o]){e[1]?n?(n.p(e,o),2&o&&No(n,1)):(n=tr(e),n.c(),No(n,1),n.m(t.parentNode,t)):n&&(Co(),Ao(n,1,1,(()=>{n=null})),To())},i(e){No(n)},o(e){Ao(n)},d(e){e&&On(t),n&&n.d(e)}}}function or(e,t,n){let o
ln(e,Xo,(e=>n(0,o=e)))
let{ms:r=3e3}=t,i=!1,a=0,s=""
const c=(e,t)=>{clearTimeout(a),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
n(2,s=`translate(${t}px, ${e.offsetTop}px)`),n(1,i=!0)}(),t>0&&(a=setTimeout((()=>{var e
n(1,i=!1),o="",e=o,Xo.set(e)}),t))):n(1,i=!1)}
uo((()=>clearTimeout(a)))
return e.$$set=e=>{"ms"in e&&n(3,r=e.ms)},e.$$.update=()=>{9&e.$$.dirty&&c(o,r)},[o,i,s,r,()=>{n(1,i=!1)}]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class rr extends Qo{constructor(e){super(),Wo(this,e,or,nr,rn,{ms:3})}}let ir
function ar(e){e&&(!function(){if(!ir)ir=!0,new rr({target:document.body})}(),Xo.set(e))}function sr(e,t){return Array.from(e,t)}function cr(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function ur(e,t){return sr(cr(e,t))}function lr(e){return"string"==typeof e}function fr(e){return e.trim()}function dr(e){const t=o(e)
if(lr(t))return fr(t)}function pr(e,t){return dr(t).includes(e)}function gr(e,...t){return(...n)=>e(...t,...n)}let hr,mr,yr,br,vr,wr,_r=0,kr=0,jr=0
function xr(){return _r||(_r=n("pCL")),_r}function Sr(){return kr||(kr=n("pCC")),kr}function $r(){const e=ur("a",xr()).filter(function(e){return gr(pr,e)}("message"))
e.length&&async function(){const e=new Audio(Nt("defaultMessageSound"))
try{await e.play()}catch(e){ar("Message Sound Not Allowed")}}()}function Lr(e,t,n){y()||ga("fshApp.send","event",e,t,n)}function Er(e){return"boolean"==typeof e}function Pr(e,t,n,o){var r
H(e,t,n,{once:!0,...(r=o,Er(r)?{capture:r}:r)})}function Or(e){mr=e.clientX,yr=e.clientY}function Cr(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(hr,null).transform)
br=e[0]-mr,vr=e[1]-yr}function Tr(e){e.clientX===mr&&e.clientY===yr||(hr.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+br).toString()}, ${(e.clientY+vr).toString()})`,Or(e))}function Nr(e){return function(e){const t=performance.now()
t-wr>16&&(Tr(e),wr=t)}(e),e.preventDefault(),!1}function Ar(e){return Tr(e),function(e,t,n,o){e instanceof EventTarget&&e.removeEventListener(t,n,o)}(document.body,"dragover",Nr),e.preventDefault(),!1}function Mr(e,t){!function(e,t){hr=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),Or(t),Cr(),wr=0,t.dataTransfer.setData("text/plain",""),H(document.body,"dragover",Nr),Pr(document.body,"drop",Ar)}function Br(e,t){e.draggable=!0,H(e,"dragstart",gr(Mr,t))}function Hr(e){return Object.entries(e)}function Rr(e,t,[n,o]){j(o)&&null!==o?e(t[n],o):t[n]=o}function Ir(e,t){Hr(t).forEach(gr(Rr,Ir,e))}function Dr(e,t){const n=document.createElement(e)
return t&&Ir(n,t),n}function Ur(e){return Dr("div",e)}function Gr(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Fr(e,t){return sr(Gr(e,t))}function qr(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Wr(e,t){t instanceof Element&&(t.innerHTML=String(e))}function Qr(e){let t=n("content")
t?Wr("",t):(t=Ur({id:"content",style:{display:"none"}}),qr(document.body,t)),$(t).dialog({width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}),Fr("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(t)}async function Jr(e){(await e).default()}function zr(){Jr(import("./buffLog-IGESMxmi.js"))}function Kr(){Jr(import("./combatLog-sgs9EHOG.js"))}function Xr(){Jr(import("./creatureLog-DrBUT1pL.js"))}function Vr(){Jr(import("./fsboxlog-CmHH5-Wg.js"))}function Yr(){Jr(import("./guildLog-Djjpl8VI.js"))}function Zr(){Jr(import("./guildTracker-DsxRntvo.js"))}async function ei(e){(await import("./injectAuctionSearch-Bv1C_pba.js")).default(e)}async function ti(e){(await import("./findBuffs-1er0Pq_Y.js")).injectFindBuffs(e)}async function ni(e){(await import("./findBuffs-1er0Pq_Y.js")).injectFindOther(e)}async function oi(e){(await import("./injectOnlinePlayers-CXjZROFA.js")).default(e)}function ri(){Jr(import("./potReport-BceA6le3.js"))}function ii(){Jr(import("./quickExtract-acneHzQg.js"))}function ai(){Jr(import("./quickLinksManager-DenzgQkq.js"))}async function si(e){(await import("./quickWear-DeAULprD.js")).default(e)}function ci(){Jr(import("./recipeMgr-CynS3IbF.js"))}function ui(){Jr(import("./reliclist-xq5oHF3i.js"))}function li(){Jr(import("./superelite-rPLVoS9_.js"))}function fi(e){return new Promise((t=>{setTimeout(t,e)}))}function di(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class pi extends Error{constructor([e,t,n,o],...r){super(function(e,t,n,o){const r=`${t.status} ${t.statusText} - `
if(t.statusText===o.toString())return r+di(e)
const i=`${r+n} ${o} - ${di(e)}`
return"parsererror"===n?`${i} - ${t.responseText}`:i}(e,t,n,o),...r),Error.captureStackTrace&&Error.captureStackTrace(this,pi),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=o}}function gi(e){H(window,"beforeunload",(()=>e.abort()))}const hi=900
let mi=0
const yi=5
let bi=0
async function vi(){bi<yi-$.active&&performance.now()-mi>=hi?(bi=yi-$.active,mi=performance.now()):await fi(100)}async function wi(e,t=10){await async function(){for(;bi<1;)await vi()
bi-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=gi,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return wi(e,t-1)
!function(e,t){if(0!==t.status)throw new pi([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function _i(e){return Ir(e,{url:Z,data:{no_mobile:1}}),wi(e)}async function ki(e){return x(await _i({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function ji(e){return ki({cmd:"export",...e})}function xi(){return ji({inc_tagged:"1",subcmd:"guild_store"})}let Si,$i=0
function Li(e){const t=i(/\sguildId: (?<id>\d{1,6}),/,o(e))
t&&($i=Number(t))}function Ei(){return $i||ur("script",document.body).forEach(Li),$i}function Pi(e){return Dr("a",e)}function Oi(e){e instanceof Element&&e.click()}function Ci(e,t){const n=URL.createObjectURL(e),o=Pi({download:t,href:n,style:{display:"none"}})
qr(document.body,o),Oi(o),document.body.removeChild(o),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function Ti(e,t){return x(await wi({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function Ni(e){return Ti(e,{method:"POST"})}function Ai(e,t){const n=[]
for(let o=0;o<t.length;o+=e)n.push(t.slice(o,o+e))
return n}function Mi(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function Bi(){return Si||(Si=function(e,t){const n=indexedDB.open(e)
n.onupgradeneeded=()=>n.result.createObjectStore(t)
const o=Mi(n)
return(e,n)=>o.then((o=>n(o.transaction(t,e).objectStore(t))))}("keyval-store","keyval")),Si}const Hi=e=>{e&&"NotFoundError"!==e.name&&C.notify(e)}
async function Ri(e,t){try{return await function(e,t=Bi()){return t("readonly",(t=>Mi(t.get(e))))}(e,t)}catch(e){Hi(e)}}async function Ii(e,t,n){try{return await function(e,t,n=Bi()){return n("readwrite",(n=>(n.put(t,e),Mi(n.transaction))))}(e,t,n)}catch(e){Hi(e)}}const Di=({folder_id:e})=>-2!==(e??-2),Ui=({folder_id:e})=>-2===e,Gi=({player_id:e})=>-1!==(e??-1),Fi=({player_id:e})=>e,qi=({player_id:e})=>-1===e,Wi=([e,t,n])=>Ai(20,e).map((e=>[e,t,n])),Qi=e=>({inv_id:t})=>t===e.inv_id,Ji=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,zi=(e,t)=>({...t,armor:Ji(e,2),attack:Ji(e,0),damage:Ji(e,4),defense:Ji(e,1),hp:Ji(e,3),set_name:e.set_name??""}),Ki=(e,t)=>t.forge||t.stats?.set_name,Xi=e=>e?.s?e.r.items:[],Vi=e=>[[e.filter(Di),s,0],[e.filter(Ui),s,1],[e.filter(Gi),Fi,7],[e.filter(qi),s,4]].flatMap(Wi)
function Yi(e){return function(){const t=this.data(),n=e.find(Qi(t))
n?.attributes&&(t.stats=zi(n,t.stats),this.invalidate())}}const Zi=async()=>await Ri(`fsh_${f.subcmd}_cache`)??[],ea=e=>Ii(`fsh_${f.subcmd}_cache`,e),ta=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function na(e,t,n){const o=await(r={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},Ni({cmd:"fetchitem",compare:0,...r}))
var r
return o?.s&&(o.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,o.r.items),await async function(e){const t=(await Zi()).filter(ta(e))
await ea(t.concat(e))}(o.r.items)),o}const oa=(e,t)=>{return t.filter((n=sr(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function ra(e){const t=e.rows(Ki),n=await async function(e){const t=await Zi(),n=oa(e,t)
return await ea(n),n}(t)
t.every(Yi(n))}async function ia(e){const t=new DataTable(e)
await ra(t),t.draw()}const aa=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],sa=e=>{return[...aa(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function ca(e){return()=>Qr(e)}var ua=[{section:"Character",menu:[{label:"Buff Log",fn:zr},{label:"Combat Log",fn:Kr},{label:"Creature Log",fn:Xr},{label:"Recipe Manager",fn:ci},{label:"Quick Links",fn:ai},{label:"Inventory Manager",href:`${ge}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:ca(ti)},{label:"Find Other",fn:ca(ni)},{label:"Online Players",fn:ca(oi)},{label:"AH Quick Search",fn:ca(ei)}]},{section:"Guild",menu:[{label:"Guild Inventory",href:`${ge}guildinvmgr`},{label:"New Guild Log",fn:Yr},{label:"Merc Hunter",fn:function(){Jr(import("./mercs-DgEfVRyC.js"))}},{label:"Pot Report",fn:ri},{label:"Guild Tracker",fn:Zr}]},{section:"Extra",menu:[{label:"Quick Extract",fn:ii},{label:"Quick Wear",fn:ca(si)},{label:"FS Box Log",fn:Vr},{label:"SE Tracker",fn:li}]},{section:"Beta Features",menu:[{label:"Relic List",fn:ui,beta:!0},{label:"GS Export",fn:async function(){if(!Ei())return
const e=await xi(),t=await Ri("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:Ji(n,2),attack:Ji(n,0),damage:Ji(n,4),defense:Ji(n,1),hp:Ji(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:Ji(n.set_bonuses,2)},...n.set_name&&{set_attack:Ji(n.set_bonuses,0)},...n.set_name&&{set_damage:Ji(n.set_bonuses,4)},...n.set_name&&{set_defense:Ji(n.set_bonuses,1)},...n.set_name&&{set_hp:Ji(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var o
Ci((o=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(sa).join("\n"))(n)}\n`,new Blob([o],{type:"text/csv"})),"gs_export.csv")},beta:!0}]},{section:"Dev Links",menu:[{label:"Combat Set Manager",fn:function(){Jr(import("./setmgr-Duzzw1qB.js"))},beta:!0},{label:"Quest Book",fn:function(){Jr(import("./questbook-Bzlr_QPi.js"))}},{label:"New Quick Wear",fn:function(){Jr(import("./quickwear-Ds5j2QpC.js"))}}]},{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}]
function la(e,t,n){const o=e.slice()
return o[10]=t[n],o}function fa(e,t,n){const o=e.slice()
return o[13]=t[n],o}function da(e){let t,n,o,r=Ho(ua),i=[]
for(let t=0;t<r.length;t+=1)i[t]=ba(la(e,r,t))
return{c(){t=Tn("div")
for(let e=0;e<i.length;e+=1)i[e].c()
In(t,"id","modal"),In(t,"class","svelte-18rcvh1")},m(e,n){Pn(e,t,n)
for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,null)
o=!0},p(e,n){if(112&n){let o
for(r=Ho(ua),o=0;o<r.length;o+=1){const a=la(e,r,o)
i[o]?i[o].p(a,n):(i[o]=ba(a),i[o].c(),i[o].m(t,null))}for(;o<i.length;o+=1)i[o].d(1)
i.length=r.length}},i(e){o||(e&&_o((()=>{o&&(n||(n=Bo(t,Yo,{duration:100},!0)),n.run(1))})),o=!0)},o(e){e&&(n||(n=Bo(t,Yo,{duration:100},!1)),n.run(0)),o=!1},d(e){e&&On(t),Cn(i,e),e&&n&&n.end()}}}function pa(e){let t,n,o,r,i
function a(){return e[9](e[13])}return{c(){t=Tn("button"),t.textContent="PM",n=An(),o=Tn("a"),o.textContent=`${e[13].playerName}`,In(t,"type","button"),In(t,"class","helperDevBtn svelte-18rcvh1"),In(o,"href",ue+"menuItem.playerId"),In(o,"class","svelte-18rcvh1")},m(e,s){Pn(e,t,s),Pn(e,n,s),Pn(e,o,s),r||(i=Bn(t,"click",a),r=!0)},p(t,n){e=t},d(e){e&&(On(t),On(n),On(o)),r=!1,i()}}}function ha(e){let t,n,o
function r(){return e[8](e[13])}return{c(){t=Tn("a"),t.textContent=`${e[13].label}`,In(t,"href",e[13].href),In(t,"class","svelte-18rcvh1")},m(e,i){Pn(e,t,i),n||(o=Bn(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&On(t),n=!1,o()}}}function ma(e){let t,n,o
function r(){return e[7](e[13])}return{c(){t=Tn("button"),t.textContent=`${e[13].label}`,In(t,"type","button"),In(t,"class","svelte-18rcvh1")},m(e,i){Pn(e,t,i),n||(o=Bn(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&On(t),n=!1,o()}}}function ya(e){let t,n
let o=function(e,t){return e[13].fn?ma:e[13].href?ha:e[13].playerName?pa:void 0}(e),r=o&&o(e),i=e[13].beta&&function(e){let t
return{c(){t=Tn("sup"),t.textContent="beta",In(t,"class","fshRed")},m(e,n){Pn(e,t,n)},d(e){e&&On(t)}}}()
return{c(){t=Tn("li"),r&&r.c(),n=An(),i&&i.c()},m(e,o){Pn(e,t,o),r&&r.m(t,null),$n(t,n),i&&i.m(t,null)},p(e,t){r&&r.p(e,t)},d(e){e&&On(t),r&&r.d(),i&&i.d()}}}function ba(e){let t,n,o,r,i=Ho(e[10].menu),a=[]
for(let t=0;t<i.length;t+=1)a[t]=ya(fa(e,i,t))
return{c(){t=Tn("h2"),t.textContent=`${e[10].section}`,n=An(),o=Tn("ul")
for(let e=0;e<a.length;e+=1)a[e].c()
r=An(),In(t,"class","svelte-18rcvh1")},m(e,i){Pn(e,t,i),Pn(e,n,i),Pn(e,o,i)
for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(o,null)
$n(o,r)},p(e,t){if(112&t){let n
for(i=Ho(e[10].menu),n=0;n<i.length;n+=1){const s=fa(e,i,n)
a[n]?a[n].p(s,t):(a[n]=ya(s),a[n].c(),a[n].m(o,r))}for(;n<a.length;n+=1)a[n].d(1)
a.length=i.length}},d(e){e&&(On(t),On(n),On(o)),Cn(a,e)}}}function va(e){let t,n,o,r,i,a=e[0]&&da(e)
return{c(){t=Tn("div"),n=Tn("button"),n.textContent="Helper Menu",o=An(),a&&a.c(),In(n,"type","button"),In(n,"id","toggle"),In(n,"class","svelte-18rcvh1"),Vn(n,"helperMenuMove",e[2]),In(t,"id","helperMenu"),In(t,"class","svelte-18rcvh1"),Vn(t,"helperMenuFixed",e[1])},m(s,c){Pn(s,t,c),$n(t,n),$n(t,o),a&&a.m(t,null),r||(i=Bn(n,"click",e[3]),r=!0)},p(e,[n]){e[0]?a?(a.p(e,n),1&n&&No(a,1)):(a=da(e),a.c(),No(a,1),a.m(t,null)):a&&(Co(),Ao(a,1,1,(()=>{a=null})),To())},i(e){No(a)},o(e){Ao(a)},d(e){e&&On(t),a&&a.d(),r=!1,i()}}}function wa(e,t,n){const o=Nt("keepHelperMenuOnScreen"),r=Nt("draggableHelperMenu")
so((()=>{r&&Br(S("#helperMenu"))}))
let i=!1
function a(){n(0,i=!i)}function s(e){Lr("helperMenu",e)}function c(e,t){k(t)&&(s(e),a(),t())}function u(e){a(),s("sendMsg"),openQuickMsgDialog(e)}return[i,o,r,a,s,c,u,e=>c(e.label,e.fn),e=>s(e.label),e=>u(e.playerName)]}class _a extends Qo{constructor(e){super(),Wo(this,e,wa,va,rn,{})}}function ka(){const e=S(".mainbody")
e&&function(e,t){new _a({target:t.parentElement,props:{props:e}})}({},e)}function ja(e){return(new DOMParser).parseFromString(e,"text/html")}function xa(e){return _i({data:e})}async function Sa(e){const t=await xa(e)
if(t)return ja(t)}function $a(e){const t=n("info-msg",e)
if(t){const e=t.innerHTML
return e?e.replace(/<br.*/,""):""}}function La(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(_t+e,t+n)}const Ea=[[lr,(e,t)=>{La(e,"S]",t)}],[function(e){return"number"==typeof e},(e,t)=>{t.toString().indexOf(".")<0&&La(e,"N]",t)}],[Er,(e,t)=>{La(e,"B]",t)}]]
function Pa(e,t){const n=Ea.find((e=>e[0](t)))
n&&n[1](e,t)}let Oa=0
const Ca=()=>Oa
function Ta(){Oa=Nt("sendGoldonWorld")}async function Na(){if(!Ca())return
Lr("NewMap","doSendGold")
const e=await Sa({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")})
e&&function(e){const t=$a(e)
"You successfully sent gold!"!==t&&""!==t||(Pa("currentGoldSentTotal",parseInt(Nt("currentGoldSentTotal"),10)+parseInt(Nt("goldAmount"),10)),GameData.fetch(Ye))}(e)}function Aa(e){window.location=e}function Ma(e){Nt("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function Ba(e){Lr("keyHandler",e)}function Ha(e){return e?.toLowerCase?.()}function Ra(e,t){return Ha(e)<Ha(t)?-1:Ha(e)>Ha(t)?1:0}function Ia(e){return Ti(e,{method:"GET"})}function Da(e){return Ia({cmd:"profile",...e})}async function Ua(){const e=await Da({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>Ra(e.name,t.name)))}:e}function Ga(e,t,...n){return e(...n)}function Fa(){return Ga(Ua)}const qa=[e=>e?.s,(e,t)=>e.r?.length>t]
async function Wa(e){const t=await Fa()
if(((e,t)=>qa.every((n=>n(t,e))))(e,t)){Ba("changeCombatSet")
const n=t.r[e].id
Ma("2"),Aa(`${ce+ne}managecombatset&submit=Use&combatSetId=${n}`)}}function Qa(e,t){n("worldPage")||(Ba(e),Aa(t))}function Ja(){f.enableMaxGroupSizeToJoin?Aa(xe):Aa(je)}function za(){Ba("logPage"),Ma("2"),Aa(ae)}function Ka(e){const t=S(`#pCC input[value="${e}"]`)
t&&(Ba("movePage"),Oi(t))}const Xa=[["!",Wa,0],["@",Wa,1],['"',Wa,1],["#",Wa,2],["£",Wa,2],["$",Wa,3],["%",Wa,4],["^",Wa,5],["&",Wa,6],["*",Wa,7],["(",Wa,8],["0",function(){Qa("toWorld",Se)}],["<",Ka,"<"],[">",Ka,">"],["G",function(){Ba("createGroup"),Ma("4"),Aa(`${we}create`)}],["L",za],["b",function(){Ba("backpack"),Ma("2"),Aa(le)}],["g",function(){Ba("gotoGuild"),Ma("4"),Aa(`${ye}manage`)}],["j",function(){Ba("joinAllGroup"),Ma("4"),Ja()}],["l",za],["p",function(){Ba("profile"),Ma("2"),Aa(ce)}],["r",function(){Qa("doRepair",`${Ee+ne}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in f&&!f.dialogIsClosed()||(Ba("insertQuickWear"),Qr(si))}],["y",Na]]
const Va=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function Ya(e){var t;(t=e,Va.some((e=>e(t))))||function(e){const t=Xa.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function Za(){H(document,"keyup",Ya)}function es(e,t){return dr(t)===e}function ts(e){return gr(es,e)}function ns(e,t,n){H(e,"click",t,n)}function os(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function rs(e,t){return sr(os(e,t))}function is(e){ns(e,(()=>{Lr("chrome","Game Help link")})),Wr(`<a href="${te}settings">Game Help</a>`,e)}function as(){rs("#pCR h3").filter(ts("Game Help")).forEach(is)}function ss(e){f[e]=Nt(e)}function cs(e,t){if(t instanceof Element)return t.closest(e)}function us(e){e?.classList&&e.classList.add("fshHide")}function ls(e){const t=cs("a",e.target)
t?.getAttribute("href")===be&&(Lr("useNewGuildLog","Alter Href"),e.preventDefault(),Yr(),us(n("notification-guild-log")))}function fs(e){e.forEach((e=>zt(3,e)))}function ds(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function ps(){return k(window.jQuery)}function gs(){return!ps()}var hs=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function ms(e){return function(e){return-1!==e&&0===S(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(Lr("accordion","collapse"),-1):e}const ys=(e,t,n)=>$(e).data(`${n}${t}`)
function bs(e,t,n){return new Promise((o=>{const r=ys(e,t,n)
r?o(r):function(e,t,n,o){$(e).on(`${Ha(t)}create`,(()=>{o(ys(e,t,n))}))}(e,t,n,o)}))}const vs=[[e=>!j(e),()=>At("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>At("$('#nav').data('hcsNav').heights does not exist")]]
async function ws(){const e=n("nav"),t=await bs(e,"Nav","hcs")
return function(e){const t=vs.find((([t])=>t(e)))
return!t||(t[1](),!1)}(t)?{theNav:e,myNav:t}:{}}function _s(){!function(){const e=Nt("lastActiveQuestPage")
Nt("storeLastQuestPage")&&e.length>0&&(n("nav-character-questbook").href=e)}(),function(){const e=Nt("lastScavPage")
Nt("storeLastScavPage")&&e.length>0&&(n("nav-actions-artisanship-scavenging").href=e)}()}async function ks(){const{theNav:e,myNav:t}=await ws()
e&&t&&(_s(),async function(e,t){const n=hs.map((e=>[e,Nt(e)]))
n.some((([,e])=>e))&&(await import("./injectItems-D1CWKFDR.js")).default(e,t,ds(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,ms(n))}}(t))}function js(e,t){return t?.classList?.contains(e)}function xs(e,t){t instanceof Node&&(t.textContent=String(e))}let Ss
function $s(){return Ss||(Ss=n("quickMessageDialog")),Ss}let Ls,Es=0
function Ps(e){(function(){if(!Es){const e=Gr("validateTips",$s())
1===e.length&&([Es]=e)}return Es})()&&xs(Mt(e,""),Es)}function Os(){return Ls||(Ls=n("quickMsgDialog_msg"),Ls.maxLength=512),Ls}let Cs,Ts=null,Ns=0,As=0
function Ms(e){"Enter"!==e.key||e.shiftKey||(Lr("messaging","sendOnEnter"),e.preventDefault(),function(){if(!As){const e=$($s()).dialog("option","buttons")
As=e["Send Message"]}return As}()())}function Bs(){R(Ts)&&(Ts=Nt("enterForSendMessage")),Ts&&!Ns&&(H(Os(),"keypress",Ms),Ns=!0)}function Hs(e,t){return js(t[0],e)}function Rs(e,t,n){const{target:o}=n,r=t.find(gr(e,o))
if(r)return r[1](o)}function Is(e){return gr(Rs,Hs,e)}function Ds(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function Us(e,t){Ds(e,"beforeend",t)}function Gs(e,t){if("string"==typeof t){const e=r(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function Fs(e){const t=Nt(e)
if(t)return x(t,Gs)}function qs(e,t,n){return JSON.stringify(e,t,n)}function Ws(e,t){Pa(e,qs(t))}let Qs=0,Js=0,zs=0
function Ks(e,t,n){const o=Js.insertRow(e)
let r=o.insertCell(-1)
Us(r,t),r=o.insertCell(-1),Us(r,n)}function Xs(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function Vs(e,t){Ks(e,Xs("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const Ys=[["del-button",function(e){Lr("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
Js.deleteRow(t),Qs.splice(t-2,1),Ws("quickMsg",Qs)}],["add-button",function(e){Lr("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){Vs(e.parentNode.parentNode.rowIndex,n),t.value="",Qs.push(n),Ws("quickMsg",Qs)}}],["add-template",function(e){Lr("messaging","insertTemplate"),Os().value+=`${o(e).replace(/\{playername\}/g,Cs)}`}]]
function Zs(e){Vs(-1,e)}function ec(){Nt("enableMessageTemplates")&&!zs&&(ns((Js||(Js=$s().lastElementChild),Js),Is(Ys)),(Qs||(Qs=Fs("quickMsg")),Qs).forEach(Zs),Ks(-1,Xs("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),zs=!0)}function tc(e,t,o){const r=$s()
js("ui-dialog-content",r)&&(!function(e){Cs=e,xs(e,n("quickMsgDialog_targetUsername"))}(e),function(e){const t=Os()
t.value=Mt(e,""),t.disabled=!1}(t),Ps(o),ec(),Bs(),$(r).dialog("open"))}function nc(e){const t=n(e)
t&&(t.classList.add("pCR"),qr(xr(),t))}function oc(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function rc(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?oc(t,e.firstChild):qr(e,t)}(e,t)}function ic(e){const t=n(e)
t&&rc((jr||(jr=n("pCR")),jr),t)}const ac=[function(){Nt("moveGuildList")&&ic("minibox-guild")},function(){Nt("moveOnlineAlliesList")&&ic("minibox-allies")},function(){Nt("moveXmasBox")&&nc("minibox-xmas")},function(){Nt("moveDailyQuest")&&nc("minibox-daily-quest")},function(){Nt("moveFSBox")&&nc("minibox-fsbox")},function(){(f.enableAllyOnlineList||f.enableEnemyOnlineList)&&Jr(import("./allyEnemy-9YOlLwrA.js"))},function(){(f.enableWantedList||f.enableActiveBountyList)&&Jr(import("./activeWantedBounties-DV_BYKWJ.js"))},function(){f.enableGuildInfoWidgets&&Jr(import("./addGuildInfoWidgets-B3QiuWlT.js"))},function(){f.enableOnlineAlliesWidgets&&Jr(import("./addOnlineAlliesWidgets-C3aShQkR.js"))},function(){f.enableTempleAlert&&Jr(import("./injectTempleAlert-D8JjbGDo.js"))},function(){f.enableUpgradeAlert&&Jr(import("./injectUpgradeAlert-BVfpTlVN.js"))},function(){f.enableComposingAlert&&Jr(import("./injectComposeAlert-CRu6pX9N.js"))},function(){xr()&&!gs()&&ks()},function(){gs()||(window.openQuickMsgDialog=tc)},function(){Nt("statBarLinks")&&Jr(import("./statBar-DM1Nh6ea.js"))},function(){Nt("staminaCalculator")&&Jr(import("./injectStaminaCalculator-C1ywOLrY.js"))},function(){Nt("levelUpCalculator")&&Jr(import("./injectLevelupCalculator-6FghEHEL.js"))},function(){Nt("fsboxlog")&&Jr(import("./fsbox-C5dTSVdw.js"))},function(){Nt("resizeQuickBuff")&&Jr(import("./interceptQuickBuff-BlYU20zm.js"))},function(){Nt("joinAllLink")&&Jr(import("./injectJoinAllLink-BjzrE-Gq.js"))},function(){Nt("addServerNode")&&Jr(import("./injectServerNode-CN8fw4H9.js"))},function(){Nt("addScoutTowerLink")&&Jr(import("./scoutTowerLink-BoHqb5eu.js"))},function(){ps()&&Nt(at)&&Jr(import("./guildActivity-CZw4b4-w.js"))},async function(){if(ps()&&f.enableSeTracker){(await import("./trackerPrefStore-DtlFLhRN.js").then((function(e){return e.a}))).default.set(f.enableSeTracker)}}]
const sc=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function cc(){f.huntingMode||(sc.forEach(ss),f.allyEnemyOnlineRefreshTime=1e3*Nt("allyEnemyOnlineRefreshTime"),f.useNewGuildLog&&(H(document.body,"click",ls),H(document.body,"auxclick",ls)),fs(ac))}function uc(e){const t=x(e)
t?.["new-ui"]&&(Nt("gameHelpLink")&&zt(3,as),f.huntingMode=Nt("huntingMode"),zt(3,Za),cc(),Nt("hideHelperMenu")||zt(3,ka))}function lc(){const e=function(){const e=n("html")
if(e?.dataset)return e.dataset.hcs}()
e&&uc(e)}function fc(){ps()&&n("worldPage")&&window.GameData&&Jr(import("./newMap-C4of0ifx.js"))}function dc(e){$(e).qtip("hide")}function pc(e){Pa("needToPray",e),Pa("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}let gc=0
const hc='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',mc=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${te}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
async function yc(e){const t=e.target.getAttribute("praytype")
t&&(Lr("notification","prayToGods"),dc(e.target),await xa({cmd:"temple",subcmd:"pray",type:t}),gc.outerHTML=hc,pc(!1))}function bc(){Us(n("notifications"),mc),gc=n("helperPrayToGods"),Pr(gc,"click",yc)}async function vc(){if(!f.enableTempleAlert)return
const e="temple"===f.cmd?document:await Sa({cmd:"temple"})
if(!e)return
const t=S("#pCC",e)
if(!t)return
const n="You are currently praying at the temple."!==dr(t)
n&&bc(),pc(n)}function wc(){Jr(import("./bioWidgets-CtVmXypb.js"))}function _c(){Jr(import("./injectGuild-D9xJZbQe.js"))}const kc=()=>{Jr(import("./guildAdvisor-bQ0C4Nn-.js"))}
const jc=()=>{Jr(import("./groups-DBYAlEkX.js"))}
const xc=()=>{Jr(import("./addRemoveTags-CCLl4E8f.js"))}
const Sc=()=>{Jr(import("./guildChat-Cysf1bZ6.js"))}
function $c(){Jr(import("./viewRecipe-N5HheJU2.js"))}function Lc(){Jr(import("./ufsgAllowBack-Cbq56bcA.js"))}function Ec(){Jr(import("./profile-DIZG4-PV.js").then((function(e){return e.p})))}function Pc(){Jr(import("./news-DNOWQVNs.js"))}function Oc(){Jr(import("./viewArchive-DJ10odZZ.js"))}const Cc=()=>{Jr(import("./inventory-BfZOHEU9.js"))},Tc=()=>{Jr(import("./bazaar-CdwC7vl-.js"))}
function Nc(){Jr(import("./injectQuestBookFull-H1sLQZz6.js"))}const Ac=()=>{Jr(import("./scavenging-Do0_ofOT.js"))}
const Mc=()=>{Jr(import("./toprated-D70q6GlV.js"))}
const Bc=()=>{Jr(import("./trade-CrVM5pz2.js"))}
var Hc={creatures:{"-":{"-":Lc}},items:{"-":{"-":Lc},view:{"-":()=>{Jr(import("./itemsView-BZukclN2.js"))}}},masterrealms:{"-":{"-":Lc}},quests:{"-":{"-":Lc},view:{"-":()=>{Jr(import("./showAllQuestSteps-COSWQ_rF.js"))}}},realms:{"-":{"-":Lc}},relics:{"-":{"-":Lc}},shops:{"-":{"-":Lc}},"-":{news:{"-":Pc},viewupdatearchive:{"-":Oc},viewarchive:{"-":Oc},"-":{"-":()=>{Jr(import("./unknownPage-BBBU1P9r.js"))}}},arena:{"-":{"-":()=>{Jr(import("./arena-nOw4GvWz.js").then((function(e){return e.c})))}},dojoin:{"-":()=>{Jr(import("./arenaDoJoin-D-U_NZNW.js"))}},join:{"-":()=>{Jr(import("./arenaJoin-kpym6pp5.js"))}},completed:{"-":()=>{Jr(import("./completedArenas-qiJAfgQh.js"))}},pickmove:{"-":()=>{Jr(import("./storeMoves-B5XnTso8.js"))}},setup:{"-":()=>{Jr(import("./setupMoves-DA-wXZ3_.js"))}}},auctionhouse:{"-":{"-":()=>{Jr(import("./injectAuctionHouse-CKk0L0YQ.js"))}},quickcreate:{"-":()=>{Jr(import("./quickCreate-CNba4bw5.js"))}}},bank:{"-":{"-":()=>{Jr(import("./injectBank-BVYFjw9I.js"))}}},blacksmith:{repairall:{"-":function(){Xt("fromworld")&&fc()}}},buffmarket:{"-":{"-":()=>{Jr(import("./injectBuffmarket-DHJMB3rF.js"))}}},combat:{attackplayer:{"-":Ec}},composing:{"-":{"-":()=>{Jr(import("./composing-Ck4yX8el.js"))}},breakdown:{"-":()=>{Jr(import("./breakdown-C7BjolJz.js"))}},create:{"-":()=>{Jr(import("./composingCreate-DYFk5FWL.js"))}}},findplayer:{"-":{"-":()=>{Jr(import("./findplayer-DKGPPKSR.js"))}}},guild:{inventory:{report:()=>{Jr(import("./guildReport-DRBBCwNE.js"))},addtags:xc,removetags:xc,storeitems:()=>{Jr(import("./storeitems-BiPfRBWN.js"))}},chat:{"-":Sc},dochat:{"-":Sc},log:{"-":()=>{Jr(import("./guildLog-ve20cyi8.js"))}},groups:{viewstats:()=>{Jr(import("./injectGroupStats-BafHojwA.js"))},joinallgroupsundersize:jc,joinall:jc,"-":jc},manage:{"-":_c},advisor:{"-":kc,weekly:kc},history:{"-":wc},view:{"-":_c},scouttower:{"-":()=>{Jr(import("./injectScouttower-6RNuCQGO.js"))}},mailbox:{"-":()=>{Jr(import("./guildMailbox-BJx30Yq2.js"))}},ranks:{"-":()=>{Jr(import("./rank-LR6eWDoN.js"))}},conflicts:{rpupgrades:()=>{Jr(import("./injectRPUpgrades-D2lgP7ZD.js"))}},bank:{"-":()=>{Jr(import("./injectGuildBank-CZSy6H1x.js"))}},hall:{"-":()=>{Jr(import("./hall-C38O-7wq.js"))},post:wc},"-":{"-":_c}},hellforge:{"-":{"-":()=>{Jr(import("./hellforge-rNkoBXJa.js"))}}},inventing:{"-":{"-":function(){Jr(import("./inventing-DiXN2bRr.js"))}},doinvent:{"-":$c},viewrecipe:{"-":$c}},log:{"-":{"-":()=>{Jr(import("./playerLog-sR4drPbT.js"))}}},marketplace:{createreq:{"-":()=>{Jr(import("./marketplace-XquXr-kX.js"))}}},news:{fsbox:{"-":()=>{Jr(import("./newsFsbox-C_y95aJY.js"))}},"-":{"-":Pc},shoutbox:{"-":()=>{Jr(import("./newsShoutbox-DKiBynFo.js"))}},viewupdatearchive:{"-":Oc},viewarchive:{"-":Oc}},notepad:{showlogs:{"-":Kr},invmanagernew:{"-":Cc},guildinvmgr:{"-":Cc},recipemanager:{"-":ci},auctionsearch:{"-":ei},onlineplayers:{"-":oi},quicklinkmanager:{"-":ai},monsterlog:{"-":Xr},quickextract:{"-":ii},quickwear:{"-":si},fsboxcontent:{"-":Vr},bufflogcontent:{"-":zr},newguildlog:{"-":Yr},findbuffs:{"-":ti},findother:{"-":ni},savesettings:{"-":()=>{Jr(import("./load-Cd823YDE.js"))}},reliclist:{"-":ui},whosgotwhat:{"-":()=>{}}},points:{"-":{"-":()=>{Jr(import("./points-BIjn6403.js"))}}},potionbazaar:{"-":{"-":Tc},buyitem:{"-":Tc}},privatemessage:{"-":{"-":()=>{Jr(import("./privateMsg-BMRESkOO.js"))}}},profile:{"-":{"-":Ec},managecombatset:{"-":Ec},report:{"-":Ec},equipitem:{"-":Ec},useitem:{"-":Ec},changebio:{"-":wc},dropitems:{"-":function(){Jr(import("./injectProfileDropItems-DqlfJtAK.js"))}}},pvpladder:{"-":{"-":()=>{Jr(import("./ladder-YQtScYPW.js"))}}},questbook:{"-":{"-":Nc},atoz:{"-":Nc},viewquest:{"-":()=>{Jr(import("./injectQuestTracker-C1EzZClg.js"))}}},quickbuff:{"-":{"-":()=>{Jr(import("./quickBuff-D5nkAUt0.js"))}}},scavenging:{"-":{"-":Ac},process:{"-":Ac}},settings:{"-":{"-":()=>{Jr(import("./injectSettings-CDr6GdOv.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{Jr(import("./superelite-BgT8vjbK.js"))}}},tempinv:{"-":{"-":()=>{Jr(import("./mailbox-DTkTl-W5.js"))}}},temple:{"-":{"-":vc}},titan:{"-":{"-":()=>{Jr(import("./injectTitan-CvtO4C_d.js"))}}},toprated:{xp:{"-":Mc},monthlyxp:{"-":Mc},gold:{"-":Mc},killstreak:{"-":Mc},bounties:{"-":Mc},risingstars:{"-":Mc},arena:{"-":Mc},superelites:{"-":Mc},smasher:{"-":Mc},globalquest:{"-":()=>{Jr(import("./globalQuest-DLvM5s0b.js"))}}},trade:{"-":{"-":Bc},sendgold:{"-":Bc},createsecure:{"-":Bc},docreatesecure:{"-":Bc}},world:{"-":{"-":fc}}}
function Rc(e){return Dr("li",e)}function Ic(e){return Dr("ul",e)}const Dc=()=>Ur({className:"fshQuickLinks",style:{left:`${Nt("quickLinksLeftPx")}px`,top:`${Nt("quickLinksTopPx")}px`}}),Uc=e=>"newWindow"in e&&e.url&&e.name
function Gc(e,t){const n=qr(t,Ic())
e.filter(Uc).forEach((e=>{qr(qr(n,Rc()),function(e){const t=Pi({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return ns(t,(()=>Lr("chrome","quick link",e.name))),t}(e))}))}function Fc(){if(!S(".mainbody"))return
const e=Fs("quickLinks")||[]
e.length&&function(e){const t=Dc()
t.classList.toggle("fshFixed",Nt("keepHelperMenuOnScreen")),Nt("draggableQuickLinks")&&(t.classList.add("fshMove"),Br(t)),Gc(e,t),qr(document.body,t)}(e)}let qc=0,Wc=0,Qc=0,Jc="",zc=0,Kc=0
function Xc(e){return Xt(e)||"-"}function Vc(e){const t=S(e)
return t?.value||"-"}function Yc(){if(j(Hc[qc])&&j(Hc[qc][Wc])&&k(Hc[qc][Wc][Qc]))return Hc[qc][Wc][Qc]}function Zc(){""!==document.location.search?(qc=Xc("cmd"),Wc=Xc("subcmd"),Qc=Xc("subcmd2"),["points","privatemessage"].includes(qc)&&(Jc=`/${Xc("type")}`)):(qc=Vc('input[name="cmd"]'),Wc=Vc('input[name="subcmd"]'),Qc=Vc('input[name="subcmd2"]')),f.cmd=qc,f.subcmd=Wc,f.subcmd2=Qc,Kc=`${qc}/${Wc}/${Qc}${Jc}`,zc=Yc()}function eu(){k(zc)&&(b(Kc),w("JS Perf",Kc),zc(),_("JS Perf",Kc))}async function tu(e){w("JS Perf","FSH.runCore"),Zc(),await e,lc(),zt(3,eu),Nt("playNewMessageSound")&&zt(3,$r),f.huntingMode||zt(3,Fc),_("JS Perf","FSH.runCore")}const nu=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,h]
function ou(e,t){if(w("JS Perf","FSH.dispatch"),nu.some((e=>e())))return
const n=L("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
M(),function(e,t){f.gmInfo=x(decodeURIComponent(t)),f.gmInfo?f.fshVer=e:f.fshVer=`${e}_native`,f.calfVer="121"}(e,t),m(),tu(n),_("JS Perf","FSH.dispatch")}export{Ga as $,W as A,Ic as B,Hr as C,js as D,Ai as E,Ni as F,xa as G,ja as H,Et as I,Pt as J,os as K,Wo as L,rn as M,Ho as N,Tn as O,An as P,In as Q,_o as R,Qo as S,Pn as T,$n as U,Qn as V,qn as W,Bn as X,Rn as Y,Do as Z,Vt as _,Ia as a,fr as a$,On as a0,nn as a1,Fs as a2,Nn as a3,Fn as a4,Ro as a5,Jn as a6,Ws as a7,o as a8,xs as a9,Oi as aA,li as aB,l as aC,et as aD,Re as aE,Ie as aF,qe as aG,De as aH,dc as aI,s as aJ,Se as aK,ne as aL,Be as aM,D as aN,Ri as aO,ze as aP,Ii as aQ,wi as aR,x as aS,zt as aT,Gr as aU,mt as aV,ht as aW,bt as aX,yt as aY,vt as aZ,sr as a_,Xt as aa,ar as ab,Kr as ac,Xr as ad,Pa as ae,bs as af,f as ag,qs as ah,Nt as ai,Fr as aj,ve as ak,Er as al,Mn as am,st as an,I as ao,te as ap,dr as aq,Ha as ar,Hs as as,fe as at,de as au,Kt as av,Ce as aw,se as ax,St as ay,cr as az,H as b,ts as b$,e as b0,k as b1,He as b2,Wn as b3,Cn as b4,Le as b5,sn as b6,ke as b7,wo as b8,F as b9,Ta as bA,Ca as bB,Na as bC,Ue as bD,Ge as bE,Ve as bF,Je as bG,us as bH,$a as bI,Da as bJ,bn as bK,jt as bL,Fa as bM,j as bN,Ot as bO,ut as bP,Ei as bQ,w as bR,_ as bS,Aa as bT,pe as bU,xt as bV,rc as bW,At as bX,Oe as bY,_i as bZ,ot as b_,Qe as ba,Xe as bb,No as bc,Co as bd,To as be,Ao as bf,lo as bg,Go as bh,Fo as bi,qo as bj,G as bk,Pe as bl,Ko as bm,zo as bn,V as bo,Mt as bp,Lt as bq,ue as br,Ra as bs,ln as bt,uo as bu,Ke as bv,Fe as bw,Ze as bx,tt as by,nt as bz,gr as c,Y as c$,rt as c0,q as c1,ps as c2,Dr as c3,ye as c4,it as c5,gt as c6,Z as c7,r as c8,ft as c9,wt as cA,J as cB,dt as cC,b as cD,Pc as cE,Nc as cF,$c as cG,B as cH,xi as cI,U as cJ,ia as cK,Ki as cL,Vi as cM,Yi as cN,Xi as cO,na as cP,kt as cQ,_t as cR,Gn as cS,on as cT,ee as cU,Q as cV,K as cW,X as cX,at as cY,Zr as cZ,_e as c_,Rs as ca,fn as cb,Vn as cc,gn as cd,hn as ce,pn as cf,fo as cg,go as ch,Uo as ci,ko as cj,Zt as ck,ao as cl,io as cm,$o as cn,Ds as co,ji as cp,me as cq,Rc as cr,t as cs,L as ct,lt as cu,Jr as cv,vn as cw,es as cx,ie as cy,R as cz,Wr as d,Is as d0,z as d1,ri as d2,_c as d3,Hn as d4,Bo as d5,er as d6,Te as d7,Ne as d8,so as d9,bc as dA,Vr as dB,Ci as dC,je as dD,xe as dE,pt as dF,fi as dG,Ee as dH,le as dI,Un as dJ,un as dK,Ja as dL,re as dM,yn as dN,ii as dO,si as dP,ou as dQ,Br as da,lr as db,Dn as dc,Xn as dd,Io as de,ce as df,Zn as dg,he as dh,co as di,mn as dj,Me as dk,fs as dl,Qr as dm,ci as dn,ge as dp,zr as dq,ai as dr,ei as ds,oi as dt,ni as du,ti as dv,Yr as dw,xr as dx,Ae as dy,vc as dz,Sa as e,ds as f,n as g,cs as h,qr as i,ct as j,rs as k,$t as l,Ur as m,Pi as n,ns as o,Sr as p,S as q,i as r,Lr as s,$e as t,ki as u,Us as v,gs as w,ur as x,oc as y,Pr as z}
//# sourceMappingURL=calfSystem-BtgQSp8m.js.map
