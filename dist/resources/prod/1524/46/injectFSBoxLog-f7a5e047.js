import{c as s}from"./createSpan-462a14d2.js"
import{z as n,j as a,i as t,o,h as e,b as i,C as f,al as c,S as l,W as r,bV as b,M as m}from"./calfSystem-7991d843.js"
import{g as h,s as x}from"./idb-89606f1a.js"
function p(s){let a=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(t)<0&&(a=`<br>${t}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){l("injectFSBoxLog","injectFsBoxContent"),r(b)}function g(n){const a=n.lastElementChild
t(a,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=f(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const l=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
o(l,u),e(a,l)}function d(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-f7a5e047.js.map
