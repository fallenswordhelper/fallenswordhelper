import{$ as e,a as t,k as a,o as r,l as n,m as s,n as u,t as c,u as o,p as f,M as i,v as d,w as g}from"./calfSystem-BlPuMQGT.js"
import{b as l}from"./buffmarket-Bm4aoT1r.js"
import{c as m}from"./closestTd-BxsEDZOn.js"
function p(e){return l({subcmd:"toggle",id:e})}function k(e){return t({cmd:"buffmarket",subcmd:"toggle",id:e},"Buff Package toggled!")}function b(t){return e(p,k,t)}function h(e){return l({subcmd:"feature",id:e})}function v(e){return t({cmd:"buffmarket",subcmd:"feature",id:e},"Buff Package featured for 24 hours!")}function y(t){return e(h,v,t)}function B(e){return l({subcmd:"delete",id:e})}function E(e){return t({cmd:"buffmarket",subcmd:"delete",id:e},"Buff Package deleted!")}function w(t){return e(B,E,t)}const C=e=>e.getAttribute("onclick").match(/id=(\d+)/)[1]
function P(e,t){const a=C(e)
e.setAttribute("onclick",""),e.setAttribute("data-packageId",a),r(e,t)}async function S(e,t){const a=e.target.getAttribute("data-packageId"),r=function(){const e=d("td"),t=g({className:"fshBuffmarketSpinner"})
return e.append(t),e}(),n=m(e.target)
n.replaceWith(r)
const s=await t(a)
return r.replaceWith(n),s}async function A(e){const t=await S(e,b)
if(!0===t?.s){const t=n(e.target).children[3]
s("Yes"===u(t)?"No":"Yes",t),c("Buff Package toggled!")}else c(t?.e?.message??"Server Error")}function j(e){o(i,{target:f(),props:{msg:"Are you sure you want to delete this package?",visible:!0,resolve:async t=>{if(!t)return
const a=await S(e,w)
if(!0===a?.s){const t=n(e.target)
t.nextElementSibling.remove(),t.remove(),c("Buff Package deleted!")}else c(a?.e?.message??"Server Error")}}})}async function Y(e){const t=await S(e,y)
!0===t?.s?(s("Yes",n(e.target).children[4]),c("Buff Package featured for 24 hours!")):c(t?.e?.message??"Server Error")}function x(){a("#pCC input[value=Toggle]").forEach((e=>P(e,A))),a("#pCC input[value=Delete]").forEach((e=>P(e,j))),a("#pCC input[value=Feature]").forEach((e=>P(e,Y)))}export{x as default}
//# sourceMappingURL=injectManage-BAfkr7ew.js.map
