import{$ as e,a as t,h as a,o as r,j as n,k as s,l as u,m as c,n as o,p as f,M as i,t as d,u as g}from"./calfSystem-79LsojAC.js"
import{b as l}from"./buffmarket-D-uaB_9I.js"
import{c as m}from"./closestTd-Cb8gpQCm.js"
function p(e){return l({subcmd:"toggle",id:e})}function b(e){return t({cmd:"buffmarket",subcmd:"toggle",id:e},"Buff Package toggled!")}function k(t){return e(p,b,t)}function h(e){return l({subcmd:"feature",id:e})}function v(e){return t({cmd:"buffmarket",subcmd:"feature",id:e},"Buff Package featured for 24 hours!")}function y(t){return e(h,v,t)}function B(e){return l({subcmd:"delete",id:e})}function E(e){return t({cmd:"buffmarket",subcmd:"delete",id:e},"Buff Package deleted!")}function C(t){return e(B,E,t)}function P(e,t){const a=e.getAttribute("onclick").match(/id=(\d+)/)[1]
e.setAttribute("onclick",""),e.setAttribute("data-packageId",a),r(e,t)}async function S(e,t){const a=e.target.getAttribute("data-packageId"),r=function(){const e=d("td"),t=g({className:"fshBuffmarketSpinner"})
return e.append(t),e}(),n=m(e.target)
n.replaceWith(r)
const s=await t(a)
return r.replaceWith(n),s}async function w(e){const t=await S(e,k)
if(!0===t?.s){const t=n(e.target).children[3]
s("Yes"===u(t)?"No":"Yes",t),c("Buff Package toggled!")}else c(t?.e?.message??"Server Error")}function A(e){o(i,{target:f(),props:{msg:"Are you sure you want to delete this package?",visible:!0,resolve:async t=>{if(!t)return
const a=await S(e,C)
if(!0===a?.s){const t=n(e.target)
t.nextElementSibling.remove(),t.remove(),c("Buff Package deleted!")}else c(a?.e?.message??"Server Error")}}})}async function j(e){const t=await S(e,y)
!0===t?.s?(s("Yes",n(e.target).children[4]),c("Buff Package featured for 24 hours!")):c(t?.e?.message??"Server Error")}function Y(){a("#pCC input[value=Toggle]").forEach(e=>P(e,w)),a("#pCC input[value=Delete]").forEach(e=>P(e,A)),a("#pCC input[value=Feature]").forEach(e=>P(e,j))}export{Y as default}
//# sourceMappingURL=injectManage-DgbEExXh.js.map
