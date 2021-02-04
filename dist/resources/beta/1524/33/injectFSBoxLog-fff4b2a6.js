import{c as s}from"./createSpan-1ad5cfdb.js"
import{y as n,j as a,i as t,o,h as e,b as f,B as i,bd as c,V as r,W as l,bU as b,J as m}from"./calfSystem-c91a5c89.js"
import{g as h,s as x}from"./idb-ba7ef5fa.js"
function p(s){let a=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(t)<0&&(a=`<br>${t}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function d(n){const a=n.lastElementChild
t(a,"<br>"),function(s){let n=f("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=i(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
o(r,u),e(a,r)}function g(){const s=n("minibox-fsbox")
a()&&s&&d(s)}export default g
//# sourceMappingURL=injectFSBoxLog-fff4b2a6.js.map
