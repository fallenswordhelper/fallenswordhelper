import{c as s}from"./createSpan-e4b93b95.js"
import{z as n,j as a,i as e,o as t,h as o,b as i,C as f,be as c,W as b,X as r,bW as l,K as m}from"./calfSystem-cb2a6f39.js"
import{g as h,s as x}from"./idb-b27e17a7.js"
function p(s){let a=function(s){return s||""}(s)
const e=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(e)<0&&(a=`<br>${e}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){b("injectFSBoxLog","injectFsBoxContent"),r(l)}function g(n){const a=n.lastElementChild
e(a,"<br>"),function(s){let n=i("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=f(n[0]),e(s,`<span class="fshPaleVioletRed">[ <a href="${c}${n}">Ignore</a> ]</span> `))}(a)
const b=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
t(b,u),o(a,b)}function j(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default j
//# sourceMappingURL=injectFSBoxLog-02418540.js.map
