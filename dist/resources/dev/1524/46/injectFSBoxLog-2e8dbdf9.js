import{c as s}from"./createSpan-6440fa04.js"
import{z as n,j as a,i as t,o,h as e,b as f,C as i,am as c,T as r,X as l,bZ as m,M as b}from"./calfSystem-d3f0a380.js"
import{g as h,s as x}from"./idb-13440348.js"
function p(s){let a=function(s){return s||""}(s)
const t=b("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(t)<0&&(a=`<br>${t}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(m)}function g(n){const a=n.lastElementChild
t(a,"<br>"),function(s){let n=f("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=i(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
o(r,u),e(a,r)}function d(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-2e8dbdf9.js.map
