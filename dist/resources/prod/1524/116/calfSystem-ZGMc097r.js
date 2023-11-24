function e(e){return void 0===e}function t(e){return new Promise((t=>{const n=document.createElement("script")
n.async=!0,n.onload=t,n.src=e,document.body.appendChild(n)}))}function n(e,t){return t?t.getElementById(e):document.getElementById(e)}function o(e){if(e instanceof Node)return e.textContent}function r(e,t){return e.exec(t)}function a(e,t){const n=r(e,t)
if(n)return n[1]}let i=null
const s=()=>function(){const e=n("statbar-character")
return e&&o(e)}()||"string"==typeof window.self&&window.self
function c(){if(!i){const e=s()
e&&(i=e)}return i}var u={}
const l=["www.keeprefreshing.com"]
let f=!1,d=!1
function p(){if(!d){const e=a(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
f=l.includes(e),d=!0}return f}function h(){!function(){t("https://www.googletagmanager.com/gtag/js?id=G-14Y99WX8XL"),window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},gtag("js",new Date)
const e=c()
gtag("config","G-14Y99WX8XL",{app_name:"fshApp",app_version:`${u.fshVer}(${u.calfVer})`,send_page_view:!1,...e&&{user_id:e}})}()}function m(){return p()||e(window.ga)}function g(e){m()||(ga("fshApp.set","screenName",e),ga("fshApp.send","screenview"))}const y={}
function b(e,t,n){y[`${e}:${t}:${n}`]=1e3*performance.now()}function v(e,t,n){m()||function(e,t,n){const o=Math.round(1e3*performance.now()-y[`${e}:${t}:${n}`])/1e3
o>10&&ga("fshApp.send","timing",e,t,Math.round(o),n)}(e,t,n)}function w(e){return"function"==typeof e}function k(e){return"object"==typeof e}function _(e,t){try{return JSON.parse(e,t)}catch(e){}}function j(e,t){return t?t.querySelector(e):document.querySelector(e)}function S(e){const t=j("link",document.body)
return new Promise((n=>{const o=document.createElement("link")
o.type="text/css",o.rel="stylesheet",o.onload=()=>{n()},o.href=e,t?t.before(o):document.body.append(o)}))}var x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function L(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var E={exports:{}}
E.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==x?x:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var o=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})})),n}var o={},r={},a={},i={},s="<unknown>"
function c(e){return e.split("\n").reduce((function(e,t){var n=f(t)||p(t)||g(t)||w(t)||b(t)
return n&&e.push(n),e}),[])}var u=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,l=/\((\S*)(?::(\d+))(?::(\d+))\)/
function f(e){var t=u.exec(e)
if(!t)return null
var n=t[2]&&0===t[2].indexOf("native"),o=t[2]&&0===t[2].indexOf("eval"),r=l.exec(t[2])
return o&&null!=r&&(t[2]=r[1],t[3]=r[2],t[4]=r[3]),{file:n?null:t[2],methodName:t[1]||s,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var d=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function p(e){var t=d.exec(e)
return t?{file:t[2],methodName:t[1]||s,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var h=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,m=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function g(e){var t=h.exec(e)
if(!t)return null
var n=t[3]&&t[3].indexOf(" > eval")>-1,o=m.exec(t[3])
return n&&null!=o&&(t[3]=o[1],t[4]=o[2],t[5]=null),{file:t[3],methodName:t[1]||s,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var y=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i
function b(e){var t=y.exec(e)
return t?{file:t[3],methodName:t[1]||s,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var v=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
function w(e){var t=v.exec(e)
return t?{file:t[2],methodName:t[1]||s,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var k=n(Object.freeze({__proto__:null,parse:c}))
!function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n)
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
Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowserConfig=t.clone=t.formatCGIData=t.filterUrl=t.filter=t.generateStackTrace=t.endpoint=t.instrument=t.isErrorObject=t.makeNotice=t.logger=t.sanitize=t.shallowClone=t.runAfterNotifyHandlers=t.runBeforeNotifyHandlers=t.getSourceForBacktrace=t.getCauses=t.calculateBacktraceShift=t.DEFAULT_BACKTRACE_SHIFT=t.makeBacktrace=t.objectIsExtensible=t.objectIsEmpty=t.mergeNotice=t.merge=void 0
var s=r(k)
function c(e,t){var n={}
for(var o in e)n[o]=e[o]
for(var o in t)n[o]=t[o]
return n}function u(e,t){var n=c(e,t)
return e.context&&t.context&&(n.context=c(e.context,t.context)),n}function l(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
return!0}function f(e){return"function"!=typeof Object.isExtensible||Object.isExtensible(e)}function d(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=console),!e)return[]
try{var o=s.parse(e).map((function(e){return{file:e.file,method:e.methodName,number:e.lineNumber,column:e.column}}))
return t&&o.splice(0,h(o)),o}catch(e){return n.debug(e),[]}}function p(e){var t=!1,n=!1
return e.file&&(t=e.file.toLowerCase().indexOf("@honeybadger-io")>-1),e.method&&(n=e.method.toLowerCase().indexOf("@honeybadger-io")>-1),t||n}function h(e){for(var n=0,o=0;o<e.length;o++){var r=e[o]
if(!p(r)){if(!r.file||"<anonymous>"===r.file){var a=e[o+1]
if(a&&p(a)){n++
continue}}break}n++}return n||t.DEFAULT_BACKTRACE_SHIFT}function m(e,t){if(e.cause){for(var n=[],o=e;n.length<3&&(o=o.cause);)n.push({class:o.name,message:o.message,backtrace:"string"==typeof o.stack?d(o.stack,!1,t):null})
return n}return[]}function g(e,t){return a(this,void 0,void 0,(function(){var n,o,r,a
return i(this,(function(i){switch(i.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
o=0,i.label=1
case 1:return e.length?(r=e.splice(0)[o],[4,t(r.file)]):[3,3]
case 2:return a=i.sent(),n[o]=N(a,r.number),o++,[3,1]
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
try{return a(e,t)}catch(e){return"[ERROR] ".concat(e)}}return i(e)}function _(e){var t=function(t){return function(){for(var n,o=[],r=0;r<arguments.length;r++)o[r]=arguments[r]
if("debug"===t){if(!e.config.debug)return
t="log"}o.unshift("[Honeybadger]"),(n=e.config.logger)[t].apply(n,o)}}
return{log:t("log"),info:t("info"),debug:t("debug"),warn:t("warn"),error:t("error")}}function j(e){var t
if(e)if(S(e)){var n=e
t=c(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?v(e):{message:String(e)}
else t={}
return t}function S(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function $(e,t,n){if(e&&t&&n&&t in e)try{for(var o=e[t];o&&o.__hb_original;)o=o.__hb_original
e[t]=n(o),e[t].__hb_original=o}catch(e){}}function x(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function L(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function E(e,t){if(T("Object",e)){T("Array",t)||(t=[])
var n=[]
return o(e)}function o(e){var r,a
if(T("Object",e)||T("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(T("Object",e)){for(r in a={},e)P(r,t)?a[r]="[FILTERED]":a[r]=o(e[r])
return a}return T("Array",e)?e.map((function(e){return o(e)})):T("Function",e)?"[FUNC]":e}}function P(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function T(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function O(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var o=e
return n.split(/[&]\s?/).forEach((function(e){var n=e.split("=",2),r=n[0],a=n[1]
P(r,t)&&(o=o.replace("".concat(r,"=").concat(a),"".concat(r,"=[FILTERED]")))})),o}function C(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach((function(o){var r=t+o.replace(/\W/g,"_").toUpperCase()
n[r]=e[o]})),n}function A(e){return JSON.parse(JSON.stringify(e))}function N(e,t,n){if(void 0===n&&(n=2),!e)return null
var o=e.split("\n")
o.unshift("")
for(var r=t+n,a={},i=t-n;i<=r;i++){var s=o[i]
"string"==typeof s&&(a[i]=s)}return a}function M(e){return void 0!==e.async}t.merge=c,t.mergeNotice=u,t.objectIsEmpty=l,t.objectIsExtensible=f,t.makeBacktrace=d,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=h,t.getCauses=m,t.getSourceForBacktrace=g,t.runBeforeNotifyHandlers=y,t.runAfterNotifyHandlers=b,t.shallowClone=v,t.sanitize=w,t.logger=_,t.makeNotice=j,t.isErrorObject=S,t.instrument=$,t.endpoint=x,t.generateStackTrace=L,t.filter=E,t.filterUrl=O,t.formatCGIData=C,t.clone=A,t.isBrowserConfig=M}(i)
var _={}
Object.defineProperty(_,"__esModule",{value:!0}),_.GlobalStore=void 0
var j=i,S=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,j.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
_.GlobalStore=S
var $=e&&e.__assign||function(){return $=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},$.apply(this,arguments)},L=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function s(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):r(e.value).then(i,s)}c((o=o.apply(e,t||[])).next())}))},E=e&&e.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1]
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
Object.defineProperty(a,"__esModule",{value:!0}),a.Client=void 0
var P=i,T=_,O=/,|\s+/,C=/\S/,A=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.6.1"},this.config=$({apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]},e),this.__initStore(),this.__transport=t,this.logger=(0,P.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
return this.loadPlugins(),this},e.prototype.loadPlugins=function(){var e=this;(this.__pluginsLoaded?this.config.__plugins.filter((function(e){return e.shouldReloadOnConfigure})):this.config.__plugins).forEach((function(t){return t.load(e)})),this.__pluginsLoaded=!0},e.prototype.__initStore=function(){this.__store=new T.GlobalStore({context:{},breadcrumbs:[]},this.config.maxBreadcrumbs)},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&null!=e&&this.__store.setContext(e),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__store.clear(),"object"==typeof e&&null!==e&&this.__store.setContext(e),this},e.prototype.clear=function(){return this.__store.clear(),this},e.prototype.notify=function(e,t,n){var o=this
void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var r=this.makeNotice(e,t,n),a=r&&r.backtrace?r.backtrace.map((function(e){return(0,P.shallowClone)(e)})):null,i=this.__runPreconditions(r)
return i instanceof Error?((0,P.runAfterNotifyHandlers)(r,this.__afterNotifyHandlers,i),!1):i instanceof Promise?(i.then((function(e){return e instanceof Error?((0,P.runAfterNotifyHandlers)(r,o.__afterNotifyHandlers,e),!1):o.__send(r,a)})),!0):(this.__send(r,a).catch((function(e){})),!0)},e.prototype.notifyAsync=function(e,t,n){var o=this
return void 0===t&&(t=void 0),void 0===n&&(n=void 0),new Promise((function(r,a){var i,s
i=e.afterNotify?e:t&&t.afterNotify?t:n&&n.afterNotify?n:t&&"object"==typeof t?t:n||(t={}),s=i.afterNotify,i.afterNotify=function(e){if(null==s||s.call(o,e),e)return a(e)
r()},o.notify(e,t,n)}))},e.prototype.makeNotice=function(e,t,n){void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var o=(0,P.makeNotice)(e)
if(t&&"object"!=typeof t&&(t={name:String(t)}),t&&(o=(0,P.mergeNotice)(o,t)),"object"==typeof n&&null!==n&&(o=(0,P.mergeNotice)(o,n)),(0,P.objectIsEmpty)(o))return null
var r=this.__store.getContents("context"),a=this.__constructTags(o.tags),i=this.__constructTags(r.tags),s=this.__constructTags(this.config.tags),c=a.concat(i).concat(s),u=c.filter((function(e,t){return c.indexOf(e)===t}))
return o=(0,P.merge)(o,{name:o.name||"Error",context:(0,P.merge)(r,o.context),projectRoot:o.projectRoot||this.config.projectRoot,environment:o.environment||this.config.environment,component:o.component||this.config.component,action:o.action||this.config.action,revision:o.revision||this.config.revision,tags:u}),Array.isArray(o.backtrace)&&o.backtrace.length||("string"==typeof o.stack&&o.stack.trim()?o.backtrace=(0,P.makeBacktrace)(o.stack,!1,this.logger):(o.stack=(0,P.generateStackTrace)(),o.backtrace=(0,P.makeBacktrace)(o.stack,!0,this.logger))),o},e.prototype.addBreadcrumb=function(e,t){if(this.config.breadcrumbsEnabled){t=t||{}
var n=(0,P.shallowClone)(t.metadata),o=t.category||"custom",r=(new Date).toISOString()
return this.__store.addBreadcrumb({category:o,message:e,metadata:n,timestamp:r}),this}},e.prototype.__getBreadcrumbs=function(){return this.__store.getContents("breadcrumbs").slice()},e.prototype.__getContext=function(){return this.__store.getContents("context")},e.prototype.__developmentMode=function(){return!0!==this.config.reportData&&this.config.environment&&this.config.developmentEnvironments.includes(this.config.environment)},e.prototype.__buildPayload=function(e){var t=(0,P.filter)(e.headers,this.config.filters)||{},n=(0,P.filter)($($({},e.cgiData),(0,P.formatCGIData)(t,"HTTP_")),this.config.filters)
return{notifier:this.__notifier,breadcrumbs:{enabled:!!this.config.breadcrumbsEnabled,trail:e.__breadcrumbs||[]},error:{class:e.name,message:e.message,backtrace:e.backtrace,fingerprint:e.fingerprint,tags:e.tags,causes:(0,P.getCauses)(e,this.logger)},request:{url:(0,P.filterUrl)(e.url,this.config.filters),component:e.component,action:e.action,context:e.context,cgi_data:n,params:(0,P.filter)(e.params,this.config.filters)||{},session:(0,P.filter)(e.session,this.config.filters)||{}},server:{project_root:e.projectRoot,environment_name:e.environment,revision:e.revision,hostname:this.config.hostname,time:(new Date).toUTCString()},details:e.details||{}}},e.prototype.__constructTags=function(e){return e?e.toString().split(O).filter((function(e){return C.test(e)})):[]},e.prototype.__runPreconditions=function(e){var t=this,n=null
e||(this.logger.debug("failed to build error report"),n=new Error("failed to build error report")),!1===this.config.reportData&&(this.logger.debug("skipping error report: honeybadger.js is disabled",e),n=new Error("honeybadger.js is disabled")),this.__developmentMode()&&(this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.",e),n=new Error("honeybadger.js is in development mode")),this.config.apiKey||(this.logger.warn("could not send error report: no API key has been configured",e),n=new Error("missing API key"))
var o=(0,P.runBeforeNotifyHandlers)(e,this.__beforeNotifyHandlers)
return n||o.result||(this.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers returned false")),o.results.length&&o.results.some((function(e){return e instanceof Promise}))?Promise.allSettled(o.results).then((function(o){if(!n&&o.some((function(e){return"rejected"===e.status||!1===e.value}))&&(t.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers (async) returned false")),n)return n})):n},e.prototype.__send=function(e,t){var n=this
return this.config.breadcrumbsEnabled?(this.addBreadcrumb("Honeybadger Notice",{category:"notice",metadata:{message:e.message,name:e.name,stack:e.stack}}),e.__breadcrumbs=this.__store.getContents("breadcrumbs")):e.__breadcrumbs=[],(0,P.getSourceForBacktrace)(t,this.__getSourceFileHandler).then((function(t){return L(n,void 0,void 0,(function(){var n
return E(this,(function(o){return t.forEach((function(t,n){e.backtrace[n].source=t})),n=this.__buildPayload(e),[2,this.__transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json",Accept:"text/json, application/json"},method:"POST",endpoint:(0,P.endpoint)(this.config.endpoint,"/v1/notices/js"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},n)]}))}))})).then((function(t){if(201!==t.statusCode)return(0,P.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,new Error("Bad HTTP response: ".concat(t.statusCode))),n.logger.warn("Error report failed: unknown response from server. code=".concat(t.statusCode)),!1
var o=JSON.parse(t.body).id
return(0,P.runAfterNotifyHandlers)((0,P.merge)(e,{id:o}),n.__afterNotifyHandlers),n.logger.info("Error report sent ⚡ https://app.honeybadger.io/notice/".concat(o)),!0})).catch((function(t){return n.logger.error("Error report failed: an unknown error occurred.","message=".concat(t.message)),(0,P.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,t),!1}))},e}()
a.Client=A
var N={}
Object.defineProperty(N,"__esModule",{value:!0}),function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n)
var r=Object.getOwnPropertyDescriptor(t,n)
r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),o=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||n(t,e,o)},s=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return o(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.Util=t.Types=t.Client=void 0
var c=a
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return c.Client}}),r(_,t),t.Types=s(N),t.Util=s(i)}(r)
var M={}
function B(e){if(!e||!e.tagName)return""
var t=e.tagName.toLowerCase()
if("html"===t)return""
e.id&&(t+="#".concat(e.id))
var n=e.getAttribute("class")
n&&n.split(/\s+/).forEach((function(e){t+=".".concat(e)})),["alt","name","title","type"].forEach((function(n){var o=e.getAttribute(n)
o&&(t+="[".concat(n,'="').concat(o,'"]'))}))
var o=W(e)
return o.length>1&&(t+=":nth-child(".concat(Array.prototype.indexOf.call(o,e)+1,")")),t}function H(e){var t=B(e)
if(e.parentNode&&e.parentNode.tagName){var n=H(e.parentNode)
if(n.length>0)return"".concat(n," > ").concat(t)}return t}function R(e){var t=e.textContent||e.innerText||""
return t||"submit"!==e.type&&"button"!==e.type||(t=e.value),Q(t.trim(),300)}function G(){var e=J()
if(!e.fetch)return!1
if(D(e.fetch))return!0
if("undefined"==typeof document)return!1
try{var t=document.createElement("iframe")
t.style.display="none",document.head.appendChild(t)
var n=t.contentWindow.fetch&&D(t.contentWindow.fetch)
return document.head.removeChild(t),n}catch(e){console&&console.warn&&console.warn("failed to detect native fetch via iframe: "+e)}return!1}function D(e){return-1!==e.toString().indexOf("native")}function I(e){var t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)||{}
return{protocol:t[2],host:t[4],pathname:t[5]}}function U(e){var t=I(e),n=I(document.URL)
return t.host&&t.protocol?t.protocol===n.protocol&&t.host===n.host?t.pathname:"".concat(t.protocol,"://").concat(t.host).concat(t.pathname):t.pathname}function F(e){var t={}
return e.split(/[;,]\s?/).forEach((function(e){var n=e.split("=",2),o=n[0],r=n[1]
t[o]=r})),t}function q(e){if("object"==typeof e){var t=[]
for(var n in e)t.push(n+"="+e[n])
return t.join(";")}}function W(e){try{var t=e.parentNode.childNodes,n=[]
return Array.prototype.forEach.call(t,(function(t){t.tagName&&t.tagName===e.tagName&&n.push(t)})),n}catch(e){return[]}}function Q(e,t){return e.length>t&&(e=e.substr(0,t)+"..."),e}function J(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}Object.defineProperty(M,"__esModule",{value:!0}),M.globalThisOrWindow=M.preferCatch=M.encodeCookie=M.decodeCookie=M.localURLPathname=M.parseURL=M.nativeFetch=M.stringTextOfElement=M.stringSelectorOfElement=M.stringNameOfElement=void 0,M.stringNameOfElement=B,M.stringSelectorOfElement=H,M.stringTextOfElement=R,M.nativeFetch=G,M.parseURL=I,M.localURLPathname=U,M.decodeCookie=F,M.encodeCookie=q,M.preferCatch=function(){var e=!0
if("undefined"==typeof window)return e
if(window.atob||(e=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(e=!1)}catch(e){}return e}(),M.globalThisOrWindow=J
var z={}
Object.defineProperty(z,"__esModule",{value:!0}),z.onError=z.ignoreNextOnError=void 0
var K,X=r,V=M,Y=X.Util.instrument,Z=X.Util.makeNotice,ee=0
function te(){ee+=1,clearTimeout(K),K=setTimeout((function(){ee=0}))}function ne(e){return void 0===e&&(e=(0,V.globalThisOrWindow)()),{load:function(t){Y(e,"onerror",(function(n){var o=function(e,n,o,r,a){if(t.logger.debug("window.onerror callback invoked",arguments),ee>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(ee-=1)
if(0===o&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var i=Z(a)
i.name||(i.name="window.onerror"),i.message||(i.message=e),i.stack||(i.stack=[i.message,"\n    at ? (",n||"unknown",":",o||0,":",r||0,")"].join("")),t.addBreadcrumb("window.onerror"!==i.name&&i.name?"window.onerror: ".concat(i.name):"window.onerror",{category:"error",metadata:{name:i.name,message:i.message,stack:i.stack}}),t.config.enableUncaught&&t.notify(i)}}
return function(t,r,a,i,s){return o(t,r,a,i,s),"function"==typeof n&&n.apply(e,arguments)}}))}}}z.ignoreNextOnError=te,z.onError=ne
var oe={}
Object.defineProperty(oe,"__esModule",{value:!0})
var re=M,ae=r.Util.instrument
function ie(e){return void 0===e&&(e=(0,re.globalThisOrWindow)()),{load:function(t){t.config.enableUnhandledRejection&&ae(e,"onunhandledrejection",(function(e){function n(e){var n
if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var o=e.reason
if(o instanceof Error){var r="unknown",a=0,i="".concat(o.message,"\n    at ? (").concat(r,":").concat(a,")"),s=o.stack||i,c={name:o.name,message:"UnhandledPromiseRejectionWarning: ".concat(o),stack:s}
return t.addBreadcrumb("window.onunhandledrejection: ".concat(c.name),{category:"error",metadata:c}),void t.notify(c)}var u="string"==typeof o?o:null!==(n=JSON.stringify(o))&&void 0!==n?n:"Unspecified reason"
t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: ".concat(u)})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}}))}}}oe.default=ie
var se={}
Object.defineProperty(se,"__esModule",{value:!0})
var ce=r,ue=M,le=ce.Util.sanitize,fe=ce.Util.instrument
function de(e){return void 0===e&&(e=(0,ue.globalThisOrWindow)()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function o(e){return Array.isArray(e)?e.map((function(e){try{return String(e)}catch(e){return"[unknown]"}})).join(" "):""}n("console")&&["debug","info","warn","error","log"].forEach((function(n){fe(e.console,n,(function(r){return function(){var a=Array.prototype.slice.call(arguments),i=o(a),s={category:"log",metadata:{level:n,arguments:le(a,3)}}
t.addBreadcrumb(i,s),"function"==typeof r&&Function.prototype.apply.call(r,e.console,arguments)}}))}))}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",(function(e){var n,o,r
try{n=(0,ue.stringNameOfElement)(e.target),o=(0,ue.stringSelectorOfElement)(e.target),r=(0,ue.stringTextOfElement)(e.target)}catch(e){n="UI Click",o="[unknown]",r="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:o,text:r,event:e}})}),!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(fe(XMLHttpRequest.prototype,"open",(function(e){return function(){var t=this,n=arguments[1],o="string"==typeof n?n:String(n),r="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],a="".concat(r," ").concat((0,ue.localURLPathname)(o))
this.__hb_xhr={type:"xhr",method:r,url:o,message:a},"function"==typeof e&&e.apply(t,arguments)}})),fe(XMLHttpRequest.prototype,"send",(function(e){return function(){var n=this
function o(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?fe(n,"onreadystatechange",(function(e){return function(){o(),"function"==typeof e&&e.apply(this,arguments)}})):n.onreadystatechange=o,"function"==typeof e&&e.apply(n,arguments)}}))),n("network")&&(0,ue.nativeFetch)()&&fe(e,"fetch",(function(n){return function(){var o,r=arguments[0],a="GET"
"string"==typeof r?o=r:"Request"in e&&r instanceof Request?(o=r.url,r.method&&(a=r.method)):o=String(r),arguments[1]&&arguments[1].method&&(a=arguments[1].method),"string"==typeof a&&(a=a.toUpperCase())
var i="".concat(a," ").concat("undefined"==typeof document?o:(0,ue.localURLPathname)(o)),s={type:"fetch",method:a,url:o}
return n.apply(this,arguments).then((function(e){return s.status_code=e.status,t.addBreadcrumb(i,{category:"request",metadata:s}),e})).catch((function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:s}),e}))}})),function(){if(n("navigation")&&null!=e.location){var o=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",(function(t){r(o,e.location.href)})),void 0!==e.history&&(fe(e.history,"pushState",a),fe(e.history,"replaceState",a))}function r(e,n){o=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function a(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&r(o,String(t)),e.apply(this,arguments)}}}()}}}se.default=de
var pe={}
Object.defineProperty(pe,"__esModule",{value:!0})
var he=M,me=r.Util.instrument
function ge(e){return void 0===e&&(e=(0,he.globalThisOrWindow)()),{load:function(t){!function(){function n(e){return function(n){return function(o,r){if("function"==typeof o){var a=Array.prototype.slice.call(arguments,2)
return o=t.__wrap(o,e),n((function(){o.apply(void 0,a)}),r)}return n(o,r)}}}me(e,"setTimeout",n({component:"setTimeout"})),me(e,"setInterval",n({component:"setInterval"}))}()}}}pe.default=ge
var ye={}
Object.defineProperty(ye,"__esModule",{value:!0})
var be=M,ve=r.Util.instrument
function we(e){return void 0===e&&(e=(0,be.globalThisOrWindow)()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach((function(n){var o=e[n]&&e[n].prototype
o&&Object.prototype.hasOwnProperty.call(o,"addEventListener")&&(ve(o,"addEventListener",(function(e){var o={component:"".concat(n,".prototype.addEventListener")}
return function(n,r,a,i){try{r&&null!=r.handleEvent&&(r.handleEvent=t.__wrap(r.handleEvent,o))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(r,o),a,i)}})),ve(o,"removeEventListener",(function(e){return function(n,o,r,a){return e.call(this,n,o,r,a),e.call(this,n,t.__wrap(o),r,a)}})))}))}}}ye.default=we
var ke={},_e=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function s(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):r(e.value).then(i,s)}c((o=o.apply(e,t||[])).next())}))},je=e&&e.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1]
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
Object.defineProperty(ke,"__esModule",{value:!0}),ke.BrowserTransport=void 0
var Se=M,$e=r.Util.sanitize
function xe(e){return Object.entries(e)}var Le=function(){function e(e){void 0===e&&(e={}),this.headers={},this.headers=e}return e.prototype.defaultHeaders=function(){return this.headers},e.prototype.send=function(e,t){return _e(this,void 0,void 0,(function(){var n,o,r,a,i
return je(this,(function(s){switch(s.label){case 0:return n=e.headers?xe(e.headers):[],o=this.defaultHeaders(),n.forEach((function(e){var t=e[0],n=e[1]
null!=t&&null!=n&&(o[String(t)]=String(n))})),r={method:e.method,headers:o},"POST"===e.method&&(r.body=t?JSON.stringify($e(t,e.maxObjectDepth)):void 0),[4,(0,Se.globalThisOrWindow)().fetch(e.endpoint,r)]
case 1:return[4,(a=s.sent()).text()]
case 2:return i=s.sent(),[2,Promise.resolve({statusCode:a.status,body:i})]}}))}))},e}()
ke.BrowserTransport=Le,function(t){var n,o=e&&e.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
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
var u=r,l=M,f=z,d=c(oe),p=c(se),h=c(pe),m=c(ye),g=ke,y=u.Util.merge,b=u.Util.filter,v=u.Util.objectIsExtensible,w=function(){var e=(0,l.globalThisOrWindow)(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},k=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=k
var _=function(n){function r(e){void 0===e&&(e={})
var t=n.call(this,a({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:w()},e),new g.BrowserTransport)||this
return t.__errorsSent=0,t.__lastWrapErr=void 0,t.__lastNoticeId=void 0,t.__beforeNotifyHandlers=[function(e){return t.__exceedsMaxErrors()?(t.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),t.__incrementErrorsCount(),!0)}],t.__afterNotifyHandlers=[function(e,n){n&&(t.__lastNoticeId=n.id)}],t}return o(r,n),r.prototype.configure=function(e){return void 0===e&&(e={}),n.prototype.configure.call(this,e)},r.prototype.resetMaxErrors=function(){return this.__errorsSent=0},r.prototype.factory=function(e){var t=new r(e)
return t.setNotifier(this.getNotifier()),t},r.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},r.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var t
return s(this,(function(n){return this.config&&this.config.apiKey?this.__lastNoticeId?void 0===(t=(0,l.globalThisOrWindow)()).document?(this.logger.debug("global.document is undefined. Cannot attach script"),[2]):this.isUserFeedbackScriptUrlAlreadyVisible()?(this.logger.debug("User feedback form is already visible"),[2]):(t.honeybadgerUserFeedbackOptions=a(a({},e),{apiKey:this.config.apiKey,endpoint:this.config.userFeedbackEndpoint,noticeId:this.__lastNoticeId}),this.appendUserFeedbackScriptTag(t,e),[2]):(this.logger.debug("Can't show user feedback form without a notice already reported"),[2]):(this.logger.debug("Client not initialized"),[2])}))}))},r.prototype.appendUserFeedbackScriptTag=function(t,n){void 0===n&&(n={})
var o=t.document.createElement("script")
o.setAttribute("src",this.getUserFeedbackSubmitUrl()),o.setAttribute("async","true"),n.onLoad&&(o.onload=n.onLoad),(e.document.head||e.document.body).appendChild(o)},r.prototype.isUserFeedbackScriptUrlAlreadyVisible=function(){for(var e=(0,l.globalThisOrWindow)(),t=this.getUserFeedbackSubmitUrl(),n=0;n<e.document.scripts.length;n++)if(e.document.scripts[n].src===t)return!0
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
throw o.__lastWrapErr=e,(0,f.ignoreNextOnError)(),o.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),o.config.enableUncaught&&o.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},r.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},r.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},r}(u.Client),j=new _({__plugins:[(0,f.onError)(),(0,d.default)(),(0,h.default)(),(0,m.default)(),(0,p.default)()]}),S={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.6.1"}
j.setNotifier(S)
var $=r
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return $.Types}}),t.default=j}(o)
var Ee=t(o)
return Ee}()
var P=L(E.exports)
const T=["attackplayer.min.js","dynamically imported module","fs.min.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","play method is not allowed","world.min.js","openuserjs.org"],O=e=>T.some((t=>e.includes(t)))
function C(e){if(O(e.stack))return!1}function A(){!function(){P.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.116"})
const e=c()
e&&P.setContext({user_id:e}),P.beforeNotify(C)}()}function N(...e){console.log(...e)}function M(e,t,n,o){e instanceof EventTarget&&e.addEventListener(t,n,o)}function B(e){return null===e}const H=`${document.location.protocol}//${document.location.host}/`,R=window.HCS?.defines?.cdn,G=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],D=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],U=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,F=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,q=/guild_id=(?<guildId>\d+)/,W=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,Q=/player_id=(?<playerId>\d+)/,J=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,z=/VL:.+?(?<vl>\d+)/,K=.2,X="joinallgroupsundersize",V="index.php",Y="?cmd=",Z=`${V}${Y}`,ee="&subcmd=",te="&target_username=",ne=`${Y}notepad&blank=1${ee}`,oe=`${V}${`${ne}newguildlog`}`,re=`${Z}auctionhouse`,ae=`${re}&search=`,ie=`${Z}log`,se=`${Z}ignore${ee}add&ignore_username=`,ce=`${Z}profile`,ue=`${ce}&player_id=`,le=`${ce}${ee}dropitems`,fe=`${Z}trade&target_player=`,de=`${Z}trade${ee}createsecure${te}`,pe=`${Z}arena${ee}`,he=`${V}${ne}`,me=`${he}auctionsearch`,ge=`${Z}points`,ye=`${Z}guild${ee}`,be=`${ye}log`,ve=`${ye}scouttower`,we=`${ye}groups&subcmd2=`,ke=`${ye}inventory&subcmd2=report&user=`,_e=`${ye}view&guild_id=`,je=`${we}joinall`,Se=`${we}${X}`,$e=`${Z}world`,xe=`${Z}findplayer`,Le=`${xe}&search_show_first=1&search_username=`,Ee=`${Z}blacksmith`,Pe=`${Z}quickbuff`,Te=`${Z}composing`,Oe=`${Z}attackplayer${te}`,Ce=`${Z}${ee}viewupdatearchive`,Ae=`${Z}${ee}viewarchive`,Ne=`${Z}bounty`,Me=`${Z}inventing${ee}viewrecipe&recipe_id=`,Be=`https://guide.fallensword.com/${Z}`,He="after-update.actionlist",Re="buffs.player",Ge="update.player",De="level.stats-player",Ie="gold.stats-player",Ue="prompt.worldDialogShop",Fe="keydown.controls",qe="update.realm",We="-success.action-response",Qe=`-1${We}`,Je=`1${We}`,ze=`2${We}`,Ke=`9${We}`,Xe=`5${We}`,Ve=`25${We}`,Ye=1,Ze=2,et=16,tt=128,nt=256,ot="needToCompose",rt="lastComposeCheck",at="characterVirtualLevel",it="enableGuildActivityTracker",st="lastLadderReset",ct="form",ut="table",lt="td",ft="tr",dt="fsh_buffLog",pt="statbar-level-tooltip-general",ht="stat-level",mt="stat-defense",gt="stat-attack",yt="stat-damage",bt="stat-armor",vt="stat-hp",wt="stat-vl",kt="GM_",_t=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],jt=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],St=`${R}ui/world/action_spinner.gif`,$t=".fa-envelope",xt='a[href*="&player_id="]',Lt=.002,Et=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],Pt='input[name="blockedSkillList[]"]'
var Tt={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252"}
const Ot=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function Ct(t,n){const o=window.localStorage.getItem(kt+t)
return B(o)||e(o)?n:function(e){const t=Ot.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(o)}function At(e){return Ct(e,Tt[e])}function Nt(e){At("betaOptIn")&&N("sendException",e),P.notify(e)}function Mt(e,t){return e||t}const Bt=[null]
function Ht(e,t){return Bt[e]&&Bt[e].priority<Bt[t].priority}function Rt(e,t){const n=Bt[e]
Bt[e]=Bt[t],Bt[t]=n}function Gt(e,t){return e?2*t:2*t+1}function Dt(){if(1===Bt.length)return
const e=Bt[1].data,t=Bt.pop()
return Bt.length>1&&(Bt[1]=t,function(e){let t=e
for(;2*t<Bt.length;){const e=Gt(!Ht(2*t+1,2*t),t)
if(Ht(t,e))break
Rt(t,e),t=e}}(1)),e}function It(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Ht(t,e))break
Rt(t,e),t=e}}(Bt.push({data:e,priority:t})-1)}let Ut=!0
const Ft="fshMessage"
let qt=0
function Wt(){Bt.length-1==0?Ut=!0:(Ut=!1,window.postMessage(Ft,window.location.origin))}function Qt(){const t=Dt()
var n
w(t)?t():e(n=t)||Nt(`pop() was not a function (${typeof n})`)}function Jt(e){const t=e.data
e.origin===window.location.origin&&t===Ft&&function(){try{Qt()}catch(e){P.notify(e)}finally{Wt()}}()}function zt(e,t,n,o){if(w(t)){qt||(M(window,"message",Jt),qt=!0)
const r=Mt(o,window),a=Mt(n,[])
It(t.bind(r,...a),e),Ut&&Wt()}}function Kt(e,t){return new URLSearchParams(e).get(t)}function Xt(e){return Kt(decodeURIComponent(window.location.search),e)}function Vt(){}const Yt=e=>e
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
return e}return t.dirty|r}return t.dirty}function hn(e,t,n,o,r,a){if(r){const i=dn(t,n,o,a)
e.p(i,r)}}function mn(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32
for(let e=0;e<n;e++)t[e]=-1
return t}return-1}function gn(e){const t={}
for(const n in e)t[n]=!0
return t}function yn(e){let t=!1
return function(...n){t||(t=!0,e.call(this,...n))}}function bn(e){return null==e?"":e}function vn(e){return e&&on(e.destroy)?e.destroy:Vt}function wn(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const kn="undefined"!=typeof window
let _n=kn?()=>window.performance.now():()=>Date.now(),jn=kn?e=>requestAnimationFrame(e):Vt
const Sn=new Set
function $n(e){Sn.forEach((t=>{t.c(e)||(Sn.delete(t),t.f())})),0!==Sn.size&&jn($n)}function xn(e,t){e.appendChild(t)}function Ln(e){if(!e)return document
const t=e.getRootNode?e.getRootNode():e.ownerDocument
return t&&t.host?t:e.ownerDocument}function En(e){const t=Cn("style")
return t.textContent="/* empty */",function(e,t){xn(e.head||e,t),t.sheet}(Ln(e),t),t.sheet}function Pn(e,t,n){e.insertBefore(t,n||null)}function Tn(e){e.parentNode&&e.parentNode.removeChild(e)}function On(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function Cn(e){return document.createElement(e)}function An(e){return document.createTextNode(e)}function Nn(){return An(" ")}function Mn(){return An("")}function Bn(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function Hn(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Rn(e){return function(t){t.target===this&&e.call(this,t)}}function Gn(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Dn(e){let t
return{p(...n){t=n,t.forEach((t=>e.push(t)))},r(){t.forEach((t=>e.splice(e.indexOf(t),1)))}}}function In(e){return""===e?null:+e}function Un(e,t){t=""+t,e.data!==t&&(e.data=t)}function Fn(e,t){e.value=null==t?"":t}function qn(e,t,n,o){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function Wn(e,t,n){for(let n=0;n<e.options.length;n+=1){const o=e.options[n]
if(o.__value===t)return void(o.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function Qn(e){const t=e.querySelector(":checked")
return t&&t.__value}function Jn(e,t,n){e.classList.toggle(t,!!n)}function zn(e,t,{bubbles:n=!1,cancelable:o=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:o})}function Kn(e,t){return new e(t)}const Xn=new Map
let Vn,Yn=0
function Zn(e,t,n,o,r,a,i,s=0){const c=16.666/o
let u="{\n"
for(let e=0;e<=1;e+=c){const o=t+(n-t)*a(e)
u+=100*e+`%{${i(o,1-o)}}\n`}const l=u+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(e){let t=5381,n=e.length
for(;n--;)t=(t<<5)-t^e.charCodeAt(n)
return t>>>0}(l)}_${s}`,d=Ln(e),{stylesheet:p,rules:h}=Xn.get(d)||function(e,t){const n={stylesheet:En(t),rules:{}}
return Xn.set(e,n),n}(d,e)
h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${l}`,p.cssRules.length))
const m=e.style.animation||""
return e.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,Yn+=1,f}function eo(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-o.length
r&&(e.style.animation=o.join(", "),Yn-=r,Yn||jn((()=>{Yn||(Xn.forEach((e=>{const{ownerNode:t}=e.stylesheet
t&&Tn(t)})),Xn.clear())})))}function to(e){Vn=e}function no(){if(!Vn)throw new Error("Function called outside component initialization")
return Vn}function oo(e){no().$$.on_mount.push(e)}function ro(e){no().$$.after_update.push(e)}function ao(e){no().$$.on_destroy.push(e)}function io(){const e=no()
return(t,n,{cancelable:o=!1}={})=>{const r=e.$$.callbacks[t]
if(r){const a=zn(t,n,{cancelable:o})
return r.slice().forEach((t=>{t.call(e,a)})),!a.defaultPrevented}return!0}}function so(e,t){const n=e.$$.callbacks[t.type]
n&&n.slice().forEach((e=>e.call(this,t)))}const co=[],uo=[]
let lo=[]
const fo=[],po=Promise.resolve()
let ho=!1
function mo(){ho||(ho=!0,po.then(_o))}function go(){return mo(),po}function yo(e){lo.push(e)}function bo(e){fo.push(e)}const vo=new Set
let wo,ko=0
function _o(){if(0!==ko)return
const e=Vn
do{try{for(;ko<co.length;){const e=co[ko]
ko++,to(e),jo(e.$$)}}catch(e){throw co.length=0,ko=0,e}for(to(null),co.length=0,ko=0;uo.length;)uo.pop()()
for(let e=0;e<lo.length;e+=1){const t=lo[e]
vo.has(t)||(vo.add(t),t())}lo.length=0}while(co.length)
for(;fo.length;)fo.pop()()
ho=!1,vo.clear(),to(e)}function jo(e){if(null!==e.fragment){e.update(),nn(e.before_update)
const t=e.dirty
e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(yo)}}function So(e,t,n){e.dispatchEvent(zn(`${t?"intro":"outro"}${n}`))}const $o=new Set
let xo
function Lo(){xo={r:0,c:[],p:xo}}function Eo(){xo.r||nn(xo.c),xo=xo.p}function Po(e,t){e&&e.i&&($o.delete(e),e.i(t))}function To(e,t,n,o){if(e&&e.o){if($o.has(e))return
$o.add(e),xo.c.push((()=>{$o.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}else o&&o()}const Oo={duration:0}
function Co(e,t,n,o){let r,a=t(e,n,{direction:"both"}),i=o?0:1,s=null,c=null,u=null
function l(){u&&eo(e,u)}function f(e,t){const n=e.b-i
return t*=Math.abs(n),{a:i,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function d(t){const{delay:n=0,duration:o=300,easing:d=Yt,tick:p=Vt,css:h}=a||Oo,m={start:_n()+n,b:t}
t||(m.group=xo,xo.r+=1),"inert"in e&&(t?void 0!==r&&(e.inert=r):(r=e.inert,e.inert=!0)),s||c?c=m:(h&&(l(),u=Zn(e,i,t,o,n,d,h)),t&&p(0,1),s=f(m,o),yo((()=>So(e,t,"start"))),function(e){let t
0===Sn.size&&jn($n),new Promise((n=>{Sn.add(t={c:e,f:n})}))}((t=>{if(c&&t>c.start&&(s=f(c,o),c=null,So(e,s.b,"start"),h&&(l(),u=Zn(e,i,s.b,s.duration,0,d,a.css))),s)if(t>=s.end)p(i=s.b,1-i),So(e,s.b,"end"),c||(s.b?l():--s.group.r||nn(s.group.c)),s=null
else if(t>=s.start){const e=t-s.start
i=s.a+s.d*d(e/s.duration),p(i,1-i)}return!(!s&&!c)})))}return{run(e){on(a)?(wo||(wo=Promise.resolve(),wo.then((()=>{wo=null}))),wo).then((()=>{a=a({direction:e?"in":"out"}),d(e)})):d(e)},end(){l(),s=c=null}}}function Ao(e,t,n){const o=e.$$.props[t]
void 0!==o&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function No(e){e&&e.c()}function Mo(e,t,n){const{fragment:o,after_update:r}=e.$$
o&&o.m(t,n),yo((()=>{const t=e.$$.on_mount.map(en).filter(on)
e.$$.on_destroy?e.$$.on_destroy.push(...t):nn(t),e.$$.on_mount=[]})),r.forEach(yo)}function Bo(e,t){const n=e.$$
null!==n.fragment&&(!function(e){const t=[],n=[]
lo.forEach((o=>-1===e.indexOf(o)?t.push(o):n.push(o))),n.forEach((e=>e())),lo=t}(n.after_update),nn(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ho(e,t,n,o,r,a,i=null,s=[-1]){const c=Vn
to(e)
const u=e.$$={fragment:null,ctx:[],props:a,update:Vt,not_equal:r,bound:tn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:tn(),dirty:s,skip_bound:!1,root:t.target||c.$$.root}
i&&i(u.root)
let l=!1
if(u.ctx=n?n(e,t.props||{},((t,n,...o)=>{const a=o.length?o[0]:n
return u.ctx&&r(u.ctx[t],u.ctx[t]=a)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](a),l&&function(e,t){-1===e.$$.dirty[0]&&(co.push(e),mo(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],u.update(),l=!0,nn(u.before_update),u.fragment=!!o&&o(u.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target)
u.fragment&&u.fragment.l(e),e.forEach(Tn)}else u.fragment&&u.fragment.c()
t.intro&&Po(e.$$.fragment),Mo(e,t.target,t.anchor),_o()}to(c)}class Ro{$$=void 0
$$set=void 0
$destroy(){Bo(this,1),this.$destroy=Vt}$on(e,t){if(!on(t))return Vt
const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[])
return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t
this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Go=[]
function Do(e,t=Vt){let n
const o=new Set
function r(t){if(rn(e,t)&&(e=t,n)){const t=!Go.length
for(const t of o)t[1](),Go.push(t,e)
if(t){for(let e=0;e<Go.length;e+=2)Go[e][0](Go[e+1])
Go.length=0}}}function a(t){r(t(e))}return{set:r,update:a,subscribe:function(i,s=Vt){const c=[i,s]
return o.add(c),1===o.size&&(n=t(r,a)||Vt),i(e),()=>{o.delete(c),0===o.size&&n&&(n(),n=null)}}}}function Io(e,t,n){const o=!Array.isArray(e),r=o?[e]:e
if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const a=t.length<2
return function(e,t){return{subscribe:Do(e,t).subscribe}}(n,((e,n)=>{let i=!1
const s=[]
let c=0,u=Vt
const l=()=>{if(c)return
u()
const r=t(o?s[0]:s,e,n)
a?e(r):u=on(r)?r:Vt},f=r.map(((e,t)=>cn(e,(e=>{s[t]=e,c&=~(1<<t),i&&l()}),(()=>{c|=1<<t}))))
return i=!0,l(),function(){nn(f),u(),i=!1}}))}const Uo=Do("")
function Fo(e){const t=e-1
return t*t*t+1}function qo(e,{delay:t=0,duration:n=400,easing:o=Fo,x:r=0,y:a=0,opacity:i=0}={}){const s=getComputedStyle(e),c=+s.opacity,u="none"===s.transform?"":s.transform,l=c*(1-i),[f,d]=wn(r),[p,h]=wn(a)
return{delay:t,duration:n,easing:o,css:(e,t)=>`\n\t\t\ttransform: ${u} translate(${(1-e)*f}${d}, ${(1-e)*p}${h});\n\t\t\topacity: ${c-l*t}`}}function Wo(e,{delay:t=0,duration:n=400,easing:o=Fo,axis:r="y"}={}){const a=getComputedStyle(e),i=+a.opacity,s="y"===r?"height":"width",c=parseFloat(a[s]),u="y"===r?["top","bottom"]:["left","right"],l=u.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),f=parseFloat(a[`padding${l[0]}`]),d=parseFloat(a[`padding${l[1]}`]),p=parseFloat(a[`margin${l[0]}`]),h=parseFloat(a[`margin${l[1]}`]),m=parseFloat(a[`border${l[0]}Width`]),g=parseFloat(a[`border${l[1]}Width`])
return{delay:t,duration:n,easing:o,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*i};${s}: ${e*c}px;padding-${u[0]}: ${e*f}px;padding-${u[1]}: ${e*d}px;margin-${u[0]}: ${e*p}px;margin-${u[1]}: ${e*h}px;border-${u[0]}-width: ${e*m}px;border-${u[1]}-width: ${e*g}px;`}}function Qo(e){let t,n,o,r,a,i,s
return{c(){t=Cn("div"),n=Cn("p"),o=An(e[0]),Gn(n,"class","svelte-1v0rgfy"),Gn(t,"role","alert"),Gn(t,"class","svelte-1v0rgfy"),qn(t,"transform",e[2])},m(r,c){Pn(r,t,c),xn(t,n),xn(n,o),a=!0,i||(s=Bn(t,"click",e[4]),i=!0)},p(e,n){(!a||1&n)&&Un(o,e[0]),4&n&&qn(t,"transform",e[2])},i(e){a||(e&&yo((()=>{a&&(r||(r=Co(t,qo,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1))})),a=!0)},o(e){e&&(r||(r=Co(t,qo,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0)),a=!1},d(e){e&&Tn(t),e&&r&&r.end(),i=!1,s()}}}function Jo(e){let t,n=e[1]&&Qo(e)
return{c(){n&&n.c(),t=Mn()},m(e,o){n&&n.m(e,o),Pn(e,t,o)},p(e,[o]){e[1]?n?(n.p(e,o),2&o&&Po(n,1)):(n=Qo(e),n.c(),Po(n,1),n.m(t.parentNode,t)):n&&(Lo(),To(n,1,1,(()=>{n=null})),Eo())},i(e){Po(n)},o(e){To(n)},d(e){e&&Tn(t),n&&n.d(e)}}}function zo(e,t,n){let o
ln(e,Uo,(e=>n(0,o=e)))
let{ms:r=3e3}=t,a=!1,i=0,s=""
const c=(e,t)=>{clearTimeout(i),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
n(2,s=`translate(${t}px, ${e.offsetTop}px)`),n(1,a=!0)}(),t>0&&(i=setTimeout((()=>{var e
n(1,a=!1),o="",e=o,Uo.set(e)}),t))):n(1,a=!1)}
ao((()=>clearTimeout(i)))
return e.$$set=e=>{"ms"in e&&n(3,r=e.ms)},e.$$.update=()=>{9&e.$$.dirty&&c(o,r)},[o,a,s,r,()=>{n(1,a=!1)}]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class Ko extends Ro{constructor(e){super(),Ho(this,e,zo,Jo,rn,{ms:3})}}let Xo
function Vo(e){e&&(!function(){if(!Xo)Xo=!0,new Ko({target:document.body})}(),Uo.set(e))}function Yo(e,t){return Array.from(e,t)}function Zo(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function er(e,t){return Yo(Zo(e,t))}function tr(e){return"string"==typeof e}function nr(e){return e.trim()}function or(e){const t=o(e)
if(tr(t))return nr(t)}function rr(e,t){return or(t).includes(e)}function ar(e,...t){return(...n)=>e(...t,...n)}let ir,sr,cr,ur,lr,fr,dr=0,pr=0,hr=0
function mr(){return dr||(dr=n("pCL")),dr}function gr(){return pr||(pr=n("pCC")),pr}function yr(){const e=er("a",mr()).filter(function(e){return ar(rr,e)}("message"))
e.length&&async function(){const e=new Audio(At("defaultMessageSound"))
try{await e.play()}catch(e){Vo("Message Sound Not Allowed")}}()}function br(e,t,n){m()||ga("fshApp.send","event",e,t,n)}function vr(e){return Object.entries(e)}function wr(e,t,[n,o]){k(o)&&null!==o?e(t[n],o):t[n]=o}function kr(e,t){vr(t).forEach(ar(wr,kr,e))}function _r(e,t){const n=document.createElement(e)
return t&&kr(n,t),n}function jr(e){return _r("div",e)}function Sr(e,t){return t?.classList?.contains(e)}function $r(e,t){return Sr(t[0],e)}function xr(e,t,n){const{target:o}=n,r=t.find(ar(e,o))
if(r)return r[1](o)}function Lr(e){return ar(xr,$r,e)}function Er(e){return"boolean"==typeof e}function Pr(e,t,n,o){var r
M(e,t,n,{once:!0,...(r=o,Er(r)?{capture:r}:r)})}function Tr(e){sr=e.clientX,cr=e.clientY}function Or(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(ir,null).transform)
ur=e[0]-sr,lr=e[1]-cr}function Cr(e){e.clientX===sr&&e.clientY===cr||(ir.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+ur).toString()}, ${(e.clientY+lr).toString()})`,Tr(e))}function Ar(e){return function(e){const t=performance.now()
t-fr>16&&(Cr(e),fr=t)}(e),e.preventDefault(),!1}function Nr(e){return Cr(e),function(e,t,n,o){e instanceof EventTarget&&e.removeEventListener(t,n,o)}(document.body,"dragover",Ar),e.preventDefault(),!1}function Mr(e,t){!function(e,t){ir=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),Tr(t),Or(),fr=0,t.dataTransfer.setData("text/plain",""),M(document.body,"dragover",Ar),Pr(document.body,"drop",Nr)}function Br(e,t){e.draggable=!0,M(e,"dragstart",ar(Mr,t))}function Hr(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Rr(){return w(window.jQuery)}function Gr(e,t,n){M(e,"click",t,n)}function Dr(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Ir(e,t){return Yo(Dr(e,t))}function Ur(e,t){t instanceof Element&&(t.innerHTML=String(e))}function Fr(e){let t=n("content")
t?Ur("",t):(t=jr({id:"content",style:{display:"none"}}),Hr(document.body,t)),$(t).dialog({width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}),Ir("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(t)}async function qr(e){(await e).default()}function Wr(){qr(import("./buffLog-WBgx3cjT.js"))}function Qr(){qr(import("./combatLog-5ldW7ntw.js"))}function Jr(){qr(import("./creatureLog-imsQD3SE.js"))}function zr(){qr(import("./fsboxlog-ZIlglUik.js"))}function Kr(){qr(import("./guildTracker-LZFoesoy.js"))}async function Xr(e){(await import("./injectAuctionSearch-XQQkeE8p.js")).default(e)}async function Vr(e){(await import("./findBuffs-SBdmVhYw.js")).injectFindBuffs(e)}async function Yr(e){(await import("./findBuffs-SBdmVhYw.js")).injectFindOther(e)}async function Zr(e){(await import("./injectOnlinePlayers-J-vamaid.js")).default(e)}function ea(){qr(import("./potReport-XOJ2jKn4.js"))}function ta(){qr(import("./quickExtract-a7u9Zqyu.js"))}function na(){qr(import("./quickLinksManager-EEKsH2G7.js"))}async function oa(e){(await import("./quickWear-82H5cH5j.js")).default(e)}function ra(){qr(import("./recipeMgr-_rYLiTl8.js"))}function aa(){qr(import("./reliclist-wny36sox.js"))}function ia(){qr(import("./superelite-Y8HbW7Id.js"))}function sa(e){return new Promise((t=>{setTimeout(t,e)}))}function ca(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class ua extends Error{constructor([e,t,n,o],...r){super(function(e,t,n,o){const r=`${t.status} ${t.statusText} - `
if(t.statusText===o.toString())return r+ca(e)
const a=`${r+n} ${o} - ${ca(e)}`
return"parsererror"===n?`${a} - ${t.responseText}`:a}(e,t,n,o),...r),Error.captureStackTrace&&Error.captureStackTrace(this,ua),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=o}}function la(e){M(window,"beforeunload",(()=>e.abort()))}const fa=900
let da=0
const pa=5
let ha=0
async function ma(){ha<pa-$.active&&performance.now()-da>=fa?(ha=pa-$.active,da=performance.now()):await sa(100)}async function ya(e,t=10){await async function(){for(;ha<1;)await ma()
ha-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=la,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return ya(e,t-1)
!function(e,t){if(0!==t.status)throw new ua([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function ba(e){return kr(e,{url:V,data:{no_mobile:1}}),ya(e)}async function va(e){return _(await ba({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function wa(e){return va({cmd:"export",...e})}function ka(){return wa({inc_tagged:"1",subcmd:"guild_store"})}let _a=0
function ja(e){const t=a(/\sguildId: (?<id>\d{1,6}),/,o(e))
t&&(_a=Number(t))}function Sa(){return _a||er("script",document.body).forEach(ja),_a}function $a(e){return _r("a",e)}function xa(e){e instanceof Element&&e.click()}function La(e,t){const n=URL.createObjectURL(e),o=$a({download:t,href:n,style:{display:"none"}})
Hr(document.body,o),xa(o),document.body.removeChild(o),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}const Ea=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],Pa=e=>{return[...Ea(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??""])].join(",")
var t}
var Ta={"Buff Log":Wr,"Combat Log":Qr,"Creature Log":Jr,"Recipe Manager":ra,"Quick Links":na,"Find Buffs":Vr,"Find Other":Yr,"Online Players":Zr,"AH Quick Search":Xr,"Quick Wear":oa,"FS Box Log":zr,"Quick Extract":ta,"GS Export":async function(){if(!Sa())return
const e=await ka()
var t
La((t=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name\n${(e=>e.items.map(Pa).join("\n"))(e)}\n`,new Blob([t],{type:"text/csv"})),"gs_export.csv")},"Merc Hunter":function(){qr(import("./mercs-5cC4AoV0.js"))},"SE Tracker":ia,"Guild Tracker":Kr,"Relic List":aa,"Combat Set Manager":function(){qr(import("./setmgr-s2OmwfRC.js"))},"Pot Report":ea,"Quest Book":function(){qr(import("./questbook-IdsTMh_N.js"))}}
function Oa(e,t){return`<a href="${ue}${e}">${t}</a>`}const Ca='<div class="helperMenuColumn">',Aa=`<div class="helperMenuSectionHeader">Character</div><ul><li><button class="helperDevBtn helperGo" type="button">Buff Log</button></li><li><button class="helperDevBtn helperGo" type="button">Combat Log</button></li><li><button class="helperDevBtn helperGo" type="button">Creature Log</button></li><li><button class="helperDevBtn helperGo" type="button">Recipe Manager</button></li><li><button class="helperDevBtn helperGo" type="button">Quick Links</button></li><li><a href="${he}invmanagernew">Inventory Manager</a></li></ul>`,Na='<div class="helperMenuSectionHeader">Actions</div><ul><li><span class="fshLink">Find Buffs</span></li><li><span class="fshLink">Find Other</span></li><li><span class="fshLink">Online Players</span></li><li><span class="fshLink">AH Quick Search</span></li></ul>',Ma=`<div class="helperMenuSectionHeader">Guild</div><ul><li><a href="${he}guildinvmgr">Guild Inventory</a></li><li><a href="${oe}">New Guild Log</a></li><li><button class="helperDevBtn helperGo" type="button">Merc Hunter</button></li><li><button class="helperDevBtn helperGo" type="button">Pot Report</button></li><li><button class="helperDevBtn helperGo" type="button">Guild Tracker</button></li></ul>`,Ba='<div class="helperMenuSectionHeader">Extra</div><ul><li><button class="helperDevBtn helperGo" type="button">Quick Extract</button></li><li><span class="fshLink">Quick Wear</span></li><li><button class="helperDevBtn helperGo" type="button">FS Box Log</button></li><li><button class="helperDevBtn helperGo" type="button">SE Tracker</button></li></ul>',Ha='<div class="helperMenuSectionHeader">Beta Features</div><ul><li><button class="helperDevBtn helperGo" type="button">Relic List</button><sup class="fshRed">beta</sup></li><li><button class="helperDevBtn helperGo" type="button">GS Export</button><sup class="fshRed">beta</sup></li></ul>',Ra=`<div class="helperMenuSectionHeader">FSH developer quick links</div><ul><li><span class="helperMenuReply" target_player="PointyHair">PM</span> ${Oa(1963510,"PointyHair")}</li><li><span class="helperMenuReply" target_player="Lusterless">PM</span> ${Oa(1674838,"Lusterless")}</li></ul>`,Ga="</div>"
let Da=0
function Ia(){Da.classList.remove("helperMenuShow")}function Ua(e){"helperMenu"===e.target.id&&Da.classList.toggle("helperMenuShow")}const Fa=[["fshLink",function(e){const t=o(e),n=Ta[t]
Rr()&&w(n)&&(br("helperMenu",t),Fr(n),Ia())}],["helperGo",function(e){const t=o(e),n=Ta[t]
w(n)&&(br("helperMenu",t),n(),Ia())}],["helperMenuReply",function(e){br("helperMenu","helperMenuReply"),window.openQuickMsgDialog(e.getAttribute("target_player")),Ia()}]]
function qa(e){const t=e.target
Da=jr({className:"helperMenuDiv",id:"helperMenuDiv",innerHTML:`${Ca}${Aa}${Na}${Sa()?Ma:""}${Ba}${At("betaOptIn")?Ha:""}${Ra}${Ga}`}),Hr(t,Da),Gr(t,Ua),Gr(Da,Lr(Fa))}function Wa(){if(!j(".mainbody"))return
const e=jr({id:"helperMenu",className:"helperMenu",innerHTML:"Helper&nbsp;Menu"})
At("keepHelperMenuOnScreen")&&e.classList.add("helperMenuFixed"),Pr(e,"mouseenter",qa),At("draggableHelperMenu")&&(e.classList.add("helperMenuMove"),Br(e)),Hr(document.body,e)}function Qa(e){return(new DOMParser).parseFromString(e,"text/html")}function Ja(e){return ba({data:e})}async function za(e){const t=await Ja(e)
if(t)return Qa(t)}function Ka(e){const t=n("info-msg",e)
if(t){const e=t.innerHTML
return e?e.replace(/<br.*/,""):""}}function Xa(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(kt+e,t+n)}const Va=[[tr,(e,t)=>{Xa(e,"S]",t)}],[function(e){return"number"==typeof e},(e,t)=>{t.toString().indexOf(".")<0&&Xa(e,"N]",t)}],[Er,(e,t)=>{Xa(e,"B]",t)}]]
function Ya(e,t){const n=Va.find((e=>e[0](t)))
n&&n[1](e,t)}let Za=0
const ei=()=>Za
function ti(){Za=At("sendGoldonWorld")}async function ni(){if(!ei())return
br("NewMap","doSendGold")
const e=await za({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")})
e&&function(e){const t=Ka(e)
"You successfully sent gold!"!==t&&""!==t||(Ya("currentGoldSentTotal",parseInt(At("currentGoldSentTotal"),10)+parseInt(At("goldAmount"),10)),GameData.fetch(Ye))}(e)}function oi(e){window.location=e}function ri(e){At("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function ai(e){br("keyHandler",e)}function ii(e){return e?.toLowerCase?.()}function si(e,t){return ii(e)<ii(t)?-1:ii(e)>ii(t)?1:0}async function ci(e,t){return _(await ya({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function ui(e){return ci(e,{method:"GET"})}function li(e){return ui({cmd:"profile",...e})}async function fi(){const e=await li({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>si(e.name,t.name)))}:e}function di(e,t,...n){return e(...n)}function pi(){return di(fi)}const hi=[e=>e?.s,(e,t)=>e.r?.length>t]
async function mi(e){const t=await pi()
if(((e,t)=>hi.every((n=>n(t,e))))(e,t)){ai("changeCombatSet")
const n=t.r[e].id
ri("2"),oi(`${ce+ee}managecombatset&submit=Use&combatSetId=${n}`)}}function gi(e,t){n("worldPage")||(ai(e),oi(t))}function yi(){u.enableMaxGroupSizeToJoin?oi(Se):oi(je)}function bi(){ai("logPage"),ri("2"),oi(ie)}function vi(e){const t=j(`#pCC input[value="${e}"]`)
t&&(ai("movePage"),xa(t))}const wi=[["!",mi,0],["@",mi,1],['"',mi,1],["#",mi,2],["£",mi,2],["$",mi,3],["%",mi,4],["^",mi,5],["&",mi,6],["*",mi,7],["(",mi,8],["0",function(){gi("toWorld",$e)}],["<",vi,"<"],[">",vi,">"],["G",function(){ai("createGroup"),ri("4"),oi(`${we}create`)}],["L",bi],["b",function(){ai("backpack"),ri("2"),oi(le)}],["g",function(){ai("gotoGuild"),ri("4"),oi(`${ye}manage`)}],["j",function(){ai("joinAllGroup"),ri("4"),yi()}],["l",bi],["p",function(){ai("profile"),ri("2"),oi(ce)}],["r",function(){gi("doRepair",`${Ee+ee}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in u&&!u.dialogIsClosed()||(ai("insertQuickWear"),Fr(oa))}],["y",ni]]
const ki=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function _i(e){var t;(t=e,ki.some((e=>e(t))))||function(e){const t=wi.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function ji(){M(document,"keyup",_i)}function Si(e,t){return or(t)===e}function $i(e){return ar(Si,e)}function xi(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function Li(e,t){return Yo(xi(e,t))}function Ei(e){Gr(e,(()=>{br("chrome","Game Help link")})),Ur(`<a href="${Z}settings">Game Help</a>`,e)}function Pi(){Li("#pCR h3").filter($i("Game Help")).forEach(Ei)}function Ti(e){u[e]=At(e)}function Oi(e,t){if(t instanceof Element)return t.closest(e)}const Ci=[e=>e,e=>e.getAttribute("href")===be,e=>!e.classList.contains("sendLink")],Ai=e=>Ci.every((t=>t(e)))
function Ni(e){const t=Oi("a",e.target)
Ai(t)&&(br("useNewGuildLog","Alter Href"),t.href=oe)}function Mi(e){e.forEach((e=>zt(3,e)))}function Bi(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function Hi(){return!Rr()}var Ri=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function Gi(e){return function(e){return-1!==e&&0===j(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(br("accordion","collapse"),-1):e}const Di=(e,t,n)=>$(e).data(`${n}${t}`)
function Ii(e,t,n){return new Promise((o=>{const r=Di(e,t,n)
r?o(r):function(e,t,n,o){$(e).on(`${ii(t)}create`,(()=>{o(Di(e,t,n))}))}(e,t,n,o)}))}const Ui=[[e=>!k(e),()=>Nt("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>Nt("$('#nav').data('hcsNav').heights does not exist")]]
async function Fi(){const e=n("nav"),t=await Ii(e,"Nav","hcs")
return function(e){const t=Ui.find((([t])=>t(e)))
return!t||(t[1](),!1)}(t)?{theNav:e,myNav:t}:{}}function qi(){!function(){const e=At("lastActiveQuestPage")
At("storeLastQuestPage")&&e.length>0&&(n("nav-character-questbook").href=e)}(),function(){const e=At("lastScavPage")
At("storeLastScavPage")&&e.length>0&&(n("nav-actions-artisanship-scavenging").href=e)}()}async function Wi(){const{theNav:e,myNav:t}=await Fi()
e&&t&&(qi(),async function(e,t){const n=Ri.map((e=>[e,At(e)]))
n.some((([,e])=>e))&&(await import("./injectItems-kUYmEjq0.js")).default(e,t,Bi(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,Gi(n))}}(t))}function Qi(e,t){t instanceof Node&&(t.textContent=String(e))}let Ji
function zi(){return Ji||(Ji=n("quickMessageDialog")),Ji}let Ki,Xi=0
function Vi(e){(function(){if(!Xi){const e=Dr("validateTips",zi())
1===e.length&&([Xi]=e)}return Xi})()&&Qi(Mt(e,""),Xi)}function Yi(){return Ki||(Ki=n("quickMsgDialog_msg"),Ki.maxLength=512),Ki}let Zi,es=null,ts=0,ns=0
function os(e){"Enter"!==e.key||e.shiftKey||(br("messaging","sendOnEnter"),e.preventDefault(),function(){if(!ns){const e=$(zi()).dialog("option","buttons")
ns=e["Send Message"]}return ns}()())}function rs(){B(es)&&(es=At("enterForSendMessage")),es&&!ts&&(M(Yi(),"keypress",os),ts=!0)}function as(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function is(e,t){as(e,"beforeend",t)}function ss(e,t){if("string"==typeof t){const e=r(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function cs(e){const t=At(e)
if(t)return _(t,ss)}function us(e,t,n){return JSON.stringify(e,t,n)}function ls(e,t){Ya(e,us(t))}let fs=0,ds=0,ps=0
function hs(e,t,n){const o=ds.insertRow(e)
let r=o.insertCell(-1)
is(r,t),r=o.insertCell(-1),is(r,n)}function ms(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function gs(e,t){hs(e,ms("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const ys=[["del-button",function(e){br("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
ds.deleteRow(t),fs.splice(t-2,1),ls("quickMsg",fs)}],["add-button",function(e){br("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){gs(e.parentNode.parentNode.rowIndex,n),t.value="",fs.push(n),ls("quickMsg",fs)}}],["add-template",function(e){br("messaging","insertTemplate"),Yi().value+=`${o(e).replace(/\{playername\}/g,Zi)}`}]]
function bs(e){gs(-1,e)}function vs(){At("enableMessageTemplates")&&!ps&&(Gr((ds||(ds=zi().lastElementChild),ds),Lr(ys)),(fs||(fs=cs("quickMsg")),fs).forEach(bs),hs(-1,ms("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),ps=!0)}function ws(e,t,o){const r=zi()
Sr("ui-dialog-content",r)&&(!function(e){Zi=e,Qi(e,n("quickMsgDialog_targetUsername"))}(e),function(e){const t=Yi()
t.value=Mt(e,""),t.disabled=!1}(t),Vi(o),vs(),rs(),$(r).dialog("open"))}function ks(e){const t=n(e)
t&&(t.classList.add("pCR"),Hr(mr(),t))}function _s(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function js(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?_s(t,e.firstChild):Hr(e,t)}(e,t)}function Ss(e){const t=n(e)
t&&js((hr||(hr=n("pCR")),hr),t)}const $s=[function(){At("moveGuildList")&&Ss("minibox-guild")},function(){At("moveOnlineAlliesList")&&Ss("minibox-allies")},function(){At("moveXmasBox")&&ks("minibox-xmas")},function(){At("moveDailyQuest")&&ks("minibox-daily-quest")},function(){At("moveFSBox")&&ks("minibox-fsbox")},function(){(u.enableAllyOnlineList||u.enableEnemyOnlineList)&&qr(import("./allyEnemy-qNb1ifHg.js"))},function(){(u.enableWantedList||u.enableActiveBountyList)&&qr(import("./activeWantedBounties-bVZ2MWeO.js"))},function(){u.enableGuildInfoWidgets&&qr(import("./addGuildInfoWidgets-H9pAoWLe.js"))},function(){u.enableOnlineAlliesWidgets&&qr(import("./addOnlineAlliesWidgets--T6As4ga.js"))},function(){u.enableTempleAlert&&qr(import("./injectTempleAlert-hTZZ6KRh.js"))},function(){u.enableUpgradeAlert&&qr(import("./injectUpgradeAlert-XAshA8VF.js"))},function(){u.enableComposingAlert&&qr(import("./injectComposeAlert-lbivrDZp.js"))},function(){mr()&&!Hi()&&Wi()},function(){Hi()||(window.openQuickMsgDialog=ws)},function(){At("statBarLinks")&&qr(import("./statBar-gRnly6ln.js"))},function(){At("staminaCalculator")&&qr(import("./injectStaminaCalculator-JmYAW-B5.js"))},function(){At("levelUpCalculator")&&qr(import("./injectLevelupCalculator-osycLMZy.js"))},function(){At("fsboxlog")&&qr(import("./fsbox-kqzpoSz4.js"))},function(){At("resizeQuickBuff")&&qr(import("./interceptQuickBuff-A-PstHUQ.js"))},function(){At("joinAllLink")&&qr(import("./injectJoinAllLink-_-fOuVrB.js"))},function(){At("addServerNode")&&qr(import("./injectServerNode-evt5BbUw.js"))},function(){At("addScoutTowerLink")&&qr(import("./scoutTowerLink-2lbUfgoL.js"))},function(){Rr()&&At(it)&&qr(import("./guildActivity-Ey8jnTuk.js"))},async function(){if(Rr()&&u.enableSeTracker){(await import("./trackerPrefStore-zXZ1wTUa.js").then((function(e){return e.a}))).default.set(u.enableSeTracker)}}]
const xs=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function Ls(){u.huntingMode||(xs.forEach(Ti),u.allyEnemyOnlineRefreshTime=1e3*At("allyEnemyOnlineRefreshTime"),u.useNewGuildLog&&(M(document.body,"click",Ni),M(document.body,"auxclick",Ni)),Mi($s))}function Es(e){const t=_(e)
t?.["new-ui"]&&(At("gameHelpLink")&&zt(3,Pi),u.huntingMode=At("huntingMode"),zt(3,ji),Ls(),At("hideHelperMenu")||zt(3,Wa))}function Ps(){const e=function(){const e=n("html")
if(e?.dataset)return e.dataset.hcs}()
e&&Es(e)}function Ts(){Rr()&&n("worldPage")&&window.GameData&&qr(import("./newMap-eWXx_Y25.js"))}function Os(e){$(e).qtip("hide")}function Cs(e){Ya("needToPray",e),Ya("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}let As=0
const Ns='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',Ms=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${Z}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
async function Bs(e){const t=e.target.getAttribute("praytype")
t&&(br("notification","prayToGods"),Os(e.target),await Ja({cmd:"temple",subcmd:"pray",type:t}),As.outerHTML=Ns,Cs(!1))}function Hs(){is(n("notifications"),Ms),As=n("helperPrayToGods"),Pr(As,"click",Bs)}async function Rs(){if(!u.enableTempleAlert)return
const e="temple"===u.cmd?document:await za({cmd:"temple"})
if(!e)return
const t=j("#pCC",e)
if(!t)return
const n="You are currently praying at the temple."!==or(t)
n&&Hs(),Cs(n)}function Gs(){qr(import("./bioWidgets-K2ZPst85.js"))}function Ds(){qr(import("./injectGuild-PCskJl-6.js"))}const Is=()=>{qr(import("./guildAdvisor-zkzE0JBK.js"))}
const Us=()=>{qr(import("./groups-Za6P6GS9.js"))}
const Fs=()=>{qr(import("./addRemoveTags--YM50L7M.js"))}
const qs=()=>{qr(import("./guildChat-lzSdwVue.js"))}
function Ws(){qr(import("./viewRecipe-_ZhK_8Mt.js"))}function Qs(){qr(import("./ufsgAllowBack-DGyCcM4d.js"))}function Js(){qr(import("./profile-ieUTdzuk.js").then((function(e){return e.p})))}function zs(){qr(import("./news-Uqe8eFFN.js"))}function Ks(){qr(import("./viewArchive-pIbqGJmd.js"))}const Xs=()=>{qr(import("./inventory-Ca3eiP5p.js"))},Vs=()=>{qr(import("./bazaar-UfBDvSJ4.js"))}
function Ys(){qr(import("./injectQuestBookFull-xrgTKFTw.js"))}const Zs=()=>{qr(import("./scavenging-9RTEUQs0.js"))}
const ec=()=>{qr(import("./toprated-tcv51f8B.js"))}
const tc=()=>{qr(import("./trade-kSx9zOcl.js"))}
var nc={creatures:{"-":{"-":Qs}},items:{"-":{"-":Qs},view:{"-":()=>{qr(import("./itemsView-b-zOm80R.js"))}}},masterrealms:{"-":{"-":Qs}},quests:{"-":{"-":Qs},view:{"-":()=>{qr(import("./showAllQuestSteps-ukRSwZ-8.js"))}}},realms:{"-":{"-":Qs}},relics:{"-":{"-":Qs}},shops:{"-":{"-":Qs}},"-":{news:{"-":zs},viewupdatearchive:{"-":Ks},viewarchive:{"-":Ks},"-":{"-":()=>{qr(import("./unknownPage-7DZPP4u5.js"))}}},arena:{"-":{"-":()=>{qr(import("./arena-TIMIONhi.js").then((function(e){return e.c})))}},dojoin:{"-":()=>{qr(import("./arenaDoJoin-haGC3SsT.js"))}},join:{"-":()=>{qr(import("./arenaJoin-q72Qz0Bb.js"))}},completed:{"-":()=>{qr(import("./completedArenas-UCvMIV_L.js"))}},pickmove:{"-":()=>{qr(import("./storeMoves-aXaQdXyF.js"))}},setup:{"-":()=>{qr(import("./setupMoves-raqdKC10.js"))}}},auctionhouse:{"-":{"-":()=>{qr(import("./injectAuctionHouse-WI-ihUth.js"))}},quickcreate:{"-":()=>{qr(import("./quickCreate-9Poj3cKy.js"))}}},bank:{"-":{"-":()=>{qr(import("./injectBank-haQpogOm.js"))}}},blacksmith:{repairall:{"-":function(){Xt("fromworld")&&Ts()}}},buffmarket:{"-":{"-":()=>{qr(import("./injectBuffmarket-X2A40JNU.js"))}}},combat:{attackplayer:{"-":Js}},composing:{"-":{"-":()=>{qr(import("./composing-3iFoabiH.js"))}},breakdown:{"-":()=>{qr(import("./breakdown-r17eiC-y.js"))}},create:{"-":()=>{qr(import("./composingCreate-L7GuxGUy.js"))}}},findplayer:{"-":{"-":()=>{qr(import("./findplayer-MRNK_g2n.js"))}}},guild:{inventory:{report:()=>{qr(import("./guildReport-g5h4IO9j.js"))},addtags:Fs,removetags:Fs,storeitems:()=>{qr(import("./storeitems-KFHJNTNo.js"))}},chat:{"-":qs},dochat:{"-":qs},log:{"-":()=>{qr(import("./guildLog-Mgpy-OVv.js"))}},groups:{viewstats:()=>{qr(import("./injectGroupStats-lRjKIR5r.js"))},joinallgroupsundersize:Us,joinall:Us,"-":Us},manage:{"-":Ds},advisor:{"-":Is,weekly:Is},history:{"-":Gs},view:{"-":Ds},scouttower:{"-":()=>{qr(import("./injectScouttower-lBJh_xX5.js"))}},mailbox:{"-":()=>{qr(import("./guildMailbox-FXXMcXen.js"))}},ranks:{"-":()=>{qr(import("./rank-KKuRfULe.js"))}},conflicts:{rpupgrades:()=>{qr(import("./injectRPUpgrades-i7lPNFO2.js"))}},bank:{"-":()=>{qr(import("./injectGuildBank-Cd0a_Pup.js"))}},hall:{"-":()=>{qr(import("./hall-syUqMshx.js"))},post:Gs},"-":{"-":Ds}},hellforge:{"-":{"-":()=>{qr(import("./hellforge-w6LxLTCT.js"))}}},inventing:{"-":{"-":function(){qr(import("./inventing-1Qss1w-3.js"))}},doinvent:{"-":Ws},viewrecipe:{"-":Ws}},log:{"-":{"-":()=>{qr(import("./playerLog-olzohzz8.js"))}}},marketplace:{createreq:{"-":()=>{qr(import("./marketplace-2kYKB6e3.js"))}}},news:{fsbox:{"-":()=>{qr(import("./newsFsbox-KRI8UEuS.js"))}},"-":{"-":zs},shoutbox:{"-":()=>{qr(import("./newsShoutbox-f1pxLt2P.js"))}},viewupdatearchive:{"-":Ks},viewarchive:{"-":Ks}},notepad:{showlogs:{"-":Qr},invmanagernew:{"-":Xs},guildinvmgr:{"-":Xs},recipemanager:{"-":ra},auctionsearch:{"-":Xr},onlineplayers:{"-":Zr},quicklinkmanager:{"-":na},monsterlog:{"-":Jr},quickextract:{"-":ta},quickwear:{"-":oa},fsboxcontent:{"-":zr},bufflogcontent:{"-":Wr},newguildlog:{"-":()=>{qr(import("./newGuildLog-NTRGiItm.js"))}},findbuffs:{"-":Vr},findother:{"-":Yr},savesettings:{"-":()=>{qr(import("./load-VTQPaUJC.js"))}},reliclist:{"-":aa},whosgotwhat:{"-":()=>{}}},points:{"-":{"-":()=>{qr(import("./points-OYEr3V3v.js"))}}},potionbazaar:{"-":{"-":Vs},buyitem:{"-":Vs}},privatemessage:{"-":{"-":()=>{qr(import("./privateMsg-upNtHuqJ.js"))}}},profile:{"-":{"-":Js},managecombatset:{"-":Js},report:{"-":Js},equipitem:{"-":Js},useitem:{"-":Js},changebio:{"-":Gs},dropitems:{"-":function(){qr(import("./injectProfileDropItems-_GC6bFcb.js"))}}},pvpladder:{"-":{"-":()=>{qr(import("./ladder-uBCQ8KVq.js"))}}},questbook:{"-":{"-":Ys},atoz:{"-":Ys},viewquest:{"-":()=>{qr(import("./injectQuestTracker-8gKrD0pn.js"))}}},quickbuff:{"-":{"-":()=>{qr(import("./quickBuff-x2fNlfIT.js"))}}},scavenging:{"-":{"-":Zs},process:{"-":Zs}},settings:{"-":{"-":()=>{qr(import("./injectSettings-W8e_iAuM.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{qr(import("./superelite-WjO7QSbt.js"))}}},tempinv:{"-":{"-":()=>{qr(import("./mailbox-ZFZA9TUu.js"))}}},temple:{"-":{"-":Rs}},titan:{"-":{"-":()=>{qr(import("./injectTitan-hHXZjWIi.js"))}}},toprated:{xp:{"-":ec},monthlyxp:{"-":ec},gold:{"-":ec},killstreak:{"-":ec},bounties:{"-":ec},risingstars:{"-":ec},arena:{"-":ec},superelites:{"-":ec},smasher:{"-":ec},globalquest:{"-":()=>{qr(import("./globalQuest-pgQ3M9c9.js"))}}},trade:{"-":{"-":tc},sendgold:{"-":tc},createsecure:{"-":tc},docreatesecure:{"-":tc}},world:{"-":{"-":Ts}}}
function oc(e){return _r("li",e)}function rc(e){return _r("ul",e)}const ac=()=>jr({className:"fshQuickLinks",style:{left:`${At("quickLinksLeftPx")}px`,top:`${At("quickLinksTopPx")}px`}}),ic=e=>"newWindow"in e&&e.url&&e.name
function sc(e,t){const n=Hr(t,rc())
e.filter(ic).forEach((e=>{Hr(Hr(n,oc()),function(e){const t=$a({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return Gr(t,(()=>br("chrome","quick link",e.name))),t}(e))}))}function cc(){if(!j(".mainbody"))return
const e=cs("quickLinks")||[]
e.length&&function(e){const t=ac()
t.classList.toggle("fshFixed",At("keepHelperMenuOnScreen")),At("draggableQuickLinks")&&(t.classList.add("fshMove"),Br(t)),sc(e,t),Hr(document.body,t)}(e)}let uc=0,lc=0,fc=0,dc="",pc=0,hc=0
function mc(e){return Xt(e)||"-"}function gc(e){const t=j(e)
return t?.value||"-"}function yc(){if(k(nc[uc])&&k(nc[uc][lc])&&w(nc[uc][lc][fc]))return nc[uc][lc][fc]}function bc(){""!==document.location.search?(uc=mc("cmd"),lc=mc("subcmd"),fc=mc("subcmd2"),["points","privatemessage"].includes(uc)&&(dc=`/${mc("type")}`)):(uc=gc('input[name="cmd"]'),lc=gc('input[name="subcmd"]'),fc=gc('input[name="subcmd2"]')),u.cmd=uc,u.subcmd=lc,u.subcmd2=fc,hc=`${uc}/${lc}/${fc}${dc}`,pc=yc()}function vc(){w(pc)&&(g(hc),b("JS Perf",hc),pc(),v("JS Perf",hc))}async function wc(e){b("JS Perf","FSH.runCore"),bc(),await e,Ps(),zt(3,vc),At("playNewMessageSound")&&zt(3,yr),u.huntingMode||zt(3,cc),v("JS Perf","FSH.runCore")}const kc=[()=>!("containerName"in CSSContainerRule.prototype),()=>!("toSpliced"in Array.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,p]
function _c(e,t){if(b("JS Perf","FSH.dispatch"),kc.some((e=>e())))return
const n=S("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
A(),function(e,t){u.gmInfo=_(decodeURIComponent(t)),u.gmInfo?u.fshVer=e:u.fshVer=`${e}_native`,u.calfVer="116"}(e,t),h(),wc(n),v("JS Perf","FSH.dispatch")}export{di as $,F as A,rc as B,vr as C,Sr as D,Ja as E,Qa as F,Et as G,Pt as H,xi as I,Ho as J,rn as K,Cn as L,Nn as M,Gn as N,yo as O,Pn as P,xn as Q,Wn as R,Ro as S,Fn as T,Bn as U,Rn as V,Vt as W,Tn as X,nn as Y,cs as Z,An as _,ui as a,_e as a$,Un as a0,Qn as a1,ls as a2,o as a3,Qi as a4,Xt as a5,Vo as a6,Qr as a7,Jr as a8,Ya as a9,Ge as aA,qe as aB,De as aC,Os as aD,$e as aE,ee as aF,Be as aG,R as aH,ze as aI,ya as aJ,_ as aK,zt as aL,Dr as aM,gt as aN,mt as aO,bt as aP,yt as aQ,vt as aR,Yo as aS,nr as aT,e as aU,w as aV,He as aW,qn as aX,On as aY,Le as aZ,sn as a_,Ii as aa,u as ab,us as ac,At as ad,Ir as ae,ve as af,Er as ag,Mn as ah,st as ai,H as aj,Z as ak,or as al,ii as am,$r as an,fe as ao,de as ap,Kt as aq,Oe as ar,se as as,$t as at,Zo as au,xa as av,ia as aw,c as ax,et as ay,Re as az,M as b,r as b$,go as b0,I as b1,Qe as b2,Xe as b3,Po as b4,Lo as b5,Eo as b6,To as b7,io as b8,No as b9,li as bA,bn as bB,jt as bC,pi as bD,k as bE,Tt as bF,ut as bG,Sa as bH,b as bI,v as bJ,oi as bK,pe as bL,St as bM,js as bN,Nt as bO,Te as bP,ba as bQ,ot as bR,$i as bS,rt as bT,U as bU,Rr as bV,_r as bW,ye as bX,at as bY,ht as bZ,V as b_,Mo as ba,Bo as bb,D as bc,Pe as bd,Io as be,Do as bf,K as bg,Mt as bh,Lt as bi,ue as bj,si as bk,ln as bl,ao as bm,Ke as bn,Fe as bo,Ze as bp,tt as bq,nt as br,ti as bs,ei as bt,ni as bu,Ie as bv,Ue as bw,Ve as bx,Je as by,Ka as bz,ar as c,oo as c$,ft as c0,xr as c1,fn as c2,Jn as c3,hn as c4,mn as c5,pn as c6,so as c7,uo as c8,Ao as c9,Ws as cA,N as cB,ka as cC,G as cD,_t as cE,be as cF,tr as cG,kt as cH,In as cI,on as cJ,Y as cK,q as cL,J as cM,z as cN,it as cO,Kr as cP,ke as cQ,X as cR,Lr as cS,Q as cT,ea as cU,Ds as cV,Hn as cW,Co as cX,Wo as cY,Ce as cZ,Ae as c_,bo as ca,ci as cb,Zt as cc,no as cd,to as ce,_o as cf,as as cg,P as ch,wa as ci,ge as cj,oc as ck,t as cl,S as cm,lt as cn,qr as co,vn as cp,Oa as cq,Si as cr,ae as cs,B as ct,wt as cu,W as cv,dt as cw,g as cx,zs as cy,Ys as cz,Ur as d,Br as d0,ce as d1,Kn as d2,ro as d3,gn as d4,me as d5,Me as d6,Mi as d7,La as d8,Dn as d9,un as dA,oa as dB,_c as dC,sa as da,Fr as db,ra as dc,he as dd,Wr as de,na as df,Xr as dg,Zr as dh,Yr as di,Vr as dj,oe as dk,mr as dl,Ne as dm,Rs as dn,Hs as dp,zr as dq,je as dr,Se as ds,pt as dt,Ee as du,le as dv,yi as dw,re as dx,yn as dy,ta as dz,za as e,Bi as f,n as g,Oi as h,Hr as i,ct as j,Li as k,xt as l,jr as m,$a as n,Gr as o,gr as p,j as q,a as r,br as s,xe as t,va as u,is as v,Hi as w,er as x,_s as y,Pr as z}
//# sourceMappingURL=calfSystem-ZGMc097r.js.map
