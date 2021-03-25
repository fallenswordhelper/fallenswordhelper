import{c as s}from"./createSpan-2b0536e4.js"
import{z as n,j as a,i as t,o as e,h as o,b as i,C as f,bc as c,W as r,X as l,bT as b,K as m}from"./calfSystem-60c20ae9.js"
import{g as h,s as x}from"./idb-a07bf138.js"
function p(s){let a=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(t)<0&&(a=`<br>${t}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const a=n.lastElementChild
t(a,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=f(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
e(r,u),o(a,r)}function j(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default j
//# sourceMappingURL=injectFSBoxLog-55f7a6a3.js.map
