import{c as s}from"./createSpan-79ff8b4f.js"
import{z as n,j as t,i as a,o,h as e,b as f,C as i,ak as c,X as r,Y as l,bW as b,K as m}from"./calfSystem-c464cb1d.js"
import{g as h,s as x}from"./idb-870991e0.js"
function p(s){let t=function(s){return s||""}(s)
const a=m("message",n("minibox-fsbox"))[0].innerHTML
t.indexOf(a)<0&&(t=`<br>${a}${t}`),t.length>1e4&&(t=t.substring(0,1e4)),x("fsh_fsboxcontent",t)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const t=n.lastElementChild
a(t,"<br>"),function(s){let n=f("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=i(n[0]),a(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(t)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
o(r,u),e(t,r)}function d(){const s=n("minibox-fsbox")
t()&&s&&g(s)}export default d
//# sourceMappingURL=injectFSBoxLog-9ee89f7b.js.map