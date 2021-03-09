import{c as s}from"./createSpan-2b6fe10e.js"
import{y as n,j as e,i as t,o as a,h as o,b as i,B as f,bb as c,V as r,W as l,bR as b,J as m}from"./calfSystem-793da633.js"
import{g as h,s as x}from"./idb-e7344221.js"
function p(s){let e=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
e.indexOf(t)<0&&(e=`<br>${t}${e}`),e.length>1e4&&(e=e.substring(0,1e4)),x("fsh_fsboxcontent",e)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const e=n.lastElementChild
t(e,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=f(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(e)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
a(r,u),o(e,r)}function d(){const s=n("minibox-fsbox")
e()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-21d53a39.js.map
