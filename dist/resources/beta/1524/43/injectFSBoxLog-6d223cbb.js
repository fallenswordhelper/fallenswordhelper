import{c as s}from"./createSpan-256b26cd.js"
import{z as n,j as a,i as t,o,h as e,b as i,C as f,aj as c,T as r,X as l,bW as b,M as m}from"./calfSystem-1d588248.js"
import{g as h,s as x}from"./idb-dfc3696a.js"
function p(s){let a=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(t)<0&&(a=`<br>${t}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function d(n){const a=n.lastElementChild
t(a,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=f(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
o(r,u),e(a,r)}function g(){const s=n("minibox-fsbox")
a()&&s&&d(s)}export default g
//# sourceMappingURL=injectFSBoxLog-6d223cbb.js.map
