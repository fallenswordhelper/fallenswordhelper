import{c as s}from"./createSpan-b6d1f34b.js"
import{z as n,j as e,i as t,o as a,h as o,b as f,C as i,al as c,S as l,W as r,bV as b,M as m}from"./calfSystem-e1e858cd.js"
import{g as h,s as x}from"./idb-ef443609.js"
function p(s){let e=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
e.indexOf(t)<0&&(e=`<br>${t}${e}`),e.length>1e4&&(e=e.substring(0,1e4)),x("fsh_fsboxcontent",e)}function u(){l("injectFSBoxLog","injectFsBoxContent"),r(b)}function g(n){const e=n.lastElementChild
t(e,"<br>"),function(s){let n=f("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=i(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(e)
const l=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
a(l,u),o(e,l)}function d(){const s=n("minibox-fsbox")
e()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-da48c8e3.js.map
