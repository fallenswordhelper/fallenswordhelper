import{c as s}from"./createSpan-6854a1c4.js"
import{z as n,j as a,i as t,o,h as e,b as c,C as i,bf as f,X as r,Y as l,bX as b,K as m}from"./calfSystem-5d0c721b.js"
import{g as h,s as x}from"./idb-a2aaccdb.js"
function p(s){let a=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(t)<0&&(a=`<br>${t}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const a=n.lastElementChild
t(a,"<br>"),function(s){let n=c("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=i(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${f}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
o(r,u),e(a,r)}function d(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-8549b968.js.map
