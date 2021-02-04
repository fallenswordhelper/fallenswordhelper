import{c as s}from"./createSpan-3083d966.js"
import{y as n,j as t,i as a,o,h as e,b as i,B as f,bb as c,V as b,W as r,bR as l,J as m}from"./calfSystem-0708a9bb.js"
import{g as h,s as x}from"./idb-9ebd251c.js"
function p(s){let t=function(s){return s||""}(s)
const a=m("message",n("minibox-fsbox"))[0].innerHTML
t.indexOf(a)<0&&(t=`<br>${a}${t}`),t.length>1e4&&(t=t.substring(0,1e4)),x("fsh_fsboxcontent",t)}function u(){b("injectFSBoxLog","injectFsBoxContent"),r(l)}function g(n){const t=n.lastElementChild
a(t,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=f(n[0]),a(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(t)
const b=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
o(b,u),e(t,b)}function d(){const s=n("minibox-fsbox")
t()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-bb2e144b.js.map
