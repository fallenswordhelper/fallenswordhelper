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
function m(){if(!g){const e=i(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
p=d.includes(e),g=!0}return p}function h(){!function(){t("https://www.googletagmanager.com/gtag/js?id=G-14Y99WX8XL"),window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},gtag("js",new Date)
const e=l()
gtag("config","G-14Y99WX8XL",{app_name:"fshApp",app_version:`${f.fshVer}(${f.calfVer})`,send_page_view:!1,...e&&{user_id:e}})}()}function y(){return m()||e(window.ga)}function b(e){y()||(ga("fshApp.set","screenName",e),ga("fshApp.send","screenview"))}function v(e){return"function"==typeof e}function w(e){return"object"==typeof e}function _(e,t){try{return JSON.parse(e,t)}catch(e){}}function k(e,t){return t?t.querySelector(e):document.querySelector(e)}function j(e){const t=k("link",document.body)
return new Promise((n=>{const o=document.createElement("link")
o.type="text/css",o.rel="stylesheet",o.onload=()=>{n()},o.href=e,t?t.before(o):document.body.append(o)}))}var x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function S(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var L={exports:{}}
L.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==x?x:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var o=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})})),n}var o={},r={},i={},a={},s="<unknown>"
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
continue}}break}n++}return n||t.DEFAULT_BACKTRACE_SHIFT}function m(e,t){if(e.cause){for(var n=[],o=e;n.length<3&&(o=o.cause);)n.push({class:o.name,message:o.message,backtrace:"string"==typeof o.stack?d(o.stack,!1,t):null})
return n}return[]}function h(e,t){return i(this,void 0,void 0,(function(){var n,o,r,i
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
return t}function x(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function $(e,t,n){if(e&&t&&n&&t in e)try{for(var o=e[t];o&&o.__hb_original;)o=o.__hb_original
e[t]=n(o),e[t].__hb_original=o}catch(e){}}t.merge=c,t.mergeNotice=u,t.objectIsEmpty=l,t.objectIsExtensible=f,t.makeBacktrace=d,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=g,t.getCauses=m,t.getSourceForBacktrace=h,t.runBeforeNotifyHandlers=y,t.runAfterNotifyHandlers=b,t.shallowClone=v,t.sanitize=w,t.logger=k,t.makeNotice=j,t.isErrorObject=x,t.instrument=$
var S=!1,L=[]
function E(e,t){e&&e.console&&t&&(L.push(t),S||(S=!0,["debug","info","warn","error","log"].forEach((function(t){$(e.console,t,(function(n){return function(){var o=Array.prototype.slice.call(arguments)
L.forEach((function(e){try{e(t,o)}catch(e){}})),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}}))}))))}function O(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function P(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
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
"string"==typeof s&&(i[a]=s)}return i}function R(e){return void 0!==e.async}function D(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.instrumentConsole=E,t.endpoint=O,t.generateStackTrace=P,t.filter=C,t.filterUrl=A,t.formatCGIData=M,t.clone=B,t.isBrowserConfig=R,t.globalThisOrWindow=D
var I={}
function U(e,t,n,o){void 0===o&&(o=100)
var r="".concat(t,"-").concat(n)
if(void 0===I[r]&&(I[r]=0),I[r]%o==0){var i="Deprecation warning: ".concat(t," has been deprecated; please use ").concat(n," instead.")
e.warn(i),I[r]++}else I[r]++}t.logDeprecatedMethod=U})(a),Object.defineProperty(i,"__esModule",{value:!0})
var k=a
function j(e){return void 0===e&&(e=(0,k.globalThisOrWindow)()),{shouldReloadOnConfigure:!1,load:function(t){function n(){return t.config.eventsEnabled}n()&&(0,k.instrumentConsole)(e,(function(e,o){if(n()&&0!==o.length){var r={severity:e}
"string"==typeof o[0]?(r.message=o[0],r.args=o.slice(1)):r.args=o,t.event("log",r)}}))}}}i.default=j
var $={},S={}
Object.defineProperty(S,"__esModule",{value:!0}),S.GlobalStore=void 0
var L=a,E=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,L.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
S.GlobalStore=E
var O={}
class P{static parse(e){return e.trim().split("\n").map((e=>JSON.parse(e)))}static stringify(e){return e.map((e=>JSON.stringify(e))).join("\n")}}var C=Object.freeze({__proto__:null,NdJson:P}),T=n(C),N={}
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
Object.defineProperty(O,"__esModule",{value:!0}),O.ThrottledEventsLogger=void 0
var H=T,R=a,D=N,I=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=A(A({},D.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.processQueue=function(){var e=this
if(0!==this.queue.length&&!this.isProcessing){this.isProcessing=!0
var t=this.queue.slice()
this.queue=[]
var n=H.NdJson.stringify(t)
this.makeHttpRequest(n).then((function(){setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})).catch((function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)}))}},e.prototype.makeHttpRequest=function(e){return M(this,void 0,void 0,(function(){var t=this
return B(this,(function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,R.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then((function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")})).catch((function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))}))]}))}))},e.prototype.originalLogger=function(){var e,t,n,o,r
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(o=console.warn.__hb_original)&&void 0!==o?o:console.warn,error:null!==(r=console.error.__hb_original)&&void 0!==r?r:console.error}},e}()
O.ThrottledEventsLogger=I
var U=e&&e.__assign||function(){return U=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},U.apply(this,arguments)},G=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):r(e.value).then(a,s)}c((o=o.apply(e,t||[])).next())}))},q=e&&e.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1]
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
Object.defineProperty($,"__esModule",{value:!0}),$.Client=void 0
var F=a,W=S,Q=O,z=N,J=/,|\s+/,K=/\S/,X=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.10.0"},this.config=U(U({},z.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new Q.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,F.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
return this.__eventsLogger.configure(this.config),this.loadPlugins(),this},e.prototype.loadPlugins=function(){var e=this;(this.__pluginsLoaded?this.config.__plugins.filter((function(e){return e.shouldReloadOnConfigure})):this.config.__plugins).forEach((function(t){return t.load(e)})),this.__pluginsLoaded=!0},e.prototype.__initStore=function(){this.__store=new W.GlobalStore({context:{},breadcrumbs:[]},this.config.maxBreadcrumbs)},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&null!=e&&this.__store.setContext(e),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__store.clear(),"object"==typeof e&&null!==e&&this.__store.setContext(e),this},e.prototype.clear=function(){return this.__store.clear(),this},e.prototype.notify=function(e,t,n){var o=this
void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var r=this.makeNotice(e,t,n),i=r&&r.backtrace?r.backtrace.map((function(e){return(0,F.shallowClone)(e)})):null,a=this.__runPreconditions(r)
return a instanceof Error?((0,F.runAfterNotifyHandlers)(r,this.__afterNotifyHandlers,a),!1):a instanceof Promise?(a.then((function(e){return e instanceof Error?((0,F.runAfterNotifyHandlers)(r,o.__afterNotifyHandlers,e),!1):o.__send(r,i)})),!0):(this.__send(r,i).catch((function(e){})),!0)},e.prototype.notifyAsync=function(e,t,n){var o=this
return void 0===t&&(t=void 0),void 0===n&&(n=void 0),new Promise((function(r,i){var a,s
a=e.afterNotify?e:t&&t.afterNotify?t:n&&n.afterNotify?n:t&&"object"==typeof t?t:n||(t={}),s=a.afterNotify,a.afterNotify=function(e){if(null==s||s.call(o,e),e)return i(e)
r()},o.notify(e,t,n)}))},e.prototype.makeNotice=function(e,t,n){void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var o=(0,F.makeNotice)(e)
if(t&&"object"!=typeof t&&(t={name:String(t)}),t&&(o=(0,F.mergeNotice)(o,t)),"object"==typeof n&&null!==n&&(o=(0,F.mergeNotice)(o,n)),(0,F.objectIsEmpty)(o))return null
var r=this.__store.getContents("context"),i=this.__constructTags(o.tags),a=this.__constructTags(r.tags),s=this.__constructTags(this.config.tags),c=i.concat(a).concat(s),u=c.filter((function(e,t){return c.indexOf(e)===t}))
return o=(0,F.merge)(o,{name:o.name||"Error",context:(0,F.merge)(r,o.context),projectRoot:o.projectRoot||this.config.projectRoot,environment:o.environment||this.config.environment,component:o.component||this.config.component,action:o.action||this.config.action,revision:o.revision||this.config.revision,tags:u}),Array.isArray(o.backtrace)&&o.backtrace.length||("string"==typeof o.stack&&o.stack.trim()?o.backtrace=(0,F.makeBacktrace)(o.stack,!1,this.logger):(o.stack=(0,F.generateStackTrace)(),o.backtrace=(0,F.makeBacktrace)(o.stack,!0,this.logger))),o},e.prototype.addBreadcrumb=function(e,t){if(this.config.breadcrumbsEnabled){t=t||{}
var n=(0,F.shallowClone)(t.metadata),o=t.category||"custom",r=(new Date).toISOString()
return this.__store.addBreadcrumb({category:o,message:e,metadata:n,timestamp:r}),this}},e.prototype.logEvent=function(e){(0,F.logDeprecatedMethod)(this.logger,"Honeybadger.logEvent","Honeybadger.event"),this.event("log",e)},e.prototype.event=function(e,t){var n
"object"==typeof e&&(t=e,e=null!==(n=e.event_type)&&void 0!==n?n:void 0),this.__eventsLogger.log(U({event_type:e,ts:(new Date).toISOString()},t))},e.prototype.__getBreadcrumbs=function(){return this.__store.getContents("breadcrumbs").slice()},e.prototype.__getContext=function(){return this.__store.getContents("context")},e.prototype.__developmentMode=function(){return!0!==this.config.reportData&&this.config.environment&&this.config.developmentEnvironments.includes(this.config.environment)},e.prototype.__buildPayload=function(e){var t=(0,F.filter)(e.headers,this.config.filters)||{},n=(0,F.filter)(U(U({},e.cgiData),(0,F.formatCGIData)(t,"HTTP_")),this.config.filters)
return{notifier:this.__notifier,breadcrumbs:{enabled:!!this.config.breadcrumbsEnabled,trail:e.__breadcrumbs||[]},error:{class:e.name,message:e.message,backtrace:e.backtrace,fingerprint:e.fingerprint,tags:e.tags,causes:(0,F.getCauses)(e,this.logger)},request:{url:(0,F.filterUrl)(e.url,this.config.filters),component:e.component,action:e.action,context:e.context,cgi_data:n,params:(0,F.filter)(e.params,this.config.filters)||{},session:(0,F.filter)(e.session,this.config.filters)||{}},server:{project_root:e.projectRoot,environment_name:e.environment,revision:e.revision,hostname:this.config.hostname,time:(new Date).toUTCString()},details:e.details||{}}},e.prototype.__constructTags=function(e){return e?e.toString().split(J).filter((function(e){return K.test(e)})):[]},e.prototype.__runPreconditions=function(e){var t=this,n=null
e||(this.logger.debug("failed to build error report"),n=new Error("failed to build error report")),!1===this.config.reportData&&(this.logger.debug("skipping error report: honeybadger.js is disabled",e),n=new Error("honeybadger.js is disabled")),this.__developmentMode()&&(this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.",e),n=new Error("honeybadger.js is in development mode")),this.config.apiKey||(this.logger.warn("could not send error report: no API key has been configured",e),n=new Error("missing API key"))
var o=(0,F.runBeforeNotifyHandlers)(e,this.__beforeNotifyHandlers)
return n||o.result||(this.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers returned false")),o.results.length&&o.results.some((function(e){return e instanceof Promise}))?Promise.allSettled(o.results).then((function(o){if(!n&&o.some((function(e){return"rejected"===e.status||!1===e.value}))&&(t.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers (async) returned false")),n)return n})):n},e.prototype.__send=function(e,t){var n=this
return this.config.breadcrumbsEnabled?(this.addBreadcrumb("Honeybadger Notice",{category:"notice",metadata:{message:e.message,name:e.name,stack:e.stack}}),e.__breadcrumbs=this.__store.getContents("breadcrumbs")):e.__breadcrumbs=[],(0,F.getSourceForBacktrace)(t,this.__getSourceFileHandler).then((function(t){return G(n,void 0,void 0,(function(){var n
return q(this,(function(o){return t.forEach((function(t,n){e.backtrace[n].source=t})),n=this.__buildPayload(e),[2,this.__transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json",Accept:"text/json, application/json"},method:"POST",endpoint:(0,F.endpoint)(this.config.endpoint,"/v1/notices/js"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},n)]}))}))})).then((function(t){if(201!==t.statusCode)return(0,F.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,new Error("Bad HTTP response: ".concat(t.statusCode))),n.logger.warn("Error report failed: unknown response from server. code=".concat(t.statusCode)),!1
var o=JSON.parse(t.body).id
return(0,F.runAfterNotifyHandlers)((0,F.merge)(e,{id:o}),n.__afterNotifyHandlers),n.logger.info("Error report sent ⚡ https://app.honeybadger.io/notice/".concat(o)),!0})).catch((function(t){return n.logger.error("Error report failed: an unknown error occurred.","message=".concat(t.message)),(0,F.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,t),!1}))},e}()
$.Client=X
var V={}
Object.defineProperty(V,"__esModule",{value:!0}),function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n)
var r=Object.getOwnPropertyDescriptor(t,n)
r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),o=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||n(t,e,o)},s=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return o(t,e),t},c=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Util=t.Types=t.Client=void 0
var u=c(i),l=$
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
var de,pe=r,ge=pe.Util.instrument,me=pe.Util.makeNotice,he=pe.Util.globalThisOrWindow,ye=0
function be(){ye+=1,clearTimeout(de),de=setTimeout((function(){ye=0}))}function ve(e){return void 0===e&&(e=he()),{load:function(t){ge(e,"onerror",(function(n){var o=function(e,n,o,r,i){if(t.logger.debug("window.onerror callback invoked",arguments),ye>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(ye-=1)
if(0===o&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var a=me(i)
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
var $e={}
Object.defineProperty($e,"__esModule",{value:!0})
var Se=r,Le=Y,Ee=Se.Util.sanitize,Oe=Se.Util.instrument,Pe=Se.Util.instrumentConsole,Ce=Se.Util.globalThisOrWindow
function Te(e){return void 0===e&&(e=Ce()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function o(e){return Array.isArray(e)?e.map((function(e){try{return String(e)}catch(e){return"[unknown]"}})).join(" "):""}n("console")&&Pe(e,(function(e,n){var r=o(n),i={category:"log",metadata:{level:e,arguments:Ee(n,3)}}
t.addBreadcrumb(r,i)}))}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",(function(e){var n,o,r
try{n=(0,Le.stringNameOfElement)(e.target),o=(0,Le.stringSelectorOfElement)(e.target),r=(0,Le.stringTextOfElement)(e.target)}catch(e){n="UI Click",o="[unknown]",r="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:o,text:r,event:e}})}),!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Oe(XMLHttpRequest.prototype,"open",(function(e){return function(){var t=this,n=arguments[1],o="string"==typeof n?n:String(n),r="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],i="".concat(r," ").concat((0,Le.localURLPathname)(o))
this.__hb_xhr={type:"xhr",method:r,url:o,message:i},"function"==typeof e&&e.apply(t,arguments)}})),Oe(XMLHttpRequest.prototype,"send",(function(e){return function(){var n=this
function o(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Oe(n,"onreadystatechange",(function(e){return function(){o(),"function"==typeof e&&e.apply(this,arguments)}})):n.onreadystatechange=o,"function"==typeof e&&e.apply(n,arguments)}}))),n("network")&&(0,Le.nativeFetch)()&&Oe(e,"fetch",(function(n){return function(){var o,r=arguments[0],i="GET"
"string"==typeof r?o=r:"Request"in e&&r instanceof Request?(o=r.url,r.method&&(i=r.method)):o=String(r),arguments[1]&&arguments[1].method&&(i=arguments[1].method),"string"==typeof i&&(i=i.toUpperCase())
var a="".concat(i," ").concat("undefined"==typeof document?o:(0,Le.localURLPathname)(o)),s={type:"fetch",method:i,url:o}
return n.apply(this,arguments).then((function(e){return s.status_code=e.status,t.addBreadcrumb(a,{category:"request",metadata:s}),e})).catch((function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:s}),e}))}})),function(){if(n("navigation")&&null!=e.location){var o=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",(function(t){r(o,e.location.href)})),void 0!==e.history&&(Oe(e.history,"pushState",i),Oe(e.history,"replaceState",i))}function r(e,n){o=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function i(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&r(o,String(t)),e.apply(this,arguments)}}}()}}}$e.default=Te
var Ne={}
Object.defineProperty(Ne,"__esModule",{value:!0})
var Ae=r,Me=Ae.Util.instrument,Be=Ae.Util.globalThisOrWindow
function He(e){return void 0===e&&(e=Be()),{load:function(t){!function(){function n(e){return function(n){return function(o,r){if("function"==typeof o){var i=Array.prototype.slice.call(arguments,2)
return o=t.__wrap(o,e),n((function(){o.apply(void 0,i)}),r)}return n(o,r)}}}Me(e,"setTimeout",n({component:"setTimeout"})),Me(e,"setInterval",n({component:"setInterval"}))}()}}}Ne.default=He
var Re={}
Object.defineProperty(Re,"__esModule",{value:!0})
var De=r,Ie=De.Util.instrument,Ue=De.Util.globalThisOrWindow
function Ge(e){return void 0===e&&(e=Ue()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach((function(n){var o=e[n]&&e[n].prototype
o&&Object.prototype.hasOwnProperty.call(o,"addEventListener")&&(Ie(o,"addEventListener",(function(e){var o={component:"".concat(n,".prototype.addEventListener")}
return function(n,r,i,a){try{r&&null!=r.handleEvent&&(r.handleEvent=t.__wrap(r.handleEvent,o))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(r,o),i,a)}})),Ie(o,"removeEventListener",(function(e){return function(n,o,r,i){return e.call(this,n,o,r,i),e.call(this,n,t.__wrap(o),r,i)}})))}))}}}Re.default=Ge
var qe={},Fe=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):r(e.value).then(a,s)}c((o=o.apply(e,t||[])).next())}))},We=e&&e.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1]
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
Object.defineProperty(qe,"__esModule",{value:!0}),qe.BrowserTransport=void 0
var Qe=r,ze=Qe.Util.sanitize,Je=Qe.Util.globalThisOrWindow
function Ke(e){return Object.entries(e)}var Xe=function(){function e(e){void 0===e&&(e={}),this.headers={},this.headers=e}return e.prototype.defaultHeaders=function(){return this.headers},e.prototype.send=function(e,t){return Fe(this,void 0,void 0,(function(){var n,o,r,i,a
return We(this,(function(s){switch(s.label){case 0:return n=e.headers?Ke(e.headers):[],o=this.defaultHeaders(),n.forEach((function(e){var t=e[0],n=e[1]
null!=t&&null!=n&&(o[String(t)]=String(n))})),r={method:e.method,headers:o},"POST"===e.method&&t&&(r.body="string"==typeof t?t:JSON.stringify(ze(t,e.maxObjectDepth))),[4,Je().fetch(e.endpoint,r)]
case 1:return[4,(i=s.sent()).text()]
case 2:return a=s.sent(),[2,Promise.resolve({statusCode:i.status,body:a})]}}))}))},e}()
qe.BrowserTransport=Xe
var Ve={},Ye=e&&e.__assign||function(){return Ye=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},Ye.apply(this,arguments)}
Object.defineProperty(Ve,"__esModule",{value:!0}),Ve.BrowserFeedbackForm=void 0
var Ze=r.Util.globalThisOrWindow,et=function(){function t(e,t,n){this.config=e,this.logger=t,this.scriptUrl=n}return t.prototype.show=function(e,t){if(void 0===t&&(t={}),this.config&&this.config.apiKey)if(e){var n=Ze()
void 0!==n.document?this.isUserFeedbackScriptUrlAlreadyVisible()?this.logger.debug("User feedback form is already visible"):(n.honeybadgerUserFeedbackOptions=Ye(Ye({},t),{apiKey:this.config.apiKey,endpoint:this.config.userFeedbackEndpoint,noticeId:e}),this.appendUserFeedbackScriptTag(n,t)):this.logger.debug("global.document is undefined. Cannot attach script")}else this.logger.debug("Can't show user feedback form without a notice already reported")
else this.logger.debug("Client not initialized")},t.prototype.appendUserFeedbackScriptTag=function(t,n){void 0===n&&(n={})
var o=t.document.createElement("script")
o.setAttribute("src",this.scriptUrl),o.setAttribute("async","true"),n.onLoad&&(o.onload=n.onLoad),(e.document.head||e.document.body).appendChild(o)},t.prototype.isUserFeedbackScriptUrlAlreadyVisible=function(){for(var e=Ze(),t=this.scriptUrl,n=0;n<e.document.scripts.length;n++)if(e.document.scripts[n].src===t)return!0
return!1},t}()
Ve.BrowserFeedbackForm=et,function(t){var n,o=e&&e.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
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
var u=r,l=Y,f=fe,d=c(we),p=c($e),g=c(Ne),m=c(Re),h=qe,y=Ve,b=u.Util.merge,v=u.Util.filter,w=u.Util.objectIsExtensible,_=u.Util.globalThisOrWindow,k=function(){var e=_(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},j=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=j
var x=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,i({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new h.BrowserTransport({"User-Agent":S()}))||this
return n.__errorsSent=0,n.__lastWrapErr=void 0,n.__lastNoticeId=void 0,n.__beforeNotifyHandlers=[function(e){return n.__exceedsMaxErrors()?(n.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),n.__incrementErrorsCount(),!0)}],n.__afterNotifyHandlers=[function(e,t){t&&(n.__lastNoticeId=t.id)}],n}return o(n,e),n.prototype.configure=function(t){return void 0===t&&(t={}),e.prototype.configure.call(this,t)},n.prototype.resetMaxErrors=function(){return this.__errorsSent=0},n.prototype.factory=function(e){var t=new n(e)
return t.setNotifier(this.getNotifier()),t},n.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},n.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),a(this,void 0,void 0,(function(){return s(this,(function(t){return new y.BrowserFeedbackForm(this.config,this.logger,this.getUserFeedbackSubmitUrl()).show(this.__lastNoticeId,e),[2]}))}))},n.prototype.getUserFeedbackSubmitUrl=function(){return(0,t.getUserFeedbackScriptUrl)(this.getVersion())},n.prototype.__buildPayload=function(t){var n,o={HTTP_USER_AGENT:void 0,HTTP_REFERER:void 0,HTTP_COOKIE:void 0}
"undefined"!=typeof navigator&&navigator.userAgent&&(o.HTTP_USER_AGENT=navigator.userAgent),"undefined"!=typeof document&&document.referrer.match(/\S/)&&(o.HTTP_REFERER=document.referrer),(n="string"==typeof t.cookies?(0,l.decodeCookie)(t.cookies):t.cookies)&&(o.HTTP_COOKIE=(0,l.encodeCookie)(v(n,this.config.filters)))
var r=e.prototype.__buildPayload.call(this,t)
return r.request.cgi_data=b(o,r.request.cgi_data),r},n.prototype.__wrap=function(e,t){void 0===t&&(t={})
var n=e
t||(t={})
try{if("function"!=typeof n)return n
if(!w(n))return n
if(!n.___hb){var o=this
n.___hb=function(){if(!l.preferCatch)return n.apply(this,arguments)
try{return n.apply(this,arguments)}catch(e){if(o.__lastWrapErr===e)throw e
throw o.__lastWrapErr=e,(0,f.ignoreNextOnError)(),o.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),o.config.enableUncaught&&o.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(u.Client),$={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.10.0"},S=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat($.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat($.version,"; n/a; n/a")},L=new x({__plugins:[(0,f.onError)(),(0,d.default)(),(0,g.default)(),(0,m.default)(),(0,p.default)(),u.Plugins.events()]})
L.setNotifier($)
var E=r
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return E.Types}}),t.default=L}(o)
var tt=t(o)
return tt}()
var E=S(L.exports)
const O=["attackplayer.min.js","dynamically imported module","fs.min.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","play method is not allowed","world.min.js","openuserjs.org"],P=e=>O.some((t=>e.includes(t)))
function C(e){if(P(e.stack))return!1}function T(){!function(){E.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.125"})
const e=l()
e&&E.setContext({user_id:e}),E.beforeNotify(C)}()}function N(...e){console.log(...e)}function A(e,t,n,o){e instanceof EventTarget&&e.addEventListener(t,n,o)}function M(e){return null===e}const B=`${document.location.protocol}//${document.location.host}/`,H=window.HCS?.defines?.cdn,R=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],D=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],U=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,G=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,q=/guild_id=(?<guildId>\d+)/,F=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,W=/player_id=(?<playerId>\d+)/,Q=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,z=/VL:.+?(?<vl>\d+)/,J=.2,K="joinallgroupsundersize",X="index.php",V="?cmd=",Y=`${X}${V}`,Z="&subcmd=",ee="&target_username=",te=`${Y}auctionhouse`,ne=`${te}&search=`,oe=`${Y}log`,re=`${Y}ignore${Z}add&ignore_username=`,ie=`${Y}profile`,ae=`${ie}&player_id=`,se=`${ie}${Z}dropitems`,ce=`${Y}trade&target_player=`,ue=`${Y}trade${Z}createsecure${ee}`,le=`${Y}arena${Z}`,fe=`${X}${`${V}notepad&blank=1${Z}`}`,de=`${fe}auctionsearch`,pe=`${Y}points`,ge=`${Y}guild${Z}`,me=`${ge}log`,he=`${ge}scouttower`,ye=`${ge}groups&subcmd2=`,be=`${ge}inventory&subcmd2=report&user=`,ve=`${ge}view&guild_id=`,we=`${ye}joinall`,_e=`${ye}${K}`,ke=`${Y}world`,je=`${Y}findplayer`,xe=`${je}&search_show_first=1&search_username=`,$e=`${Y}blacksmith`,Se=`${Y}quickbuff`,Le=`${Y}composing`,Ee=`${Y}attackplayer${ee}`,Oe=`${Y}${Z}viewupdatearchive`,Pe=`${Y}${Z}viewarchive`,Ce=`${Y}bounty`,Te=`${Y}inventing${Z}viewrecipe&recipe_id=`,Ne=`https://guide.fallensword.com/${Y}`,Ae="after-update.actionlist",Me="buffs.player",Be="update.player",He="level.stats-player",Re="gold.stats-player",De="prompt.worldDialogShop",Ie="keydown.controls",Ue="update.realm",Ge="-success.action-response",qe=`-1${Ge}`,Fe=`1${Ge}`,We=`2${Ge}`,Qe=`9${Ge}`,ze=`5${Ge}`,Je=`25${Ge}`,Ke=1,Xe=2,Ve=16,Ye=128,Ze=256,et="needToCompose",tt="lastComposeCheck",nt="characterVirtualLevel",ot="enableGuildActivityTracker",rt="lastLadderReset",it="form",at="table",st="td",ct="tr",ut="fsh_buffLog",lt="statbar-level-tooltip-general",ft="stat-level",dt="stat-defense",pt="stat-attack",gt="stat-damage",mt="stat-armor",ht="stat-hp",yt="stat-vl",bt="GM_",vt=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],wt=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],_t=`${H}ui/world/action_spinner.gif`,kt=".fa-envelope",jt='a[href*="&player_id="]',xt=.002,$t=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],St='input[name="blockedSkillList[]"]'
var Lt={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1}
const Et=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function Ot(t,n){const o=window.localStorage.getItem(bt+t)
return M(o)||e(o)?n:function(e){const t=Et.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(o)}function Pt(e){return Ot(e,Lt[e])}function Ct(e){Pt("betaOptIn")&&N("sendException",e),E.notify(e)}function Tt(e,t){return e||t}const Nt=[null]
function At(e,t){return Nt[e]&&Nt[e].priority<Nt[t].priority}function Mt(e,t){const n=Nt[e]
Nt[e]=Nt[t],Nt[t]=n}function Bt(e,t){return e?2*t:2*t+1}function Ht(){if(1===Nt.length)return
const e=Nt[1].data,t=Nt.pop()
return Nt.length>1&&(Nt[1]=t,function(e){let t=e
for(;2*t<Nt.length;){const e=Bt(!At(2*t+1,2*t),t)
if(At(t,e))break
Mt(t,e),t=e}}(1)),e}function Rt(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!At(t,e))break
Mt(t,e),t=e}}(Nt.push({data:e,priority:t})-1)}let Dt=!0
const It="fshMessage"
let Ut=0
function Gt(){Nt.length-1==0?Dt=!0:(Dt=!1,window.postMessage(It,window.location.origin))}function qt(){const t=Ht()
var n
v(t)?t():e(n=t)||Ct(`pop() was not a function (${typeof n})`)}function Ft(e){const t=e.data
e.origin===window.location.origin&&t===It&&function(){try{qt()}catch(e){E.notify(e)}finally{Gt()}}()}function Wt(e,t,n,o){if(v(t)){Ut||(A(window,"message",Ft),Ut=!0)
const r=Tt(o,window),i=Tt(n,[])
Rt(t.bind(r,...i),e),Dt&&Gt()}}function Qt(e,t){return new URLSearchParams(e).get(t)}function zt(e){try{return Qt(decodeURIComponent(window.location.search),e)}catch(e){return N(e),""}}function Jt(){}const Kt=e=>e
function Xt(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}function Vt(e){return e()}function Yt(){return Object.create(null)}function Zt(e){e.forEach(Vt)}function en(e){return"function"==typeof e}function tn(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let nn
function on(e,t){return e===t||(nn||(nn=document.createElement("a")),nn.href=t,e===nn.href)}function rn(e,...t){if(null==e){for(const e of t)e(void 0)
return Jt}const n=e.subscribe(...t)
return n.unsubscribe?()=>n.unsubscribe():n}function an(e){let t
return rn(e,(e=>t=e))(),t}function sn(e,t,n){e.$$.on_destroy.push(rn(t,n))}function cn(e,t,n,o){if(e){const r=un(e,t,n,o)
return e[0](r)}}function un(e,t,n,o){return e[1]&&o?function(e,t){for(const n in t)e[n]=t[n]
return e}(n.ctx.slice(),e[1](o(t))):n.ctx}function ln(e,t,n,o){if(e[2]&&o){const r=e[2](o(n))
if(void 0===t.dirty)return r
if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length)
for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o]
return e}return t.dirty|r}return t.dirty}function fn(e,t,n,o,r,i){if(r){const a=un(t,n,o,i)
e.p(a,r)}}function dn(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32
for(let e=0;e<n;e++)t[e]=-1
return t}return-1}function pn(e){const t={}
for(const n in e)t[n]=!0
return t}function gn(e){let t=!1
return function(...n){t||(t=!0,e.call(this,...n))}}function mn(e){return null==e?"":e}function hn(e){return e&&en(e.destroy)?e.destroy:Jt}function yn(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const bn="undefined"!=typeof window
let vn=bn?()=>window.performance.now():()=>Date.now(),wn=bn?e=>requestAnimationFrame(e):Jt
const _n=new Set
function kn(e){_n.forEach((t=>{t.c(e)||(_n.delete(t),t.f())})),0!==_n.size&&wn(kn)}function jn(e,t){e.appendChild(t)}function xn(e){if(!e)return document
const t=e.getRootNode?e.getRootNode():e.ownerDocument
return t&&t.host?t:e.ownerDocument}function $n(e){const t=On("style")
return t.textContent="/* empty */",function(e,t){jn(e.head||e,t),t.sheet}(xn(e),t),t.sheet}function Sn(e,t,n){e.insertBefore(t,n||null)}function Ln(e){e.parentNode&&e.parentNode.removeChild(e)}function En(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function On(e){return document.createElement(e)}function Pn(e){return document.createTextNode(e)}function Cn(){return Pn(" ")}function Tn(){return Pn("")}function Nn(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function An(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Mn(e){return function(t){t.target===this&&e.call(this,t)}}function Bn(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Hn(e,t,n){const o=t.toLowerCase()
o in e?e[o]="boolean"==typeof e[o]&&""===n||n:t in e?e[t]="boolean"==typeof e[t]&&""===n||n:Bn(e,t,n)}function Rn(e){let t
return{p(...n){t=n,t.forEach((t=>e.push(t)))},r(){t.forEach((t=>e.splice(e.indexOf(t),1)))}}}function Dn(e){return""===e?null:+e}function In(e,t){t=""+t,e.data!==t&&(e.data=t)}function Un(e,t){e.value=null==t?"":t}function Gn(e,t,n,o){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function qn(e,t,n){for(let n=0;n<e.options.length;n+=1){const o=e.options[n]
if(o.__value===t)return void(o.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function Fn(e){const t=e.querySelector(":checked")
return t&&t.__value}let Wn
function Qn(){if(void 0===Wn){Wn=!1
try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){Wn=!0}}return Wn}function zn(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative")
const n=On("iframe")
n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1
const o=Qn()
let r
return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=Nn(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=Nn(n.contentWindow,"resize",t),t()}),jn(e,n),()=>{(o||r&&n.contentWindow)&&r(),Ln(n)}}function Jn(e,t,n){e.classList.toggle(t,!!n)}function Kn(e,t,{bubbles:n=!1,cancelable:o=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:o})}function Xn(e,t){return new e(t)}const Vn=new Map
let Yn,Zn=0
function eo(e,t,n,o,r,i,a,s=0){const c=16.666/o
let u="{\n"
for(let e=0;e<=1;e+=c){const o=t+(n-t)*i(e)
u+=100*e+`%{${a(o,1-o)}}\n`}const l=u+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(e){let t=5381,n=e.length
for(;n--;)t=(t<<5)-t^e.charCodeAt(n)
return t>>>0}(l)}_${s}`,d=xn(e),{stylesheet:p,rules:g}=Vn.get(d)||function(e,t){const n={stylesheet:$n(t),rules:{}}
return Vn.set(e,n),n}(d,e)
g[f]||(g[f]=!0,p.insertRule(`@keyframes ${f} ${l}`,p.cssRules.length))
const m=e.style.animation||""
return e.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,Zn+=1,f}function to(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-o.length
r&&(e.style.animation=o.join(", "),Zn-=r,Zn||wn((()=>{Zn||(Vn.forEach((e=>{const{ownerNode:t}=e.stylesheet
t&&Ln(t)})),Vn.clear())})))}function no(e){Yn=e}function oo(){if(!Yn)throw new Error("Function called outside component initialization")
return Yn}function ro(e){oo().$$.on_mount.push(e)}function io(e){oo().$$.after_update.push(e)}function ao(e){oo().$$.on_destroy.push(e)}function so(){const e=oo()
return(t,n,{cancelable:o=!1}={})=>{const r=e.$$.callbacks[t]
if(r){const i=Kn(t,n,{cancelable:o})
return r.slice().forEach((t=>{t.call(e,i)})),!i.defaultPrevented}return!0}}function co(e,t){const n=e.$$.callbacks[t.type]
n&&n.slice().forEach((e=>e.call(this,t)))}const uo=[],lo=[]
let fo=[]
const po=[],go=Promise.resolve()
let mo=!1
function ho(){mo||(mo=!0,go.then(jo))}function yo(){return ho(),go}function bo(e){fo.push(e)}function vo(e){po.push(e)}const wo=new Set
let _o,ko=0
function jo(){if(0!==ko)return
const e=Yn
do{try{for(;ko<uo.length;){const e=uo[ko]
ko++,no(e),xo(e.$$)}}catch(e){throw uo.length=0,ko=0,e}for(no(null),uo.length=0,ko=0;lo.length;)lo.pop()()
for(let e=0;e<fo.length;e+=1){const t=fo[e]
wo.has(t)||(wo.add(t),t())}fo.length=0}while(uo.length)
for(;po.length;)po.pop()()
mo=!1,wo.clear(),no(e)}function xo(e){if(null!==e.fragment){e.update(),Zt(e.before_update)
const t=e.dirty
e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(bo)}}function $o(e,t,n){e.dispatchEvent(Kn(`${t?"intro":"outro"}${n}`))}const So=new Set
let Lo
function Eo(){Lo={r:0,c:[],p:Lo}}function Oo(){Lo.r||Zt(Lo.c),Lo=Lo.p}function Po(e,t){e&&e.i&&(So.delete(e),e.i(t))}function Co(e,t,n,o){if(e&&e.o){if(So.has(e))return
So.add(e),Lo.c.push((()=>{So.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}else o&&o()}const To={duration:0}
function No(e,t,n,o){let r,i=t(e,n,{direction:"both"}),a=o?0:1,s=null,c=null,u=null
function l(){u&&to(e,u)}function f(e,t){const n=e.b-a
return t*=Math.abs(n),{a:a,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function d(t){const{delay:n=0,duration:o=300,easing:d=Kt,tick:p=Jt,css:g}=i||To,m={start:vn()+n,b:t}
t||(m.group=Lo,Lo.r+=1),"inert"in e&&(t?void 0!==r&&(e.inert=r):(r=e.inert,e.inert=!0)),s||c?c=m:(g&&(l(),u=eo(e,a,t,o,n,d,g)),t&&p(0,1),s=f(m,o),bo((()=>$o(e,t,"start"))),function(e){let t
0===_n.size&&wn(kn),new Promise((n=>{_n.add(t={c:e,f:n})}))}((t=>{if(c&&t>c.start&&(s=f(c,o),c=null,$o(e,s.b,"start"),g&&(l(),u=eo(e,a,s.b,s.duration,0,d,i.css))),s)if(t>=s.end)p(a=s.b,1-a),$o(e,s.b,"end"),c||(s.b?l():--s.group.r||Zt(s.group.c)),s=null
else if(t>=s.start){const e=t-s.start
a=s.a+s.d*d(e/s.duration),p(a,1-a)}return!(!s&&!c)})))}return{run(e){en(i)?(_o||(_o=Promise.resolve(),_o.then((()=>{_o=null}))),_o).then((()=>{i=i({direction:e?"in":"out"}),d(e)})):d(e)},end(){l(),s=c=null}}}function Ao(e){return void 0!==e?.length?e:Array.from(e)}function Mo(e,t){e.d(1),t.delete(e.key)}function Bo(e,t){Co(e,1,1,(()=>{t.delete(e.key)}))}function Ho(e,t,n,o,r,i,a,s,c,u,l,f){let d=e.length,p=i.length,g=d
const m={}
for(;g--;)m[e[g].key]=g
const h=[],y=new Map,b=new Map,v=[]
for(g=p;g--;){const e=f(r,i,g),o=n(e)
let s=a.get(o)
s?v.push((()=>s.p(e,t))):(s=u(o,e),s.c()),y.set(o,h[g]=s),o in m&&b.set(o,Math.abs(g-m[o]))}const w=new Set,_=new Set
function k(e){Po(e,1),e.m(s,l),a.set(e.key,e),l=e.first,p--}for(;d&&p;){const t=h[p-1],n=e[d-1],o=t.key,r=n.key
t===n?(l=t.first,d--,p--):y.has(r)?!a.has(o)||w.has(o)?k(t):_.has(r)?d--:b.get(o)>b.get(r)?(_.add(o),k(t)):(w.add(r),d--):(c(n,a),d--)}for(;d--;){const t=e[d]
y.has(t.key)||c(t,a)}for(;p;)k(h[p-1])
return Zt(v),h}function Ro(e,t,n){const o=e.$$.props[t]
void 0!==o&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function Do(e){e&&e.c()}function Io(e,t,n){const{fragment:o,after_update:r}=e.$$
o&&o.m(t,n),bo((()=>{const t=e.$$.on_mount.map(Vt).filter(en)
e.$$.on_destroy?e.$$.on_destroy.push(...t):Zt(t),e.$$.on_mount=[]})),r.forEach(bo)}function Uo(e,t){const n=e.$$
null!==n.fragment&&(!function(e){const t=[],n=[]
fo.forEach((o=>-1===e.indexOf(o)?t.push(o):n.push(o))),n.forEach((e=>e())),fo=t}(n.after_update),Zt(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Go(e,t,n,o,r,i,a=null,s=[-1]){const c=Yn
no(e)
const u=e.$$={fragment:null,ctx:[],props:i,update:Jt,not_equal:r,bound:Yt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Yt(),dirty:s,skip_bound:!1,root:t.target||c.$$.root}
a&&a(u.root)
let l=!1
if(u.ctx=n?n(e,t.props||{},((t,n,...o)=>{const i=o.length?o[0]:n
return u.ctx&&r(u.ctx[t],u.ctx[t]=i)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](i),l&&function(e,t){-1===e.$$.dirty[0]&&(uo.push(e),ho(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],u.update(),l=!0,Zt(u.before_update),u.fragment=!!o&&o(u.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target)
u.fragment&&u.fragment.l(e),e.forEach(Ln)}else u.fragment&&u.fragment.c()
t.intro&&Po(e.$$.fragment),Io(e,t.target,t.anchor),jo()}no(c)}class qo{$$=void 0
$$set=void 0
$destroy(){Uo(this,1),this.$destroy=Jt}$on(e,t){if(!en(t))return Jt
const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[])
return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t
this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Fo=[]
function Wo(e,t=Jt){let n
const o=new Set
function r(t){if(tn(e,t)&&(e=t,n)){const t=!Fo.length
for(const t of o)t[1](),Fo.push(t,e)
if(t){for(let e=0;e<Fo.length;e+=2)Fo[e][0](Fo[e+1])
Fo.length=0}}}function i(t){r(t(e))}return{set:r,update:i,subscribe:function(a,s=Jt){const c=[a,s]
return o.add(c),1===o.size&&(n=t(r,i)||Jt),a(e),()=>{o.delete(c),0===o.size&&n&&(n(),n=null)}}}}function Qo(e,t,n){const o=!Array.isArray(e),r=o?[e]:e
if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const i=t.length<2
return a=(e,n)=>{let a=!1
const s=[]
let c=0,u=Jt
const l=()=>{if(c)return
u()
const r=t(o?s[0]:s,e,n)
i?e(r):u=en(r)?r:Jt},f=r.map(((e,t)=>rn(e,(e=>{s[t]=e,c&=~(1<<t),a&&l()}),(()=>{c|=1<<t}))))
return a=!0,l(),function(){Zt(f),u(),a=!1}},{subscribe:Wo(n,a).subscribe}
var a}const zo=Wo("")
function Jo(e){const t=e-1
return t*t*t+1}function Ko(e,{delay:t=0,duration:n=400,easing:o=Kt}={}){const r=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:o,css:e=>"opacity: "+e*r}}function Xo(e,{delay:t=0,duration:n=400,easing:o=Jo,x:r=0,y:i=0,opacity:a=0}={}){const s=getComputedStyle(e),c=+s.opacity,u="none"===s.transform?"":s.transform,l=c*(1-a),[f,d]=yn(r),[p,g]=yn(i)
return{delay:t,duration:n,easing:o,css:(e,t)=>`\n\t\t\ttransform: ${u} translate(${(1-e)*f}${d}, ${(1-e)*p}${g});\n\t\t\topacity: ${c-l*t}`}}function Vo(e,{delay:t=0,duration:n=400,easing:o=Jo,axis:r="y"}={}){const i=getComputedStyle(e),a=+i.opacity,s="y"===r?"height":"width",c=parseFloat(i[s]),u="y"===r?["top","bottom"]:["left","right"],l=u.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),f=parseFloat(i[`padding${l[0]}`]),d=parseFloat(i[`padding${l[1]}`]),p=parseFloat(i[`margin${l[0]}`]),g=parseFloat(i[`margin${l[1]}`]),m=parseFloat(i[`border${l[0]}Width`]),h=parseFloat(i[`border${l[1]}Width`])
return{delay:t,duration:n,easing:o,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*a};${s}: ${e*c}px;padding-${u[0]}: ${e*f}px;padding-${u[1]}: ${e*d}px;margin-${u[0]}: ${e*p}px;margin-${u[1]}: ${e*g}px;border-${u[0]}-width: ${e*m}px;border-${u[1]}-width: ${e*h}px;`}}function Yo(e){let t,n,o,r,i,a,s
return{c(){t=On("div"),n=On("p"),o=Pn(e[0]),Bn(n,"class","svelte-zbl6pg"),Bn(t,"role","alert"),Bn(t,"class","svelte-zbl6pg"),Gn(t,"transform",e[2])},m(r,c){Sn(r,t,c),jn(t,n),jn(n,o),i=!0,a||(s=Nn(t,"click",e[4]),a=!0)},p(e,n){(!i||1&n)&&In(o,e[0]),4&n&&Gn(t,"transform",e[2])},i(e){i||(e&&bo((()=>{i&&(r||(r=No(t,Xo,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1))})),i=!0)},o(e){e&&(r||(r=No(t,Xo,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0)),i=!1},d(e){e&&Ln(t),e&&r&&r.end(),a=!1,s()}}}function Zo(e){let t,n=e[1]&&Yo(e)
return{c(){n&&n.c(),t=Tn()},m(e,o){n&&n.m(e,o),Sn(e,t,o)},p(e,[o]){e[1]?n?(n.p(e,o),2&o&&Po(n,1)):(n=Yo(e),n.c(),Po(n,1),n.m(t.parentNode,t)):n&&(Eo(),Co(n,1,1,(()=>{n=null})),Oo())},i(e){Po(n)},o(e){Co(n)},d(e){e&&Ln(t),n&&n.d(e)}}}function er(e,t,n){let o
sn(e,zo,(e=>n(0,o=e)))
let{ms:r=3e3}=t,i=!1,a=0,s=""
const c=(e,t)=>{clearTimeout(a),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
n(2,s=`translate(${t}px, ${e.offsetTop}px)`),n(1,i=!0)}(),t>0&&(a=setTimeout((()=>{var e
n(1,i=!1),o="",e=o,zo.set(e)}),t))):n(1,i=!1)}
ao((()=>clearTimeout(a)))
return e.$$set=e=>{"ms"in e&&n(3,r=e.ms)},e.$$.update=()=>{9&e.$$.dirty&&c(o,r)},[o,i,s,r,()=>{n(1,i=!1)}]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class tr extends qo{constructor(e){super(),Go(this,e,er,Zo,tn,{ms:3})}}let nr
function or(e){e&&(!function(){if(!nr)nr=!0,new tr({target:document.body})}(),zo.set(e))}function rr(e,t){return Array.from(e,t)}function ir(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function ar(e,t){return rr(ir(e,t))}function sr(e){return"string"==typeof e}function cr(e){return e.trim()}function ur(e){const t=o(e)
if(sr(t))return cr(t)}function lr(e,t){return ur(t).includes(e)}function fr(e,...t){return(...n)=>e(...t,...n)}let dr,pr,gr,mr,hr,yr,br=0,vr=0,wr=0
function _r(){return br||(br=n("pCL")),br}function kr(){return vr||(vr=n("pCC")),vr}function jr(){const e=ar("a",_r()).filter(function(e){return fr(lr,e)}("message"))
e.length&&async function(){const e=new Audio(Pt("defaultMessageSound"))
try{await e.play()}catch(e){or("Message Sound Not Allowed")}}()}function xr(e){return"boolean"==typeof e}function $r(e,t,n,o){var r
A(e,t,n,{once:!0,...(r=o,xr(r)?{capture:r}:r)})}function Sr(e){pr=e.clientX,gr=e.clientY}function Lr(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(dr,null).transform)
mr=e[0]-pr,hr=e[1]-gr}function Er(e){e.clientX===pr&&e.clientY===gr||(dr.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+mr).toString()}, ${(e.clientY+hr).toString()})`,Sr(e))}function Or(e){return function(e){const t=performance.now()
t-yr>16&&(Er(e),yr=t)}(e),e.preventDefault(),!1}function Pr(e){return Er(e),function(e,t,n,o){e instanceof EventTarget&&e.removeEventListener(t,n,o)}(document.body,"dragover",Or),e.preventDefault(),!1}function Cr(e,t){!function(e,t){dr=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),Sr(t),Lr(),yr=0,t.dataTransfer.setData("text/plain",""),A(document.body,"dragover",Or),$r(document.body,"drop",Pr)}function Tr(e,t){e.draggable=!0,A(e,"dragstart",fr(Cr,t))}function Nr(){return v(window.jQuery)}function Ar(e,t,n){y()||ga("fshApp.send","event",e,t,n)}function Mr(e){return Object.entries(e)}function Br(e,t,[n,o]){w(o)&&null!==o?e(t[n],o):t[n]=o}function Hr(e,t){Mr(t).forEach(fr(Br,Hr,e))}function Rr(e,t){const n=document.createElement(e)
return t&&Hr(n,t),n}function Dr(e){return Rr("div",e)}function Ir(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Ur(e,t){return rr(Ir(e,t))}function Gr(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function qr(e,t){t instanceof Element&&(t.innerHTML=String(e))}function Fr(e){let t=n("content")
t?qr("",t):(t=Dr({id:"content",style:{display:"none"}}),Gr(document.body,t)),$(t).dialog({width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}),Ur("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(t)}async function Wr(e){(await e).default()}function Qr(){Wr(import("./buffLog-Dwgj24jj.js"))}function zr(){Wr(import("./combatLog-CkWxAq-4.js"))}function Jr(){Wr(import("./creatureLog-CZnPr2X1.js"))}function Kr(){Wr(import("./fsboxlog-DuVrmVPN.js"))}function Xr(){Wr(import("./guildLog-BvFO7nhg.js"))}function Vr(){Wr(import("./guildTracker-eBBzpYiV.js"))}async function Yr(e){(await import("./injectAuctionSearch-CK1A1mDi.js")).default(e)}async function Zr(e){(await import("./findBuffs-Cn10SsVI.js")).injectFindBuffs(e)}async function ei(e){(await import("./findBuffs-Cn10SsVI.js")).injectFindOther(e)}async function ti(e){(await import("./injectOnlinePlayers-CRGAaQSk.js")).default(e)}function ni(){Wr(import("./potReport-DQ6mar1A.js"))}function oi(){Wr(import("./quickExtract-GV7NnAN0.js"))}function ri(){Wr(import("./quickLinksManager-Co1_R594.js"))}async function ii(e){(await import("./quickWear-CC-iY2ye.js")).default(e)}function ai(){Wr(import("./recipeMgr-BTNb4QvF.js"))}function si(){Wr(import("./reliclist-C8YQgv05.js"))}function ci(){Wr(import("./superelite-f2qdczZN.js"))}function ui(e){return new Promise((t=>{setTimeout(t,e)}))}function li(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class fi extends Error{constructor([e,t,n,o],...r){super(function(e,t,n,o){const r=`${t.status} ${t.statusText} - `
if(t.statusText===o.toString())return r+li(e)
const i=`${r+n} ${o} - ${li(e)}`
return"parsererror"===n?`${i} - ${t.responseText}`:i}(e,t,n,o),...r),Error.captureStackTrace&&Error.captureStackTrace(this,fi),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=o}}function di(e){A(window,"beforeunload",(()=>e.abort()))}const pi=900
let gi=0
const mi=5
let hi=0
async function yi(){hi<mi-$.active&&performance.now()-gi>=pi?(hi=mi-$.active,gi=performance.now()):await ui(100)}async function bi(e,t=10){await async function(){for(;hi<1;)await yi()
hi-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=di,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return bi(e,t-1)
!function(e,t){if([0,500,503].includes(t.status))throw new fi([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function vi(e){return Hr(e,{url:X,data:{no_mobile:1}}),bi(e)}async function wi(e){return _(await vi({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function _i(e){return wi({cmd:"export",...e})}function ki(){return _i({inc_tagged:"1",subcmd:"guild_store"})}let ji,xi=0
function $i(e){const t=i(/\sguildId: (?<id>\d{1,6}),/,o(e))
t&&(xi=Number(t))}function Si(){return xi||ar("script",document.body).forEach($i),xi}function Li(e){return Rr("a",e)}function Ei(e){e instanceof Element&&e.click()}function Oi(e,t){const n=URL.createObjectURL(e),o=Li({download:t,href:n,style:{display:"none"}})
Gr(document.body,o),Ei(o),document.body.removeChild(o),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function Pi(e,t){return _(await bi({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function Ci(e){return Pi(e,{method:"POST"})}function Ti(e,t){const n=[]
for(let o=0;o<t.length;o+=e)n.push(t.slice(o,o+e))
return n}function Ni(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function Ai(){return ji||(ji=function(e,t){const n=indexedDB.open(e)
n.onupgradeneeded=()=>n.result.createObjectStore(t)
const o=Ni(n)
return(e,n)=>o.then((o=>n(o.transaction(t,e).objectStore(t))))}("keyval-store","keyval")),ji}const Mi=e=>{e&&"NotFoundError"!==e.name&&E.notify(e)}
async function Bi(e,t){try{return await function(e,t=Ai()){return t("readonly",(t=>Ni(t.get(e))))}(e,t)}catch(e){Mi(e)}}async function Hi(e,t,n){try{return await function(e,t,n=Ai()){return n("readwrite",(n=>(n.put(t,e),Ni(n.transaction))))}(e,t,n)}catch(e){Mi(e)}}const Ri=({folder_id:e})=>-2!==(e??-2),Di=({folder_id:e})=>-2===e,Ii=({player_id:e})=>-1!==(e??-1),Ui=({player_id:e})=>e,Gi=({player_id:e})=>-1===e,qi=([e,t,n])=>Ti(20,e).map((e=>[e,t,n])),Fi=e=>({inv_id:t})=>t===e.inv_id,Wi=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,Qi=(e,t)=>({...t,armor:Wi(e,2),attack:Wi(e,0),damage:Wi(e,4),defense:Wi(e,1),hp:Wi(e,3),set_name:e.set_name??""}),zi=(e,t)=>t.forge||t.stats?.set_name,Ji=e=>e?.s?e.r.items:[],Ki=e=>[[e.filter(Ri),s,0],[e.filter(Di),s,1],[e.filter(Ii),Ui,7],[e.filter(Gi),s,4]].flatMap(qi)
function Xi(e){return function(){const t=this.data(),n=e.find(Fi(t))
n?.attributes&&(t.stats=Qi(n,t.stats),this.invalidate())}}const Vi=async()=>await Bi(`fsh_${f.subcmd}_cache`)??[],Yi=e=>Hi(`fsh_${f.subcmd}_cache`,e),Zi=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function ea(e,t,n){const o=await(r={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},Ci({cmd:"fetchitem",compare:0,...r}))
var r
return o?.s&&(o.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,o.r.items),await async function(e){const t=(await Vi()).filter(Zi(e))
await Yi(t.concat(e))}(o.r.items)),o}const ta=(e,t)=>{return t.filter((n=rr(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function na(e){const t=e.rows(zi),n=await async function(e){const t=await Vi(),n=ta(e,t)
return await Yi(n),n}(t)
t.every(Xi(n))}async function oa(e){const t=new DataTable(e)
await na(t),t.draw()}const ra=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],ia=e=>{return[...ra(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function aa(e){return()=>Fr(e)}var sa=[{section:"Character",menu:[{label:"Buff Log",fn:Qr},{label:"Combat Log",fn:zr},{label:"Creature Log",fn:Jr},{label:"Recipe Manager",fn:ai},{label:"Quick Links",fn:ri},{label:"Inventory Manager",href:`${fe}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:aa(Zr)},{label:"Find Other",fn:aa(ei)},{label:"Online Players",fn:aa(ti)},{label:"AH Quick Search",fn:aa(Yr)}]},{section:"Guild",menu:[{label:"Guild Inventory",href:`${fe}guildinvmgr`},{label:"New Guild Log",fn:Xr},{label:"Merc Hunter",fn:function(){Wr(import("./mercs-CQsEIYRr.js"))}},{label:"Pot Report",fn:ni},{label:"Guild Tracker",fn:Vr}]},{section:"Extra",menu:[{label:"Quick Extract",fn:oi},{label:"Quick Wear",fn:aa(ii)},{label:"FS Box Log",fn:Kr},{label:"SE Tracker",fn:ci}]},{section:"Beta Features",menu:[{label:"Relic List",fn:si,beta:!0},{label:"GS Export",fn:async function(){if(!Si())return
const e=await ki(),t=await Bi("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:Wi(n,2),attack:Wi(n,0),damage:Wi(n,4),defense:Wi(n,1),hp:Wi(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:Wi(n.set_bonuses,2)},...n.set_name&&{set_attack:Wi(n.set_bonuses,0)},...n.set_name&&{set_damage:Wi(n.set_bonuses,4)},...n.set_name&&{set_defense:Wi(n.set_bonuses,1)},...n.set_name&&{set_hp:Wi(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var o
Oi((o=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(ia).join("\n"))(n)}\n`,new Blob([o],{type:"text/csv"})),"gs_export.csv")},beta:!0}]},{section:"Dev Links",menu:[{label:"Combat Set Manager",fn:function(){Wr(import("./setmgr-B8yySrIk.js"))},beta:!0},{label:"Quest Book",fn:function(){Wr(import("./questbook-Dy6kNrIu.js"))}},{label:"New Quick Wear",fn:function(){Wr(import("./quickwear-DZ4N7fk6.js"))}}]},{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}]
function ca(e,t,n){const o=e.slice()
return o[7]=t[n],o}function ua(e,t,n){const o=e.slice()
return o[10]=t[n],o}function la(e){let t,n,o,r,i
function a(){return e[5](e[10])}return{c(){t=On("button"),t.textContent="PM",n=Cn(),o=On("a"),o.textContent=`${e[10].playerName}`,Bn(t,"type","button"),Bn(t,"class","helperDevBtn svelte-1f5kv75"),Bn(o,"href",ae+"menuItem.playerId"),Bn(o,"class","svelte-1f5kv75")},m(e,s){Sn(e,t,s),Sn(e,n,s),Sn(e,o,s),r||(i=Nn(t,"click",a),r=!0)},p(t,n){e=t},d(e){e&&(Ln(t),Ln(n),Ln(o)),r=!1,i()}}}function fa(e){let t,n,o
function r(){return e[4](e[10])}return{c(){t=On("a"),t.textContent=`${e[10].label}`,Bn(t,"href",e[10].href),Bn(t,"class","svelte-1f5kv75")},m(e,i){Sn(e,t,i),n||(o=Nn(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&Ln(t),n=!1,o()}}}function da(e){let t,n,o
function r(){return e[3](e[10])}return{c(){t=On("button"),t.textContent=`${e[10].label}`,Bn(t,"type","button"),Bn(t,"class","svelte-1f5kv75")},m(e,i){Sn(e,t,i),n||(o=Nn(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&Ln(t),n=!1,o()}}}function pa(e){let t,n
let o=function(e,t){return e[10].fn?da:e[10].href?fa:e[10].playerName?la:void 0}(e),r=o&&o(e),i=e[10].beta&&function(e){let t
return{c(){t=On("sup"),t.textContent="beta",Bn(t,"class","fshRed")},m(e,n){Sn(e,t,n)},d(e){e&&Ln(t)}}}()
return{c(){t=On("li"),r&&r.c(),n=Cn(),i&&i.c()},m(e,o){Sn(e,t,o),r&&r.m(t,null),jn(t,n),i&&i.m(t,null)},p(e,t){r&&r.p(e,t)},d(e){e&&Ln(t),r&&r.d(),i&&i.d()}}}function ma(e){let t,n,o,r,i=Ao(e[7].menu),a=[]
for(let t=0;t<i.length;t+=1)a[t]=pa(ua(e,i,t))
return{c(){t=On("h2"),t.textContent=`${e[7].section}`,n=Cn(),o=On("ul")
for(let e=0;e<a.length;e+=1)a[e].c()
r=Cn(),Bn(t,"class","svelte-1f5kv75")},m(e,i){Sn(e,t,i),Sn(e,n,i),Sn(e,o,i)
for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(o,null)
jn(o,r)},p(e,t){if(7&t){let n
for(i=Ao(e[7].menu),n=0;n<i.length;n+=1){const s=ua(e,i,n)
a[n]?a[n].p(s,t):(a[n]=pa(s),a[n].c(),a[n].m(o,r))}for(;n<a.length;n+=1)a[n].d(1)
a.length=i.length}},d(e){e&&(Ln(t),Ln(n),Ln(o)),En(a,e)}}}function ha(e){let t,n=Ao(sa),o=[]
for(let t=0;t<n.length;t+=1)o[t]=ma(ca(e,n,t))
return{c(){for(let e=0;e<o.length;e+=1)o[e].c()
t=Tn()},m(e,n){for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(e,n)
Sn(e,t,n)},p(e,[r]){if(7&r){let i
for(n=Ao(sa),i=0;i<n.length;i+=1){const a=ca(e,n,i)
o[i]?o[i].p(a,r):(o[i]=ma(a),o[i].c(),o[i].m(t.parentNode,t))}for(;i<o.length;i+=1)o[i].d(1)
o.length=n.length}},i:Jt,o:Jt,d(e){e&&Ln(t),En(o,e)}}}function ya(e){const t=so()
function n(e){Ar("helperMenu",e)}function o(e,o){v(o)&&(n(e),t("toggle"),o())}function r(e){t("toggle"),n("sendMsg"),openQuickMsgDialog(e)}return[n,o,r,e=>o(e.label,e.fn),e=>n(e.label),e=>r(e.playerName)]}class ba extends qo{constructor(e){super(),Go(this,e,ya,ha,tn,{})}}function va(e){let t,n,o,r
return n=new ba({}),n.$on("toggle",e[5]),{c(){t=On("div"),Do(n.$$.fragment),Bn(t,"class","modal svelte-vem4gq")},m(e,o){Sn(e,t,o),Io(n,t,null),r=!0},p:Jt,i(e){r||(Po(n.$$.fragment,e),e&&bo((()=>{r&&(o||(o=No(t,Ko,{duration:100},!0)),o.run(1))})),r=!0)},o(e){Co(n.$$.fragment,e),e&&(o||(o=No(t,Ko,{duration:100},!1)),o.run(0)),r=!1},d(e){e&&Ln(t),Uo(n),e&&o&&o.end()}}}function wa(e){let t,n,o
return n=new ba({}),n.$on("toggle",e[5]),{c(){t=On("div"),Do(n.$$.fragment),Bn(t,"class","modal svelte-vem4gq")},m(e,r){Sn(e,t,r),Io(n,t,null),o=!0},p:Jt,i(e){o||(Po(n.$$.fragment,e),o=!0)},o(e){Co(n.$$.fragment,e),o=!1},d(e){e&&Ln(t),Uo(n)}}}function _a(e){let t,n,o,r,i,a,s,c
const u=[wa,va],l=[]
function f(e,t){return e[1]&&e[4]?0:e[1]?1:-1}return~(r=f(e))&&(i=l[r]=u[r](e)),{c(){t=On("div"),n=On("button"),n.textContent="Helper Menu",o=Cn(),i&&i.c(),Bn(n,"type","button"),Bn(n,"class","toggle svelte-vem4gq"),Jn(n,"helper-menu-move",e[3]),Bn(t,"class","helper-menu svelte-vem4gq"),Jn(t,"helper-menu-fixed",e[2])},m(i,u){Sn(i,t,u),jn(t,n),jn(t,o),~r&&l[r].m(t,null),e[6](t),a=!0,s||(c=Nn(n,"click",e[5]),s=!0)},p(e,[n]){let o=r
r=f(e),r===o?~r&&l[r].p(e,n):(i&&(Eo(),Co(l[o],1,1,(()=>{l[o]=null})),Oo()),~r?(i=l[r],i?i.p(e,n):(i=l[r]=u[r](e),i.c()),Po(i,1),i.m(t,null)):i=null)},i(e){a||(Po(i),a=!0)},o(e){Co(i),a=!1},d(n){n&&Ln(t),~r&&l[r].d(),e[6](null),s=!1,c()}}}function ka(e,t,o){const r=Pt("keepHelperMenuOnScreen"),i=Pt("draggableHelperMenu"),a=Nr()&&n("worldPage")&&window.GameData
let s=0
ro((()=>{i&&Tr(s)}))
let c=!1
return[s,c,r,i,a,function(){o(1,c=!c)},function(e){lo[e?"unshift":"push"]((()=>{s=e,o(0,s)}))}]}class ja extends qo{constructor(e){super(),Go(this,e,ka,_a,tn,{})}}function xa(){const e=k(".mainbody")
e&&function(e,t){new ja({target:t.parentElement,props:{props:e}})}({},e)}function $a(e){return(new DOMParser).parseFromString(e,"text/html")}function Sa(e){return vi({data:e})}async function La(e){const t=await Sa(e)
if(t)return $a(t)}function Ea(e){const t=n("info-msg",e)
if(t){const e=t.innerHTML
return e?e.replace(/<br.*/,""):""}}function Oa(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(bt+e,t+n)}const Pa=[[sr,(e,t)=>{Oa(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&Oa(e,"N]",t)}],[xr,(e,t)=>{Oa(e,"B]",t)}]]
function Ca(e,t){const n=Pa.find((e=>e[0](t)))
n&&n[1](e,t)}let Ta=0
const Na=()=>Ta
function Aa(){Ta=Pt("sendGoldonWorld")}async function Ma(){if(!Na())return
Ar("NewMap","doSendGold")
const e=await La({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")})
e&&function(e){const t=Ea(e)
"You successfully sent gold!"!==t&&""!==t||(Ca("currentGoldSentTotal",parseInt(Pt("currentGoldSentTotal"),10)+parseInt(Pt("goldAmount"),10)),GameData.fetch(Ke))}(e)}function Ba(e){window.location=e}function Ha(e){Pt("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function Ra(e){Ar("keyHandler",e)}function Da(e){return e?.toLowerCase?.()}function Ia(e,t){return Da(e)<Da(t)?-1:Da(e)>Da(t)?1:0}function Ua(e){return Pi(e,{method:"GET"})}function Ga(e){return Ua({cmd:"profile",...e})}async function qa(){const e=await Ga({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>Ia(e.name,t.name)))}:e}function Fa(e,t,...n){return e(...n)}function Wa(){return Fa(qa)}const Qa=[e=>e?.s,(e,t)=>e.r?.length>t]
async function za(e){const t=await Wa()
if(((e,t)=>Qa.every((n=>n(t,e))))(e,t)){Ra("changeCombatSet")
const n=t.r[e].id
Ha("2"),Ba(`${ie+Z}managecombatset&submit=Use&combatSetId=${n}`)}}function Ja(e,t){n("worldPage")||(Ra(e),Ba(t))}function Ka(){f.enableMaxGroupSizeToJoin?Ba(_e):Ba(we)}function Xa(){Ra("logPage"),Ha("2"),Ba(oe)}function Va(e){const t=k(`#pCC input[value="${e}"]`)
t&&(Ra("movePage"),Ei(t))}const Ya=[["!",za,0],["@",za,1],['"',za,1],["#",za,2],["£",za,2],["$",za,3],["%",za,4],["^",za,5],["&",za,6],["*",za,7],["(",za,8],["0",function(){Ja("toWorld",ke)}],["<",Va,"<"],[">",Va,">"],["G",function(){Ra("createGroup"),Ha("4"),Ba(`${ye}create`)}],["L",Xa],["b",function(){Ra("backpack"),Ha("2"),Ba(se)}],["g",function(){Ra("gotoGuild"),Ha("4"),Ba(`${ge}manage`)}],["j",function(){Ra("joinAllGroup"),Ha("4"),Ka()}],["l",Xa],["p",function(){Ra("profile"),Ha("2"),Ba(ie)}],["r",function(){Ja("doRepair",`${$e+Z}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in f&&!f.dialogIsClosed()||(Ra("insertQuickWear"),Fr(ii))}],["y",Ma]]
const Za=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function es(e){var t;(t=e,Za.some((e=>e(t))))||function(e){const t=Ya.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function ts(){A(document,"keyup",es)}function ns(e,t){return ur(t)===e}function os(e){return fr(ns,e)}function rs(e,t,n){A(e,"click",t,n)}function is(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function as(e,t){return rr(is(e,t))}function ss(e){rs(e,(()=>{Ar("chrome","Game Help link")})),qr(`<a href="${Y}settings">Game Help</a>`,e)}function cs(){as("#pCR h3").filter(os("Game Help")).forEach(ss)}function us(e){f[e]=Pt(e)}function ls(e,t){if(t instanceof Element)return t.closest(e)}function fs(e){e?.classList&&e.classList.add("fshHide")}function ds(e){const t=ls("a",e.target)
t?.getAttribute("href")===me&&(Ar("useNewGuildLog","Alter Href"),e.preventDefault(),Xr(),fs(n("notification-guild-log")))}function ps(){return f.huntingMode&&window.realmKeyHandler}function gs(e){e.forEach((e=>Wt(3,e)))}function ms(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function hs(){return!Nr()}var ys=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function bs(e){return function(e){return-1!==e&&0===k(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(Ar("accordion","collapse"),-1):e}const vs=(e,t,n)=>$(e).data(`${n}${t}`)
function ws(e,t,n){return new Promise((o=>{const r=vs(e,t,n)
r?o(r):function(e,t,n,o){$(e).on(`${Da(t)}create`,(()=>{o(vs(e,t,n))}))}(e,t,n,o)}))}const _s=[[e=>!w(e),()=>Ct("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>Ct("$('#nav').data('hcsNav').heights does not exist")]]
async function ks(){const e=n("nav"),t=await ws(e,"Nav","hcs")
return function(e){const t=_s.find((([t])=>t(e)))
return!t||(t[1](),!1)}(t)?{theNav:e,myNav:t}:{}}function js(){!function(){const e=Pt("lastActiveQuestPage")
Pt("storeLastQuestPage")&&e.length>0&&(n("nav-character-questbook").href=e)}(),function(){const e=Pt("lastScavPage")
Pt("storeLastScavPage")&&e.length>0&&(n("nav-actions-artisanship-scavenging").href=e)}()}async function xs(){const{theNav:e,myNav:t}=await ks()
e&&t&&(js(),async function(e,t){const n=ys.map((e=>[e,Pt(e)]))
n.some((([,e])=>e))&&(await import("./injectItems-3k5k0jOA.js")).default(e,t,ms(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,bs(n))}}(t))}function $s(e,t){return t?.classList?.contains(e)}function Ss(e,t){t instanceof Node&&(t.textContent=String(e))}let Ls
function Es(){return Ls||(Ls=n("quickMessageDialog")),Ls}let Os,Ps=0
function Cs(e){(function(){if(!Ps){const e=Ir("validateTips",Es())
1===e.length&&([Ps]=e)}return Ps})()&&Ss(Tt(e,""),Ps)}function Ts(){return Os||(Os=n("quickMsgDialog_msg"),Os.maxLength=512),Os}let Ns,As=null,Ms=0,Bs=0
function Hs(e){"Enter"!==e.key||e.shiftKey||(Ar("messaging","sendOnEnter"),e.preventDefault(),function(){if(!Bs){const e=$(Es()).dialog("option","buttons")
Bs=e["Send Message"]}return Bs}()())}function Rs(){M(As)&&(As=Pt("enterForSendMessage")),As&&!Ms&&(A(Ts(),"keypress",Hs),Ms=!0)}function Ds(e,t){return $s(t[0],e)}function Is(e,t,n){const{target:o}=n,r=t.find(fr(e,o))
if(r)return r[1](o)}function Us(e){return fr(Is,Ds,e)}function Gs(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function qs(e,t){Gs(e,"beforeend",t)}function Fs(e,t){if("string"==typeof t){const e=r(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function Ws(e){const t=Pt(e)
if(t)return _(t,Fs)}function Qs(e,t,n){return JSON.stringify(e,t,n)}function zs(e,t){Ca(e,Qs(t))}let Js=0,Ks=0,Xs=0
function Vs(e,t,n){const o=Ks.insertRow(e)
let r=o.insertCell(-1)
qs(r,t),r=o.insertCell(-1),qs(r,n)}function Ys(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function Zs(e,t){Vs(e,Ys("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const ec=[["del-button",function(e){Ar("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
Ks.deleteRow(t),Js.splice(t-2,1),zs("quickMsg",Js)}],["add-button",function(e){Ar("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){Zs(e.parentNode.parentNode.rowIndex,n),t.value="",Js.push(n),zs("quickMsg",Js)}}],["add-template",function(e){Ar("messaging","insertTemplate"),Ts().value+=`${o(e).replace(/\{playername\}/g,Ns)}`}]]
function tc(e){Zs(-1,e)}function nc(){Pt("enableMessageTemplates")&&!Xs&&(rs((Ks||(Ks=Es().lastElementChild),Ks),Us(ec)),(Js||(Js=Ws("quickMsg")),Js).forEach(tc),Vs(-1,Ys("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),Xs=!0)}function oc(e,t,o){const r=Es()
$s("ui-dialog-content",r)&&(!function(e){Ns=e,Ss(e,n("quickMsgDialog_targetUsername"))}(e),function(e){const t=Ts()
t.value=Tt(e,""),t.disabled=!1}(t),Cs(o),nc(),Rs(),$(r).dialog("open"))}function rc(e){const t=n(e)
t&&(t.classList.add("pCR"),Gr(_r(),t))}function ic(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function ac(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?ic(t,e.firstChild):Gr(e,t)}(e,t)}function sc(e){const t=n(e)
t&&ac((wr||(wr=n("pCR")),wr),t)}const cc=[function(){Pt("moveGuildList")&&sc("minibox-guild")},function(){Pt("moveOnlineAlliesList")&&sc("minibox-allies")},function(){Pt("moveXmasBox")&&rc("minibox-xmas")},function(){Pt("moveDailyQuest")&&rc("minibox-daily-quest")},function(){Pt("moveFSBox")&&rc("minibox-fsbox")},function(){(f.enableAllyOnlineList||f.enableEnemyOnlineList)&&Wr(import("./allyEnemy-DnkKe_fC.js"))},function(){(f.enableWantedList||f.enableActiveBountyList)&&Wr(import("./activeWantedBounties-q92GEsqV.js"))},function(){f.enableGuildInfoWidgets&&Wr(import("./addGuildInfoWidgets-B-3d1VkX.js"))},function(){f.enableOnlineAlliesWidgets&&Wr(import("./addOnlineAlliesWidgets-DOaFyycD.js"))},function(){f.enableTempleAlert&&Wr(import("./injectTempleAlert-EZCHs69o.js"))},function(){f.enableUpgradeAlert&&Wr(import("./injectUpgradeAlert-DN7JVWYF.js"))},function(){f.enableComposingAlert&&Wr(import("./injectComposeAlert-COGluCHp.js"))},function(){_r()&&!hs()&&xs()},function(){hs()||(window.openQuickMsgDialog=oc)},function(){Pt("statBarLinks")&&Wr(import("./statBar-D4qiQGzK.js"))},function(){Pt("staminaCalculator")&&Wr(import("./injectStaminaCalculator-CqySbldi.js"))},function(){Pt("levelUpCalculator")&&Wr(import("./injectLevelupCalculator-BdrTxpUg.js"))},function(){Pt("fsboxlog")&&Wr(import("./fsbox-BO4HH3Ei.js"))},function(){Pt("resizeQuickBuff")&&Wr(import("./interceptQuickBuff-Fs97xqyc.js"))},function(){Pt("joinAllLink")&&Wr(import("./injectJoinAllLink-DGORfNQb.js"))},function(){Pt("addServerNode")&&Wr(import("./injectServerNode-D0-_8Zv9.js"))},function(){Pt("addScoutTowerLink")&&Wr(import("./scoutTowerLink-X6bk5fT1.js"))},function(){Nr()&&Pt(ot)&&Wr(import("./guildActivity-CVt4vmXN.js"))},async function(){if(Nr()&&f.enableSeTracker){(await import("./trackerPrefStore-DcdVeCYR.js").then((function(e){return e.a}))).default.set(f.enableSeTracker)}}]
const uc=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function lc(){ps()||(uc.forEach(us),f.allyEnemyOnlineRefreshTime=1e3*Pt("allyEnemyOnlineRefreshTime"),f.useNewGuildLog&&(A(document.body,"click",ds),A(document.body,"auxclick",ds)),gs(cc))}function fc(e){const t=_(e)
t?.["new-ui"]&&(Pt("gameHelpLink")&&Wt(3,cs),f.huntingMode=Pt("huntingMode"),Wt(3,ts),lc(),Pt("hideHelperMenu")||Wt(3,xa))}function dc(){const e=function(){const e=n("html")
if(e?.dataset)return e.dataset.hcs}()
e&&fc(e)}function pc(){Nr()&&n("worldPage")&&window.GameData&&Wr(import("./newMap-gf8T0F01.js"))}function gc(e){$(e).qtip("hide")}function mc(e){Ca("needToPray",e),Ca("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}let hc=0
const yc='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',bc=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${Y}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
async function vc(e){const t=e.target.getAttribute("praytype")
t&&(Ar("notification","prayToGods"),gc(e.target),await Sa({cmd:"temple",subcmd:"pray",type:t}),hc.outerHTML=yc,mc(!1))}function wc(){qs(n("notifications"),bc),hc=n("helperPrayToGods"),$r(hc,"click",vc)}async function _c(){if(!f.enableTempleAlert)return
const e="temple"===f.cmd?document:await La({cmd:"temple"})
if(!e)return
const t=k("#pCC",e)
if(!t)return
const n="You are currently praying at the temple."!==ur(t)
n&&wc(),mc(n)}function kc(){Wr(import("./bioWidgets-Chf1lnPM.js"))}function jc(){Wr(import("./injectGuild-D8iaeFub.js"))}const xc=()=>{Wr(import("./guildAdvisor-mHtlGddz.js"))}
const $c=()=>{Wr(import("./groups-DlE1oxgN.js"))}
const Sc=()=>{Wr(import("./addRemoveTags-DWeMtND8.js"))}
const Lc=()=>{Wr(import("./guildChat-Bt5ob66f.js"))}
function Ec(){Wr(import("./viewRecipe-CSyTdP2y.js"))}function Oc(){Wr(import("./ufsgAllowBack-BrdKu0oi.js"))}function Pc(){Wr(import("./profile-DItF9OjU.js").then((function(e){return e.p})))}function Cc(){Wr(import("./news-CUVU3vKC.js"))}function Tc(){Wr(import("./viewArchive-DNHi8tAu.js"))}const Nc=()=>{Wr(import("./inventory-B90wJMxk.js"))},Ac=()=>{Wr(import("./bazaar-pAk4mF3f.js"))}
function Mc(){Wr(import("./injectQuestBookFull-IM5SqDqw.js"))}const Bc=()=>{Wr(import("./scavenging-g5W3Rc98.js"))}
const Hc=()=>{Wr(import("./toprated-Czo8Obnb.js"))}
const Rc=()=>{Wr(import("./trade-cHbttXnD.js"))}
var Dc={creatures:{"-":{"-":Oc}},items:{"-":{"-":Oc},view:{"-":()=>{Wr(import("./itemsView-D1LUYYlR.js"))}}},masterrealms:{"-":{"-":Oc}},quests:{"-":{"-":Oc},view:{"-":()=>{Wr(import("./showAllQuestSteps-dyRg5nRi.js"))}}},realms:{"-":{"-":Oc}},relics:{"-":{"-":Oc}},shops:{"-":{"-":Oc}},"-":{news:{"-":Cc},viewupdatearchive:{"-":Tc},viewarchive:{"-":Tc},"-":{"-":()=>{Wr(import("./unknownPage-DW4-6Ox0.js"))}}},arena:{"-":{"-":()=>{Wr(import("./arena-BAOjojNW.js").then((function(e){return e.c})))}},dojoin:{"-":()=>{Wr(import("./arenaDoJoin-DEK5ojz1.js"))}},join:{"-":()=>{Wr(import("./arenaJoin-C8QenF5M.js"))}},completed:{"-":()=>{Wr(import("./completedArenas-BU_Xp_F_.js"))}},pickmove:{"-":()=>{Wr(import("./storeMoves-B5uMNmMT.js"))}},setup:{"-":()=>{Wr(import("./setupMoves-OFf86ziJ.js"))}}},auctionhouse:{"-":{"-":()=>{Wr(import("./injectAuctionHouse-DYl1JUd1.js"))}},quickcreate:{"-":()=>{Wr(import("./quickCreate-gLGFpnXF.js"))}}},bank:{"-":{"-":()=>{Wr(import("./injectBank-S2z7dA4S.js"))}}},blacksmith:{repairall:{"-":function(){zt("fromworld")&&pc()}}},buffmarket:{"-":{"-":()=>{Wr(import("./injectBuffmarket-DmuweznO.js"))}}},combat:{attackplayer:{"-":Pc}},composing:{"-":{"-":()=>{Wr(import("./composing-DL8XqtCj.js"))}},breakdown:{"-":()=>{Wr(import("./breakdown-iCI_DnTP.js"))}},create:{"-":()=>{Wr(import("./composingCreate-BCaR7RbB.js"))}}},findplayer:{"-":{"-":()=>{Wr(import("./findplayer-s8Yi4e8Z.js"))}}},guild:{inventory:{report:()=>{Wr(import("./guildReport-CI0F2NWV.js"))},addtags:Sc,removetags:Sc,storeitems:()=>{Wr(import("./storeitems-DpzC3kOR.js"))}},chat:{"-":Lc},dochat:{"-":Lc},log:{"-":()=>{Wr(import("./guildLog--HEk36aP.js"))}},groups:{viewstats:()=>{Wr(import("./injectGroupStats-B0wdZ-oW.js"))},joinallgroupsundersize:$c,joinall:$c,"-":$c},manage:{"-":jc},advisor:{"-":xc,weekly:xc},history:{"-":kc},view:{"-":jc},scouttower:{"-":()=>{Wr(import("./injectScouttower-CInpiA1t.js"))}},mailbox:{"-":()=>{Wr(import("./guildMailbox-Chtwty96.js"))}},ranks:{"-":()=>{Wr(import("./rank-Cg7c7SYL.js"))}},conflicts:{rpupgrades:()=>{Wr(import("./injectRPUpgrades-a9W8UmaS.js"))}},bank:{"-":()=>{Wr(import("./injectGuildBank-CUAzq3vA.js"))}},hall:{"-":()=>{Wr(import("./hall-DNI98pxb.js"))},post:kc},"-":{"-":jc}},hellforge:{"-":{"-":()=>{Wr(import("./hellforge-CmN0aRp4.js"))}}},inventing:{"-":{"-":function(){Wr(import("./inventing-DY201VS-.js"))}},doinvent:{"-":Ec},viewrecipe:{"-":Ec}},log:{"-":{"-":()=>{Wr(import("./playerLog-BRvqafgL.js"))}}},marketplace:{createreq:{"-":()=>{Wr(import("./marketplace-BQw7F59L.js"))}}},news:{fsbox:{"-":()=>{Wr(import("./newsFsbox-BeOFp3_b.js"))}},"-":{"-":Cc},shoutbox:{"-":()=>{Wr(import("./newsShoutbox-Bi7Cxkk5.js"))}},viewupdatearchive:{"-":Tc},viewarchive:{"-":Tc}},notepad:{showlogs:{"-":zr},invmanagernew:{"-":Nc},guildinvmgr:{"-":Nc},recipemanager:{"-":ai},auctionsearch:{"-":Yr},onlineplayers:{"-":ti},quicklinkmanager:{"-":ri},monsterlog:{"-":Jr},quickextract:{"-":oi},quickwear:{"-":ii},fsboxcontent:{"-":Kr},bufflogcontent:{"-":Qr},newguildlog:{"-":Xr},findbuffs:{"-":Zr},findother:{"-":ei},savesettings:{"-":()=>{Wr(import("./load-CdfAHcgQ.js"))}},reliclist:{"-":si},whosgotwhat:{"-":()=>{}}},points:{"-":{"-":()=>{Wr(import("./points-Bx7dRK6U.js"))}}},potionbazaar:{"-":{"-":Ac},buyitem:{"-":Ac}},privatemessage:{"-":{"-":()=>{Wr(import("./privateMsg-iCz8XNiM.js"))}}},profile:{"-":{"-":Pc},managecombatset:{"-":Pc},report:{"-":Pc},equipitem:{"-":Pc},useitem:{"-":Pc},changebio:{"-":kc},dropitems:{"-":function(){Wr(import("./injectProfileDropItems-CS7rLnSs.js"))}}},pvpladder:{"-":{"-":()=>{Wr(import("./ladder-DRQQRQ67.js"))}}},questbook:{"-":{"-":Mc},atoz:{"-":Mc},viewquest:{"-":()=>{Wr(import("./injectQuestTracker-BHQARbQv.js"))}}},quickbuff:{"-":{"-":()=>{Wr(import("./quickBuff-B5yW5gY7.js"))}}},scavenging:{"-":{"-":Bc},process:{"-":Bc}},settings:{"-":{"-":()=>{Wr(import("./injectSettings-DJCIXFHO.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{Wr(import("./superelite-CAmF2KCG.js"))}}},tempinv:{"-":{"-":()=>{Wr(import("./mailbox-BzcR6zQN.js"))}}},temple:{"-":{"-":_c}},titan:{"-":{"-":()=>{Wr(import("./injectTitan-DW6cDl9V.js"))}}},toprated:{xp:{"-":Hc},monthlyxp:{"-":Hc},gold:{"-":Hc},killstreak:{"-":Hc},bounties:{"-":Hc},risingstars:{"-":Hc},arena:{"-":Hc},superelites:{"-":Hc},smasher:{"-":Hc},globalquest:{"-":()=>{Wr(import("./globalQuest-DjOa8rYE.js"))}}},trade:{"-":{"-":Rc},sendgold:{"-":Rc},createsecure:{"-":Rc},docreatesecure:{"-":Rc}},world:{"-":{"-":pc}}}
function Ic(e){return Rr("li",e)}function Uc(e){return Rr("ul",e)}const Gc=()=>Dr({className:"fshQuickLinks",style:{left:`${Pt("quickLinksLeftPx")}px`,top:`${Pt("quickLinksTopPx")}px`}}),qc=e=>"newWindow"in e&&e.url&&e.name
function Fc(e,t){const n=Gr(t,Uc())
e.filter(qc).forEach((e=>{Gr(Gr(n,Ic()),function(e){const t=Li({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return rs(t,(()=>Ar("chrome","quick link",e.name))),t}(e))}))}function Wc(){if(!k(".mainbody"))return
const e=Ws("quickLinks")||[]
e.length&&function(e){const t=Gc()
t.classList.toggle("fshFixed",Pt("keepHelperMenuOnScreen")),Pt("draggableQuickLinks")&&(t.classList.add("fshMove"),Tr(t)),Fc(e,t),Gr(document.body,t)}(e)}let Qc=0,zc=0,Jc=0,Kc="",Xc=0,Vc=0
function Yc(e){return zt(e)||"-"}function Zc(e){const t=k(e)
return t?.value||"-"}function eu(){if(w(Dc[Qc])&&w(Dc[Qc][zc])&&v(Dc[Qc][zc][Jc]))return Dc[Qc][zc][Jc]}function tu(){""!==document.location.search?(Qc=Yc("cmd"),zc=Yc("subcmd"),Jc=Yc("subcmd2"),["points","privatemessage"].includes(Qc)&&(Kc=`/${Yc("type")}`)):(Qc=Zc('input[name="cmd"]'),zc=Zc('input[name="subcmd"]'),Jc=Zc('input[name="subcmd2"]')),f.cmd=Qc,f.subcmd=zc,f.subcmd2=Jc,Vc=`${Qc}/${zc}/${Jc}${Kc}`,Xc=eu()}function nu(){v(Xc)&&(b(Vc),Xc())}async function ou(e){tu(),await e,dc(),Wt(3,nu),Pt("playNewMessageSound")&&Wt(3,jr),ps()||Wt(3,Wc)}const ru=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,m]
function iu(e,t){if(ru.some((e=>e())))return
const n=j("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
T(),function(e,t){f.gmInfo=_(decodeURIComponent(t)),f.gmInfo?f.fshVer=e:f.fshVer=`${e}_native`,f.calfVer="125"}(e,t),h(),ou(n)}export{Fa as $,G as A,Uc as B,Mr as C,$s as D,Ti as E,Ci as F,Sa as G,$a as H,$t as I,St as J,is as K,Go as L,tn as M,Ao as N,On as O,Cn as P,Bn as Q,bo as R,qo as S,Sn as T,jn as U,qn as V,Un as W,Nn as X,Mn as Y,Ho as Z,Jt as _,Ua as a,cr as a$,Ln as a0,Zt as a1,Ws as a2,Pn as a3,In as a4,Mo as a5,Fn as a6,zs as a7,o as a8,Ss as a9,Ei as aA,ci as aB,l as aC,Ve as aD,Me as aE,Be as aF,Ue as aG,He as aH,gc as aI,s as aJ,ke as aK,Z as aL,Ne as aM,H as aN,Bi as aO,We as aP,Hi as aQ,bi as aR,_ as aS,Wt as aT,Ir as aU,pt as aV,dt as aW,mt as aX,gt as aY,ht as aZ,rr as a_,zt as aa,or as ab,zr as ac,Jr as ad,Ca as ae,ws as af,f as ag,Qs as ah,Pt as ai,Ur as aj,he as ak,xr as al,Tn as am,rt as an,B as ao,Y as ap,ur as aq,Da as ar,Ds as as,ce as at,ue as au,Qt as av,Ee as aw,re as ax,kt as ay,ir as az,A as b,U as b$,e as b0,v as b1,Ae as b2,Gn as b3,En as b4,xe as b5,on as b6,ve as b7,yo as b8,I as b9,Aa as bA,Na as bB,Ma as bC,Re as bD,De as bE,Je as bF,Fe as bG,fs as bH,Ea as bI,Ga as bJ,mn as bK,wt as bL,Wa as bM,w as bN,Lt as bO,at as bP,Si as bQ,Ba as bR,le as bS,_t as bT,ac as bU,Ct as bV,Le as bW,vi as bX,et as bY,os as bZ,tt as b_,qe as ba,ze as bb,Po as bc,Eo as bd,Oo as be,Co as bf,so as bg,Do as bh,Io as bi,Uo as bj,D as bk,Se as bl,Qo as bm,Wo as bn,J as bo,Tt as bp,xt as bq,ae as br,Ia as bs,sn as bt,ao as bu,Qe as bv,Ie as bw,Xe as bx,Ye as by,Ze as bz,fr as c,W as c$,Nr as c0,Rr as c1,ge as c2,nt as c3,ft as c4,X as c5,r as c6,ct as c7,Is as c8,cn as c9,ut as cA,b as cB,Cc as cC,Mc as cD,Ec as cE,N as cF,ki as cG,R as cH,oa as cI,zi as cJ,Ki as cK,Xi as cL,Ji as cM,ea as cN,vt as cO,bt as cP,Dn as cQ,en as cR,V as cS,q as cT,Q as cU,z as cV,ot as cW,Vr as cX,be as cY,K as cZ,Us as c_,Jn as ca,fn as cb,dn as cc,ln as cd,co as ce,lo as cf,Ro as cg,vo as ch,Xt as ci,oo as cj,no as ck,jo as cl,Gs as cm,_i as cn,pe as co,Ic as cp,t as cq,j as cr,st as cs,Wr as ct,hn as cu,ns as cv,ne as cw,M as cx,yt as cy,F as cz,qr as d,ni as d0,jc as d1,An as d2,No as d3,Vo as d4,Oe as d5,Pe as d6,ro as d7,Tr as d8,sr as d9,Kr as dA,Oi as dB,we as dC,_e as dD,lt as dE,ui as dF,$e as dG,se as dH,Rn as dI,an as dJ,Ka as dK,te as dL,gn as dM,oi as dN,ii as dO,iu as dP,Hn as da,zn as db,Bo as dc,me as dd,ie as de,Xn as df,de as dg,io as dh,pn as di,Te as dj,gs as dk,Fr as dl,ai as dm,fe as dn,Qr as dp,ri as dq,Yr as dr,ti as ds,ei as dt,Zr as du,Xr as dv,_r as dw,Ce as dx,_c as dy,wc as dz,La as e,ms as f,n as g,ls as h,Gr as i,it as j,as as k,jt as l,Dr as m,Li as n,rs as o,kr as p,k as q,i as r,Ar as s,je as t,wi as u,qs as v,hs as w,ar as x,ic as y,$r as z}
//# sourceMappingURL=calfSystem-CgXU6vdM.js.map
