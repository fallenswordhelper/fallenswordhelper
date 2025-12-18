function e(e){return new Promise(t=>{const n=document.createElement("script")
n.async=!0,n.onload=t,n.src=e,document.body.appendChild(n)})}function t(e,t){return t?t.getElementById(e):document.getElementById(e)}function n(e){if(e instanceof Node)return e.textContent}let r=null
const i=()=>function(){const e=t("statbar-character")
return e&&n(e)}()||"string"==typeof window.self&&window.self
function s(){if(!r){const e=i()
e&&(r=e)}return r}function o(){!function(){e("https://www.googletagmanager.com/gtag/js?id=G-14Y99WX8XL"),window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},gtag("js",new Date)
const t=s()
t&&gtag("config","G-14Y99WX8XL",{user_id:t})}()}function a(e,t){return e.exec(t)}function l(e,t){const n=a(e,t)
if(n)return n[1]}const c=["www.keeprefreshing.com"]
let u=!1,d=!1
function f(e,t,n,r,i,s,o){try{var a=e[s](o),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(r,i)}function h(e){return function(){var t=this,n=arguments
return new Promise(function(r,i){var s=e.apply(t,n)
function o(e){f(s,r,i,o,a,"next",e)}function a(e){f(s,r,i,o,a,"throw",e)}o(void 0)})}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(null,arguments)}function g(e,t){if(null==e)return{}
var n={}
for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue
n[r]=e[r]}return n}var v="undefined"!=typeof window?window:void 0,_="undefined"!=typeof globalThis?globalThis:v
"undefined"==typeof self&&(_.self=_),"undefined"==typeof File&&(_.File=function(){})
var m=Array.prototype,b=m.forEach,y=m.indexOf,w=null==_?void 0:_.navigator,k=null==_?void 0:_.document,x=null==_?void 0:_.location,S=null==_?void 0:_.fetch,E=null!=_&&_.XMLHttpRequest&&"withCredentials"in new _.XMLHttpRequest?_.XMLHttpRequest:void 0,C=null==_?void 0:_.AbortController,P=null==w?void 0:w.userAgent,L=null!=v?v:{},T={DEBUG:!1,LIB_VERSION:"1.309.1"},I=["amazonbot","amazonproductbot","app.hypefactors.com","applebot","archive.org_bot","awariobot","backlinksextendedbot","baiduspider","bingbot","bingpreview","chrome-lighthouse","dataforseobot","deepscan","duckduckbot","facebookexternal","facebookcatalog","http://yandex.com/bots","hubspot","ia_archiver","leikibot","linkedinbot","meta-externalagent","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","sebot-wa","sitebulb","slackbot","slurp","trendictionbot","turnitin","twitterbot","vercel-screenshot","vercelbot","yahoo! slurp","yandexbot","zoombot","bot.htm","bot.php","(bot;","bot/","crawler","ahrefsbot","ahrefssiteaudit","semrushbot","siteauditbot","splitsignalbot","gptbot","oai-searchbot","chatgpt-user","perplexitybot","better uptime bot","sentryuptimebot","uptimerobot","headlesschrome","cypress","google-hoteladsverifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleother","google-cloudvertexbot","googleweblight","mediapartners-google","storebot-google","google-inspectiontool","bytespider"],O=function(e,t){if(void 0===t&&(t=[]),!e)return!1
var n=e.toLowerCase()
return I.concat(t).some(e=>{var t=e.toLowerCase()
return-1!==n.indexOf(t)})},A=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"]
function M(e,t){return-1!==e.indexOf(t)}var R=function(e){return e.trim()},j=function(e){return e.replace(/^\$/,"")},F=Array.isArray,N=Object.prototype,D=N.hasOwnProperty,q=N.toString,B=F||function(e){return"[object Array]"===q.call(e)},H=e=>"function"==typeof e,U=e=>e===Object(e)&&!B(e),G=e=>{if(U(e)){for(var t in e)if(D.call(e,t))return!1
return!0}return!1},z=e=>void 0===e,W=e=>"[object String]"==q.call(e),V=e=>W(e)&&0===e.trim().length,Q=e=>null===e,J=e=>z(e)||Q(e),K=e=>"[object Number]"==q.call(e),Y=e=>"[object Boolean]"===q.call(e),X=e=>M(A,e)
function Z(e){return null===e||"object"!=typeof e}function ee(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}function te(e){return!z(Event)&&function(e,t){try{return e instanceof t}catch(e){return!1}}(e,Event)}var ne=[!0,"true",1,"1","yes"],re=e=>M(ne,e),ie=[!1,"false",0,"0","no"]
function se(e,t,n,r,i){return t>n&&(r.warn("min cannot be greater than max."),t=n),K(e)?e>n?(r.warn(" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(r.warn(" cannot be less than min: "+t+". Using min value instead."),t):e:(r.warn(" must be a number. using max or fallback. max: "+n+", fallback: "+i),se(i||n,t,n,r))}class oe{constructor(e){this._buckets={},this._onBucketRateLimited=e._onBucketRateLimited,this._bucketSize=se(e.bucketSize,0,100,e._logger),this._refillRate=se(e.refillRate,0,this._bucketSize,e._logger),this._refillInterval=se(e.refillInterval,0,864e5,e._logger)}_applyRefill(e,t){var n=t-e.lastAccess,r=Math.floor(n/this._refillInterval)
if(r>0){var i=r*this._refillRate
e.tokens=Math.min(e.tokens+i,this._bucketSize),e.lastAccess=e.lastAccess+r*this._refillInterval}}consumeRateLimit(e){var t,n=Date.now(),r=String(e),i=this._buckets[r]
return i?this._applyRefill(i,n):(i={tokens:this._bucketSize,lastAccess:n},this._buckets[r]=i),0===i.tokens||(i.tokens--,0===i.tokens&&(null==(t=this._onBucketRateLimited)||t.call(this,e)),0===i.tokens)}stop(){this._buckets={}}}var ae,le,ce,ue="Mobile",de="iOS",fe="Android",he="Tablet",pe=fe+" "+he,ge="iPad",ve="Apple",_e=ve+" Watch",me="Safari",be="BlackBerry",ye="Samsung",we=ye+"Browser",ke=ye+" Internet",xe="Chrome",Se=xe+" OS",Ee=xe+" "+de,Ce="Internet Explorer",Pe=Ce+" "+ue,Le="Opera",Te=Le+" Mini",$e="Edge",Ie="Microsoft "+$e,Oe="Firefox",Ae=Oe+" "+de,Me="Nintendo",Re="PlayStation",je="Xbox",Fe=fe+" "+ue,Ne=ue+" "+me,De="Windows",qe=De+" Phone",Be="Nokia",He="Ouya",Ue="Generic",Ge=Ue+" "+ue.toLowerCase(),ze=Ue+" "+he.toLowerCase(),We="Konqueror",Ve="(\\d+(\\.\\d+)?)",Qe=new RegExp("Version/"+Ve),Je=new RegExp(je,"i"),Ke=new RegExp(Re+" \\w+","i"),Ye=new RegExp(Me+" \\w+","i"),Xe=new RegExp(be+"|PlayBook|BB10","i"),Ze={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},et=function(e,t){return t=t||"",M(e," OPR/")&&M(e,"Mini")?Te:M(e," OPR/")?Le:Xe.test(e)?be:M(e,"IE"+ue)||M(e,"WPDesktop")?Pe:M(e,we)?ke:M(e,$e)||M(e,"Edg/")?Ie:M(e,"FBIOS")?"Facebook "+ue:M(e,"UCWEB")||M(e,"UCBrowser")?"UC Browser":M(e,"CriOS")?Ee:M(e,"CrMo")||M(e,xe)?xe:M(e,fe)&&M(e,me)?Fe:M(e,"FxiOS")?Ae:M(e.toLowerCase(),We.toLowerCase())?We:((e,t)=>t&&M(t,ve)||function(e){return M(e,me)&&!M(e,xe)&&!M(e,fe)}(e))(e,t)?M(e,ue)?Ne:me:M(e,Oe)?Oe:M(e,"MSIE")||M(e,"Trident/")?Ce:M(e,"Gecko")?Oe:""},tt={[Pe]:[new RegExp("rv:"+Ve)],[Ie]:[new RegExp($e+"?\\/"+Ve)],[xe]:[new RegExp("("+xe+"|CrMo)\\/"+Ve)],[Ee]:[new RegExp("CriOS\\/"+Ve)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+Ve)],[me]:[Qe],[Ne]:[Qe],[Le]:[new RegExp("(Opera|OPR)\\/"+Ve)],[Oe]:[new RegExp(Oe+"\\/"+Ve)],[Ae]:[new RegExp("FxiOS\\/"+Ve)],[We]:[new RegExp("Konqueror[:/]?"+Ve,"i")],[be]:[new RegExp(be+" "+Ve),Qe],[Fe]:[new RegExp("android\\s"+Ve,"i")],[ke]:[new RegExp(we+"\\/"+Ve)],[Ce]:[new RegExp("(rv:|MSIE )"+Ve)],Mozilla:[new RegExp("rv:"+Ve)]},nt=function(e,t){var n=et(e,t),r=tt[n]
if(z(r))return null
for(var i=0;i<r.length;i++){var s=r[i],o=e.match(s)
if(o)return parseFloat(o[o.length-2])}return null},rt=[[new RegExp(je+"; "+je+" (.*?)[);]","i"),e=>[je,e&&e[1]||""]],[new RegExp(Me,"i"),[Me,""]],[new RegExp(Re,"i"),[Re,""]],[Xe,[be,""]],[new RegExp(De,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[qe,""]
if(new RegExp(ue).test(t)&&!/IEMobile\b/.test(t))return[De+" "+ue,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var r=n[1],i=Ze[r]||""
return/arm/i.test(t)&&(i="RT"),[De,i]}return[De,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[de,t.join(".")]}return[de,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t=""
return e&&e.length>=3&&(t=z(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+fe+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+fe+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[fe,t.join(".")]}return[fe,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[Se,""]],[/Linux|debian/i,["Linux",""]]],it=function(e){return Ye.test(e)?Me:Ke.test(e)?Re:Je.test(e)?je:new RegExp(He,"i").test(e)?He:new RegExp("("+qe+"|WPDesktop)","i").test(e)?qe:/iPad/.test(e)?ge:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?_e:Xe.test(e)?be:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(Be,"i").test(e)?Be:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?new RegExp(ue).test(e)&&!/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)||/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?fe:pe:new RegExp("(pda|"+ue+")","i").test(e)?Ge:new RegExp(he,"i").test(e)&&!new RegExp(he+" pc","i").test(e)?ze:""},st=e=>e instanceof Error
function ot(e){var t=globalThis._posthogChunkIds
if(t){var n=Object.keys(t)
return ce&&n.length===le||(le=n.length,ce=n.reduce((n,r)=>{ae||(ae={})
var i=ae[r]
if(i)n[i[0]]=i[1]
else for(var s=e(r),o=s.length-1;o>=0;o--){var a=s[o],l=null==a?void 0:a.filename,c=t[r]
if(l&&c){n[l]=c,ae[r]=[l,c]
break}}return n},{})),ce}}class at{constructor(e,t,n){void 0===n&&(n=[]),this.coercers=e,this.stackParser=t,this.modifiers=n}buildFromUnknown(e,t){void 0===t&&(t={})
var n=t&&t.mechanism||{handled:!0,type:"generic"},r=this.buildCoercingContext(n,t,0).apply(e),i=this.buildParsingContext(),s=this.parseStacktrace(r,i)
return{$exception_list:this.convertToExceptionList(s,n),$exception_level:"error"}}modifyFrames(e){var t=this
return h(function*(){for(var n of e)n.stacktrace&&n.stacktrace.frames&&B(n.stacktrace.frames)&&(n.stacktrace.frames=yield t.applyModifiers(n.stacktrace.frames))
return e})()}coerceFallback(e){var t
return{type:"Error",value:"Unknown error",stack:null==(t=e.syntheticException)?void 0:t.stack,synthetic:!0}}parseStacktrace(e,t){var n,r
return null!=e.cause&&(n=this.parseStacktrace(e.cause,t)),""!=e.stack&&null!=e.stack&&(r=this.applyChunkIds(this.stackParser(e.stack,e.synthetic?1:0),t.chunkIdMap)),p({},e,{cause:n,stack:r})}applyChunkIds(e,t){return e.map(e=>(e.filename&&t&&(e.chunk_id=t[e.filename]),e))}applyCoercers(e,t){for(var n of this.coercers)if(n.match(e))return n.coerce(e,t)
return this.coerceFallback(t)}applyModifiers(e){var t=this
return h(function*(){var n=e
for(var r of t.modifiers)n=yield r(n)
return n})()}convertToExceptionList(e,t){var n,r,i,s={type:e.type,value:e.value,mechanism:{type:null!==(n=t.type)&&void 0!==n?n:"generic",handled:null===(r=t.handled)||void 0===r||r,synthetic:null!==(i=e.synthetic)&&void 0!==i&&i}}
e.stack&&(s.stacktrace={type:"raw",frames:e.stack})
var o=[s]
return null!=e.cause&&o.push(...this.convertToExceptionList(e.cause,p({},t,{handled:!0}))),o}buildParsingContext(){return{chunkIdMap:ot(this.stackParser)}}buildCoercingContext(e,t,n){void 0===n&&(n=0)
var r=(n,r)=>{if(r<=4){var i=this.buildCoercingContext(e,t,r)
return this.applyCoercers(n,i)}}
return p({},t,{syntheticException:0==n?t.syntheticException:void 0,mechanism:e,apply:e=>r(e,n),next:e=>r(e,n+1)})}}var lt="?"
function ct(e,t,n,r,i){var s={platform:e,filename:t,function:"<anonymous>"===n?lt:n,in_app:!0}
return z(r)||(s.lineno=r),z(i)||(s.colno=i),s}var ut=(e,t)=>{var n=-1!==e.indexOf("safari-extension"),r=-1!==e.indexOf("safari-web-extension")
return n||r?[-1!==e.indexOf("@")?e.split("@")[0]:lt,n?"safari-extension:"+t:"safari-web-extension:"+t]:[e,t]},dt=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,ft=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,ht=/\((\S*)(?::(\d+))(?::(\d+))\)/,pt=(e,t)=>{var n=dt.exec(e)
if(n){var[,r,i,s]=n
return ct(t,r,lt,+i,+s)}var o=ft.exec(e)
if(o){if(o[2]&&0===o[2].indexOf("eval")){var a=ht.exec(o[2])
a&&(o[2]=a[1],o[3]=a[2],o[4]=a[3])}var[l,c]=ut(o[1]||lt,o[2])
return ct(t,c,l,o[3]?+o[3]:void 0,o[4]?+o[4]:void 0)}},gt=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,vt=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,_t=(e,t)=>{var n=gt.exec(e)
if(n){if(n[3]&&n[3].indexOf(" > eval")>-1){var r=vt.exec(n[3])
r&&(n[1]=n[1]||"eval",n[3]=r[1],n[4]=r[2],n[5]="")}var i=n[3],s=n[1]||lt
return[s,i]=ut(s,i),ct(t,i,s,n[4]?+n[4]:void 0,n[5]?+n[5]:void 0)}},mt=/\(error: (.*)\)/
function bt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return function(t,r){void 0===r&&(r=0)
for(var i=[],s=t.split("\n"),o=r;o<s.length;o++){var a=s[o]
if(!(a.length>1024)){var l=mt.test(a)?a.replace(mt,"$1"):a
if(!l.match(/\S*Error: /)){for(var c of n){var u=c(l,e)
if(u){i.push(u)
break}}if(i.length>=50)break}}}return function(e){if(!e.length)return[]
var t=Array.from(e)
return t.reverse(),t.slice(0,50).map(e=>{return p({},e,{filename:e.filename||(n=t,n[n.length-1]||{}).filename,function:e.function||lt})
var n})}(i)}}class yt{match(e){return this.isDOMException(e)||this.isDOMError(e)}coerce(e,t){var n=W(e.stack)
return{type:this.getType(e),value:this.getValue(e),stack:n?e.stack:void 0,cause:e.cause?t.next(e.cause):void 0,synthetic:!1}}getType(e){return this.isDOMError(e)?"DOMError":"DOMException"}getValue(e){var t=e.name||(this.isDOMError(e)?"DOMError":"DOMException")
return e.message?t+": "+e.message:t}isDOMException(e){return ee(e,"DOMException")}isDOMError(e){return ee(e,"DOMError")}}class wt{match(e){return(e=>e instanceof Error)(e)}coerce(e,t){return{type:this.getType(e),value:this.getMessage(e,t),stack:this.getStack(e),cause:e.cause?t.next(e.cause):void 0,synthetic:!1}}getType(e){return e.name||e.constructor.name}getMessage(e,t){var n=e.message
return n.error&&"string"==typeof n.error.message?String(n.error.message):String(n)}getStack(e){return e.stacktrace||e.stack||void 0}}class kt{constructor(){}match(e){return ee(e,"ErrorEvent")&&null!=e.error}coerce(e,t){var n
return t.apply(e.error)||{type:"ErrorEvent",value:e.message,stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}}var xt=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
class St{match(e){return"string"==typeof e}coerce(e,t){var n,[r,i]=this.getInfos(e)
return{type:null!=r?r:"Error",value:null!=i?i:e,stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}getInfos(e){var t="Error",n=e,r=e.match(xt)
return r&&(t=r[1],n=r[2]),[t,n]}}var Et=["fatal","error","warning","log","info","debug"]
function Ct(e,t){void 0===t&&(t=40)
var n=Object.keys(e)
if(n.sort(),!n.length)return"[object has no keys]"
for(var r=n.length;r>0;r--){var i=n.slice(0,r).join(", ")
if(!(i.length>t))return r===n.length||i.length<=t?i:i.slice(0,t)+"..."}return""}class Pt{match(e){return"object"==typeof e&&null!==e}coerce(e,t){var n,r=this.getErrorPropertyFromObject(e)
return r?t.apply(r):{type:this.getType(e),value:this.getValue(e),stack:null==(n=t.syntheticException)?void 0:n.stack,level:this.isSeverityLevel(e.level)?e.level:"error",synthetic:!0}}getType(e){return te(e)?e.constructor.name:"Error"}getValue(e){if("name"in e&&"string"==typeof e.name){var t="'"+e.name+"' captured as exception"
return"message"in e&&"string"==typeof e.message&&(t+=" with message: '"+e.message+"'"),t}if("message"in e&&"string"==typeof e.message)return e.message
var n=this.getObjectClassName(e)
return(n&&"Object"!==n?"'"+n+"'":"Object")+" captured as exception with keys: "+Ct(e)}isSeverityLevel(e){return W(e)&&!V(e)&&Et.indexOf(e)>=0}getErrorPropertyFromObject(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=e[t]
if(st(n))return n}}getObjectClassName(e){try{var t=Object.getPrototypeOf(e)
return t?t.constructor.name:void 0}catch(e){return}}}class Lt{match(e){return te(e)}coerce(e,t){var n,r=e.constructor.name
return{type:r,value:r+" captured as exception with keys: "+Ct(e),stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}}class Tt{match(e){return Z(e)}coerce(e,t){var n
return{type:"Error",value:"Primitive value captured as exception: "+String(e),stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}}class $t{match(e){return ee(e,"PromiseRejectionEvent")}coerce(e,t){var n,r=this.getUnhandledRejectionReason(e)
return Z(r)?{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+String(r),stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}:t.apply(r)}getUnhandledRejectionReason(e){if(Z(e))return e
try{if("reason"in e)return e.reason
if("detail"in e&&"reason"in e.detail)return e.detail.reason}catch(e){}return e}}var It=function(e,t){var{debugEnabled:n}=void 0===t?{}:t,r={_log:function(t){if(v&&(T.DEBUG||L.POSTHOG_DEBUG||n)&&!z(v.console)&&v.console){for(var r=("__rrweb_original__"in v.console[t]?v.console[t].__rrweb_original__:v.console[t]),i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o]
r(e,...s)}},info:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
r._log("log",...t)},warn:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
r._log("warn",...t)},error:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
r._log("error",...t)},critical:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
console.error(e,...n)},uninitializedWarning:e=>{r.error("You must initialize PostHog before calling "+e)},createLogger:(t,n)=>It(e+" "+t,n)}
return r},Ot=It("[PostHog.js]"),At=Ot.createLogger,Mt={}
function Rt(e,t,n){if(B(e))if(b&&e.forEach===b)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var r=0,i=e.length;r<i;r++)if(r in e&&t.call(n,e[r],r)===Mt)return}function jt(e,t,n){if(!J(e)){if(B(e))return Rt(e,t,n)
if((e=>e instanceof FormData)(e)){for(var r of e.entries())if(t.call(n,r[1],r[0])===Mt)return}else for(var i in e)if(D.call(e,i)&&t.call(n,e[i],i)===Mt)return}}var Ft=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return Rt(n,function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])}),e},Nt=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return Rt(n,function(t){Rt(t,function(t){e.push(t)})}),e}
function Dt(e){for(var t=Object.keys(e),n=t.length,r=new Array(n);n--;)r[n]=[t[n],e[t[n]]]
return r}var qt=function(e){try{return e()}catch(e){return}},Bt=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return e.apply(this,n)}catch(e){Ot.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),Ot.critical(e)}}},Ht=function(e){var t={}
return jt(e,function(e,n){(W(e)&&e.length>0||K(e))&&(t[n]=e)}),t}
var Ut=["herokuapp.com","vercel.app","netlify.app"]
function Gt(e){var t=null==e?void 0:e.hostname
if(!W(t))return!1
var n=t.split(".").slice(-2).join(".")
for(var r of Ut)if(n===r)return!1
return!0}function zt(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}function Wt(e,t,n,r){var{capture:i=!1,passive:s=!0}=null!=r?r:{}
null==e||e.addEventListener(t,n,{capture:i,passive:s})}var Vt="$people_distinct_id",Qt="__alias",Jt="__timers",Kt="$autocapture_disabled_server_side",Yt="$heatmaps_enabled_server_side",Xt="$exception_capture_enabled_server_side",Zt="$error_tracking_suppression_rules",en="$error_tracking_capture_extension_exceptions",tn="$web_vitals_enabled_server_side",nn="$dead_clicks_enabled_server_side",rn="$product_tours_enabled_server_side",sn="$web_vitals_allowed_metrics",on="$session_recording_remote_config",an="$sesid",ln="$session_is_sampled",cn="$enabled_feature_flags",un="$early_access_features",dn="$feature_flag_details",fn="$stored_person_properties",hn="$stored_group_properties",pn="$surveys",gn="$surveys_activated",vn="$flag_call_reported",_n="$user_state",mn="$client_session_props",bn="$capture_rate_limit",yn="$initial_campaign_params",wn="$initial_referrer_info",kn="$initial_person_info",xn="$epp",Sn="__POSTHOG_TOOLBAR__",En="$posthog_cookieless",Cn=[Vt,Qt,"__cmpns",Jt,"$session_recording_enabled_server_side",Yt,an,cn,Zt,_n,un,dn,hn,fn,pn,vn,mn,bn,yn,wn,xn,kn,"$conversations_widget_session_id","$conversations_ticket_id","$conversations_widget_state","$conversations_user_traits"]
function Pn(e){return e instanceof Element&&(e.id===Sn||!(null==e.closest||!e.closest(".toolbar-global-fade-container")))}function Ln(e){return!!e&&1===e.nodeType}function Tn(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function $n(e){return!!e&&3===e.nodeType}function In(e){return!!e&&11===e.nodeType}function On(e){return e?R(e).split(/\s+/):[]}function An(e){var t=null==v?void 0:v.location.href
return!!(t&&e&&e.some(e=>t.match(e)))}function Mn(e){var t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return On(t)}function Rn(e){return J(e)?null:R(e).split(/(\s+)/).filter(e=>Zn(e)).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function jn(e){var t=""
return zn(e)&&!Wn(e)&&e.childNodes&&e.childNodes.length&&jt(e.childNodes,function(e){var n
$n(e)&&e.textContent&&(t+=null!==(n=Rn(e.textContent))&&void 0!==n?n:"")}),R(t)}function Fn(e){return z(e.target)?e.srcElement||null:null!=(t=e.target)&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}var Nn=["a","button","form","input","select","textarea","label"]
function Dn(e,t){if(z(t))return!0
var n,r=function(e){if(t.some(t=>e.matches(t)))return{v:!0}}
for(var i of e)if(n=r(i))return n.v
return!1}function qn(e){var t=e.parentNode
return!(!t||!Ln(t))&&t}var Bn=["next","previous","prev",">","<"],Hn=[".ph-no-rageclick",".ph-no-capture"]
var Un=e=>!e||Tn(e,"html")||!Ln(e),Gn=(e,t)=>{if(!v||Un(e))return{parentIsUsefulElement:!1,targetElementList:[]}
for(var n=!1,r=[e],i=e;i.parentNode&&!Tn(i,"body");)if(In(i.parentNode))r.push(i.parentNode.host),i=i.parentNode.host
else{var s=qn(i)
if(!s)break
if(t||Nn.indexOf(s.tagName.toLowerCase())>-1)n=!0
else{var o=v.getComputedStyle(s)
o&&"pointer"===o.getPropertyValue("cursor")&&(n=!0)}r.push(s),i=s}return{parentIsUsefulElement:n,targetElementList:r}}
function zn(e){for(var t=e;t.parentNode&&!Tn(t,"body");t=t.parentNode){var n=Mn(t)
if(M(n,"ph-sensitive")||M(n,"ph-no-capture"))return!1}if(M(Mn(e),"ph-include"))return!0
var r=e.type||""
if(W(r))switch(r.toLowerCase()){case"hidden":case"password":return!1}var i=e.name||e.id||""
return!W(i)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g,""))}function Wn(e){return!!(Tn(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||Tn(e,"select")||Tn(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var Vn="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",Qn=new RegExp("^(?:"+Vn+")$"),Jn=new RegExp(Vn),Kn="\\d{3}-?\\d{2}-?\\d{4}",Yn=new RegExp("^("+Kn+")$"),Xn=new RegExp("("+Kn+")")
function Zn(e,t){if(void 0===t&&(t=!0),J(e))return!1
if(W(e)){if(e=R(e),(t?Qn:Jn).test((e||"").replace(/[- ]/g,"")))return!1
if((t?Yn:Xn).test(e))return!1}return!0}function er(e){var t=jn(e)
return Zn(t=(t+" "+tr(e)).trim())?t:""}function tr(e){var t=""
return e&&e.childNodes&&e.childNodes.length&&jt(e.childNodes,function(e){var n
if(e&&"span"===(null==(n=e.tagName)?void 0:n.toLowerCase()))try{var r=jn(e)
t=(t+" "+r).trim(),e.childNodes&&e.childNodes.length&&(t=(t+" "+tr(e)).trim())}catch(e){Ot.error("[AutoCapture]",e)}}),t}function nr(e){return function(e){var t=e.map(e=>{var t,n,r=""
if(e.tag_name&&(r+=e.tag_name),e.attr_class)for(var i of(e.attr_class.sort(),e.attr_class))r+="."+i.replace(/"/g,"")
var s=p({},e.text?{text:e.text}:{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0},e.href?{href:e.href}:{},e.attr_id?{attr_id:e.attr_id}:{},e.attributes),o={}
return Dt(s).sort((e,t)=>{var[n]=e,[r]=t
return n.localeCompare(r)}).forEach(e=>{var[t,n]=e
return o[rr(t.toString())]=rr(n.toString())}),(r+=":")+Dt(o).map(e=>{var[t,n]=e
return t+'="'+n+'"'}).join("")})
return t.join(";")}(function(e){return e.map(e=>{var t,n,r={text:null==(t=e.$el_text)?void 0:t.slice(0,400),tag_name:e.tag_name,href:null==(n=e.attr__href)?void 0:n.slice(0,2048),attr_class:ir(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return Dt(e).filter(e=>{var[t]=e
return 0===t.indexOf("attr__")}).forEach(e=>{var[t,n]=e
return r.attributes[t]=n}),r})}(e))}function rr(e){return e.replace(/"|\\"/g,'\\"')}function ir(e){var t=e.attr__class
return t?B(t)?t:On(t):void 0}class sr{constructor(e){this.disabled=!1===e
var t=U(e)?e:{}
this.thresholdPx=t.threshold_px||30,this.timeoutMs=t.timeout_ms||1e3,this.clickCount=t.click_count||3,this.clicks=[]}isRageClick(e,t,n){if(this.disabled)return!1
var r=this.clicks[this.clicks.length-1]
if(r&&Math.abs(e-r.x)+Math.abs(t-r.y)<this.thresholdPx&&n-r.timestamp<this.timeoutMs){if(this.clicks.push({x:e,y:t,timestamp:n}),this.clicks.length===this.clickCount)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}var or="$copy_autocapture",ar=function(e){return e.GZipJS="gzip-js",e.Base64="base64",e}({}),lr=e=>{var t=null==k?void 0:k.createElement("a")
return z(t)?null:(t.href=e,t)},cr=function(e,t){for(var n,r=((e.split("#")[0]||"").split(/\?(.*)/)[1]||"").replace(/^\?+/g,"").split("&"),i=0;i<r.length;i++){var s=r[i].split("=")
if(s[0]===t){n=s
break}}if(!B(n)||n.length<2)return""
var o=n[1]
try{o=decodeURIComponent(o)}catch(e){Ot.error("Skipping decoding for malformed query param: "+o)}return o.replace(/\+/g," ")},ur=function(e,t,n){if(!e||!t||!t.length)return e
for(var r=e.split("#"),i=r[0]||"",s=r[1],o=i.split("?"),a=o[1],l=o[0],c=(a||"").split("&"),u=[],d=0;d<c.length;d++){var f=c[d].split("=")
B(f)&&(t.includes(f[0])?u.push(f[0]+"="+n):u.push(c[d]))}var h=l
return null!=a&&(h+="?"+u.join("&")),null!=s&&(h+="#"+s),h},dr=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},fr=At("[AutoCapture]")
function hr(e,t){return t.length>e?t.slice(0,e)+"...":t}function pr(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!Ln(t))
return t}function gr(e,t){for(var n,r,{e:i,maskAllElementAttributes:s,maskAllText:o,elementAttributeIgnoreList:a,elementsChainAsString:l}=t,c=[e],u=e;u.parentNode&&!Tn(u,"body");)In(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
var d,f=[],h={},p=!1,g=!1
if(jt(c,e=>{var t=zn(e)
"a"===e.tagName.toLowerCase()&&(p=e.getAttribute("href"),p=t&&p&&Zn(p)&&p),M(Mn(e),"ph-no-capture")&&(g=!0),f.push(function(e,t,n,r){var i=e.tagName.toLowerCase(),s={tag_name:i}
Nn.indexOf(i)>-1&&!n&&("a"===i.toLowerCase()||"button"===i.toLowerCase()?s.$el_text=hr(1024,er(e)):s.$el_text=hr(1024,jn(e)))
var o=Mn(e)
o.length>0&&(s.classes=o.filter(function(e){return""!==e})),jt(e.attributes,function(n){var i
if((!Wn(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==r||!r.includes(n.name))&&!t&&Zn(n.value)&&(i=n.name,!W(i)||"_ngcontent"!==i.substring(0,10)&&"_nghost"!==i.substring(0,7))){var o=n.value
"class"===n.name&&(o=On(o).join(" ")),s["attr__"+n.name]=hr(1024,o)}})
for(var a=1,l=1,c=e;c=pr(c);)a++,c.tagName===e.tagName&&l++
return s.nth_child=a,s.nth_of_type=l,s}(e,s,o,a))
var n=function(e){if(!zn(e))return{}
var t={}
return jt(e.attributes,function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var n=e.name.replace("data-ph-capture-attribute-",""),r=e.value
n&&r&&Zn(r)&&(t[n]=r)}}),t}(e)
Ft(h,n)}),g)return{props:{},explicitNoCapture:g}
if(o||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?f[0].$el_text=er(e):f[0].$el_text=jn(e)),p){var _,m
f[0].attr__href=p
var b=null==(_=lr(p))?void 0:_.host,y=null==v||null==(m=v.location)?void 0:m.host
b&&y&&b!==y&&(d=p)}return{props:Ft({$event_type:i.type,$ce_version:1},l?{}:{$elements:f},{$elements_chain:nr(f)},null!=(n=f[0])&&n.$el_text?{$el_text:null==(r=f[0])?void 0:r.$el_text}:{},d&&"click"===i.type?{$external_click_url:d}:{},h)}}class vr{constructor(e){this._initialized=!1,this._isDisabledServerSide=null,this._elementsChainAsString=!1,this.instance=e,this.rageclicks=new sr(e.config.rageclick),this._elementSelectors=null}get _config(){var e,t,n=U(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null==(e=n.url_allowlist)?void 0:e.map(e=>new RegExp(e)),n.url_ignorelist=null==(t=n.url_ignorelist)?void 0:t.map(e=>new RegExp(e)),n}_addDomEventHandlers(){if(this.isBrowserSupported()){if(v&&k){var e=e=>{e=e||(null==v?void 0:v.event)
try{this._captureEvent(e)}catch(e){fr.error("Failed to capture event",e)}}
if(Wt(k,"submit",e,{capture:!0}),Wt(k,"change",e,{capture:!0}),Wt(k,"click",e,{capture:!0}),this._config.capture_copied_text){var t=e=>{e=e||(null==v?void 0:v.event),this._captureEvent(e,or)}
Wt(k,"copy",t,{capture:!0}),Wt(k,"cut",t,{capture:!0})}}}else fr.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}onRemoteConfig(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[Kt]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,n=[]
return null==(t=this._elementSelectors)||t.forEach(t=>{var r=null==k?void 0:k.querySelectorAll(t)
null==r||r.forEach(r=>{e===r&&n.push(t)})}),n}get isEnabled(){var e,t,n=null==(e=this.instance.persistence)?void 0:e.props[Kt],r=this._isDisabledServerSide
if(Q(r)&&!Y(n)&&!this.instance._shouldDisableFlags())return!1
var i=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!i}_captureEvent(e,t){if(void 0===t&&(t="$autocapture"),this.isEnabled){var n,r=Fn(e)
$n(r)&&(r=r.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,e.timeStamp||(new Date).getTime())&&function(e,t){if(!v||Un(e))return!1
var n,r,i
if(Y(t)?(n=!!t&&Hn,r=void 0):(n=null!==(i=null==t?void 0:t.css_selector_ignorelist)&&void 0!==i?i:Hn,r=null==t?void 0:t.content_ignorelist),!1===n)return!1
var{targetElementList:s}=Gn(e,!1)
return!function(e,t){if(!1===e||z(e))return!1
var n
if(!0===e)n=Bn
else{if(!B(e))return!1
if(e.length>10)return Ot.error("[PostHog] content_ignorelist array cannot exceed 10 items. Use css_selector_ignorelist for more complex matching."),!1
n=e.map(e=>e.toLowerCase())}return t.some(e=>{var{safeText:t,ariaLabel:r}=e
return n.some(e=>t.includes(e)||r.includes(e))})}(r,s.map(e=>{var t
return{safeText:jn(e).toLowerCase(),ariaLabel:(null==(t=e.getAttribute("aria-label"))?void 0:t.toLowerCase().trim())||""}}))&&!Dn(s,n)}(r,this.instance.config.rageclick)&&this._captureEvent(e,"$rageclick")
var i=t===or
if(r&&function(e,t,n,r,i){var s,o,a,l
if(void 0===n&&(n=void 0),!v||Un(e))return!1
if(null!=(s=n)&&s.url_allowlist&&!An(n.url_allowlist))return!1
if(null!=(o=n)&&o.url_ignorelist&&An(n.url_ignorelist))return!1
if(null!=(a=n)&&a.dom_event_allowlist){var c=n.dom_event_allowlist
if(c&&!c.some(e=>t.type===e))return!1}var{parentIsUsefulElement:u,targetElementList:d}=Gn(e,r)
if(!function(e,t){var n=null==t?void 0:t.element_allowlist
if(z(n))return!0
var r,i=function(e){if(n.some(t=>e.tagName.toLowerCase()===t))return{v:!0}}
for(var s of e)if(r=i(s))return r.v
return!1}(d,n))return!1
if(!Dn(d,null==(l=n)?void 0:l.css_selector_allowlist))return!1
var f=v.getComputedStyle(e)
if(f&&"pointer"===f.getPropertyValue("cursor")&&"click"===t.type)return!0
var h=e.tagName.toLowerCase()
switch(h){case"html":return!1
case"form":return(i||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(i||["change","click"]).indexOf(t.type)>=0
default:return u?(i||["click"]).indexOf(t.type)>=0:(i||["click"]).indexOf(t.type)>=0&&(Nn.indexOf(h)>-1||"true"===e.getAttribute("contenteditable"))}}(r,e,this._config,i,i?["copy","cut"]:void 0)){var{props:s,explicitNoCapture:o}=gr(r,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this._config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(o)return!1
var a=this.getElementSelectors(r)
if(a&&a.length>0&&(s.$element_selectors=a),t===or){var l,c=Rn(null==v||null==(l=v.getSelection())?void 0:l.toString()),u=e.type||"clipboard"
if(!c)return!1
s.$selected_content=c,s.$copy_type=u}return this.instance.capture(t,s),!0}}}isBrowserSupported(){return H(null==k?void 0:k.querySelectorAll)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return K(e)&&isFinite(e)&&Math.floor(e)===e})
var _r="0123456789abcdef"
class mr{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,r){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(r)||e<0||t<0||n<0||r<0||e>0xffffffffffff||t>4095||n>1073741823||r>4294967295)throw new RangeError("invalid field value")
var i=new Uint8Array(16)
return i[0]=e/Math.pow(2,40),i[1]=e/Math.pow(2,32),i[2]=e/Math.pow(2,24),i[3]=e/Math.pow(2,16),i[4]=e/Math.pow(2,8),i[5]=e,i[6]=112|t>>>8,i[7]=t,i[8]=128|n>>>24,i[9]=n>>>16,i[10]=n>>>8,i[11]=n,i[12]=r>>>24,i[13]=r>>>16,i[14]=r>>>8,i[15]=r,new mr(i)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+_r.charAt(this.bytes[t]>>>4)+_r.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new mr(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class br{constructor(){this._timestamp=0,this._counter=0,this._random=new kr}generate(){var e=this.generateOrAbort()
if(z(e)){this._timestamp=0
var t=this.generateOrAbort()
if(z(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}generateOrAbort(){var e=Date.now()
if(e>this._timestamp)this._timestamp=e,this._resetCounter()
else{if(!(e+1e4>this._timestamp))return
this._counter++,this._counter>4398046511103&&(this._timestamp++,this._resetCounter())}return mr.fromFieldsV7(this._timestamp,Math.trunc(this._counter/Math.pow(2,30)),this._counter&Math.pow(2,30)-1,this._random.nextUint32())}_resetCounter(){this._counter=1024*this._random.nextUint32()+(1023&this._random.nextUint32())}}var yr,wr=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
v&&!z(v.crypto)&&crypto.getRandomValues&&(wr=e=>crypto.getRandomValues(e))
class kr{constructor(){this._buffer=new Uint32Array(8),this._cursor=1/0}nextUint32(){return this._cursor>=this._buffer.length&&(wr(this._buffer),this._cursor=0),this._buffer[this._cursor++]}}var xr=()=>Sr().toString(),Sr=()=>(yr||(yr=new br)).generate(),Er="",Cr=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
var Pr={_is_supported:()=>!!k,_error:function(e){Ot.error("cookieStore error: "+e)},_get:function(e){if(k){try{for(var t=e+"=",n=k.cookie.split(";").filter(e=>e.length),r=0;r<n.length;r++){for(var i=n[r];" "==i.charAt(0);)i=i.substring(1,i.length)
if(0===i.indexOf(t))return decodeURIComponent(i.substring(t.length,i.length))}}catch(e){}return null}},_parse:function(e){var t
try{t=JSON.parse(Pr._get(e))||{}}catch(e){}return t},_set:function(e,t,n,r,i){if(k)try{var s="",o="",a=function(e,t){if(t){var n=function(e,t){if(void 0===t&&(t=k),Er)return Er
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
for(var n=e.split("."),r=Math.min(n.length,8),i="dmn_chk_"+xr();!Er&&r--;){var s=n.slice(r).join("."),o=i+"=1;domain=."+s+";path=/"
t.cookie=o+";max-age=3",t.cookie.includes(i)&&(t.cookie=o+";max-age=0",Er=s)}return Er}(e)
if(!n){var r=(e=>{var t=e.match(Cr)
return t?t[0]:""})(e)
r!==n&&Ot.info("Warning: cookie subdomain discovery mismatch",r,n),n=r}return n?"; domain=."+n:""}return""}(k.location.hostname,r)
if(n){var l=new Date
l.setTime(l.getTime()+24*n*60*60*1e3),s="; expires="+l.toUTCString()}i&&(o="; secure")
var c=e+"="+encodeURIComponent(JSON.stringify(t))+s+"; SameSite=Lax; path=/"+a+o
return c.length>3686.4&&Ot.warn("cookieStore warning: large cookie, len="+c.length),k.cookie=c,c}catch(e){return}},_remove:function(e,t){if(null!=k&&k.cookie)try{Pr._set(e,"",-1,t)}catch(e){return}}},Lr=null,Tr={_is_supported:function(){if(!Q(Lr))return Lr
var e=!0
if(z(v))e=!1
else try{var t="__mplssupport__"
Tr._set(t,"xyz"),'"xyz"'!==Tr._get(t)&&(e=!1),Tr._remove(t)}catch(t){e=!1}return e||Ot.error("localStorage unsupported; falling back to cookie store"),Lr=e,e},_error:function(e){Ot.error("localStorage error: "+e)},_get:function(e){try{return null==v?void 0:v.localStorage.getItem(e)}catch(e){Tr._error(e)}return null},_parse:function(e){try{return JSON.parse(Tr._get(e))||{}}catch(e){}return null},_set:function(e,t){try{null==v||v.localStorage.setItem(e,JSON.stringify(t))}catch(e){Tr._error(e)}},_remove:function(e){try{null==v||v.localStorage.removeItem(e)}catch(e){Tr._error(e)}}},$r=["distinct_id",an,ln,xn,kn],Ir=p({},Tr,{_parse:function(e){try{var t={}
try{t=Pr._parse(e)||{}}catch(e){}var n=Ft(t,JSON.parse(Tr._get(e)||"{}"))
return Tr._set(e,n),n}catch(e){}return null},_set:function(e,t,n,r,i,s){try{Tr._set(e,t,void 0,void 0,s)
var o={}
$r.forEach(e=>{t[e]&&(o[e]=t[e])}),Object.keys(o).length&&Pr._set(e,o,n,r,i,s)}catch(e){Tr._error(e)}},_remove:function(e,t){try{null==v||v.localStorage.removeItem(e),Pr._remove(e,t)}catch(e){Tr._error(e)}}}),Or={},Ar={_is_supported:function(){return!0},_error:function(e){Ot.error("memoryStorage error: "+e)},_get:function(e){return Or[e]||null},_parse:function(e){return Or[e]||null},_set:function(e,t){Or[e]=t},_remove:function(e){delete Or[e]}},Mr=null,Rr={_is_supported:function(){if(!Q(Mr))return Mr
if(Mr=!0,z(v))Mr=!1
else try{var e="__support__"
Rr._set(e,"xyz"),'"xyz"'!==Rr._get(e)&&(Mr=!1),Rr._remove(e)}catch(e){Mr=!1}return Mr},_error:function(e){Ot.error("sessionStorage error: ",e)},_get:function(e){try{return null==v?void 0:v.sessionStorage.getItem(e)}catch(e){Rr._error(e)}return null},_parse:function(e){try{return JSON.parse(Rr._get(e))||null}catch(e){}return null},_set:function(e,t){try{null==v||v.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){Rr._error(e)}},_remove:function(e){try{null==v||v.sessionStorage.removeItem(e)}catch(e){Rr._error(e)}}},jr=function(e){return e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED",e}({})
class Fr{constructor(e){this._instance=e}get _config(){return this._instance.config}get consent(){return this._getDnt()?jr.DENIED:this._storedConsent}isOptedOut(){return"always"===this._config.cookieless_mode||this.consent===jr.DENIED||this.consent===jr.PENDING&&(this._config.opt_out_capturing_by_default||"on_reject"===this._config.cookieless_mode)}isOptedIn(){return!this.isOptedOut()}isExplicitlyOptedOut(){return this.consent===jr.DENIED}optInOut(e){this._storage._set(this._storageKey,e?1:0,this._config.cookie_expiration,this._config.cross_subdomain_cookie,this._config.secure_cookie)}reset(){this._storage._remove(this._storageKey,this._config.cross_subdomain_cookie)}get _storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t,consent_persistence_name:n}=this._instance.config
return n||(t?t+e:"__ph_opt_in_out_"+e)}get _storedConsent(){var e=this._storage._get(this._storageKey)
return re(e)?jr.GRANTED:M(ie,e)?jr.DENIED:jr.PENDING}get _storage(){if(!this._persistentStore){var e=this._config.opt_out_capturing_persistence_type
this._persistentStore="localStorage"===e?Tr:Pr
var t="localStorage"===e?Pr:Tr
t._get(this._storageKey)&&(this._persistentStore._get(this._storageKey)||this.optInOut(re(t._get(this._storageKey))),t._remove(this._storageKey,this._config.cross_subdomain_cookie))}return this._persistentStore}_getDnt(){return!!this._config.respect_dnt&&!!zt([null==w?void 0:w.doNotTrack,null==w?void 0:w.msDoNotTrack,L.doNotTrack],e=>re(e))}}var Nr=At("[Dead Clicks]"),Dr=()=>!0,qr=e=>{var t,n=!(null==(t=e.instance.persistence)||!t.get_property(nn)),r=e.instance.config.capture_dead_clicks
return Y(r)?r:!!U(r)||n}
class Br{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}onRemoteConfig(e){this.instance.persistence&&this.instance.persistence.register({[nn]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this._loadScript(()=>{this._start()})}_loadScript(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.initDeadClicksAutocapture&&e(),null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this.instance,"dead-clicks-autocapture",t=>{t?Nr.error("failed to load script",t):e()})}_start(){var e
if(k){if(!this._lazyLoadedDeadClicksAutocapture&&null!=(e=L.__PosthogExtensions__)&&e.initDeadClicksAutocapture){var t=U(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=L.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(k),Nr.info("starting...")}}else Nr.error("`document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,Nr.info("stopping..."))}}var Hr=At("[ExceptionAutocapture]")
class Ur{constructor(e){var t,n,r
this._startCapturing=()=>{var e
if(v&&this.isEnabled&&null!=(e=L.__PosthogExtensions__)&&e.errorWrappingFunctions){var t=L.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,n=L.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,r=L.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError
try{!this._unwrapOnError&&this._config.capture_unhandled_errors&&(this._unwrapOnError=t(this.captureException.bind(this))),!this._unwrapUnhandledRejection&&this._config.capture_unhandled_rejections&&(this._unwrapUnhandledRejection=n(this.captureException.bind(this))),!this._unwrapConsoleError&&this._config.capture_console_errors&&(this._unwrapConsoleError=r(this.captureException.bind(this)))}catch(e){Hr.error("failed to start",e),this._stopCapturing()}}},this._instance=e,this._remoteEnabled=!(null==(t=this._instance.persistence)||!t.props[Xt]),this._config=this._requiredConfig(),this._rateLimiter=new oe({refillRate:null!==(n=this._instance.config.error_tracking.__exceptionRateLimiterRefillRate)&&void 0!==n?n:1,bucketSize:null!==(r=this._instance.config.error_tracking.__exceptionRateLimiterBucketSize)&&void 0!==r?r:10,refillInterval:1e4,_logger:Hr}),this.startIfEnabled()}_requiredConfig(){var e=this._instance.config.capture_exceptions,t={capture_unhandled_errors:!1,capture_unhandled_rejections:!1,capture_console_errors:!1}
return U(e)?t=p({},t,e):(z(e)?this._remoteEnabled:e)&&(t=p({},t,{capture_unhandled_errors:!0,capture_unhandled_rejections:!0})),t}get isEnabled(){return this._config.capture_console_errors||this._config.capture_unhandled_errors||this._config.capture_unhandled_rejections}startIfEnabled(){this.isEnabled&&(Hr.info("enabled"),this._loadScript(this._startCapturing))}_loadScript(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.errorWrappingFunctions&&e(),null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"exception-autocapture",t=>{if(t)return Hr.error("failed to load script",t)
e()})}_stopCapturing(){var e,t,n
null==(e=this._unwrapOnError)||e.call(this),this._unwrapOnError=void 0,null==(t=this._unwrapUnhandledRejection)||t.call(this),this._unwrapUnhandledRejection=void 0,null==(n=this._unwrapConsoleError)||n.call(this),this._unwrapConsoleError=void 0}onRemoteConfig(e){var t=e.autocaptureExceptions
this._remoteEnabled=!!t||!1,this._config=this._requiredConfig(),this._instance.persistence&&this._instance.persistence.register({[Xt]:this._remoteEnabled}),this.startIfEnabled()}captureException(e){var t,n,r=null!==(t=null==e||null==(n=e.$exception_list)||null==(n=n[0])?void 0:n.type)&&void 0!==t?t:"Exception"
this._rateLimiter.consumeRateLimit(r)?Hr.info("Skipping exception capture because of client rate limiting.",{exception:r}):this._instance.exceptions.sendExceptionEvent(e)}}function Gr(e,t,n){try{if(!(t in e))return()=>{}
var r=e[t],i=n(r)
return H(i)&&(i.prototype=i.prototype||{},Object.defineProperties(i,{__posthog_wrapped__:{enumerable:!1,value:!0}})),e[t]=i,()=>{e[t]=r}}catch(e){return()=>{}}}class zr{constructor(e){var t
this._instance=e,this._lastPathname=(null==v||null==(t=v.location)?void 0:t.pathname)||""}get isEnabled(){return"history_change"===this._instance.config.capture_pageview}startIfEnabled(){this.isEnabled&&(Ot.info("History API monitoring enabled, starting..."),this.monitorHistoryChanges())}stop(){this._popstateListener&&this._popstateListener(),this._popstateListener=void 0,Ot.info("History API monitoring stopped")}monitorHistoryChanges(){var e,t
if(v&&v.history){var n=this
null!=(e=v.history.pushState)&&e.__posthog_wrapped__||Gr(v.history,"pushState",e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("pushState")}),null!=(t=v.history.replaceState)&&t.__posthog_wrapped__||Gr(v.history,"replaceState",e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("replaceState")}),this._setupPopstateListener()}}_capturePageview(e){try{var t,n=null==v||null==(t=v.location)?void 0:t.pathname
if(!n)return
n!==this._lastPathname&&this.isEnabled&&this._instance.capture("$pageview",{navigation_type:e}),this._lastPathname=n}catch(t){Ot.error("Error capturing "+e+" pageview",t)}}_setupPopstateListener(){if(!this._popstateListener){var e=()=>{this._capturePageview("popstate")}
Wt(v,"popstate",e),this._popstateListener=()=>{v&&v.removeEventListener("popstate",e)}}}}var Wr=At("[SegmentIntegration]")
var Vr="posthog-js"
function Qr(e,t){var{organization:n,projectId:r,prefix:i,severityAllowList:s=["error"],sendExceptionsToPostHog:o=!0}=void 0===t?{}:t
return t=>{var a,l,c,u,d
if("*"!==s&&!s.includes(t.level)||!e.__loaded)return t
t.tags||(t.tags={})
var f=e.requestRouter.endpointFor("ui","/project/"+e.config.token+"/person/"+e.get_distinct_id())
t.tags["PostHog Person URL"]=f,e.sessionRecordingStarted()&&(t.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
var h=(null==(a=t.exception)?void 0:a.values)||[],g=h.map(e=>p({},e,{stacktrace:e.stacktrace?p({},e.stacktrace,{type:"raw",frames:(e.stacktrace.frames||[]).map(e=>p({},e,{platform:"web:javascript"}))}):void 0})),v={$exception_message:(null==(l=h[0])?void 0:l.value)||t.message,$exception_type:null==(c=h[0])?void 0:c.type,$exception_level:t.level,$exception_list:g,$sentry_event_id:t.event_id,$sentry_exception:t.exception,$sentry_exception_message:(null==(u=h[0])?void 0:u.value)||t.message,$sentry_exception_type:null==(d=h[0])?void 0:d.type,$sentry_tags:t.tags}
return n&&r&&(v.$sentry_url=(i||"https://sentry.io/organizations/")+n+"/issues/?project="+r+"&query="+t.event_id),o&&e.exceptions.sendExceptionEvent(v),t}}class Jr{constructor(e,t,n,r,i,s){this.name=Vr,this.setupOnce=function(o){o(Qr(e,{organization:t,projectId:n,prefix:r,severityAllowList:i,sendExceptionsToPostHog:null==s||s}))}}}var Kr=null!=v&&v.location?dr(v.location.hash,"__posthog")||dr(location.hash,"state"):null,Yr="_postHogToolbarParams",Xr=At("[Toolbar]"),Zr=function(e){return e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED",e}(Zr||{})
class ei{constructor(e){this.instance=e}_setToolbarState(e){L.ph_toolbar_state=e}_getToolbarState(){var e
return null!==(e=L.ph_toolbar_state)&&void 0!==e?e:Zr.UNINITIALIZED}maybeLoadToolbar(e,t,n){if(void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),!v||!k)return!1
e=null!=e?e:v.location,n=null!=n?n:v.history
try{if(!t){try{v.localStorage.setItem("test","test"),v.localStorage.removeItem("test")}catch(e){return!1}t=null==v?void 0:v.localStorage}var r,i=Kr||dr(e.hash,"__posthog")||dr(e.hash,"state"),s=i?qt(()=>JSON.parse(atob(decodeURIComponent(i))))||qt(()=>JSON.parse(decodeURIComponent(i))):null
return s&&"ph_authorize"===s.action?((r=s).source="url",r&&Object.keys(r).length>0&&(s.desiredHash?e.hash=s.desiredHash:n?n.replaceState(n.state,"",e.pathname+e.search):e.hash="")):((r=JSON.parse(t.getItem(Yr)||"{}")).source="localstorage",delete r.userIntent),!(!r.token||this.instance.config.token!==r.token||(this.loadToolbar(r),0))}catch(e){return!1}}_callLoadToolbar(e){var t=L.ph_load_toolbar||L.ph_load_editor
!J(t)&&H(t)?t(e,this.instance):Xr.warn("No toolbar load function found")}loadToolbar(e){var t=!(null==k||!k.getElementById(Sn))
if(!v||t)return!1
var n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,r=p({token:this.instance.config.token},e,{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{})
if(v.localStorage.setItem(Yr,JSON.stringify(p({},r,{source:void 0}))),this._getToolbarState()===Zr.LOADED)this._callLoadToolbar(r)
else if(this._getToolbarState()===Zr.UNINITIALIZED){var i
this._setToolbarState(Zr.LOADING),null==(i=L.__PosthogExtensions__)||null==i.loadExternalDependency||i.loadExternalDependency(this.instance,"toolbar",e=>{if(e)return Xr.error("[Toolbar] Failed to load",e),void this._setToolbarState(Zr.UNINITIALIZED)
this._setToolbarState(Zr.LOADED),this._callLoadToolbar(r)}),Wt(v,"turbolinks:load",()=>{this._setToolbarState(Zr.UNINITIALIZED),this.loadToolbar(r)})}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(e,t,n){return void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),this.maybeLoadToolbar(e,t,n)}}var ti=At("[TracingHeaders]")
class ni{constructor(e){this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0,this._startCapturing=()=>{var e,t
z(this._restoreXHRPatch)&&(null==(e=L.__PosthogExtensions__)||null==(e=e.tracingHeadersPatchFns)||e._patchXHR(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager)),z(this._restoreFetchPatch)&&(null==(t=L.__PosthogExtensions__)||null==(t=t.tracingHeadersPatchFns)||t._patchFetch(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager))},this._instance=e}_loadScript(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.tracingHeadersPatchFns&&e(),null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"tracing-headers",t=>{if(t)return ti.error("failed to load script",t)
e()})}startIfEnabledOrStop(){var e,t
this._instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null==(e=this._restoreXHRPatch)||e.call(this),null==(t=this._restoreFetchPatch)||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}var ri="https?://(.*)",ii=["gclid","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","igshid","ttclid","rdt_cid","epik","qclid","sccid","irclid","_kx"],si=Nt(["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gad_source","mc_cid"],ii),oi="<masked>",ai=["li_fat_id"]
function li(e,t,n){if(!k)return{}
var r,i=t?Nt([],ii,n||[]):[],s=ci(ur(k.URL,i,oi),e),o=(r={},jt(ai,function(e){var t=Pr._get(e)
r[e]=t||null}),r)
return Ft(o,s)}function ci(e,t){var n=si.concat(t||[]),r={}
return jt(n,function(t){var n=cr(e,t)
r[t]=n||null}),r}function ui(e){var t=function(e){return e?0===e.search(ri+"google.([^/?]*)")?"google":0===e.search(ri+"bing.com")?"bing":0===e.search(ri+"yahoo.com")?"yahoo":0===e.search(ri+"duckduckgo.com")?"duckduckgo":null:null}(e),n="yahoo"!=t?"q":"p",r={}
if(!Q(t)){r.$search_engine=t
var i=k?cr(k.referrer,n):""
i.length&&(r.ph_keyword=i)}return r}function di(){return navigator.language||navigator.userLanguage}function fi(){return(null==k?void 0:k.referrer)||"$direct"}function hi(e,t){var n=e?Nt([],ii,t||[]):[],r=null==x?void 0:x.href.substring(0,1e3)
return{r:fi().substring(0,1e3),u:r?ur(r,n,oi):void 0}}function pi(e){var t,{r:n,u:r}=e,i={$referrer:n,$referring_domain:null==n?void 0:"$direct"==n?"$direct":null==(t=lr(n))?void 0:t.host}
if(r){i.$current_url=r
var s=lr(r)
i.$host=null==s?void 0:s.host,i.$pathname=null==s?void 0:s.pathname
var o=ci(r)
Ft(i,o)}if(n){var a=ui(n)
Ft(i,a)}return i}function gi(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}}function vi(){try{return(new Date).getTimezoneOffset()}catch(e){return}}function _i(e,t){if(!P)return{}
var n,r,i,s=e?Nt([],ii,t||[]):[],[o,a]=function(e){for(var t=0;t<rt.length;t++){var[n,r]=rt[t],i=n.exec(e),s=i&&(H(r)?r(i,e):r)
if(s)return s}return["",""]}(P)
return Ft(Ht({$os:o,$os_version:a,$browser:et(P,navigator.vendor),$device:it(P),$device_type:(r=P,i=it(r),i===ge||i===pe||"Kobo"===i||"Kindle Fire"===i||i===ze?he:i===Me||i===je||i===Re||i===He?"Console":i===_e?"Wearable":i?ue:"Desktop"),$timezone:gi(),$timezone_offset:vi()}),{$current_url:ur(null==x?void 0:x.href,s,oi),$host:null==x?void 0:x.host,$pathname:null==x?void 0:x.pathname,$raw_user_agent:P.length>1e3?P.substring(0,997)+"...":P,$browser_version:nt(P,navigator.vendor),$browser_language:di(),$browser_language_prefix:(n=di(),"string"==typeof n?n.split("-")[0]:void 0),$screen_height:null==v?void 0:v.screen.height,$screen_width:null==v?void 0:v.screen.width,$viewport_height:null==v?void 0:v.innerHeight,$viewport_width:null==v?void 0:v.innerWidth,$lib:"web",$lib_version:T.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})}var mi=At("[Web Vitals]"),bi=9e5
class yi{constructor(e){var t
this._enabledServerSide=!1,this._initialized=!1,this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0},this._flushToCapture=()=>{clearTimeout(this._delayedFlushTimer),0!==this._buffer.metrics.length&&(this._instance.capture("$web_vitals",this._buffer.metrics.reduce((e,t)=>p({},e,{["$web_vitals_"+t.name+"_event"]:p({},t),["$web_vitals_"+t.name+"_value"]:t.value}),{})),this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})},this._addToBuffer=e=>{var t,n=null==(t=this._instance.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0)
if(z(n))mi.error("Could not read session ID. Dropping metrics!")
else{this._buffer=this._buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var r=this._currentURL()
z(r)||(J(null==e?void 0:e.name)||J(null==e?void 0:e.value)?mi.error("Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?mi.error("Ignoring metric with value >= "+this._maxAllowedValue,e):(this._buffer.url!==r&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),z(this._buffer.url)&&(this._buffer.url=r),this._buffer.firstMetricTimestamp=z(this._buffer.firstMetricTimestamp)?Date.now():this._buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this._buffer.metrics.push(p({},e,{$current_url:r,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),this._buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}},this._startCapturing=()=>{var e,t,n,r,i=L.__PosthogExtensions__
z(i)||z(i.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:r}=i.postHogWebVitalsCallbacks),e&&t&&n&&r?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&r(this._addToBuffer.bind(this)),this._initialized=!0):mi.error("web vitals callbacks not loaded - not starting")},this._instance=e,this._enabledServerSide=!(null==(t=this._instance.persistence)||!t.props[tn]),this.startIfEnabled()}get allowedMetrics(){var e,t,n=U(this._instance.config.capture_performance)?null==(e=this._instance.config.capture_performance)?void 0:e.web_vitals_allowed_metrics:void 0
return z(n)?(null==(t=this._instance.persistence)?void 0:t.props[sn])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(U(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=U(this._instance.config.capture_performance)&&K(this._instance.config.capture_performance.__web_vitals_max_value)?this._instance.config.capture_performance.__web_vitals_max_value:bi
return 0<e&&e<=6e4?bi:e}get isEnabled(){var e=null==x?void 0:x.protocol
if("http:"!==e&&"https:"!==e)return mi.info("Web Vitals are disabled on non-http/https protocols"),!1
var t=U(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals:Y(this._instance.config.capture_performance)?this._instance.config.capture_performance:void 0
return Y(t)?t:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(mi.info("enabled, starting..."),this._loadScript(this._startCapturing))}onRemoteConfig(e){var t=U(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=U(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this._instance.persistence&&(this._instance.persistence.register({[tn]:t}),this._instance.persistence.register({[sn]:n})),this._enabledServerSide=t,this.startIfEnabled()}_loadScript(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.postHogWebVitalsCallbacks&&e(),null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"web-vitals",t=>{t?mi.error("failed to load script",t):e()})}_currentURL(){var e=v?v.location.href:void 0
if(e){var t=this._instance.config.mask_personal_data_properties,n=this._instance.config.custom_personal_data_properties,r=t?Nt([],ii,n||[]):[]
return ur(e,r,oi)}mi.error("Could not determine current URL")}}var wi=At("[Heatmaps]")
function ki(e){return U(e)&&"clientX"in e&&"clientY"in e&&K(e.clientX)&&K(e.clientY)}class xi{constructor(e){var t
this._enabledServerSide=!1,this._initialized=!1,this._flushInterval=null,this.instance=e,this._enabledServerSide=!(null==(t=this.instance.persistence)||!t.props[Yt]),this.rageclicks=new sr(e.config.rageclick)}get flushIntervalMilliseconds(){var e=5e3
return U(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return z(this.instance.config.capture_heatmaps)?z(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
wi.info("starting..."),this._setupListeners(),this._onVisibilityChange()}else{var e
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),this._removeListeners(),this.getAndClearBuffer()}}onRemoteConfig(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[Yt]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this._buffer
return this._buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_onVisibilityChange(){this._flushInterval&&clearInterval(this._flushInterval),this._flushInterval="visible"===(null==k?void 0:k.visibilityState)?setInterval(this._flush.bind(this),this.flushIntervalMilliseconds):null}_setupListeners(){v&&k&&(this._flushHandler=this._flush.bind(this),Wt(v,"beforeunload",this._flushHandler),this._onClickHandler=e=>this._onClick(e||(null==v?void 0:v.event)),Wt(k,"click",this._onClickHandler,{capture:!0}),this._onMouseMoveHandler=e=>this._onMouseMove(e||(null==v?void 0:v.event)),Wt(k,"mousemove",this._onMouseMoveHandler,{capture:!0}),this._deadClicksCapture=new Br(this.instance,Dr,this._onDeadClick.bind(this)),this._deadClicksCapture.startIfEnabled(),this._onVisibilityChange_handler=this._onVisibilityChange.bind(this),Wt(k,"visibilitychange",this._onVisibilityChange_handler),this._initialized=!0)}_removeListeners(){var e
v&&k&&(this._flushHandler&&v.removeEventListener("beforeunload",this._flushHandler),this._onClickHandler&&k.removeEventListener("click",this._onClickHandler,{capture:!0}),this._onMouseMoveHandler&&k.removeEventListener("mousemove",this._onMouseMoveHandler,{capture:!0}),this._onVisibilityChange_handler&&k.removeEventListener("visibilitychange",this._onVisibilityChange_handler),clearTimeout(this._mouseMoveTimeout),null==(e=this._deadClicksCapture)||e.stop(),this._initialized=!1)}_getProperties(e,t){var n=this.instance.scrollManager.scrollY(),r=this.instance.scrollManager.scrollX(),i=this.instance.scrollManager.scrollElement(),s=function(e,t,n){for(var r=e;r&&Ln(r)&&!Tn(r,"body");){if(r===n)return!1
if(M(t,null==v?void 0:v.getComputedStyle(r).position))return!0
r=qn(r)}return!1}(Fn(e),["fixed","sticky"],i)
return{x:e.clientX+(s?0:r),y:e.clientY+(s?0:n),target_fixed:s,type:t}}_onClick(e,t){var n
if(void 0===t&&(t="click"),!Pn(e.target)&&ki(e)){var r=this._getProperties(e,t)
null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(p({},r,{type:"rageclick"})),this._capture(r)}}_onMouseMove(e){!Pn(e.target)&&ki(e)&&(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout(()=>{this._capture(this._getProperties(e,"mousemove"))},500))}_capture(e){if(v){var t=v.location.href,n=this.instance.config.mask_personal_data_properties,r=this.instance.config.custom_personal_data_properties,i=n?Nt([],ii,r||[]):[],s=ur(t,i,oi)
this._buffer=this._buffer||{},this._buffer[s]||(this._buffer[s]=[]),this._buffer[s].push(e)}}_flush(){this._buffer&&!G(this._buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class Si{constructor(e){this._instance=e}doPageView(e,t){var n,r=this._previousPageViewProperties(e,t)
return this._currentPageview={pathname:null!==(n=null==v?void 0:v.location.pathname)&&void 0!==n?n:"",pageViewId:t,timestamp:e},this._instance.scrollManager.resetContext(),r}doPageLeave(e){var t
return this._previousPageViewProperties(e,null==(t=this._currentPageview)?void 0:t.pageViewId)}doEvent(){var e
return{$pageview_id:null==(e=this._currentPageview)?void 0:e.pageViewId}}_previousPageViewProperties(e,t){var n=this._currentPageview
if(!n)return{$pageview_id:t}
var r={$pageview_id:t,$prev_pageview_id:n.pageViewId},i=this._instance.scrollManager.getContext()
if(i&&!this._instance.config.disable_scroll_properties){var{maxScrollHeight:s,lastScrollY:o,maxScrollY:a,maxContentHeight:l,lastContentY:c,maxContentY:u}=i
if(!(z(s)||z(o)||z(a)||z(l)||z(c)||z(u))){s=Math.ceil(s),o=Math.ceil(o),a=Math.ceil(a),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u)
var d=s<=1?1:se(o/s,0,1,Ot),f=s<=1?1:se(a/s,0,1,Ot),h=l<=1?1:se(c/l,0,1,Ot),p=l<=1?1:se(u/l,0,1,Ot)
r=Ft(r,{$prev_pageview_last_scroll:o,$prev_pageview_last_scroll_percentage:d,$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:f,$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:h,$prev_pageview_max_content:u,$prev_pageview_max_content_percentage:p})}}return n.pathname&&(r.$prev_pageview_pathname=n.pathname),n.timestamp&&(r.$prev_pageview_duration=(e.getTime()-n.timestamp.getTime())/1e3),r}}var Ei=Uint8Array,Ci=Uint16Array,Pi=Uint32Array,Li=new Ei([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ti=new Ei([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),$i=new Ei([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ii=function(e,t){for(var n=new Ci(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1]
var i=new Pi(n[30])
for(r=1;r<30;++r)for(var s=n[r];s<n[r+1];++s)i[s]=s-n[r]<<5|r
return[n,i]},Oi=Ii(Li,2),Ai=Oi[0],Mi=Oi[1]
Ai[28]=258,Mi[258]=28
for(var Ri=Ii(Ti,0)[1],ji=new Ci(32768),Fi=0;Fi<32768;++Fi){var Ni=(43690&Fi)>>>1|(21845&Fi)<<1
Ni=(61680&(Ni=(52428&Ni)>>>2|(13107&Ni)<<2))>>>4|(3855&Ni)<<4,ji[Fi]=((65280&Ni)>>>8|(255&Ni)<<8)>>>1}var Di=function(e,t,n){for(var r=e.length,i=0,s=new Ci(t);i<r;++i)++s[e[i]-1]
var o,a=new Ci(t)
for(i=0;i<t;++i)a[i]=a[i-1]+s[i-1]<<1
for(o=new Ci(r),i=0;i<r;++i)o[i]=ji[a[e[i]-1]++]>>>15-e[i]
return o},qi=new Ei(288)
for(Fi=0;Fi<144;++Fi)qi[Fi]=8
for(Fi=144;Fi<256;++Fi)qi[Fi]=9
for(Fi=256;Fi<280;++Fi)qi[Fi]=7
for(Fi=280;Fi<288;++Fi)qi[Fi]=8
var Bi=new Ei(32)
for(Fi=0;Fi<32;++Fi)Bi[Fi]=5
var Hi=Di(qi,9),Ui=Di(Bi,5),Gi=function(e){return(e/8|0)+(7&e&&1)},zi=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var r=new(e instanceof Ci?Ci:e instanceof Pi?Pi:Ei)(n-t)
return r.set(e.subarray(t,n)),r},Wi=function(e,t,n){n<<=7&t
var r=t/8|0
e[r]|=n,e[r+1]|=n>>>8},Vi=function(e,t,n){n<<=7&t
var r=t/8|0
e[r]|=n,e[r+1]|=n>>>8,e[r+2]|=n>>>16},Qi=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]})
var i=n.length,s=n.slice()
if(!i)return[new Ei(0),0]
if(1==i){var o=new Ei(n[0].s+1)
return o[n[0].s]=1,[o,1]}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=i-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var f=s[0].s
for(r=1;r<i;++r)s[r].s>f&&(f=s[r].s)
var h=new Ci(f+1),p=Ji(n[u-1],h,0)
if(p>t){r=0
var g=0,v=p-t,_=1<<v
for(s.sort(function(e,t){return h[t.s]-h[e.s]||e.f-t.f});r<i;++r){var m=s[r].s
if(!(h[m]>t))break
g+=_-(1<<p-h[m]),h[m]=t}for(g>>>=v;g>0;){var b=s[r].s
h[b]<t?g-=1<<t-h[b]++-1:++r}for(;r>=0&&g;--r){var y=s[r].s
h[y]==t&&(--h[y],++g)}p=t}return[new Ei(h),p]},Ji=function(e,t,n){return-1==e.s?Math.max(Ji(e.l,t,n+1),Ji(e.r,t,n+1)):t[e.s]=n},Ki=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new Ci(++t),r=0,i=e[0],s=1,o=function(e){n[r++]=e},a=1;a<=t;++a)if(e[a]==i&&a!=t)++s
else{if(!i&&s>2){for(;s>138;s-=138)o(32754)
s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(i),--s;s>6;s-=6)o(8304)
s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(i)
s=1,i=e[a]}return[n.subarray(0,r),t]},Yi=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r]
return n},Xi=function(e,t,n){var r=n.length,i=Gi(t+2)
e[i]=255&r,e[i+1]=r>>>8,e[i+2]=255^e[i],e[i+3]=255^e[i+1]
for(var s=0;s<r;++s)e[i+s+4]=n[s]
return 8*(i+4+r)},Zi=function(e,t,n,r,i,s,o,a,l,c,u){Wi(t,u++,n),++i[256]
for(var d=Qi(i,15),f=d[0],h=d[1],p=Qi(s,15),g=p[0],v=p[1],_=Ki(f),m=_[0],b=_[1],y=Ki(g),w=y[0],k=y[1],x=new Ci(19),S=0;S<m.length;++S)x[31&m[S]]++
for(S=0;S<w.length;++S)x[31&w[S]]++
for(var E=Qi(x,7),C=E[0],P=E[1],L=19;L>4&&!C[$i[L-1]];--L);var T,$,I,O,A=c+5<<3,M=Yi(i,qi)+Yi(s,Bi)+o,R=Yi(i,f)+Yi(s,g)+o+14+3*L+Yi(x,C)+(2*x[16]+3*x[17]+7*x[18])
if(A<=M&&A<=R)return Xi(t,u,e.subarray(l,l+c))
if(Wi(t,u,1+(R<M)),u+=2,R<M){T=Di(f,h),$=f,I=Di(g,v),O=g
var j=Di(C,P)
for(Wi(t,u,b-257),Wi(t,u+5,k-1),Wi(t,u+10,L-4),u+=14,S=0;S<L;++S)Wi(t,u+3*S,C[$i[S]])
u+=3*L
for(var F=[m,w],N=0;N<2;++N){var D=F[N]
for(S=0;S<D.length;++S){var q=31&D[S]
Wi(t,u,j[q]),u+=C[q],q>15&&(Wi(t,u,D[S]>>>5&127),u+=D[S]>>>12)}}}else T=Hi,$=qi,I=Ui,O=Bi
for(S=0;S<a;++S)if(r[S]>255){q=r[S]>>>18&31,Vi(t,u,T[q+257]),u+=$[q+257],q>7&&(Wi(t,u,r[S]>>>23&31),u+=Li[q])
var B=31&r[S]
Vi(t,u,I[B]),u+=O[B],B>3&&(Vi(t,u,r[S]>>>5&8191),u+=Ti[B])}else Vi(t,u,T[r[S]]),u+=$[r[S]]
return Vi(t,u,T[256]),u+$[256]},es=new Pi([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ts=function(){for(var e=new Pi(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),ns=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8}
function rs(e,t){void 0===t&&(t={})
var n=function(){var e=4294967295
return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=ts[255&n^t[r]]^n>>>8
e=n},d:function(){return 4294967295^e}}}(),r=e.length
n.p(e)
var i,s=function(e,t,n,r){return function(e,t,n,r,i){var s=e.length,o=new Ei(r+s+5*(1+Math.floor(s/7e3))+i),a=o.subarray(r,o.length-i),l=0
if(!t||s<8)for(var c=0;c<=s;c+=65535){var u=c+65535
u<s?l=Xi(a,l,e.subarray(c,u)):(a[c]=!0,l=Xi(a,l,e.subarray(c,s)))}else{for(var d=es[t-1],f=d>>>13,h=8191&d,p=(1<<n)-1,g=new Ci(32768),v=new Ci(p+1),_=Math.ceil(n/3),m=2*_,b=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<m)&p},y=new Pi(25e3),w=new Ci(288),k=new Ci(32),x=0,S=0,E=(c=0,0),C=0,P=0;c<s;++c){var L=b(c),T=32767&c,$=v[L]
if(g[T]=$,v[L]=T,C<=c){var I=s-c
if((x>7e3||E>24576)&&I>423){l=Zi(e,a,0,y,w,k,S,E,P,c-P,l),E=x=S=0,P=c
for(var O=0;O<286;++O)w[O]=0
for(O=0;O<30;++O)k[O]=0}var A=2,M=0,R=h,j=T-$&32767
if(I>2&&L==b(c-j))for(var F=Math.min(f,I)-1,N=Math.min(32767,c),D=Math.min(258,I);j<=N&&--R&&T!=$;){if(e[c+A]==e[c+A-j]){for(var q=0;q<D&&e[c+q]==e[c+q-j];++q);if(q>A){if(A=q,M=j,q>F)break
var B=Math.min(j,q-2),H=0
for(O=0;O<B;++O){var U=c-j+O+32768&32767,G=U-g[U]+32768&32767
G>H&&(H=G,$=U)}}}j+=(T=$)-($=g[T])+32768&32767}if(M){y[E++]=268435456|Mi[A]<<18|Ri[M]
var z=31&Mi[A],W=31&Ri[M]
S+=Li[z]+Ti[W],++w[257+z],++k[W],C=c+A,++x}else y[E++]=e[c],++w[e[c]]}}l=Zi(e,a,!0,y,w,k,S,E,P,c-P,l)}return zi(o,0,r+Gi(l)+i)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,r)}(e,t,10+((i=t).filename&&i.filename.length+1||0),8),o=s.length
return function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&ns(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var r=0;r<=n.length;++r)e[r+10]=n.charCodeAt(r)}}(s,t),ns(s,o-8,n.d()),ns(s,o-4,r),s}var is=!!E||!!S,ss="text/plain",os=function(e,t,n){var r
void 0===n&&(n=!0)
var[i,s]=e.split("?"),o=p({},t),a=null!==(r=null==s?void 0:s.split("&").map(e=>{var t,[r,i]=e.split("="),s=n&&null!==(t=o[r])&&void 0!==t?t:i
return delete o[r],r+"="+s}))&&void 0!==r?r:[],l=function(e,t){var n,r
void 0===t&&(t="&")
var i=[]
return jt(e,function(e,t){z(e)||z(t)||"undefined"===t||(n=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),r=encodeURIComponent(t),i[i.length]=r+"="+n)}),i.join(t)}(o)
return l&&a.push(l),i+"?"+a.join("&")},as=(e,t)=>JSON.stringify(e,(e,t)=>"bigint"==typeof t?t.toString():t,t),ls=e=>{var{data:t,compression:n}=e
if(t){if(n===ar.GZipJS){var r=rs(function(e){var t=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var n=new Ei(e.length+(e.length>>>1)),r=0,i=function(e){n[r++]=e},s=0;s<t;++s){if(r+5>n.length){var o=new Ei(r+8+(t-s<<1))
o.set(n),n=o}var a=e.charCodeAt(s)
a<128?i(a):a<2048?(i(192|a>>>6),i(128|63&a)):a>55295&&a<57344?(i(240|(a=65536+(1047552&a)|1023&e.charCodeAt(++s))>>>18),i(128|a>>>12&63),i(128|a>>>6&63),i(128|63&a)):(i(224|a>>>12),i(128|a>>>6&63),i(128|63&a))}return zi(n,0,r)}(as(t)),{mtime:0}),i=new Blob([r],{type:ss})
return{contentType:ss,body:i,estimatedSize:i.size}}if(n===ar.Base64){var s=function(e){var t,n,r,i,s,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,c="",u=[]
if(!e)return e
e=function(e){var t,n,r,i,s=""
for(t=n=0,r=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,i=0;i<r;i++){var o=e.charCodeAt(i),a=null
o<128?n++:a=o>127&&o<2048?String.fromCharCode(o>>6|192,63&o|128):String.fromCharCode(o>>12|224,o>>6&63|128,63&o|128),Q(a)||(n>t&&(s+=e.substring(t,n)),s+=a,t=n=i+1)}return n>t&&(s+=e.substring(t,e.length)),s}(e)
do{t=(s=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=s>>12&63,r=s>>6&63,i=63&s,u[l++]=o.charAt(t)+o.charAt(n)+o.charAt(r)+o.charAt(i)}while(a<e.length)
switch(c=u.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}(as(t)),o=(e=>"data="+encodeURIComponent("string"==typeof e?e:as(e)))(s)
return{contentType:"application/x-www-form-urlencoded",body:o,estimatedSize:new Blob([o]).size}}var a=as(t)
return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},cs=[]
S&&cs.push({transport:"fetch",method:e=>{var t,n,{contentType:r,body:i,estimatedSize:s}=null!==(t=ls(e))&&void 0!==t?t:{},o=new Headers
jt(e.headers,function(e,t){o.append(t,e)}),r&&o.append("Content-Type",r)
var a=e.url,l=null
if(C){var c=new C
l={signal:c.signal,timeout:setTimeout(()=>c.abort(),e.timeout)}}S(a,p({method:(null==e?void 0:e.method)||"GET",headers:o,keepalive:"POST"===e.method&&(s||0)<52428.8,body:i,signal:null==(n=l)?void 0:n.signal},e.fetchOptions)).then(t=>t.text().then(n=>{var r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){Ot.error(e)}null==e.callback||e.callback(r)})).catch(t=>{Ot.error(t),null==e.callback||e.callback({statusCode:0,text:t})}).finally(()=>l?clearTimeout(l.timeout):null)}}),E&&cs.push({transport:"XHR",method:e=>{var t,n=new E
n.open(e.method||"GET",e.url,!0)
var{contentType:r,body:i}=null!==(t=ls(e))&&void 0!==t?t:{}
jt(e.headers,function(e,t){n.setRequestHeader(t,e)}),r&&n.setRequestHeader("Content-Type",r),e.timeout&&(n.timeout=e.timeout),e.disableXHRCredentials||(n.withCredentials=!0),n.onreadystatechange=()=>{if(4===n.readyState){var t={statusCode:n.status,text:n.responseText}
if(200===n.status)try{t.json=JSON.parse(n.responseText)}catch(e){}null==e.callback||e.callback(t)}},n.send(i)}}),null!=w&&w.sendBeacon&&cs.push({transport:"sendBeacon",method:e=>{var t=os(e.url,{beacon:"1"})
try{var n,{contentType:r,body:i}=null!==(n=ls(e))&&void 0!==n?n:{},s="string"==typeof i?new Blob([i],{type:r}):i
w.sendBeacon(t,s)}catch(e){}}})
var us=function(e,t){if(!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t))return!1
try{return new RegExp(t).test(e)}catch(e){return!1}}
function ds(e,t,n){return as({distinct_id:e,userPropertiesToSet:t,userPropertiesToSetOnce:n})}var fs={exact:(e,t)=>t.some(t=>e.some(e=>t===e)),is_not:(e,t)=>t.every(t=>e.every(e=>t!==e)),regex:(e,t)=>t.some(t=>e.some(e=>us(t,e))),not_regex:(e,t)=>t.every(t=>e.every(e=>!us(t,e))),icontains:(e,t)=>t.map(hs).some(t=>e.map(hs).some(e=>t.includes(e))),not_icontains:(e,t)=>t.map(hs).every(t=>e.map(hs).every(e=>!t.includes(e))),gt:(e,t)=>t.some(t=>{var n=parseFloat(t)
return!isNaN(n)&&e.some(e=>n>parseFloat(e))}),lt:(e,t)=>t.some(t=>{var n=parseFloat(t)
return!isNaN(n)&&e.some(e=>n<parseFloat(e))})},hs=e=>e.toLowerCase()
function ps(e,t){return!e||Object.entries(e).every(e=>{var[n,r]=e,i=null==t?void 0:t[n]
if(z(i)||Q(i))return!1
var s=[String(i)],o=fs[r.operator]
return!!o&&o(r.values,s)})}var gs=At("[Error tracking]")
class vs{constructor(e){var t,n
this._suppressionRules=[],this._errorPropertiesBuilder=new at([new yt,new $t,new kt,new wt,new Lt,new Pt,new St,new Tt],bt("web:javascript",pt,_t)),this._instance=e,this._suppressionRules=null!==(t=null==(n=this._instance.persistence)?void 0:n.get_property(Zt))&&void 0!==t?t:[]}onRemoteConfig(e){var t,n,r,i=null!==(t=null==(n=e.errorTracking)?void 0:n.suppressionRules)&&void 0!==t?t:[],s=null==(r=e.errorTracking)?void 0:r.captureExtensionExceptions
this._suppressionRules=i,this._instance.persistence&&this._instance.persistence.register({[Zt]:this._suppressionRules,[en]:s})}get _captureExtensionExceptions(){var e,t=!!this._instance.get_property(en),n=this._instance.config.error_tracking.captureExtensionExceptions
return null!==(e=null!=n?n:t)&&void 0!==e&&e}buildProperties(e,t){return this._errorPropertiesBuilder.buildFromUnknown(e,{syntheticException:null==t?void 0:t.syntheticException,mechanism:{handled:null==t?void 0:t.handled}})}sendExceptionEvent(e){var t=e.$exception_list
if(this._isExceptionList(t)){if(this._matchesSuppressionRule(t))return void gs.info("Skipping exception capture because a suppression rule matched")
if(!this._captureExtensionExceptions&&this._isExtensionException(t))return void gs.info("Skipping exception capture because it was thrown by an extension")
if(!this._instance.config.error_tracking.__capturePostHogExceptions&&this._isPostHogException(t))return void gs.info("Skipping exception capture because it was thrown by the PostHog SDK")}return this._instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})}_matchesSuppressionRule(e){if(0===e.length)return!1
var t=e.reduce((e,t)=>{var{type:n,value:r}=t
return W(n)&&n.length>0&&e.$exception_types.push(n),W(r)&&r.length>0&&e.$exception_values.push(r),e},{$exception_types:[],$exception_values:[]})
return this._suppressionRules.some(e=>{var n=e.values.map(e=>{var n,r=fs[e.operator],i=B(e.value)?e.value:[e.value],s=null!==(n=t[e.key])&&void 0!==n?n:[]
return i.length>0&&r(i,s)})
return"OR"===e.type?n.some(Boolean):n.every(Boolean)})}_isExtensionException(e){return e.flatMap(e=>{var t,n
return null!==(t=null==(n=e.stacktrace)?void 0:n.frames)&&void 0!==t?t:[]}).some(e=>e.filename&&e.filename.startsWith("chrome-extension://"))}_isPostHogException(e){if(e.length>0){var t,n,r,i,s=null!==(t=null==(n=e[0].stacktrace)?void 0:n.frames)&&void 0!==t?t:[],o=s[s.length-1]
return null!==(r=null==o||null==(i=o.filename)?void 0:i.includes("posthog.com/static"))&&void 0!==r&&r}return!1}_isExceptionList(e){return!J(e)&&B(e)}}var _s=At("[FeatureFlags]"),ms=At("[FeatureFlags]",{debugEnabled:!0}),bs="$active_feature_flags",ys="$override_feature_flags",ws="$feature_flag_payloads",ks="$override_feature_flag_payloads",xs="$feature_flag_request_id",Ss="$feature_flag_evaluated_at",Es=e=>{var t={}
for(var[n,r]of Dt(e||{}))r&&(t[n]=r)
return t},Cs=function(e){return e.FeatureFlags="feature_flags",e.Recordings="recordings",e}({})
class Ps{constructor(e){this._override_warning=!1,this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this._instance=e,this.featureFlagEventHandlers=[]}_getValidEvaluationEnvironments(){var e=this._instance.config.evaluation_environments
return null!=e&&e.length?e.filter(e=>{var t=e&&"string"==typeof e&&e.trim().length>0
return t||_s.error("Invalid evaluation environment found:",e,"Expected non-empty string"),t}):[]}_shouldIncludeEvaluationEnvironments(){return this._getValidEvaluationEnvironments().length>0}flags(){if(this._instance.config.__preview_remote_config)this._flagsCalled=!0
else{var e=!this._reloadDebouncer&&(this._instance.config.advanced_disable_feature_flags||this._instance.config.advanced_disable_feature_flags_on_first_load)
this._callFlagsEndpoint({disableFlags:e})}}get hasLoadedFlags(){return this._hasLoadedFlags}getFlags(){return Object.keys(this.getFlagVariants())}getFlagsWithDetails(){var e=this._instance.get_property(dn),t=this._instance.get_property(ys),n=this._instance.get_property(ks)
if(!n&&!t)return e||{}
var r=Ft({},e||{}),i=[...new Set([...Object.keys(n||{}),...Object.keys(t||{})])]
for(var s of i){var o,a,l=r[s],c=null==t?void 0:t[s],u=z(c)?null!==(o=null==l?void 0:l.enabled)&&void 0!==o&&o:!!c,d=z(c)?l.variant:"string"==typeof c?c:void 0,f=null==n?void 0:n[s],h=p({},l,{enabled:u,variant:u?null!=d?d:null==l?void 0:l.variant:void 0})
u!==(null==l?void 0:l.enabled)&&(h.original_enabled=null==l?void 0:l.enabled),d!==(null==l?void 0:l.variant)&&(h.original_variant=null==l?void 0:l.variant),f&&(h.metadata=p({},null==l?void 0:l.metadata,{payload:f,original_payload:null==l||null==(a=l.metadata)?void 0:a.payload})),r[s]=h}return this._override_warning||(_s.warn(" Overriding feature flag details!",{flagDetails:e,overriddenPayloads:n,finalDetails:r}),this._override_warning=!0),r}getFlagVariants(){var e=this._instance.get_property(cn),t=this._instance.get_property(ys)
if(!t)return e||{}
for(var n=Ft({},e),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(_s.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){var e=this._instance.get_property(ws),t=this._instance.get_property(ks)
if(!t)return e||{}
for(var n=Ft({},e||{}),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(_s.warn(" Overriding feature flag payloads!",{flagPayloads:e,overriddenPayloads:t,finalPayloads:n}),this._override_warning=!0),n}reloadFeatureFlags(){this._reloadingDisabled||this._instance.config.advanced_disable_feature_flags||this._reloadDebouncer||(this._reloadDebouncer=setTimeout(()=>{this._callFlagsEndpoint()},5))}_clearDebouncer(){clearTimeout(this._reloadDebouncer),this._reloadDebouncer=void 0}ensureFlagsLoaded(){this._hasLoadedFlags||this._requestInFlight||this._reloadDebouncer||this.reloadFeatureFlags()}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this._reloadingDisabled=e}_callFlagsEndpoint(e){var t
if(this._clearDebouncer(),!this._instance._shouldDisableFlags())if(this._requestInFlight)this._additionalReloadRequested=!0
else{var n=this._instance.config.token,r=this._instance.get_property("$device_id"),i={token:n,distinct_id:this._instance.get_distinct_id(),groups:this._instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:p({},(null==(t=this._instance.persistence)?void 0:t.get_initial_props())||{},this._instance.get_property(fn)||{}),group_properties:this._instance.get_property(hn)}
Q(r)||z(r)||(i.$device_id=r),(null!=e&&e.disableFlags||this._instance.config.advanced_disable_feature_flags)&&(i.disable_flags=!0),this._shouldIncludeEvaluationEnvironments()&&(i.evaluation_environments=this._getValidEvaluationEnvironments())
var s=this._instance.config.__preview_remote_config,o=s?"/flags/?v=2":"/flags/?v=2&config=true",a=this._instance.config.advanced_only_evaluate_survey_feature_flags?"&only_evaluate_survey_feature_flags=true":"",l=this._instance.requestRouter.endpointFor("flags",o+a)
s&&(i.timezone=gi()),this._requestInFlight=!0,this._instance._send_request({method:"POST",url:l,data:i,compression:this._instance.config.disable_compression?void 0:ar.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:e=>{var t,n,r=!0
if(200===e.statusCode&&(this._additionalReloadRequested||(this.$anon_distinct_id=void 0),r=!1),this._requestInFlight=!1,this._flagsCalled||(this._flagsCalled=!0,this._instance._onRemoteConfig(null!==(n=e.json)&&void 0!==n?n:{})),!i.disable_flags||this._additionalReloadRequested)if(this._flagsLoadedFromRemote=!r,e.json&&null!=(t=e.json.quotaLimited)&&t.includes(Cs.FeatureFlags))_s.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.")
else{var s
i.disable_flags||this.receivedFeatureFlags(null!==(s=e.json)&&void 0!==s?s:{},r),this._additionalReloadRequested&&(this._additionalReloadRequested=!1,this._callFlagsEndpoint())}}})}}getFeatureFlag(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n=this.getFlagVariants()[e],r=""+n,i=this._instance.get_property(xs)||void 0,s=this._instance.get_property(Ss)||void 0,o=this._instance.get_property(vn)||{}
if((t.send_event||!("send_event"in t))&&(!(e in o)||!o[e].includes(r))){var a,l,c,u,d,f,h,p,g
B(o[e])?o[e].push(r):o[e]=[r],null==(a=this._instance.persistence)||a.register({[vn]:o})
var v=this.getFeatureFlagDetails(e),_={$feature_flag:e,$feature_flag_response:n,$feature_flag_payload:this.getFeatureFlagPayload(e)||null,$feature_flag_request_id:i,$feature_flag_evaluated_at:s,$feature_flag_bootstrapped_response:(null==(l=this._instance.config.bootstrap)||null==(l=l.featureFlags)?void 0:l[e])||null,$feature_flag_bootstrapped_payload:(null==(c=this._instance.config.bootstrap)||null==(c=c.featureFlagPayloads)?void 0:c[e])||null,$used_bootstrap_value:!this._flagsLoadedFromRemote}
z(null==v||null==(u=v.metadata)?void 0:u.version)||(_.$feature_flag_version=v.metadata.version)
var m,b=null!==(d=null==v||null==(f=v.reason)?void 0:f.description)&&void 0!==d?d:null==v||null==(h=v.reason)?void 0:h.code
b&&(_.$feature_flag_reason=b),null!=v&&null!=(p=v.metadata)&&p.id&&(_.$feature_flag_id=v.metadata.id),z(null==v?void 0:v.original_variant)&&z(null==v?void 0:v.original_enabled)||(_.$feature_flag_original_response=z(v.original_variant)?v.original_enabled:v.original_variant),null!=v&&null!=(g=v.metadata)&&g.original_payload&&(_.$feature_flag_original_payload=null==v||null==(m=v.metadata)?void 0:m.original_payload),this._instance.capture("$feature_flag_called",_)}return n}_s.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagDetails(e){return this.getFlagsWithDetails()[e]}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}getRemoteConfigPayload(e,t){var n=this._instance.config.token,r={distinct_id:this._instance.get_distinct_id(),token:n}
this._shouldIncludeEvaluationEnvironments()&&(r.evaluation_environments=this._getValidEvaluationEnvironments()),this._instance._send_request({method:"POST",url:this._instance.requestRouter.endpointFor("flags","/flags/?v=2&config=true"),data:r,compression:this._instance.config.disable_compression?void 0:ar.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:n=>{var r,i=null==(r=n.json)?void 0:r.featureFlagPayloads
t((null==i?void 0:i[e])||void 0)}})}isFeatureEnabled(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n=this.getFeatureFlag(e,t)
return z(n)?void 0:!!n}_s.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter(t=>t!==e)}receivedFeatureFlags(e,t){if(this._instance.persistence){this._hasLoadedFlags=!0
var n=this.getFlagVariants(),r=this.getFlagPayloads(),i=this.getFlagsWithDetails()
!function(e,t,n,r,i){void 0===n&&(n={}),void 0===r&&(r={}),void 0===i&&(i={})
var s=(e=>{var t=e.flags
return t?(e.featureFlags=Object.fromEntries(Object.keys(t).map(e=>{var n
return[e,null!==(n=t[e].variant)&&void 0!==n?n:t[e].enabled]})),e.featureFlagPayloads=Object.fromEntries(Object.keys(t).filter(e=>t[e].enabled).filter(e=>{var n
return null==(n=t[e].metadata)?void 0:n.payload}).map(e=>{var n
return[e,null==(n=t[e].metadata)?void 0:n.payload]}))):_s.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"),e})(e),o=s.flags,a=s.featureFlags,l=s.featureFlagPayloads
if(a){var c=e.requestId,u=e.evaluatedAt
if(B(a)){_s.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.")
var d={}
if(a)for(var f=0;f<a.length;f++)d[a[f]]=!0
t&&t.register({[bs]:a,[cn]:d})}else{var h=a,g=l,v=o
e.errorsWhileComputingFlags&&(h=p({},n,h),g=p({},r,g),v=p({},i,v)),t&&t.register(p({[bs]:Object.keys(Es(h)),[cn]:h||{},[ws]:g||{},[dn]:v||{}},c?{[xs]:c}:{},u?{[Ss]:u}:{}))}}}(e,this._instance.persistence,n,r,i),this._fireFeatureFlagsCallbacks(t)}}override(e,t){void 0===t&&(t=!1),_s.warn("override is deprecated. Please use overrideFeatureFlags instead."),this.overrideFeatureFlags({flags:e,suppressWarning:t})}overrideFeatureFlags(e){if(!this._instance.__loaded||!this._instance.persistence)return _s.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags")
if(!1===e)return this._instance.persistence.unregister(ys),this._instance.persistence.unregister(ks),this._fireFeatureFlagsCallbacks(),ms.info("All overrides cleared")
if(e&&"object"==typeof e&&("flags"in e||"payloads"in e)){var t,n=e
if(this._override_warning=Boolean(null!==(t=n.suppressWarning)&&void 0!==t&&t),"flags"in n)if(!1===n.flags)this._instance.persistence.unregister(ys),ms.info("Flag overrides cleared")
else if(n.flags){if(B(n.flags)){for(var r={},i=0;i<n.flags.length;i++)r[n.flags[i]]=!0
this._instance.persistence.register({[ys]:r})}else this._instance.persistence.register({[ys]:n.flags})
ms.info("Flag overrides set",{flags:n.flags})}return"payloads"in n&&(!1===n.payloads?(this._instance.persistence.unregister(ks),ms.info("Payload overrides cleared")):n.payloads&&(this._instance.persistence.register({[ks]:n.payloads}),ms.info("Payload overrides set",{payloads:n.payloads}))),void this._fireFeatureFlagsCallbacks()}this._fireFeatureFlagsCallbacks()}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this._hasLoadedFlags){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t,n){var r,i=(this._instance.get_property(un)||[]).find(t=>t.flagKey===e),s={["$feature_enrollment/"+e]:t},o={$feature_flag:e,$feature_enrollment:t,$set:s}
i&&(o.$early_access_feature_name=i.name),n&&(o.$feature_enrollment_stage=n),this._instance.capture("$feature_enrollment_update",o),this.setPersonPropertiesForFlags(s,!1)
var a=p({},this.getFlagVariants(),{[e]:t})
null==(r=this._instance.persistence)||r.register({[bs]:Object.keys(Es(a)),[cn]:a}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e,t,n){void 0===t&&(t=!1)
var r=this._instance.get_property(un),i=n?"&"+n.map(e=>"stage="+e).join("&"):""
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/early_access_features/?token="+this._instance.config.token+i),method:"GET",callback:t=>{var n,r
if(t.json){var i=t.json.earlyAccessFeatures
return null==(n=this._instance.persistence)||n.unregister(un),null==(r=this._instance.persistence)||r.register({[un]:i}),e(i)}}})}_prepareFeatureFlagsForCallbacks(){var e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter(e=>t[e]),flagVariants:Object.keys(t).filter(e=>t[e]).reduce((e,n)=>(e[n]=t[n],e),{})}}_fireFeatureFlagsCallbacks(e){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach(r=>r(t,n,{errorsLoading:e}))}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(fn)||{}
this._instance.register({[fn]:p({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this._instance.unregister(fn)}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(hn)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach(t=>{n[t]=p({},n[t],e[t]),delete e[t]}),this._instance.register({[hn]:p({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){var t=this._instance.get_property(hn)||{}
this._instance.register({[hn]:p({},t,{[e]:{}})})}else this._instance.unregister(hn)}reset(){this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this.$anon_distinct_id=void 0,this._clearDebouncer(),this._override_warning=!1}}var Ls=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class Ts{constructor(e,t){this._config=e,this.props={},this._campaign_params_saved=!1,this._name=(e=>{var t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this._storage=this._buildStorage(e),this.load(),e.debug&&Ot.info("Persistence loaded",e.persistence,p({},this.props)),this.update_config(e,e,t),this.save()}isDisabled(){return!!this._disabled}_buildStorage(e){-1===Ls.indexOf(e.persistence.toLowerCase())&&(Ot.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
var t=e.persistence.toLowerCase()
return"localstorage"===t&&Tr._is_supported()?Tr:"localstorage+cookie"===t&&Ir._is_supported()?Ir:"sessionstorage"===t&&Rr._is_supported()?Rr:"memory"===t?Ar:"cookie"===t?Pr:Ir._is_supported()?Ir:Pr}properties(){var e={}
return jt(this.props,function(t,n){if(n===cn&&U(t))for(var r=Object.keys(t),i=0;i<r.length;i++)e["$feature/"+r[i]]=t[r[i]]
else o=n,a=!1,(Q(s=Cn)?a:y&&s.indexOf===y?-1!=s.indexOf(o):(jt(s,function(e){if(a||(a=e===o))return Mt}),a))||(e[n]=t)
var s,o,a}),e}load(){if(!this._disabled){var e=this._storage._parse(this._name)
e&&(this.props=Ft({},e))}}save(){this._disabled||this._storage._set(this._name,this.props,this._expire_days,this._cross_subdomain,this._secure,this._config.debug)}remove(){this._storage._remove(this._name,!1),this._storage._remove(this._name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(U(e)){z(t)&&(t="None"),this._expire_days=z(n)?this._default_expiry:n
var r=!1
if(jt(e,(e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,r=!0)}),r)return this.save(),!0}return!1}register(e,t){if(U(e)){this._expire_days=z(t)?this._default_expiry:t
var n=!1
if(jt(e,(t,r)=>{e.hasOwnProperty(r)&&this.props[r]!==t&&(this.props[r]=t,n=!0)}),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this._campaign_params_saved){var e=li(this._config.custom_campaign_params,this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)
G(Ht(e))||this.register(e),this._campaign_params_saved=!0}}update_search_keyword(){var e
this.register((e=null==k?void 0:k.referrer)?ui(e):{})}update_referrer_info(){var e
this.register_once({$referrer:fi(),$referring_domain:null!=k&&k.referrer&&(null==(e=lr(k.referrer))?void 0:e.host)||"$direct"},void 0)}set_initial_person_info(){this.props[yn]||this.props[wn]||this.register_once({[kn]:hi(this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)},void 0)}get_initial_props(){var e={}
jt([wn,yn],t=>{var n=this.props[t]
n&&jt(n,function(t,n){e["$initial_"+j(n)]=t})})
var t,n,r=this.props[kn]
if(r){var i=(t=pi(r),n={},jt(t,function(e,t){n["$initial_"+j(t)]=e}),n)
Ft(e,i)}return e}safe_merge(e){return jt(this.props,function(t,n){n in e||(e[n]=t)}),e}update_config(e,t,n){if(this._default_expiry=this._expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence||!!n),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var r=this._buildStorage(e),i=this.props
this.clear(),this._storage=r,this.props=i,this.save()}}set_disabled(e){this._disabled=e,this._disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this._cross_subdomain&&(this._cross_subdomain=e,this.remove(),this.save())}set_secure(e){e!==this._secure&&(this._secure=e,this.remove(),this.save())}set_event_timer(e,t){var n=this.props[Jt]||{}
n[e]=t,this.props[Jt]=n,this.save()}remove_event_timer(e){var t=(this.props[Jt]||{})[e]
return z(t)||(delete this.props[Jt][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}var $s=At("[Product Tours]"),Is="ph_product_tours"
class Os{constructor(e){this._productTourManager=null,this._cachedTours=null,this._instance=e}onRemoteConfig(e){this._instance.persistence&&this._instance.persistence.register({[rn]:!(null==e||!e.productTours)}),this.loadIfEnabled()}loadIfEnabled(){var e,t
this._productTourManager||(e=this._instance).config.disable_product_tours||null==(t=e.persistence)||!t.get_property(rn)||this._loadScript(()=>this._startProductTours())}_loadScript(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.generateProductTours?e():null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"product-tours",t=>{t?$s.error("Could not load product tours script",t):e()})}_startProductTours(){var e
!this._productTourManager&&null!=(e=L.__PosthogExtensions__)&&e.generateProductTours&&(this._productTourManager=L.__PosthogExtensions__.generateProductTours(this._instance,!0)||null)}getProductTours(e,t){if(void 0===t&&(t=!1),!B(this._cachedTours)||t){var n=this._instance.persistence
if(n){var r=n.props[Is]
if(B(r)&&!t)return this._cachedTours=r,void e(r,{isLoaded:!0})}this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/product_tours/?token="+this._instance.config.token),method:"GET",callback:t=>{var r=t.statusCode
if(200!==r||!t.json){var i="Product Tours API could not be loaded, status: "+r
return $s.error(i),void e([],{isLoaded:!1,error:i})}var s=B(t.json.product_tours)?t.json.product_tours:[]
this._cachedTours=s,n&&n.register({[Is]:s}),e(s,{isLoaded:!0})}})}else e(this._cachedTours,{isLoaded:!0})}getActiveProductTours(e){J(this._productTourManager)?e([],{isLoaded:!1,error:"Product tours not loaded"}):this._productTourManager.getActiveProductTours(e)}showProductTour(e){var t
null==(t=this._productTourManager)||t.showTourById(e)}dismissProductTour(){var e
null==(e=this._productTourManager)||e.dismissTour("user_clicked_skip")}nextStep(){var e
null==(e=this._productTourManager)||e.nextStep()}previousStep(){var e
null==(e=this._productTourManager)||e.previousStep()}clearCache(){var e
this._cachedTours=null,null==(e=this._instance.persistence)||e.unregister(Is)}resetTour(e){var t
null==(t=this._productTourManager)||t.resetTour(e)}resetAllTours(){var e
null==(e=this._productTourManager)||e.resetAllTours()}}var As=function(e){return e.Activation="events",e.Cancellation="cancelEvents",e}({})
!function(e){e.Button="button",e.Tab="tab",e.Selector="selector"}({}),function(e){e.TopLeft="top_left",e.TopRight="top_right",e.TopCenter="top_center",e.MiddleLeft="middle_left",e.MiddleRight="middle_right",e.MiddleCenter="middle_center",e.Left="left",e.Center="center",e.Right="right",e.NextToTrigger="next_to_trigger"}({}),function(e){e.Top="top",e.Left="left",e.Right="right",e.Bottom="bottom"}({})
var Ms=function(e){return e.Popover="popover",e.API="api",e.Widget="widget",e.ExternalSurvey="external_survey",e}({})
!function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}({}),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}({}),function(e){e.Once="once",e.Recurring="recurring",e.Always="always"}({})
var Rs=function(e){return e.SHOWN="survey shown",e.DISMISSED="survey dismissed",e.SENT="survey sent",e}({}),js=function(e){return e.SURVEY_ID="$survey_id",e.SURVEY_NAME="$survey_name",e.SURVEY_RESPONSE="$survey_response",e.SURVEY_ITERATION="$survey_iteration",e.SURVEY_ITERATION_START_DATE="$survey_iteration_start_date",e.SURVEY_PARTIALLY_COMPLETED="$survey_partially_completed",e.SURVEY_SUBMISSION_ID="$survey_submission_id",e.SURVEY_QUESTIONS="$survey_questions",e.SURVEY_COMPLETED="$survey_completed",e.PRODUCT_TOUR_ID="$product_tour_id",e}({}),Fs=function(e){return e.Popover="popover",e.Inline="inline",e}({})
class Ns{constructor(){this._events={},this._events={}}on(e,t){return this._events[e]||(this._events[e]=[]),this._events[e].push(t),()=>{this._events[e]=this._events[e].filter(e=>e!==t)}}emit(e,t){for(var n of this._events[e]||[])n(t)
for(var r of this._events["*"]||[])r(e,t)}}function Ds(e,t,n){if(J(e))return!1
switch(n){case"exact":return e===t
case"contains":var r=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/_/g,".").replace(/%/g,".*")
return new RegExp(r,"i").test(e)
case"regex":try{return new RegExp(t).test(e)}catch(e){return!1}default:return!1}}class qs{constructor(e){this._debugEventEmitter=new Ns,this._checkStep=(e,t)=>this._checkStepEvent(e,t)&&this._checkStepUrl(e,t)&&this._checkStepElement(e,t)&&this._checkStepProperties(e,t),this._checkStepEvent=(e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event),this._instance=e,this._actionEvents=new Set,this._actionRegistry=new Set}init(){var e,t
z(null==(e=this._instance)?void 0:e._addCaptureHook)||(null==(t=this._instance)||t._addCaptureHook((e,t)=>{this.on(e,t)}))}register(e){var t,n
if(!z(null==(t=this._instance)?void 0:t._addCaptureHook)&&(e.forEach(e=>{var t,n
null==(t=this._actionRegistry)||t.add(e),null==(n=e.steps)||n.forEach(e=>{var t
null==(t=this._actionEvents)||t.add((null==e?void 0:e.event)||"")})}),null!=(n=this._instance)&&n.autocapture)){var r,i=new Set
e.forEach(e=>{var t
null==(t=e.steps)||t.forEach(e=>{null!=e&&e.selector&&i.add(null==e?void 0:e.selector)})}),null==(r=this._instance)||r.autocapture.setElementSelectors(i)}}on(e,t){var n
null!=t&&0!=e.length&&(this._actionEvents.has(e)||this._actionEvents.has(null==t?void 0:t.event))&&this._actionRegistry&&(null==(n=this._actionRegistry)?void 0:n.size)>0&&this._actionRegistry.forEach(e=>{this._checkAction(t,e)&&this._debugEventEmitter.emit("actionCaptured",e.name)})}_addActionHook(e){this.onAction("actionCaptured",t=>e(t))}_checkAction(e,t){if(null==(null==t?void 0:t.steps))return!1
for(var n of t.steps)if(this._checkStep(e,n))return!0
return!1}onAction(e,t){return this._debugEventEmitter.on(e,t)}_checkStepUrl(e,t){if(null!=t&&t.url){var n,r=null==e||null==(n=e.properties)?void 0:n.$current_url
if(!r||"string"!=typeof r)return!1
if(!Ds(r,t.url,t.url_matching||"contains"))return!1}return!0}_checkStepElement(e,t){return!!this._checkStepHref(e,t)&&!!this._checkStepText(e,t)&&!!this._checkStepSelector(e,t)}_checkStepHref(e,t){var n
if(null==t||!t.href)return!0
var r=this._getElementsList(e)
if(r.length>0)return r.some(e=>Ds(e.href,t.href,t.href_matching||"exact"))
var i,s=(null==e||null==(n=e.properties)?void 0:n.$elements_chain)||""
return!!s&&Ds((i=s.match(/(?::|")href="(.*?)"/))?i[1]:"",t.href,t.href_matching||"exact")}_checkStepText(e,t){var n
if(null==t||!t.text)return!0
var r=this._getElementsList(e)
if(r.length>0)return r.some(e=>Ds(e.text,t.text,t.text_matching||"exact")||Ds(e.$el_text,t.text,t.text_matching||"exact"))
var i,s,o,a=(null==e||null==(n=e.properties)?void 0:n.$elements_chain)||""
return!!a&&(i=function(e){for(var t,n=[],r=/(?::|")text="(.*?)"/g;!J(t=r.exec(e));)n.includes(t[1])||n.push(t[1])
return n}(a),s=t.text,o=t.text_matching||"exact",i.some(e=>Ds(e,s,o)))}_checkStepSelector(e,t){var n,r
if(null==t||!t.selector)return!0
var i=null==e||null==(n=e.properties)?void 0:n.$element_selectors
if(null!=i&&i.includes(t.selector))return!0
var s=(null==e||null==(r=e.properties)?void 0:r.$elements_chain)||""
if(t.selector_regex&&s)try{return new RegExp(t.selector_regex).test(s)}catch(e){return!1}return!1}_getElementsList(e){var t
return null==(null==e||null==(t=e.properties)?void 0:t.$elements)?[]:null==e?void 0:e.properties.$elements}_checkStepProperties(e,t){return null==t||!t.properties||0===t.properties.length||ps(t.properties.reduce((e,t)=>{var n=B(t.value)?t.value.map(String):null!=t.value?[String(t.value)]:[]
return e[t.key]={values:n,operator:t.operator||"exact"},e},{}),null==e?void 0:e.properties)}}var Bs=At("[Surveys]"),Hs="seenSurvey_",Us=(e,t)=>{var n="$survey_"+t+"/"+e.id
return e.current_iteration&&e.current_iteration>0&&(n="$survey_"+t+"/"+e.id+"/"+e.current_iteration),n},Gs=e=>{var t=""+Hs+e.id
return e.current_iteration&&e.current_iteration>0&&(t=""+Hs+e.id+"_"+e.current_iteration),t},zs=[Ms.Popover,Ms.Widget,Ms.API],Ws={ignoreConditions:!1,ignoreDelay:!1,displayType:Fs.Popover}
class Vs{constructor(e){this._instance=e,this._eventToSurveys=new Map,this._cancelEventToSurveys=new Map,this._actionToSurveys=new Map}_doesEventMatchFilter(e,t){return!!e&&ps(e.propertyFilters,null==t?void 0:t.properties)}_buildEventToSurveyMap(e,t){var n=new Map
return e.forEach(e=>{var r
null==(r=e.conditions)||null==(r=r[t])||null==(r=r.values)||r.forEach(t=>{if(null!=t&&t.name){var r=n.get(t.name)||[]
r.push(e.id),n.set(t.name,r)}})}),n}_getMatchingSurveys(e,t,n){var r,i=(n===As.Activation?this._eventToSurveys:this._cancelEventToSurveys).get(e),s=[]
return null==(r=this._instance)||r.getSurveys(e=>{s=e.filter(e=>null==i?void 0:i.includes(e.id))}),s.filter(r=>{var i,s=null==(i=r.conditions)||null==(i=i[n])||null==(i=i.values)?void 0:i.find(t=>t.name===e)
return this._doesEventMatchFilter(s,t)})}register(e){var t
z(null==(t=this._instance)?void 0:t._addCaptureHook)||(this._setupEventBasedSurveys(e),this._setupActionBasedSurveys(e))}_setupActionBasedSurveys(e){var t=e.filter(e=>{var t,n
return(null==(t=e.conditions)?void 0:t.actions)&&(null==(n=e.conditions)||null==(n=n.actions)||null==(n=n.values)?void 0:n.length)>0})
0!==t.length&&(null==this._actionMatcher&&(this._actionMatcher=new qs(this._instance),this._actionMatcher.init(),this._actionMatcher._addActionHook(e=>{this.onAction(e)})),t.forEach(e=>{var t,n,r,i,s
e.conditions&&null!=(t=e.conditions)&&t.actions&&null!=(n=e.conditions)&&null!=(n=n.actions)&&n.values&&(null==(r=e.conditions)||null==(r=r.actions)||null==(r=r.values)?void 0:r.length)>0&&(null==(i=this._actionMatcher)||i.register(e.conditions.actions.values),null==(s=e.conditions)||null==(s=s.actions)||null==(s=s.values)||s.forEach(t=>{if(t&&t.name){var n=this._actionToSurveys.get(t.name)
n&&n.push(e.id),this._actionToSurveys.set(t.name,n||[e.id])}}))}))}_setupEventBasedSurveys(e){var t,n=e.filter(e=>{var t,n
return(null==(t=e.conditions)?void 0:t.events)&&(null==(n=e.conditions)||null==(n=n.events)||null==(n=n.values)?void 0:n.length)>0}),r=e.filter(e=>{var t,n
return(null==(t=e.conditions)?void 0:t.cancelEvents)&&(null==(n=e.conditions)||null==(n=n.cancelEvents)||null==(n=n.values)?void 0:n.length)>0})
0===n.length&&0===r.length||(null==(t=this._instance)||t._addCaptureHook((e,t)=>{this.onEvent(e,t)}),this._eventToSurveys=this._buildEventToSurveyMap(e,As.Activation),this._cancelEventToSurveys=this._buildEventToSurveyMap(e,As.Cancellation))}onEvent(e,t){var n,r=(null==(n=this._instance)||null==(n=n.persistence)?void 0:n.props[gn])||[]
if(Rs.SHOWN===e&&t&&r.length>0){var i
Bs.info("survey event matched, removing survey from activated surveys",{event:e,eventPayload:t,existingActivatedSurveys:r})
var s=null==t||null==(i=t.properties)?void 0:i.$survey_id
if(s){var o=r.indexOf(s)
o>=0&&(r.splice(o,1),this._updateActivatedSurveys(r))}}else{if(this._cancelEventToSurveys.has(e)){var a=this._getMatchingSurveys(e,t,As.Cancellation)
a.length>0&&(Bs.info("cancel event matched, cancelling surveys",{event:e,surveysToCancel:a.map(e=>e.id)}),a.forEach(e=>{var t,n=r.indexOf(e.id)
n>=0&&r.splice(n,1),null==(t=this._instance)||t.cancelPendingSurvey(e.id)}),this._updateActivatedSurveys(r))}if(this._eventToSurveys.has(e)){Bs.info("survey event name matched",{event:e,eventPayload:t,surveys:this._eventToSurveys.get(e)})
var l=this._getMatchingSurveys(e,t,As.Activation)
this._updateActivatedSurveys(r.concat(l.map(e=>e.id)||[]))}}}onAction(e){var t,n=(null==(t=this._instance)||null==(t=t.persistence)?void 0:t.props[gn])||[]
this._actionToSurveys.has(e)&&this._updateActivatedSurveys(n.concat(this._actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t
Bs.info("updating activated surveys",{activatedSurveys:e}),null==(t=this._instance)||null==(t=t.persistence)||t.register({[gn]:[...new Set(e)]})}getSurveys(){var e
return(null==(e=this._instance)||null==(e=e.persistence)?void 0:e.props[gn])||[]}getEventToSurveys(){return this._eventToSurveys}_getActionMatcher(){return this._actionMatcher}}class Qs{constructor(e){this._isSurveysEnabled=void 0,this._surveyManager=null,this._isFetchingSurveys=!1,this._isInitializingSurveys=!1,this._surveyCallbacks=[],this._instance=e,this._surveyEventReceiver=null}onRemoteConfig(e){if(!this._instance.config.disable_surveys){var t=e.surveys
if(J(t))return Bs.warn("Flags not loaded yet. Not loading surveys.")
var n=B(t)
this._isSurveysEnabled=n?t.length>0:t,Bs.info("flags response received, isSurveysEnabled: "+this._isSurveysEnabled),this.loadIfEnabled()}}reset(){localStorage.removeItem("lastSeenSurveyDate")
for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t);(null!=n&&n.startsWith(Hs)||null!=n&&n.startsWith("inProgressSurvey_"))&&e.push(n)}e.forEach(e=>localStorage.removeItem(e))}loadIfEnabled(){if(!this._surveyManager)if(this._isInitializingSurveys)Bs.info("Already initializing surveys, skipping...")
else if(this._instance.config.disable_surveys)Bs.info("Disabled. Not loading surveys.")
else if(this._instance.config.cookieless_mode&&this._instance.consent.isOptedOut())Bs.info("Not loading surveys in cookieless mode without consent.")
else{var e=null==L?void 0:L.__PosthogExtensions__
if(e){if(!z(this._isSurveysEnabled)||this._instance.config.advanced_enable_surveys){var t=this._isSurveysEnabled||this._instance.config.advanced_enable_surveys
this._isInitializingSurveys=!0
try{var n=e.generateSurveys
if(n)return void this._completeSurveyInitialization(n,t)
var r=e.loadExternalDependency
if(!r)return void this._handleSurveyLoadError("PostHog loadExternalDependency extension not found.")
r(this._instance,"surveys",n=>{n||!e.generateSurveys?this._handleSurveyLoadError("Could not load surveys script",n):this._completeSurveyInitialization(e.generateSurveys,t)})}catch(e){throw this._handleSurveyLoadError("Error initializing surveys",e),e}finally{this._isInitializingSurveys=!1}}}else Bs.error("PostHog Extensions not found.")}}_completeSurveyInitialization(e,t){this._surveyManager=e(this._instance,t),this._surveyEventReceiver=new Vs(this._instance),Bs.info("Surveys loaded successfully"),this._notifySurveyCallbacks({isLoaded:!0})}_handleSurveyLoadError(e,t){Bs.error(e,t),this._notifySurveyCallbacks({isLoaded:!1,error:e})}onSurveysLoaded(e){return this._surveyCallbacks.push(e),this._surveyManager&&this._notifySurveyCallbacks({isLoaded:!0}),()=>{this._surveyCallbacks=this._surveyCallbacks.filter(t=>t!==e)}}getSurveys(e,t){if(void 0===t&&(t=!1),this._instance.config.disable_surveys)return Bs.info("Disabled. Not loading surveys."),e([])
var n=this._instance.get_property(pn)
if(n&&!t)return e(n,{isLoaded:!0})
if(this._isFetchingSurveys)return e([],{isLoaded:!1,error:"Surveys are already being loaded"})
try{this._isFetchingSurveys=!0,this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/surveys/?token="+this._instance.config.token),method:"GET",timeout:this._instance.config.surveys_request_timeout_ms,callback:t=>{var n
this._isFetchingSurveys=!1
var r=t.statusCode
if(200!==r||!t.json){var i="Surveys API could not be loaded, status: "+r
return Bs.error(i),e([],{isLoaded:!1,error:i})}var s,o=t.json.surveys||[],a=o.filter(e=>function(e){return!(!e.start_date||e.end_date)}(e)&&(function(e){var t
return!(null==(t=e.conditions)||null==(t=t.events)||null==(t=t.values)||!t.length)}(e)||function(e){var t
return!(null==(t=e.conditions)||null==(t=t.actions)||null==(t=t.values)||!t.length)}(e)))
return a.length>0&&(null==(s=this._surveyEventReceiver)||s.register(a)),null==(n=this._instance.persistence)||n.register({[pn]:o}),e(o,{isLoaded:!0})}})}catch(e){throw this._isFetchingSurveys=!1,e}}_notifySurveyCallbacks(e){for(var t of this._surveyCallbacks)try{if(!e.isLoaded)return t([],e)
this.getSurveys(t)}catch(e){Bs.error("Error in survey callback",e)}}getActiveMatchingSurveys(e,t){if(void 0===t&&(t=!1),!J(this._surveyManager))return this._surveyManager.getActiveMatchingSurveys(e,t)
Bs.warn("init was not called")}_getSurveyById(e){var t=null
return this.getSurveys(n=>{var r
t=null!==(r=n.find(t=>t.id===e))&&void 0!==r?r:null}),t}_checkSurveyEligibility(e){if(J(this._surveyManager))return{eligible:!1,reason:"SDK is not enabled or survey functionality is not yet loaded"}
var t="string"==typeof e?this._getSurveyById(e):e
return t?this._surveyManager.checkSurveyEligibility(t):{eligible:!1,reason:"Survey not found"}}canRenderSurvey(e){if(J(this._surveyManager))return Bs.warn("init was not called"),{visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"}
var t=this._checkSurveyEligibility(e)
return{visible:t.eligible,disabledReason:t.reason}}canRenderSurveyAsync(e,t){return J(this._surveyManager)?(Bs.warn("init was not called"),Promise.resolve({visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"})):new Promise(n=>{this.getSurveys(t=>{var r,i=null!==(r=t.find(t=>t.id===e))&&void 0!==r?r:null
if(i){var s=this._checkSurveyEligibility(i)
n({visible:s.eligible,disabledReason:s.reason})}else n({visible:!1,disabledReason:"Survey not found"})},t)})}renderSurvey(e,t){var n
if(J(this._surveyManager))Bs.warn("init was not called")
else{var r="string"==typeof e?this._getSurveyById(e):e
if(null!=r&&r.id)if(zs.includes(r.type)){var i=null==k?void 0:k.querySelector(t)
if(i)return null!=(n=r.appearance)&&n.surveyPopupDelaySeconds?(Bs.info("Rendering survey "+r.id+" with delay of "+r.appearance.surveyPopupDelaySeconds+" seconds"),void setTimeout(()=>{var e,t
Bs.info("Rendering survey "+r.id+" with delay of "+(null==(e=r.appearance)?void 0:e.surveyPopupDelaySeconds)+" seconds"),null==(t=this._surveyManager)||t.renderSurvey(r,i),Bs.info("Survey "+r.id+" rendered")},1e3*r.appearance.surveyPopupDelaySeconds)):void this._surveyManager.renderSurvey(r,i)
Bs.warn("Survey element not found")}else Bs.warn("Surveys of type "+r.type+" cannot be rendered in the app")
else Bs.warn("Survey not found")}}displaySurvey(e,t){var n
if(J(this._surveyManager))Bs.warn("init was not called")
else{var r=this._getSurveyById(e)
if(r){var i=r
if(null!=(n=r.appearance)&&n.surveyPopupDelaySeconds&&t.ignoreDelay&&(i=p({},r,{appearance:p({},r.appearance,{surveyPopupDelaySeconds:0})})),!1===t.ignoreConditions){var s=this.canRenderSurvey(r)
if(!s.visible)return void Bs.warn("Survey is not eligible to be displayed: ",s.disabledReason)}t.displayType!==Fs.Inline?this._surveyManager.handlePopoverSurvey(i):this.renderSurvey(i,t.selector)}else Bs.warn("Survey not found")}}cancelPendingSurvey(e){J(this._surveyManager)?Bs.warn("init was not called"):this._surveyManager.cancelSurvey(e)}}var Js=At("[Conversations]")
class Ks{constructor(e){this._isConversationsEnabled=void 0,this._conversationsManager=null,this._isInitializing=!1,this._remoteConfig=null,this._instance=e}onRemoteConfig(e){if(!this._instance.config.disable_conversations){var t=e.conversations
J(t)||(Y(t)?this._isConversationsEnabled=t:(this._isConversationsEnabled=t.enabled,this._remoteConfig=t),this.loadIfEnabled())}}reset(){var e
null==(e=this._conversationsManager)||e.reset(),this._conversationsManager=null,this._isConversationsEnabled=void 0,this._remoteConfig=null}loadIfEnabled(){if(!this._conversationsManager&&!this._isInitializing&&!(this._instance.config.disable_conversations||this._instance.config.cookieless_mode&&this._instance.consent.isOptedOut())){var e=null==L?void 0:L.__PosthogExtensions__
if(e&&!z(this._isConversationsEnabled)&&this._isConversationsEnabled)if(this._remoteConfig&&this._remoteConfig.token){if(function(e){var t
if(!e||0===e.length)return!0
var n=null==v||null==(t=v.location)?void 0:t.hostname
return!n||e.some(e=>{var t=function(e){var t=e.replace(/^https?:\/\//,"")
return(t=t.split("/")[0].split("?")[0].split(":")[0])||null}(e)
if(!t)return!1
if(t.startsWith("*.")){var r=t.slice(2)
return n.endsWith("."+r)||n===r}return n===t})}(this._remoteConfig.domains)){this._isInitializing=!0
try{var t=e.initConversations
if(t)return this._completeInitialization(t),void(this._isInitializing=!1)
var n=e.loadExternalDependency
if(!n)return void this._handleLoadError("PostHog loadExternalDependency extension not found.")
n(this._instance,"conversations",t=>{t||!e.initConversations?this._handleLoadError("Could not load conversations script",t):this._completeInitialization(e.initConversations),this._isInitializing=!1})}catch(e){this._handleLoadError("Error initializing conversations",e),this._isInitializing=!1}}}else Js.error("Conversations enabled but missing token in remote config.")}}_completeInitialization(e){if(this._remoteConfig)try{this._conversationsManager=e(this._remoteConfig,this._instance),Js.info("Conversations loaded successfully")}catch(e){this._handleLoadError("Error completing conversations initialization",e)}else Js.error("Cannot complete initialization: remote config is null")}_handleLoadError(e,t){Js.error(e,t),this._conversationsManager=null,this._isInitializing=!1}enable(){this._conversationsManager?this._conversationsManager.enable():Js.warn("Conversations not loaded yet.")}disable(){this._conversationsManager&&this._conversationsManager.disable()}isLoaded(){return!Q(this._conversationsManager)}isEnabled(){return!0===this._isConversationsEnabled}}var Ys=At("[RateLimiter]")
class Xs{constructor(e){var t,n
this.serverLimits={},this.lastEventRateLimited=!1,this.checkForLimiting=e=>{var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach(e=>{Ys.info((e||"events")+" is quota limited."),this.serverLimits[e]=(new Date).getTime()+6e4})}catch(e){return void Ys.warn('could not rate limit - continuing. Error: "'+(null==e?void 0:e.message)+'"',{text:t})}},this.instance=e,this.captureEventsPerSecond=(null==(t=e.config.rate_limiting)?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null==(n=e.config.rate_limiting)?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(e){var t,n,r
void 0===e&&(e=!1)
var i=(new Date).getTime(),s=null!==(t=null==(n=this.instance.persistence)?void 0:n.get_property(bn))&&void 0!==t?t:{tokens:this.captureEventsBurstLimit,last:i}
s.tokens+=(i-s.last)/1e3*this.captureEventsPerSecond,s.last=i,s.tokens>this.captureEventsBurstLimit&&(s.tokens=this.captureEventsBurstLimit)
var o=s.tokens<1
return o||e||(s.tokens=Math.max(0,s.tokens-1)),!o||this.lastEventRateLimited||e||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to "+this.captureEventsPerSecond+" events per second and "+this.captureEventsBurstLimit+" events burst limit."},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=o,null==(r=this.instance.persistence)||r.set_property(bn,s),{isRateLimited:o,remainingTokens:s.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}var Zs=At("[RemoteConfig]")
class eo{constructor(e){this._instance=e}get remoteConfig(){var e
return null==(e=L._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.config}_loadRemoteConfigJs(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.loadExternalDependency?null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"remote-config",()=>e(this.remoteConfig)):(Zs.error("PostHog Extensions not found. Cannot load remote config."),e())}_loadRemoteConfigJSON(e){this._instance._send_request({method:"GET",url:this._instance.requestRouter.endpointFor("assets","/array/"+this._instance.config.token+"/config"),callback:t=>{e(t.json)}})}load(){try{if(this.remoteConfig)return Zs.info("Using preloaded remote config",this.remoteConfig),void this._onRemoteConfig(this.remoteConfig)
if(this._instance._shouldDisableFlags())return void Zs.warn("Remote config is disabled. Falling back to local config.")
this._loadRemoteConfigJs(e=>{if(!e)return Zs.info("No config found after loading remote JS config. Falling back to JSON."),void this._loadRemoteConfigJSON(e=>{this._onRemoteConfig(e)})
this._onRemoteConfig(e)})}catch(e){Zs.error("Error loading remote config",e)}}_onRemoteConfig(e){e?this._instance.config.__preview_remote_config?(this._instance._onRemoteConfig(e),!1!==e.hasFeatureFlags&&this._instance.featureFlags.ensureFlagsLoaded()):Zs.info("__preview_remote_config is disabled. Logging config instead",e):Zs.error("Failed to fetch remote config from PostHog.")}}var to=3e3
class no{constructor(e,t){this._isPaused=!0,this._queue=[],this._flushTimeoutMs=se((null==t?void 0:t.flush_interval_ms)||to,250,5e3,Ot.createLogger("flush interval"),to),this._sendRequest=e}enqueue(e){this._queue.push(e),this._flushTimeout||this._setFlushTimeout()}unload(){this._clearFlushTimeout()
var e=this._queue.length>0?this._formatQueue():{},t=Object.values(e);[...t.filter(e=>0===e.url.indexOf("/e")),...t.filter(e=>0!==e.url.indexOf("/e"))].map(e=>{this._sendRequest(p({},e,{transport:"sendBeacon"}))})}enable(){this._isPaused=!1,this._setFlushTimeout()}_setFlushTimeout(){var e=this
this._isPaused||(this._flushTimeout=setTimeout(()=>{if(this._clearFlushTimeout(),this._queue.length>0){var t=this._formatQueue(),n=function(){var n=t[r],i=(new Date).getTime()
n.data&&B(n.data)&&jt(n.data,e=>{e.offset=Math.abs(e.timestamp-i),delete e.timestamp}),e._sendRequest(n)}
for(var r in t)n()}},this._flushTimeoutMs))}_clearFlushTimeout(){clearTimeout(this._flushTimeout),this._flushTimeout=void 0}_formatQueue(){var e={}
return jt(this._queue,t=>{var n,r=t,i=(r?r.batchKey:null)||r.url
z(e[i])&&(e[i]=p({},r,{data:[]})),null==(n=e[i].data)||n.push(r.data)}),this._queue=[],e}}var ro=["retriesPerformedSoFar"]
class io{constructor(e){this._isPolling=!1,this._pollIntervalMs=3e3,this._queue=[],this._instance=e,this._queue=[],this._areWeOnline=!0,!z(v)&&"onLine"in v.navigator&&(this._areWeOnline=v.navigator.onLine,this._onlineListener=()=>{this._areWeOnline=!0,this._flush()},this._offlineListener=()=>{this._areWeOnline=!1},Wt(v,"online",this._onlineListener),Wt(v,"offline",this._offlineListener))}get length(){return this._queue.length}retriableRequest(e){var{retriesPerformedSoFar:t}=e,n=g(e,ro)
K(t)&&t>0&&(n.url=os(n.url,{retry_count:t})),this._instance._send_request(p({},n,{callback:e=>{200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this._enqueue(p({retriesPerformedSoFar:t},n)):null==n.callback||n.callback(e)}}))}_enqueue(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,r=Math.min(18e5,t),i=(Math.random()-.5)*(r-n)
return Math.ceil(r+i)}(t),r=Date.now()+n
this._queue.push({retryAt:r,requestOptions:e})
var i="Enqueued failed request for retry in "+n
navigator.onLine||(i+=" (Browser is offline)"),Ot.warn(i),this._isPolling||(this._isPolling=!0,this._poll())}_poll(){if(this._poller&&clearTimeout(this._poller),0===this._queue.length)return this._isPolling=!1,void(this._poller=void 0)
this._poller=setTimeout(()=>{this._areWeOnline&&this._queue.length>0&&this._flush(),this._poll()},this._pollIntervalMs)}_flush(){var e=Date.now(),t=[],n=this._queue.filter(n=>n.retryAt<e||(t.push(n),!1))
if(this._queue=t,n.length>0)for(var{requestOptions:r}of n)this.retriableRequest(r)}unload(){for(var{requestOptions:e}of(this._poller&&(clearTimeout(this._poller),this._poller=void 0),this._isPolling=!1,z(v)||(this._onlineListener&&(v.removeEventListener("online",this._onlineListener),this._onlineListener=void 0),this._offlineListener&&(v.removeEventListener("offline",this._offlineListener),this._offlineListener=void 0)),this._queue))try{this._instance._send_request(p({},e,{transport:"sendBeacon"}))}catch(e){Ot.error(e)}this._queue=[]}}class so{constructor(e){this._updateScrollData=()=>{var e,t,n,r
this._context||(this._context={})
var i=this.scrollElement(),s=this.scrollY(),o=i?Math.max(0,i.scrollHeight-i.clientHeight):0,a=s+((null==i?void 0:i.clientHeight)||0),l=(null==i?void 0:i.scrollHeight)||0
this._context.lastScrollY=Math.ceil(s),this._context.maxScrollY=Math.max(s,null!==(e=this._context.maxScrollY)&&void 0!==e?e:0),this._context.maxScrollHeight=Math.max(o,null!==(t=this._context.maxScrollHeight)&&void 0!==t?t:0),this._context.lastContentY=a,this._context.maxContentY=Math.max(a,null!==(n=this._context.maxContentY)&&void 0!==n?n:0),this._context.maxContentHeight=Math.max(l,null!==(r=this._context.maxContentHeight)&&void 0!==r?r:0)},this._instance=e}getContext(){return this._context}resetContext(){var e=this._context
return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){Wt(v,"scroll",this._updateScrollData,{capture:!0}),Wt(v,"scrollend",this._updateScrollData,{capture:!0}),Wt(v,"resize",this._updateScrollData)}scrollElement(){if(!this._instance.config.scroll_root_selector)return null==v?void 0:v.document.documentElement
var e=B(this._instance.config.scroll_root_selector)?this._instance.config.scroll_root_selector:[this._instance.config.scroll_root_selector]
for(var t of e){var n=null==v?void 0:v.document.querySelector(t)
if(n)return n}}scrollY(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return v&&(v.scrollY||v.pageYOffset||v.document.documentElement.scrollTop)||0}scrollX(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return v&&(v.scrollX||v.pageXOffset||v.document.documentElement.scrollLeft)||0}}var oo=e=>hi(null==e?void 0:e.config.mask_personal_data_properties,null==e?void 0:e.config.custom_personal_data_properties)
class ao{constructor(e,t,n,r){this._onSessionIdCallback=e=>{var t=this._getStored()
if(!t||t.sessionId!==e){var n={sessionId:e,props:this._sessionSourceParamGenerator(this._instance)}
this._persistence.register({[mn]:n})}},this._instance=e,this._sessionIdManager=t,this._persistence=n,this._sessionSourceParamGenerator=r||oo,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStored(){return this._persistence.props[mn]}getSetOnceProps(){var e,t=null==(e=this._getStored())?void 0:e.props
return t?"r"in t?pi(t):{$referring_domain:t.referringDomain,$pathname:t.initialPathName,utm_source:t.utm_source,utm_campaign:t.utm_campaign,utm_medium:t.utm_medium,utm_content:t.utm_content,utm_term:t.utm_term}:{}}getSessionProps(){var e={}
return jt(Ht(this.getSetOnceProps()),(t,n)=>{"$current_url"===n&&(n="url"),e["$session_entry_"+j(n)]=t}),e}}var lo=At("[SessionId]")
class co{on(e,t){return this._eventEmitter.on(e,t)}constructor(e,t,n){var r
if(this._sessionIdChangedHandlers=[],this._beforeUnloadListener=void 0,this._eventEmitter=new Ns,this._sessionHasBeenIdleTooLong=(e,t)=>Math.abs(e-t)>this.sessionTimeoutMs,!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance")
if("always"===e.config.cookieless_mode)throw new Error('SessionIdManager cannot be used with cookieless_mode="always"')
this._config=e.config,this._persistence=e.persistence,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=t||xr,this._windowIdGenerator=n||xr
var i=this._config.persistence_name||this._config.token,s=this._config.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*se(s,60,36e3,lo.createLogger("session_idle_timeout_seconds"),1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this._resetIdleTimer(),this._window_id_storage_key="ph_"+i+"_window_id",this._primary_window_exists_storage_key="ph_"+i+"_primary_window_exists",this._canUseSessionStorage()){var o=Rr._parse(this._window_id_storage_key),a=Rr._parse(this._primary_window_exists_storage_key)
o&&!a?this._windowId=o:Rr._remove(this._window_id_storage_key),Rr._set(this._primary_window_exists_storage_key,!0)}if(null!=(r=this._config.bootstrap)&&r.sessionID)try{var l=(()=>{var e=this._config.bootstrap.sessionID.replace(/-/g,"")
if(32!==e.length)throw new Error("Not a valid UUID")
if("7"!==e[12])throw new Error("Not a UUIDv7")
return parseInt(e.substring(0,12),16)})()
this._setSessionId(this._config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){lo.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return z(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter(t=>t!==e)}}_canUseSessionStorage(){return"memory"!==this._config.persistence&&!this._persistence._disabled&&Rr._is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&Rr._set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?Rr._parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this._persistence.register({[an]:[t,e,n]}))}_getSessionId(){var e=this._persistence.props[an]
return B(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}destroy(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=void 0,this._beforeUnloadListener&&v&&(v.removeEventListener("beforeunload",this._beforeUnloadListener,{capture:!1}),this._beforeUnloadListener=void 0),this._sessionIdChangedHandlers=[]}_listenToReloadWindow(){this._beforeUnloadListener=()=>{this._canUseSessionStorage()&&Rr._remove(this._primary_window_exists_storage_key)},Wt(v,"beforeunload",this._beforeUnloadListener,{capture:!1})}checkAndGetSessionAndWindowId(e,t){if(void 0===e&&(e=!1),void 0===t&&(t=null),"always"===this._config.cookieless_mode)throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"')
var n=t||(new Date).getTime(),[r,i,s]=this._getSessionId(),o=this._getWindowId(),a=K(s)&&s>0&&Math.abs(n-s)>864e5,l=!1,c=!i,u=!c&&!e&&this._sessionHasBeenIdleTooLong(n,r)
c||u||a?(i=this._sessionIdGenerator(),o=this._windowIdGenerator(),lo.info("new session ID generated",{sessionId:i,windowId:o,changeReason:{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}}),s=n,l=!0):o||(o=this._windowIdGenerator(),l=!0)
var d=0===r||!e||a?n:r,f=0===s?(new Date).getTime():s
return this._setWindowId(o),this._setSessionId(i,d,f),e||this._resetIdleTimer(),l&&this._sessionIdChangedHandlers.forEach(e=>e(i,o,l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0)),{sessionId:i,windowId:o,sessionStartTimestamp:f,changeReason:l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0,lastActivityTimestamp:r}}_resetIdleTimer(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=setTimeout(()=>{var[e]=this._getSessionId()
if(this._sessionHasBeenIdleTooLong((new Date).getTime(),e)){var t=this._sessionId
this.resetSessionId(),this._eventEmitter.emit("forcedIdleReset",{idleSessionId:t})}},1.1*this.sessionTimeoutMs)}}var uo=["$set_once","$set"],fo=At("[SiteApps]")
class ho{constructor(e){this._instance=e,this._bufferedInvocations=[],this.apps={}}get isEnabled(){return!!this._instance.config.opt_in_site_apps}_eventCollector(e,t){if(t){var n=this.globalsForEvent(t)
this._bufferedInvocations.push(n),this._bufferedInvocations.length>1e3&&(this._bufferedInvocations=this._bufferedInvocations.slice(10))}}get siteAppLoaders(){var e
return null==(e=L._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.siteApps}init(){if(this.isEnabled){var e=this._instance._addCaptureHook(this._eventCollector.bind(this))
this._stopBuffering=()=>{e(),this._bufferedInvocations=[],this._stopBuffering=void 0}}}globalsForEvent(e){var t,n,r,i,s,o,a
if(!e)throw new Error("Event payload is required")
var l={},c=this._instance.get_property("$groups")||[],u=this._instance.get_property("$stored_group_properties")||{}
for(var[d,f]of Object.entries(u))l[d]={id:c[d],type:d,properties:f}
var{$set_once:h,$set:v}=e
return{event:p({},g(e,uo),{properties:p({},e.properties,v?{$set:p({},null!==(t=null==(n=e.properties)?void 0:n.$set)&&void 0!==t?t:{},v)}:{},h?{$set_once:p({},null!==(r=null==(i=e.properties)?void 0:i.$set_once)&&void 0!==r?r:{},h)}:{}),elements_chain:null!==(s=null==(o=e.properties)?void 0:o.$elements_chain)&&void 0!==s?s:"",distinct_id:null==(a=e.properties)?void 0:a.distinct_id}),person:{properties:this._instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(e){var t=this.apps[e.id],n=()=>{var n
!t.errored&&this._bufferedInvocations.length&&(fo.info("Processing "+this._bufferedInvocations.length+" events for site app with id "+e.id),this._bufferedInvocations.forEach(e=>null==t.processEvent?void 0:t.processEvent(e)),t.processedBuffer=!0),Object.values(this.apps).every(e=>e.processedBuffer||e.errored)&&(null==(n=this._stopBuffering)||n.call(this))},r=!1,i=i=>{t.errored=!i,t.loaded=!0,fo.info("Site app with id "+e.id+" "+(i?"loaded":"errored")),r&&n()}
try{var{processEvent:s}=e.init({posthog:this._instance,callback:e=>{i(e)}})
s&&(t.processEvent=s),r=!0}catch(t){fo.error("Error while initializing PostHog app with config id "+e.id,t),i(!1)}if(r&&t.loaded)try{n()}catch(n){fo.error("Error while processing buffered events PostHog app with config id "+e.id,n),t.errored=!0}}_setupSiteApps(){var e=this.siteAppLoaders||[]
for(var t of e)this.apps[t.id]={id:t.id,loaded:!1,errored:!1,processedBuffer:!1}
for(var n of e)this.setupSiteApp(n)}_onCapturedEvent(e){if(0!==Object.keys(this.apps).length){var t=this.globalsForEvent(e)
for(var n of Object.values(this.apps))try{null==n.processEvent||n.processEvent(t)}catch(t){fo.error("Error while processing event "+e.event+" for site app "+n.id,t)}}}onRemoteConfig(e){var t,n,r,i=this
if(null!=(t=this.siteAppLoaders)&&t.length)return this.isEnabled?(this._setupSiteApps(),void this._instance.on("eventCaptured",e=>this._onCapturedEvent(e))):void fo.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
if(null==(n=this._stopBuffering)||n.call(this),null!=(r=e.siteApps)&&r.length)if(this.isEnabled){var s=function(e){var t
L["__$$ph_site_app_"+e]=i._instance,null==(t=L.__PosthogExtensions__)||null==t.loadSiteApp||t.loadSiteApp(i._instance,a,t=>{if(t)return fo.error("Error while initializing PostHog app with config id "+e,t)})}
for(var{id:o,url:a}of e.siteApps)s(o)}else fo.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}var po=function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&O(n,t))return!0
try{var r=null==e?void 0:e.userAgentData
if(null!=r&&r.brands&&r.brands.some(e=>O(null==e?void 0:e.brand,t)))return!0}catch(e){}return!!e.webdriver},go=function(e){return e.US="us",e.EU="eu",e.CUSTOM="custom",e}({}),vo="i.posthog.com"
class _o{constructor(e){this._regionCache={},this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get flagsApiHost(){var e=this.instance.config.flags_api_host
return e?e.trim().replace(/\/$/,""):this.apiHost}get uiHost(){var e,t=null==(e=this.instance.config.ui_host)?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace("."+vo,".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=go.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=go.EU:this._regionCache[this.apiHost]=go.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e,t){if(void 0===t&&(t=""),t&&(t="/"===t[0]?t:"/"+t),"ui"===e)return this.uiHost+t
if("flags"===e)return this.flagsApiHost+t
if(this.region===go.CUSTOM)return this.apiHost+t
var n=vo+t
switch(e){case"assets":return"https://"+this.region+"-assets."+n
case"api":return"https://"+this.region+"."+n}}}var mo={icontains:(e,t)=>!!v&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!v&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!v&&us(t.href,e),not_regex:(e,t)=>!!v&&!us(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class bo{constructor(e){var t=this
this.getWebExperimentsAndEvaluateDisplayLogic=function(e){void 0===e&&(e=!1),t.getWebExperiments(e=>{bo._logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach(e=>{if(e.feature_flag_key){var n
t._flagToExperiments&&(bo._logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null==(n=t._flagToExperiments)||n.set(e.feature_flag_key,e))
var r=t._instance.getFeatureFlag(e.feature_flag_key)
W(r)&&e.variants[r]&&t._applyTransforms(e.name,r,e.variants[r].transforms)}else if(e.variants)for(var i in e.variants){var s=e.variants[i]
bo._matchesTestVariant(s)&&t._applyTransforms(e.name,i,s.transforms)}})},e)},this._instance=e,this._instance.onFeatureFlags(e=>{this.onFeatureFlags(e)})}onFeatureFlags(e){if(this._is_bot())bo._logInfo("Refusing to render web experiment since the viewer is a likely bot")
else if(!this._instance.config.disable_web_experiments){if(J(this._flagToExperiments))return this._flagToExperiments=new Map,this.loadIfEnabled(),void this.previewWebExperiment()
bo._logInfo("applying feature flags",e),e.forEach(e=>{var t
if(this._flagToExperiments&&null!=(t=this._flagToExperiments)&&t.has(e)){var n,r=this._instance.getFeatureFlag(e),i=null==(n=this._flagToExperiments)?void 0:n.get(e)
r&&null!=i&&i.variants[r]&&this._applyTransforms(i.name,r,i.variants[r].transforms)}})}}previewWebExperiment(){var e=bo.getWindowLocation()
if(null!=e&&e.search){var t=cr(null==e?void 0:e.search,"__experiment_id"),n=cr(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(bo._logInfo("previewing web experiments "+t+" && "+n),this.getWebExperiments(e=>{this._showPreviewWebExperiment(parseInt(t),n,e)},!1,!0))}}loadIfEnabled(){this._instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,n){if(this._instance.config.disable_web_experiments&&!n)return e([])
var r=this._instance.get_property("$web_experiments")
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/web_experiments/?token="+this._instance.config.token),method:"GET",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
var n=t.json.experiments||[]
return e(n)}})}_showPreviewWebExperiment(e,t,n){var r=n.filter(t=>t.id===e)
r&&r.length>0&&(bo._logInfo("Previewing web experiment ["+r[0].name+"] with variant ["+t+"]"),this._applyTransforms(r[0].name,t,r[0].variants[t].transforms))}static _matchesTestVariant(e){return!J(e.conditions)&&bo._matchUrlConditions(e)&&bo._matchUTMConditions(e)}static _matchUrlConditions(e){var t
if(J(e.conditions)||J(null==(t=e.conditions)?void 0:t.url))return!0
var n,r,i,s=bo.getWindowLocation()
return!!s&&(null==(n=e.conditions)||!n.url||mo[null!==(r=null==(i=e.conditions)?void 0:i.urlMatchType)&&void 0!==r?r:"icontains"](e.conditions.url,s))}static getWindowLocation(){return null==v?void 0:v.location}static _matchUTMConditions(e){var t
if(J(e.conditions)||J(null==(t=e.conditions)?void 0:t.utm))return!0
var n=li()
if(n.utm_source){var r,i,s,o,a,l,c,u,d=null==(r=e.conditions)||null==(r=r.utm)||!r.utm_campaign||(null==(i=e.conditions)||null==(i=i.utm)?void 0:i.utm_campaign)==n.utm_campaign,f=null==(s=e.conditions)||null==(s=s.utm)||!s.utm_source||(null==(o=e.conditions)||null==(o=o.utm)?void 0:o.utm_source)==n.utm_source,h=null==(a=e.conditions)||null==(a=a.utm)||!a.utm_medium||(null==(l=e.conditions)||null==(l=l.utm)?void 0:l.utm_medium)==n.utm_medium,p=null==(c=e.conditions)||null==(c=c.utm)||!c.utm_term||(null==(u=e.conditions)||null==(u=u.utm)?void 0:u.utm_term)==n.utm_term
return d&&h&&p&&f}return!1}static _logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
Ot.info("[WebExperiments] "+e,n)}_applyTransforms(e,t,n){this._is_bot()?bo._logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach(n=>{if(n.selector){var r
bo._logInfo("applying transform of variant "+t+" for experiment "+e+" ",n)
var i=null==(r=document)?void 0:r.querySelectorAll(n.selector)
null==i||i.forEach(e=>{var t=e
n.html&&(t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)})}}):bo._logInfo("Control variants leave the page unmodified.")}_is_bot(){return w&&this._instance?po(w,this._instance.config.custom_blocked_useragents):void 0}}var yo=At("[PostHog ExternalIntegrations]"),wo={intercom:"intercom-integration",crispChat:"crisp-chat-integration"}
class ko{constructor(e){this._instance=e}_loadScript(e,t){var n
null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,e,e=>{if(e)return yo.error("failed to load script",e)
t()})}startIfEnabledOrStop(){var e=this,t=function(t){var n,i,s
!r||null!=(n=L.__PosthogExtensions__)&&null!=(n=n.integrations)&&n[t]||e._loadScript(wo[t],()=>{var n
null==(n=L.__PosthogExtensions__)||null==(n=n.integrations)||null==(n=n[t])||n.start(e._instance)}),!r&&null!=(i=L.__PosthogExtensions__)&&null!=(i=i.integrations)&&i[t]&&(null==(s=L.__PosthogExtensions__)||null==(s=s.integrations)||null==(s=s[t])||s.stop())}
for(var[n,r]of Object.entries(null!==(i=this._instance.config.integrations)&&void 0!==i?i:{})){var i
t(n)}}}var xo="[SessionRecording]",So=At(xo)
class Eo{get started(){var e
return!(null==(e=this._lazyLoadedSessionRecording)||!e.isStarted)}get status(){return this._lazyLoadedSessionRecording?this._lazyLoadedSessionRecording.status:this._receivedFlags&&!this._isRecordingEnabled?"disabled":"lazy_loading"}constructor(e){if(this._forceAllowLocalhostNetworkCapture=!1,this._receivedFlags=!1,this._persistFlagsOnSessionListener=void 0,this._instance=e,!this._instance.sessionManager)throw So.error("started without valid sessionManager"),new Error(xo+" started without valid sessionManager. This is a bug.")
if("always"===this._instance.config.cookieless_mode)throw new Error(xo+' cannot be used with cookieless_mode="always"')}get _isRecordingEnabled(){var e,t=!(null==(e=this._instance.get_property(on))||!e.enabled),n=!this._instance.config.disable_session_recording,r=this._instance.config.disable_session_recording||this._instance.consent.isOptedOut()
return v&&t&&n&&!r}startIfEnabledOrStop(e){var t
if(!this._isRecordingEnabled||null==(t=this._lazyLoadedSessionRecording)||!t.isStarted){var n=!z(Object.assign)&&!z(Array.from)
this._isRecordingEnabled&&n?(this._lazyLoadAndStart(e),So.info("starting")):this.stopRecording()}}_lazyLoadAndStart(e){var t,n,r
this._isRecordingEnabled&&(null!=L&&null!=(t=L.__PosthogExtensions__)&&null!=(t=t.rrweb)&&t.record&&null!=(n=L.__PosthogExtensions__)&&n.initSessionRecording?this._onScriptLoaded(e):null==(r=L.__PosthogExtensions__)||null==r.loadExternalDependency||r.loadExternalDependency(this._instance,this._scriptName,t=>{if(t)return So.error("could not load recorder",t)
this._onScriptLoaded(e)}))}stopRecording(){var e,t
null==(e=this._persistFlagsOnSessionListener)||e.call(this),this._persistFlagsOnSessionListener=void 0,null==(t=this._lazyLoadedSessionRecording)||t.stop()}_resetSampling(){var e
null==(e=this._instance.persistence)||e.unregister(ln)}_persistRemoteConfig(e){if(this._instance.persistence){var t,n,r=this._instance.persistence,i=()=>{var t=!1===e.sessionRecording?void 0:e.sessionRecording,n=null==t?void 0:t.sampleRate,i=J(n)?null:parseFloat(n)
J(i)&&this._resetSampling()
var s=null==t?void 0:t.minimumDurationMilliseconds
r.register({[on]:p({enabled:!!t},t,{networkPayloadCapture:p({capturePerformance:e.capturePerformance},null==t?void 0:t.networkPayloadCapture),canvasRecording:{enabled:null==t?void 0:t.recordCanvas,fps:null==t?void 0:t.canvasFps,quality:null==t?void 0:t.canvasQuality},sampleRate:i,minimumDurationMilliseconds:z(s)?null:s,endpoint:null==t?void 0:t.endpoint,triggerMatchType:null==t?void 0:t.triggerMatchType,masking:null==t?void 0:t.masking,urlTriggers:null==t?void 0:t.urlTriggers})})}
i(),null==(t=this._persistFlagsOnSessionListener)||t.call(this),this._persistFlagsOnSessionListener=null==(n=this._instance.sessionManager)?void 0:n.onSessionId(i)}}onRemoteConfig(e){"sessionRecording"in e?!1!==e.sessionRecording?(this._persistRemoteConfig(e),this._receivedFlags=!0,this.startIfEnabledOrStop()):this._receivedFlags=!0:So.info("skipping remote config with no sessionRecording",e)}log(e,t){var n
void 0===t&&(t="log"),null!=(n=this._lazyLoadedSessionRecording)&&n.log?this._lazyLoadedSessionRecording.log(e,t):So.warn("log called before recorder was ready")}get _scriptName(){var e,t,n=null==(e=this._instance)||null==(e=e.persistence)?void 0:e.get_property(on)
return(null==n||null==(t=n.scriptConfig)?void 0:t.script)||"lazy-recorder"}_onScriptLoaded(e){var t,n
if(null==(t=L.__PosthogExtensions__)||!t.initSessionRecording)throw Error("Called on script loaded before session recording is available")
this._lazyLoadedSessionRecording||(this._lazyLoadedSessionRecording=null==(n=L.__PosthogExtensions__)?void 0:n.initSessionRecording(this._instance),this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture=this._forceAllowLocalhostNetworkCapture),this._lazyLoadedSessionRecording.start(e)}onRRwebEmit(e){var t
null==(t=this._lazyLoadedSessionRecording)||null==t.onRRwebEmit||t.onRRwebEmit(e)}overrideLinkedFlag(){var e,t
this._lazyLoadedSessionRecording||null==(t=this._instance.persistence)||t.register({$replay_override_linked_flag:!0}),null==(e=this._lazyLoadedSessionRecording)||e.overrideLinkedFlag()}overrideSampling(){var e,t
this._lazyLoadedSessionRecording||null==(t=this._instance.persistence)||t.register({$replay_override_sampling:!0}),null==(e=this._lazyLoadedSessionRecording)||e.overrideSampling()}overrideTrigger(e){var t,n
this._lazyLoadedSessionRecording||null==(n=this._instance.persistence)||n.register({["url"===e?"$replay_override_url_trigger":"$replay_override_event_trigger"]:!0}),null==(t=this._lazyLoadedSessionRecording)||t.overrideTrigger(e)}get sdkDebugProperties(){var e
return(null==(e=this._lazyLoadedSessionRecording)?void 0:e.sdkDebugProperties)||{$recording_status:this.status}}tryAddCustomEvent(e,t){var n
return!(null==(n=this._lazyLoadedSessionRecording)||!n.tryAddCustomEvent(e,t))}}var Co={},Po=()=>{},Lo="posthog",To=!is&&-1===(null==P?void 0:P.indexOf("MSIE"))&&-1===(null==P?void 0:P.indexOf("Mozilla")),$o=e=>{var t
return p({api_host:"https://us.i.posthog.com",flags_api_host:null,ui_host:null,token:"",autocapture:!0,cross_subdomain_cookie:Gt(null==k?void 0:k.location),persistence:"localStorage+cookie",persistence_name:"",loaded:Po,save_campaign_params:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageleave:"if_capture_pageview",defaults:null!=e?e:"unset",__preview_deferred_init_extensions:!1,debug:x&&W(null==x?void 0:x.search)&&-1!==x.search.indexOf("__posthog_debug=true")||!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,disable_surveys_automatic_display:!1,disable_conversations:!1,disable_product_tours:!0,disable_external_dependency_loading:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==v||null==(t=v.location)?void 0:t.protocol),ip:!1,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",consent_persistence_name:null,opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},request_batching:!0,properties_string_max_length:65535,mask_all_element_attributes:!1,mask_all_text:!1,mask_personal_data_properties:!1,custom_personal_data_properties:[],advanced_disable_flags:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_only_evaluate_survey_feature_flags:!1,advanced_enable_surveys:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,surveys_request_timeout_ms:1e4,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text
Ot.error(t)},get_device_id:e=>e,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",before_send:void 0,request_queue_config:{flush_interval_ms:to},error_tracking:{},_onCapture:Po,__preview_eager_load_replay:!1},(e=>({rageclick:!(e&&e>="2025-11-30")||{content_ignorelist:!0},capture_pageview:!(e&&e>="2025-05-24")||"history_change",session_recording:e&&e>="2025-11-30"?{strictMinimumDuration:!0}:{}}))(e))},Io=e=>{var t={}
z(e.process_person)||(t.person_profiles=e.process_person),z(e.xhr_headers)||(t.request_headers=e.xhr_headers),z(e.cookie_name)||(t.persistence_name=e.cookie_name),z(e.disable_cookie)||(t.disable_persistence=e.disable_cookie),z(e.store_google)||(t.save_campaign_params=e.store_google),z(e.verbose)||(t.debug=e.verbose)
var n=Ft({},t,e)
return B(e.property_blacklist)&&(z(e.property_denylist)?n.property_denylist=e.property_blacklist:B(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:Ot.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class Oo{constructor(){this.__forceAllowLocalhost=!1}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){Ot.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class Ao{get decideEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}get flagsEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}constructor(){this.webPerformance=new Oo,this._personProcessingSetOncePropertiesSent=!1,this.version=T.LIB_VERSION,this._internalEventEmitter=new Ns,this._calculate_event_properties=this.calculateEventProperties.bind(this),this.config=$o(),this.SentryIntegration=Jr,this.sentryIntegration=e=>function(e,t){var n=Qr(e,t)
return{name:Vr,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._visibilityStateListener=null,this._initialPersonProfilesConfig=null,this._cachedPersonProperties=null,this.featureFlags=new Ps(this),this.toolbar=new ei(this),this.scrollManager=new so(this),this.pageViewManager=new Si(this),this.surveys=new Qs(this),this.conversations=new Ks(this),this.experiments=new bo(this),this.exceptions=new vs(this),this.rateLimiter=new Xs(this),this.requestRouter=new _o(this),this.consent=new Fr(this),this.externalIntegrations=new ko(this),this.people={set:(e,t,n)=>{var r=W(e)?{[e]:t}:e
this.setPersonProperties(r),null==n||n({})},set_once:(e,t,n)=>{var r=W(e)?{[e]:t}:e
this.setPersonProperties(void 0,r),null==n||n({})}},this.on("eventCaptured",e=>Ot.info('send "'+(null==e?void 0:e.event)+'"',e))}init(e,t,n){if(n&&n!==Lo){var r,i=null!==(r=Co[n])&&void 0!==r?r:new Ao
return i._init(e,t,n),Co[n]=i,Co[Lo][n]=i,i}return this._init(e,t,n)}_init(e,t,n){var r
if(void 0===t&&(t={}),z(e)||V(e))return Ot.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return console.warn("[PostHog.js]","You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},t.debug=this._checkLocalStorageForDebug(t.debug),this._originalUserConfig=t,this._triggered_notifs=[],t.person_profiles&&(this._initialPersonProfilesConfig=t.person_profiles),this.set_config(Ft({},$o(t.defaults),Io(t),{name:n,token:e})),this.config.on_xhr_error&&Ot.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=t.disable_compression?void 0:ar.GZipJS
var i=this._is_persistence_disabled()
this.persistence=new Ts(this.config,i),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new Ts(p({},this.config,{persistence:"sessionStorage"}),i)
var s=p({},this.persistence.props),o=p({},this.sessionPersistence.props)
this.register({$initialization_time:(new Date).toISOString()}),this._requestQueue=new no(e=>this._send_retriable_request(e),this.config.request_queue_config),this._retryQueue=new io(this),this.__request_queue=[]
var a="always"===this.config.cookieless_mode||"on_reject"===this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut()
if(a||(this.sessionManager=new co(this),this.sessionPropsManager=new ao(this,this.sessionManager,this.persistence)),this.config.__preview_deferred_init_extensions?(Ot.info("Deferring extension initialization to improve startup performance"),setTimeout(()=>{this._initExtensions(a)},0)):(Ot.info("Initializing extensions synchronously"),this._initExtensions(a)),T.DEBUG=T.DEBUG||this.config.debug,T.DEBUG&&Ot.info("Starting in debug mode",{this:this,config:t,thisC:p({},this.config),p:s,s:o}),void 0!==(null==(r=t.bootstrap)?void 0:r.distinctID)){var l,c,u=this.config.get_device_id(xr()),d=null!=(l=t.bootstrap)&&l.isIdentifiedID?u:t.bootstrap.distinctID
this.persistence.set_property(_n,null!=(c=t.bootstrap)&&c.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:t.bootstrap.distinctID,$device_id:d})}if(this._hasBootstrappedFeatureFlags()){var f,h,g=Object.keys((null==(f=t.bootstrap)?void 0:f.featureFlags)||{}).filter(e=>{var n
return!(null==(n=t.bootstrap)||null==(n=n.featureFlags)||!n[e])}).reduce((e,n)=>{var r
return e[n]=(null==(r=t.bootstrap)||null==(r=r.featureFlags)?void 0:r[n])||!1,e},{}),_=Object.keys((null==(h=t.bootstrap)?void 0:h.featureFlagPayloads)||{}).filter(e=>g[e]).reduce((e,n)=>{var r,i
return null!=(r=t.bootstrap)&&null!=(r=r.featureFlagPayloads)&&r[n]&&(e[n]=null==(i=t.bootstrap)||null==(i=i.featureFlagPayloads)?void 0:i[n]),e},{})
this.featureFlags.receivedFeatureFlags({featureFlags:g,featureFlagPayloads:_})}if(a)this.register_once({distinct_id:En,$device_id:null},"")
else if(!this.get_distinct_id()){var m=this.config.get_device_id(xr())
this.register_once({distinct_id:m,$device_id:m},""),this.persistence.set_property(_n,"anonymous")}return Wt(v,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this),{passive:!1}),this.toolbar.maybeLoadToolbar(),t.segment?function(e,t){var n=e.config.segment
if(!n)return t()
!function(e,t){var n=e.config.segment
if(!n)return t()
var r=n=>{var r=()=>n.anonymousId()||xr()
e.config.get_device_id=r,n.id()&&(e.register({distinct_id:n.id(),$device_id:r()}),e.persistence.set_property(_n,"identified")),t()},i=n.user()
"then"in i&&H(i.then)?i.then(e=>r(e)):r(i)}(e,()=>{n.register((e=>{Promise&&Promise.resolve||Wr.warn("This browser does not have Promise support, and can not use the segment integration")
var t=(t,n)=>{if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(Wr.info("No userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(Wr.info("UserId set, identifying with PostHog"),e.identify(t.event.userId))
var r=e.calculateEventProperties(n,t.event.properties)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then(()=>{t()})})}(this,()=>this._loaded()):this._loaded(),H(this.config._onCapture)&&this.config._onCapture!==Po&&(Ot.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",e=>this.config._onCapture(e.event,e))),this.config.ip&&Ot.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'),this}_initExtensions(e){var t=performance.now()
this.historyAutocapture=new zr(this),this.historyAutocapture.startIfEnabled()
var n=[]
n.push(()=>{new ni(this).startIfEnabledOrStop()}),n.push(()=>{var e
this.siteApps=new ho(this),null==(e=this.siteApps)||e.init()}),e||n.push(()=>{this.sessionRecording=new Eo(this),this.sessionRecording.startIfEnabledOrStop()}),this.config.disable_scroll_properties||n.push(()=>{this.scrollManager.startMeasuringScrollPosition()}),n.push(()=>{this.autocapture=new vr(this),this.autocapture.startIfEnabled()}),n.push(()=>{this.surveys.loadIfEnabled()}),n.push(()=>{this.conversations.loadIfEnabled()}),n.push(()=>{this.productTours=new Os(this),this.productTours.loadIfEnabled()}),n.push(()=>{this.heatmaps=new xi(this),this.heatmaps.startIfEnabled()}),n.push(()=>{this.webVitalsAutocapture=new yi(this)}),n.push(()=>{this.exceptionObserver=new Ur(this),this.exceptionObserver.startIfEnabled()}),n.push(()=>{this.deadClicksAutocapture=new Br(this,qr),this.deadClicksAutocapture.startIfEnabled()}),n.push(()=>{if(this._pendingRemoteConfig){var e=this._pendingRemoteConfig
this._pendingRemoteConfig=void 0,this._onRemoteConfig(e)}}),this._processInitTaskQueue(n,t)}_processInitTaskQueue(e,t){for(;e.length>0;){if(this.config.__preview_deferred_init_extensions&&performance.now()-t>=30&&e.length>0)return void setTimeout(()=>{this._processInitTaskQueue(e,t)},0)
var n=e.shift()
if(n)try{n()}catch(e){Ot.error("Error initializing extension:",e)}}var r=Math.round(performance.now()-t)
this.register_for_session({$sdk_debug_extensions_init_method:this.config.__preview_deferred_init_extensions?"deferred":"synchronous",$sdk_debug_extensions_init_time_ms:r}),this.config.__preview_deferred_init_extensions&&Ot.info("PostHog extensions initialized ("+r+"ms)")}_onRemoteConfig(e){var t,n,r,i,s,o,a,l,c
if(!k||!k.body)return Ot.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout(()=>{this._onRemoteConfig(e)},500)
this.config.__preview_deferred_init_extensions&&(this._pendingRemoteConfig=e),this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=M(e.supportedCompression,ar.GZipJS)?ar.GZipJS:M(e.supportedCompression,ar.Base64)?ar.Base64:void 0),null!=(t=e.analytics)&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:"identified_only"}),null==(n=this.siteApps)||n.onRemoteConfig(e),null==(r=this.sessionRecording)||r.onRemoteConfig(e),null==(i=this.autocapture)||i.onRemoteConfig(e),null==(s=this.heatmaps)||s.onRemoteConfig(e),this.surveys.onRemoteConfig(e),this.conversations.onRemoteConfig(e),null==(o=this.productTours)||o.onRemoteConfig(e),null==(a=this.webVitalsAutocapture)||a.onRemoteConfig(e),null==(l=this.exceptionObserver)||l.onRemoteConfig(e),this.exceptions.onRemoteConfig(e),null==(c=this.deadClicksAutocapture)||c.onRemoteConfig(e)}_loaded(){try{this.config.loaded(this)}catch(e){Ot.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout(()=>{(this.consent.isOptedIn()||"always"===this.config.cookieless_mode)&&this._captureInitialPageview()},1),new eo(this).load(),this.featureFlags.flags()}_start_queue_if_opted_in(){var e
this.is_capturing()&&this.config.request_batching&&(null==(e=this._requestQueue)||e.enable())}_dom_loaded(){this.is_capturing()&&Rt(this.__request_queue,e=>this._send_retriable_request(e)),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null==(e=this._requestQueue)||e.unload(),null==(t=this._retryQueue)||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(To?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=os(e.url,{ip:this.config.ip?1:0}),e.headers=p({},this.config.request_headers,e.headers),e.compression="best-available"===e.compression?this.compression:e.compression,e.disableXHRCredentials=this.config.__preview_disable_xhr_credentials,this.config.__preview_disable_beacon&&(e.disableTransport=["sendBeacon"]),e.fetchOptions=e.fetchOptions||this.config.fetch_options,(e=>{var t,n,r,i=p({},e)
i.timeout=i.timeout||6e4,i.url=os(i.url,{_:(new Date).getTime().toString(),ver:T.LIB_VERSION,compression:i.compression})
var s=null!==(t=i.transport)&&void 0!==t?t:"fetch",o=cs.filter(e=>!i.disableTransport||!e.transport||!i.disableTransport.includes(e.transport)),a=null!==(n=null==(r=zt(o,e=>e.transport===s))?void 0:r.method)&&void 0!==n?n:o[0].method
if(!a)throw new Error("No available transport method")
a(i)})(p({},e,{callback:t=>{var n,r
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null==(n=(r=this.config).on_request_error)||n.call(r,t)),null==e.callback||e.callback(t)}}))))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){var t,n=[],r=[],i=[]
Rt(e,e=>{e&&(t=e[0],B(t)?i.push(e):H(e)?e.call(this):B(e)&&"alias"===t?n.push(e):B(e)&&-1!==t.indexOf("capture")&&H(this[t])?i.push(e):r.push(e))})
var s=function(e,t){Rt(e,function(e){if(B(e[0])){var n=t
jt(e,function(e){n=n[e[0]].apply(n,e.slice(1))})}else this[e[0]].apply(this,e.slice(1))},t)}
s(n,this),s(r,this),s(i,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null==(e=this.config.bootstrap)?void 0:e.featureFlags)&&Object.keys(null==(t=this.config.bootstrap)?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var r
if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(this.is_capturing())if(!z(e)&&W(e)){var i=!this.config.opt_out_useragent_filter&&this._is_bot()
if(!i||this.config.__preview_capture_bot_pageviews){var s=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null==s||!s.isRateLimited){null!=t&&t.$current_url&&!W(null==t?void 0:t.$current_url)&&(Ot.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."),null==t||delete t.$current_url),this.sessionPersistence.update_search_keyword(),this.config.save_campaign_params&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.save_campaign_params||this.config.save_referrer)&&this.persistence.set_initial_person_info()
var o=new Date,a=(null==n?void 0:n.timestamp)||o,l=xr(),c={uuid:l,event:e,properties:this.calculateEventProperties(e,t||{},a,l)}
"$pageview"===e&&this.config.__preview_capture_bot_pageviews&&i&&(c.event="$bot_pageview",c.properties.$browser_type="bot"),s&&(c.properties.$lib_rate_limit_remaining_tokens=s.remainingTokens),(null==n?void 0:n.$set)&&(c.$set=null==n?void 0:n.$set)
var u,d="$groupidentify"!==e,f=this._calculate_set_once_properties(null==n?void 0:n.$set_once,d)
if(f&&(c.$set_once=f),(c=function(e,t){return n=e,r=e=>W(e)&&!Q(t)?e.slice(0,t):e,i=new Set,function e(t,n){return t!==Object(t)?r?r(t):t:i.has(t)?void 0:(i.add(t),B(t)?(s=[],Rt(t,t=>{s.push(e(t))})):(s={},jt(t,(t,n)=>{i.has(t)||(s[n]=e(t,n))})),s)
var s}(n)
var n,r,i}(c,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=a,z(null==n?void 0:n.timestamp)||(c.properties.$event_time_override_provided=!0,c.properties.$event_time_override_system_time=o),e===Rs.DISMISSED||e===Rs.SENT){var h=null==t?void 0:t[js.SURVEY_ID],g=null==t?void 0:t[js.SURVEY_ITERATION]
u={id:h,current_iteration:g},localStorage.getItem(Gs(u))||localStorage.setItem(Gs(u),"true"),c.$set=p({},c.$set,{[Us({id:h,current_iteration:g},e===Rs.SENT?"responded":"dismissed")]:!0})}var v=p({},c.properties.$set,c.$set)
if(G(v)||this.setPersonPropertiesForFlags(v),!J(this.config.before_send)){var _=this._runBeforeSend(c)
if(!_)return
c=_}this._internalEventEmitter.emit("eventCaptured",c)
var m={method:"POST",url:null!==(r=null==n?void 0:n._url)&&void 0!==r?r:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:c,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(m):this._requestQueue.enqueue(m),c}Ot.critical("This capture call is ignored due to client rate limiting.")}}else Ot.error("No event name provided to posthog.capture")}else Ot.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",t=>e(t.event,t))}calculateEventProperties(e,t,n,r,i){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var s=i?void 0:this.persistence.remove_event_timer(e),o=p({},t)
if(o.token=this.config.token,o.$config_defaults=this.config.defaults,("always"==this.config.cookieless_mode||"on_reject"==this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut())&&(o.$cookieless_mode=!0),"$snapshot"===e){var a=p({},this.persistence.properties(),this.sessionPersistence.properties())
return o.distinct_id=a.distinct_id,(!W(o.distinct_id)&&!K(o.distinct_id)||V(o.distinct_id))&&Ot.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),o}var l,c=_i(this.config.mask_personal_data_properties,this.config.custom_personal_data_properties)
if(this.sessionManager){var{sessionId:u,windowId:d}=this.sessionManager.checkAndGetSessionAndWindowId(i,n.getTime())
o.$session_id=u,o.$window_id=d}this.sessionPropsManager&&Ft(o,this.sessionPropsManager.getSessionProps())
try{var f
this.sessionRecording&&Ft(o,this.sessionRecording.sdkDebugProperties),o.$sdk_debug_retry_queue_size=null==(f=this._retryQueue)?void 0:f.length}catch(e){o.$sdk_debug_error_capturing_properties=String(e)}if(this.requestRouter.region===go.CUSTOM&&(o.$lib_custom_api_host=this.config.api_host),l="$pageview"!==e||i?"$pageleave"!==e||i?this.pageViewManager.doEvent():this.pageViewManager.doPageLeave(n):this.pageViewManager.doPageView(n,r),o=Ft(o,l),"$pageview"===e&&k&&(o.title=k.title),!z(s)){var h=n.getTime()-s
o.$duration=parseFloat((h/1e3).toFixed(3))}P&&this.config.opt_out_useragent_filter&&(o.$browser_type=this._is_bot()?"bot":"browser"),(o=Ft({},c,this.persistence.properties(),this.sessionPersistence.properties(),o)).$is_identified=this._isIdentified(),B(this.config.property_denylist)?jt(this.config.property_denylist,function(e){delete o[e]}):Ot.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var g=this.config.sanitize_properties
g&&(Ot.error("sanitize_properties is deprecated. Use before_send instead"),o=g(o,e))
var v=this._hasPersonProcessing()
return o.$process_person_profile=v,v&&!i&&this._requirePersonProcessing("_calculate_event_properties"),o}_calculate_set_once_properties(e,t){var n
if(void 0===t&&(t=!0),!this.persistence||!this._hasPersonProcessing())return e
if(this._personProcessingSetOncePropertiesSent)return e
var r=this.persistence.get_initial_props(),i=null==(n=this.sessionPropsManager)?void 0:n.getSetOnceProps(),s=Ft({},r,i||{},e||{}),o=this.config.sanitize_properties
return o&&(Ot.error("sanitize_properties is deprecated. Use before_send instead"),s=o(s,"$set_once")),t&&(this._personProcessingSetOncePropertiesSent=!0),G(s)?void 0:s}register(e,t){var n
null==(n=this.persistence)||n.register(e,t)}register_once(e,t,n){var r
null==(r=this.persistence)||r.register_once(e,t,n)}register_for_session(e){var t
null==(t=this.sessionPersistence)||t.register(e)}unregister(e){var t
null==(t=this.persistence)||t.unregister(e)}unregister_for_session(e){var t
null==(t=this.sessionPersistence)||t.unregister(e)}_register_single(e,t){this.register({[e]:t})}getFeatureFlag(e,t){return this.featureFlags.getFeatureFlag(e,t)}getFeatureFlagPayload(e){var t=this.featureFlags.getFeatureFlagPayload(e)
try{return JSON.parse(t)}catch(e){return t}}isFeatureEnabled(e,t){return this.featureFlags.isFeatureEnabled(e,t)}reloadFeatureFlags(){this.featureFlags.reloadFeatureFlags()}updateEarlyAccessFeatureEnrollment(e,t,n){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t,n)}getEarlyAccessFeatures(e,t,n){return void 0===t&&(t=!1),this.featureFlags.getEarlyAccessFeatures(e,t,n)}on(e,t){return this._internalEventEmitter.on(e,t)}onFeatureFlags(e){return this.featureFlags.onFeatureFlags(e)}onSurveysLoaded(e){return this.surveys.onSurveysLoaded(e)}onSessionId(e){var t,n
return null!==(t=null==(n=this.sessionManager)?void 0:n.onSessionId(e))&&void 0!==t?t:()=>{}}getSurveys(e,t){void 0===t&&(t=!1),this.surveys.getSurveys(e,t)}getActiveMatchingSurveys(e,t){void 0===t&&(t=!1),this.surveys.getActiveMatchingSurveys(e,t)}renderSurvey(e,t){this.surveys.renderSurvey(e,t)}displaySurvey(e,t){void 0===t&&(t=Ws),this.surveys.displaySurvey(e,t)}cancelPendingSurvey(e){this.surveys.cancelPendingSurvey(e)}canRenderSurvey(e){return this.surveys.canRenderSurvey(e)}canRenderSurveyAsync(e,t){return void 0===t&&(t=!1),this.surveys.canRenderSurveyAsync(e,t)}identify(e,t,n){if(!this.__loaded||!this.persistence)return Ot.uninitializedWarning("posthog.identify")
if(K(e)&&(e=e.toString(),Ot.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e)if(["distinct_id","distinctid"].includes(e.toLowerCase()))Ot.critical('The string "'+e+'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.')
else if(e!==En){if(this._requirePersonProcessing("posthog.identify")){var r=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){var i=r
this.register_once({$had_persisted_distinct_id:!0,$device_id:i},"")}e!==r&&e!==this.get_property(Qt)&&(this.unregister(Qt),this.register({distinct_id:e}))
var s="anonymous"===(this.persistence.get_property(_n)||"anonymous")
e!==r&&s?(this.persistence.set_property(_n,"identified"),this.setPersonPropertiesForFlags(p({},n||{},t||{}),!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:r},{$set:t||{},$set_once:n||{}}),this._cachedPersonProperties=ds(e,t,n),this.featureFlags.setAnonymousDistinctId(r)):(t||n)&&this.setPersonProperties(t,n),e!==r&&(this.reloadFeatureFlags(),this.unregister(vn))}}else Ot.critical('The string "'+En+'" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.')
else Ot.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){if((e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")){var n=ds(this.get_distinct_id(),e,t)
this._cachedPersonProperties!==n?(this.setPersonPropertiesForFlags(p({},t||{},e||{})),this.capture("$set",{$set:e||{},$set_once:t||{}}),this._cachedPersonProperties=n):Ot.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")}}group(e,t,n){if(e&&t){var r=this.getGroups()
r[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:p({},r,{[e]:t})}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),r[e]===t||n||this.reloadFeatureFlags()}else Ot.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0),this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0),this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,r,i
if(Ot.info("reset"),!this.__loaded)return Ot.uninitializedWarning("posthog.reset")
var s=this.get_property("$device_id")
if(this.consent.reset(),null==(t=this.persistence)||t.clear(),null==(n=this.sessionPersistence)||n.clear(),this.surveys.reset(),this.featureFlags.reset(),null==(r=this.persistence)||r.set_property(_n,"anonymous"),null==(i=this.sessionManager)||i.resetSessionId(),this._cachedPersonProperties=null,"always"===this.config.cookieless_mode)this.register_once({distinct_id:En,$device_id:null},"")
else{var o=this.config.get_device_id(xr())
this.register_once({distinct_id:o,$device_id:e?o:s},"")}this.register({$last_posthog_reset:(new Date).toISOString()},1)}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null==(t=this.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
var{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0),r=this.requestRouter.endpointFor("ui","/project/"+this.config.token+"/replay/"+t)
if(null!=e&&e.withTimestamp&&n){var i,s=null!==(i=e.timestampLookBack)&&void 0!==i?i:10
if(!n)return r
r+="?t="+Math.max(Math.floor(((new Date).getTime()-n)/1e3)-s,0)}return r}alias(e,t){return e===this.get_property(Vt)?(Ot.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(z(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(Qt,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(Ot.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t=p({},this.config)
if(U(e)){var n,r,i,s,o
Ft(this.config,Io(e))
var a=this._is_persistence_disabled()
null==(n=this.persistence)||n.update_config(this.config,t,a),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new Ts(p({},this.config,{persistence:"sessionStorage"}),a)
var l=this._checkLocalStorageForDebug(this.config.debug)
Y(l)&&(this.config.debug=l),Y(this.config.debug)&&(this.config.debug?(T.DEBUG=!0,Tr._is_supported()&&Tr._set("ph_debug","true"),Ot.info("set_config",{config:e,oldConfig:t,newConfig:p({},this.config)})):(T.DEBUG=!1,Tr._is_supported()&&Tr._remove("ph_debug"))),null==(r=this.sessionRecording)||r.startIfEnabledOrStop(),null==(i=this.autocapture)||i.startIfEnabled(),null==(s=this.heatmaps)||s.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence(),null==(o=this.externalIntegrations)||o.startIfEnabledOrStop()}}startSessionRecording(e){var t,n,r,i,s,o=!0===e,a={sampling:o||!(null==e||!e.sampling),linked_flag:o||!(null==e||!e.linked_flag),url_trigger:o||!(null==e||!e.url_trigger),event_trigger:o||!(null==e||!e.event_trigger)}
Object.values(a).some(Boolean)&&(null==(t=this.sessionManager)||t.checkAndGetSessionAndWindowId(),a.sampling&&(null==(n=this.sessionRecording)||n.overrideSampling()),a.linked_flag&&(null==(r=this.sessionRecording)||r.overrideLinkedFlag()),a.url_trigger&&(null==(i=this.sessionRecording)||i.overrideTrigger("url")),a.event_trigger&&(null==(s=this.sessionRecording)||s.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null==(e=this.sessionRecording)||!e.started)}captureException(e,t){var n=new Error("PostHog syntheticException"),r=this.exceptions.buildProperties(e,{handled:!0,syntheticException:n})
return this.exceptions.sendExceptionEvent(p({},r,t))}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null==(t=this.persistence)?void 0:t.props[e]}getSessionProperty(e){var t
return null==(t=this.sessionPersistence)?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:Lo
return t!==Lo&&(t=Lo+"."+t),t}_isIdentified(){var e,t
return"identified"===(null==(e=this.persistence)?void 0:e.get_property(_n))||"identified"===(null==(t=this.sessionPersistence)?void 0:t.get_property(_n))}_hasPersonProcessing(){var e,t
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&G(this.getGroups())&&(null==(e=this.persistence)||null==(e=e.props)||!e[Qt])&&(null==(t=this.persistence)||null==(t=t.props)||!t[xn]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&(!0===this.config.capture_pageview||"history_change"===this.config.capture_pageview)}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(Ot.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(xn,!0),!0)}_is_persistence_disabled(){if("always"===this.config.cookieless_mode)return!0
var e=this.consent.isOptedOut(),t=this.config.opt_out_persistence_by_default||"on_reject"===this.config.cookieless_mode
return this.config.disable_persistence||e&&!!t}_sync_opt_out_with_persistence(){var e,t,n,r,i=this._is_persistence_disabled()
return(null==(e=this.persistence)?void 0:e._disabled)!==i&&(null==(n=this.persistence)||n.set_disabled(i)),(null==(t=this.sessionPersistence)?void 0:t._disabled)!==i&&(null==(r=this.sessionPersistence)||r.set_disabled(i)),i}opt_in_capturing(e){var t,n,r
"always"!==this.config.cookieless_mode?("on_reject"===this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut()&&(this.reset(!0),null==(n=this.sessionManager)||n.destroy(),this.sessionManager=new co(this),this.persistence&&(this.sessionPropsManager=new ao(this,this.sessionManager,this.persistence)),this.sessionRecording=new Eo(this),this.sessionRecording.startIfEnabledOrStop()),this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),this._start_queue_if_opted_in(),null==(t=this.sessionRecording)||t.startIfEnabledOrStop(),"on_reject"==this.config.cookieless_mode&&this.surveys.loadIfEnabled(),(z(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(r=null==e?void 0:e.captureEventName)&&void 0!==r?r:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()):Ot.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')}opt_out_capturing(){var e,t
"always"!==this.config.cookieless_mode?("on_reject"===this.config.cookieless_mode&&this.consent.isOptedIn()&&this.reset(!0),this.consent.optInOut(!1),this._sync_opt_out_with_persistence(),"on_reject"===this.config.cookieless_mode&&(this.register({distinct_id:En,$device_id:null}),null==(e=this.sessionManager)||e.destroy(),this.sessionManager=void 0,this.sessionPropsManager=void 0,null==(t=this.sessionRecording)||t.stopRecording(),this.sessionRecording=void 0,this._captureInitialPageview())):Ot.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}get_explicit_consent_status(){var e=this.consent.consent
return e===jr.GRANTED?"granted":e===jr.DENIED?"denied":"pending"}is_capturing(){return"always"===this.config.cookieless_mode||("on_reject"===this.config.cookieless_mode?this.consent.isExplicitlyOptedOut()||this.consent.isOptedIn():!this.has_opted_out_capturing())}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return w?po(w,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){k&&("visible"===k.visibilityState?this._initialPageviewCaptured||(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:k.title},{send_instantly:!0}),this._visibilityStateListener&&(k.removeEventListener("visibilitychange",this._visibilityStateListener),this._visibilityStateListener=null)):this._visibilityStateListener||(this._visibilityStateListener=this._captureInitialPageview.bind(this),Wt(k,"visibilitychange",this._visibilityStateListener)))}debug(e){!1===e?(null==v||v.console.log("You've disabled debug mode."),this.set_config({debug:!1})):(null==v||v.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),this.set_config({debug:!0}))}_shouldDisableFlags(){var e,t,n,r,i,s,o=this._originalUserConfig||{}
return"advanced_disable_flags"in o?!!o.advanced_disable_flags:!1!==this.config.advanced_disable_flags?!!this.config.advanced_disable_flags:!0===this.config.advanced_disable_decide?(Ot.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."),!0):(n="advanced_disable_decide",r=Ot,i=(t="advanced_disable_flags")in(e=o)&&!z(e[t]),s=n in e&&!z(e[n]),i?e[t]:!!s&&(r&&r.warn("Config field '"+n+"' is deprecated. Please use '"+t+"' instead. The old field will be removed in a future major version."),e[n]))}_runBeforeSend(e){if(J(this.config.before_send))return e
var t=B(this.config.before_send)?this.config.before_send:[this.config.before_send],n=e
for(var r of t){if(n=r(n),J(n)){var i="Event '"+e.event+"' was rejected in beforeSend function"
return X(e.event)?Ot.warn(i+". This can cause unexpected behavior."):Ot.info(i),null}n.properties&&!G(n.properties)||Ot.warn("Event '"+e.event+"' has no properties after beforeSend function, this is likely an error.")}return n}getPageViewId(){var e
return null==(e=this.pageViewManager._currentPageview)?void 0:e.pageViewId}captureTraceFeedback(e,t){this.capture("$ai_feedback",{$ai_trace_id:String(e),$ai_feedback_text:t})}captureTraceMetric(e,t,n){this.capture("$ai_metric",{$ai_trace_id:String(e),$ai_metric_name:t,$ai_metric_value:String(n)})}_checkLocalStorageForDebug(e){var t=Y(e)&&!e,n=Tr._is_supported()&&"true"===Tr._get("ph_debug")
return!t&&(!!n||e)}}!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=Bt(e.prototype[t[n]])}(Ao,["identify"])
var Mo,Ro=(Mo=Co[Lo]=new Ao,function(){function e(){e.done||(e.done=!0,To=!1,jt(Co,function(e){e._dom_loaded()}))}null!=k&&k.addEventListener?"complete"===k.readyState?e():Wt(k,"DOMContentLoaded",e,{capture:!1}):v&&Ot.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")}(),Mo)
function jo(...e){console.log(...e)}function Fo(...e){}function No(e,t){Ro.capture(e,t)}function Do(){"string"==typeof window.self&&(s(),window.self=window),function(){try{Ro.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){jo(e)}}()}let qo=0,Bo=0,Ho=0,Uo=0,Go=0,zo=0,Wo=0
const Vo=()=>Date.now(),Qo=()=>Math.floor(Vo()/1e3)
function Jo(){return qo||(qo=Vo()),qo}function Ko(){return Bo||(Bo=Jo()-3e5),Bo}function Yo(){return Ho||(Ho=Jo()-1728e5),Ho}function Xo(){return Uo||(Uo=Math.floor(Jo()/1e3)),Uo}function Zo(){return Go||(Go=Xo()-120),Go}function ea(){return zo||(zo=Xo()-86400),zo}function ta(){return Wo||(Wo=Xo()-604800),Wo}function na(e){return null===e}function ra(e){return void 0===e}const ia=`${document.location.protocol}//${document.location.host}/`,sa=window.HCS?.defines?.cdn,oa=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],aa=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],la=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ca=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,ua=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,da=/guild_id=(?<guildId>\d+)/,fa=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,ha=/player_id=(?<playerId>\d+)/,pa=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,ga=/VL:.+?(?<vl>\d+)/,va=/creatures\/(\d+)[A-Za-z0-9]{32}\.png/,_a=.2,ma="joinallgroupsundersize",ba="index.php",ya="?cmd=",wa=`${ba}${ya}`,ka="&subcmd=",xa="&target_username=",Sa=`${wa}auctionhouse`,Ea=`${Sa}&search=`,Ca=`${wa}log`,Pa=`${wa}ignore${ka}add&ignore_username=`,La=`${wa}profile`,Ta=`${La}&player_id=`,$a=`${La}${ka}dropitems`,Ia=`${wa}trade&target_player=`,Oa=`${wa}trade${ka}createsecure${xa}`,Aa=`${wa}arena${ka}`,Ma=`${ba}${`${ya}notepad&blank=1${ka}`}`,Ra=`${Ma}auctionsearch`,ja=`${wa}points`,Fa=`${wa}guild${ka}`,Na=`${Fa}log`,Da=`${Fa}scouttower`,qa=`${Fa}groups&subcmd2=`,Ba=`${Fa}inventory&subcmd2=report&user=`,Ha=`${Fa}view&guild_id=`,Ua=`${qa}joinall`,Ga=`${qa}${ma}`,za=`${wa}world`,Wa=`${wa}findplayer`,Va=`${Wa}&search_show_first=1&search_username=`,Qa=`${wa}blacksmith`,Ja=`${wa}quickbuff`,Ka=`${wa}composing`,Ya=`${wa}attackplayer${xa}`,Xa=`${wa}${ka}viewupdatearchive`,Za=`${wa}${ka}viewarchive`,el=`${wa}bounty`,tl=`${wa}inventing${ka}viewrecipe&recipe_id=`,nl=`https://guide.fallensword.com/${wa}`,rl="after-update.actionlist",il="buffs.player",sl="update.player",ol="level.stats-player",al="gold.stats-player",ll="prompt.worldDialogShop",cl="keydown.controls",ul="update.realm",dl="-success.action-response",fl=`-1${dl}`,hl=`1${dl}`,pl=`2${dl}`,gl=`9${dl}`,vl=`5${dl}`,_l=`25${dl}`,ml=2,bl=16,yl=128,wl=256,kl="needToCompose",xl="lastComposeCheck",Sl="characterVirtualLevel",El="enableGuildActivityTracker",Cl="lastLadderReset",Pl="form",Ll="table",Tl="td",$l="fsh_buffLog",Il="stat-level",Ol="stat-defense",Al="stat-attack",Ml="stat-damage",Rl="stat-armor",jl="stat-hp",Fl="stat-vl",Nl="GM_",Dl=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],ql=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],Bl=`${sa}ui/world/action_spinner.gif`,Hl=".fa-envelope",Ul='a[href*="&player_id="]',Gl=.002,zl=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],Wl='input[name="blockedSkillList[]"]',Vl=86400,Ql=1e3
var Jl={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0,dailyQuestReRoll:!1}
const Kl=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function Yl(e,t){const n=window.localStorage.getItem(Nl+e)
return na(n)||ra(n)?t:function(e){const t=Kl.find(t=>e.startsWith(t[0]))
return t?t[1](e):e}(n)}function Xl(e){return!e.startsWith("screenview__")&&ra(Jl[e]),Yl(e,Jl[e])}function Zl(e){return"boolean"==typeof e}function ec(e){return"string"==typeof e}function tc(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(Nl+e,t+n)}const nc=[[ec,(e,t)=>{tc(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&tc(e,"N]",t)}],[Zl,(e,t)=>{tc(e,"B]",t)}]]
function rc(e,t){const n=nc.find(e=>e[0](t))
n&&n[1](e,t)}function ic(e){const t=`screenview__${e}`,n=Xl(t)
Number.isFinite(n)&&n>ea()||(No(t),rc(t,Xo()))}function sc(e){return"function"==typeof e}function oc(e){return"object"==typeof e}function ac(e,t){try{return JSON.parse(e,t)}catch(e){}}function lc(e,t){return t?t.querySelector(e):document.querySelector(e)}function cc(e){const t=lc("link",document.body)
return new Promise(n=>{const r=document.createElement("link")
r.type="text/css",r.rel="stylesheet",r.onload=()=>{n()},r.href=e,t?t.before(r):document.body.append(r)})}var uc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fc,hc={exports:{}}
var pc=(fc||(fc=1,hc.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==uc?uc:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}),n}var r={},i={},s={},o={},a="<unknown>"
function l(e){return e.split("\n").reduce(function(e,t){var n=d(t)||h(t)||v(t)||y(t)||m(t)
return n&&e.push(n),e},[])}var c=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,u=/\((\S*)(?::(\d+))(?::(\d+))\)/
function d(e){var t=c.exec(e)
if(!t)return null
var n=t[2]&&0===t[2].indexOf("native"),r=t[2]&&0===t[2].indexOf("eval"),i=u.exec(t[2])
return r&&null!=i&&(t[2]=i[1],t[3]=i[2],t[4]=i[3]),{file:n?null:t[2],methodName:t[1]||a,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var f=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function h(e){var t=f.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var p=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,g=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function v(e){var t=p.exec(e)
if(!t)return null
var n=t[3]&&t[3].indexOf(" > eval")>-1,r=g.exec(t[3])
return n&&null!=r&&(t[3]=r[1],t[4]=r[2],t[5]=null),{file:t[3],methodName:t[1]||a,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var _=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i
function m(e){var t=_.exec(e)
return t?{file:t[3],methodName:t[1]||a,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var b=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
function y(e){var t=b.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var w=n(Object.freeze({__proto__:null,parse:l}));(function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i)
return r(t,e),t},s=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},o=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}}
Object.defineProperty(t,"__esModule",{value:!0}),t.logDeprecatedMethod=t.globalThisOrWindow=t.isBrowserConfig=t.clone=t.formatCGIData=t.filterUrl=t.filter=t.generateStackTrace=t.endpoint=t.instrumentConsole=t.instrument=t.isErrorObject=t.makeNotice=t.logger=t.sanitize=t.shallowClone=t.runAfterNotifyHandlers=t.runBeforeNotifyHandlers=t.getSourceForBacktrace=t.getCauses=t.calculateBacktraceShift=t.DEFAULT_BACKTRACE_SHIFT=t.makeBacktrace=t.objectIsExtensible=t.objectIsEmpty=t.mergeNotice=t.merge=void 0
var a=i(w)
function l(e,t){var n={}
for(var r in e)n[r]=e[r]
for(var r in t)n[r]=t[r]
return n}function c(e,t){var n=l(e,t)
return e.context&&t.context&&(n.context=l(e.context,t.context)),n}function u(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
return!0}function d(e){return"function"!=typeof Object.isExtensible||Object.isExtensible(e)}function f(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=console),!e)return[]
try{var r=a.parse(e).map(function(e){return{file:e.file,method:e.methodName,number:e.lineNumber,column:e.column}})
return t&&r.splice(0,p(r)),r}catch(e){return n.debug(e),[]}}function h(e){var t=!1,n=!1
return e.file&&(t=e.file.toLowerCase().indexOf("@honeybadger-io")>-1),e.method&&(n=e.method.toLowerCase().indexOf("@honeybadger-io")>-1),t||n}function p(e){for(var n=0,r=0;r<e.length;r++){var i=e[r]
if(!h(i)){if(!i.file||"<anonymous>"===i.file){var s=e[r+1]
if(s&&h(s)){n++
continue}}break}n++}return n||t.DEFAULT_BACKTRACE_SHIFT}function g(e,t){if(e.cause){for(var n=[],r=e;n.length<3&&(r=r.cause);)n.push({class:r.name,message:r.message,backtrace:"string"==typeof r.stack?f(r.stack,!1,t):null})
return n}return[]}function v(e,t){return s(this,void 0,void 0,function(){var n,r,i,s
return o(this,function(o){switch(o.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
r=0,o.label=1
case 1:return e.length?(i=e.splice(0)[r],[4,t(i.file)]):[3,3]
case 2:return s=o.sent(),n[r]=B(s,i.number,i.column,2),r++,[3,1]
case 3:return[2,n]}})})}function _(e,t){for(var n=[],r=!0,i=0,s=t.length;i<s;i++){var o=(0,t[i])(e)
!1===o&&(r=!1),n.push(o)}return{results:n,result:r}}function m(e,t,n){e&&e.afterNotify&&e.afterNotify(n,e)
for(var r=0,i=t.length;r<i;r++)t[r](n,e)
return!0}function b(e){if("object"!=typeof e||null===e)return{}
var t={}
for(var n in e)t[n]=e[n]
return t}function y(e,t){void 0===t&&(t=8)
var n=[]
function r(e){if(!e||"object"!=typeof e)return!1
for(var t=0;t<n.length;t++)if(n[t]===e)return!0
return n.push(e),!1}function i(e){var t=typeof e
return/function/.test(t)?"toJSON"===e.name:!/symbol/.test(t)&&null!==e&&("object"!=typeof e||void 0!==e.hasOwnProperty)}function s(e,n){if(void 0===n&&(n=0),n>=t)return"[DEPTH]"
if(!i(e))return Object.prototype.toString.call(e)
if(r(e))return"[RECURSION]"
if(Array.isArray(e))return e.map(function(e){return o(e,n+1)})
if("object"==typeof e){var s={}
for(var a in e){var l=e[a]
Object.prototype.hasOwnProperty.call(e,a)&&null!=a&&null!=l&&(s[a]=o(l,n+1))}return s}return e}function o(e,t){void 0===t&&(t=0)
try{return s(e,t)}catch(e){return"[ERROR] ".concat(e)}}return o(e)}function k(e){var t=function(t){return function(){for(var n,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i]
if("debug"===t){if(!e.config.debug)return
t="log"}r.unshift("[Honeybadger]"),(n=e.config.logger)[t].apply(n,r)}}
return{log:t("log"),info:t("info"),debug:t("debug"),warn:t("warn"),error:t("error")}}function x(e){var t
if(e)if(S(e)){var n=e
t=l(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?b(e):{message:String(e)}
else t={}
return t}function S(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function E(e,t,n){if(e&&t&&n&&t in e)try{for(var r=e[t];r&&r.__hb_original;)r=r.__hb_original
e[t]=n(r),e[t].__hb_original=r}catch(e){}}t.merge=l,t.mergeNotice=c,t.objectIsEmpty=u,t.objectIsExtensible=d,t.makeBacktrace=f,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=p,t.getCauses=g,t.getSourceForBacktrace=v,t.runBeforeNotifyHandlers=_,t.runAfterNotifyHandlers=m,t.shallowClone=b,t.sanitize=y,t.logger=k,t.makeNotice=x,t.isErrorObject=S,t.instrument=E
var C=!1,P=[]
function L(e,t){e&&e.console&&t&&(P.push(t),C||(C=!0,["debug","info","warn","error","log"].forEach(function(t){E(e.console,t,function(n){return function(){var r=Array.prototype.slice.call(arguments)
P.forEach(function(e){try{e(t,r)}catch(e){}}),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}})})))}function T(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function $(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function I(e,t){if(A("Object",e)){A("Array",t)||(t=[])
var n=[]
return r(e)}function r(e){var i,s
if(A("Object",e)||A("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(A("Object",e)){for(i in s={},e)O(i,t)?s[i]="[FILTERED]":s[i]=r(e[i])
return s}return A("Array",e)?e.map(function(e){return r(e)}):A("Function",e)?"[FUNC]":e}}function O(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function A(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function M(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var r=e
return n.split(/[&]\s?/).forEach(function(e){var n=e.split("=",2),i=n[0],s=n[1]
O(i,t)&&(r=r.replace("".concat(i,"=").concat(s),"".concat(i,"=[FILTERED]")))}),r}function R(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach(function(r){var i=t+r.replace(/\W/g,"_").toUpperCase()
n[i]=e[r]}),n}function j(e){return JSON.parse(JSON.stringify(e))}t.instrumentConsole=L,t.endpoint=T,t.generateStackTrace=$,t.filter=I,t.filterUrl=M,t.formatCGIData=R,t.clone=j
var F=1e4,N=1e4,D=2e5
function q(e){var t
return(t={})[e]="SOURCE_SIZE_TOO_LARGE",t}function B(e,t,n,r){if(!e)return null
if(n&&n>F)return q(t)
if(e.length>D)return q(t)
var i=e.split("\n")
i.unshift("")
var s=i[t]
if(s&&s.length>N)return q(t)
for(var o=t+r,a={},l=t-r;l<=o;l++){var c=i[l]
"string"==typeof c&&(a[l]=c)}return a}function H(e){return void 0!==e.async}function U(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.isBrowserConfig=H,t.globalThisOrWindow=U
var G={}
function z(e,t,n,r){void 0===r&&(r=100)
var i="".concat(t,"-").concat(n)
if(void 0===G[i]&&(G[i]=0),G[i]%r===0){var s="Deprecation warning: ".concat(t," has been deprecated; please use ").concat(n," instead.")
e.warn(s),G[i]++}else G[i]++}t.logDeprecatedMethod=z})(o),Object.defineProperty(s,"__esModule",{value:!0})
var k=o
function x(e){return void 0===e&&(e=(0,k.globalThisOrWindow)()),{shouldReloadOnConfigure:!1,load:function(t){function n(){return t.config.eventsEnabled}n()&&(0,k.instrumentConsole)(e,function(e,r){if(n()&&0!==r.length){var i={severity:e}
"string"==typeof r[0]?(i.message=r[0],i.args=r.slice(1)):i.args=r,t.event("log",i)}})}}}s.default=x
var S={},E={}
Object.defineProperty(E,"__esModule",{value:!0}),E.GlobalStore=void 0
var C=o,P=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,C.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
E.GlobalStore=P
var L={}
class T{static parse(e){return e.trim().split("\n").map(e=>JSON.parse(e))}static stringify(e){return e.map(e=>JSON.stringify(e)).join("\n")}}var $=Object.freeze({__proto__:null,NdJson:T}),I=n($),O={}
Object.defineProperty(O,"__esModule",{value:!0}),O.CONFIG=void 0,O.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",appEndpoint:"https://app.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var A=e&&e.__assign||function(){return A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},A.apply(this,arguments)},M=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},R=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}}
Object.defineProperty(L,"__esModule",{value:!0}),L.ThrottledEventsLogger=void 0
var j=I,F=o,N=O,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=A(A({},N.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.flushAsync=function(){return this.logger.debug("[Honeybadger] Flushing events"),this.send()},e.prototype.processQueue=function(){var e=this
0===this.queue.length||this.isProcessing||(this.isProcessing=!0,this.send().then(function(){setTimeout(function(){e.isProcessing=!1,e.processQueue()},50)}).catch(function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout(function(){e.isProcessing=!1,e.processQueue()},50)}))},e.prototype.send=function(){return M(this,void 0,void 0,function(){var e,t
return R(this,function(n){return 0===this.queue.length?[2]:(e=this.queue.slice(),this.queue=[],t=j.NdJson.stringify(e),[2,this.makeHttpRequest(t)])})})},e.prototype.makeHttpRequest=function(e){return M(this,void 0,void 0,function(){var t=this
return R(this,function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,F.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then(function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")}).catch(function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))})]})})},e.prototype.originalLogger=function(){var e,t,n,r,i
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(r=console.warn.__hb_original)&&void 0!==r?r:console.warn,error:null!==(i=console.error.__hb_original)&&void 0!==i?i:console.error}},e}()
L.ThrottledEventsLogger=D
var q=e&&e.__assign||function(){return q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},q.apply(this,arguments)},B=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},H=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}}
Object.defineProperty(S,"__esModule",{value:!0}),S.Client=void 0
var U=o,G=E,z=L,W=O,V=/,|\s+/,Q=/\S/,J=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.12.3"},this.config=q(q({},W.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new z.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,U.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
return this.__eventsLogger.configure(this.config),this.loadPlugins(),this},e.prototype.loadPlugins=function(){var e=this;(this.__pluginsLoaded?this.config.__plugins.filter(function(e){return e.shouldReloadOnConfigure}):this.config.__plugins).forEach(function(t){return t.load(e)}),this.__pluginsLoaded=!0},e.prototype.__initStore=function(){this.__store=new G.GlobalStore({context:{},breadcrumbs:[]},this.config.maxBreadcrumbs)},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&null!=e&&this.__store.setContext(e),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__store.clear(),"object"==typeof e&&null!==e&&this.__store.setContext(e),this},e.prototype.clear=function(){return this.__store.clear(),this},e.prototype.notify=function(e,t,n){var r=this
void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var i=this.makeNotice(e,t,n),s=i&&i.backtrace?i.backtrace.map(function(e){return(0,U.shallowClone)(e)}):null,o=this.__runPreconditions(i)
return o instanceof Error?((0,U.runAfterNotifyHandlers)(i,this.__afterNotifyHandlers,o),!1):o instanceof Promise?(o.then(function(e){return e instanceof Error?((0,U.runAfterNotifyHandlers)(i,r.__afterNotifyHandlers,e),!1):r.__send(i,s)}),!0):(this.__send(i,s).catch(function(e){}),!0)},e.prototype.notifyAsync=function(e,t,n){var r=this
return void 0===t&&(t=void 0),void 0===n&&(n=void 0),new Promise(function(i,s){var o,a
o=e.afterNotify?e:t&&t.afterNotify?t:n&&n.afterNotify?n:t&&"object"==typeof t?t:n||(t={}),a=o.afterNotify,o.afterNotify=function(e){if(null==a||a.call(r,e),e)return s(e)
i()},r.notify(e,t,n)})},e.prototype.makeNotice=function(e,t,n){void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var r=(0,U.makeNotice)(e)
if(t&&"object"!=typeof t&&(t={name:String(t)}),t&&(r=(0,U.mergeNotice)(r,t)),"object"==typeof n&&null!==n&&(r=(0,U.mergeNotice)(r,n)),(0,U.objectIsEmpty)(r))return null
var i=this.__store.getContents("context"),s=this.__constructTags(r.tags),o=this.__constructTags(i.tags),a=this.__constructTags(this.config.tags),l=s.concat(o).concat(a),c=l.filter(function(e,t){return l.indexOf(e)===t})
return r=(0,U.merge)(r,{name:r.name||"Error",context:(0,U.merge)(i,r.context),projectRoot:r.projectRoot||this.config.projectRoot,environment:r.environment||this.config.environment,component:r.component||this.config.component,action:r.action||this.config.action,revision:r.revision||this.config.revision,tags:c}),Array.isArray(r.backtrace)&&r.backtrace.length||("string"==typeof r.stack&&r.stack.trim()?r.backtrace=(0,U.makeBacktrace)(r.stack,!1,this.logger):(r.stack=(0,U.generateStackTrace)(),r.backtrace=(0,U.makeBacktrace)(r.stack,!0,this.logger))),r},e.prototype.addBreadcrumb=function(e,t){if(this.config.breadcrumbsEnabled){t=t||{}
var n=(0,U.shallowClone)(t.metadata),r=t.category||"custom",i=(new Date).toISOString()
return this.__store.addBreadcrumb({category:r,message:e,metadata:n,timestamp:i}),this}},e.prototype.logEvent=function(e){(0,U.logDeprecatedMethod)(this.logger,"Honeybadger.logEvent","Honeybadger.event"),this.event("log",e)},e.prototype.event=function(e,t){var n
"object"==typeof e&&(t=e,e=null!==(n=e.event_type)&&void 0!==n?n:void 0),this.__eventsLogger.log(q({event_type:e,ts:(new Date).toISOString()},t))},e.prototype.flushAsync=function(){return this.__eventsLogger.flushAsync()},e.prototype.__getBreadcrumbs=function(){return this.__store.getContents("breadcrumbs").slice()},e.prototype.__getContext=function(){return this.__store.getContents("context")},e.prototype.__developmentMode=function(){return!0!==this.config.reportData&&this.config.environment&&this.config.developmentEnvironments.includes(this.config.environment)},e.prototype.__buildPayload=function(e){var t=(0,U.filter)(e.headers,this.config.filters)||{},n=(0,U.filter)(q(q({},e.cgiData),(0,U.formatCGIData)(t,"HTTP_")),this.config.filters)
return{notifier:this.__notifier,breadcrumbs:{enabled:!!this.config.breadcrumbsEnabled,trail:e.__breadcrumbs||[]},error:{class:e.name,message:e.message,backtrace:e.backtrace,fingerprint:e.fingerprint,tags:e.tags,causes:(0,U.getCauses)(e,this.logger)},request:{url:(0,U.filterUrl)(e.url,this.config.filters),component:e.component,action:e.action,context:e.context,cgi_data:n,params:(0,U.filter)(e.params,this.config.filters)||{},session:(0,U.filter)(e.session,this.config.filters)||{}},server:{project_root:e.projectRoot,environment_name:e.environment,revision:e.revision,hostname:this.config.hostname,time:(new Date).toUTCString()},details:e.details||{}}},e.prototype.__constructTags=function(e){return e?e.toString().split(V).filter(function(e){return Q.test(e)}):[]},e.prototype.__runPreconditions=function(e){var t=this,n=null
e||(this.logger.debug("failed to build error report"),n=new Error("failed to build error report")),!1===this.config.reportData&&(this.logger.debug("skipping error report: honeybadger.js is disabled",e),n=new Error("honeybadger.js is disabled")),this.__developmentMode()&&(this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.",e),n=new Error("honeybadger.js is in development mode")),this.config.apiKey||(this.logger.warn("could not send error report: no API key has been configured",e),n=new Error("missing API key"))
var r=(0,U.runBeforeNotifyHandlers)(e,this.__beforeNotifyHandlers)
return n||r.result||(this.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers returned false")),r.results.length&&r.results.some(function(e){return e instanceof Promise})?Promise.allSettled(r.results).then(function(r){if(!n&&r.some(function(e){return"rejected"===e.status||!1===e.value})&&(t.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers (async) returned false")),n)return n}):n},e.prototype.__send=function(e,t){var n=this
return this.config.breadcrumbsEnabled?(this.addBreadcrumb("Honeybadger Notice",{category:"notice",metadata:{message:e.message,name:e.name,stack:e.stack}}),e.__breadcrumbs=this.__store.getContents("breadcrumbs")):e.__breadcrumbs=[],(0,U.getSourceForBacktrace)(t,this.__getSourceFileHandler).then(function(t){return B(n,void 0,void 0,function(){var n
return H(this,function(r){return t.forEach(function(t,n){e.backtrace[n].source=t}),n=this.__buildPayload(e),[2,this.__transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json",Accept:"text/json, application/json"},method:"POST",endpoint:(0,U.endpoint)(this.config.endpoint,"/v1/notices/js"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},n)]})})}).then(function(t){if(201!==t.statusCode)return(0,U.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,new Error("Bad HTTP response: ".concat(t.statusCode))),n.logger.warn("Error report failed: unknown response from server. code=".concat(t.statusCode)),!1
var r=JSON.parse(t.body).id;(0,U.runAfterNotifyHandlers)((0,U.merge)(e,{id:r}),n.__afterNotifyHandlers)
var i=(0,U.endpoint)(n.config.appEndpoint,"notice/".concat(r))
return n.logger.info("Error report sent ⚡ ".concat(i)),!0}).catch(function(t){return n.logger.error("Error report failed: an unknown error occurred.","message=".concat(t.message)),(0,U.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,t),!1})},e}()
S.Client=J
var K={}
Object.defineProperty(K,"__esModule",{value:!0}),function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e&&e.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},a=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i)
return r(t,e),t},l=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Defaults=t.Util=t.Types=t.Client=void 0
var c=l(s),u=S
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return u.Client}}),i(E,t),t.Types=a(K),t.Util=a(o),t.Defaults=a(O),t.Plugins={events:c.default}}(i)
var Y={}
Object.defineProperty(Y,"__esModule",{value:!0}),Y.preferCatch=Y.encodeCookie=Y.decodeCookie=Y.localURLPathname=Y.parseURL=Y.nativeFetch=Y.stringTextOfElement=Y.stringSelectorOfElement=Y.stringNameOfElement=void 0
var X=i.Util.globalThisOrWindow
function Z(e){if(!e||!e.tagName)return""
var t=e.tagName.toLowerCase()
if("html"===t)return""
e.id&&(t+="#".concat(e.id))
var n=e.getAttribute("class")
n&&n.split(/\s+/).forEach(function(e){t+=".".concat(e)}),["alt","name","title","type"].forEach(function(n){var r=e.getAttribute(n)
r&&(t+="[".concat(n,'="').concat(r,'"]'))})
var r=le(e)
return r.length>1&&(t+=":nth-child(".concat(Array.prototype.indexOf.call(r,e)+1,")")),t}function ee(e){var t=Z(e)
if(e.parentNode&&e.parentNode.tagName){var n=ee(e.parentNode)
if(n.length>0)return"".concat(n," > ").concat(t)}return t}function te(e){var t=e.textContent||e.innerText||""
return t||"submit"!==e.type&&"button"!==e.type||(t=e.value),ce(t.trim(),300)}function ne(){var e=X()
if(!e.fetch)return!1
if(re(e.fetch))return!0
if("undefined"==typeof document)return!1
try{var t=document.createElement("iframe")
t.style.display="none",document.head.appendChild(t)
var n=t.contentWindow.fetch&&re(t.contentWindow.fetch)
return document.head.removeChild(t),n}catch(e){console&&console.warn&&console.warn("failed to detect native fetch via iframe: "+e)}return!1}function re(e){return-1!==e.toString().indexOf("native")}function ie(e){var t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)||{}
return{protocol:t[2],host:t[4],pathname:t[5]}}function se(e){var t=ie(e),n=ie(document.URL)
return t.host&&t.protocol?t.protocol===n.protocol&&t.host===n.host?t.pathname:"".concat(t.protocol,"://").concat(t.host).concat(t.pathname):t.pathname}function oe(e){var t={}
return e.split(/[;,]\s?/).forEach(function(e){var n=e.split("=",2),r=n[0],i=n[1]
t[r]=i}),t}function ae(e){if("object"==typeof e){var t=[]
for(var n in e)t.push(n+"="+e[n])
return t.join(";")}}function le(e){try{var t=e.parentNode.childNodes,n=[]
return Array.prototype.forEach.call(t,function(t){t.tagName&&t.tagName===e.tagName&&n.push(t)}),n}catch(e){return[]}}function ce(e,t){return e.length>t&&(e=e.substr(0,t)+"..."),e}Y.stringNameOfElement=Z,Y.stringSelectorOfElement=ee,Y.stringTextOfElement=te,Y.nativeFetch=ne,Y.parseURL=ie,Y.localURLPathname=se,Y.decodeCookie=oe,Y.encodeCookie=ae,Y.preferCatch=function(){var e=!0
if("undefined"==typeof window)return e
if(window.atob||(e=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(e=!1)}catch(e){}return e}()
var ue={}
Object.defineProperty(ue,"__esModule",{value:!0}),ue.onError=ue.ignoreNextOnError=void 0
var de,fe=i,he=fe.Util.instrument,pe=fe.Util.makeNotice,ge=fe.Util.globalThisOrWindow,ve=0
function _e(){ve+=1,clearTimeout(de),de=setTimeout(function(){ve=0})}function me(e){return void 0===e&&(e=ge()),{load:function(t){he(e,"onerror",function(n){var r=function(e,n,r,i,s){if(t.logger.debug("window.onerror callback invoked",arguments),ve>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(ve-=1)
if(0===r&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var o=pe(s)
o.name||(o.name="window.onerror"),o.message||(o.message=e),o.stack||(o.stack=[o.message,"\n    at ? (",n||"unknown",":",r||0,":",i||0,")"].join("")),t.addBreadcrumb("window.onerror"!==o.name&&o.name?"window.onerror: ".concat(o.name):"window.onerror",{category:"error",metadata:{name:o.name,message:o.message,stack:o.stack}}),t.config.enableUncaught&&t.notify(o)}}
return function(t,i,s,o,a){return r(t,i,s,o,a),"function"==typeof n&&n.apply(e,arguments)}})}}}ue.ignoreNextOnError=_e,ue.onError=me
var be={}
Object.defineProperty(be,"__esModule",{value:!0})
var ye=i,we=ye.Util.instrument,ke=ye.Util.globalThisOrWindow
function xe(e){return void 0===e&&(e=ke()),{load:function(t){t.config.enableUnhandledRejection&&we(e,"onunhandledrejection",function(e){function n(e){var n
if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var r=e.reason
if(r instanceof Error){var i="unknown",s=0,o="".concat(r.message,"\n    at ? (").concat(i,":").concat(s,")"),a=r.stack||o,l={name:r.name,message:"UnhandledPromiseRejectionWarning: ".concat(r),stack:a}
return t.addBreadcrumb("window.onunhandledrejection: ".concat(l.name),{category:"error",metadata:l}),void t.notify(l)}var c="string"==typeof r?r:null!==(n=JSON.stringify(r))&&void 0!==n?n:"Unspecified reason"
t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: ".concat(c)})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}})}}}be.default=xe
var Se={}
Object.defineProperty(Se,"__esModule",{value:!0})
var Ee=i,Ce=Y,Pe=Ee.Util.sanitize,Le=Ee.Util.instrument,Te=Ee.Util.instrumentConsole,$e=Ee.Util.globalThisOrWindow
function Ie(e){return void 0===e&&(e=$e()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function r(e){return Array.isArray(e)?e.map(function(e){try{return String(e)}catch(e){return"[unknown]"}}).join(" "):""}n("console")&&Te(e,function(e,n){var i=r(n),s={category:"log",metadata:{level:e,arguments:Pe(n,3)}}
t.addBreadcrumb(i,s)})}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",function(e){var n,r,i
try{n=(0,Ce.stringNameOfElement)(e.target),r=(0,Ce.stringSelectorOfElement)(e.target),i=(0,Ce.stringTextOfElement)(e.target)}catch(e){n="UI Click",r="[unknown]",i="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:r,text:i,event:e}})},!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Le(XMLHttpRequest.prototype,"open",function(e){return function(){var t=this,n=arguments[1],r="string"==typeof n?n:String(n),i="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],s="".concat(i," ").concat((0,Ce.localURLPathname)(r))
this.__hb_xhr={type:"xhr",method:i,url:r,message:s},"function"==typeof e&&e.apply(t,arguments)}}),Le(XMLHttpRequest.prototype,"send",function(e){return function(){var n=this
function r(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Le(n,"onreadystatechange",function(e){return function(){r(),"function"==typeof e&&e.apply(this,arguments)}}):n.onreadystatechange=r,"function"==typeof e&&e.apply(n,arguments)}})),n("network")&&(0,Ce.nativeFetch)()&&Le(e,"fetch",function(n){return function(){var r,i=arguments[0],s="GET"
"string"==typeof i?r=i:"Request"in e&&i instanceof Request?(r=i.url,i.method&&(s=i.method)):r=String(i),arguments[1]&&arguments[1].method&&(s=arguments[1].method),"string"==typeof s&&(s=s.toUpperCase())
var o="".concat(s," ").concat("undefined"==typeof document?r:(0,Ce.localURLPathname)(r)),a={type:"fetch",method:s,url:r}
return n.apply(this,arguments).then(function(e){return a.status_code=e.status,t.addBreadcrumb(o,{category:"request",metadata:a}),e}).catch(function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:a}),e})}}),function(){if(n("navigation")&&null!=e.location){var r=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",function(t){i(r,e.location.href)}),void 0!==e.history&&(Le(e.history,"pushState",s),Le(e.history,"replaceState",s))}function i(e,n){r=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function s(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&i(r,String(t)),e.apply(this,arguments)}}}()}}}Se.default=Ie
var Oe={}
Object.defineProperty(Oe,"__esModule",{value:!0})
var Ae=i,Me=Ae.Util.instrument,Re=Ae.Util.globalThisOrWindow
function je(e){return void 0===e&&(e=Re()),{load:function(t){!function(){function n(e){return function(n){return function(r,i){if("function"==typeof r){var s=Array.prototype.slice.call(arguments,2)
return r=t.__wrap(r,e),n(function(){r.apply(void 0,s)},i)}return n(r,i)}}}Me(e,"setTimeout",n({component:"setTimeout"})),Me(e,"setInterval",n({component:"setInterval"}))}()}}}Oe.default=je
var Fe={}
Object.defineProperty(Fe,"__esModule",{value:!0})
var Ne=i,De=Ne.Util.instrument,qe=Ne.Util.globalThisOrWindow
function Be(e){return void 0===e&&(e=qe()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach(function(n){var r=e[n]&&e[n].prototype
r&&Object.prototype.hasOwnProperty.call(r,"addEventListener")&&(De(r,"addEventListener",function(e){var r={component:"".concat(n,".prototype.addEventListener")}
return function(n,i,s,o){try{i&&null!=i.handleEvent&&(i.handleEvent=t.__wrap(i.handleEvent,r))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(i,r),s,o)}}),De(r,"removeEventListener",function(e){return function(n,r,i,s){return e.call(this,n,r,i,s),e.call(this,n,t.__wrap(r),i,s)}}))})}}}Fe.default=Be
var He={},Ue=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},Ge=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}}
Object.defineProperty(He,"__esModule",{value:!0}),He.BrowserTransport=void 0
var ze=i,We=ze.Util.sanitize,Ve=ze.Util.globalThisOrWindow
function Qe(e){return Object.entries(e)}var Je=function(){function e(e){void 0===e&&(e={}),this.headers={},this.headers=e}return e.prototype.defaultHeaders=function(){return this.headers},e.prototype.send=function(e,t){return Ue(this,void 0,void 0,function(){var n,r,i,s,o
return Ge(this,function(a){switch(a.label){case 0:return n=e.headers?Qe(e.headers):[],r=this.defaultHeaders(),n.forEach(function(e){var t=e[0],n=e[1]
null!=t&&null!=n&&(r[String(t)]=String(n))}),i={method:e.method,headers:r},"POST"===e.method&&t&&(i.body="string"==typeof t?t:JSON.stringify(We(t,e.maxObjectDepth))),[4,Ve().fetch(e.endpoint,i)]
case 1:return[4,(s=a.sent()).text()]
case 2:return o=a.sent(),[2,Promise.resolve({statusCode:s.status,body:o})]}})})},e}()
He.BrowserTransport=Je
var Ke={},Ye=e&&e.__assign||function(){return Ye=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},Ye.apply(this,arguments)}
Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.BrowserFeedbackForm=void 0
var Xe=i.Util.globalThisOrWindow,Ze=function(){function t(e,t,n){this.config=e,this.logger=t,this.scriptUrl=n}return t.prototype.appendUserFeedbackTag=function(t,n){void 0===n&&(n={})
var r=t.document.createElement("script")
r.setAttribute("src",this.scriptUrl),r.setAttribute("async","true"),n.onLoad&&(r.onload=n.onLoad),(e.document.head||e.document.body).appendChild(r)},t.prototype.isUserFeedbackUrlAlreadyVisible=function(){for(var e=Xe(),t=this.scriptUrl,n=0;n<e.document.scripts.length;n++)if(e.document.scripts[n].src===t)return!0
return!1},t.prototype.show=function(e,t){if(void 0===t&&(t={}),"function"==typeof this.appendUserFeedbackTag)if(this.config&&this.config.apiKey)if(e){var n=Xe()
void 0!==n.document?this.isUserFeedbackUrlAlreadyVisible()?this.logger.debug("User feedback form is already visible"):(n.honeybadgerUserFeedbackOptions=Ye(Ye({},t),{apiKey:this.config.apiKey,endpoint:this.config.userFeedbackEndpoint,noticeId:e}),this.appendUserFeedbackTag(n,t)):this.logger.debug("global.document is undefined. Cannot attach script")}else this.logger.debug("Can't show user feedback form without a notice already reported")
else this.logger.debug("Client not initialized")
else this.logger.debug("Feedback form is not available in this environment")},t}()
Ke.BrowserFeedbackForm=Ze,function(t){var n,r=e&&e.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=e&&e.__assign||function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},s.apply(this,arguments)},o=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},a=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}},l=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Types=t.getUserFeedbackScriptUrl=void 0
var c=i,u=Y,d=ue,f=l(be),h=l(Se),p=l(Oe),g=l(Fe),v=He,_=Ke,m=c.Util.merge,b=c.Util.filter,y=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},x=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=x
var S=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,s({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new v.BrowserTransport({"User-Agent":C()}))||this
return n.__errorsSent=0,n.__lastWrapErr=void 0,n.__lastNoticeId=void 0,n.__beforeNotifyHandlers=[function(e){return n.__exceedsMaxErrors()?(n.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),n.__incrementErrorsCount(),!0)}],n.__afterNotifyHandlers=[function(e,t){t&&(n.__lastNoticeId=t.id)}],n}return r(n,e),n.prototype.configure=function(t){return void 0===t&&(t={}),e.prototype.configure.call(this,t)},n.prototype.resetMaxErrors=function(){return this.__errorsSent=0},n.prototype.factory=function(e){var t=new n(e)
return t.setNotifier(this.getNotifier()),t},n.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},n.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),o(this,void 0,void 0,function(){return a(this,function(t){return new _.BrowserFeedbackForm(this.config,this.logger,this.getUserFeedbackSubmitUrl()).show(this.__lastNoticeId,e),[2]})})},n.prototype.getUserFeedbackSubmitUrl=function(){return(0,t.getUserFeedbackScriptUrl)(this.getVersion())},n.prototype.__buildPayload=function(t){var n,r={HTTP_USER_AGENT:void 0,HTTP_REFERER:void 0,HTTP_COOKIE:void 0}
"undefined"!=typeof navigator&&navigator.userAgent&&(r.HTTP_USER_AGENT=navigator.userAgent),"undefined"!=typeof document&&document.referrer.match(/\S/)&&(r.HTTP_REFERER=document.referrer),(n="string"==typeof t.cookies?(0,u.decodeCookie)(t.cookies):t.cookies)&&(r.HTTP_COOKIE=(0,u.encodeCookie)(b(n,this.config.filters)))
var i=e.prototype.__buildPayload.call(this,t)
return i.request.cgi_data=m(r,i.request.cgi_data),i},n.prototype.__wrap=function(e,t){void 0===t&&(t={})
var n=e
t||(t={})
try{if("function"!=typeof n)return n
if(!y(n))return n
if(!n.___hb){var r=this
n.___hb=function(){if(!u.preferCatch)return n.apply(this,arguments)
try{return n.apply(this,arguments)}catch(e){if(r.__lastWrapErr===e)throw e
throw r.__lastWrapErr=e,(0,d.ignoreNextOnError)(),r.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),r.config.enableUncaught&&r.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),E={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.12.3"},C=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(E.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(E.version,"; n/a; n/a")},P=new S({__plugins:[(0,d.onError)(),(0,f.default)(),(0,p.default)(),(0,g.default)(),(0,h.default)(),c.Plugins.events()]})
P.setNotifier(E)
var L=i
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return L.Types}}),t.default=P}(r)
var et=t(r)
return et}()),hc.exports),gc=dc(pc)
const vc=["attackplayer.min.js","Auction-House-Monitor.user.js","Cocaine.user.js","Compra-%2526-Venda-de-Recursos-%25E2%259C%2585.user.js","cross-origin frame","Daily-Quest-Auto-Hunter-All-Creatures-%252B-SE-Searcher-Movement.user.js","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Auto-Invent.user.js","Fallen-Sword-Auto-Skill-Caster.user.js","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Message-Alert.user.js","Fallen-Sword-Super-Elite-%2526-Crate-Notifier.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","Fallen-Sword-Win%252FLoss-Checker-with-Buffs-and-Buff-Levels.user.js","Fallen-Sword-Win%252FLoss-Checker.user.js","Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js","Fetch-Auction-and-Send-to-Discord.user.js","FS-%E2%80%93-Auto-Explore-visible-per-step-movement","FS-%E2%80%93-Inline-Combat-Sets-Fast%2C-Correct-CSS-on-Tournament-Page.user.js","FS-Fixer.user.js","FS-Mapper.user.js","fs.min.js","FSH1.user.js","Gold-alert.user.js","GVG-and-Relics-Notifications.user.js","GvG-Initiate-Enhanced.user.js","GvG-List-v2.user.js","GvG-Name-Only.user.js","GVG%252FRelics-Discord.user.js","GVG%252FRelics-Notifications.user.js","GVG%252FRelics%252FTitan-Drop-Discord-Alerts-Titan-Image-Fix-%252B-Text-Mode-for-Others.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","League-of-Legends.user.js","MetaMask","New-Userscript.user.js","News.user.js","openuserjs.org","out of memory","Permission denied to access object","play method is not allowed","Quick-Kill.user.js","SE-Searcher-Replay-Fix.user.js","se-searcher-v2-draft.user.js","SE-Searcher-v2-with-Pause%252FResume.user.js","Superelite-searcher.user.js","SWS-Creature-Killer.user.js","Titan-3.0.user.js","Titan-Kill-Counter-Kill-Streak-Based.user.js","Titan-Quick-Kill.user.js","UFSG-dodatki.user.js","UnhandledPromiseRejectionWarning: 404","world.min.js","(reading '$$')"],_c=e=>ec(e)&&vc.some(t=>e.includes(t))
function mc(e){if(_c(e.message)||_c(e.stack))return!1}function bc(){!function(){gc.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.161"})
const e=s()
e&&gc.setContext({user_id:e}),gc.afterNotify(e=>{if(e)return jo(`Honeybadger notification failed: ${e}`)}),gc.beforeNotify(mc)}()}function yc(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class wc extends Error{constructor([e,t,n,r],...i){super(function(e,t,n,r){const i=`${t.status} ${t.statusText} - `
if(t.statusText===r.toString())return i+yc(e)
const s=`${i+n} ${r} - ${yc(e)}`
return"parsererror"===n?`${s} - ${t.responseText}`:s}(e,t,n,r),...i),Error.captureStackTrace&&Error.captureStackTrace(this,wc),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=r}}function kc(e,t,n,r){e instanceof EventTarget&&e.addEventListener(t,n,r)}function xc(e,t,n){return JSON.stringify(e,t,n)}function Sc(e){Xl("betaOptIn")&&jo("sendException",e),gc.notify(e,"sendException")}var Ec={}
function Cc(e){return Array.isArray(e)}function Pc(e,t){return e||t}const Lc=[null]
function Tc(e,t){return Lc[e]&&Lc[e].priority<Lc[t].priority}function $c(e,t){const n=Lc[e]
Lc[e]=Lc[t],Lc[t]=n}function Ic(e,t){return e?2*t:2*t+1}function Oc(){if(1===Lc.length)return
const e=Lc[1].data,t=Lc.pop()
return Lc.length>1&&(Lc[1]=t,function(e){let t=e
for(;2*t<Lc.length;){const e=Ic(!Tc(2*t+1,2*t),t)
if(Tc(t,e))break
$c(t,e),t=e}}(1)),e}function Ac(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Tc(t,e))break
$c(t,e),t=e}}(Lc.push({data:e,priority:t})-1)}let Mc=!0
const Rc="fshMessage"
let jc=0
function Fc(){Lc.length-1==0?Mc=!0:(Mc=!1,window.postMessage(Rc,window.location.origin))}function Nc(){const e=Oc()
sc(e)?e():function(e){ra(e)||Sc(`pop() was not a function (${typeof e})`)}(e)}function Dc(e){const t=e.data
e.origin===window.location.origin&&t===Rc&&function(){try{Nc()}catch(e){gc.notify(e,"taskFailure")}finally{Fc()}}()}function qc(e,t,n,r){if(sc(t)){jc||(kc(window,"message",Dc),jc=!0)
const i=Pc(r,window),s=Pc(n,[])
Ac(t.bind(i,...s),e),Mc&&Fc()}}function Bc(e,t){return new URLSearchParams(e).get(t)}function Hc(e){try{return Bc(decodeURIComponent(window.location.search),e)}catch(e){return""}}var Uc=!1,Gc=Array.isArray,zc=Array.prototype.indexOf,Wc=Array.from,Vc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,Jc=Object.getOwnPropertyDescriptors,Kc=Object.prototype,Yc=Array.prototype,Xc=Object.getPrototypeOf,Zc=Object.isExtensible
function eu(e){return"function"==typeof e}const tu=()=>{}
function nu(e){return e()}function ru(e){for(var t=0;t<e.length;t++)e[t]()}function iu(){var e,t
return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}function su(e,t){if(Array.isArray(e))return e
if(void 0===t||!(Symbol.iterator in e))return Array.from(e)
const n=[]
for(const r of e)if(n.push(r),n.length===t)break
return n}const ou=16,au=32,lu=64,cu=128,uu=512,du=1024,fu=2048,hu=4096,pu=8192,gu=16384,vu=32768,_u=65536,mu=1<<17,bu=1<<18,yu=1<<19,wu=1<<25,ku=32768,xu=1<<21,Su=1<<23,Eu=Symbol("$state"),Cu=Symbol("legacy props"),Pu=Symbol(""),Lu=new class extends Error{name="StaleReactionError"
message="The reaction that called `getAbortSignal()` was re-run or destroyed"}
function Tu(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const $u=Symbol()
function Iu(e){return e===this.v}function Ou(e,t){return e!=e?t==t:e!==t||null!==e&&"object"==typeof e||"function"==typeof e}function Au(e){return!Ou(e,this.v)}let Mu=!1
const Ru=[]
function ju(e,t=!1,n=!1){return Fu(e,new Map,"",Ru,null,n)}function Fu(e,t,n,r,i=null,s=!1){if("object"==typeof e&&null!==e){var o=t.get(e)
if(void 0!==o)return o
if(e instanceof Map)return new Map(e)
if(e instanceof Set)return new Set(e)
if(Gc(e)){var a=Array(e.length)
t.set(e,a),null!==i&&t.set(i,a)
for(var l=0;l<e.length;l+=1){var c=e[l]
l in e&&(a[l]=Fu(c,t,n,r,null,s))}return a}if(Xc(e)===Kc){for(var u in a={},t.set(e,a),null!==i&&t.set(i,a),e)a[u]=Fu(e[u],t,n,r,null,s)
return a}if(e instanceof Date)return structuredClone(e)
if("function"==typeof e.toJSON&&!s)return Fu(e.toJSON(),t,n,r,e)}if(e instanceof EventTarget)return e
try{return structuredClone(e)}catch(t){return e}}let Nu=null
function Du(e){Nu=e}function qu(e,t=!1,n){Nu={p:Nu,i:!1,c:null,e:null,s:e,x:null,l:Mu&&!t?{s:null,u:null,$:[]}:null}}function Bu(e){var t=Nu,n=t.e
if(null!==n)for(var r of(t.e=null,n))Zd(r)
return void 0!==e&&(t.x=e),t.i=!0,Nu=t.p,e??{}}function Hu(){return!Mu||null!==Nu&&null===Nu.l}let Uu=[]
function Gu(){var e=Uu
Uu=[],ru(e)}function zu(e){if(0===Uu.length&&!nd){var t=Uu
queueMicrotask(()=>{t===Uu&&Gu()})}Uu.push(e)}function Wu(){for(;Uu.length>0;)Gu()}function Vu(e){var t=xf
if(null===t)return yf.f|=Su,e
if(0===(t.f&vu)){if(0===(t.f&cu))throw e
t.b.error(e)}else Qu(e,t)}function Qu(e,t){for(;null!==t;){if(0!==(t.f&cu))try{return void t.b.error(e)}catch(t){e=t}t=t.parent}throw e}const Ju=new Set
let Ku=null,Yu=null,Xu=null,Zu=[],ed=null,td=!1,nd=!1
class rd{committed=!1
current=new Map
previous=new Map
#e=new Set
#t=new Set
#n=0
#r=0
#i=null
#s=new Set
#o=new Set
skipped_effects=new Set
is_fork=!1
is_deferred(){return this.is_fork||this.#r>0}process(e){Zu=[],Yu=null,this.apply()
var t={parent:null,effect:null,effects:[],render_effects:[]}
for(const n of e)this.#a(n,t)
this.is_fork||this.#l(),this.is_deferred()?(this.#c(t.effects),this.#c(t.render_effects)):(Yu=this,Ku=null,ld(t.render_effects),ld(t.effects),Yu=null,this.#i?.resolve()),Xu=null}#a(e,t){e.f^=du
for(var n=e.first;null!==n;){var r=n.f,i=!!(96&r),s=i&&0!==(r&du)||0!==(r&pu)||this.skipped_effects.has(n)
if(0!==(n.f&cu)&&n.b?.is_pending()&&(t={parent:t,effect:n,effects:[],render_effects:[]}),!s&&null!==n.fn){i?n.f^=du:4&r?t.effects.push(n):Rf(n)&&(0!==(n.f&ou)&&this.#s.add(n),qf(n))
var o=n.first
if(null!==o){n=o
continue}}var a=n.parent
for(n=n.next;null===n&&null!==a;)a===t.effect&&(this.#c(t.effects),this.#c(t.render_effects),t=t.parent),n=a.next,a=a.parent}}#c(e){for(const t of e)0!==(t.f&fu)?this.#s.add(t):0!==(t.f&hu)&&this.#o.add(t),this.#u(t.deps),Vf(t,du)}#u(e){if(null!==e)for(const t of e)2&t.f&&0!==(t.f&ku)&&(t.f^=ku,this.#u(t.deps))}capture(e,t){this.previous.has(e)||this.previous.set(e,t),0===(e.f&Su)&&(this.current.set(e,e.v),Xu?.set(e,e.v))}activate(){Ku=this,this.apply()}deactivate(){Ku===this&&(Ku=null,Xu=null)}flush(){if(this.activate(),Zu.length>0){if(sd(),null!==Ku&&Ku!==this)return}else 0===this.#n&&this.process([])
this.deactivate()}discard(){for(const e of this.#t)e(this)
this.#t.clear()}#l(){if(0===this.#r){for(const e of this.#e)e()
this.#e.clear()}0===this.#n&&this.#d()}#d(){if(Ju.size>1){this.previous.clear()
var e=Xu,t=!0,n={parent:null,effect:null,effects:[],render_effects:[]}
for(const e of Ju){if(e===this){t=!1
continue}const i=[]
for(const[n,r]of this.current){if(e.current.has(n)){if(!t||r===e.current.get(n))continue
e.current.set(n,r)}i.push(n)}if(0===i.length)continue
const s=[...e.current.keys()].filter(e=>!this.current.has(e))
if(s.length>0){var r=Zu
Zu=[]
const t=new Set,o=new Map
for(const e of i)cd(e,s,t,o)
if(Zu.length>0){Ku=e,e.apply()
for(const t of Zu)e.#a(t,n)
e.deactivate()}Zu=r}}Ku=null,Xu=e}this.committed=!0,Ju.delete(this)}increment(e){this.#n+=1,e&&(this.#r+=1)}decrement(e){this.#n-=1,e&&(this.#r-=1),this.revive()}revive(){for(const e of this.#s)this.#o.delete(e),Vf(e,fu),dd(e)
for(const e of this.#o)Vf(e,hu),dd(e)
this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#i??=iu()).promise}static ensure(){if(null===Ku){const e=Ku=new rd
Ju.add(Ku),nd||rd.enqueue(()=>{Ku===e&&e.flush()})}return Ku}static enqueue(e){zu(e)}apply(){}}function id(e){var t=nd
nd=!0
try{for(;;){if(Wu(),0===Zu.length&&(Ku?.flush(),0===Zu.length))return void(ed=null)
sd()}}finally{nd=t}}function sd(){var e=vf
td=!0
try{var t=0
for(_f(!0);Zu.length>0;){var n=rd.ensure()
if(t++>1e3)Uc,od()
n.process(Zu),xd.clear()}}finally{td=!1,_f(e),ed=null}}function od(){try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){Qu(e,ed)}}let ad=null
function ld(e){var t=e.length
if(0!==t){for(var n=0;n<t;){var r=e[n++]
if(!(24576&r.f)&&Rf(r)&&(ad=new Set,qf(r),null===r.deps&&null===r.first&&null===r.nodes&&(null===r.teardown&&null===r.ac?uf(r):r.fn=null),ad?.size>0)){xd.clear()
for(const e of ad){if(24576&e.f)continue
const t=[e]
let n=e.parent
for(;null!==n;)ad.has(n)&&(ad.delete(n),t.push(n)),n=n.parent
for(let e=t.length-1;e>=0;e--){const n=t[e]
24576&n.f||qf(n)}}ad.clear()}}ad=null}}function cd(e,t,n,r){if(!n.has(e)&&(n.add(e),null!==e.reactions))for(const i of e.reactions){const e=i.f
2&e?cd(i,t,n,r):4194320&e&&0===(e&fu)&&ud(i,t,r)&&(Vf(i,fu),dd(i))}}function ud(e,t,n){const r=n.get(e)
if(void 0!==r)return r
if(null!==e.deps)for(const r of e.deps){if(t.includes(r))return!0
if(2&r.f&&ud(r,t,n))return n.set(r,!0),!0}return n.set(e,!1),!1}function dd(e){for(var t=ed=e;null!==t.parent;){var n=(t=t.parent).f
if(td&&t===xf&&0!==(n&ou)&&0===(n&bu))return
if(96&n){if(0===(n&du))return
t.f^=du}}Zu.push(t)}class fd{parent
#n=!1
#f
#h=null
#p
#g
#v
#_=null
#m=null
#b=null
#y=null
#w=null
#k=0
#x=0
#S=!1
#E=null
#C=function(e){let t,n=0,r=Ed(0)
return()=>{Kd()&&(Hf(r),tf(()=>(0===n&&(t=zf(()=>e(()=>$d(r)))),n+=1,()=>{zu(()=>{n-=1,0===n&&(t?.(),t=void 0,$d(r))})})))}}(()=>(this.#E=Ed(this.#k),()=>{this.#E=null}))
constructor(e,t,n){this.#f=e,this.#p=t,this.#g=n,this.parent=xf.b,this.#n=!!this.#p.pending,this.#v=rf(()=>{xf.b=this
var e=this.#P()
try{this.#_=sf(()=>n(e))}catch(e){this.error(e)}return this.#x>0?this.#L():this.#n=!1,()=>{this.#w?.remove()}},589952)}#T(){try{this.#_=sf(()=>this.#g(this.#f))}catch(e){this.error(e)}this.#n=!1}#$(){const e=this.#p.pending
e&&(this.#m=sf(()=>e(this.#f)),rd.enqueue(()=>{var e=this.#P()
this.#_=this.#I(()=>(rd.ensure(),sf(()=>this.#g(e)))),this.#x>0?this.#L():(df(this.#m,()=>{this.#m=null}),this.#n=!1)}))}#P(){var e=this.#f
return this.#n&&(this.#w=Dd(),this.#f.before(this.#w),e=this.#w),e}is_pending(){return this.#n||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#p.pending}#I(e){var t=xf,n=yf,r=Nu
Sf(this.#v),kf(this.#v),Du(this.#v.ctx)
try{return e()}catch(e){return Vu(e),null}finally{Sf(t),kf(n),Du(r)}}#L(){const e=this.#p.pending
null!==this.#_&&(this.#y=document.createDocumentFragment(),this.#y.append(this.#w),gf(this.#_,this.#y)),null===this.#m&&(this.#m=sf(()=>e(this.#f)))}#O(e){this.has_pending_snippet()?(this.#x+=e,0===this.#x&&(this.#n=!1,this.#m&&df(this.#m,()=>{this.#m=null}),this.#y&&(this.#f.before(this.#y),this.#y=null))):this.parent&&this.parent.#O(e)}update_pending_count(e){this.#O(e),this.#k+=e,this.#E&&Td(this.#E,this.#k)}get_effect_pending(){return this.#C(),Hf(this.#E)}error(e){var t=this.#p.onerror
let n=this.#p.failed
if(this.#S||!t&&!n)throw e
this.#_&&(lf(this.#_),this.#_=null),this.#m&&(lf(this.#m),this.#m=null),this.#b&&(lf(this.#b),this.#b=null)
var r=!1,i=!1
const s=()=>{r?console.warn("https://svelte.dev/e/svelte_boundary_reset_noop"):(r=!0,i&&function(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}(),rd.ensure(),this.#k=0,null!==this.#b&&df(this.#b,()=>{this.#b=null}),this.#n=this.has_pending_snippet(),this.#_=this.#I(()=>(this.#S=!1,sf(()=>this.#g(this.#f)))),this.#x>0?this.#L():this.#n=!1)}
var o=yf
try{kf(null),i=!0,t?.(e,s),i=!1}catch(e){Qu(e,this.#v&&this.#v.parent)}finally{kf(o)}n&&zu(()=>{this.#b=this.#I(()=>{rd.ensure(),this.#S=!0
try{return sf(()=>{n(this.#f,()=>e,()=>s)})}catch(e){return Qu(e,this.#v.parent),null}finally{this.#S=!1}})})}}function hd(e,t,n,r){const i=Hu()?vd:md
if(0!==n.length||0!==e.length){var s=Ku,o=xf,a=pd()
e.length>0?Promise.all(e).then(()=>{a()
try{return l()}finally{s?.deactivate(),gd()}}):l()}else r(t.map(i))
function l(){Promise.all(n.map(e=>function(e){let t=xf
null===t&&function(){throw new Error("https://svelte.dev/e/async_derived_orphan")}()
var n=t.b,r=void 0,i=Ed($u),s=!yf,o=new Map
return function(e){Jd(4718592,e,!0)}(()=>{var t=iu()
r=t.promise
try{Promise.resolve(e()).then(t.resolve,t.reject).then(()=>{a===Ku&&a.committed&&a.deactivate(),gd()})}catch(e){t.reject(e),gd()}var a=Ku
if(s){var l=!n.is_pending()
n.update_pending_count(1),a.increment(l),o.get(a)?.reject(Lu),o.delete(a),o.set(a,t)}const c=(e,t=void 0)=>{if(a.activate(),t)t!==Lu&&(i.f|=Su,Td(i,t))
else{0!==(i.f&Su)&&(i.f^=Su),Td(i,e)
for(const[e,t]of o){if(o.delete(e),e===a)break
t.reject(Lu)}}s&&(n.update_pending_count(-1),a.decrement(l))}
t.promise.then(c,e=>c(null,e||"unknown"))}),Yd(()=>{for(const e of o.values())e.reject(Lu)}),new Promise(e=>{function t(n){function s(){n===r?e(i):t(r)}n.then(s,s)}t(r)})}(e))).then(e=>{a()
try{r([...t.map(i),...e])}catch(e){0===(o.f&gu)&&Qu(e,o)}s?.deactivate(),gd()}).catch(e=>{Qu(e,o)})}}function pd(){var e=xf,t=yf,n=Nu,r=Ku
return function(i=!0){Sf(e),kf(t),Du(n),i&&r?.activate()}}function gd(){Sf(null),kf(null),Du(null)}function vd(e){var t=null!==yf&&2&yf.f?yf:null
null!==xf&&(xf.f|=yu)
return{ctx:Nu,deps:null,effects:null,equals:Iu,f:2050,fn:e,reactions:null,rv:0,v:$u,wv:0,parent:t??xf,ac:null}}function _d(e){const t=vd(e)
return Cf(t),t}function md(e){const t=vd(e)
return t.equals=Au,t}function bd(e){var t=e.effects
if(null!==t){e.effects=null
for(var n=0;n<t.length;n+=1)lf(t[n])}}function yd(e){var t,n=xf
Sf(function(e){for(var t=e.parent;null!==t;){if(!(2&t.f))return 0===(t.f&gu)?t:null
t=t.parent}return null}(e))
try{e.f&=-32769,bd(e),t=Ff(e)}finally{Sf(n)}return t}function wd(e){var t=yd(e);(e.equals(t)||(Ku?.is_fork||(e.v=t),e.wv=Mf()),mf)||(null!==Xu?(Kd()||Ku?.is_fork)&&Xu.set(e,t):Vf(e,0===(e.f&uu)?hu:du))}let kd=new Set
const xd=new Map
let Sd=!1
function Ed(e,t){return{f:0,v:e,reactions:null,equals:Iu,rv:0,wv:0}}function Cd(e,t){const n=Ed(e)
return Cf(n),n}function Pd(e,t=!1,n=!0){const r=Ed(e)
return t||(r.equals=Au),Mu&&n&&null!==Nu&&null!==Nu.l&&(Nu.l.s??=[]).push(r),r}function Ld(e,t,n=!1){return null!==yf&&(!wf||0!==(yf.f&mu))&&Hu()&&4325394&yf.f&&!Ef?.includes(e)&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),Td(e,n?Od(t):t)}function Td(e,t){if(!e.equals(t)){var n=e.v
mf?xd.set(e,t):xd.set(e,n),e.v=t
var r=rd.ensure()
r.capture(e,n),2&e.f&&(0!==(e.f&fu)&&yd(e),Vf(e,0!==(e.f&uu)?du:hu)),e.wv=Mf(),Id(e,fu),!Hu()||null===xf||0===(xf.f&du)||96&xf.f||(null===Tf?function(e){Tf=e}([e]):Tf.push(e)),!r.is_fork&&kd.size>0&&!Sd&&function(){Sd=!1
var e=vf
_f(!0)
const t=Array.from(kd)
try{for(const e of t)0!==(e.f&du)&&Vf(e,hu),Rf(e)&&qf(e)}finally{_f(e)}kd.clear()}()}return t}function $d(e){Ld(e,e.v+1)}function Id(e,t){var n=e.reactions
if(null!==n)for(var r=Hu(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f
if(r||o!==xf){var l=0===(a&fu)
if(l&&Vf(o,t),2&a){var c=o
Xu?.delete(c),0===(a&ku)&&(a&uu&&(o.f|=ku),Id(c,hu))}else l&&(0!==(a&ou)&&null!==ad&&ad.add(o),dd(o))}}}function Od(e){if("object"!=typeof e||null===e||Eu in e)return e
const t=Xc(e)
if(t!==Kc&&t!==Yc)return e
var n=new Map,r=Gc(e),i=Cd(0),s=Of,o=e=>{if(Of===s)return e()
var t=yf,n=Of
kf(null),Af(s)
var r=e()
return kf(t),Af(n),r}
return r&&n.set("length",Cd(e.length)),new Proxy(e,{defineProperty(e,t,r){"value"in r&&!1!==r.configurable&&!1!==r.enumerable&&!1!==r.writable||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}()
var i=n.get(t)
return void 0===i?i=o(()=>{var e=Cd(r.value)
return n.set(t,e),e}):Ld(i,r.value,!0),!0},deleteProperty(e,t){var r=n.get(t)
if(void 0===r){if(t in e){const e=o(()=>Cd($u))
n.set(t,e),$d(i)}}else Ld(r,$u),$d(i)
return!0},get(t,r,i){if(r===Eu)return e
var s=n.get(r),a=r in t
if(void 0!==s||a&&!Qc(t,r)?.writable||(s=o(()=>Cd(Od(a?t[r]:$u))),n.set(r,s)),void 0!==s){var l=Hf(s)
return l===$u?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){var r=Reflect.getOwnPropertyDescriptor(e,t)
if(r&&"value"in r){var i=n.get(t)
i&&(r.value=Hf(i))}else if(void 0===r){var s=n.get(t),o=s?.v
if(void 0!==s&&o!==$u)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(e,t){if(t===Eu)return!0
var r=n.get(t),i=void 0!==r&&r.v!==$u||Reflect.has(e,t)
if((void 0!==r||null!==xf&&(!i||Qc(e,t)?.writable))&&(void 0===r&&(r=o(()=>Cd(i?Od(e[t]):$u)),n.set(t,r)),Hf(r)===$u))return!1
return i},set(e,t,s,a){var l=n.get(t),c=t in e
if(r&&"length"===t)for(var u=s;u<l.v;u+=1){var d=n.get(u+"")
void 0!==d?Ld(d,$u):u in e&&(d=o(()=>Cd($u)),n.set(u+"",d))}void 0===l?c&&!Qc(e,t)?.writable||(Ld(l=o(()=>Cd(void 0)),Od(s)),n.set(t,l)):(c=l.v!==$u,Ld(l,o(()=>Od(s))))
var f=Reflect.getOwnPropertyDescriptor(e,t)
if(f?.set&&f.set.call(a,s),!c){if(r&&"string"==typeof t){var h=n.get("length"),p=Number(t)
Number.isInteger(p)&&p>=h.v&&Ld(h,p+1)}$d(i)}return!0},ownKeys(e){Hf(i)
var t=Reflect.ownKeys(e).filter(e=>{var t=n.get(e)
return void 0===t||t.v!==$u})
for(var[r,s]of n)s.v===$u||r in e||t.push(r)
return t},setPrototypeOf(){!function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function Ad(e){try{if(null!==e&&"object"==typeof e&&Eu in e)return e[Eu]}catch{}return e}function Md(e,t){return Object.is(Ad(e),Ad(t))}var Rd,jd,Fd,Nd
function Dd(e=""){return document.createTextNode(e)}function qd(e){return Fd.call(e)}function Bd(e){return Nd.call(e)}function Hd(e,t){return qd(e)}function Ud(e,t=!1){var n=qd(e)
return n instanceof Comment&&""===n.data?Bd(n):n}function Gd(e,t=1,n=!1){let r=e
for(;t--;)r=Bd(r)
return r}let zd=!1
function Wd(e){var t=yf,n=xf
kf(null),Sf(null)
try{return e()}finally{kf(t),Sf(n)}}function Vd(e,t,n,r=n){e.addEventListener(t,()=>Wd(n))
const i=e.__on_r
e.__on_r=i?()=>{i(),r(!0)}:()=>r(!0),zd||(zd=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Qd(e){null===xf&&(null===yf&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}()),mf&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function Jd(e,t,n){var r=xf
null!==r&&0!==(r.f&pu)&&(e|=pu)
var i={ctx:Nu,deps:null,nodes:null,f:e|fu|uu,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null}
if(n)try{qf(i),i.f|=vu}catch(s){throw lf(i),s}else null!==t&&dd(i)
var s=i
if(n&&null===s.deps&&null===s.teardown&&null===s.nodes&&s.first===s.last&&0===(s.f&yu)&&(s=s.first,0!==(e&ou)&&0!==(e&_u)&&null!==s&&(s.f|=_u)),null!==s&&(s.parent=r,null!==r&&function(e,t){var n=t.last
null===n?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(s,r),null!==yf&&2&yf.f&&0===(e&lu))){var o=yf;(o.effects??=[]).push(s)}return i}function Kd(){return null!==yf&&!wf}function Yd(e){const t=Jd(8,null,!1)
return Vf(t,du),t.teardown=e,t}function Xd(e){Qd()
var t=xf.f
if(!(!yf&&0!==(t&au)&&0===(t&vu)))return Zd(e)
var n=Nu;(n.e??=[]).push(e)}function Zd(e){return Jd(1048580,e,!1)}function ef(e){return Jd(4,e,!1)}function tf(e,t=0){return Jd(8|t,e,!0)}function nf(e,t=[],n=[],r=[]){hd(r,t,n,t=>{Jd(8,()=>e(...t.map(Hf)),!0)})}function rf(e,t=0){return Jd(ou|t,e,!0)}function sf(e){return Jd(524320,e,!0)}function of(e){var t=e.teardown
if(null!==t){const e=mf,n=yf
bf(!0),kf(null)
try{t.call(null)}finally{bf(e),kf(n)}}}function af(e,t=!1){var n=e.first
for(e.first=e.last=null;null!==n;){const e=n.ac
null!==e&&Wd(()=>{e.abort(Lu)})
var r=n.next
0!==(n.f&lu)?n.parent=null:lf(n,t),n=r}}function lf(e,t=!0){var n=!1
!t&&0===(e.f&bu)||null===e.nodes||null===e.nodes.end||(cf(e.nodes.start,e.nodes.end),n=!0),af(e,t&&!n),Df(e,0),Vf(e,gu)
var r=e.nodes&&e.nodes.t
if(null!==r)for(const e of r)e.stop()
of(e)
var i=e.parent
null!==i&&null!==i.first&&uf(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function cf(e,t){for(;null!==e;){var n=e===t?null:Bd(e)
e.remove(),e=n}}function uf(e){var t=e.parent,n=e.prev,r=e.next
null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==t&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function df(e,t,n=!0){var r=[]
ff(e,r,!0)
var i=()=>{n&&lf(e),t&&t()},s=r.length
if(s>0){var o=()=>--s||i()
for(var a of r)a.out(o)}else i()}function ff(e,t,n){if(0===(e.f&pu)){e.f^=pu
var r=e.nodes&&e.nodes.t
if(null!==r)for(const e of r)(e.is_global||n)&&t.push(e)
for(var i=e.first;null!==i;){var s=i.next
ff(i,t,!!(0!==(i.f&_u)||0!==(i.f&au)&&0!==(e.f&ou))&&n),i=s}}}function hf(e){pf(e,!0)}function pf(e,t){if(0!==(e.f&pu)){e.f^=pu,0===(e.f&du)&&(Vf(e,fu),dd(e))
for(var n=e.first;null!==n;){var r=n.next
pf(n,!!(0!==(n.f&_u)||0!==(n.f&au))&&t),n=r}var i=e.nodes&&e.nodes.t
if(null!==i)for(const e of i)(e.is_global||t)&&e.in()}}function gf(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;null!==n;){var i=n===r?null:Bd(n)
t.append(n),n=i}}let vf=!1
function _f(e){vf=e}let mf=!1
function bf(e){mf=e}let yf=null,wf=!1
function kf(e){yf=e}let xf=null
function Sf(e){xf=e}let Ef=null
function Cf(e){null!==yf&&(null===Ef?Ef=[e]:Ef.push(e))}let Pf=null,Lf=0,Tf=null
let $f=1,If=0,Of=If
function Af(e){Of=e}function Mf(){return++$f}function Rf(e){var t=e.f
if(0!==(t&fu))return!0
if(2&t&&(e.f&=-32769),0!==(t&hu)){var n=e.deps
if(null!==n)for(var r=n.length,i=0;i<r;i++){var s=n[i]
if(Rf(s)&&wd(s),s.wv>e.wv)return!0}0!==(t&uu)&&null===Xu&&Vf(e,du)}return!1}function jf(e,t,n=!0){var r=e.reactions
if(null!==r&&!Ef?.includes(e))for(var i=0;i<r.length;i++){var s=r[i]
2&s.f?jf(s,t,!1):t===s&&(n?Vf(s,fu):0!==(s.f&du)&&Vf(s,hu),dd(s))}}function Ff(e){var t=Pf,n=Lf,r=Tf,i=yf,s=Ef,o=Nu,a=wf,l=Of,c=e.f
Pf=null,Lf=0,Tf=null,yf=96&c?null:e,Ef=null,Du(e.ctx),wf=!1,Of=++If,null!==e.ac&&(Wd(()=>{e.ac.abort(Lu)}),e.ac=null)
try{e.f|=xu
var u=(0,e.fn)(),d=e.deps
if(null!==Pf){var f
if(Df(e,Lf),null!==d&&Lf>0)for(d.length=Lf+Pf.length,f=0;f<Pf.length;f++)d[Lf+f]=Pf[f]
else e.deps=d=Pf
if(Kd()&&0!==(e.f&uu))for(f=Lf;f<d.length;f++)(d[f].reactions??=[]).push(e)}else null!==d&&Lf<d.length&&(Df(e,Lf),d.length=Lf)
if(Hu()&&null!==Tf&&!wf&&null!==d&&!(6146&e.f))for(f=0;f<Tf.length;f++)jf(Tf[f],e)
return null!==i&&i!==e&&(If++,null!==Tf&&(null===r?r=Tf:r.push(...Tf))),0!==(e.f&Su)&&(e.f^=Su),u}catch(e){return Vu(e)}finally{e.f^=xu,Pf=t,Lf=n,Tf=r,yf=i,Ef=s,Du(o),wf=a,Of=l}}function Nf(e,t){let n=t.reactions
if(null!==n){var r=zc.call(n,e)
if(-1!==r){var i=n.length-1
0===i?n=t.reactions=null:(n[r]=n[i],n.pop())}}null===n&&2&t.f&&(null===Pf||!Pf.includes(t))&&(Vf(t,hu),0!==(t.f&uu)&&(t.f^=uu,t.f&=-32769),bd(t),Df(t,0))}function Df(e,t){var n=e.deps
if(null!==n)for(var r=t;r<n.length;r++)Nf(e,n[r])}function qf(e){var t=e.f
if(0===(t&gu)){Vf(e,du)
var n=xf,r=vf
xf=e,vf=!0
try{16777232&t?function(e){for(var t=e.first;null!==t;){var n=t.next
0===(t.f&au)&&lf(t),t=n}}(e):af(e),of(e)
var i=Ff(e)
e.teardown="function"==typeof i?i:null,e.wv=$f}finally{vf=r,xf=n}}}async function Bf(){await Promise.resolve(),id()}function Hf(e){var t=!!(2&e.f)
if(null!==yf&&!wf&&(!(null!==xf&&0!==(xf.f&gu))&&!Ef?.includes(e))){var n=yf.deps
if(0!==(yf.f&xu))e.rv<If&&(e.rv=If,null===Pf&&null!==n&&n[Lf]===e?Lf++:null===Pf?Pf=[e]:Pf.includes(e)||Pf.push(e))
else{(yf.deps??=[]).push(e)
var r=e.reactions
null===r?e.reactions=[yf]:r.includes(yf)||r.push(yf)}}if(mf){if(xd.has(e))return xd.get(e)
if(t){var i=e,s=i.v
return(0===(i.f&du)&&null!==i.reactions||Gf(i))&&(s=yd(i)),xd.set(i,s),s}}else t&&(!Xu?.has(e)||Ku?.is_fork&&!Kd())&&(Rf(i=e)&&wd(i),vf&&Kd()&&0===(i.f&uu)&&Uf(i))
if(Xu?.has(e))return Xu.get(e)
if(0!==(e.f&Su))throw e.v
return e.v}function Uf(e){if(null!==e.deps){e.f^=uu
for(const t of e.deps)(t.reactions??=[]).push(e),2&t.f&&0===(t.f&uu)&&Uf(t)}}function Gf(e){if(e.v===$u)return!0
if(null===e.deps)return!1
for(const t of e.deps){if(xd.has(t))return!0
if(2&t.f&&Gf(t))return!0}return!1}function zf(e){var t=wf
try{return wf=!0,e()}finally{wf=t}}const Wf=-7169
function Vf(e,t){e.f=e.f&Wf|t}function Qf(e){if("object"==typeof e&&e&&!(e instanceof EventTarget))if(Eu in e)Jf(e)
else if(!Array.isArray(e))for(let t in e){const n=e[t]
"object"==typeof n&&n&&Eu in n&&Jf(n)}}function Jf(e,t=new Set){if(!("object"!=typeof e||null===e||e instanceof EventTarget||t.has(e))){t.add(e),e instanceof Date&&e.getTime()
for(let n in e)try{Jf(e[n],t)}catch(e){}const n=Xc(e)
if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const t=Jc(n)
for(let n in t){const r=t[n].get
if(r)try{r.call(e)}catch(e){}}}}}const Kf=["touchstart","touchmove"]
function Yf(e){return Kf.includes(e)}const Xf=new Set,Zf=new Set
function eh(e,t,n,r,i){var s={capture:r,passive:i},o=function(e,t,n,r={}){function i(e){if(r.capture||rh.call(t,e),!e.cancelBubble)return Wd(()=>n?.call(this,e))}return e.startsWith("pointer")||e.startsWith("touch")||"wheel"===e?zu(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}(e,t,n,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Yd(()=>{t.removeEventListener(e,o,s)})}function th(e){for(var t=0;t<e.length;t++)Xf.add(e[t])
for(var n of Zf)n(e)}let nh=null
function rh(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],s=i[0]||e.target
nh=e
var o=0,a=nh===e&&e.__root
if(a){var l=i.indexOf(a)
if(-1!==l&&(t===document||t===window))return void(e.__root=t)
var c=i.indexOf(t)
if(-1===c)return
l<=c&&(o=l)}if((s=i[o]||e.target)!==t){Vc(e,"currentTarget",{configurable:!0,get:()=>s||n})
var u=yf,d=xf
kf(null),Sf(null)
try{for(var f,h=[];null!==s;){var p=s.assignedSlot||s.parentNode||s.host||null
try{var g=s["__"+r]
null==g||s.disabled&&e.target!==s||g.call(s,e)}catch(e){f?h.push(e):f=e}if(e.cancelBubble||p===t||null===p)break
s=p}if(f){for(let e of h)queueMicrotask(()=>{throw e})
throw f}}finally{e.__root=t,delete e.currentTarget,kf(u),Sf(d)}}}function ih(e){var t=document.createElement("template")
return t.innerHTML=e.replaceAll("<!>","\x3c!----\x3e"),t.content}function sh(e,t){var n=xf
null===n.nodes&&(n.nodes={start:e,end:t,a:null,t:null})}function oh(e,t){var n,r=!!(1&t),i=!!(2&t),s=!e.startsWith("<!>")
return()=>{void 0===n&&(n=ih(s?e:"<!>"+e),r||(n=qd(n)))
var t=i||jd?document.importNode(n,!0):n.cloneNode(!0)
r?sh(qd(t),t.lastChild):sh(t,t)
return t}}function ah(e=""){var t=Dd(e+"")
return sh(t,t),t}function lh(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Dd()
return e.append(t,n),sh(t,n),e}function ch(e,t){null!==e&&e.before(t)}let uh=!0
function dh(e,t){var n=null==t?"":"object"==typeof t?t+"":t
n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function fh(e,t){return function(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:o=!0}){!function(){if(void 0===Rd){Rd=window,jd=/Firefox/.test(navigator.userAgent)
var e=Element.prototype,t=Node.prototype,n=Text.prototype
Fd=Qc(t,"firstChild").get,Nd=Qc(t,"nextSibling").get,Zc(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Zc(n)&&(n.__t=void 0)}}()
var a=new Set,l=e=>{for(var n=0;n<e.length;n++){var r=e[n]
if(!a.has(r)){a.add(r)
var i=Yf(r)
t.addEventListener(r,rh,{passive:i})
var s=hh.get(r)
void 0===s?(document.addEventListener(r,rh,{passive:i}),hh.set(r,1)):hh.set(r,s+1)}}}
l(Wc(Xf)),Zf.add(l)
var c=void 0,u=function(e){rd.ensure()
const t=Jd(524352,e,!0)
return(e={})=>new Promise(n=>{e.outro?df(t,()=>{lf(t),n(void 0)}):(lf(t),n(void 0))})}(()=>{var u=n??t.appendChild(Dd())
return function(e,t,n){new fd(e,t,n)}(u,{pending:()=>{}},t=>{s&&(qu({}),Nu.c=s)
i&&(r.$$events=i),uh=o,c=e(t,r)||{},uh=!0,s&&Bu()}),()=>{for(var e of a){t.removeEventListener(e,rh)
var r=hh.get(e)
0===--r?(document.removeEventListener(e,rh),hh.delete(e)):hh.set(e,r)}Zf.delete(l),u!==n&&u.parentNode?.removeChild(u)}})
return ph.set(c,u),c}(e,t)}const hh=new Map
let ph=new WeakMap
function gh(e,t){const n=ph.get(e)
return n?(ph.delete(e),n(t)):Promise.resolve()}class vh{anchor
#A=new Map
#M=new Map
#R=new Map
#j=new Set
#F=!0
constructor(e,t=!0){this.anchor=e,this.#F=t}#d=()=>{var e=Ku
if(this.#A.has(e)){var t=this.#A.get(e),n=this.#M.get(t)
if(n)hf(n),this.#j.delete(t)
else{var r=this.#R.get(t)
r&&(this.#M.set(t,r.effect),this.#R.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[t,n]of this.#A){if(this.#A.delete(t),t===e)break
const r=this.#R.get(n)
r&&(lf(r.effect),this.#R.delete(n))}for(const[e,r]of this.#M){if(e===t||this.#j.has(e))continue
const i=()=>{if(Array.from(this.#A.values()).includes(e)){var t=document.createDocumentFragment()
gf(r,t),t.append(Dd()),this.#R.set(e,{effect:r,fragment:t})}else lf(r)
this.#j.delete(e),this.#M.delete(e)}
this.#F||!n?(this.#j.add(e),df(r,i,!1)):i()}}}
#N=e=>{this.#A.delete(e)
const t=Array.from(this.#A.values())
for(const[e,n]of this.#R)t.includes(e)||(lf(n.effect),this.#R.delete(e))}
ensure(e,t){var n=Ku
!t||this.#M.has(e)||this.#R.has(e)||this.#M.set(e,sf(()=>t(this.anchor)))
this.#A.set(n,e),this.#d()}}function _h(e,t,n,r,i){var s=Hu(),o=$u,a=s?Ed(o):Pd(o,!1,!1),l=s?Ed(o):Pd(o,!1,!1),c=new vh(e)
rf(()=>{var e=t(),s=!1
if(function(e){return"function"==typeof e?.then}(e)){var o=pd(),u=!1
const t=e=>{if(!s){u=!0,o(!1),rd.ensure()
try{e()}finally{gd(),nd||id()}}}
e.then(e=>{t(()=>{Td(a,e),c.ensure(1,r&&(e=>r(e,a)))})},e=>{t(()=>{if(Td(l,e),c.ensure(1,i&&(e=>i(e,l))),!i)throw l.v})}),zu(()=>{u||t(()=>{c.ensure(0,n)})})}else Td(a,e),c.ensure(1,r&&(e=>r(e,a)))
return()=>{s=!0}})}function mh(e,t,n=!1){var r=new vh(e)
function i(e,t){r.ensure(e,t)}rf(()=>{var e=!1
t((t,n=!0)=>{e=!0,i(n,t)}),e||i(!1,null)},n?_u:0)}function bh(e,t){tf(()=>{var n=t()
for(var r in n){var i=n[r]
i?e.style.setProperty(r,i):e.style.removeProperty(r)}})}function yh(e,t){return t}function wh(e,t=!0){for(var n=0;n<e.length;n++)lf(e[n],t)}var kh
function xh(e,t,n,r,i,s=null){var o=e,a=new Map
!(4&t)||(o=e.appendChild(Dd()))
var l,c=null,u=md(()=>{var e=n()
return Gc(e)?e:null==e?[]:Wc(e)}),d=!0
function f(){p.fallback=c,function(e,t,n,r,i){var s,o,a,l,c,u=!!(8&r),d=t.length,f=e.items,h=e.effect.first,p=null,g=[],v=[]
if(u)for(c=0;c<d;c+=1)a=i(t[c],c),0===((l=f.get(a).e).f&wu)&&(l.nodes?.a?.measure(),(o??=new Set).add(l))
for(c=0;c<d;c+=1){if(a=i(t[c],c),l=f.get(a).e,null!==e.outrogroups)for(const t of e.outrogroups)t.pending.delete(l),t.done.delete(l)
if(0!==(l.f&wu)){if(l.f^=wu,l!==h){var _=p?p.next:h
l===e.effect.last&&(e.effect.last=l.prev),l.prev&&(l.prev.next=l.next),l.next&&(l.next.prev=l.prev),Ch(e,p,l),Ch(e,l,_),Eh(l,_,n),g=[],v=[],h=(p=l).next
continue}Eh(l,null,n)}if(0!==(l.f&pu)&&(hf(l),u&&(l.nodes?.a?.unfix(),(o??=new Set).delete(l))),l!==h){if(void 0!==s&&s.has(l)){if(g.length<v.length){var m,b=v[0]
p=b.prev
var y=g[0],w=g[g.length-1]
for(m=0;m<g.length;m+=1)Eh(g[m],b,n)
for(m=0;m<v.length;m+=1)s.delete(v[m])
Ch(e,y.prev,w.next),Ch(e,p,y),Ch(e,w,b),h=b,p=w,c-=1,g=[],v=[]}else s.delete(l),Eh(l,h,n),Ch(e,l.prev,l.next),Ch(e,l,null===p?e.effect.first:p.next),Ch(e,p,l),p=l
continue}for(g=[],v=[];null!==h&&h!==l;)(s??=new Set).add(h),v.push(h),h=h.next
if(null===h)continue}0===(l.f&wu)&&g.push(l),p=l,h=l.next}if(null!==e.outrogroups){for(const t of e.outrogroups)0===t.pending.size&&(wh(Wc(t.done)),e.outrogroups?.delete(t))
0===e.outrogroups.size&&(e.outrogroups=null)}if(null!==h||void 0!==s){var k=[]
if(void 0!==s)for(l of s)0===(l.f&pu)&&k.push(l)
for(;null!==h;)0===(h.f&pu)&&h!==e.fallback&&k.push(h),h=h.next
var x=k.length
if(x>0){var S=4&r&&0===d?n:null
if(u){for(c=0;c<x;c+=1)k[c].nodes?.a?.measure()
for(c=0;c<x;c+=1)k[c].nodes?.a?.fix()}!function(e,t,n){for(var r,i=t.length,s=t.length,o=0;o<i;o++){let n=t[o]
df(n,()=>{if(r){if(r.pending.delete(n),r.done.add(n),0===r.pending.size){var t=e.outrogroups
wh(Wc(r.done)),t.delete(r),0===t.size&&(e.outrogroups=null)}}else s-=1},!1)}if(0===s){var a=null!==n
if(a){var l=n,c=l.parentNode
c.textContent="",c.append(l),e.items.clear()}wh(t,!a)}else r={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(r)}(e,k,S)}}u&&zu(()=>{if(void 0!==o)for(l of o)l.nodes?.a?.apply()})}(p,l,o,t,r),null!==c&&(0===l.length?0===(c.f&wu)?hf(c):(c.f^=wu,Eh(c,null,o)):df(c,()=>{c=null}))}var h=rf(()=>{for(var e=(l=Hf(u)).length,h=new Set,p=0;p<e;p+=1){var g=l[p],v=r(g,p),_=d?null:a.get(v)
_?(_.v&&Td(_.v,g),_.i&&Td(_.i,p)):(_=Sh(a,d?o:kh??=Dd(),g,v,p,i,t,n),d||(_.e.f|=wu),a.set(v,_)),h.add(v)}0===e&&s&&!c&&(d?c=sf(()=>s(o)):(c=sf(()=>s(kh??=Dd()))).f|=wu),d||f(),Hf(u)}),p={effect:h,items:a,outrogroups:null,fallback:c}
d=!1}function Sh(e,t,n,r,i,s,o,a){var l=1&o?16&o?Ed(n):Pd(n,!1,!1):null,c=2&o?Ed(i):null
return{v:l,i:c,e:sf(()=>(s(t,l??n,c??i,a),()=>{e.delete(r)}))}}function Eh(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,s=t&&0===(t.f&wu)?t.nodes.start:n;null!==r;){var o=Bd(r)
if(s.before(r),r===i)return
r=o}}function Ch(e,t,n){null===t?e.effect.first=n:t.next=n,null===n?e.effect.last=t:n.prev=t}function Ph(e,t,n=!1,r=!1,i=!1){var s=e,o=""
nf(()=>{var e=xf
if(o!==(o=t()??"")&&(null!==e.nodes&&(cf(e.nodes.start,e.nodes.end),e.nodes=null),""!==o)){var i=o+""
n?i=`<svg>${i}</svg>`:r&&(i=`<math>${i}</math>`)
var a=ih(i)
if((n||r)&&(a=qd(a)),sh(qd(a),a.lastChild),n||r)for(;qd(a);)s.before(qd(a))
else s.before(a)}})}function Lh(e,t,...n){var r=new vh(e)
rf(()=>{const e=t()??null
r.ensure(e,e&&(t=>e(t,...n)))},_u)}function Th(e,t,n){var r=new vh(e)
rf(()=>{var e=t()??null
r.ensure(e,e&&(t=>n(t,e)))},_u)}const $h={tick:e=>requestAnimationFrame(e),now:()=>performance.now(),tasks:new Set}
function Ih(){const e=$h.now()
$h.tasks.forEach(t=>{t.c(e)||($h.tasks.delete(t),t.f())}),0!==$h.tasks.size&&$h.tick(Ih)}function Oh(e,t){Wd(()=>{e.dispatchEvent(new CustomEvent(t))})}function Ah(e){if("float"===e)return"cssFloat"
if("offset"===e)return"cssOffset"
if(e.startsWith("--"))return e
const t=e.split("-")
return 1===t.length?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function Mh(e){const t={},n=e.split(";")
for(const e of n){const[n,r]=e.split(":")
if(!n||void 0===r)break
t[Ah(n.trim())]=r.trim()}return t}const Rh=e=>e
function jh(e,t,n,r){var i,s,o,a=!!(4&e),l=t.inert,c=t.style.overflow
function u(){return Wd(()=>i??=n()(t,r?.()??{},{direction:"both"}))}var d={is_global:a,in(){t.inert=l,Oh(t,"introstart"),s=Fh(t,u(),o,1,()=>{Oh(t,"introend"),s?.abort(),s=i=void 0,t.style.overflow=c})},out(e){t.inert=!0,Oh(t,"outrostart"),o=Fh(t,u(),s,0,()=>{Oh(t,"outroend"),e?.()})},stop:()=>{s?.abort(),o?.abort()}},f=xf
if((f.nodes.t??=[]).push(d),uh){var h=a
if(!h){for(var p=f.parent;p&&0!==(p.f&_u);)for(;(p=p.parent)&&0===(p.f&ou););h=!p||0!==(p.f&vu)}h&&ef(()=>{zf(()=>d.in())})}}function Fh(e,t,n,r,i){var s=1===r
if(eu(t)){var o,a=!1
return zu(()=>{if(!a){var l=t({direction:s?"in":"out"})
o=Fh(e,l,n,r,i)}}),{abort:()=>{a=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:tu,deactivate:tu,reset:tu,t:()=>r}
const{delay:l=0,css:c,tick:u,easing:d=Rh}=t
var f=[]
if(s&&void 0===n&&(u&&u(0,1),c)){var h=Mh(c(0,1))
f.push(h,h)}var p=()=>1-r,g=e.animate(f,{duration:l,fill:"forwards"})
return g.onfinish=()=>{g.cancel()
var s=n?.t()??1-r
n?.abort()
var o=r-s,a=t.duration*Math.abs(o),l=[]
if(a>0){var f=!1
if(c)for(var h=Math.ceil(a/(1e3/60)),v=0;v<=h;v+=1){var _=s+o*d(v/h),m=Mh(c(_,1-_))
l.push(m),f||="hidden"===m.overflow}f&&(e.style.overflow="hidden"),p=()=>{var e=g.currentTime
return s+o*d(e/a)},u&&function(e){let t
0===$h.tasks.size&&$h.tick(Ih),new Promise(n=>{$h.tasks.add(t={c:e,f:n})})}(()=>{if("running"!==g.playState)return!1
var e=p()
return u(e,1-e),!0})}(g=e.animate(l,{duration:a,fill:"forwards"})).onfinish=()=>{p=()=>r,u?.(r,1-r),i()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=tu)},deactivate:()=>{i=tu},reset:()=>{0===r&&u?.(1,0)},t:()=>p()}}function Nh(e,t,n){ef(()=>{var r=zf(()=>t(e,n?.())||{})
if(n&&r?.update){var i=!1,s={}
tf(()=>{var e=n()
Qf(e),i&&Ou(s,e)&&(s=e,r.update(e))}),i=!0}if(r?.destroy)return()=>r.destroy()})}function Dh(e){var t,n,r=""
if("string"==typeof e||"number"==typeof e)r+=e
else if("object"==typeof e)if(Array.isArray(e)){var i=e.length
for(t=0;t<i;t++)e[t]&&(n=Dh(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n)
return r}function qh(e){return"object"==typeof e?function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Dh(e))&&(r&&(r+=" "),r+=t)
return r}(e):e??""}const Bh=[..." \t\n\r\f \v\ufeff"]
function Hh(e,t=!1){var n=t?" !important;":";",r=""
for(var i in e){var s=e[i]
null!=s&&""!==s&&(r+=" "+i+": "+s+n)}return r}function Uh(e){return"-"!==e[0]||"-"!==e[1]?e.toLowerCase():e}function Gh(e,t,n,r,i,s){var o=e.__className
if(o!==n||void 0===o){var a=function(e,t,n){var r=null==e?"":""+e
if(t&&(r=r?r+" "+t:t),n)for(var i in n)if(n[i])r=r?r+" "+i:i
else if(r.length)for(var s=i.length,o=0;(o=r.indexOf(i,o))>=0;){var a=o+s
0!==o&&!Bh.includes(r[o-1])||a!==r.length&&!Bh.includes(r[a])?o=a:r=(0===o?"":r.substring(0,o))+r.substring(a+1)}return""===r?null:r}(n,r,s)
null==a?e.removeAttribute("class"):e.className=a,e.__className=n}else if(s&&i!==s)for(var l in s){var c=!!s[l]
null!=i&&c===!!i[l]||e.classList.toggle(l,c)}return s}function zh(e,t={},n,r){for(var i in n){var s=n[i]
t[i]!==s&&(null==n[i]?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function Wh(e,t,n,r){if(e.__style!==t){var i=function(e,t){if(t){var n,r,i=""
if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim()
var s=!1,o=0,a=!1,l=[]
n&&l.push(...Object.keys(n).map(Uh)),r&&l.push(...Object.keys(r).map(Uh))
var c=0,u=-1
const t=e.length
for(var d=0;d<t;d++){var f=e[d]
if(a?"/"===f&&"*"===e[d-1]&&(a=!1):s?s===f&&(s=!1):"/"===f&&"*"===e[d+1]?a=!0:'"'===f||"'"===f?s=f:"("===f?o++:")"===f&&o--,!a&&!1===s&&0===o)if(":"===f&&-1===u)u=d
else if(";"===f||d===t-1){if(-1!==u){var h=Uh(e.substring(c,u).trim())
l.includes(h)||(";"!==f&&d++,i+=" "+e.substring(c,d).trim()+";")}c=d+1,u=-1}}}return n&&(i+=Hh(n)),r&&(i+=Hh(r,!0)),""===(i=i.trim())?null:i}return null==e?null:String(e)}(t,r)
null==i?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else r&&(Array.isArray(r)?(zh(e,n?.[0],r[0]),zh(e,n?.[1],r[1],"important")):zh(e,n,r))
return r}function Vh(e,t,n=!1){if(e.multiple){if(null==t)return
if(!Gc(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value")
for(var r of e.options)r.selected=t.includes(Jh(r))}else{for(r of e.options){if(Md(Jh(r),t))return void(r.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}}function Qh(e,t,n=t){var r=new WeakSet,i=!0
Vd(e,"change",t=>{var i,s=t?"[selected]":":checked"
if(e.multiple)i=[].map.call(e.querySelectorAll(s),Jh)
else{var o=e.querySelector(s)??e.querySelector("option:not([disabled])")
i=o&&Jh(o)}n(i),null!==Ku&&r.add(Ku)}),ef(()=>{var s=t()
if(e===document.activeElement){var o=Yu??Ku
if(r.has(o))return}if(Vh(e,s,i),i&&void 0===s){var a=e.querySelector(":checked")
null!==a&&(s=Jh(a),n(s))}e.__value=s,i=!1}),function(e){var t=new MutationObserver(()=>{Vh(e,e.__value)})
t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Yd(()=>{t.disconnect()})}(e)}function Jh(e){return"__value"in e?e.__value:e.value}const Kh=Symbol("is custom element"),Yh=Symbol("is html")
function Xh(e,t){var n=ep(e)
n.value!==(n.value=t??void 0)&&(e.value!==t||0===t&&"PROGRESS"===e.nodeName)&&(e.value=t??"")}function Zh(e,t,n,r){var i=ep(e)
i[t]!==(i[t]=n)&&("loading"===t&&(e[Pu]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&function(e){var t,n=e.getAttribute("is")||e.nodeName,r=tp.get(n)
if(r)return r
tp.set(n,r=[])
var i=e,s=Element.prototype
for(;s!==i;){for(var o in t=Jc(i))t[o].set&&r.push(o)
i=Xc(i)}return r}(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function ep(e){return e.__attributes??={[Kh]:e.nodeName.includes("-"),[Yh]:"http://www.w3.org/1999/xhtml"===e.namespaceURI}}var tp=new Map
function np(e,t,n=t){var r=new WeakSet
Vd(e,"input",async i=>{var s=i?e.defaultValue:e.value
if(s=op(e)?ap(s):s,n(s),null!==Ku&&r.add(Ku),await Bf(),s!==(s=t())){var o=e.selectionStart,a=e.selectionEnd,l=e.value.length
if(e.value=s??"",null!==a){var c=e.value.length
o===a&&a===l&&c>l?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=o,e.selectionEnd=Math.min(a,c))}}}),null==zf(t)&&e.value&&(n(op(e)?ap(e.value):e.value),null!==Ku&&r.add(Ku)),tf(()=>{var n=t()
if(e===document.activeElement){var i=Yu??Ku
if(r.has(i))return}op(e)&&n===ap(e.value)||("date"!==e.type||n||e.value)&&n!==e.value&&(e.value=n??"")})}const rp=new Set
function ip(e,t,n,r,i=r){var s="checkbox"===n.getAttribute("type"),o=e
if(null!==t)for(var a of t)o=o[a]??=[]
o.push(n),Vd(n,"change",()=>{var e=n.__value
s&&(e=function(e,t,n){for(var r=new Set,i=0;i<e.length;i+=1)e[i].checked&&r.add(e[i].__value)
n||r.delete(t)
return Array.from(r)}(o,e,n.checked)),i(e)},()=>i(s?[]:null)),tf(()=>{var e=r()
s?(e=e||[],n.checked=e.includes(n.__value)):n.checked=Md(n.__value,e)}),Yd(()=>{var e=o.indexOf(n);-1!==e&&o.splice(e,1)}),rp.has(o)||(rp.add(o),zu(()=>{o.sort((e,t)=>4===e.compareDocumentPosition(t)?-1:1),rp.delete(o)})),zu(()=>{})}function sp(e,t,n=t){Vd(e,"change",t=>{var r=t?e.defaultChecked:e.checked
n(r)}),null==zf(t)&&n(e.checked),tf(()=>{var n=t()
e.checked=Boolean(n)})}function op(e){var t=e.type
return"number"===t||"range"===t}function ap(e){return""===e?null:+e}class lp{#D=new WeakMap
#q
#B
static entries=new WeakMap
constructor(e){this.#B=e}observe(e,t){var n=this.#D.get(e)||new Set
return n.add(t),this.#D.set(e,n),this.#H().observe(e,this.#B),()=>{var n=this.#D.get(e)
n.delete(t),0===n.size&&(this.#D.delete(e),this.#q.unobserve(e))}}#H(){return this.#q??(this.#q=new ResizeObserver(e=>{for(var t of e)for(var n of(lp.entries.set(t.target,t),this.#D.get(t.target)||[]))n(t)}))}}var cp=new lp({box:"border-box"})
function up(e,t,n){var r=cp.observe(e,()=>n(e[t]))
ef(()=>(zf(()=>n(e[t])),r))}function dp(e,t){return e===t||e?.[Eu]===t}function fp(e={},t,n,r){return ef(()=>{var r,i
return tf(()=>{r=i,i=[],zf(()=>{e!==n(...i)&&(t(e,...i),r&&dp(n(...r),e)&&t(null,...r))})}),()=>{zu(()=>{i&&dp(n(...i),e)&&t(null,...i)})}}),e}function hp(e=!1){const t=Nu,n=t.l.u
if(!n)return
let r=()=>Qf(t.s)
if(e){let e=0,n={}
const i=vd(()=>{let r=!1
const i=t.s
for(const e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0)
return r&&e++,e})
r=()=>Hf(i)}n.b.length&&function(e){Qd(),Jd(1048584,e,!0)}(()=>{pp(t,r),ru(n.b)}),Xd(()=>{const e=zf(()=>n.m.map(nu))
return()=>{for(const t of e)"function"==typeof t&&t()}}),n.a.length&&Xd(()=>{pp(t,r),ru(n.a)})}function pp(e,t){if(e.l.s)for(const t of e.l.s)Hf(t)
t()}function gp(e,t,n){if(null==e)return t(void 0),n&&n(void 0),tu
const r=zf(()=>e.subscribe(t,n))
return r.unsubscribe?()=>r.unsubscribe():r}const vp=[]
function _p(e,t=tu){let n=null
const r=new Set
function i(t){if(Ou(e,t)&&(e=t,n)){const t=!vp.length
for(const t of r)t[1](),vp.push(t,e)
if(t){for(let e=0;e<vp.length;e+=2)vp[e][0](vp[e+1])
vp.length=0}}}function s(t){i(t(e))}return{set:i,update:s,subscribe:function(o,a=tu){const l=[o,a]
return r.add(l),1===r.size&&(n=t(i,s)||tu),o(e),()=>{r.delete(l),0===r.size&&n&&(n(),n=null)}}}}function mp(e,t,n){const r=!Array.isArray(e),i=r?[e]:e
if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const s=t.length<2
return function(e,t){return{subscribe:_p(e,t).subscribe}}(n,(e,n)=>{let o=!1
const a=[]
let l=0,c=tu
const u=()=>{if(l)return
c()
const i=t(r?a[0]:a,e,n)
s?e(i):c="function"==typeof i?i:tu},d=i.map((e,t)=>gp(e,e=>{a[t]=e,l&=~(1<<t),o&&u()},()=>{l|=1<<t}))
return o=!0,u(),function(){ru(d),c(),o=!1}})}function bp(e){let t
return gp(e,e=>t=e)(),t}let yp=!1,wp=Symbol()
function kp(e,t,n){const r=n[t]??={store:null,source:Pd(void 0),unsubscribe:tu}
if(r.store!==e&&!(wp in n))if(r.unsubscribe(),r.store=e??null,null==e)r.source.v=void 0,r.unsubscribe=tu
else{var i=!0
r.unsubscribe=gp(e,e=>{i?r.source.v=e:Ld(r.source,e)}),i=!1}return e&&wp in n?bp(e):Hf(r.source)}function xp(e,t){return e.set(t),t}function Sp(){const e={}
return[e,function(){Yd(()=>{for(var t in e){e[t].unsubscribe()}Vc(e,wp,{enumerable:!1,value:!0})})}]}const Ep={get(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(eu(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r)return r[t]}},set(e,t,n){let r=e.props.length
for(;r--;){let i=e.props[r]
eu(i)&&(i=i())
const s=Qc(i,t)
if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(eu(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r){const e=Qc(r,t)
return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,t){if(t===Eu||t===Cu)return!1
for(let n of e.props)if(eu(n)&&(n=n()),null!=n&&t in n)return!0
return!1},ownKeys(e){const t=[]
for(let n of e.props)if(eu(n)&&(n=n()),n){for(const e in n)t.includes(e)||t.push(e)
for(const e of Object.getOwnPropertySymbols(n))t.includes(e)||t.push(e)}return t}}
function Cp(e,t,n,r){var i,s,o=!Mu||!!(2&n),a=!!(8&n),l=!!(16&n),c=r,u=!0,d=()=>(u&&(u=!1,c=l?zf(r):r),c)
if(a){var f=Eu in e||Cu in e
i=Qc(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var h,p=!1
if(a?[s,p]=function(e){var t=yp
try{return yp=!1,[e(),yp]}finally{yp=t}}(()=>e[t]):s=e[t],void 0===s&&void 0!==r&&(s=d(),i&&(o&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),i(s))),h=o?()=>{var n=e[t]
return void 0===n?d():(u=!0,n)}:()=>{var n=e[t]
return void 0!==n&&(c=void 0),void 0===n?c:n},o&&!(4&n))return h
if(i){var g=e.$$legacy
return function(e,t){return arguments.length>0?(o&&t&&!g&&!p||i(t?h():e),e):h()}}var v=!1,_=(1&n?vd:md)(()=>(v=!1,h()))
a&&Hf(_)
var m=xf
return function(e,t){if(arguments.length>0){const n=t?Hf(_):o&&a?Od(e):e
return Ld(_,n),v=!0,void 0!==c&&(c=n),e}return mf&&v||0!==(m.f&gu)?_.v:Hf(_)}}function Pp(e){null===Nu&&Tu(),Mu&&null!==Nu.l?function(e){var t=e.l
return t.u??={a:[],b:[],m:[]}}(Nu).m.push(e):Xd(()=>{const t=zf(e)
if("function"==typeof t)return t})}function Lp(e){null===Nu&&Tu(),Pp(()=>()=>zf(e))}const Tp=_p("")
"undefined"!=typeof window&&((window.__svelte??={}).v??=new Set).add("5")
const $p=e=>e
function Ip(e){const t=e-1
return t*t*t+1}function Op(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function Ap(e,{delay:t=0,duration:n=400,easing:r=$p}={}){const i=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:r,css:e=>"opacity: "+e*i}}function Mp(e,{delay:t=0,duration:n=400,easing:r=Ip,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-o),[d,f]=Op(i),[h,p]=Op(s)
return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*h}${p});\n\t\t\topacity: ${l-u*t}`}}function Rp(e,{delay:t=0,duration:n=400,easing:r=Ip,axis:i="y"}={}){const s=getComputedStyle(e),o=+s.opacity,a="y"===i?"height":"width",l=parseFloat(s[a]),c="y"===i?["top","bottom"]:["left","right"],u=c.map(e=>`${e[0].toUpperCase()}${e.slice(1)}`),d=parseFloat(s[`padding${u[0]}`]),f=parseFloat(s[`padding${u[1]}`]),h=parseFloat(s[`margin${u[0]}`]),p=parseFloat(s[`margin${u[1]}`]),g=parseFloat(s[`border${u[0]}Width`]),v=parseFloat(s[`border${u[1]}Width`])
return{delay:t,duration:n,easing:r,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*o};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*h}px;margin-${c[1]}: ${e*p}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*v}px;min-${a}: 0`}}var jp=oh('<div role="alert" class="svelte-8uspok"><p class="svelte-8uspok"> </p></div>')
function Fp(e,t){qu(t,!0)
const n=()=>kp(Tp,"$alert",r),[r,i]=Sp()
let s=Cp(t,"ms",3,3e3),o=Cd(!1),a=0,l=Cd("")
const c=(e,t)=>{clearTimeout(a),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
Ld(l,`translate(${t}px, ${e.offsetTop}px)`),Ld(o,!0)}(),t>0&&(a=setTimeout(()=>{Ld(o,!1),xp(Tp,"")},t))):Ld(o,!1)}
Xd(()=>{c(n(),s())}),Lp(()=>clearTimeout(a))
var u=lh(),d=Ud(u),f=e=>{var t=jp()
let r
t.__click=()=>{Ld(o,!1)}
var i=Hd(t),s=Hd(i)
nf(()=>{r=Wh(t,"",r,{transform:Hf(l)}),dh(s,n())}),jh(3,t,()=>Mp,()=>({delay:250,duration:300,x:0,y:-100,opacity:.5})),ch(e,t)}
mh(d,e=>{Hf(o)&&e(f)}),ch(e,u),Bu(),i()}th(["click"])
let Np=!1
function Dp(e){e&&(Np||(Np=!0,fh(Fp,{target:document.body})),Tp.set(e))}function qp(e,t){return Array.from(e,t)}function Bp(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function Hp(e,t){return qp(Bp(e,t))}function Up(e){return e.trim()}function Gp(e){const t=n(e)
if(ec(t))return Up(t)}function zp(e,t){return Gp(t).includes(e)}function Wp(e,...t){return(...n)=>e(...t,...n)}let Vp=0,Qp=0,Jp=0
function Kp(){return Vp||(Vp=t("pCL")),Vp}function Yp(){return Qp||(Qp=t("pCC")),Qp}function Xp(){return Jp||(Jp=t("pCR")),Jp}function Zp(){const e=Hp("a",Kp()).filter(function(e){return Wp(zp,e)}("message"))
e.length&&async function(){const e=new Audio(Xl("defaultMessageSound"))
try{await e.play()}catch(e){Dp("Message Sound Not Allowed")}}()}function eg(e,t,n,r){var i
kc(e,t,n,{once:!0,...(i=r,Zl(i)?{capture:i}:i)})}let tg=0,ng=0,rg=0,ig=0,sg=0,og=0
function ag(e){ng=e.clientX,rg=e.clientY}function lg(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(tg,null).transform)
ig=e[0]-ng,sg=e[1]-rg}function cg(e){e.clientX===ng&&e.clientY===rg||(tg.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+ig).toString()}, ${(e.clientY+sg).toString()})`,ag(e))}function ug(e){return function(e){const t=performance.now()
t-og>16&&(cg(e),og=t)}(e),e.preventDefault(),!1}function dg(e){return cg(e),function(e,t,n,r){e instanceof EventTarget&&e.removeEventListener(t,n,r)}(document.body,"dragover",ug),e.preventDefault(),!1}function fg(e,t){!function(e,t){tg=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),ag(t),lg(),og=0,t.dataTransfer.setData("text/plain",""),kc(document.body,"dragover",ug),eg(document.body,"drop",dg)}function hg(e,t){e.draggable=!0,kc(e,"dragstart",Wp(fg,t))}function pg(e){return String(e).replaceAll(" ","_")}const gg={}
function vg(e,t,n){if(!e)return
const r=function(e,t){let n=pg(e)
return t&&(n+=`__${pg(t)}`),n}(e,t),i=function(e,t){let n=e
return t&&(n+=`__${pg(t)}`),n}(r,n)
gg[i]||(gg[i]=!0,No(r,function(e){return e?{eventLabel:e}:null}(n)))}let _g=0
function mg(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(_g=Number(t))}function bg(){return _g||Hp("script",document.body).forEach(mg),_g}function yg(e){return Object.entries(e)}function wg(e,t,[n,r]){oc(r)&&null!==r?e(t[n],r):t[n]=r}function kg(e,t){yg(t).forEach(Wp(wg,kg,e))}function xg(e,t){const n=document.createElement(e)
return t&&kg(n,t),n}function Sg(e){return xg("div",e)}function Eg(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Cg(e,t){return qp(Eg(e,t))}function Pg(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Lg(e,t){t instanceof Element&&(t.innerHTML=String(e))}const Tg={id:"content",style:{display:"none"}},$g={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function Ig(e){let n=t("content")
n?Lg("",n):(n=Sg(Tg),Pg(document.body,n)),$(n).dialog($g),Cg("ui-dialog-titlebar-close").forEach(e=>e.blur()),e(n)}async function Og(e){(await e).default()}function Ag(){Og(import("./mountBuffLog.svelte-B8K4b_cH.js"))}function Mg(){Og(import("./mountCombatLog.svelte-cM8gL4Wk.js"))}function Rg(){Og(import("./mountCreatureLog.svelte-BJjDaJTw.js"))}function jg(){Og(import("./mountFsboxlog.svelte-BLdSQU7k.js"))}function Fg(){Og(Promise.resolve().then(function(){return ES}))}function Ng(){Og(import("./mountGuildTracker.svelte-deyxLQzF.js"))}async function Dg(e){(await import("./injectAuctionSearch-CppdhVFp.js")).default(e)}async function qg(e){const{injectFindBuffs:t}=await import("./findBuffs-gV5jxt2_.js")
t(e)}async function Bg(e){const{injectFindOther:t}=await import("./findBuffs-gV5jxt2_.js")
t(e)}async function Hg(e){(await import("./injectOnlinePlayers-BQLLZec5.js")).default(e)}function Ug(){Og(Promise.resolve().then(function(){return vE}))}function Gg(){Og(import("./mountQuickLinksMgr.svelte-D1EwUyrQ.js"))}async function zg(e){(await import("./quickWear-BwQ9dt_0.js")).default(e)}function Wg(){Og(import("./mountRecipeMgr.svelte-BQjKbip9.js"))}function Vg(){Og(import("./mountReliclist.svelte--EmcHBJt.js"))}function Qg(e){return()=>Ig(e)}var Jg=[{section:"Character",menu:[{label:"Buff Log",fn:Ag},{label:"Combat Log",fn:Mg},{label:"Creature Log",fn:Rg},{label:"Recipe Manager",fn:Wg},{label:"Quick Links",fn:Gg},{label:"Inventory Manager",href:`${Ma}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:Qg(qg)},{label:"Find Other",fn:Qg(Bg)},{label:"Online Players",fn:Qg(Hg)},{label:"AH Quick Search",fn:Qg(Dg)}]},...bg()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${Ma}guildinvmgr`},{label:"New Guild Log",fn:Fg},{label:"Merc Hunter",fn:function(){Og(import("./mountMercs.svelte-DAmBby-v.js"))}},{label:"Pot Report",fn:function(){Og(Promise.resolve().then(function(){return QS}))}},{label:"Guild Tracker",fn:Ng}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:Ug},{label:"Quick Wear",fn:Qg(zg)},{label:"FS Box Log",fn:jg},{label:"SE Tracker",fn:function(){Og(Promise.resolve().then(function(){return IE}))}}]},...Xl("betaOptIn")&&bg()?[{section:"Beta Features",menu:[{label:"Relic List",fn:Vg,beta:!0},{label:"GS Export",fn:function(){Og(Promise.resolve().then(function(){return yx}))},beta:!0},{label:"Who's Got What",fn:function(){Og(Promise.resolve().then(function(){return ZE}))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}],Kg=oh('<button type="button" class="svelte-12kkdk3"> </button>'),Yg=oh('<a class="svelte-12kkdk3"> </a>'),Xg=oh('<button type="button" class="helperDevBtn svelte-12kkdk3">PM</button> <a class="svelte-12kkdk3"> </a>',1),Zg=oh('<sup class="fshRed">beta</sup>'),ev=oh("<li><!> <!></li>"),tv=oh('<h2 class="svelte-12kkdk3"> </h2> <ul></ul>',1)
function nv(e,t){function n(e){vg("helperMenu",e)}qu(t,!0)
var r=lh()
xh(Ud(r),17,()=>Jg,yh,(e,r)=>{var i=tv(),s=Ud(i),o=Hd(s)
xh(Gd(s,2),21,()=>Hf(r).menu,yh,(e,r,i,s)=>{var o=ev(),a=Hd(o),l=e=>{var i=Kg()
i.__click=()=>function(e,r){sc(r)&&(n(e),t.doToggle(),r())}(Hf(r).label,Hf(r).fn)
var s=Hd(i)
nf(()=>dh(s,Hf(r).label)),ch(e,i)},c=e=>{var i=lh(),s=Ud(i),o=e=>{var t=Yg()
t.__click=()=>n(Hf(r).label)
var i=Hd(t)
nf(()=>{Zh(t,"href",Hf(r).href),dh(i,Hf(r).label)}),ch(e,t)},a=e=>{var i=lh(),s=Ud(i),o=e=>{var i=Xg(),s=Ud(i)
s.__click=()=>function(e){n("sendMsg"),t.doToggle(),window.openQuickMsgDialog(e)}(Hf(r).playerName)
var o=Gd(s,2),a=Hd(o)
nf(()=>{Zh(o,"href",`${Ta??""}${Hf(r).playerId??""}`),dh(a,Hf(r).playerName)}),ch(e,i)}
mh(s,e=>{Hf(r).playerName&&e(o)},!0),ch(e,i)}
mh(s,e=>{Hf(r).href?e(o):e(a,!1)},!0),ch(e,i)}
mh(a,e=>{Hf(r).fn?e(l):e(c,!1)})
var u=Gd(a,2),d=e=>{ch(e,Zg())}
mh(u,e=>{Hf(r).beta&&e(d)}),ch(e,o)}),nf(()=>dh(o,Hf(r).section)),ch(e,i)}),ch(e,r),Bu()}th(["click"])
var rv=oh('<div class="modal svelte-m67z4r"><!></div>'),iv=oh('<div><button type="button">Helper Menu</button> <!></div>')
function sv(e,t){qu(t,!0)
let n=Cd(!1)
const r=Xl("keepHelperMenuOnScreen"),i=Xl("draggableHelperMenu")
function s(){Ld(n,!Hf(n))}var o=iv()
let a
var l=Hd(o)
let c
l.__click=s
var u=Gd(l,2),d=e=>{var t=rv()
nv(Hd(t),{doToggle:s}),jh(3,t,()=>Ap,()=>({duration:100})),ch(e,t)}
mh(u,e=>{Hf(n)&&e(d)}),Nh(o,e=>{return t=e,void(i&&hg(t))
var t}),nf(()=>{a=Gh(o,0,"helper-menu svelte-m67z4r",null,a,{"helper-menu-fixed":r}),c=Gh(l,0,"toggle svelte-m67z4r",null,c,{"helper-menu-move":i})}),ch(e,o),Bu()}function ov(){const e=lc(".mainbody")
e&&function(e,t){fh(sv,{target:t.parentElement,props:{props:e}})}({},e)}function av(e){return new Promise(t=>{setTimeout(t,e)})}function lv(e){kc(window,"beforeunload",()=>e.abort())}th(["click"])
let cv=0
let uv=0
async function dv(){uv<5-$.active&&performance.now()-cv>=900?(uv=5-$.active,cv=performance.now()):await av(100)}async function fv(e,t=10){await async function(){for(;uv<1;)await dv()
uv-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=lv,$.ajax(t).fail((e,t,n)=>{e.textStatus=t,e.errorThrown=n})}(e)}catch(n){if(t&&n.status>500)return fv(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new wc([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}async function hv(e,t){return ac(await fv({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function pv(e){return hv(e,{method:"GET"})}function gv(e){return pv({cmd:"trade",...e})}function vv(e,t){return gv({subcmd:"sendgold",xc:window.ajaxXC,target_username:e,gold_amount:t})}function _v(e,t,...n){return e(...n)}function mv(e){return(new DOMParser).parseFromString(e,"text/html")}function bv(e){return kg(e,{url:ba,data:{no_mobile:1}}),fv(e)}function yv(e){return bv({data:e})}async function wv(e){const t=await yv(e)
if(t)return mv(t)}function kv(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}async function xv(e,t){const n=await wv(e)
if(!n)return{s:!1}
const r=kv(n)
return r===t?{s:!0}:{s:!1,e:{message:r}}}let Sv=0
const Ev=()=>Sv
function Cv(){Sv=Xl("sendGoldonWorld")}async function Pv(){if(!Ev())return
vg("NewMap","doSendGold")
const e=await function(e,t){return _v(vv,0,e,t)}($("#HelperSendTo").html(),$("#HelperSendAmt").html().replace(/[^\d]/g,""))
e.s&&(rc("currentGoldSentTotal",parseInt(Xl("currentGoldSentTotal"),10)+parseInt(Xl("goldAmount"),10)),GameData.fetch(1))}function Lv(e){window.location=e}function Tv(e){Xl("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function $v(e){vg("keyHandler",e)}function Iv(e){return e?.toLowerCase?.()}function Ov(e,t){return Iv(e)<Iv(t)?-1:Iv(e)>Iv(t)?1:0}function Av(e){return pv({cmd:"profile",...e})}async function Mv(){const e=await Av({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort((e,t)=>Ov(e.name,t.name))}:e}function Rv(){return _v(Mv)}const jv=[e=>e?.s,(e,t)=>e.r?.length>t]
async function Fv(e){const t=await Rv()
if(((e,t)=>jv.every(n=>n(t,e)))(e,t)){$v("changeCombatSet")
const n=t.r[e].id
Tv("2"),Lv(`${La+ka}managecombatset&submit=Use&combatSetId=${n}`)}}function Nv(e,n){t("worldPage")||($v(e),Lv(n))}function Dv(){Ec.enableMaxGroupSizeToJoin?Lv(Ga):Lv(Ua)}function qv(){$v("logPage"),Tv("2"),Lv(Ca)}function Bv(e){e instanceof Element&&e.click()}function Hv(e){const t=lc(`#pCC input[value="${e}"]`)
t&&($v("movePage"),Bv(t))}const Uv=[["!",Fv,0],["@",Fv,1],['"',Fv,1],["#",Fv,2],["£",Fv,2],["$",Fv,3],["%",Fv,4],["^",Fv,5],["&",Fv,6],["*",Fv,7],["(",Fv,8],["0",function(){Nv("toWorld",za)}],["<",Hv,"<"],[">",Hv,">"],["G",function(){$v("createGroup"),Tv("4"),Lv(`${qa}create`)}],["L",qv],["b",function(){$v("backpack"),Tv("2"),Lv($a)}],["g",function(){$v("gotoGuild"),Tv("4"),Lv(`${Fa}manage`)}],["j",function(){$v("joinAllGroup"),Tv("4"),Dv()}],["l",qv],["p",function(){$v("profile"),Tv("2"),Lv(La)}],["r",function(){Nv("doRepair",`${Qa+ka}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in Ec&&!Ec.dialogIsClosed()||($v("insertQuickWear"),Ig(zg))}],["y",Pv]]
const Gv=[e=>["HTML","BODY"].every(t=>e.target.tagName!==t),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function zv(e){var t;(t=e,Gv.some(e=>e(t)))||function(e){const t=Uv.find(([t])=>e===t)
t&&t[1](t[2])}(e.key)}function Wv(){kc(document,"keyup",zv)}function Vv(e,t){return Gp(t)===e}function Qv(e){return Wp(Vv,e)}function Jv(e,t,n){kc(e,"click",t,n)}function Kv(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function Yv(e,t){return qp(Kv(e,t))}function Xv(e){Jv(e,()=>{vg("chrome","Game Help link")}),Lg(`<a href="${wa}settings">Game Help</a>`,e)}function Zv(){Yv("#pCR h3").filter(Qv("Game Help")).forEach(Xv)}function e_(e){Ec[e]=Xl(e)}function t_(e,t){if(t instanceof Element)return t.closest(e)}function n_(e){e?.classList&&e.classList.add("fshHide")}function r_(e){const n=t_("a",e.target)
n?.getAttribute("href")===Na&&(vg("useNewGuildLog","Alter Href"),e.preventDefault(),Fg(),n_(t("notification-guild-log")))}function i_(){return Ec.huntingMode&&window.realmKeyHandler}function s_(e){e.forEach(e=>qc(3,e))}function o_(){return yv({cmd:"guild",subcmd:"manage"})}function a_(e){return t_("tr",e)}function l_(e,t){return a(e,t)?.groups??{}}function c_(e){const{d:t,h:n,m:r,s:i}=l_(fa,e),s=Number(t),o=Number(n)+24*s,a=Number(r)+60*o,l=Number(i)+60*a
return{day:t,days:s,hour:n,hours:o,min:r,mins:a,sec:i,secs:l,timestamp:Xo()-l}}function u_(e){if(e?.href)return Number(l(ha,e.href))}function d_(e,t){if(t){const n=new Set
return e.filter(e=>n.has(e[t])?0:n.add(e[t]))}return qp(new Set(e))}const f_=e=>Number(Gp(a_(e)?.cells[4])?.replaceAll(",","")),h_=e=>Gp(a_(e)?.cells[3]),p_=e=>Number(l(ga,e))
function g_(e){return{guild_xp:f_(e),id:u_(e),name:Gp(e),rank:h_(e)}}function v_(e){const{stam:t,max:n}=l_(pa,e)
return{current_stamina:Number(t),last_activity:c_(e).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,e)),max_stamina:Number(n),vl:p_(e)}}function __(e){return{guild_id:bg(),image_version:0,xp:-1,...g_(e),...v_(e.dataset.tipped)}}function m_(e,t,n){return{id:n,members:e.filter(e=>e.rank===t.rank),name:t.rank,permissions:0,tax:-1}}async function b_(){const e=mv(await o_()).getElementById("pCC")
if(!e)return{e:{code:0,message:"Failure"},s:!1}
const t=Yv(Ul,e).map(__)
return{r:d_(t,"rank").map(Wp(m_,t)),s:!0}}function y_(){return sc(window.jQuery)}const w_=(e,t)=>t.some(t=>e instanceof t)
let k_,x_
const S_=new WeakMap,E_=new WeakMap,C_=new WeakMap
let P_={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return S_.get(e)
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I_(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function L_(e){P_=e(P_)}function T_(e){return(x_||(x_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(O_(this),t),I_(this.request)}:function(...t){return I_(e.apply(O_(this),t))}}function $_(e){return"function"==typeof e?T_(e):(e instanceof IDBTransaction&&function(e){if(S_.has(e))return
const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)})
S_.set(e,t)}(e),w_(e,k_||(k_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,P_):e)}function I_(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I_(e.result)),r()},s=()=>{n(e.error),r()}
e.addEventListener("success",i),e.addEventListener("error",s)})
return C_.set(t,e),t}(e)
if(E_.has(e))return E_.get(e)
const t=$_(e)
return t!==e&&(E_.set(e,t),C_.set(t,e)),t}const O_=e=>C_.get(e)
function A_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I_(o)
return r&&o.addEventListener("upgradeneeded",e=>{r(I_(o.result),e.oldVersion,e.newVersion,I_(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const M_=["get","getKey","getAll","getAllKeys","count"],R_=["put","add","delete","clear"],j_=new Map
function F_(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(j_.get(t))return j_.get(t)
const n=t.replace(/FromIndex$/,""),r=t!==n,i=R_.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!M_.includes(n))return
const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly")
let o=s.store
return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]}
return j_.set(t,s),s}L_(e=>({...e,get:(t,n,r)=>F_(t,n)||e.get(t,n,r),has:(t,n)=>!!F_(t,n)||e.has(t,n)}))
const N_=["continue","continuePrimaryKey","advance"],D_={},q_=new WeakMap,B_=new WeakMap,H_={get(e,t){if(!N_.includes(t))return e[t]
let n=D_[t]
return n||(n=D_[t]=function(...e){q_.set(this,B_.get(this)[t](...e))}),n}}
async function*U_(...e){let t=this
if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return
const n=new Proxy(t,H_)
for(B_.set(n,t),C_.set(n,O_(t));t;)yield n,t=await(q_.get(n)||t.continue()),q_.delete(n)}function G_(e,t){return t===Symbol.asyncIterator&&w_(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&w_(e,[IDBIndex,IDBObjectStore])}L_(e=>({...e,get:(t,n,r)=>G_(t,n)?U_:e.get(t,n,r),has:(t,n)=>G_(t,n)||e.has(t,n)}))
let z_=Promise.resolve(),W_=!1
function V_(){return W_||(z_=A_("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}}),W_=!0),z_}async function Q_(e){try{return(await V_()).get("keyval",e)}catch(e){}}async function J_(e,t){try{return(await V_()).put("keyval",t,e)}catch(e){}}async function K_(e){try{return(await V_()).delete("keyval",e)}catch(e){}}const Y_=0,X_=1,Z_=2,em=3,tm=4,nm=5,rm=6,im="fsh_guildActivity"
async function sm(e){return ac(await bv({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function om(e){return sm({cmd:"export",...e})}function am(e,t){return om({subcmd:"profile",player_username:e,...t&&{_:Vo()}})}function lm(e){return Math.floor(Math.max(0,Xo()-e)/86400)}async function cm(e){const t=await am(e,!0)
return t?.current_stamina?t:null}function um(e,t){return e.members[t]||(e.members[t]=[]),e.members[t]}function dm(e,t,n){const r=lm(e.last_activity)
if(function(e,t,n,r){if(0===e.length)return!0
const i=e.at(-1),s=r<=7
return i[1]!==n.current_stamina||i[2]!==t.level||s&&i[3]!==n.stamina||i[5]!==t.vl||i[6]!==(t.guild_xp||0)}(n,e,t,r)){const i=function(e,t,n){const r=[]
return r[0]=n,r[1]=t.current_stamina,r[2]=e.level,r[3]=t.stamina,r[4]=Xo(),r[5]=e.vl,r[6]=e.guild_xp||0,r}(e,t,r)
n.push(i)}else!function(e,t){if(e.length>0){const n=e.at(-1)
n[4]=Xo(),n[0]=t}}(n,r)}function fm(e,t){return e.filter(e=>{const n=t.members[e.name]
if(!n||0===n.length)return!0
const r=n.at(-1)
return Xo()-r[4]>Vl})}function hm(e,t){const n=new Set(t.map(e=>e.name)),r=function(e,t){let n=null
if(e?.members)for(const[r,i]of Object.entries(e.members))if(t.has(r)&&i.length>0){const e=i.at(-1)[4];(!n||e<n)&&(n=e)}return n}(e,n)
return function(e){if(!e)return 864e5
const t=e+Vl
return Math.max(60,t-Xo())*Ql}(r)}function pm(e,t){if(fm(t,e).length>0){const t=Xo()-e.lastUpdate
return Math.max(0,(30-t)*Ql)}return hm(e,t)}const gm={running:!1}
async function vm(e,t){const n=fm(t,e),r=n.slice(0,3)
await async function(e,t){for(const n of e)try{const e=await cm(n.name)
if(!e)continue
dm(n,e,um(t,n.name))}catch(e){Fo((n.name,e.message))}}(r,e),e.lastUpdate=Xo(),await J_(im,e)
return{remaining:n.length-r.length}}async function _m(){if(gm.running)return
gm.running=!0
const e=await Q_(im)||{lastUpdate:Xo(),members:{}},t=await async function(){const e=await b_()
return e.s?e.r.flatMap(e=>e.members):null}()
if(t)for(;gm.running;){const n=pm(e,t)
await av(n),await vm(e,t)}else gm.running=!1}function mm(){y_()&&_m()}function bm(){gm.running=!1}function ym(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function wm(){return!y_()}function km(e){return xg("a",e)}function xm(e){return xg("li",e)}function Sm(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function Em(e,t){if(t instanceof Node&&t.parentNode instanceof Node)return function(e,t){return t.nextSibling instanceof Node?Sm(e,t.nextSibling):Pg(t.parentNode,e)}(e,t)}const Cm=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function Pm(e,t){vg("accordion",e),Cm.includes(e)?t():Ig(t)}function Lm(e,t,n,r){const i=function(e,t,n){const r=xm({className:`nav-level-${e}`}),i=km({className:"nav-link fshPoint",textContent:t})
return Pg(r,i),Em(r,n.parentNode),i}(e,t,r)
sc(n)?Jv(i,Wp(Pm,t,n)):(i.href=n,Jv(i,()=>vg("accordion",t)))}const Tm=[[e=>e.recipeManagerLink,"1","Recipe Manager",Wg,"nav-character-log"],[e=>e.inventoryManagerLink,"1","Inventory Manager",`${Ma}invmanagernew`,"nav-character-log"],[e=>e.medalGuideLink,"1","Medal Guide",`${La}${ka}medalguide`,"nav-character-log"],[e=>e.buffLogLink&&Xl("keepBuffLog"),"1","Buff Log",Ag,"nav-character-log"],[e=>e.combatLogLink&&Xl("keepLogs"),"1","Combat Logs",Mg,"nav-character-notepad"],[e=>e.creatureLogLink&&Xl("showMonsterLog"),"1","Creature Logs",Rg,"nav-character-notepad"],[e=>e.quickLinksLink,"1","Quick Links",Gg,"nav-character-notepad"],[e=>e.auctionSearchLink,"2","AH Quick Search",Dg,"nav-actions-trade-auctionhouse"],[e=>e.onlinePlayersLink,"2","Online Players",Hg,"nav-actions-interaction-findplayer"],[e=>e.findOtherLink,"2","Find Other",Bg,"nav-actions-interaction-findplayer"],[e=>e.findBuffsLink,"2","Find Buffs",qg,"nav-actions-interaction-findplayer"],[e=>e.guildInventoryLink&&bg(),"2","Guild Inventory",`${Ma}guildinvmgr`,"nav-guild-storehouse-inventory"],[e=>e.newGuildLogLink&&bg()&&!Xl("useNewGuildLog"),"2","New Guild Log",Fg,"nav-guild-ledger-advisor"],[e=>e.topRatedLink,"2","Top 250 Players",`${wa}toprated${ka}xp`,"nav-toprated-players-level"]]
function $m(e){Tm.forEach(([n,r,i,s,o])=>{n(e)&&function(e,n,r,i){const s=t(i)
s instanceof Node&&Lm(e,n,r,s)}(r,i,s,o)})}const Im=e=>22*Yv("li",e).length||null
function Om(e,t,n){$m(n),function(e,t){t.heights=Yv("#nav > li").map(Im)
const n=Number(t.state),r=e?.children?.[n]?.children?.[1]?.style
r&&(r.height=`${t.heights[n]}px`)}(e,t)}var Am=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function Mm(e){return function(e){return-1!==e&&0===lc(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(vg("accordion","collapse"),-1):e}const Rm=(e,t,n)=>$(e).data(`${n}${t}`)
function jm(e,t,n){return new Promise(r=>{const i=Rm(e,t,n)
i?r(i):function(e,t,n,r){$(e).on(`${Iv(t)}create`,()=>{r(Rm(e,t,n))})}(e,t,n,r)})}const Fm=[[e=>!oc(e),()=>Sc("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>Sc("$('#nav').data('hcsNav').heights does not exist")]]
async function Nm(){const e=t("nav"),n=await jm(e,"Nav","hcs")
return function(e){const t=Fm.find(([t])=>t(e))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function Dm(){!function(){const e=Xl("lastActiveQuestPage")
Xl("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=Xl("lastScavPage")
Xl("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function qm(){const{theNav:e,myNav:t}=await Nm()
e&&t&&(Dm(),function(e,t){const n=Am.map(e=>[e,Xl(e)])
n.some(([,e])=>e)&&Om(e,t,ym(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,Mm(n))}}(t))}function Bm(e){return yv({cmd:"bounty",page:e})}function Hm(e){return e()}function Um(e,t){rc(e,xc(t))}let Gm=0,zm=0
const Wm=()=>Gm,Vm=()=>zm
function Qm(){return Sg({className:"minibox"})}function Jm(e){return xg("span",e)}function Km(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function Ym(e,t){Km(e,"beforeend",t)}function Xm([e,t,n,r,i]){const s=e(),o=n()
if(o)return Um(t,o),Lg("",s),function(e,t,n,r){const i=Sg({innerHTML:`<a class="fshBountyHeader" href="${el}">${n} Bounties</a> `}),s=Jm({className:"xxsLink",textContent:"Reset"})
return Pg(i,s),Pg(e,i),Ym(e,function(e,t,n){const r=e.bounty
return 0===r.length?`<div class="xsOrange">[No ${t.toLowerCase()} bounties]</div>`:r.map(n).join("")}(t,n,r)),s}(s,o,r,i)}function Zm(e,t){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${t(e)}">${e.target}</a><br>`}function eb(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function tb(e){const t=Xl(e)
if(t)return ac(t,eb)}function nb(e){return e.split(",").map(Up)}function rb(e){const t=Xl(e)
return t?nb(t):[]}function ib(e){return lc("img",e[2]).title}function sb(e){const t="A"===(r=e[0]).children[0].tagName?r.children[0]:r.children[0].children[0]
var r
return{target:n(t),link:t.href,lvl:n(t.nextSibling).replace(/[[|\]]/g,""),reward:n(e[2]),rewardType:ib(e),xpLoss:n(e[3]),posted:n(e[4])}}let ob=0,ab={},lb={},cb=!1,ub=!1,db=[]
const fb=()=>ab,hb=()=>lb,pb=()=>db
function gb(e){return{...sb(e),progress:n(e[5])}}function vb(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=gb(e.rows[t].cells)
ab.bounty.push(n)}}(e)}function _b(e,t){return function(e){if(e)return ab&&Xo()-ab.lastUpdate>ob}(e)||function(e){if(e)return lb&&Xo()-lb.lastUpdate>ob}(t)}let mb=0
function bb(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function yb(e){return Zm(e,bb)}function wb(){mb=Xm([Wm,"bountyList",fb,"Active",yb])}let kb=0
function xb(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function Sb(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function Eb(e){return[Sb(e),Zm(e,xb)].join("")}function Cb(){kb=Xm([Vm,"wantedList",hb,"Wanted",Eb])}function Pb(e){const t=e[6]
return"[n/a]"!==Gp(t)?t.children[0].children[0].getAttribute("onclick"):""}const Lb=[()=>pb().includes("*"),e=>pb().includes(e),(e,t)=>Ec.wantedGuildMembers&&"[n/a]"===Gp(t.cells[6])]
function Tb(e,t){var n;(function(e,t){return"[active]"!==Gp(t.cells[6])&&Lb.some(n=>n(e,t))})(e,t)&&hb().bounty.push({...sb(n=t.cells),offerer:Gp(n[1].children[0].children[0]),tickets:Gp(n[5]),accept:Pb(n)})}let $b=0,Ib=0
function Ob(e){const n=lc('#pCC input[name="page"]',e)
if(!n)return
$b=Number(n.value),Ib=Number(l(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const r=t("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
r&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],r=Gp(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===r)break
Tb(r,n)}}(r)}function Ab(e){Ec.enableActiveBountyList&&!cb&&(!function(e){const n=t("bounty-info",e)
if(!n)return
const r=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
ab={},ab.bounty=[],ab.isRefreshed=!0,ab.lastUpdate=Xo(),r&&vb(r),cb=!0}(e),wb())}async function Mb(e){const t=mv(e)
if(Ab(t),Ec.enableWantedList)if(Ob(t),$b<Ib){Mb(await Bm($b+1))}else Cb()}const Rb=[()=>!fb(),()=>!hb(),()=>ub]
async function jb(){if(function(e,t){ab=tb("bountyList"),lb=tb("wantedList"),ob=Xl("bountyListRefreshTime"),ub=Xl("bwNeedsRefresh"),ub||_b(e,t)&&(ub=!0)}(Ec.enableActiveBountyList,Ec.enableWantedList),Rb.some(Hm)){lb={},lb.bounty=[],lb.isRefreshed=!0,lb.lastUpdate=Xo(),cb=!1,db=rb("wantedNames"),rc("bwNeedsRefresh",!1)
Mb(await Bm(1))}else!function(e,t){t&&(hb().isRefreshed=!1,Cb()),e&&(fb().isRefreshed=!1,wb())}(Ec.enableActiveBountyList,Ec.enableWantedList)}function Fb(e,t){vg("activeWantedBounties",e),Um(t,null),jb()}function Nb(e){e.target===mb&&Fb("getBountyListReset","bountyList"),e.target===kb&&Fb("getWantedListReset","wantedList")}async function Db(e){const t=await am(s(),e),n=t?.username===s(),r=n?{...t,lastUpdate:Jo()}:t
return n&&J_("fsh_selfProfile",r),r}function qb(e){return(e=>Jo()-Ec.allyEnemyOnlineRefreshTime<e?.lastUpdate)(e)?e:Db()}async function Bb(e){if(e)return Db(e)
return qb(await Q_("fsh_selfProfile"))}function Hb(e,t){return t?.classList?.contains(e)}function Ub(e,t){return Hb(t[0],e)}function Gb(e,t,n){const{target:r}=n,i=t.find(Wp(e,r))
if(i)return i[1](r)}function zb(e){return Wp(Gb,Ub,e)}function Wb(e){return Bc(e,"player_id")}function Vb(e,t,n){return Math.floor(Math.max(e-t,0)/2+n)}function Qb(e,t,n,r,i){let s=r
500===r&&(s=1e3)
const o=Vb(window.screen.availHeight,s,window.screenY),a=Vb(document.documentElement.clientWidth,n,window.screenX)
window.open(e,t,`width=${n}, height=${s}, left=${a}, top=${o}${i}`)}function Jb(e,t){let n=""
t&&(n=`&blist=${t}`),Qb(`${Ja}&t=${e}${n}`,"fsQuickBuff",618,1e3,",scrollbars")}function Kb(e){let t=e,n=Math.floor(t/60)
t%=60
let r=Math.floor(n/60)
n%=60
const i=Math.floor(r/24)
return r%=24,[i,r,n,t]}function Yb(e,t){return 0===e?"":String(e)+t}function Xb(e){const t=Kb(Math.abs(Xo()-e))
return`${Yb(t[0]," days, ")+Yb(t[1]," hours, ")+Yb(t[2]," mins, ")+t[3]} secs`}const Zb="enemy-buff-check-on",ey="enemy-buff-check-off",ty="enemy-send-message",ny="enemy-quickbuff",ry="enemy-quick-buff",iy=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function sy(e,t){return t[0](Xo()-e)}function oy(e,t){return`<a class="player-name tip-static ${function(e,t){const n=iy.find(Wp(sy,e))
return n?function(e,t){return e?t[1]:t[2]}(t,n):"fshWhite"}(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${Xb(e.last_login)}</td></tr></tbody></table>" href="${Ta}${e.id}">${e.username}</a>`}function ay(e){return Xo()-e.last_login<1800}function ly(e,t){return`<li class="player"><div class="player-row">${Ec.hideBuffSelected?"":`<span class="${Zb}"></span>`}${oy(t,e)}</div><div class="guild-minibox-actions">${Ec.hideGuildInfoMessage?"":`<span class="${ty} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${Ec.hideGuildInfoBuff?"":`<span class="${ny} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return Ec.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${Oa}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return Ec.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${Ia}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function cy(e,t){return e.filter(ay).map(Wp(ly,t)).join("")}const uy=[(e,t)=>e.length+t.length,(e,t)=>{if(!Ec.enableAllyOnlineList)return t.length},e=>{if(!Ec.enableEnemyOnlineList)return e.length}]
function dy(e){vg("allyEnemy",e)}function fy(e,t,n){return 0===n(e,t)}function hy(e){const n=Pc(e._allies,[]),r=Pc(e._enemies,[]);(function(e,t){return uy.every(Wp(fy,e,t))})(n,r)||function(e,n){let r=""
Ec.enableAllyOnlineList&&(r+=cy(e,!0)),Ec.enableEnemyOnlineList&&(r+=cy(n,!1))
const i=t("fshContactList")
Lg("",i),Ym(i,r)}(n,r)}function py(e){dy("toggleBuffSelected"),e.classList.toggle(Zb),e.classList.toggle(ey)}const gy=[[Zb,py],[ey,py],[ty,function(e){dy("msgPlayer"),window.openQuickMsgDialog(n(e.parentNode.previousElementSibling.lastElementChild))}],[ny,function(e){dy("buffPlayer"),Jb(Wb(e.parentNode.previousElementSibling.lastElementChild.href))}],[ry,function(){dy("selectedBuff"),Jb(Cg(Zb,t("fshContactList")).map(e=>Wb(e.nextElementSibling.href)).join(","))}]]
function vy(e){const{target:t}=e
"fshResetEnemy"!==t.id?zb(gy)(e):async function(){dy("resetList"),hy(await Bb(!0))}()}function _y(e){const t=Sg({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
Ec.hideBuffSelected||(n+=`<ul class="${ry}">Quick Buff Selected</ul>`),n+="</div></div>",Ym(t,n),Pg(Kp(),t),Jv(t,vy),hy(e)}function my(e){if(e?.length)return n(e[0].nextElementSibling)}function by(e){return e?Number(e.replace(/,/g,"")):0}function yy(e){return by(my(Eg(e)))}function wy(e){let t=e.toString()
return e<10&&(t=`0${t}`),t}function ky(e,t){const n=e?.split(" ").map(e=>e.slice(0,-1))
var r
if(n)return`<dd>${r=new Date(Jo()+1e3*(60*(60*t+Number(n[0]))+Number(n[1]))),`${wy(r.getHours())}:${wy(r.getMinutes())} ${r.toLocaleString("en",{weekday:"short"})} ${wy(r.getDate())}/${la[r.getMonth()]}/${r.getFullYear()}`}</dd>`}var xy=oh("<div><!></div>")
function Sy(e,t){qu(t,!0)
let n,r,i,s=Cp(t,"visible",3,!0),o=Cd(void 0)
Xd(()=>{s()?document.body.classList.contains("noscroll")||(n=!0,r=window.scrollY,i=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${r}px`):n&&(document.body.classList.remove("noscroll"),document.body.style.top=i||"",window.scrollTo(0,r))})
var a=xy()
let l
a.__click=function(e){e.target===Hf(o)&&t.close()},Lh(Hd(a),()=>t.children??tu),fp(a,e=>Ld(o,e),()=>Hf(o)),nf(()=>l=Gh(a,0,"svelte-1joucfc",null,l,{visible:s()})),ch(e,a),Bu()}let Ey
th(["click"])
var Cy=oh('<div role="dialog" aria-modal="true"><!></div>')
function Py(e,t){qu(t,!0)
let n,r=Cp(t,"modal",15),i=Cp(t,"visible",3,!0)
Xd(()=>{i()?(Ec.dialogIsClosed&&(n=Ec.dialogIsClosed),Ec.dialogIsClosed=()=>!i()):n&&(Ec.dialogIsClosed=n)}),Sy(e,{get close(){return t.close},get visible(){return i()},children:(e,n)=>{!function(e,t){qu(t,!0)
let n=Cp(t,"modal",15),r=Cp(t,"visible",3,!0),i=_d(r),s=Cd(void 0),o=Cd(void 0)
const a=e=>e.tabIndex>=0&&e.offsetWidth>0&&e.offsetHeight>0&&!e.disabled
Xd(()=>{r()?(Ld(s,document?.activeElement,!0),n()&&(Ld(o,Ey,!0),Ey=n())):(Hf(s)?.focus(),n()&&(Ey=Hf(o)))})
var l=Cy()
let c
eh("keydown",Rd,function(e){if(r())if("Escape"!==e.key||Ey!==n()){if("Tab"===e.key){const t=Yv("*",n()).filter(a)
let r=t.indexOf(document.activeElement);-1===r&&e.shiftKey&&(r=0),r+=t.length+(e.shiftKey?-1:1),r%=t.length,t[r].focus(),e.preventDefault()}}else t.close()}),Lh(Hd(l),()=>t.children??tu),fp(l,e=>n(e),()=>n()),nf(()=>c=Gh(l,0,"ui-dialog svelte-h5colk",null,c,{modalVisible:Hf(i)})),ch(e,l),Bu()}(e,{get close(){return t.close},get visible(){return i()},get modal(){return r()},set modal(e){r(e)},children:(e,n)=>{var r=lh()
Lh(Ud(r),()=>t.children??tu),ch(e,r)},$$slots:{default:!0}})},$$slots:{default:!0}}),Bu()}var Ly=oh('<div class="svelte-2mrn1o"> </div> <div class="svelte-2mrn1o"><button type="button" class="svelte-2mrn1o">Yes</button> <button type="button" class="svelte-2mrn1o">No</button></div>',1)
function Ty(e,t){qu(t,!0)
let n=Cp(t,"msg",3,"Are you sure?"),r=Cp(t,"visible",15,!0)
function i(){r(!1),t.resolve(!1)}function s(){r(!1),t.resolve(!0)}Py(e,{close:i,get visible(){return r()},children:(e,t)=>{var r=Ly(),o=Ud(r),a=Hd(o),l=Hd(Gd(o,2))
l.__click=s,Gd(l,2).__click=i,nf(()=>dh(a,n())),ch(e,r)},$$slots:{default:!0}}),Bu()}th(["click"])
const $y=Od({visible:!0})
let Iy=null
function Oy(e){$y.resolve=e,Iy?$y.visible=!0:Iy=fh(Ty,{props:$y,target:document.body})}function Ay(e){return $y.msg=e,new Promise(Oy)}async function My(e){if("daily-quest-reroll-button"!==e.target.id)return
e.stopPropagation()
await Ay("Are you sure you want to re-roll the Daily Quest?")&&async function(){const e=t("minibox-daily-quest")
if(!e)return
vg("dailyQuest","reroll")
const n=await wv({cmd:"dailyquests",subcmd:"reroll"})
if(!n)return
const r=t("minibox-daily-quest",n)
r&&e.replaceWith(r)}()}function Ry(e){return xg("button",{...e,type:"button"})}function jy(e,t){Ym(e,t)}function Fy(){vg("fsbox","open log"),jg()}function Ny(e,t){const n=Jm({className:`fsh-fsbox ${e}`,textContent:"[ "})
return Pg(n,t),jy(n," ]"),n}function Dy(e){const t=lc(Ul,e)
t&&(function(e,t){const r=km({href:`${Pa}${n(t)}`,textContent:"Ignore"})
Jv(r,()=>vg("fsbox","ignore link")),Pg(e,Ny("fs-box-ignore",r))}(e,t),async function(e){const t=await Q_("fsh_fsboxcontent")??"",n=Up(lc(".message",e).innerHTML)
if(t.includes(n))return
J_("fsh_fsboxcontent",`<br>${n}${t}`.slice(0,9999))}(e))}function qy(e){e.classList.add("fshRelative"),function(e){const t=Ry({textContent:"Log"})
Jv(t,Fy),Pg(e,Ny("fs-box-log",t))}(e),Dy(e)}function By(e,t){t instanceof Node&&(t.textContent=String(e))}let Hy=null
function Uy(){return Hy||(Hy=t("quickMessageDialog")),Hy}let Gy=0
function zy(e){(function(){if(!Gy){const e=Eg("validateTips",Uy())
1===e.length&&([Gy]=e)}return Gy})()&&By(Pc(e,""),Gy)}let Wy=null
function Vy(){return Wy||(Wy=t("quickMsgDialog_msg"),Wy.maxLength=512),Wy}let Qy=null,Jy=0,Ky=0
function Yy(e){"Enter"!==e.key||e.shiftKey||(vg("messaging","sendOnEnter"),e.preventDefault(),function(){if(!Ky){const e=$(Uy()).dialog("option","buttons")
Ky=e["Send Message"]}return Ky}()())}function Xy(){na(Qy)&&(Qy=Xl("enterForSendMessage")),Qy&&!Jy&&(kc(Vy(),"keypress",Yy),Jy=!0)}let Zy=null
let ew=0,tw=0,nw=0
function rw(e,t,n){const r=tw.insertRow(e)
let i=r.insertCell(-1)
Ym(i,t),i=r.insertCell(-1),Ym(i,n)}function iw(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function sw(e,t){rw(e,iw("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const ow=[["del-button",function(e){vg("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
tw.deleteRow(t),ew.splice(t-2,1),Um("quickMsg",ew)}],["add-button",function(e){vg("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){sw(e.parentNode.parentNode.rowIndex,n),t.value="",ew.push(n),Um("quickMsg",ew)}}],["add-template",function(e){vg("messaging","insertTemplate"),Vy().value+=`${n(e).replace(/\{playername\}/g,Zy)}`}]]
function aw(e){sw(-1,e)}function lw(){Xl("enableMessageTemplates")&&!nw&&(Jv((tw||(tw=Uy().lastElementChild),tw),zb(ow)),(ew||(ew=tb("quickMsg")),ew).forEach(aw),rw(-1,iw("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),nw=!0)}function cw(e,n,r){const i=Uy()
Hb("ui-dialog-content",i)&&(!function(e){Zy=e,By(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=Vy()
t.value=Pc(e,""),t.disabled=!1}(n),zy(r),lw(),Xy(),$(i).dialog("open"))}function uw(e){return pv({cmd:"composing",...e})}function dw(){return uw({subcmd:"view"})}function fw(){return _v(dw)}function hw(e,n,r){const i=xm({className:"notification"}),s=km({href:r,innerHTML:`<span class="notification-icon"></span><p class="notification-content">${n}</p>`})
Jv(s,()=>{vg("notification",e)}),Pg(i,s),Pg(t("notifications"),i)}function pw(){hw("composing","Composing to do",Ka)}function gw(e){return e.time_remaining}function vw(){pw(),rc(kl,!0)}function _w(e){const t=e.h.p.find(({k:e})=>52===e)?.v
e.r.potions.length!==t?vw():function(e){const t=Math.min.apply(null,e.map(gw))
t>0?(rc(kl,!1),rc(xl,Jo()+1e3*t)):vw()}(e.r.potions)}function mw(){Xl(kl)?pw():async function(){const e=Xl(xl)
if(e&&Jo()<e)return
const t=await fw()
t?.s&&_w(t)}()}function bw(e){return pv({cmd:"guild",...e})}function yw(e){return bw({subcmd:"groups",...e})}function ww(e){return yw({subcmd2:"joinall",group:e})}function kw(e){return Promise.all(e)}function xw(e){return _v(ww,0,e)}function Sw(){return yw({subcmd2:"view"})}function Ew(){return _v(Sw)}var Cw=oh('<p class="notification-content" style="line-height: 32px;">Joined.</p>'),Pw=oh('<span class="notification-content fshSpinner fix-classic-theme svelte-v71ckx"></span>'),Lw=oh('<p class="notification-content"><button type="button" class="svelte-v71ckx"> </button></p>'),Tw=oh('<a><span id="notification-icon-guild-group" class="notification-icon"></span> <!></a>')
function $w(e,t){qu(t,!0)
let n=Cd(0),r=Cd(Od(Ua)),i=Cd("")
const o=e=>!Ec.enableMaxGroupSizeToJoin||e.members.length<Ec.maxGroupSizeToJoin,a=e=>e.name===s(),l=e=>!e.members.find(a),c=e=>e.id
async function u(){const e=await Ew()
e?.s&&await async function(e){const t=e.r.filter(o).filter(l).map(c)
t.length&&await xw(t)}(e)}function d(e){Hf(n)||(e.preventDefault(),vg("notification","Join All"),Ld(n,1))}Ec.enableMaxGroupSizeToJoin&&(Ld(r,Ga,!0),Ld(i,` less than size ${Ec.maxGroupSizeToJoin}`))
var f=Tw(),h=Gd(Hd(f),2),p=e=>{var t=lh()
_h(Ud(t),u,e=>{ch(e,Pw())},e=>{ch(e,Cw())}),ch(e,t)},g=e=>{var t=Lw(),n=Hd(t)
n.__click=d
var r=Hd(n)
nf(()=>dh(r,`Join all attack groups${Hf(i)??""}.`)),ch(e,t)}
mh(h,e=>{Hf(n)?e(p):e(g,!1)}),nf(()=>Zh(f,"href",Hf(r))),ch(e,f),Bu()}function Iw(e){return pv({cmd:"temple",...e})}function Ow(e){return Iw({subcmd:"pray",type:e})}function Aw(){return Iw({subcmd:"view"})}function Mw(e){$(e).qtip("hide")}th(["click"])
let Rw=Element
const jw=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${wa}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
function Fw(e){rc("needToPray",e),rc("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}async function Nw(e){const t=e.target.getAttribute("praytype")
t&&(vg("notification","prayToGods"),Mw(e.target),await function(e){return _v(Ow,0,e)}(t),Rw.outerHTML='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',Fw(!1))}function Dw(){Ym(t("notifications"),jw),Rw=t("helperPrayToGods"),eg(Rw,"click",Nw)}async function qw(){if(!Ec.enableTempleAlert)return
const e="temple"===Ec.cmd?function(e){if(!e)return{s:!1}
const t=lc("#pCC",e)
return t?{s:!0,r:{pray_index:"You are currently praying at the temple."===Gp(t)?0:-1}}:{s:!1}}(document):await _v(Aw)
if(!e.s)return
const t=-1===e.r.pray_index
t&&Dw(),Fw(t)}function Bw(){var e
!(e=Xl("lastTempleCheck"))||Jo()>e?qw():Xl("needToPray")&&Dw()}function Hw(){return e={subcmd:"goldupgrades"},pv({cmd:"points",...e})
var e}function Uw(e,t,n){if(e?.rows)return qp(e.rows).filter((e,r)=>e.children.length===t&&r>n)}function Gw(e){return Number.isNaN(e)}function zw(e,t){const n=Number(Gp(e.cells[2]).split(" / ")[0]),r=Gp(e.cells[3])
return{id:t,...!["-","n/a"].includes(r)&&{reset_time:Date.parse(`${r} GMT`)/1e3},current:Gw(n)?0:n}}function Ww(){return-1!==window.location.search.indexOf("cmd=points&type=1")}function Vw(){Ww()||hw("stamina","Upgrade stamina with gold",`${ja}&type=1`)}async function Qw(){if(Ww()&&function(){const e=Kv('#pCC input[name="quantity"]')
e?.length<2||(e[0].value="100",e[1].value="10")}(),!Ec.enableUpgradeAlert)return
const e=Ww()?function(e){if(!e)return{s:!1}
const t=lc("#pCC > table",e)
return t?{s:!0,r:Uw(t,5,0).map(zw)}:{s:!1}}(document):await _v(Hw)
ra(e?.r?.[1]?.current)||function(e){10!==e.current?(Vw(),rc("needToDoUpgrade",!0)):(rc("needToDoUpgrade",!1),rc("lastUpgradeCheck",1e3*e.reset_time))}(e.r[1])}function Jw(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?Sm(t,e.firstChild):Pg(e,t)}(e,t)}function Kw(e,t){t.stopPropagation(),vg("chrome","statbar",e)}function Yw(e,n){const r=t(`statbar-${n}`)
if(!r)return
const i=km({href:e}),s=r.parentNode
Pg(i,r),Jw(s,i),Jv(i,Wp(Kw,n),!0)}function Xw(e,t){Cg("player-name",e).forEach(t)}const Zw=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function ek(e,t){const n=e.dataset.tipped,r=l(Zw,n)
r<2?e.classList.add(t.l1):r<5?e.classList.add(t.l2):e.classList.add(t.l3)}const tk=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function nk(e,t){tk.forEach(n=>{Ec[n[0]]&&qp(Kv(n[t],e)).forEach(n_)})}function rk(e){e?.classList&&e.classList.add("fshInvisible")}function ik(e,n){Ec.hideBuffSelected&&(qp(Eg(`${n}-buff-check-on`,e)).forEach(rk),rk(t(`${n}-quick-buff`)))}function sk(e){ek(e,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function ok(e,t,n){Yv(`#pCR h${e}`).filter(Qv(t)).forEach(e=>{const r=km({href:`${Fa}${n}`,textContent:t})
Jv(r,()=>{vg("widgets",`guild ${n}`)}),e.replaceChild(r,e.firstChild)})}function ak(e){ek(e,{l1:"fshDodgerBlue",l2:"fshLightSkyBlue",l3:"fshPowderBlue"})}function lk(e){const n=t(e)
n&&(n.classList.add("pCR"),Pg(Kp(),n))}function ck(e){const n=t(e)
n&&Jw(Xp(),n)}function uk([e,t,n,r,i]){return Date.UTC(Number(e),la.indexOf(t),Number(n),Number(r),Number(i),0)}function dk(e){if(e?.src)return e.src.split("/").at(-1).split(".")[0]}function fk(e){return yg(e?.seData??{}).flatMap(([t,n])=>Cc(n)?n.map(([n,r,i,s,o,a,l=-1])=>[n,t,r,i,e?.realms[s],o,a,l]):[[n,t.replaceAll(" ","_"),0,"","","",""]])}const hk=e=>e.join("|"),pk=e=>e.split("|")
function gk(e){const{time:t,creature:n,playerId:r,playerName:i,location:s,drop:o,creatureId:a}=e,l=s.match(/^(.*?)\s(\(\d+, \d+\))$/)
return[t,n.replace(" (Super Elite)","").replaceAll(" ","_"),r,i,l?l[1]:"realm unknown",l?l[2]:"coordinates unknown",o,a]}function vk(e,t){const n=((e,t)=>d_(e.map(hk).concat(t.map(hk))).map(pk).map(([e,t,n,r,i,s,o,a])=>[Number(e),t,Number(n),r,i,s,o,Number(a)]).sort(([e],[t])=>t-e))(t.map(gk),fk(e)),r=d_(n.map(([,,,,e])=>e)).sort(Ov),i=(e=>t=>ym(d_(t.map(([,e])=>e)).map(n=>[n,t.filter(([,e])=>e===n).map(([t,,n,r,i,s,o,a])=>[t,n,r,e.findIndex(e=>e===i),s,o,a]).slice(0,10)])))(r)(n)
return{seData:i,realms:r}}const _k=_p()
let mk=!1,bk={},yk=0,wk=!1
const kk=e=>Math.max(0,600-(Qo()-(e?.lastUpdate??0)),600-(Qo()-yk))
function xk(e){const t=e.replace("<br>"," ").split(/[: /]/)
return uk([t[2],t[1],t[0],t[3],t[4]])}function Sk(e){const t=qp(e.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE&&""!==Gp(e))
return 0===t.length?"":t.map(e=>Gp(e)).join(" ")}const Ek=e=>({time:xk(e.cells[0].innerHTML)/1e3,creature:Gp(e.cells[1]),creatureId:Number(l(va,lc("img",e.cells[1]).src)),playerId:u_(lc("a",e.cells[2])),playerName:Gp(lc("a",e.cells[2])),location:Sk(e.cells[2]),drop:dk(lc("img",e.cells[3]))??"no drop"})
async function Ck(){yk=Qo()
const e=await async function(){const e=await wv({cmd:"superelite"})
return e&&lc('img[src*="eliteslayerlog"]',e)?Uw(lc("#pCC table table",e),4,0).map(Ek):[]}()
e?.length&&(bk=vk(bk,e),J_("fsh_seLog",{lastUpdate:yk,...bk}),_k.set(bk))}function Pk(e,t){wk=t,e(wk),wk&&!mk&&async function(){for(mk=!0,bk=await Q_("fsh_seLog"),_k.set(bk);wk;)mk=!0,await av(1e3*kk(bk)),wk&&await Ck(),mk=!1}()}const Lk=function(){const{subscribe:e,set:t}=_p(0)
return{subscribe:e,set:Wp(Pk,t)}}()
const Tk=[function(){Xl("moveGuildList")&&ck("minibox-guild")},function(){Xl("moveOnlineAlliesList")&&ck("minibox-allies")},function(){Xl("moveXmasBox")&&lk("minibox-xmas")},function(){Xl("moveDailyQuest")&&lk("minibox-daily-quest")},function(){Xl("moveFSBox")&&lk("minibox-fsbox")},async function(){if(!Ec.enableAllyOnlineList&&!Ec.enableEnemyOnlineList||wm())return
!function(e){e&&qc(3,_y,[e])}(await Bb(!1))},function(){!Ec.enableWantedList&&!Ec.enableActiveBountyList||wm()||(Ec.enableActiveBountyList&&(Gm=Qm(),Pg(Kp(),Gm)),Ec.enableWantedList&&(zm=Qm(),Pg(Kp(),zm)),Wm()&&Jv(Wm(),Nb),Vm()&&Jv(Vm(),Nb),jb())},function(){if(!Ec.enableGuildInfoWidgets)return
const e=t("minibox-guild-members-list")
e&&(nk(e,1),ik(e,"guild"),Xw(e,sk),ok(4,"Chat","chat"),ok(3,"Guild","manage"))},function(){if(!Ec.enableOnlineAlliesWidgets)return
const e=t("minibox-allies-list")
e&&(nk(e,2),ik(e,"ally"),Xw(e,ak))},function(){Ec.enableTempleAlert&&"temple"!==Ec.cmd&&!wm()&&Bw()},function(){Ec.enableUpgradeAlert&&y_()&&!Ww()&&function(){if(Xl("needToDoUpgrade"))return void Vw()
const e=Xl("lastUpgradeCheck");(!e||Jo()>e)&&Qw()}()},function(){Ec.enableComposingAlert&&"composing"!==Ec.cmd&&y_()&&mw()},function(){Kp()&&!wm()&&qm()},function(){wm()||(window.openQuickMsgDialog=cw)},function(){Xl("statBarLinks")&&(Yw(La,"character"),Yw(`${ja+ka}reserve`,"stamina"),Yw(Qa,"equipment"),Yw($a,"inventory"),Yw(ja,"fsp"),Yw(`${wa}bank`,"gold"))},function(){if(!Xl("staminaCalculator"))return
const e=Eg("stat-stamina-nextGain")
if(0===e.length)return
const n=t("statbar-stamina-tooltip-stamina"),r=(e=>my(Eg("stat-name",e)).split(" / "))(n)
2===r.length&&Ym(n,function(e,t){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${ky(my(e),Math.floor((by(t[1])-by(t[0]))/yy("stat-stamina-gainPerHour")))}`}(e,r))},function(){if(!Xl("levelUpCalculator"))return
const e=Eg("stat-xp-nextGain")
0!==e.length&&Ym(t("statbar-level-tooltip-general"),`<dt class="stat-xp-nextLevel">Next Level At</dt>${ky(my(e),Math.ceil(yy("stat-xp-remaining")/yy("stat-xp-gainPerHour")))}`)},function(){if(!Xl("fsboxlog"))return
const e=t("minibox-fsbox")
e&&qy(e)},function(){Xl("resizeQuickBuff")&&(window.openWindow=function(e,t,n,r,i){vg("chrome","interceptQuickBuff"),Qb(e,t,n,r,i)})},function(){if(!Xl("joinAllLink"))return
const e=t("notification-guild-group")
e&&function(e){Lg("",e),fh($w,{target:e})}(e)},function(){if(!Xl("addScoutTowerLink")||!bg())return
const e=t("minibox-spoilsofwar")
if(!e)return
const n=e.children[1]
if(!n)return
const r=n.children[0]
Ym(r,"&nbsp;"),Pg(r,function(){const e=km({dataset:{tooltip:"View Scout Report"},href:Da,innerHTML:`<img id="fshScoutTower" src="${sa}structures/27.png">`})
return Jv(e,()=>vg("chrome","scout tower link")),e}())},function(){y_()&&Xl(El)&&mm()},function(){y_()&&Ec.enableSeTracker&&Lk.set(Ec.enableSeTracker)},function(){Xl("dailyQuestReRoll")&&Xp()&&Jv(Xp(),My,!0)}]
const $k=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function Ik(){i_()||($k.forEach(e_),Ec.allyEnemyOnlineRefreshTime=1e3*Xl("allyEnemyOnlineRefreshTime"),Ec.useNewGuildLog&&(kc(document.body,"click",r_),kc(document.body,"auxclick",r_)),s_(Tk))}function Ok(e){const t=ac(e)
t?.["new-ui"]&&(Xl("gameHelpLink")&&qc(3,Zv),Ec.huntingMode=Xl("huntingMode"),qc(3,Wv),Ik(),Xl("hideHelperMenu")||qc(3,ov))}function Ak(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&Ok(e)}function Mk(){y_()&&t("worldPage")&&window.GameData&&Og(import("./newMap-RM521Iwq.js"))}const Rk={"-":{"-":()=>{Og(import("./arena-wyrdPrDH.js").then(function(e){return e.b}))}},dojoin:{"-":()=>{Og(import("./arenaDoJoin-BFTo78Gi.js"))}},join:{"-":()=>{Og(import("./arenaJoin-L6XpSEqN.js"))}},completed:{"-":()=>{Og(import("./completedArenas-BZ1fGPle.js"))}},pickmove:{"-":()=>{Og(import("./storeMoves-zKpc1biT.js"))}},setup:{"-":()=>{Og(import("./setupMoves-Dd1FvsZj.js"))}}}
var jk={"-":{"-":()=>{Og(import("./injectAuctionHouse-Chw_-oYf.js"))}},quickcreate:{"-":()=>{Og(import("./quickCreate-toJT1cv2.js"))}}}
var Fk={"-":{"-":()=>{Og(import("./composing-Bw0118Gi.js"))}},breakdown:{"-":()=>{Og(import("./breakdown-Ba27vlX-.js"))}},create:{"-":()=>{Og(import("./composingCreate-D70CbMq4.js"))}}}
function Nk(){Og(import("./bioWidgets-BF48iqpn.js"))}function Dk(){Og(import("./injectGuild-BdZMDT4D.js"))}const qk=()=>{Og(import("./guildAdvisor-CkcEP8Bx.js"))}
const Bk=()=>{Og(import("./groups-DroPp3EO.js"))}
const Hk=()=>{Og(import("./addRemoveTags-erMBLQTy.js"))}
const Uk=()=>{Og(import("./guildChat-CEZXSbbb.js"))}
var Gk={inventory:{report:()=>{Og(import("./guildReport-DmVGnuD1.js"))},addtags:Hk,removetags:Hk,storeitems:()=>{Og(import("./storeitems-vswWyJ8h.js"))}},chat:{"-":Uk},dochat:{"-":Uk},log:{"-":()=>{Og(import("./guildLog-CsqbO13d.js"))}},groups:{viewstats:()=>{Og(import("./injectGroupStats-idwy7Q2B.js"))},joinallgroupsundersize:Bk,joinall:Bk,"-":Bk},manage:{"-":Dk},advisor:{"-":qk,weekly:qk},history:{"-":Nk},view:{"-":Dk},scouttower:{"-":()=>{Og(import("./injectScouttower-BkoLWScR.js"))}},mailbox:{"-":()=>{Og(import("./guildMailbox-Dt4Zt4zY.js"))}},ranks:{"-":()=>{Og(import("./rank-B8sw90PP.js"))}},conflicts:{rpupgrades:()=>{Og(import("./injectRPUpgrades-DCu9dmYt.js"))}},bank:{"-":()=>{Og(import("./injectGuildBank-BiSdg3LF.js"))}},hall:{"-":()=>{Og(import("./hall-CKayP5Ef.js"))},post:Nk},"-":{"-":Dk},titanrewards:{"-":()=>{Og(import("./titanrewards-DKKmVdA1.js"))}}}
function zk(){Og(import("./viewRecipe-LGWJbRAZ.js"))}var Wk={"-":{"-":function(){Og(import("./inventing-CWwY5zsZ.js"))}},doinvent:{"-":zk},viewrecipe:{"-":zk}}
function Vk(){Og(import("./ufsgAllowBack-CkhJBpD6.js"))}var Qk={"-":{"-":Vk},view:{"-":()=>{Og(import("./itemsView-CVbm4KqO.js"))}}}
function Jk(){Og(import("./profile-Bvs71yyO.js").then(function(e){return e.p}))}function Kk(){Og(import("./news-BqwnceXX.js"))}function Yk(){Og(import("./viewArchive-DxDc2arp.js"))}var Xk={fsbox:{"-":()=>{Og(import("./newsFsbox-CRwZFS_m.js"))}},"-":{"-":Kk},shoutbox:{"-":()=>{Og(import("./newsShoutbox-s6Q6ziPE.js"))}},viewupdatearchive:{"-":Yk},viewarchive:{"-":Yk}}
var Zk={news:{"-":Kk},viewupdatearchive:{"-":Yk},viewarchive:{"-":Yk},"-":{"-":()=>{Og(import("./unknownPage-CHRVvlQU.js"))}}},ex=oh('<button class="modal-close svelte-1dt59d4" type="button">×</button>')
th(["click"])
var tx=oh('<div class="modal-title svelte-1ftnqia"><!> <!></div> <div class="modal-content svelte-1ftnqia"><!></div>',1)
function nx(e,t){qu(t,!0)
let n=Cp(t,"visible",3,!0),r=Cd(void 0),i=Cd(void 0)
Pp(()=>{hg(Hf(i),Hf(r))}),Py(e,{get close(){return t.close},get visible(){return n()},get modal(){return Hf(r)},set modal(e){Ld(r,e,!0)},children:(e,n)=>{var r=tx(),s=Ud(r),o=Hd(s)
Lh(o,()=>t.title??tu),function(e,t){var n=ex()
n.__click=function(...e){t.close?.apply(this,e)},ch(e,n)}(Gd(o,2),{get close(){return t.close}}),fp(s,e=>Ld(i,e),()=>Hf(i)),Lh(Hd(Gd(s,2)),()=>t.children??tu),ch(e,r)},$$slots:{default:!0}}),Bu()}Mu=!0
var rx=oh('<button type="button" class="mold-btn svelte-1hsd3o">Download Item Groups JSON</button>'),ix=oh('<span class="error svelte-1hsd3o">Error loading mold data</span>'),sx=oh("<span>Loading mold data...</span>"),ox=oh('<div class="mold-link svelte-1hsd3o"><!></div>')
function ax(e,t){qu(t,!0)
let n=Cd(Od(Promise.resolve(null)))
async function r(){const e=await pv({cmd:"molds"})
if(e?.s&&e.r?.molds&&e.r?.cdns?.length)return function(e){const t=e.r.molds?.find(e=>"item_groups.json"===e.filename)
if(!t)throw new Error("Failed to load mold data")
const n=`${e.r.cdns[0]}${t.filename}`
return window.open(n,"_blank"),null}(e)
throw new Error("Failed to load mold data")}function i(){vg("GS Export","Items Mold"),Ld(n,r(),!0)}var s=ox()
_h(Hd(s),()=>Hf(n),e=>{ch(e,sx())},e=>{var t=rx()
t.__click=i,ch(e,t)},e=>{ch(e,ix())}),ch(e,s),Bu()}function lx(e,t){const n=URL.createObjectURL(e),r=km({download:t,href:n,style:{display:"none"}})
Pg(document.body,r),Bv(r),document.body.removeChild(r),setTimeout(()=>{URL.revokeObjectURL(n)},0)}function cx(){return om({inc_tagged:"1",subcmd:"guild_store"})}th(["click"])
var ux=oh('<p class="error svelte-d95mlu">You must be in a guild to use this feature.</p>'),dx=oh('<div class="export-ready svelte-d95mlu"><p class="success svelte-d95mlu">Export ready! Click the button below to download your file.</p> <button type="button" class="svelte-d95mlu">Download CSV</button> <button type="button" class="svelte-d95mlu">Download JSON</button></div>'),fx=oh('<button type="button" class="svelte-d95mlu">Generate Export</button>'),hx=oh('<p class="error svelte-d95mlu">Failed to generate export.</p>'),px=oh('<button type="button" disabled class="svelte-d95mlu">Generating Export...</button> <div class="progress svelte-d95mlu"><p class="svelte-d95mlu">Loading guild store inventory...</p> <div class="spinner svelte-d95mlu"></div></div>',1)
function gx(e,t){qu(t,!0)
let n=Cd(Od(Promise.resolve(null))),r=Cd(null),i=Cd(null)
const s=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,String(!!e.in_guide),e.player_id,e.equipped,e.craft,e.forge],o=e=>{return[...s(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??""])].join(",")
var t}
async function a(){const e=await cx()
if(!e?.items?.length)throw new Error("Invalid export data")
const t=e.items
return Ld(i,e,!0),Ld(r,`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name\n${(e=>e.map(o).join("\n"))(t)}\n`),null}function l(){bg()&&(vg("GS Export","Generate"),Ld(n,a(),!0))}function c(){if(!Hf(r))return
vg("GS Export","Download")
const e=`gs_export_${(new Date).toISOString().slice(0,19).replace(/[:.]/g,"-")}.csv`
var t
lx((t=Hf(r),new Blob([t],{type:"text/csv"})),e)}function u(){if(!Hf(i))return
vg("GS Export","Download JSON")
const e=`gs_export_${(new Date).toISOString().slice(0,19).replace(/[:.]/g,"-")}.json`
lx(new Blob([JSON.stringify(Hf(i),null,2)],{type:"application/json"}),e)}var d=lh(),f=Ud(d),h=e=>{ch(e,ux())},p=e=>{var t=lh()
_h(Ud(t),()=>Hf(n),e=>{ch(e,px())},e=>{var t=lh(),n=Ud(t),i=e=>{var t=dx(),n=Gd(Hd(t),2)
n.__click=c,Gd(n,2).__click=u,ch(e,t)},s=e=>{var t=fx()
t.__click=l,ch(e,t)}
mh(n,e=>{Hf(r)?e(i):e(s,!1)}),ch(e,t)},e=>{ch(e,hx())}),ch(e,t)}
mh(f,e=>{bg()?e(p,!1):e(h)}),ch(e,d),Bu()}th(["click"])
var vx=oh('<div class="gs-export svelte-6n2izk"><p class="svelte-6n2izk">Export your Guild Store inventory data to a CSV file for analysis.</p> <!> <!></div>')
function _x(e,t){qu(t,!0)
let n=Cp(t,"visible",15,!0)
{const t=e=>{ch(e,ah("Guild Store Export"))}
nx(e,{close:function(){vg("GS Export","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{!function(e){var t=vx(),n=Gd(Hd(t),2)
ax(n,{}),gx(Gd(n,2),{}),ch(e,t)}(e)},$$slots:{title:!0,default:!0}})}Bu()}const mx=Od({visible:!0})
let bx=0
var yx=Object.freeze({__proto__:null,default:function(){bx?mx.visible=!0:bx=fh(_x,{props:mx,target:document.body})}}),wx=oh("<div></div>"),kx=oh("<div> </div>"),xx=oh("<virtual-scroll-item><!></virtual-scroll-item>",2),Sx=oh("<div></div>"),Ex=oh("<virtual-scroll-viewport><virtual-scroll-content><!> <!> <!></virtual-scroll-content></virtual-scroll-viewport>",2)
function Cx(e,t){qu(t,!0)
let n=Cp(t,"items",19,()=>[]),r=Cp(t,"overscan",3,5),i=Cp(t,"scrollToIndex",15)
let s,o=Cd(0),a=Cd(0),l=Cd(void 0),c=Cd(0),u=Cd(!1),d=[],f=[],h=50,p=Cd(0),g=!1,v=!1,_=!1
const m=_d(()=>n().slice(Hf(o),Hf(a)).map((e,t)=>({index:t+Hf(o),item:e}))),b=_d(()=>w(Hf(o))),y=_d(()=>Hf(a)>=n().length?0:Hf(p)-w(Hf(a)))
function w(e){if(!d.length)return e*h
if(void 0!==f[e])return f[e]
let t=0
for(let n=0;n<e;n++)t+=d[n]||h
return t}function k(e,t){d[e]!==t&&(d[e]=t,g||_||(g=!0,requestAnimationFrame(()=>{g=!1,function(){let e=0,t=0
f=[],Ld(p,0)
for(let r=0;r<n().length;r++){f[r]=Hf(p)
const n=d[r]
n>0?(e++,t+=n,Ld(p,Hf(p)+n)):Ld(p,Hf(p)+h)}e>0&&(h=t/e)
if(Hf(u)&&Hf(c)>0){const e=Hf(l)?.scrollTop||0,t=x(e),n=S(t,e,Hf(c))
Ld(o,t,!0),Ld(a,n,!0)}}()})))}function x(e){if(!Hf(u)||!n().length)return 0
if(f.length){let t=0,i=n().length-1
for(;t<i;){const n=Math.floor((t+i)/2)
f[n]+(d[n]||h)>e?i=n:t=n+1}return Math.max(0,t-r())}return 0}function S(e,t,i){if(!Hf(u)||!n().length)return 0
const s=t+i
for(let t=e;t<n().length;t++){if((f[t]||t*h)>s)return Math.min(n().length,t+r())}return n().length}Pp(()=>{Ld(u,!0)}),Xd(()=>{n().length&&Hf(u)&&(d=Array(n().length).fill(0),Ld(p,n().length*h),Ld(o,0),Ld(a,Math.min(n().length,4*r()),!0))}),Xd(()=>{if(Hf(c)>0&&Hf(u)){const e=Hf(l)?.scrollTop||0,t=x(e),n=S(t,e,Hf(c))
Ld(o,t,!0),Ld(a,n,!0)}}),Xd(()=>{void 0!==i()&&Hf(u)&&(!function(e,t="smooth"){if(!Hf(u)||e<0||e>=n().length)return
const r=w(e)
Hf(l).scrollTo({top:r,behavior:t})}(i()),i(void 0))})
var E=Ex()
Gh(E,0,"svelte-jpynml")
var C=Hd(E)
Gh(C,0,"svelte-jpynml")
var P=Hd(C),L=e=>{var t=wx()
nf(()=>Wh(t,`height: ${Hf(b)??""}px;`)),ch(e,t)}
mh(P,e=>{Hf(b)>0&&e(L)})
var T=Gd(P,2)
xh(T,17,()=>Hf(m),({index:e,item:t})=>e,(e,n)=>{let r=()=>Hf(n).index
var i=xx()
Gh(i,0,"svelte-jpynml")
var s=Hd(i),o=e=>{var i=lh()
Lh(Ud(i),()=>t.children,()=>({item:Hf(n).item,index:r()})),ch(e,i)},a=e=>{var t=kx(),n=Hd(t)
nf(()=>dh(n,`Item ${r()??""}`)),ch(e,t)}
mh(s,e=>{t.children?e(o):e(a,!1)}),Nh(i,(e,t)=>function(e,{index:t,updateItemHeight:n}){function r(){const r=e.offsetHeight
r>0&&n(t,r)}const i=new ResizeObserver(r)
return i.observe(e),r(),{destroy(){i.disconnect()}}}?.(e,t),()=>({index:r(),updateItemHeight:k})),ch(e,i)})
var $=Gd(T,2),I=e=>{var t=Sx()
nf(()=>Wh(t,`height: ${Hf(y)??""}px;`)),ch(e,t)}
mh($,e=>{Hf(y)>0&&e(I)}),fp(E,e=>Ld(l,e),()=>Hf(l)),eh("scroll",E,function(){Hf(u)&&!v&&(_=!0,clearTimeout(s),s=setTimeout(()=>{_=!1},150),v=!0,requestAnimationFrame(()=>{v=!1
const e=Hf(l).scrollTop,t=x(e),n=S(t,e,Hf(c))
Hf(o)===t&&Hf(a)===n||(Ld(o,t,!0),Ld(a,n,!0))}))}),up(E,"offsetHeight",e=>Ld(c,e)),ch(e,E),Bu()}const Px={}
let Lx=-1
function Tx(e,t){qc(3,t.func,[e])}function $x(e,t){if(Px[e])return Px[e].forEach(Wp(Tx,t)),!0}function Ix(e,t){Px[e]||(Px[e]=[]),Lx+=1
const n=Lx.toString()
return Px[e].push({token:n,func:t}),n}function Ox(e,t){return Px[e]?Px[e][0].token:Ix(e,t)}let Ax=3
async function Mx(e=-1,t=1,n=[]){const r=1e3,i=await function(e,t,n){return bw({subcmd:"log",log_id:e,latest:t,limit:n})}(e,t,r)
if(!i?.s)return void $x("guildLog-progress","Server Error.")
$x("guildLog-progress")
const s=n.concat(i.r.logs)
return i.r.logs.length!==r||s.length>=r*Ax?s:Mx(i.r.logs[0].id,0,s)}var Rx=oh('<button type="button" class="svelte-1o6o1uz"><!></button>')
function jx(e,t){let n=Cp(t,"disabled",3,0)
var r=Rx()
r.__click=function(...e){t.onclick?.apply(this,e)},Lh(Hd(r),()=>t.children??tu),nf(()=>r.disabled=n()),ch(e,r)}th(["click"])
var Fx=oh('<span class="svelte-1sxqwyk">[<!>]</span>')
function Nx(e,t){var n=Fx()
jx(Gd(Hd(n)),{get onclick(){return t.onclick},children:(e,n)=>{var r=lh()
Lh(Ud(r),()=>t.children??tu),ch(e,r)},$$slots:{default:!0}}),ch(e,n)}var Dx=oh('<div class="filter-header svelte-1onji9i"><div class="filters svelte-1onji9i"><div class="front svelte-1onji9i"><span>Filters:</span></div> <div><label>Potions: <input type="checkbox"/></label></div> <div><label>Store/Recalls: <input type="checkbox"/></label></div> <div><label>Relics: <input type="checkbox"/></label></div> <div><label>Mercenaries: <input type="checkbox"/></label></div> <div><label>Group Combats: <input type="checkbox"/></label></div> <div><!></div> <div><label>Donations: <input type="checkbox"/></label></div> <div><label>Rankings: <input type="checkbox"/></label></div> <div><label>GvGs: <input type="checkbox"/></label></div> <div><label>Tag/UnTags: <input type="checkbox"/></label></div> <div><label>Titans: <input type="checkbox"/></label></div> <div><label>Other: <input type="checkbox"/></label></div></div> <div class="button-row svelte-1onji9i"><div></div> <div class="buttons svelte-1onji9i"><div><!></div> <div><!></div> <div><!></div></div> <div class="search-box svelte-1onji9i"><label>Search: <span class="search-wrapper svelte-1onji9i"><input type="text" class="svelte-1onji9i"/> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></span></label></div></div></div>')
function qx(e){return`${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}:${e[5]}`}function Bx(e){return"[object Date]"===Object.prototype.toString.call(e)&&!Gw(e.getTime())}function Hx(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(wy)}(e))}function Ux(e){if(Bx(e))return qx(Hx(e))}function Gx(e){return Ux(new Date(1e3*e))}th(["change"])
let zx=null
function Wx(){const e=t("holdtext")
if(e&&!zx){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(zx=Number(t))}return zx}function Vx(e){return pv({cmd:"combat",subcmd:"view",combat_id:e})}const Qx="fsh_pvpCombat"
let Jx=null,Kx={}
const Yx={}
async function Xx(){const e=await Q_(Qx)
return Kx=e?(e?.lastCheck??0)<ea()?function(e){var t
const n={...ym(yg(e).filter((t=ta(),([e,n])=>"lastCheck"===e||n?.logTime>t))),lastCheck:Xo()}
return J_(Qx,n),n}(e):e:{lastCheck:Xo()},Kx}async function Zx(e,t){Yx[t]=_v(Vx,0,t)
const n=await Yx[t]
if(n?.s)return Kx[t]={...n,logTime:e},J_(Qx,Kx),n
delete Yx[t]}async function eS(e,t){Jx||(Jx=Xx())
const n=await Jx
return n[t]?n[t]:Yx[t]?Yx[t]:Zx(e,t)}function tS(){return e={subcmd2:"view"},bw({subcmd:"recruit",...e})
var e}var nS=oh('<i class="fas fa-envelope" aria-hidden="true"></i>'),rS=oh('<a class="svelte-87xocm"> </a>'),iS=oh('[ <a class="svelte-87xocm"><img class="svelte-87xocm"/> </a> ]',1),sS=oh("<!> <!>",1),oS=oh('<span class="action-buttons svelte-87xocm">[ <!> | <!> ]</span>'),aS=oh('<div class="rel svelte-87xocm"> </div>'),lS=oh('<div class="rel svelte-87xocm"><span class="fshSpinner recruit-spinner svelte-87xocm"></span></div>'),cS=oh('<!> <span class="action-buttons svelte-87xocm">[ <!> | <!> | <!> | <!> ]</span>',1),uS=oh('<span class="action-buttons svelte-87xocm">[ <!> ]</span>'),dS=oh('<div><a class="svelte-87xocm"> </a>\'s group looted an item</div>'),fS=oh("<div><div><!></div> <div><!></div> <div><!> <!> <!> <!></div></div>")
function hS(e,t){qu(t,!0)
let n=Cp(t,"groupCombatItems",3,null),r=Cp(t,"hideNonPlayerGuildLogMessages",3,null),i=Cp(t,"logEntry",3,null),s=Cd(Od(Promise.resolve())),o=Cd("waiting")
function a(e){vg("Guild Log",e)}const l=e=>e
function c(e){const t=e.msg.attachments?.filter(e=>0===e.type)
return t?.length&&!t.filter(({data:{id:e}})=>e===Wx()).length}async function u(e,t){a(t),Ld(s,tS(),!0)
const n=await Hf(s)
if(n?.s&&Cc(n?.r)){const r=n.r.find(({player:{id:t}})=>t===e.id)
r?.id?Lv(`${Fa}recruit&subcmd2=${t}&id=${r.id}`):Ld(o,"gone")}else Ld(o,"error")}var d=fS()
let f
var h=Hd(d)
let p
var g=Hd(h),v=e=>{ch(e,nS())}
mh(g,e=>{i().time&&e(v)})
var _=Gd(h,2)
let m
var b=Hd(_),y=e=>{var t=ah()
nf(e=>dh(t,e),[()=>Gx(i().time)]),ch(e,t)}
mh(b,e=>{i().time&&e(y)})
var w=Gd(_,2)
let k
var x=Hd(w)
xh(x,17,()=>i().msg.text.split(/<link=a(\d)><\/link>/).filter(l),yh,(e,t)=>{var n=lh(),r=Ud(n),s=e=>{var n=sS(),r=Ud(n),s=e=>{var n=rS(),r=Hd(n)
nf(()=>{Zh(n,"href",`${Ta??""}${i().msg.attachments[Hf(t)].data.id??""}`),dh(r,i().msg.attachments[Hf(t)].data.name)}),ch(e,n)}
mh(r,e=>{0===i().msg.attachments[Hf(t)].type&&e(s)})
var o=Gd(r,2),a=e=>{var n=iS(),r=Gd(Ud(n)),s=Hd(r),o=Gd(s,1,!0)
nf(()=>{Zh(r,"href",`${Ha??""}${i().msg.attachments[Hf(t)].data.id??""}`),Zh(s,"src",`${sa??""}guilds/${i().msg.attachments[Hf(t)].data.id??""}_mini.png`),Zh(s,"alt",i().msg.attachments[Hf(t)].data.name),dh(o,i().msg.attachments[Hf(t)].data.name)}),ch(e,n)}
mh(o,e=>{1===i().msg.attachments[Hf(t)].type&&e(a)}),ch(e,n)},o=e=>{var n=ah()
nf(()=>dh(n,Hf(t))),ch(e,n)}
mh(r,e=>{1!==Hf(t).length||Gw(Number(Hf(t)))?e(o,!1):e(s)}),ch(e,n)})
var S=Gd(x,2)
xh(S,17,()=>i().msg.attachments&&i().msg.attachments.filter(({type:e})=>0===e),yh,(e,t)=>{let n=()=>Hf(t).data
var r=cS(),l=Ud(r),c=e=>{var t=lh()
_h(Ud(t),()=>Hf(s),e=>{ch(e,lS())},e=>{var t=lh(),r=Ud(t),i=e=>{var t=oS(),r=Gd(Hd(t))
jx(r,{onclick:()=>u(n(),"acceptjoin"),children:(e,t)=>{ch(e,ah("Accept"))},$$slots:{default:!0}}),jx(Gd(r,2),{onclick:()=>u(n(),"denyjoin"),children:(e,t)=>{ch(e,ah("Deny"))},$$slots:{default:!0}}),ch(e,t)},s=e=>{var t=aS(),n=Hd(t)
nf(()=>dh(n,Hf(o))),ch(e,t)}
mh(r,e=>{"waiting"===Hf(o)?e(i):e(s,!1)}),ch(e,t)}),ch(e,t)}
mh(l,e=>{21===i().type&&e(c)})
var d=Gd(l,2),f=Gd(Hd(d))
jx(f,{onclick:()=>function(e){a("reply"),window.openQuickMsgDialog(e.name)}(n()),children:(e,t)=>{ch(e,ah("Reply"))},$$slots:{default:!0}})
var h=Gd(f,2)
jx(h,{onclick:()=>function(e){a("buff"),Jb(e.id)}(n()),children:(e,t)=>{ch(e,ah("Buff"))},$$slots:{default:!0}})
var p=Gd(h,2)
jx(p,{onclick:()=>function(e){a("send"),Lv(`${Ia}${e.name}`)}(n()),children:(e,t)=>{ch(e,ah("Send"))},$$slots:{default:!0}}),jx(Gd(p,2),{onclick:()=>function(e){a("trade"),Lv(`${Oa}${e.name}`)}(n()),children:(e,t)=>{ch(e,ah("Trade"))},$$slots:{default:!0}}),ch(e,r)})
var E=Gd(S,2)
xh(E,17,()=>i().msg.attachments&&i().msg.attachments.filter(({type:e})=>11===e),yh,(e,t)=>{var n=uS()
jx(Gd(Hd(n)),{onclick:()=>function(e){a("combat"),Lv(`${wa}combat&subcmd=view&combat_id=${e}`)}(Hf(t).data),children:(e,t)=>{ch(e,ah("View Combat"))},$$slots:{default:!0}}),ch(e,n)})
var C=Gd(E,2),P=e=>{var t=lh()
_h(Ud(t),()=>eS(i().time,i().msg.attachments[0].data),null,(e,t)=>{var n=lh(),r=Ud(n),i=e=>{var n=dS(),r=Hd(n),i=Hd(r)
nf(()=>{Zh(r,"href",`${Ta??""}${Hf(t).r.combat.attacker.group.players[0].id??""}`),dh(i,Hf(t).r.combat.attacker.group.players[0].name)}),ch(e,n)}
mh(r,e=>{Hf(t)?.r?.combat?.items?.[0]&&e(i)}),ch(e,n)}),ch(e,t)}
mh(C,e=>{17===i().type&&n()&&i().msg.text.includes("victorious")&&e(P)}),nf(e=>{f=Gh(d,0,"row-container svelte-87xocm",null,f,e),p=Gh(h,0,"svelte-87xocm",null,p,{old:i().old,new:i().new}),m=Gh(_,0,"svelte-87xocm",null,m,{old:i().old,new:i().new}),k=Gh(w,0,"svelte-87xocm",null,k,{old:i().old,new:i().new})},[()=>({"not-self":r()&&c(i()),separator:i().index})]),ch(e,d),Bu()}const pS=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/,"has been rejected from joining the guild"],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function gS(e,t){return ec(t)?e.includes(t):t.test(e)}function vS(e,t){return t.some(Wp(gS,e))}function _S(e){const t=pS.findIndex(Wp(vS,e))
return-1===t?0:t}var mS=oh('<span class="white svelte-ertdo2">(Guild Log messages not involving self are dimmed!)</span>'),bS=oh('<div class="vs svelte-ertdo2"><!></div>'),yS=oh(" <br/>",1),wS=oh('<div class="fsh-guild-log svelte-ertdo2"><!> <div class="row-container svelte-ertdo2"><div class="innerColumnHeader svelte-ertdo2">&nbsp;</div> <div class="innerColumnHeader svelte-ertdo2">Date</div> <div class="innerColumnHeader svelte-ertdo2">Message <!></div></div> <!></div>')
function kS(e,t){qu(t,!0)
let n=Cp(t,"visible",15,!0),r=Cd(Od(Array(11).fill(!0))),i=Cd(null),s=Cd(null),o=Cd(Od([])),a=Cd(Od(Promise.resolve())),l=Cd(Od([])),c=Cd("")
const u=_d(()=>Hf(o).filter(({fshType:e})=>Hf(r)[e]).filter(({searchable:e})=>""===Hf(c)||e.includes(Hf(c).toLowerCase())).map(v)),d=_d(()=>Hf(u).length?Hf(u):[{index:0,msg:{text:""}}])
let f=0,h=null,p=null,g=null
const v=(e,t)=>({...e,index:t}),_=({msg:e})=>e.text.replace(/<link=a(\d)><\/link>/g,(t,n)=>e.attachments[n].data.name),m=e=>({...e,fshType:_S(e.msg.text),new:h&&e.time>p,old:h&&(g-e.time)/60>20&&e.time<=p,searchable:_(e).toLowerCase()}),b=(e,t)=>t.time-e.time
function y(e){vg("Guild Log",e)}function w(){y("cbChange")}function k(){y("selectAll")}function x(){y("selectNone")}function S(){y("oldGuildLog"),Lv(Na)}function E(){y("clearSearch"),Ld(c,"")}function C(e){Ld(l,Hf(l).concat(e),!0)}function P(e){e?C(e):(f+=1,C(`chunk ${f}`))}async function L(){Ld(l,["Loading..."],!0),Ld(o,[],!0),g=(new Date).setUTCSeconds(0,0)/1e3,p=Xl("lastModalGuildLogCheck")??g,rc("lastModalGuildLogCheck",g),h=Xl("enableLogColoring"),Ld(i,Xl("groupCombatItems"),!0),Ld(s,Xl("hideNonPlayerGuildLogMessages"),!0),f=0,Ox("guildLog-progress",P)
const e=await(Ax=Number(Xl("newGuildLogHistoryPages")),_v(Mx))
e&&Ld(o,e.toSorted(b).map(m),!0)}function T(){Ld(a,L(),!0)}Xd(()=>{n()&&T()})
{const t=e=>{ch(e,ah("Guild Log"))}
nx(e,{close:function(){y("close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=wS(),o=Hd(n)
!function(e,t){qu(t,!0)
let n=Cp(t,"checks",31,()=>Od(Array(11).fill(!0))),r=Cp(t,"searchValue",15,"")
function i(){J_("fsh_LogChecks",ju(n()))}function s(){i(),t.cbChange()}function o(e){n(n().map(()=>e)),i()}!async function(){n(await Q_("fsh_LogChecks")??Array(11).fill(!0))}()
var a=Dx(),l=Hd(a),c=Gd(Hd(l),2),u=Hd(c),d=Gd(Hd(u))
d.__change=s,d.value=d.__value="1"
var f=Gd(c,2),h=Hd(f),p=Gd(Hd(h))
p.__change=s,p.value=p.__value="2"
var g=Gd(f,2),v=Hd(g),_=Gd(Hd(v))
_.__change=s,_.value=_.__value="4"
var m=Gd(g,2),b=Hd(m),y=Gd(Hd(b))
y.__change=s,y.value=y.__value="5"
var w=Gd(m,2),k=Hd(w),x=Gd(Hd(k))
x.__change=s,x.value=x.__value="6"
var S=Gd(w,2)
jx(Hd(S),{get onclick(){return t.oldGuildLog},children:(e,t)=>{ch(e,ah("Old Guild Log"))},$$slots:{default:!0}})
var E=Gd(S,2),C=Hd(E),P=Gd(Hd(C))
P.__change=s,P.value=P.__value="7"
var L=Gd(E,2),T=Hd(L),$=Gd(Hd(T))
$.__change=s,$.value=$.__value="8"
var I=Gd(L,2),O=Hd(I),A=Gd(Hd(O))
A.__change=s,A.value=A.__value="9"
var M=Gd(I,2),R=Hd(M),j=Gd(Hd(R))
j.__change=s,j.value=j.__value="3"
var F=Gd(M,2),N=Hd(F),D=Gd(Hd(N))
D.__change=s,D.value=D.__value="10"
var q=Hd(Gd(F,2)),B=Gd(Hd(q))
B.__change=s,B.value=B.__value="0"
var H=Gd(l,2),U=Gd(Hd(H),2),G=Hd(U)
Nx(Hd(G),{onclick:function(){o(!0),t.selectAll()},children:(e,t)=>{ch(e,ah("Select All"))}})
var z=Gd(G,2)
Nx(Hd(z),{onclick:function(){o(!1),t.selectNone()},children:(e,t)=>{ch(e,ah("Select None"))}}),Nx(Hd(Gd(z,2)),{get onclick(){return t.refresh},children:(e,t)=>{ch(e,ah("Refresh"))}})
var W=Hd(Gd(U,2)),V=Gd(Hd(W)),Q=Hd(V),J=Gd(Q,2)
{let e=_d(()=>!r())
bh(J,()=>({"--button-deco":"none"})),jx(J.lastChild,{get disabled(){return Hf(e)},get onclick(){return t.clearSearch},children:(e,t)=>{ch(e,ah("×"))},$$slots:{default:!0}})}sp(d,()=>n()[1],e=>n(n()[1]=e,!0)),sp(p,()=>n()[2],e=>n(n()[2]=e,!0)),sp(_,()=>n()[4],e=>n(n()[4]=e,!0)),sp(y,()=>n()[5],e=>n(n()[5]=e,!0)),sp(x,()=>n()[6],e=>n(n()[6]=e,!0)),sp(P,()=>n()[7],e=>n(n()[7]=e,!0)),sp($,()=>n()[8],e=>n(n()[8]=e,!0)),sp(A,()=>n()[9],e=>n(n()[9]=e,!0)),sp(j,()=>n()[3],e=>n(n()[3]=e,!0)),sp(D,()=>n()[10],e=>n(n()[10]=e,!0)),sp(B,()=>n()[0],e=>n(n()[0]=e,!0)),np(Q,r),ch(e,a),Bu()}(o,{cbChange:w,clearSearch:E,oldGuildLog:S,refresh:T,selectAll:k,selectNone:x,get checks(){return Hf(r)},set checks(e){Ld(r,e,!0)},get searchValue(){return Hf(c)},set searchValue(e){Ld(c,e,!0)}})
var u=Gd(o,2),f=Gd(Hd(u),4),h=Gd(Hd(f)),p=e=>{ch(e,mS())}
mh(h,e=>{Hf(s)&&e(p)}),_h(Gd(u,2),()=>Hf(a),e=>{var t=lh()
xh(Ud(t),17,()=>Hf(l),yh,(e,t)=>{var n=yS(),r=Ud(n)
nf(()=>dh(r,`${Hf(t)??""} `)),ch(e,n)}),ch(e,t)},e=>{var t=bS()
{const e=(e,t)=>{hS(e,{get groupCombatItems(){return Hf(i)},get hideNonPlayerGuildLogMessages(){return Hf(s)},get logEntry(){return t?.().item}})}
Cx(Hd(t),{get items(){return Hf(d)},overscan:20,children:e,$$slots:{default:!0}})}ch(e,t)},(e,t)=>{var n=ah()
nf(()=>dh(n,Hf(t))),ch(e,n)}),ch(e,n)},$$slots:{title:!0,default:!0}})}Bu()}const xS=Od({visible:!0})
let SS=0
var ES=Object.freeze({__proto__:null,default:function(){SS?xS.visible=!0:SS=fh(kS,{props:xS,target:document.body})}})
function CS(){return bw({subcmd:"fetchinv"})}function PS(){return _v(CS)}function LS(e){return bw({subcmd:"inventory",...e})}function TS(){return LS({subcmd2:"report"})}function $S(){return _v(TS)}function IS(e,t,[n,r]){oc(r)&&null!==r?e[n]=t(r.constructor(),r):e[n]=r}function OS(e,t){return oc(t)&&yg(t).forEach(Wp(IS,e,OS)),e}function AS(e){return e?.constructor&&OS(e.constructor(),e)}th(["click"]),Od({visible:!0})
function MS(e,t,n){const r=(e=>Math.max(Math.min(e,100),0))((e-t)/(n-t)*100)
let i=255,s=255
r<50?s=Math.round(5.1*r):i=Math.round(510-5.1*r)
const o=(e=>`000000${e.toString(16)}`.slice(-6))(65536*i+256*s+0)
return`#${o}`}var RS=oh('<div class="svelte-1eys1iq"> </div> <div class="svelte-1eys1iq"> </div>',1),jS=oh('<div class="inventory svelte-1eys1iq"><div class="inventory-grid-container svelte-1eys1iq"></div></div>'),FS=oh("<option> </option>"),NS=oh("<option> </option>"),DS=oh('<div class="svelte-1eys1iq"> </div> <div class="svelte-1eys1iq"><select class="svelte-1eys1iq"><!></select></div> <div class="svelte-1eys1iq"><input title="Ignore" type="checkbox" class="svelte-1eys1iq"/></div>',1),qS=oh('<div class="mapping svelte-1eys1iq"><div class="mapping-grid-container svelte-1eys1iq"><!> <div class="svelte-1eys1iq"></div> <div class="svelte-1eys1iq"><button class="custombutton svelte-1eys1iq" type="button">Ignore All</button> <button class="custombutton svelte-1eys1iq" type="button">Reset</button></div></div></div>'),BS=oh('<div class="thresholds svelte-1eys1iq">Min: <input max="999" min="0" type="number" class="svelte-1eys1iq"/> Max: <input max="999" min="0" type="number" class="svelte-1eys1iq"/></div>'),HS=oh('<div class="filters svelte-1eys1iq"><label class="svelte-1eys1iq"><input type="checkbox"/> Member Backpacks</label> <label class="svelte-1eys1iq"><input type="checkbox"/> Guild Store</label></div> <div class="pot-report svelte-1eys1iq"><input class="tab-ctrl svelte-1eys1iq" id="pr-inv" type="checkbox"/> <label for="pr-inv" class="svelte-1eys1iq">Composed Potion Inventory</label> <input class="tab-ctrl svelte-1eys1iq" id="pr-map" type="checkbox"/> <label for="pr-map" class="svelte-1eys1iq">Mapping</label> <input class="tab-ctrl svelte-1eys1iq" id="pr-levels" type="checkbox"/> <label for="pr-levels" class="svelte-1eys1iq">Thresholds</label> <div class="panels svelte-1eys1iq"><!> <!> <!></div></div>',1),US=oh('<p style="color: red"> </p>'),GS=oh('<div class="main svelte-1eys1iq"><!></div>')
function zS(e,t){qu(t,!0)
const n="fsh_potReport",r={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let i=Cp(t,"visible",15,!0),s=Cd(null),o=Cd(!1),a=Cd(!1),l=Cd(!1),c=Cd(Od([])),u=[],d=Cd(Od([]))
const f=({b:e})=>13699===e,h=e=>MS(e,Hf(s).minpoint,Hf(s).maxpoint),p=({ignore:e})=>!e,g=e=>({name:t})=>t===e,v=(e,t)=>Ov(e.n,t.n),_=({r:e})=>e,m=e=>vg("pot-report",e),b=({player:e,n:t})=>({loc:e?1:2,n:t}),y=()=>J_(n,ju(Hf(s))),w=e=>u.filter((e=>({n:t})=>e.some(g(t)))(e)).filter(({loc:e})=>Hf(s).backpack||1!==e).filter(({loc:e})=>Hf(s).guildstore||2!==e).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(g(n)).mapped,n:n}))(e))
function k(){y(),Ld(c,function(){const e=Hf(s).potMap.filter(p),t=w(e)
return d_(e,"mapped").map((e=>({mapped:t})=>({name:t,count:e.filter(({mapped:e})=>e===t).length}))(t)).sort((e,t)=>Ov(e.name,t.name))}(),!0),Ld(d,Hf(s).potMap.map(e=>({...e,waiting:!0})),!0)}function x(){Hf(s).potMap=Hf(d).map(({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n})),k()}async function S(){!async function(){Ld(s,await Q_(n)||AS(r),!0),Ld(o,Hf(s).inventory,!0),Ld(a,Hf(s).mapping,!0),Ld(l,Hf(s).thresholds,!0),Hf(s).backpack=Hf(s).backpack??r.backpack,Hf(s).guildstore=Hf(s).guildstore??r.guildstore}()
const e=await kw([PS(),$S()])
if(!Cc(e[0]?.r)||!Cc(e[1]?.r))throw new Error("Server Error")
u=(e=>e.flatMap(_).filter(f).map(b).sort(v))(e),Hf(s).potMap=d_(u,"n").map(({n:e})=>({name:e,mapped:Hf(s)?.potMap?.find(g(e))?.mapped||e,ignore:Hf(s)?.potMap?.find(g(e))?.ignore??!1})),k()}{const t=e=>{ch(e,ah("Pot Report"))}
nx(e,{close:function(){m("close"),i(!1)},get visible(){return i()},title:t,children:(e,t)=>{var n=GS()
_h(Hd(n),S,e=>{ch(e,ah("Loading..."))},e=>{var t=HS(),n=Ud(t),r=Hd(n),i=Hd(r)
i.__change=()=>{m("backpack"),y(),k()}
var u=Hd(Gd(r,2))
u.__change=()=>{m("guildstore"),y(),k()}
var f=Hd(Gd(n,2))
f.__change=()=>{m("inventory"),y()},f.__click=()=>{Hf(o)||Ld(o,!0)}
var p=Gd(f,4)
p.__change=()=>{m("mapping"),y()},p.__click=()=>{Hf(a)||Ld(a,!0)}
var g=Gd(p,4)
g.__change=()=>{m("thresholds"),y()},g.__click=()=>{Hf(l)||Ld(l,!0)}
var v=Hd(Gd(g,4)),_=e=>{var t=jS()
xh(Hd(t),21,()=>Hf(c),yh,(e,t)=>{let n=()=>Hf(t).count
var r=RS(),i=Ud(r),s=Hd(i),o=Gd(i,2)
let a
var l=Hd(o)
nf(e=>{dh(s,Hf(t).name),a=Wh(o,"",a,e),dh(l,n())},[()=>({"background-color":h(n())})]),ch(e,r)}),ch(e,t)}
mh(v,e=>{Hf(o)&&e(_)})
var b=Gd(v,2),w=e=>{var t=qS(),n=Hd(t),r=Hd(n)
xh(r,17,()=>Hf(d),yh,(e,t,n)=>{let r=()=>Hf(t).name,i=()=>Hf(t).mapped
var s=DS(),o=Ud(s),a=Hd(o),l=Gd(o,2),c=Hd(l)
c.__change=()=>{m("mapped"),x()},c.__mousedown=()=>{Hf(d)[n].waiting=!1}
var u=Hd(c),f=e=>{var t=FS(),n=Hd(t),r={}
nf(()=>{dh(n,i()),r!==(r=i())&&(t.__value=i())}),ch(e,t)},h=e=>{var t=lh()
xh(Ud(t),17,()=>Hf(d),yh,(e,t)=>{let n=()=>Hf(t).name
var r=NS(),s=Hd(r),o={}
nf(()=>{var e
e=r,i()===n()?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected"),dh(s,n()),o!==(o=n())&&(r.__value=n())}),ch(e,r)}),ch(e,t)}
mh(u,e=>{Hf(t).waiting?e(f):e(h,!1)})
var p=Hd(Gd(l,2))
p.__change=()=>{m("ignore"),x()},p.__click=e=>e.target.blur(),nf(()=>{dh(a,r()),Zh(c,"name",r())}),Qh(c,()=>Hf(d)[n].mapped,e=>Hf(d)[n].mapped=e),sp(p,()=>Hf(d)[n].ignore,e=>Hf(d)[n].ignore=e),ch(e,s)})
var i=Hd(Gd(r,4))
i.__click=()=>{m("ignore-all"),Hf(s).potMap=Hf(s).potMap.map(e=>({...e,ignore:!0})),k()},Gd(i,2).__click=()=>{m("reset"),Hf(s).potMap=Hf(s).potMap.map(e=>({...e,mapped:e.name,ignore:!1})),k()},ch(e,t)}
mh(b,e=>{Hf(a)&&e(w)})
var S=Gd(b,2),E=e=>{var t=BS(),n=Gd(Hd(t))
n.__input=()=>{m("minpoint"),k()}
var r=Gd(n,2)
r.__input=()=>{m("maxpoint"),k()},np(n,()=>Hf(s).minpoint,e=>Hf(s).minpoint=e),np(r,()=>Hf(s).maxpoint,e=>Hf(s).maxpoint=e),ch(e,t)}
mh(S,e=>{Hf(l)&&e(E)}),sp(i,()=>Hf(s).backpack,e=>Hf(s).backpack=e),sp(u,()=>Hf(s).guildstore,e=>Hf(s).guildstore=e),sp(f,()=>Hf(s).inventory,e=>Hf(s).inventory=e),sp(p,()=>Hf(s).mapping,e=>Hf(s).mapping=e),sp(g,()=>Hf(s).thresholds,e=>Hf(s).thresholds=e),ch(e,t)},(e,t)=>{var n=US(),r=Hd(n)
nf(()=>dh(r,Hf(t).message)),ch(e,n)}),ch(e,n)},$$slots:{title:!0,default:!0}})}Bu()}th(["change","click","mousedown","input"])
const WS=Od({visible:!0})
let VS=0
var QS=Object.freeze({__proto__:null,default:function(){VS?WS.visible=!0:VS=fh(zS,{props:WS,target:document.body})}})
const JS=(e,t)=>({r:{[t]:[{n:l(/'(?<id>.*)'/,e)}]},s:!0})
function KS(e){const t=e.split(" x ")
return{amount:t[0],type:Dl.indexOf(t[1])}}const YS=[["You successfully used",()=>({s:!0})],["You successfully extracted",e=>JS(e,"components")],["You failed to extract",()=>({r:{},s:!0})],["You gained",function(e){const t=l(/You gained {1,2}(?<fragList>.*) Fragment\(s\)/,e)
if(t){return{r:{frags:t.split(", ").map(KS)},s:!0}}vg("da/useItem","Bad Msg",e)}],["You received",e=>JS(e,"mailbox_items")]]
async function XS(e){const t=await wv({cmd:"profile",subcmd:"useitem",inventory_id:e})
return t?function(e){const t=kv(e)
if(!t)return vg("da/useItem","No Info"),{e:{message:"No Info"},s:!1}
{const e=YS.find(e=>t.startsWith(e[0]))
if(e)return e[1](t)}return{e:{message:t},s:!1}}(t):{s:!1}}function ZS(e){return _v(XS,0,e)}function eE(){return om({subcmd:"inventory"})}var tE=oh('<label><input type="checkbox" class="svelte-1f42rtn"/> Select items in ST</label>')
function nE(e,t){qu(t,!0)
let n=Cp(t,"inSt",15,null)
const r="selectST"
n(Xl(r))
var i=tE(),s=Hd(i)
s.__change=function(){rc(r,n()),t.dispatchToggle()},sp(s,n),ch(e,i),Bu()}function rE(e){return`${e.amount} x ${Dl[e.type]}`}th(["change"])
const iE=[[e=>e.components?.length,e=>`You successfully extracted 1 '${e.components?.[0].n}' component(s) from 1 resource(s).`],[e=>e.frags,e=>`You gained ${e.frags.map(rE).join(", ")} Fragments by opening the Fragment Stash.`],[e=>e.mailbox_items?.length,e=>`You received 1 x '${e.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
function sE(e){return iE.find(([t])=>t(e))[1](e)}const oE=(e,t,n)=>`fetchitem.php?item_id=${t}&inv_id=${n}&t=1&p=${e}`
var aE=oh('<span class="fshRed"> </span>'),lE=oh('<li class="svelte-13gbaa4"><!></li>'),cE=oh('<span class="fshSpinner fshSpinner12"></span>'),uE=oh('<tr><td><!></td><td class="imgCol svelte-13gbaa4"><span class="imgSpan tip-dynamic svelte-13gbaa4"></span></td><td> </td></tr>'),dE=oh('<tr><td colspan="3"><p style="color: red"> </p></td></tr>'),fE=oh('<div class="svelte-13gbaa4">Select which type of plants you wish to extract all of. Only select\n    extractable resources. <br/> <!>&nbsp; <label><input type="checkbox" class="svelte-13gbaa4"/> Main Folder Only</label>&nbsp; <label><input type="checkbox" class="svelte-13gbaa4"/> Disable Prompts</label>&nbsp; <!> <br/> <table class="svelte-13gbaa4"><thead><tr><th class="actionCol svelte-13gbaa4">Actions</th><th colspan="2">Items</th></tr></thead><tbody><tr><td colspan="3"><ol></ol></td></tr><!></tbody></table></div>')
function hE(e,t){qu(t,!0)
let n=Cp(t,"visible",15,!0)
const r="selectMain",i="disableQuickExtractPrompts"
let s=Cd(null),o=null,a=Cd(null),l=Cd(Od(Xl(r))),c=Cd(Od(Xl(i))),u=null,d=Cd(null),f=Cd(Od([]))
const h=e=>"Zombie Coffin"===e.item_name||12===e.type||16===e.type,p=(e,t)=>Ov(e.item_name,t.item_name),g=e=>Hf(a)||!e.is_in_st,v=e=>!Hf(l)||-1===e.folder_id
function _(){Ld(d,Cc(u)&&function(e,t){return d_(t,"item_name").map(n=>{return{...n,count:t.filter(e=>e.item_name===n.item_name).length,delPending:!1,extractIds:t.filter(e=>e.item_name===n.item_name).map(e=>e.inv_id),style:(r=n.item_id,`background-image: url(${sa}items/${r}.gif)`),tip:oE(e,n.item_id,n.inv_id)}
var r})}(o,u.filter(g).filter(v)),!0)}function m(){vg("quickExtract","toggleSelectST"),_()}function b(){vg("quickExtract","toggleSelectMain"),rc(r,Hf(l)),_()}function y(){vg("quickExtract","togglePrompts"),rc(i,Hf(c))}async function w(){const e=await eE()
o=e?.player_id,u=e?.items?.filter(h).sort(p),_()}function k(){vg("quickExtract","refresh"),Ld(f,[],!0),Ld(s,w(),!0)}let x
async function S(e){const t=await ZS(e);(function(e){return e?.s||x===e?.e?.message||(x=e?.e?.message,Ld(f,[...Hf(f),e?.e?.message],!0)),e?.s})(t)&&(Ld(f,[...Hf(f),sE(t.r)],!0),u=u.filter(t=>t.inv_id!==e))}Xd(()=>{n()&&(Ld(f,[],!0),Ld(s,w(),!0))})
{const t=e=>{ch(e,ah("Quick Extract"))}
nx(e,{close:function(){vg("quickExtract","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=fE(),r=Gd(Hd(n),3)
nE(r,{dispatchToggle:m,get inSt(){return Hf(a)},set inSt(e){Ld(a,e,!0)}})
var i=Gd(r,2),o=Hd(i)
o.__change=b
var u=Gd(i,2),h=Hd(u)
h.__change=y
var p=Gd(u,2)
Nx(p,{onclick:k,children:(e,t)=>{ch(e,ah("Refresh"))}})
var g=Gd(p,4),v=Gd(Hd(g)),_=Hd(v),w=Hd(_)
xh(Hd(w),21,()=>Hf(f),yh,(e,t)=>{var n=lE(),r=Hd(n),i=e=>{var n=aE(),r=Hd(n)
nf(e=>dh(r,e),[()=>Hf(t).slice(1)]),ch(e,n)},s=e=>{var n=ah()
nf(()=>dh(n,Hf(t))),ch(e,n)}
mh(r,e=>{Hf(t).startsWith("<")?e(i):e(s,!1)}),ch(e,n)}),_h(Gd(_),()=>Hf(s),null,e=>{var t=lh()
xh(Ud(t),17,()=>Hf(d),yh,(e,t,n)=>{let r=()=>Hf(t).count,i=()=>Hf(t).delPending
var s=uE(),o=Hd(s)
let a
var l=Hd(o),u=e=>{var t=lh(),s=Ud(t),o=e=>{ch(e,cE())},a=e=>{jx(e,{onclick:()=>async function(e){vg("quickExtract","extract",Hf(c)),(Hf(c)||await Ay("Are you sure you want to extract all similar items?"))&&(Hf(d)[e].delPending=!0,await kw(Hf(d)[e].extractIds.map(S)),Hf(d)[e]?.count&&(Hf(d)[e].count=0))}(n),children:(e,t)=>{var n=ah()
nf(()=>dh(n,`Extract ${r()??""}`)),ch(e,n)},$$slots:{default:!0}})}
mh(s,e=>{i()?e(o):e(a,!1)}),ch(e,t)},f=e=>{ch(e,ah("Done"))}
mh(l,e=>{r()?e(u):e(f,!1)})
var h=Gd(o),p=Hd(h),g=Hd(Gd(h))
nf(()=>{a=Gh(o,0,"svelte-13gbaa4",null,a,{delPending:i()}),Zh(p,"data-tipped",Hf(t).tip),Wh(p,Hf(t).style),dh(g,Hf(t).item_name)}),ch(e,s)}),ch(e,t)},(e,t)=>{var n=dE(),r=Hd(n),i=Hd(r),s=Hd(i)
nf(()=>dh(s,Hf(t).message)),ch(e,n)}),sp(o,()=>Hf(l),e=>Ld(l,e)),sp(h,()=>Hf(c),e=>Ld(c,e)),ch(e,n)},$$slots:{title:!0,default:!0}})}Bu()}th(["change"])
const pE=Od({visible:!0})
let gE=0
var vE=Object.freeze({__proto__:null,default:function(){gE?pE.visible=!0:gE=fh(hE,{props:pE,target:document.body})}}),_E=oh('<button type="button" class="svelte-142b9qt"><!></button>'),mE=oh('<a target="_blank" class="svelte-142b9qt"> </a>'),bE=oh('<div></div> <div></div> <div class="last-kill svelte-142b9qt"> </div> <div><a target="_blank" class="svelte-142b9qt"> </a></div>',1),yE=oh('<div class="wide svelte-142b9qt"></div>'),wE=oh('<div class="expando svelte-142b9qt"><!></div> <div><!></div> <div class="last-kill svelte-142b9qt"> </div> <div><a target="_blank" class="svelte-142b9qt"> </a></div> <!>',1)
function kE(e,t){qu(t,!0)
let n=Cd(!1)
const r=()=>{vg("SE Tracker","Expand Row"),Ld(n,!Hf(n))}
var i=wE(),s=Ud(i),o=Hd(s),a=e=>{var t=_E()
t.__click=r
var i=Hd(t),s=e=>{ch(e,ah("∨"))},o=e=>{ch(e,ah(">"))}
mh(i,e=>{Hf(n)?e(s):e(o,!1)}),nf(()=>Zh(t,"aria-expanded",Hf(n))),ch(e,t)}
mh(o,e=>{t.entry[3].length&&e(a)})
var l=Gd(s,2),c=Hd(l),u=e=>{var n=mE(),r=Hd(n)
nf(e=>{Zh(n,"href",`${nl??""}creatures${ka}view&creature_id=${t.entry[4]??""}`),dh(r,e)},[()=>t.entry[0].replaceAll("_"," ")]),ch(e,n)},d=e=>{var n=ah()
nf(e=>dh(n,e),[()=>t.entry[0].replaceAll("_"," ")]),ch(e,n)}
mh(c,e=>{t.entry[4]>0?e(u):e(d,!1)})
var f=Gd(l,2),h=Hd(f),p=Gd(f,2),g=Hd(p),v=Hd(g),_=Gd(p,2),m=e=>{var n=yE()
xh(n,21,()=>t.entry[3],yh,(e,t)=>{var n=_d(()=>su(Hf(t),2))
let r=()=>Hf(n)[1]
var i=bE(),s=Gd(Ud(i),4),o=Hd(s),a=Hd(Gd(s,2)),l=Hd(a)
nf((e,t)=>{dh(o,e),Zh(a,"href",`${nl??""}realms&search_name=${t??""}`),dh(l,r())},[()=>Gx(Hf(n)[0]),()=>encodeURIComponent(r())]),ch(e,i)}),jh(3,n,()=>Rp,()=>({duration:300})),ch(e,n)}
mh(_,e=>{Hf(n)&&e(m)}),nf((e,n)=>{dh(h,e),Zh(g,"href",`${nl??""}realms&search_name=${n??""}`),dh(v,t.entry[2])},[()=>Gx(t.entry[1]),()=>encodeURIComponent(t.entry[2])]),ch(e,i),Bu()}th(["click"])
var xE=oh('<span class="network svelte-1n8ngaj"></span> <label>Enable SE Tracker [&thinsp; <div class="tooltip svelte-1n8ngaj">? <div class="tooltiptext svelte-1n8ngaj"><span class="tooltiptitle svelte-1n8ngaj">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/> This is DIFFERENT from the usual FSH network activity.<br/> When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/> You do not need auto-refresh for this to work.</div></div></div> &thinsp;]: <input type="checkbox" class="svelte-1n8ngaj"/></label>',1)
th(["click"])
const SE=mp([Lk,_k],([e,t],n)=>{t&&e?function(e,t){const n=fk(e)
t(d_(n.map(([,e])=>e)).map(e=>[e,n.filter(([,t])=>t===e).map(([e,,,,t,,,n=-1])=>[e,t,n])]).map(([e,t])=>[e,t[0][0],t[0][1],t.slice(1),t[0][2]]))}(t,n):n()})
var EE=oh('<div><div class="innerColumnHeader svelte-1sib168">&nbsp;</div></div> <div><div class="innerColumnHeader svelte-1sib168">Creature</div></div> <div><div class="innerColumnHeader svelte-1sib168">Last Kill</div></div> <div><div class="innerColumnHeader svelte-1sib168">Location</div></div> <!>',1),CE=oh('<div class="container svelte-1sib168"><div class="top svelte-1sib168"><!></div> <div class="tracker-table svelte-1sib168"><!></div></div>')
function PE(e){const t=()=>kp(SE,"$trackerTableStore",n),[n,r]=Sp()
var i=CE(),s=Hd(i)
!function(e,t){qu(t,!1)
const[n,r]=Sp()
hp()
var i=xE(),s=Ud(i)
Wh(s,"",{},{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")'})
var o=Gd(s,2),a=Gd(Hd(o),3)
a.__click=function(e){vg("SE Tracker","Toggle Pref"),rc("enableSeTracker",e.target.checked)},sp(a,()=>kp(Lk,"$trackerPrefStore",n),e=>xp(Lk,e)),ch(e,i),Bu(),r()}(Hd(s),{})
var o=Hd(Gd(s,2)),a=e=>{var n=EE()
xh(Gd(Ud(n),8),1,t,e=>e[0],(e,t)=>{kE(e,{get entry(){return Hf(t)}})}),ch(e,n)}
mh(o,e=>{t()&&e(a)}),ch(e,i),r()}function LE(e,t){qu(t,!0)
let n=Cp(t,"visible",15,!0)
{const t=e=>{ch(e,ah("Super Elite Tracker"))}
nx(e,{close:function(){vg("SE Tracker","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{PE(e)},$$slots:{title:!0,default:!0}})}Bu()}const TE=Od({visible:!0})
let $E=0
var IE=Object.freeze({__proto__:null,default:function(){$E?TE.visible=!0:$E=fh(LE,{props:TE,target:document.body})}})
function OE(e,t){return`<a href="${Ta}${e}">${t}</a>`}var AE=oh("<input/>"),ME=oh("<option> </option>"),RE=oh("<select><option> </option><!></select>"),jE=oh("<th><!></th>"),FE=oh("<th></th>"),NE=oh('<tr class="svelte-18zqsmu"><!><!></tr>'),DE=oh('<th tabindex="0"> <!></th>'),qE=oh("<th></th>"),BE=oh("<tr><!><!></tr>"),HE=oh("<td><!></td>"),UE=oh('<td><span class="isClickable svelte-18zqsmu" tabindex="0" role="button"><!></span></td>'),GE=oh("<tr><td><!></td></tr>"),zE=oh("<tr><!><!></tr> <!>",1),WE=oh("<table><thead><!><!></thead><tbody></tbody></table>")
function VE(e,t){qu(t,!0)
let n=Cp(t,"sortOrders",19,()=>[1,-1]),r=Cp(t,"sortBy",15,""),i=Cp(t,"sortOrder",31,()=>Od(n()?.[0]||1)),s=Cp(t,"filterSelections",31,()=>Od({})),o=Cp(t,"expanded",31,()=>Od([])),a=Cp(t,"selected",31,()=>Od([])),l=Cp(t,"expandRowKey",3,null),c=Cp(t,"rowKey",19,l),u=Cp(t,"expandSingle",3,!1),d=Cp(t,"selectSingle",3,!1),f=Cp(t,"selectOnClick",3,!1),h=Cp(t,"iconAsc",3,"▲"),p=Cp(t,"iconDesc",3,"▼"),g=Cp(t,"iconSortable",3,""),v=Cp(t,"iconExpand",3,"▼"),_=Cp(t,"iconExpanded",3,"▲"),m=Cp(t,"showExpandIcon",3,!1),b=Cp(t,"classNameTable",3,""),y=Cp(t,"classNameThead",3,""),w=Cp(t,"classNameTbody",3,""),k=Cp(t,"classNameSelect",3,""),x=Cp(t,"classNameInput",3,""),S=Cp(t,"classNameRow",3,null),E=Cp(t,"classNameCell",3,""),C=Cp(t,"classNameRowSelected",3,null),P=Cp(t,"classNameRowExpanded",3,null),L=Cp(t,"classNameExpandedContent",3,""),T=Cp(t,"classNameCellExpand",3,""),$=Cp(t,"clickCol",3,()=>{}),I=Cp(t,"clickRow",3,()=>{}),O=Cp(t,"clickExpand",3,()=>{}),A=Cp(t,"clickCell",3,()=>{}),M=Cd(()=>"")
if(!Array.isArray(o()))throw"'expanded' needs to be an array"
if(!Array.isArray(a()))throw"'selection' needs to be an array"
null!==l()&&console.warn("'expandRowKey' is deprecated in favour of 'rowKey'"),C()&&!c()&&console.error("'rowKey' is needed to use 'classNameRowSelected'")
let R=t.columns.some(e=>!e.hideFilterHeader&&(void 0!==e.filterOptions||void 0!==e.searchValue)),j=Cd(Od({}))
const F=_d(()=>Object.fromEntries(t.columns.map(e=>[e.key,e])))
let N=_d(()=>(m()?1:0)+t.columns.length)
const D=_d(()=>t.rows.filter(e=>Object.keys(s()).every(t=>{let n=null
if(void 0===Hf(F)[t])return!0
if(Hf(F)[t]?.searchValue){if(""===s()[t])return!0
1===Hf(F)[t].searchValue.length?n=(Hf(F)[t].searchValue(e)+"").toLocaleLowerCase().indexOf((s()[t]+"").toLocaleLowerCase())>=0:2===Hf(F)[t].searchValue.length&&(n=!!Hf(F)[t].searchValue(e,s()[t]+""))}else n=!1
return n||void 0===s()[t]||s()[t]===("function"==typeof Hf(F)[t].filterValue?Hf(F)[t].filterValue(e):Hf(F)[t].value(e))})).map(e=>Object.assign({},e,{$sortOn:Hf(M)(e),$expanded:null!==c()&&o().indexOf(e[c()])>=0,$selected:null!==c()&&a().indexOf(e[c()])>=0})).sort((e,t)=>r()?e.$sortOn>t.$sortOn?i():e.$sortOn<t.$sortOn?-i():0:0)),q=e=>[].concat(e).filter(e=>null!==e&&"string"==typeof e&&""!==e).join(" ")
Xd(()=>{let e=Hf(F)[r()]
void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&Ld(M,t=>e.value(t))}),Xd(()=>{R&&t.columns&&t.rows&&(Ld(j,{},!0),t.columns.forEach(e=>{"function"==typeof e.filterOptions?Hf(j)[e.key]=e.filterOptions(t.rows):Array.isArray(e.filterOptions)&&(Hf(j)[e.key]=e.filterOptions.map(e=>({name:e,value:e})))}))})
const B=(e,t)=>{t.sortable&&(i(t.key===r()?n()[(n().findIndex(e=>e===i())+1)%n().length]:n()[0]),r(i()?t.key:void 0)),$()({event:e,col:t,key:t.key})},H=(e,t)=>{f()&&(d()?a().includes(t[c()])?a([]):a([t[c()]]):a().includes(t[c()])?a(a().filter(e=>e!=t[c()])):a([...a(),t[c()]].sort())),I()({event:e,row:t})},U=(e,t)=>{t.$expanded=!t.$expanded
const n=t[c()]
u()&&t.$expanded?o([n]):u()?o([]):t.$expanded?o([...o(),n]):o(o().filter(e=>e!=n)),O()({event:e,row:t})},G=(e,t,n)=>{A()({event:e,row:t,key:n})}
var z=WE(),W=Hd(z),V=Hd(W),Q=e=>{var n=NE(),r=Hd(n)
xh(r,17,()=>t.columns,yh,(e,t)=>{var n=jE(),r=Hd(n),i=e=>{var n=AE()
nf(e=>{Gh(n,0,e,"svelte-18zqsmu"),Zh(n,"placeholder",Hf(t).filterPlaceholder)},[()=>qh(q(x()))]),np(n,()=>s()[Hf(t).key],e=>s(s()[Hf(t).key]=e,!0)),ch(e,n)},o=e=>{var n=lh(),r=Ud(n),i=e=>{var n=RE(),r=Hd(n),i=Hd(r)
r.value=(r.__value=void 0)??"",xh(Gd(r),17,()=>Hf(j)[Hf(t).key],yh,(e,t)=>{var n=ME(),r=Hd(n),i={}
nf(()=>{dh(r,Hf(t).name),i!==(i=Hf(t).value)&&(n.value=(n.__value=Hf(t).value)??"")}),ch(e,n)}),nf(e=>{Gh(n,0,e,"svelte-18zqsmu"),dh(i,Hf(t).filterPlaceholder||"")},[()=>qh(q(k()))]),Qh(n,()=>s()[Hf(t).key],e=>s(s()[Hf(t).key]=e,!0)),ch(e,n)}
mh(r,e=>{Hf(t).hideFilterHeader||void 0===Hf(j)[Hf(t).key]||e(i)},!0),ch(e,n)}
mh(r,e=>{Hf(t).hideFilterHeader||void 0===Hf(t).searchValue?e(o,!1):e(i)}),nf(e=>Gh(n,0,e,"svelte-18zqsmu"),[()=>qh(q([Hf(t).headerFilterClass]))]),ch(e,n)})
var i=Gd(r),o=e=>{ch(e,FE())}
mh(i,e=>{m()&&e(o)}),ch(e,n)}
mh(V,e=>{R&&e(Q)})
var J=Gd(V),K=e=>{var n=lh()
Lh(Ud(n),()=>t.svelteTableHeader,()=>({sortOrder:i(),sortBy:r()})),ch(e,n)},Y=e=>{var n=BE(),s=Hd(n)
xh(s,17,()=>t.columns,yh,(e,t)=>{var n=DE()
n.__click=e=>B(e,Hf(t))
var s=Hd(n),o=Gd(s),a=e=>{var t=lh()
Ph(Ud(t),()=>1===i()?h():p()),ch(e,t)},l=e=>{var n=lh(),r=Ud(n),i=e=>{var t=lh()
Ph(Ud(t),g),ch(e,t)}
mh(r,e=>{Hf(t).sortable&&e(i)},!0),ch(e,n)}
mh(o,e=>{r()===Hf(t).key?e(a):e(l,!1)}),nf(e=>{Gh(n,0,e,"svelte-18zqsmu"),dh(s,`${Hf(t).title??""} `)},[()=>qh(q([Hf(t).sortable?"isSortable":"",Hf(t).headerClass]))]),eh("keypress",n,e=>"Enter"===e.key&&B(e,Hf(t))),ch(e,n)})
var o=Gd(s),a=e=>{ch(e,qE())}
mh(o,e=>{m()&&e(a)}),ch(e,n)}
mh(J,e=>{t.svelteTableHeader?e(K):e(Y,!1)})
var X=Gd(W)
xh(X,21,()=>Hf(D),yh,(e,n,r)=>{var i=lh(),s=Ud(i),o=e=>{var i=lh()
Lh(Ud(i),()=>t.svelteTableRow,()=>({row:Hf(n),n:r})),ch(e,i)},a=e=>{var i=zE(),s=Ud(i)
s.__click=e=>H(e,Hf(n))
var o=Hd(s)
xh(o,17,()=>t.columns,yh,(e,t,i)=>{var s=HE()
s.__click=e=>G(e,Hf(n),Hf(t).key)
var o=Hd(s),a=e=>{const r=_d(()=>Hf(t).renderComponent.component||Hf(t).renderComponent)
var i=lh()
Th(Ud(i),()=>Hf(r),(e,r)=>{r(e,function(...e){return new Proxy({props:e},Ep)}(()=>Hf(t).renderComponent.props||{},{get row(){return Hf(n)},get col(){return Hf(t)}}))}),ch(e,i)},l=e=>{var s=lh(),o=Ud(s),a=e=>{var s=lh()
Ph(Ud(s),()=>Hf(t).renderValue?Hf(t).renderValue(Hf(n),r,i):Hf(t).value(Hf(n),r,i)),ch(e,s)},l=e=>{var s=ah()
nf(e=>dh(s,e),[()=>Hf(t).renderValue?Hf(t).renderValue(Hf(n),r,i):Hf(t).value(Hf(n),r,i)]),ch(e,s)}
mh(o,e=>{Hf(t).parseHTML?e(a):e(l,!1)},!0),ch(e,s)}
mh(o,e=>{Hf(t).renderComponent?e(a):e(l,!1)}),nf(e=>Gh(s,0,e,"svelte-18zqsmu"),[()=>qh(q(["string"==typeof Hf(t).class?Hf(t).class:null,"function"==typeof Hf(t).class?Hf(t).class(Hf(n),r,i):null,E()]))]),eh("keypress",s,e=>"Enter"===e.key&&G(e,Hf(n),Hf(t).key)),ch(e,s)})
var a=Gd(o),l=e=>{var t=UE(),r=Hd(t)
r.__click=e=>U(e,Hf(n)),Ph(Hd(r),()=>Hf(n).$expanded?v():_()),nf(e=>Gh(t,0,e,"svelte-18zqsmu"),[()=>qh(q(T()))]),eh("keypress",r,e=>"Enter"===e.key&&U(e,Hf(n))),ch(e,t)}
mh(a,e=>{m()&&e(l)})
var c=Gd(s,2),u=e=>{var i=GE(),s=Hd(i)
Lh(Hd(s),()=>t.svelteTableExpanded??tu,()=>({row:Hf(n),n:r})),nf(e=>{Gh(i,0,e,"svelte-18zqsmu"),Zh(s,"colspan",Hf(N))},[()=>qh(q(L()))]),ch(e,i)}
mh(c,e=>{Hf(n).$expanded&&e(u)}),nf(e=>{Gh(s,0,e,"svelte-18zqsmu"),Zh(s,"tabindex",f()?"0":null)},[()=>qh(q(["string"==typeof S()?S():null,"function"==typeof S()?S()(Hf(n),r):null,Hf(n).$expanded&&P(),Hf(n).$selected&&C()]))]),eh("keypress",s,e=>"Enter"===e.key&&H(e,Hf(n))),ch(e,i)}
mh(s,e=>{t.svelteTableRow?e(o):e(a,!1)}),ch(e,i)}),nf((e,t,n)=>{Gh(z,0,e,"svelte-18zqsmu"),Gh(W,0,t,"svelte-18zqsmu"),Gh(X,0,n,"svelte-18zqsmu")},[()=>qh(q(b())),()=>qh(q(y())),()=>qh(q(w()))]),ch(e,z),Bu()}function QE(e){return new Intl.NumberFormat("en-us").format(e)}th(["click"])
var JE=oh('<div class="content svelte-1u8rhii"><!></div>')
function KE(e,t){qu(t,!0)
let n=Cp(t,"visible",15,!0)
const r=[{key:"slot",title:"Slot",value:e=>e.slot,sortable:!0},{key:"name",title:"Name",value:e=>e.name,sortable:!0,renderValue:e=>OE(e.id,e.name),parseHTML:!0},{key:"level",title:"Level",value:e=>e.level,sortable:!0},{key:"rank",title:"Rank",value:e=>e.rank,sortable:!0},{key:"guild_xp",title:"GXP",value:e=>e.guild_xp,sortable:!0,renderValue:e=>QE(e.guild_xp)},{key:"activity",title:"Activity",value:e=>e.activity,sortable:!0},{key:"pack",title:"Pack",value:e=>e.pack,sortable:!0},{key:"max_stamina",title:"Stam",value:e=>e.max_stamina,sortable:!0,renderValue:e=>Gw(e.max_stamina)?"":QE(e.max_stamina)}]
let i=Cd(Od([]))
const s=({equipped:e})=>!e,o=({player:{id:e}})=>e,a=e=>e.members
function l([e,t]){const n=e.r.filter(s).map(o),r=ym(d_(n).map(e=>[e,n.filter(t=>t===e).length])),i=(e=>e.r.flatMap(a))(t)
return i.map((l=r,(e,t)=>({...e,slot:t+1,activity:lm(e.last_activity),pack:l[e.id]??0})))
var l}const c=_d(()=>{if(n())return async function(){const[e,t]=await kw([$S(),b_()])
if(e?.s&&t?.s){const n=l([e,t])
Ld(i,n,!0)}}()})
{const t=e=>{ch(e,ah("Who's Got What"))}
nx(e,{close:function(){vg("Whos Got What","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=JE()
_h(Hd(n),()=>Hf(c),e=>{ch(e,ah("Loading..."))},e=>{VE(e,{classNameTable:"whos-got-what",get columns(){return r},get rows(){return Hf(i)}})},(e,t)=>{var n=ah()
nf(()=>dh(n,Hf(t))),ch(e,n)}),ch(e,n)},$$slots:{title:!0,default:!0}})}Bu()}const YE=Od({visible:!0})
let XE=0
var ZE=Object.freeze({__proto__:null,default:function(){XE?YE.visible=!0:XE=fh(KE,{props:YE,target:document.body})}})
const eC=()=>{Og(import("./inventory-CmxChHsN.js"))},tC=()=>{Og(import("./bazaar-3jf7A2RI.js"))}
function nC(){Og(import("./injectQuestBookFull-BAe1mgLK.js"))}const rC=()=>{Og(import("./scavenging-DWG2nvyg.js"))}
const iC=()=>{Og(import("./toprated-D1TmlFWz.js"))}
const sC=()=>{Og(import("./trade-C4_0GaD5.js"))}
var oC={crates:{"-":{"-":()=>{Og(import("./crates-DqGrl8v9.js"))}}},creatures:{"-":{"-":Vk}},items:Qk,masterrealms:{"-":{"-":Vk}},quests:{"-":{"-":Vk},view:{"-":()=>{Og(import("./showAllQuestSteps-XXjC9UGX.js"))}}},realms:{"-":{"-":Vk}},relics:{"-":{"-":Vk}},shops:{"-":{"-":Vk}},"-":Zk,arena:Rk,auctionhouse:jk,bank:{"-":{"-":()=>{Og(import("./injectBank-per20mIz.js"))}}},blacksmith:{repairall:{"-":function(){Hc("fromworld")&&Mk()}}},buffmarket:{"-":{"-":()=>{Og(import("./injectBuffmarket-E3JEDLt6.js"))}},add:{"-":()=>{Og(import("./injectBigBuffPacakges-f2ariyw3.js"))}},manage:{"-":()=>{Og(import("./injectManage-CDG5bGXf.js"))}}},combat:{attackplayer:{"-":Jk}},composing:Fk,findplayer:{"-":{"-":()=>{Og(import("./findplayer-Yq395tst.js"))}}},guild:Gk,hellforge:{"-":{"-":()=>{Og(import("./hellforge-Dw6fW-Pi.js"))}}},inventing:Wk,log:{"-":{"-":()=>{Og(import("./playerLog-B3Iwwu1B.js"))}}},marketplace:{createreq:{"-":()=>{Og(import("./marketplace-BMYSgp6S.js"))}}},news:Xk,notepad:{showlogs:{"-":Mg},invmanagernew:{"-":eC},guildinvmgr:{"-":eC},recipemanager:{"-":Wg},auctionsearch:{"-":Dg},onlineplayers:{"-":Hg},quicklinkmanager:{"-":Gg},monsterlog:{"-":Rg},quickextract:{"-":Ug},quickwear:{"-":zg},fsboxcontent:{"-":jg},bufflogcontent:{"-":Ag},newguildlog:{"-":Fg},findbuffs:{"-":qg},findother:{"-":Bg},savesettings:{"-":()=>{Og(import("./load-BJp4_AIO.js"))}},reliclist:{"-":Vg},"-":{"-":function(){}}},points:{"-":{"-":()=>{Og(import("./points-DD1Odedx.js"))}},xmas:{"-":()=>{Og(import("./xmas-wwKUz3aV.js"))}}},potionbazaar:{"-":{"-":tC},buyitem:{"-":tC}},privatemessage:{"-":{"-":()=>{Og(import("./privateMsg-Cd2IyAQH.js"))}}},profile:{"-":{"-":Jk},managecombatset:{"-":Jk},report:{"-":Jk},equipitem:{"-":Jk},useitem:{"-":Jk},changebio:{"-":Nk},dropitems:{"-":function(){Og(import("./injectProfileDropItems-DJF52vYr.js"))}}},pvpladder:{"-":{"-":()=>{Og(import("./ladder-Bdh7gIIe.js"))}}},questbook:{"-":{"-":nC},atoz:{"-":nC},viewquest:{"-":()=>{Og(import("./injectQuestTracker-CLXrKpIE.js"))}}},quickbuff:{"-":{"-":()=>{Og(import("./quickBuff-tqQzNj9q.js"))}}},scavenging:{"-":{"-":rC},process:{"-":rC}},settings:{"-":{"-":()=>{Og(import("./injectSettings-Ceu9Iill.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{Og(import("./superelite-DZzEvIdu.js"))}}},tempinv:{"-":{"-":()=>{Og(import("./mailbox-Zi3T0n9O.js"))}}},temple:{"-":{"-":qw}},titan:{"-":{"-":()=>{Og(import("./injectTitan-BObi25nx.js"))}}},toprated:{xp:{"-":iC},monthlyxp:{"-":iC},gold:{"-":iC},killstreak:{"-":iC},bounties:{"-":iC},risingstars:{"-":iC},arena:{"-":iC},superelites:{"-":iC},smasher:{"-":iC},globalquest:{"-":()=>{Og(import("./globalQuest-DKliQ0-5.js"))}}},trade:{"-":{"-":sC},sendgold:{"-":sC},createsecure:{"-":sC},docreatesecure:{"-":sC}},world:{"-":{"-":Mk}}}
function aC(e){return xg("ul",e)}const lC=e=>"newWindow"in e&&e.url&&e.name
function cC(e,t){const n=Pg(t,aC())
e.filter(lC).forEach(e=>{Pg(Pg(n,xm()),function(e){const t=km({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return Jv(t,()=>vg("chrome","quick link",e.name)),t}(e))})}function uC(e){const t=Sg({className:"fshQuickLinks",style:{left:`${Xl("quickLinksLeftPx")}px`,top:`${Xl("quickLinksTopPx")}px`}})
t.classList.toggle("fshFixed",Xl("keepHelperMenuOnScreen")),Xl("draggableQuickLinks")&&(t.classList.add("fshMove"),hg(t)),cC(e,t),Pg(document.body,t)}function dC(){if(!lc(".mainbody"))return
const e=tb("quickLinks")||[]
e.length&&uC(e)}let fC=0,hC=0,pC=0,gC="",vC=0,_C=0
function mC(e){return Hc(e)||"-"}function bC(e){const t=lc(e)
return t?.value||"-"}function yC(){if(oc(oC[fC])&&oc(oC[fC][hC])&&sc(oC[fC][hC][pC]))return oC[fC][hC][pC]}function wC(){""!==document.location.search?(fC=mC("cmd"),hC=mC("subcmd"),pC=mC("subcmd2"),["points","privatemessage"].includes(fC)&&(gC=`/${mC("type")}`)):(fC=bC('input[name="cmd"]'),hC=bC('input[name="subcmd"]'),pC=bC('input[name="subcmd2"]')),Ec.cmd=fC,Ec.subcmd=hC,Ec.subcmd2=pC,_C=`${fC}/${hC}/${pC}${gC}`,vC=yC()}function kC(){sc(vC)&&(ic(_C),vC())}async function xC(e){wC(),await e,Ak(),qc(3,kC),Xl("playNewMessageSound")&&qc(3,Zp),i_()||qc(3,dC)}const SC=[()=>!RegExp.escape,()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function EC(e,t){if(SC.some(e=>e()))return
const n=cc("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
bc(),function(e,t){Ec.gmInfo=ac(decodeURIComponent(t)),Ec.gmInfo?Ec.fshVer=e:Ec.fshVer=`${e}_native`,Ec.calfVer="161"}(e,t),o(),Do(),xC(n)}export{_v as $,hp as A,Py as B,oh as C,Gd as D,Ud as E,Hd as F,xh as G,mh as H,np as I,Ld as J,Hf as K,Pd as L,Ty as M,ch as N,Bu as O,eh as P,nf as Q,dh as R,Lv as S,Zh as T,zf as U,ip as V,pv as W,t_ as X,Pl as Y,Ul as Z,km as _,xv as a,Oa as a$,Wa as a0,kw as a1,sm as a2,Ym as a3,wm as a4,Hp as a5,Sm as a6,eg as a7,l_ as a8,ua as a9,Xl as aA,Cg as aB,bg as aC,Da as aD,jy as aE,_h as aF,lh as aG,Zl as aH,sp as aI,Yo as aJ,Jo as aK,Yb as aL,Cl as aM,QE as aN,by as aO,ia as aP,wa as aQ,Jm as aR,Qw as aS,Gp as aT,Jb as aU,Wb as aV,nb as aW,Iv as aX,Ub as aY,Uw as aZ,Ia as a_,aC as aa,yg as ab,Hb as ac,Cc as ad,hv as ae,yv as af,mv as ag,zl as ah,Wl as ai,Kv as aj,Cd as ak,Od as al,tb as am,Qh as an,Um as ao,th as ap,Ry as aq,Hc as ar,Ay as as,Mg as at,Rg as au,rc as av,Gw as aw,jm as ax,Ec as ay,xc as az,kc as b,Ov as b$,Bc as b0,Ya as b1,Pa as b2,eS as b3,Hl as b4,Xb as b5,Bp as b6,Em as b7,s as b8,Fo as b9,Up as bA,sc as bB,ra as bC,rl as bD,d_ as bE,Bf as bF,Gh as bG,Q_ as bH,J_ as bI,bw as bJ,wy as bK,la as bL,fl as bM,vl as bN,yh as bO,jx as bP,ah as bQ,aa as bR,Qb as bS,Ja as bT,mp as bU,_p as bV,am as bW,_a as bX,Ew as bY,Pc as bZ,Gl as b_,dk as ba,nl as bb,ka as bc,Gx as bd,bl as be,il as bf,sl as bg,ul as bh,ol as bi,Mw as bj,Wx as bk,za as bl,Bv as bm,sa as bn,pl as bo,fv as bp,ac as bq,qc as br,my as bs,Eg as bt,Al as bu,Ol as bv,Rl as bw,Ml as bx,jl as by,qp as bz,Wp as c,A_ as c$,Zo as c0,ta as c1,Ta as c2,Lp as c3,Sp as c4,kp as c5,gl as c6,gh as c7,cl as c8,ml as c9,Jw as cA,Sc as cB,Ka as cC,bv as cD,fw as cE,$x as cF,kl as cG,Qv as cH,Ix as cI,xl as cJ,ca as cK,uw as cL,Fa as cM,Tl as cN,yy as cO,Il as cP,Sl as cQ,ba as cR,Gb as cS,va as cT,uk as cU,Km as cV,Ko as cW,om as cX,a as cY,Bx as cZ,qx as c_,yl as ca,wl as cb,Cv as cc,Ev as cd,Pv as ce,al as cf,ll as cg,_l as ch,Qo as ci,hl as cj,Bb as ck,n_ as cl,rb as cm,kv as cn,Xo as co,_d as cp,Av as cq,qh as cr,ql as cs,Rv as ct,eE as cu,oc as cv,Jl as cw,Ll as cx,Bl as cy,Aa as cz,Lg as d,Th as d$,K_ as d0,yw as d1,e as d2,cc as d3,Og as d4,nE as d5,Nh as d6,bh as d7,su as d8,OE as d9,Hm as dA,pa as dB,ga as dC,im as dD,em as dE,X_ as dF,El as dG,mm as dH,Ng as dI,bm as dJ,Ba as dK,xm as dL,ma as dM,xw as dN,zb as dO,ha as dP,Dk as dQ,fp as dR,jh as dS,Rp as dT,Xa as dU,Za as dV,nx as dW,Xh as dX,ec as dY,o_ as dZ,La as d_,Vv as da,Nx as db,ju as dc,Ea as dd,na as de,Fl as df,c_ as dg,$l as dh,ic as di,Kk as dj,nC as dk,zk as dl,$S as dm,PS as dn,cx as dp,AS as dq,oa as dr,LS as ds,ZS as dt,gv as du,Nl as dv,Wh as dw,ya as dx,Va as dy,da as dz,wv as e,Pp as e0,Xd as e1,up as e2,Lh as e3,Ra as e4,Ox as e5,tl as e6,Ha as e7,Kb as e8,s_ as e9,lx as ea,tm as eb,Ux as ec,Y_ as ed,Z_ as ee,nm as ef,rm as eg,Cx as eh,Dv as ei,Sa as ej,ja as ek,Of as el,Ed as em,$d as en,Ug as eo,bp as ep,Ig as eq,zg as er,$a as es,EC as et,ym as f,t as g,Yv as h,Pg as i,y_ as j,a_ as k,By as l,n as m,Dp as n,Jv as o,Yp as p,lc as q,l as r,vg as s,fh as t,xg as u,Sg as v,Qc as w,Yd as x,qu as y,Cp as z}
//# sourceMappingURL=calfSystem-Cs6CSxoU.js.map
