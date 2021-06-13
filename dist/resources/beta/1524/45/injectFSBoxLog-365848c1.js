import{c as s}from"./createSpan-88103101.js"
import{z as n,j as a,i as e,o as t,h as o,b as i,C as f,al as c,S as l,W as r,bY as b,M as m}from"./calfSystem-ae2e69af.js"
import{g as h,s as x}from"./idb-225659e6.js"
function p(s){let a=function(s){return s||""}(s)
const e=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(e)<0&&(a=`<br>${e}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){l("injectFSBoxLog","injectFsBoxContent"),r(b)}function g(n){const a=n.lastElementChild
e(a,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=f(n[0]),e(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const l=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
t(l,u),o(a,l)}function j(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default j
//# sourceMappingURL=injectFSBoxLog-365848c1.js.map
