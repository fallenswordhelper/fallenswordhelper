import{c as s}from"./createSpan-14225166.js"
import{z as n,j as a,i as t,o,h as e,b as f,C as i,al as c,S as l,W as r,bY as b,M as m}from"./calfSystem-cbf77dd7.js"
import{g as h,s as x}from"./idb-82a91df1.js"
function p(s){let a=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(t)<0&&(a=`<br>${t}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){l("injectFSBoxLog","injectFsBoxContent"),r(b)}function d(n){const a=n.lastElementChild
t(a,"<br>"),function(s){let n=f("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=i(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const l=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
o(l,u),e(a,l)}function g(){const s=n("minibox-fsbox")
a()&&s&&d(s)}export default g
//# sourceMappingURL=injectFSBoxLog-7bbd5a4a.js.map
