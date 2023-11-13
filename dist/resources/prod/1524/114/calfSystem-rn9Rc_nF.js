function e(e,t){return e.exec(t)}function t(t,n){const o=e(t,n)
if(o)return o[1]}const n=["www.keeprefreshing.com"]
let o=!1,r=!1
function a(){if(!r){const e=t(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
o=n.includes(e),r=!0}return o}function i(e){return void 0===e}function s(){return a()||i(window.ga)}function c(e){s()||(ga("fshApp.set","screenName",e),ga("fshApp.send","screenview"))}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f={exports:{}}
f.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==u?u:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var o=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})})),n}var o={},r={},a={},i={},s="<unknown>"
function c(e){return e.split("\n").reduce((function(e,t){var n=d(t)||h(t)||b(t)||k(t)||v(t)
return n&&e.push(n),e}),[])}var l=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,f=/\((\S*)(?::(\d+))(?::(\d+))\)/
function d(e){var t=l.exec(e)
if(!t)return null
var n=t[2]&&0===t[2].indexOf("native"),o=t[2]&&0===t[2].indexOf("eval"),r=f.exec(t[2])
return o&&null!=r&&(t[2]=r[1],t[3]=r[2],t[4]=r[3]),{file:n?null:t[2],methodName:t[1]||s,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var p=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function h(e){var t=p.exec(e)
return t?{file:t[2],methodName:t[1]||s,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var m=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,g=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function b(e){var t=m.exec(e)
if(!t)return null
var n=t[3]&&t[3].indexOf(" > eval")>-1,o=g.exec(t[3])
return n&&null!=o&&(t[3]=o[1],t[4]=o[2],t[5]=null),{file:t[3],methodName:t[1]||s,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var y=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i
function v(e){var t=y.exec(e)
return t?{file:t[3],methodName:t[1]||s,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var w=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
function k(e){var t=w.exec(e)
return t?{file:t[2],methodName:t[1]||s,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var _=n(Object.freeze({__proto__:null,parse:c}))
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
var s=r(_)
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
case 3:return[2,n]}}))}))}function b(e,t){for(var n=[],o=!0,r=0,a=t.length;r<a;r++){var i=(0,t[r])(e)
!1===i&&(o=!1),n.push(i)}return{results:n,result:o}}function y(e,t,n){e&&e.afterNotify&&e.afterNotify(n,e)
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
if(e)if(S(e)){var n=e
t=c(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?v(e):{message:String(e)}
else t={}
return t}function S(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function $(e,t,n){if(e&&t&&n&&t in e)try{for(var o=e[t];o&&o.__hb_original;)o=o.__hb_original
e[t]=n(o),e[t].__hb_original=o}catch(e){}}function x(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function L(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function E(e,t){if(P("Object",e)){P("Array",t)||(t=[])
var n=[]
return o(e)}function o(e){var r,a
if(P("Object",e)||P("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(P("Object",e)){for(r in a={},e)T(r,t)?a[r]="[FILTERED]":a[r]=o(e[r])
return a}return P("Array",e)?e.map((function(e){return o(e)})):P("Function",e)?"[FUNC]":e}}function T(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function P(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function O(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var o=e
return n.split(/[&]\s?/).forEach((function(e){var n=e.split("=",2),r=n[0],a=n[1]
T(r,t)&&(o=o.replace("".concat(r,"=").concat(a),"".concat(r,"=[FILTERED]")))})),o}function C(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach((function(o){var r=t+o.replace(/\W/g,"_").toUpperCase()
n[r]=e[o]})),n}function A(e){return JSON.parse(JSON.stringify(e))}function N(e,t,n){if(void 0===n&&(n=2),!e)return null
var o=e.split("\n")
o.unshift("")
for(var r=t+n,a={},i=t-n;i<=r;i++){var s=o[i]
"string"==typeof s&&(a[i]=s)}return a}function M(e){return void 0!==e.async}t.merge=c,t.mergeNotice=u,t.objectIsEmpty=l,t.objectIsExtensible=f,t.makeBacktrace=d,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=h,t.getCauses=m,t.getSourceForBacktrace=g,t.runBeforeNotifyHandlers=b,t.runAfterNotifyHandlers=y,t.shallowClone=v,t.sanitize=w,t.logger=k,t.makeNotice=j,t.isErrorObject=S,t.instrument=$,t.endpoint=x,t.generateStackTrace=L,t.filter=E,t.filterUrl=O,t.formatCGIData=C,t.clone=A,t.isBrowserConfig=M}(i)
var j={}
Object.defineProperty(j,"__esModule",{value:!0}),j.GlobalStore=void 0
var S=i,$=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,S.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
j.GlobalStore=$
var x=e&&e.__assign||function(){return x=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},x.apply(this,arguments)},L=e&&e.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function s(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):r(e.value).then(i,s)}c((o=o.apply(e,t||[])).next())}))},E=e&&e.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1]
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
var T=i,P=j,O=/,|\s+/,C=/\S/,A=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.5.3"},this.config=x({apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]},e),this.__initStore(),this.__transport=t,this.logger=(0,T.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
return this.loadPlugins(),this},e.prototype.loadPlugins=function(){var e=this;(this.__pluginsLoaded?this.config.__plugins.filter((function(e){return e.shouldReloadOnConfigure})):this.config.__plugins).forEach((function(t){return t.load(e)})),this.__pluginsLoaded=!0},e.prototype.__initStore=function(){this.__store=new P.GlobalStore({context:{},breadcrumbs:[]},this.config.maxBreadcrumbs)},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&null!=e&&this.__store.setContext(e),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__store.clear(),"object"==typeof e&&null!==e&&this.__store.setContext(e),this},e.prototype.clear=function(){return this.__store.clear(),this},e.prototype.notify=function(e,t,n){var o=this
void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var r=this.makeNotice(e,t,n),a=r&&r.backtrace?r.backtrace.map((function(e){return(0,T.shallowClone)(e)})):null,i=this.__runPreconditions(r)
return i instanceof Error?((0,T.runAfterNotifyHandlers)(r,this.__afterNotifyHandlers,i),!1):i instanceof Promise?(i.then((function(e){return e instanceof Error?((0,T.runAfterNotifyHandlers)(r,o.__afterNotifyHandlers,e),!1):o.__send(r,a)})),!0):(this.__send(r,a).catch((function(e){})),!0)},e.prototype.notifyAsync=function(e,t,n){var o=this
return void 0===t&&(t=void 0),void 0===n&&(n=void 0),new Promise((function(r,a){var i,s
i=e.afterNotify?e:t&&t.afterNotify?t:n&&n.afterNotify?n:t&&"object"==typeof t?t:n||(t={}),s=i.afterNotify,i.afterNotify=function(e){if(null==s||s.call(o,e),e)return a(e)
r()},o.notify(e,t,n)}))},e.prototype.makeNotice=function(e,t,n){void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var o=(0,T.makeNotice)(e)
if(t&&"object"!=typeof t&&(t={name:String(t)}),t&&(o=(0,T.mergeNotice)(o,t)),"object"==typeof n&&null!==n&&(o=(0,T.mergeNotice)(o,n)),(0,T.objectIsEmpty)(o))return null
var r=this.__store.getContents("context"),a=this.__constructTags(o.tags),i=this.__constructTags(r.tags),s=this.__constructTags(this.config.tags),c=a.concat(i).concat(s),u=c.filter((function(e,t){return c.indexOf(e)===t}))
return o=(0,T.merge)(o,{name:o.name||"Error",context:(0,T.merge)(r,o.context),projectRoot:o.projectRoot||this.config.projectRoot,environment:o.environment||this.config.environment,component:o.component||this.config.component,action:o.action||this.config.action,revision:o.revision||this.config.revision,tags:u}),Array.isArray(o.backtrace)&&o.backtrace.length||("string"==typeof o.stack&&o.stack.trim()?o.backtrace=(0,T.makeBacktrace)(o.stack,!1,this.logger):(o.stack=(0,T.generateStackTrace)(),o.backtrace=(0,T.makeBacktrace)(o.stack,!0,this.logger))),o},e.prototype.addBreadcrumb=function(e,t){if(this.config.breadcrumbsEnabled){t=t||{}
var n=(0,T.shallowClone)(t.metadata),o=t.category||"custom",r=(new Date).toISOString()
return this.__store.addBreadcrumb({category:o,message:e,metadata:n,timestamp:r}),this}},e.prototype.__getBreadcrumbs=function(){return this.__store.getContents("breadcrumbs").slice()},e.prototype.__getContext=function(){return this.__store.getContents("context")},e.prototype.__developmentMode=function(){return!0!==this.config.reportData&&this.config.environment&&this.config.developmentEnvironments.includes(this.config.environment)},e.prototype.__buildPayload=function(e){var t=(0,T.filter)(e.headers,this.config.filters)||{},n=(0,T.filter)(x(x({},e.cgiData),(0,T.formatCGIData)(t,"HTTP_")),this.config.filters)
return{notifier:this.__notifier,breadcrumbs:{enabled:!!this.config.breadcrumbsEnabled,trail:e.__breadcrumbs||[]},error:{class:e.name,message:e.message,backtrace:e.backtrace,fingerprint:e.fingerprint,tags:e.tags,causes:(0,T.getCauses)(e,this.logger)},request:{url:(0,T.filterUrl)(e.url,this.config.filters),component:e.component,action:e.action,context:e.context,cgi_data:n,params:(0,T.filter)(e.params,this.config.filters)||{},session:(0,T.filter)(e.session,this.config.filters)||{}},server:{project_root:e.projectRoot,environment_name:e.environment,revision:e.revision,hostname:this.config.hostname,time:(new Date).toUTCString()},details:e.details||{}}},e.prototype.__constructTags=function(e){return e?e.toString().split(O).filter((function(e){return C.test(e)})):[]},e.prototype.__runPreconditions=function(e){var t=this,n=null
e||(this.logger.debug("failed to build error report"),n=new Error("failed to build error report")),!1===this.config.reportData&&(this.logger.debug("skipping error report: honeybadger.js is disabled",e),n=new Error("honeybadger.js is disabled")),this.__developmentMode()&&(this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.",e),n=new Error("honeybadger.js is in development mode")),this.config.apiKey||(this.logger.warn("could not send error report: no API key has been configured",e),n=new Error("missing API key"))
var o=(0,T.runBeforeNotifyHandlers)(e,this.__beforeNotifyHandlers)
return n||o.result||(this.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers returned false")),o.results.length&&o.results.some((function(e){return e instanceof Promise}))?Promise.allSettled(o.results).then((function(o){if(!n&&o.some((function(e){return"rejected"===e.status||!1===e.value}))&&(t.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers (async) returned false")),n)return n})):n},e.prototype.__send=function(e,t){var n=this
return this.config.breadcrumbsEnabled?(this.addBreadcrumb("Honeybadger Notice",{category:"notice",metadata:{message:e.message,name:e.name,stack:e.stack}}),e.__breadcrumbs=this.__store.getContents("breadcrumbs")):e.__breadcrumbs=[],(0,T.getSourceForBacktrace)(t,this.__getSourceFileHandler).then((function(t){return L(n,void 0,void 0,(function(){var n
return E(this,(function(o){return t.forEach((function(t,n){e.backtrace[n].source=t})),n=this.__buildPayload(e),[2,this.__transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json",Accept:"text/json, application/json"},method:"POST",endpoint:(0,T.endpoint)(this.config.endpoint,"/v1/notices/js"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},n)]}))}))})).then((function(t){if(201!==t.statusCode)return(0,T.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,new Error("Bad HTTP response: ".concat(t.statusCode))),n.logger.warn("Error report failed: unknown response from server. code=".concat(t.statusCode)),!1
var o=JSON.parse(t.body).id
return(0,T.runAfterNotifyHandlers)((0,T.merge)(e,{id:o}),n.__afterNotifyHandlers),n.logger.info("Error report sent ⚡ https://app.honeybadger.io/notice/".concat(o)),!0})).catch((function(t){return n.logger.error("Error report failed: an unknown error occurred.","message=".concat(t.message)),(0,T.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,t),!1}))},e}()
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
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return c.Client}}),r(j,t),t.Types=s(N),t.Util=s(i)}(r)
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
var be={}
Object.defineProperty(be,"__esModule",{value:!0})
var ye=M,ve=r.Util.instrument
function we(e){return void 0===e&&(e=(0,ye.globalThisOrWindow)()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach((function(n){var o=e[n]&&e[n].prototype
o&&Object.prototype.hasOwnProperty.call(o,"addEventListener")&&(ve(o,"addEventListener",(function(e){var o={component:"".concat(n,".prototype.addEventListener")}
return function(n,r,a,i){try{r&&null!=r.handleEvent&&(r.handleEvent=t.__wrap(r.handleEvent,o))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(r,o),a,i)}})),ve(o,"removeEventListener",(function(e){return function(n,o,r,a){return e.call(this,n,o,r,a),e.call(this,n,t.__wrap(o),r,a)}})))}))}}}be.default=we
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
function xe(e){return Object.entries(e)}var Le=function(){function e(){}return e.prototype.send=function(e,t){return _e(this,void 0,void 0,(function(){var n,o,r,a,i
return je(this,(function(s){switch(s.label){case 0:return n=e.headers?xe(e.headers):[],o={},n.forEach((function(e){var t=e[0],n=e[1]
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
var u=r,l=M,f=z,d=c(oe),p=c(se),h=c(pe),m=c(be),g=ke,b=u.Util.merge,y=u.Util.filter,v=u.Util.objectIsExtensible,w=function(){var e=(0,l.globalThisOrWindow)(),t=""
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
"undefined"!=typeof navigator&&navigator.userAgent&&(o.HTTP_USER_AGENT=navigator.userAgent),"undefined"!=typeof document&&document.referrer.match(/\S/)&&(o.HTTP_REFERER=document.referrer),(t="string"==typeof e.cookies?(0,l.decodeCookie)(e.cookies):e.cookies)&&(o.HTTP_COOKIE=(0,l.encodeCookie)(y(t,this.config.filters)))
var r=n.prototype.__buildPayload.call(this,e)
return r.request.cgi_data=b(o,r.request.cgi_data),r},r.prototype.__wrap=function(e,t){void 0===t&&(t={})
var n=e
t||(t={})
try{if("function"!=typeof n)return n
if(!v(n))return n
if(!n.___hb){var o=this
n.___hb=function(){if(!l.preferCatch)return n.apply(this,arguments)
try{return n.apply(this,arguments)}catch(e){if(o.__lastWrapErr===e)throw e
throw o.__lastWrapErr=e,(0,f.ignoreNextOnError)(),o.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),o.config.enableUncaught&&o.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},r.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},r.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},r}(u.Client),j=new _({__plugins:[(0,f.onError)(),(0,d.default)(),(0,h.default)(),(0,m.default)(),(0,p.default)()]}),S={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.5.3"}
j.setNotifier(S)
var $=r
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return $.Types}}),t.default=j}(o)
var Ee=t(o)
return Ee}()
var d=l(f.exports)
function p(e,t){return t?t.getElementById(e):document.getElementById(e)}function h(e){if(e instanceof Node)return e.textContent}let m=null
const g=()=>function(){const e=p("statbar-character")
return e&&h(e)}()||"string"==typeof window.self&&window.self
function b(){if(!m){const e=g()
e&&(m=e)}return m}var y={}
function v(){!function(){d.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",revision:"15.24.114"})
const e=b()
e&&d.setContext({user_id:e})}()}const w={}
function k(e,t,n){w[`${e}:${t}:${n}`]=1e3*performance.now()}function _(e,t,n){s()||function(e,t,n){const o=Math.round(1e3*performance.now()-w[`${e}:${t}:${n}`])/1e3
o>10&&ga("fshApp.send","timing",e,t,Math.round(o),n)}(e,t,n)}function j(e){return"function"==typeof e}function S(e){return"object"==typeof e}function x(e,t){try{return JSON.parse(e,t)}catch(e){}}function L(e,t){return t?t.querySelector(e):document.querySelector(e)}function E(e){const t=L("link",document.body)
return new Promise((n=>{const o=document.createElement("link")
o.type="text/css",o.rel="stylesheet",o.onload=()=>{n()},o.href=e,t?t.before(o):document.body.append(o)}))}function T(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class P extends Error{constructor([e,t,n,o],...r){super(function(e,t,n,o){const r=`${t.status} ${t.statusText} - `
if(t.statusText===o.toString())return r+T(e)
const a=`${r+n} ${o} - ${T(e)}`
return"parsererror"===n?`${a} - ${t.responseText}`:a}(e,t,n,o),...r),Error.captureStackTrace&&Error.captureStackTrace(this,P),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=o}}function O(...e){console.log(...e)}function C(e){return null===e}const A=`${document.location.protocol}//${document.location.host}/`,N=window.HCS?.defines?.cdn,M=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],B=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],R=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,G=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,D=/guild_id=(?<guildId>\d+)/,I=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,U=/player_id=(?<playerId>\d+)/,F=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,q=/VL:.+?(?<vl>\d+)/,W=.2,Q="joinallgroupsundersize",J="index.php",z="?cmd=",K=`${J}${z}`,X="&subcmd=",V="&target_username=",Y=`${z}notepad&blank=1${X}`,Z=`${J}${`${Y}newguildlog`}`,ee=`${K}auctionhouse`,te=`${ee}&search=`,ne=`${K}log`,oe=`${K}ignore${X}add&ignore_username=`,re=`${K}profile`,ae=`${re}&player_id=`,ie=`${re}${X}dropitems`,se=`${K}trade&target_player=`,ce=`${K}trade${X}createsecure${V}`,ue=`${K}arena${X}`,le=`${J}${Y}`,fe=`${le}auctionsearch`,de=`${K}points`,pe=`${K}guild${X}`,he=`${pe}log`,me=`${pe}scouttower`,ge=`${pe}groups&subcmd2=`,be=`${pe}inventory&subcmd2=report&user=`,ye=`${pe}view&guild_id=`,ve=`${ge}joinall`,we=`${ge}${Q}`,ke=`${K}world`,_e=`${K}findplayer`,je=`${_e}&search_show_first=1&search_username=`,Se=`${K}blacksmith`,$e=`${K}quickbuff`,xe=`${K}composing`,Le=`${K}attackplayer${V}`,Ee=`${K}${X}viewupdatearchive`,Te=`${K}${X}viewarchive`,Pe=`${K}bounty`,Oe=`${K}inventing${X}viewrecipe&recipe_id=`,Ce=`https://guide.fallensword.com/${K}`,Ae="after-update.actionlist",Ne="buffs.player",Me="update.player",Be="level.stats-player",He="gold.stats-player",Re="prompt.worldDialogShop",Ge="keydown.controls",De="update.realm",Ie="-success.action-response",Ue=`-1${Ie}`,Fe=`1${Ie}`,qe=`2${Ie}`,We=`9${Ie}`,Qe=`5${Ie}`,Je=`25${Ie}`,ze=1,Ke=2,Xe=16,Ve=128,Ye=256,Ze="needToCompose",et="lastComposeCheck",tt="characterVirtualLevel",nt="enableGuildActivityTracker",ot="lastLadderReset",rt="form",at="table",it="td",st="tr",ct="fsh_buffLog",ut="statbar-level-tooltip-general",lt="stat-level",ft="stat-defense",dt="stat-attack",pt="stat-damage",ht="stat-armor",mt="stat-hp",gt="stat-vl",bt="GM_",yt=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],vt=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],wt=`${N}ui/world/action_spinner.gif`,kt=".fa-envelope",_t='a[href*="&player_id="]',jt=.002,St=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],$t='input[name="blockedSkillList[]"]'
var xt={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252"}
const Lt=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function Et(e,t){const n=window.localStorage.getItem(bt+e)
return C(n)||i(n)?t:function(e){const t=Lt.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(n)}function Tt(e){return Et(e,xt[e])}function Pt(e,t){Tt("betaOptIn")&&O("sendException",e),gtag("event","exception",{description:e,fatal:t})}function Ot(e,t,n,o){e instanceof EventTarget&&e.addEventListener(t,n,o)}function Ct(e,t,n){return JSON.stringify(e,t,n)}function At(e){return e instanceof Error?function(e){return e.stack?function(e){const t=e.stack.replace(/\n +/g,"|")
return e.stack.includes(e.message)?t:`${e.message}|${t}`}(e):e.message?e.message:String(e)}(e):"object"==typeof e?Ct(e):String(e)}function Nt(e,t){return e||t}const Mt=[null]
function Bt(e,t){return Mt[e]&&Mt[e].priority<Mt[t].priority}function Ht(e,t){const n=Mt[e]
Mt[e]=Mt[t],Mt[t]=n}function Rt(e,t){return e?2*t:2*t+1}function Gt(){if(1===Mt.length)return
const e=Mt[1].data,t=Mt.pop()
return Mt.length>1&&(Mt[1]=t,function(e){let t=e
for(;2*t<Mt.length;){const e=Rt(!Bt(2*t+1,2*t),t)
if(Bt(t,e))break
Ht(t,e),t=e}}(1)),e}function Dt(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Bt(t,e))break
Ht(t,e),t=e}}(Mt.push({data:e,priority:t})-1)}let It=!0
const Ut="fshMessage"
let Ft=0
function qt(){Mt.length-1==0?It=!0:(It=!1,window.postMessage(Ut,window.location.origin))}function Wt(){const e=Gt()
var t
j(e)?e():i(t=e)||Pt(`pop() was not a function (${typeof t})`,!1)}function Qt(e){const t=e.data
e.origin===window.location.origin&&t===Ut&&function(){try{Wt()}catch(e){Pt(At(e),!1)}finally{qt()}}()}function Jt(e,t,n,o){if(j(t)){Ft||(Ot(window,"message",Qt),Ft=!0)
const r=Nt(o,window),a=Nt(n,[])
Dt(t.bind(r,...a),e),It&&qt()}}function zt(e,t){return new URLSearchParams(e).get(t)}function Kt(e){return zt(decodeURIComponent(window.location.search),e)}function Xt(){}const Vt=e=>e
function Yt(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}function Zt(e){return e()}function en(){return Object.create(null)}function tn(e){e.forEach(Zt)}function nn(e){return"function"==typeof e}function on(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let rn
function an(e,t){return e===t||(rn||(rn=document.createElement("a")),rn.href=t,e===rn.href)}function sn(e,...t){if(null==e){for(const e of t)e(void 0)
return Xt}const n=e.subscribe(...t)
return n.unsubscribe?()=>n.unsubscribe():n}function cn(e){let t
return sn(e,(e=>t=e))(),t}function un(e,t,n){e.$$.on_destroy.push(sn(t,n))}function ln(e,t,n,o){if(e){const r=fn(e,t,n,o)
return e[0](r)}}function fn(e,t,n,o){return e[1]&&o?function(e,t){for(const n in t)e[n]=t[n]
return e}(n.ctx.slice(),e[1](o(t))):n.ctx}function dn(e,t,n,o){if(e[2]&&o){const r=e[2](o(n))
if(void 0===t.dirty)return r
if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length)
for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o]
return e}return t.dirty|r}return t.dirty}function pn(e,t,n,o,r,a){if(r){const i=fn(t,n,o,a)
e.p(i,r)}}function hn(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32
for(let e=0;e<n;e++)t[e]=-1
return t}return-1}function mn(e){const t={}
for(const n in e)t[n]=!0
return t}function gn(e){let t=!1
return function(...n){t||(t=!0,e.call(this,...n))}}function bn(e){return null==e?"":e}function yn(e){return e&&nn(e.destroy)?e.destroy:Xt}function vn(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const wn="undefined"!=typeof window
let kn=wn?()=>window.performance.now():()=>Date.now(),_n=wn?e=>requestAnimationFrame(e):Xt
const jn=new Set
function Sn(e){jn.forEach((t=>{t.c(e)||(jn.delete(t),t.f())})),0!==jn.size&&_n(Sn)}function $n(e,t){e.appendChild(t)}function xn(e){if(!e)return document
const t=e.getRootNode?e.getRootNode():e.ownerDocument
return t&&t.host?t:e.ownerDocument}function Ln(e){const t=On("style")
return t.textContent="/* empty */",function(e,t){$n(e.head||e,t),t.sheet}(xn(e),t),t.sheet}function En(e,t,n){e.insertBefore(t,n||null)}function Tn(e){e.parentNode&&e.parentNode.removeChild(e)}function Pn(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function On(e){return document.createElement(e)}function Cn(e){return document.createTextNode(e)}function An(){return Cn(" ")}function Nn(){return Cn("")}function Mn(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function Bn(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Hn(e){return function(t){t.target===this&&e.call(this,t)}}function Rn(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Gn(e){let t
return{p(...n){t=n,t.forEach((t=>e.push(t)))},r(){t.forEach((t=>e.splice(e.indexOf(t),1)))}}}function Dn(e){return""===e?null:+e}function In(e,t){t=""+t,e.data!==t&&(e.data=t)}function Un(e,t){e.value=null==t?"":t}function Fn(e,t,n,o){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function qn(e,t,n){for(let n=0;n<e.options.length;n+=1){const o=e.options[n]
if(o.__value===t)return void(o.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function Wn(e){const t=e.querySelector(":checked")
return t&&t.__value}function Qn(e,t,n){e.classList.toggle(t,!!n)}function Jn(e,t,{bubbles:n=!1,cancelable:o=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:o})}function zn(e,t){return new e(t)}const Kn=new Map
let Xn,Vn=0
function Yn(e,t,n,o,r,a,i,s=0){const c=16.666/o
let u="{\n"
for(let e=0;e<=1;e+=c){const o=t+(n-t)*a(e)
u+=100*e+`%{${i(o,1-o)}}\n`}const l=u+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(e){let t=5381,n=e.length
for(;n--;)t=(t<<5)-t^e.charCodeAt(n)
return t>>>0}(l)}_${s}`,d=xn(e),{stylesheet:p,rules:h}=Kn.get(d)||function(e,t){const n={stylesheet:Ln(t),rules:{}}
return Kn.set(e,n),n}(d,e)
h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${l}`,p.cssRules.length))
const m=e.style.animation||""
return e.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,Vn+=1,f}function Zn(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-o.length
r&&(e.style.animation=o.join(", "),Vn-=r,Vn||_n((()=>{Vn||(Kn.forEach((e=>{const{ownerNode:t}=e.stylesheet
t&&Tn(t)})),Kn.clear())})))}function eo(e){Xn=e}function to(){if(!Xn)throw new Error("Function called outside component initialization")
return Xn}function no(e){to().$$.on_mount.push(e)}function oo(e){to().$$.after_update.push(e)}function ro(e){to().$$.on_destroy.push(e)}function ao(){const e=to()
return(t,n,{cancelable:o=!1}={})=>{const r=e.$$.callbacks[t]
if(r){const a=Jn(t,n,{cancelable:o})
return r.slice().forEach((t=>{t.call(e,a)})),!a.defaultPrevented}return!0}}function io(e,t){const n=e.$$.callbacks[t.type]
n&&n.slice().forEach((e=>e.call(this,t)))}const so=[],co=[]
let uo=[]
const lo=[],fo=Promise.resolve()
let po=!1
function ho(){po||(po=!0,fo.then(ko))}function mo(){return ho(),fo}function go(e){uo.push(e)}function bo(e){lo.push(e)}const yo=new Set
let vo,wo=0
function ko(){if(0!==wo)return
const e=Xn
do{try{for(;wo<so.length;){const e=so[wo]
wo++,eo(e),_o(e.$$)}}catch(e){throw so.length=0,wo=0,e}for(eo(null),so.length=0,wo=0;co.length;)co.pop()()
for(let e=0;e<uo.length;e+=1){const t=uo[e]
yo.has(t)||(yo.add(t),t())}uo.length=0}while(so.length)
for(;lo.length;)lo.pop()()
po=!1,yo.clear(),eo(e)}function _o(e){if(null!==e.fragment){e.update(),tn(e.before_update)
const t=e.dirty
e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(go)}}function jo(e,t,n){e.dispatchEvent(Jn(`${t?"intro":"outro"}${n}`))}const So=new Set
let $o
function xo(){$o={r:0,c:[],p:$o}}function Lo(){$o.r||tn($o.c),$o=$o.p}function Eo(e,t){e&&e.i&&(So.delete(e),e.i(t))}function To(e,t,n,o){if(e&&e.o){if(So.has(e))return
So.add(e),$o.c.push((()=>{So.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}else o&&o()}const Po={duration:0}
function Oo(e,t,n,o){let r,a=t(e,n,{direction:"both"}),i=o?0:1,s=null,c=null,u=null
function l(){u&&Zn(e,u)}function f(e,t){const n=e.b-i
return t*=Math.abs(n),{a:i,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function d(t){const{delay:n=0,duration:o=300,easing:d=Vt,tick:p=Xt,css:h}=a||Po,m={start:kn()+n,b:t}
t||(m.group=$o,$o.r+=1),"inert"in e&&(t?void 0!==r&&(e.inert=r):(r=e.inert,e.inert=!0)),s||c?c=m:(h&&(l(),u=Yn(e,i,t,o,n,d,h)),t&&p(0,1),s=f(m,o),go((()=>jo(e,t,"start"))),function(e){let t
0===jn.size&&_n(Sn),new Promise((n=>{jn.add(t={c:e,f:n})}))}((t=>{if(c&&t>c.start&&(s=f(c,o),c=null,jo(e,s.b,"start"),h&&(l(),u=Yn(e,i,s.b,s.duration,0,d,a.css))),s)if(t>=s.end)p(i=s.b,1-i),jo(e,s.b,"end"),c||(s.b?l():--s.group.r||tn(s.group.c)),s=null
else if(t>=s.start){const e=t-s.start
i=s.a+s.d*d(e/s.duration),p(i,1-i)}return!(!s&&!c)})))}return{run(e){nn(a)?(vo||(vo=Promise.resolve(),vo.then((()=>{vo=null}))),vo).then((()=>{a=a({direction:e?"in":"out"}),d(e)})):d(e)},end(){l(),s=c=null}}}function Co(e,t,n){const o=e.$$.props[t]
void 0!==o&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function Ao(e){e&&e.c()}function No(e,t,n){const{fragment:o,after_update:r}=e.$$
o&&o.m(t,n),go((()=>{const t=e.$$.on_mount.map(Zt).filter(nn)
e.$$.on_destroy?e.$$.on_destroy.push(...t):tn(t),e.$$.on_mount=[]})),r.forEach(go)}function Mo(e,t){const n=e.$$
null!==n.fragment&&(!function(e){const t=[],n=[]
uo.forEach((o=>-1===e.indexOf(o)?t.push(o):n.push(o))),n.forEach((e=>e())),uo=t}(n.after_update),tn(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Bo(e,t,n,o,r,a,i=null,s=[-1]){const c=Xn
eo(e)
const u=e.$$={fragment:null,ctx:[],props:a,update:Xt,not_equal:r,bound:en(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:en(),dirty:s,skip_bound:!1,root:t.target||c.$$.root}
i&&i(u.root)
let l=!1
if(u.ctx=n?n(e,t.props||{},((t,n,...o)=>{const a=o.length?o[0]:n
return u.ctx&&r(u.ctx[t],u.ctx[t]=a)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](a),l&&function(e,t){-1===e.$$.dirty[0]&&(so.push(e),ho(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],u.update(),l=!0,tn(u.before_update),u.fragment=!!o&&o(u.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target)
u.fragment&&u.fragment.l(e),e.forEach(Tn)}else u.fragment&&u.fragment.c()
t.intro&&Eo(e.$$.fragment),No(e,t.target,t.anchor),ko()}eo(c)}class Ho{$$=void 0
$$set=void 0
$destroy(){Mo(this,1),this.$destroy=Xt}$on(e,t){if(!nn(t))return Xt
const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[])
return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t
this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ro=[]
function Go(e,t=Xt){let n
const o=new Set
function r(t){if(on(e,t)&&(e=t,n)){const t=!Ro.length
for(const t of o)t[1](),Ro.push(t,e)
if(t){for(let e=0;e<Ro.length;e+=2)Ro[e][0](Ro[e+1])
Ro.length=0}}}function a(t){r(t(e))}return{set:r,update:a,subscribe:function(i,s=Xt){const c=[i,s]
return o.add(c),1===o.size&&(n=t(r,a)||Xt),i(e),()=>{o.delete(c),0===o.size&&n&&(n(),n=null)}}}}function Do(e,t,n){const o=!Array.isArray(e),r=o?[e]:e
if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const a=t.length<2
return function(e,t){return{subscribe:Go(e,t).subscribe}}(n,((e,n)=>{let i=!1
const s=[]
let c=0,u=Xt
const l=()=>{if(c)return
u()
const r=t(o?s[0]:s,e,n)
a?e(r):u=nn(r)?r:Xt},f=r.map(((e,t)=>sn(e,(e=>{s[t]=e,c&=~(1<<t),i&&l()}),(()=>{c|=1<<t}))))
return i=!0,l(),function(){tn(f),u(),i=!1}}))}const Io=Go("")
function Uo(e){const t=e-1
return t*t*t+1}function Fo(e,{delay:t=0,duration:n=400,easing:o=Uo,x:r=0,y:a=0,opacity:i=0}={}){const s=getComputedStyle(e),c=+s.opacity,u="none"===s.transform?"":s.transform,l=c*(1-i),[f,d]=vn(r),[p,h]=vn(a)
return{delay:t,duration:n,easing:o,css:(e,t)=>`\n\t\t\ttransform: ${u} translate(${(1-e)*f}${d}, ${(1-e)*p}${h});\n\t\t\topacity: ${c-l*t}`}}function qo(e,{delay:t=0,duration:n=400,easing:o=Uo,axis:r="y"}={}){const a=getComputedStyle(e),i=+a.opacity,s="y"===r?"height":"width",c=parseFloat(a[s]),u="y"===r?["top","bottom"]:["left","right"],l=u.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),f=parseFloat(a[`padding${l[0]}`]),d=parseFloat(a[`padding${l[1]}`]),p=parseFloat(a[`margin${l[0]}`]),h=parseFloat(a[`margin${l[1]}`]),m=parseFloat(a[`border${l[0]}Width`]),g=parseFloat(a[`border${l[1]}Width`])
return{delay:t,duration:n,easing:o,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*i};${s}: ${e*c}px;padding-${u[0]}: ${e*f}px;padding-${u[1]}: ${e*d}px;margin-${u[0]}: ${e*p}px;margin-${u[1]}: ${e*h}px;border-${u[0]}-width: ${e*m}px;border-${u[1]}-width: ${e*g}px;`}}function Wo(e){let t,n,o,r,a,i,s
return{c(){t=On("div"),n=On("p"),o=Cn(e[0]),Rn(n,"class","svelte-1v0rgfy"),Rn(t,"role","alert"),Rn(t,"class","svelte-1v0rgfy"),Fn(t,"transform",e[2])},m(r,c){En(r,t,c),$n(t,n),$n(n,o),a=!0,i||(s=Mn(t,"click",e[4]),i=!0)},p(e,n){(!a||1&n)&&In(o,e[0]),4&n&&Fn(t,"transform",e[2])},i(e){a||(e&&go((()=>{a&&(r||(r=Oo(t,Fo,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1))})),a=!0)},o(e){e&&(r||(r=Oo(t,Fo,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0)),a=!1},d(e){e&&Tn(t),e&&r&&r.end(),i=!1,s()}}}function Qo(e){let t,n=e[1]&&Wo(e)
return{c(){n&&n.c(),t=Nn()},m(e,o){n&&n.m(e,o),En(e,t,o)},p(e,[o]){e[1]?n?(n.p(e,o),2&o&&Eo(n,1)):(n=Wo(e),n.c(),Eo(n,1),n.m(t.parentNode,t)):n&&(xo(),To(n,1,1,(()=>{n=null})),Lo())},i(e){Eo(n)},o(e){To(n)},d(e){e&&Tn(t),n&&n.d(e)}}}function Jo(e,t,n){let o
un(e,Io,(e=>n(0,o=e)))
let{ms:r=3e3}=t,a=!1,i=0,s=""
const c=(e,t)=>{clearTimeout(i),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
n(2,s=`translate(${t}px, ${e.offsetTop}px)`),n(1,a=!0)}(),t>0&&(i=setTimeout((()=>{var e
n(1,a=!1),o="",e=o,Io.set(e)}),t))):n(1,a=!1)}
ro((()=>clearTimeout(i)))
return e.$$set=e=>{"ms"in e&&n(3,r=e.ms)},e.$$.update=()=>{9&e.$$.dirty&&c(o,r)},[o,a,s,r,()=>{n(1,a=!1)}]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class zo extends Ho{constructor(e){super(),Bo(this,e,Jo,Qo,on,{ms:3})}}let Ko
function Xo(e){e&&(!function(){if(!Ko)Ko=!0,new zo({target:document.body})}(),Io.set(e))}function Vo(e,t){return Array.from(e,t)}function Yo(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function Zo(e,t){return Vo(Yo(e,t))}function er(e){return"string"==typeof e}function tr(e){return e.trim()}function nr(e){const t=h(e)
if(er(t))return tr(t)}function or(e,t){return nr(t).includes(e)}function rr(e,...t){return(...n)=>e(...t,...n)}let ar,ir,sr,cr,ur,lr,fr=0,dr=0,pr=0
function hr(){return fr||(fr=p("pCL")),fr}function mr(){return dr||(dr=p("pCC")),dr}function gr(){const e=Zo("a",hr()).filter(function(e){return rr(or,e)}("message"))
e.length&&async function(){const e=new Audio(Tt("defaultMessageSound"))
try{await e.play()}catch(e){Xo("Message Sound Not Allowed")}}()}function br(e,t,n){s()||ga("fshApp.send","event",e,t,n)}function yr(e){return Object.entries(e)}function vr(e,t,[n,o]){S(o)&&null!==o?e(t[n],o):t[n]=o}function wr(e,t){yr(t).forEach(rr(vr,wr,e))}function kr(e,t){const n=document.createElement(e)
return t&&wr(n,t),n}function _r(e){return kr("div",e)}function jr(e,t){return t?.classList?.contains(e)}function Sr(e,t){return jr(t[0],e)}function $r(e,t,n){const{target:o}=n,r=t.find(rr(e,o))
if(r)return r[1](o)}function xr(e){return rr($r,Sr,e)}function Lr(e){return"boolean"==typeof e}function Er(e,t,n,o){var r
Ot(e,t,n,{once:!0,...(r=o,Lr(r)?{capture:r}:r)})}function Tr(e){ir=e.clientX,sr=e.clientY}function Pr(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(ar,null).transform)
cr=e[0]-ir,ur=e[1]-sr}function Or(e){e.clientX===ir&&e.clientY===sr||(ar.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+cr).toString()}, ${(e.clientY+ur).toString()})`,Tr(e))}function Cr(e){return function(e){const t=performance.now()
t-lr>16&&(Or(e),lr=t)}(e),e.preventDefault(),!1}function Ar(e){return Or(e),function(e,t,n,o){e instanceof EventTarget&&e.removeEventListener(t,n,o)}(document.body,"dragover",Cr),e.preventDefault(),!1}function Nr(e,t){!function(e,t){ar=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),Tr(t),Pr(),lr=0,t.dataTransfer.setData("text/plain",""),Ot(document.body,"dragover",Cr),Er(document.body,"drop",Ar)}function Mr(e,t){e.draggable=!0,Ot(e,"dragstart",rr(Nr,t))}function Br(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Hr(){return j(window.jQuery)}function Rr(e,t,n){Ot(e,"click",t,n)}function Gr(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Dr(e,t){return Vo(Gr(e,t))}function Ir(e,t){t instanceof Element&&(t.innerHTML=String(e))}function Ur(e){let t=p("content")
t?Ir("",t):(t=_r({id:"content",style:{display:"none"}}),Br(document.body,t)),$(t).dialog({width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}),Dr("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(t)}async function Fr(e){(await e).default()}function qr(){Fr(import("./buffLog-6bqDbrBb.js"))}function Wr(){Fr(import("./combatLog-BRemnMFb.js"))}function Qr(){Fr(import("./creatureLog-3CSRbL9l.js"))}function Jr(){Fr(import("./fsboxlog-xEs7q8k8.js"))}function zr(){Fr(import("./guildTracker-2YZD8uOa.js"))}async function Kr(e){(await import("./injectAuctionSearch-n8bBXS8G.js")).default(e)}async function Xr(e){(await import("./findBuffs-HZRd9sOd.js")).injectFindBuffs(e)}async function Vr(e){(await import("./findBuffs-HZRd9sOd.js")).injectFindOther(e)}async function Yr(e){(await import("./injectOnlinePlayers-qKIhO3oz.js")).default(e)}function Zr(){Fr(import("./potReport-wQSXw7-8.js"))}function ea(){Fr(import("./quickExtract-oomzLMTq.js"))}function ta(){Fr(import("./quickLinksManager-FoBWLMOy.js"))}async function na(e){(await import("./quickWear-_FD1hS4a.js")).default(e)}function oa(){Fr(import("./recipeMgr-yXUnlW47.js"))}function ra(){Fr(import("./reliclist-n9EYloJp.js"))}function aa(){Fr(import("./superelite-oNc7bNl7.js"))}function ia(e){return new Promise((t=>{setTimeout(t,e)}))}function sa(e){Ot(window,"beforeunload",(()=>e.abort()))}const ca=900
let ua=0
const la=5
let fa=0
async function da(){fa<la-$.active&&performance.now()-ua>=ca?(fa=la-$.active,ua=performance.now()):await ia(100)}async function pa(e,t=10){await async function(){for(;fa<1;)await da()
fa-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=sa,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return pa(e,t-1)
!function(e,t){if(0!==t.status)throw new P([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function ha(e){return wr(e,{url:J,data:{no_mobile:1}}),pa(e)}async function ma(e){return x(await ha({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function ba(e){return ma({cmd:"export",...e})}function ya(){return ba({inc_tagged:"1",subcmd:"guild_store"})}let va=0
function wa(e){const n=t(/\sguildId: (?<id>\d{1,6}),/,h(e))
n&&(va=Number(n))}function ka(){return va||Zo("script",document.body).forEach(wa),va}function _a(e){return kr("a",e)}function ja(e){e instanceof Element&&e.click()}function Sa(e,t){const n=URL.createObjectURL(e),o=_a({download:t,href:n,style:{display:"none"}})
Br(document.body,o),ja(o),document.body.removeChild(o),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}const $a=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],xa=e=>{return[...$a(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??""])].join(",")
var t}
var La={"Buff Log":qr,"Combat Log":Wr,"Creature Log":Qr,"Recipe Manager":oa,"Quick Links":ta,"Find Buffs":Xr,"Find Other":Vr,"Online Players":Yr,"AH Quick Search":Kr,"Quick Wear":na,"FS Box Log":Jr,"Quick Extract":ea,"GS Export":async function(){if(!ka())return
const e=await ya()
var t
Sa((t=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name\n${(e=>e.items.map(xa).join("\n"))(e)}\n`,new Blob([t],{type:"text/csv"})),"gs_export.csv")},"Merc Hunter":function(){Fr(import("./mercs-Mrxus9uw.js"))},"SE Tracker":aa,"Guild Tracker":zr,"Relic List":ra,"Combat Set Manager":function(){Fr(import("./setmgr-8PrgZL55.js"))},"Pot Report":Zr,"Quest Book":function(){Fr(import("./questbook-ZvEgMkYc.js"))}}
function Ea(e,t){return`<a href="${ae}${e}">${t}</a>`}const Ta='<div class="helperMenuColumn">',Pa=`<div class="helperMenuSectionHeader">Character</div><ul><li><button class="helperDevBtn helperGo" type="button">Buff Log</button></li><li><button class="helperDevBtn helperGo" type="button">Combat Log</button></li><li><button class="helperDevBtn helperGo" type="button">Creature Log</button></li><li><button class="helperDevBtn helperGo" type="button">Recipe Manager</button></li><li><button class="helperDevBtn helperGo" type="button">Quick Links</button></li><li><a href="${le}invmanagernew">Inventory Manager</a></li></ul>`,Oa='<div class="helperMenuSectionHeader">Actions</div><ul><li><span class="fshLink">Find Buffs</span></li><li><span class="fshLink">Find Other</span></li><li><span class="fshLink">Online Players</span></li><li><span class="fshLink">AH Quick Search</span></li></ul>',Ca=`<div class="helperMenuSectionHeader">Guild</div><ul><li><a href="${le}guildinvmgr">Guild Inventory</a></li><li><a href="${Z}">New Guild Log</a></li><li><button class="helperDevBtn helperGo" type="button">Merc Hunter</button></li><li><button class="helperDevBtn helperGo" type="button">Pot Report</button></li><li><button class="helperDevBtn helperGo" type="button">Guild Tracker</button></li></ul>`,Aa='<div class="helperMenuSectionHeader">Extra</div><ul><li><button class="helperDevBtn helperGo" type="button">Quick Extract</button></li><li><span class="fshLink">Quick Wear</span></li><li><button class="helperDevBtn helperGo" type="button">FS Box Log</button></li><li><button class="helperDevBtn helperGo" type="button">SE Tracker</button></li></ul>',Na='<div class="helperMenuSectionHeader">Beta Features</div><ul><li><button class="helperDevBtn helperGo" type="button">Relic List</button><sup class="fshRed">beta</sup></li><li><button class="helperDevBtn helperGo" type="button">GS Export</button><sup class="fshRed">beta</sup></li></ul>',Ma=`<div class="helperMenuSectionHeader">FSH developer quick links</div><ul><li><span class="helperMenuReply" target_player="PointyHair">PM</span> ${Ea(1963510,"PointyHair")}</li><li><span class="helperMenuReply" target_player="Lusterless">PM</span> ${Ea(1674838,"Lusterless")}</li></ul>`,Ba="</div>"
let Ha=0
function Ra(){Ha.classList.remove("helperMenuShow")}function Ga(e){"helperMenu"===e.target.id&&Ha.classList.toggle("helperMenuShow")}const Da=[["fshLink",function(e){const t=h(e),n=La[t]
Hr()&&j(n)&&(br("helperMenu",t),Ur(n),Ra())}],["helperGo",function(e){const t=h(e),n=La[t]
j(n)&&(br("helperMenu",t),n(),Ra())}],["helperMenuReply",function(e){br("helperMenu","helperMenuReply"),window.openQuickMsgDialog(e.getAttribute("target_player")),Ra()}]]
function Ia(e){const t=e.target
Ha=_r({className:"helperMenuDiv",id:"helperMenuDiv",innerHTML:`${Ta}${Pa}${Oa}${ka()?Ca:""}${Aa}${Tt("betaOptIn")?Na:""}${Ma}${Ba}`}),Br(t,Ha),Rr(t,Ga),Rr(Ha,xr(Da))}function Ua(){if(!L(".mainbody"))return
const e=_r({id:"helperMenu",className:"helperMenu",innerHTML:"Helper&nbsp;Menu"})
Tt("keepHelperMenuOnScreen")&&e.classList.add("helperMenuFixed"),Er(e,"mouseenter",Ia),Tt("draggableHelperMenu")&&(e.classList.add("helperMenuMove"),Mr(e)),Br(document.body,e)}function Fa(e){return(new DOMParser).parseFromString(e,"text/html")}function qa(e){return ha({data:e})}async function Wa(e){const t=await qa(e)
if(t)return Fa(t)}function Qa(e){const t=p("info-msg",e)
if(t){const e=t.innerHTML
return e?e.replace(/<br.*/,""):""}}function Ja(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(bt+e,t+n)}const za=[[er,(e,t)=>{Ja(e,"S]",t)}],[function(e){return"number"==typeof e},(e,t)=>{t.toString().indexOf(".")<0&&Ja(e,"N]",t)}],[Lr,(e,t)=>{Ja(e,"B]",t)}]]
function Ka(e,t){const n=za.find((e=>e[0](t)))
n&&n[1](e,t)}let Xa=0
const Va=()=>Xa
function Ya(){Xa=Tt("sendGoldonWorld")}async function Za(){if(!Va())return
br("NewMap","doSendGold")
const e=await Wa({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")})
e&&function(e){const t=Qa(e)
"You successfully sent gold!"!==t&&""!==t||(Ka("currentGoldSentTotal",parseInt(Tt("currentGoldSentTotal"),10)+parseInt(Tt("goldAmount"),10)),GameData.fetch(ze))}(e)}function ei(e){window.location=e}function ti(e){Tt("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function ni(e){br("keyHandler",e)}function oi(e){return e?.toLowerCase?.()}function ri(e,t){return oi(e)<oi(t)?-1:oi(e)>oi(t)?1:0}async function ai(e,t){return x(await pa({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function ii(e){return ai(e,{method:"GET"})}function si(e){return ii({cmd:"profile",...e})}async function ci(){const e=await si({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>ri(e.name,t.name)))}:e}function ui(e,t,...n){return e(...n)}function li(){return ui(ci)}const fi=[e=>e?.s,(e,t)=>e.r?.length>t]
async function di(e){const t=await li()
if(((e,t)=>fi.every((n=>n(t,e))))(e,t)){ni("changeCombatSet")
const n=t.r[e].id
ti("2"),ei(`${re+X}managecombatset&submit=Use&combatSetId=${n}`)}}function pi(e,t){p("worldPage")||(ni(e),ei(t))}function hi(){y.enableMaxGroupSizeToJoin?ei(we):ei(ve)}function mi(){ni("logPage"),ti("2"),ei(ne)}function gi(e){const t=L(`#pCC input[value="${e}"]`)
t&&(ni("movePage"),ja(t))}const bi=[["!",di,0],["@",di,1],['"',di,1],["#",di,2],["£",di,2],["$",di,3],["%",di,4],["^",di,5],["&",di,6],["*",di,7],["(",di,8],["0",function(){pi("toWorld",ke)}],["<",gi,"<"],[">",gi,">"],["G",function(){ni("createGroup"),ti("4"),ei(`${ge}create`)}],["L",mi],["b",function(){ni("backpack"),ti("2"),ei(ie)}],["g",function(){ni("gotoGuild"),ti("4"),ei(`${pe}manage`)}],["j",function(){ni("joinAllGroup"),ti("4"),hi()}],["l",mi],["p",function(){ni("profile"),ti("2"),ei(re)}],["r",function(){pi("doRepair",`${Se+X}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in y&&!y.dialogIsClosed()||(ni("insertQuickWear"),Ur(na))}],["y",Za]]
const yi=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function vi(e){var t;(t=e,yi.some((e=>e(t))))||function(e){const t=bi.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function wi(){Ot(document,"keyup",vi)}function ki(e,t){return nr(t)===e}function _i(e){return rr(ki,e)}function ji(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function Si(e,t){return Vo(ji(e,t))}function $i(e){Rr(e,(()=>{br("chrome","Game Help link")})),Ir(`<a href="${K}settings">Game Help</a>`,e)}function xi(){Si("#pCR h3").filter(_i("Game Help")).forEach($i)}function Li(e){y[e]=Tt(e)}function Ei(e,t){if(t instanceof Element)return t.closest(e)}const Ti=[e=>e,e=>e.getAttribute("href")===he,e=>!e.classList.contains("sendLink")],Pi=e=>Ti.every((t=>t(e)))
function Oi(e){const t=Ei("a",e.target)
Pi(t)&&(br("useNewGuildLog","Alter Href"),t.href=Z)}function Ci(e){e.forEach((e=>Jt(3,e)))}function Ai(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function Ni(){return!Hr()}var Mi=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function Bi(e){return function(e){return-1!==e&&0===L(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(br("accordion","collapse"),-1):e}const Hi=(e,t,n)=>$(e).data(`${n}${t}`)
function Ri(e,t,n){return new Promise((o=>{const r=Hi(e,t,n)
r?o(r):function(e,t,n,o){$(e).on(`${oi(t)}create`,(()=>{o(Hi(e,t,n))}))}(e,t,n,o)}))}const Gi=[[e=>!S(e),()=>Pt("$('#nav').data('hcsNav') is not an object",!1)],[e=>!("heights"in e),()=>Pt("$('#nav').data('hcsNav').heights does not exist",!1)]]
async function Di(){const e=p("nav"),t=await Ri(e,"Nav","hcs")
return function(e){const t=Gi.find((([t])=>t(e)))
return!t||(t[1](),!1)}(t)?{theNav:e,myNav:t}:{}}function Ii(){!function(){const e=Tt("lastActiveQuestPage")
Tt("storeLastQuestPage")&&e.length>0&&(p("nav-character-questbook").href=e)}(),function(){const e=Tt("lastScavPage")
Tt("storeLastScavPage")&&e.length>0&&(p("nav-actions-artisanship-scavenging").href=e)}()}async function Ui(){const{theNav:e,myNav:t}=await Di()
e&&t&&(Ii(),async function(e,t){const n=Mi.map((e=>[e,Tt(e)]))
n.some((([,e])=>e))&&(await import("./injectItems-j_n49RFP.js")).default(e,t,Ai(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,Bi(n))}}(t))}function Fi(e,t){t instanceof Node&&(t.textContent=String(e))}let qi
function Wi(){return qi||(qi=p("quickMessageDialog")),qi}let Qi,Ji=0
function zi(e){(function(){if(!Ji){const e=Gr("validateTips",Wi())
1===e.length&&([Ji]=e)}return Ji})()&&Fi(Nt(e,""),Ji)}function Ki(){return Qi||(Qi=p("quickMsgDialog_msg"),Qi.maxLength=512),Qi}let Xi,Vi=null,Yi=0,Zi=0
function es(e){"Enter"!==e.key||e.shiftKey||(br("messaging","sendOnEnter"),e.preventDefault(),function(){if(!Zi){const e=$(Wi()).dialog("option","buttons")
Zi=e["Send Message"]}return Zi}()())}function ts(){C(Vi)&&(Vi=Tt("enterForSendMessage")),Vi&&!Yi&&(Ot(Ki(),"keypress",es),Yi=!0)}function ns(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function os(e,t){ns(e,"beforeend",t)}function rs(t,n){if("string"==typeof n){const t=e(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,n)
if(t)return new Date(Date.UTC(Number(t[1]),Number(t[2])-1,Number(t[3]),Number(t[4]),Number(t[5]),Number(t[6])))}return n}function as(e){const t=Tt(e)
if(t)return x(t,rs)}function is(e,t){Ka(e,Ct(t))}let ss=0,cs=0,us=0
function ls(e,t,n){const o=cs.insertRow(e)
let r=o.insertCell(-1)
os(r,t),r=o.insertCell(-1),os(r,n)}function fs(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function ds(e,t){ls(e,fs("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const ps=[["del-button",function(e){br("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
cs.deleteRow(t),ss.splice(t-2,1),is("quickMsg",ss)}],["add-button",function(e){br("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){ds(e.parentNode.parentNode.rowIndex,n),t.value="",ss.push(n),is("quickMsg",ss)}}],["add-template",function(e){br("messaging","insertTemplate"),Ki().value+=`${h(e).replace(/\{playername\}/g,Xi)}`}]]
function hs(e){ds(-1,e)}function ms(){Tt("enableMessageTemplates")&&!us&&(Rr((cs||(cs=Wi().lastElementChild),cs),xr(ps)),(ss||(ss=as("quickMsg")),ss).forEach(hs),ls(-1,fs("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),us=!0)}function gs(e,t,n){const o=Wi()
jr("ui-dialog-content",o)&&(!function(e){Xi=e,Fi(e,p("quickMsgDialog_targetUsername"))}(e),function(e){const t=Ki()
t.value=Nt(e,""),t.disabled=!1}(t),zi(n),ms(),ts(),$(o).dialog("open"))}function bs(e){const t=p(e)
t&&(t.classList.add("pCR"),Br(hr(),t))}function ys(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function vs(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?ys(t,e.firstChild):Br(e,t)}(e,t)}function ws(e){const t=p(e)
t&&vs((pr||(pr=p("pCR")),pr),t)}const ks=[function(){Tt("moveGuildList")&&ws("minibox-guild")},function(){Tt("moveOnlineAlliesList")&&ws("minibox-allies")},function(){Tt("moveXmasBox")&&bs("minibox-xmas")},function(){Tt("moveDailyQuest")&&bs("minibox-daily-quest")},function(){Tt("moveFSBox")&&bs("minibox-fsbox")},function(){(y.enableAllyOnlineList||y.enableEnemyOnlineList)&&Fr(import("./allyEnemy-AinvrDbd.js"))},function(){(y.enableWantedList||y.enableActiveBountyList)&&Fr(import("./activeWantedBounties-QXrveV05.js"))},function(){y.enableGuildInfoWidgets&&Fr(import("./addGuildInfoWidgets-NDh5Ce0Y.js"))},function(){y.enableOnlineAlliesWidgets&&Fr(import("./addOnlineAlliesWidgets-AzZvsv-H.js"))},function(){y.enableTempleAlert&&Fr(import("./injectTempleAlert-cRQTiKJ9.js"))},function(){y.enableUpgradeAlert&&Fr(import("./injectUpgradeAlert-ce_1Vj2F.js"))},function(){y.enableComposingAlert&&Fr(import("./injectComposeAlert-SP20wIeQ.js"))},function(){hr()&&!Ni()&&Ui()},function(){Ni()||(window.openQuickMsgDialog=gs)},function(){Tt("statBarLinks")&&Fr(import("./statBar-R_I7Ju1P.js"))},function(){Tt("staminaCalculator")&&Fr(import("./injectStaminaCalculator-mR0PJ-dN.js"))},function(){Tt("levelUpCalculator")&&Fr(import("./injectLevelupCalculator-OKpyHoOE.js"))},function(){Tt("fsboxlog")&&Fr(import("./fsbox-ensI7s9d.js"))},function(){Tt("resizeQuickBuff")&&Fr(import("./interceptQuickBuff-r6R58C2I.js"))},function(){Tt("joinAllLink")&&Fr(import("./injectJoinAllLink-tzU-_ZMj.js"))},function(){Tt("addServerNode")&&Fr(import("./injectServerNode-RatpR81z.js"))},function(){Tt("addScoutTowerLink")&&Fr(import("./scoutTowerLink-51fPMn0u.js"))},function(){Hr()&&Tt(nt)&&Fr(import("./guildActivity-Kc0JFtwf.js"))},async function(){if(Hr()&&y.enableSeTracker){(await import("./trackerPrefStore-6bdYUAu6.js").then((function(e){return e.a}))).default.set(y.enableSeTracker)}}]
const _s=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function js(){y.huntingMode||(_s.forEach(Li),y.allyEnemyOnlineRefreshTime=1e3*Tt("allyEnemyOnlineRefreshTime"),y.useNewGuildLog&&(Ot(document.body,"click",Oi),Ot(document.body,"auxclick",Oi)),Ci(ks))}function Ss(e){const t=x(e)
t?.["new-ui"]&&(Tt("gameHelpLink")&&Jt(3,xi),y.huntingMode=Tt("huntingMode"),Jt(3,wi),js(),Tt("hideHelperMenu")||Jt(3,Ua))}function $s(){const e=function(){const e=p("html")
if(e?.dataset)return e.dataset.hcs}()
e&&Ss(e)}function xs(){Hr()&&p("worldPage")&&window.GameData&&Fr(import("./newMap-GYAoCZy3.js"))}function Ls(e){$(e).qtip("hide")}function Es(e){Ka("needToPray",e),Ka("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}let Ts=0
const Ps='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',Os=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${K}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
async function Cs(e){const t=e.target.getAttribute("praytype")
t&&(br("notification","prayToGods"),Ls(e.target),await qa({cmd:"temple",subcmd:"pray",type:t}),Ts.outerHTML=Ps,Es(!1))}function As(){os(p("notifications"),Os),Ts=p("helperPrayToGods"),Er(Ts,"click",Cs)}async function Ns(){if(!y.enableTempleAlert)return
const e="temple"===y.cmd?document:await Wa({cmd:"temple"})
if(!e)return
const t=L("#pCC",e)
if(!t)return
const n="You are currently praying at the temple."!==nr(t)
n&&As(),Es(n)}function Ms(){Fr(import("./bioWidgets-vNNcf70_.js"))}function Bs(){Fr(import("./injectGuild-ZG4MDCTG.js"))}const Hs=()=>{Fr(import("./guildAdvisor-lfuutzq1.js"))}
const Rs=()=>{Fr(import("./groups-WrSjyJgp.js"))}
const Gs=()=>{Fr(import("./addRemoveTags-0n5JJhut.js"))}
const Ds=()=>{Fr(import("./guildChat-EojOQ1FY.js"))}
function Is(){Fr(import("./viewRecipe-cJPb0L8p.js"))}function Us(){Fr(import("./ufsgAllowBack-67FDaqm4.js"))}function Fs(){Fr(import("./profile-6qLlbhRu.js").then((function(e){return e.p})))}function qs(){Fr(import("./news-HyEoyzaY.js"))}function Ws(){Fr(import("./viewArchive-dEcabkOD.js"))}const Qs=()=>{Fr(import("./inventory-ZGbWjMbx.js"))},Js=()=>{Fr(import("./bazaar-oV8rN-VK.js"))}
function zs(){Fr(import("./injectQuestBookFull-r1uhBs_Z.js"))}const Ks=()=>{Fr(import("./scavenging-EHrn8otl.js"))}
const Xs=()=>{Fr(import("./toprated-NE-w8Ktx.js"))}
const Vs=()=>{Fr(import("./trade-3GF6z3CR.js"))}
var Ys={creatures:{"-":{"-":Us}},items:{"-":{"-":Us},view:{"-":()=>{Fr(import("./itemsView-OjBdI9BX.js"))}}},masterrealms:{"-":{"-":Us}},quests:{"-":{"-":Us},view:{"-":()=>{Fr(import("./showAllQuestSteps-_2YiUVIx.js"))}}},realms:{"-":{"-":Us}},relics:{"-":{"-":Us}},shops:{"-":{"-":Us}},"-":{news:{"-":qs},viewupdatearchive:{"-":Ws},viewarchive:{"-":Ws},"-":{"-":()=>{Fr(import("./unknownPage-ZZx7Xkbv.js"))}}},arena:{"-":{"-":()=>{Fr(import("./arena-tB0FwEXg.js").then((function(e){return e.c})))}},dojoin:{"-":()=>{Fr(import("./arenaDoJoin-LvaUU8Wr.js"))}},join:{"-":()=>{Fr(import("./arenaJoin-C3WUiGqR.js"))}},completed:{"-":()=>{Fr(import("./completedArenas-2npFHpSx.js"))}},pickmove:{"-":()=>{Fr(import("./storeMoves-u7V9y69D.js"))}},setup:{"-":()=>{Fr(import("./setupMoves-DcW4tV7h.js"))}}},auctionhouse:{"-":{"-":()=>{Fr(import("./injectAuctionHouse-E93hGKnZ.js"))}},quickcreate:{"-":()=>{Fr(import("./quickCreate-VvbzfMY4.js"))}}},bank:{"-":{"-":()=>{Fr(import("./injectBank-Cz_Gj6WC.js"))}}},blacksmith:{repairall:{"-":function(){Kt("fromworld")&&xs()}}},buffmarket:{"-":{"-":()=>{Fr(import("./injectBuffmarket--YFsXmne.js"))}}},combat:{attackplayer:{"-":Fs}},composing:{"-":{"-":()=>{Fr(import("./composing-QJNPrA28.js"))}},breakdown:{"-":()=>{Fr(import("./breakdown-dsYSaUT9.js"))}},create:{"-":()=>{Fr(import("./composingCreate-JzssS3Le.js"))}}},findplayer:{"-":{"-":()=>{Fr(import("./findplayer-WF8KytEU.js"))}}},guild:{inventory:{report:()=>{Fr(import("./guildReport-M8HN0yRr.js"))},addtags:Gs,removetags:Gs,storeitems:()=>{Fr(import("./storeitems-Qn-FtexP.js"))}},chat:{"-":Ds},dochat:{"-":Ds},log:{"-":()=>{Fr(import("./guildLog--0SxxTA6.js"))}},groups:{viewstats:()=>{Fr(import("./injectGroupStats-zrAjezFl.js"))},joinallgroupsundersize:Rs,joinall:Rs,"-":Rs},manage:{"-":Bs},advisor:{"-":Hs,weekly:Hs},history:{"-":Ms},view:{"-":Bs},scouttower:{"-":()=>{Fr(import("./injectScouttower-f0z2CeiY.js"))}},mailbox:{"-":()=>{Fr(import("./guildMailbox-HMy3YuE-.js"))}},ranks:{"-":()=>{Fr(import("./rank-W7SvPcoQ.js"))}},conflicts:{rpupgrades:()=>{Fr(import("./injectRPUpgrades-rs5NjmGI.js"))}},bank:{"-":()=>{Fr(import("./injectGuildBank-x7Gstngr.js"))}},hall:{"-":()=>{Fr(import("./hall-yO7Br2kj.js"))},post:Ms},"-":{"-":Bs}},hellforge:{"-":{"-":()=>{Fr(import("./hellforge-bLfKpaog.js"))}}},inventing:{"-":{"-":function(){Fr(import("./inventing-ECA9wbPD.js"))}},doinvent:{"-":Is},viewrecipe:{"-":Is}},log:{"-":{"-":()=>{Fr(import("./playerLog-aOIkwYf3.js"))}}},marketplace:{createreq:{"-":()=>{Fr(import("./marketplace-ThT-9myl.js"))}}},news:{fsbox:{"-":()=>{Fr(import("./newsFsbox--xryOqFD.js"))}},"-":{"-":qs},shoutbox:{"-":()=>{Fr(import("./newsShoutbox--K-XUSkE.js"))}},viewupdatearchive:{"-":Ws},viewarchive:{"-":Ws}},notepad:{showlogs:{"-":Wr},invmanagernew:{"-":Qs},guildinvmgr:{"-":Qs},recipemanager:{"-":oa},auctionsearch:{"-":Kr},onlineplayers:{"-":Yr},quicklinkmanager:{"-":ta},monsterlog:{"-":Qr},quickextract:{"-":ea},quickwear:{"-":na},fsboxcontent:{"-":Jr},bufflogcontent:{"-":qr},newguildlog:{"-":()=>{Fr(import("./newGuildLog-EJB4RAFk.js"))}},findbuffs:{"-":Xr},findother:{"-":Vr},savesettings:{"-":()=>{Fr(import("./load-5n7RQ34Y.js"))}},reliclist:{"-":ra},whosgotwhat:{"-":()=>{}}},points:{"-":{"-":()=>{Fr(import("./points-DXMsHL4Q.js"))}}},potionbazaar:{"-":{"-":Js},buyitem:{"-":Js}},privatemessage:{"-":{"-":()=>{Fr(import("./privateMsg-vdUkEETZ.js"))}}},profile:{"-":{"-":Fs},managecombatset:{"-":Fs},report:{"-":Fs},equipitem:{"-":Fs},useitem:{"-":Fs},changebio:{"-":Ms},dropitems:{"-":function(){Fr(import("./injectProfileDropItems-r5wMoF49.js"))}}},pvpladder:{"-":{"-":()=>{Fr(import("./ladder-gJOCHV0i.js"))}}},questbook:{"-":{"-":zs},atoz:{"-":zs},viewquest:{"-":()=>{Fr(import("./injectQuestTracker-SYLu681M.js"))}}},quickbuff:{"-":{"-":()=>{Fr(import("./quickBuff-QM3cafNT.js"))}}},scavenging:{"-":{"-":Ks},process:{"-":Ks}},settings:{"-":{"-":()=>{Fr(import("./injectSettings-iwLyX1aq.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{Fr(import("./superelite-9IdV6SUN.js"))}}},tempinv:{"-":{"-":()=>{Fr(import("./mailbox-xvTZe90q.js"))}}},temple:{"-":{"-":Ns}},titan:{"-":{"-":()=>{Fr(import("./injectTitan-Qv_JaV26.js"))}}},toprated:{xp:{"-":Xs},monthlyxp:{"-":Xs},gold:{"-":Xs},killstreak:{"-":Xs},bounties:{"-":Xs},risingstars:{"-":Xs},arena:{"-":Xs},superelites:{"-":Xs},smasher:{"-":Xs},globalquest:{"-":()=>{Fr(import("./globalQuest-qRZGihln.js"))}}},trade:{"-":{"-":Vs},sendgold:{"-":Vs},createsecure:{"-":Vs},docreatesecure:{"-":Vs}},world:{"-":{"-":xs}}}
function Zs(e){return kr("li",e)}function ec(e){return kr("ul",e)}const tc=()=>_r({className:"fshQuickLinks",style:{left:`${Tt("quickLinksLeftPx")}px`,top:`${Tt("quickLinksTopPx")}px`}}),nc=e=>"newWindow"in e&&e.url&&e.name
function oc(e,t){const n=Br(t,ec())
e.filter(nc).forEach((e=>{Br(Br(n,Zs()),function(e){const t=_a({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return Rr(t,(()=>br("chrome","quick link",e.name))),t}(e))}))}function rc(){if(!L(".mainbody"))return
const e=as("quickLinks")||[]
e.length&&function(e){const t=tc()
t.classList.toggle("fshFixed",Tt("keepHelperMenuOnScreen")),Tt("draggableQuickLinks")&&(t.classList.add("fshMove"),Mr(t)),oc(e,t),Br(document.body,t)}(e)}let ac=0,ic=0,sc=0,cc="",uc=0,lc=0
function fc(e){return Kt(e)||"-"}function dc(e){const t=L(e)
return t?.value||"-"}function pc(){if(S(Ys[ac])&&S(Ys[ac][ic])&&j(Ys[ac][ic][sc]))return Ys[ac][ic][sc]}function hc(){""!==document.location.search?(ac=fc("cmd"),ic=fc("subcmd"),sc=fc("subcmd2"),["points","privatemessage"].includes(ac)&&(cc=`/${fc("type")}`)):(ac=dc('input[name="cmd"]'),ic=dc('input[name="subcmd"]'),sc=dc('input[name="subcmd2"]')),y.cmd=ac,y.subcmd=ic,y.subcmd2=sc,lc=`${ac}/${ic}/${sc}${cc}`,uc=pc()}function mc(){j(uc)&&(c(lc),k("JS Perf",lc),uc(),_("JS Perf",lc))}async function gc(e){k("JS Perf","FSH.runCore"),hc(),await e,$s(),Jt(3,mc),Tt("playNewMessageSound")&&Jt(3,gr),y.huntingMode||Jt(3,rc),_("JS Perf","FSH.runCore")}const bc=[()=>!("containerName"in CSSContainerRule.prototype),()=>!("toSpliced"in Array.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,a]
function yc(e,t){if(k("JS Perf","FSH.dispatch"),bc.some((e=>e())))return
const n=E("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
!function(e,t){y.gmInfo=x(decodeURIComponent(t)),y.gmInfo?y.fshVer=e:y.fshVer=`${e}_native`,y.calfVer="114"}(e,t),v(),gc(n),_("JS Perf","FSH.dispatch")}export{ui as $,G as A,ec as B,yr as C,jr as D,qa as E,Fa as F,St as G,$t as H,ji as I,Bo as J,on as K,On as L,An as M,Rn as N,go as O,En as P,$n as Q,qn as R,Ho as S,Un as T,Mn as U,Hn as V,Xt as W,Tn as X,tn as Y,as as Z,Cn as _,ii as a,ye as a$,In as a0,Wn as a1,is as a2,h as a3,Fi as a4,Kt as a5,Xo as a6,Wr as a7,Qr as a8,Ka as a9,Me as aA,De as aB,Be as aC,Ls as aD,ke as aE,X as aF,Ce as aG,N as aH,qe as aI,pa as aJ,x as aK,Jt as aL,Gr as aM,dt as aN,ft as aO,ht as aP,pt as aQ,mt as aR,Vo as aS,tr as aT,i as aU,j as aV,Ae as aW,Fn as aX,Pn as aY,je as aZ,an as a_,Ri as aa,y as ab,Ct as ac,Tt as ad,Dr as ae,me as af,Lr as ag,Nn as ah,ot as ai,A as aj,K as ak,nr as al,oi as am,Sr as an,se as ao,ce as ap,zt as aq,Le as ar,oe as as,kt as at,Yo as au,ja as av,aa as aw,b as ax,Xe as ay,Ne as az,Ot as b,e as b$,mo as b0,H as b1,Ue as b2,Qe as b3,Eo as b4,xo as b5,Lo as b6,To as b7,ao as b8,Ao as b9,si as bA,bn as bB,vt as bC,li as bD,S as bE,xt as bF,at as bG,ka as bH,k as bI,_ as bJ,ei as bK,ue as bL,wt as bM,vs as bN,Pt as bO,xe as bP,ha as bQ,Ze as bR,_i as bS,et as bT,R as bU,Hr as bV,kr as bW,pe as bX,tt as bY,lt as bZ,J as b_,No as ba,Mo as bb,B as bc,$e as bd,Do as be,Go as bf,W as bg,Nt as bh,jt as bi,ae as bj,ri as bk,un as bl,ro as bm,We as bn,Ge as bo,Ke as bp,Ve as bq,Ye as br,Ya as bs,Va as bt,Za as bu,He as bv,Re as bw,Je as bx,Fe as by,Qa as bz,rr as c,Mr as c$,st as c0,$r as c1,ln as c2,Qn as c3,pn as c4,hn as c5,dn as c6,io as c7,co as c8,Co as c9,O as cA,ya as cB,M as cC,yt as cD,he as cE,er as cF,bt as cG,Dn as cH,nn as cI,z as cJ,D as cK,F as cL,q as cM,nt as cN,zr as cO,be as cP,Q as cQ,xr as cR,U as cS,Zr as cT,Bs as cU,Bn as cV,Oo as cW,qo as cX,Ee as cY,Te as cZ,no as c_,bo as ca,ai as cb,Yt as cc,to as cd,eo as ce,ko as cf,ns as cg,At as ch,ba as ci,de as cj,Zs as ck,E as cl,it as cm,Fr as cn,yn as co,Ea as cp,ki as cq,te as cr,C as cs,gt as ct,I as cu,ct as cv,c as cw,qs as cx,zs as cy,Is as cz,Ir as d,re as d0,zn as d1,oo as d2,mn as d3,fe as d4,Oe as d5,Ci as d6,Sa as d7,Gn as d8,ia as d9,na as dA,yc as dB,Ur as da,oa as db,le as dc,qr as dd,ta as de,Kr as df,Yr as dg,Vr as dh,Xr as di,Z as dj,hr as dk,Pe as dl,Ns as dm,As as dn,Jr as dp,ve as dq,we as dr,ut as ds,Se as dt,ie as du,hi as dv,ee as dw,gn as dx,ea as dy,cn as dz,Wa as e,Ai as f,p as g,Ei as h,Br as i,rt as j,Si as k,_t as l,_r as m,_a as n,Rr as o,mr as p,L as q,t as r,br as s,_e as t,ma as u,os as v,Ni as w,Zo as x,ys as y,Er as z}
//# sourceMappingURL=calfSystem-rn9Rc_nF.js.map
