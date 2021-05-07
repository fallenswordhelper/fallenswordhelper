import{c as s}from"./createSpan-95e4d2e5.js"
import{z as n,j as e,i as t,o as a,h as o,b as i,C as c,ak as f,U as r,Y as l,bX as b,M as m}from"./calfSystem-3cb2f93e.js"
import{g as h,s as x}from"./idb-c9ce87e3.js"
function p(s){let e=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
e.indexOf(t)<0&&(e=`<br>${t}${e}`),e.length>1e4&&(e=e.substring(0,1e4)),x("fsh_fsboxcontent",e)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const e=n.lastElementChild
t(e,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=c(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${f}${n}">Ignore</a> ]</span> `))}(e)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
a(r,u),o(e,r)}function d(){const s=n("minibox-fsbox")
e()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-3964e50c.js.map
