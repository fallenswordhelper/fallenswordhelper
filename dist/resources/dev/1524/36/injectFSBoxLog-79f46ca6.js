import{c as s}from"./createSpan-c8cd4d0e.js"
import{z as n,j as e,i as t,o,h as a,b as i,C as f,bf as c,X as r,Y as l,bX as b,K as m}from"./calfSystem-eeb1d862.js"
import{g as h,s as x}from"./idb-874d144e.js"
function d(s){let e=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
e.indexOf(t)<0&&(e=`<br>${t}${e}`),e.length>1e4&&(e=e.substring(0,1e4)),x("fsh_fsboxcontent",e)}function p(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function u(n){const e=n.lastElementChild
t(e,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(d),n=f(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(e)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
o(r,p),a(e,r)}function g(){const s=n("minibox-fsbox")
e()&&s&&u(s)}export default g
//# sourceMappingURL=injectFSBoxLog-79f46ca6.js.map
