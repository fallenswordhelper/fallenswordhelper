import{c as s}from"./createSpan-0636b0fd.js"
import{z as n,j as t,i as a,o,h as e,b as f,C as i,al as c,T as l,X as r,bX as b,M as m}from"./calfSystem-f7cf24f6.js"
import{g as h,s as x}from"./idb-62b65e66.js"
function p(s){let t=function(s){return s||""}(s)
const a=m("message",n("minibox-fsbox"))[0].innerHTML
t.indexOf(a)<0&&(t=`<br>${a}${t}`),t.length>1e4&&(t=t.substring(0,1e4)),x("fsh_fsboxcontent",t)}function u(){l("injectFSBoxLog","injectFsBoxContent"),r(b)}function g(n){const t=n.lastElementChild
a(t,"<br>"),function(s){let n=f("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=i(n[0]),a(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(t)
const l=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
o(l,u),e(t,l)}function d(){const s=n("minibox-fsbox")
t()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-d0a7caec.js.map
