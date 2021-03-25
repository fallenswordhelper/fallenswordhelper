import{c as s}from"./createSpan-47082f19.js"
import{z as n,j as a,i as e,o as t,h as o,b as i,C as f,bc as c,W as r,X as l,bT as b,K as m}from"./calfSystem-e7bde0c3.js"
import{g as h,s as x}from"./idb-47978eaa.js"
function p(s){let a=function(s){return s||""}(s)
const e=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(e)<0&&(a=`<br>${e}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const a=n.lastElementChild
e(a,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=f(n[0]),e(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
t(r,u),o(a,r)}function d(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-32640b4b.js.map
