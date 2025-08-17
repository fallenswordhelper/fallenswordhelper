import{$ as e,a as t,h as a,o as r,j as n,k as s,l as u,m as c,n as o,p as f,M as i,t as d,u as g}from"./calfSystem-CT1aM4VG.js"
import{b as l}from"./buffmarket-Din7nnVi.js"
import{c as m}from"./closestTd-CiNplHBS.js"
function p(e){return l({subcmd:"toggle",id:e})}function b(e){return t({cmd:"buffmarket",subcmd:"toggle",id:e},"Buff Package toggled!")}function k(t){return e(p,b,t)}function h(e){return l({subcmd:"feature",id:e})}function v(e){return t({cmd:"buffmarket",subcmd:"feature",id:e},"Buff Package featured for 24 hours!")}function y(t){return e(h,v,t)}function B(e){return l({subcmd:"delete",id:e})}function E(e){return t({cmd:"buffmarket",subcmd:"delete",id:e},"Buff Package deleted!")}function C(t){return e(B,E,t)}const P=e=>e.getAttribute("onclick").match(/id=(\d+)/)[1]
function S(e,t){const a=P(e)
e.setAttribute("onclick",""),e.setAttribute("data-packageId",a),r(e,t)}async function w(e,t){const a=e.target.getAttribute("data-packageId"),r=function(){const e=d("td"),t=g({className:"fshBuffmarketSpinner"})
return e.append(t),e}(),n=m(e.target)
n.replaceWith(r)
const s=await t(a)
return r.replaceWith(n),s}async function A(e){const t=await w(e,k)
if(!0===t?.s){const t=n(e.target).children[3]
s("Yes"===u(t)?"No":"Yes",t),c("Buff Package toggled!")}else c(t?.e?.message??"Server Error")}function j(e){o(i,{target:f(),props:{msg:"Are you sure you want to delete this package?",visible:!0,resolve:async t=>{if(!t)return
const a=await w(e,C)
if(!0===a?.s){const t=n(e.target)
t.nextElementSibling.remove(),t.remove(),c("Buff Package deleted!")}else c(a?.e?.message??"Server Error")}}})}async function Y(e){const t=await w(e,y)
!0===t?.s?(s("Yes",n(e.target).children[4]),c("Buff Package featured for 24 hours!")):c(t?.e?.message??"Server Error")}function x(){a("#pCC input[value=Toggle]").forEach((e=>S(e,A))),a("#pCC input[value=Delete]").forEach((e=>S(e,j))),a("#pCC input[value=Feature]").forEach((e=>S(e,Y)))}export{x as default}
//# sourceMappingURL=injectManage-DUBRlR0O.js.map
