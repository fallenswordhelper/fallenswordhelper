import{bB as n,d as t,bA as e,$ as s,g as i,l as o,i as r,o as a,n as c,x as f,r as u,s as l}from"./calfSystem-4830a18d.js"
import{c as m}from"./createButton-30c5ecee.js"
import{i as d}from"./insertTextBeforeEnd-1af4f779.js"
function p(t){return n({subcmd:"unequipitem",inventory_id:t})}async function b(n){return function(n){const t=e(n)
return t?{e:{message:t},s:!1}:{s:!0}}(await t({cmd:"profile",subcmd:"unequipitem",inventory_id:n}))}let h=0
async function x(n){const t=u(/inventory_id=(?<id>\d+)/,n.href)
if(t){const e=await function(n){return s(p,b,n)}(t)
!function(n,t){t?.s&&l("",n.parentNode)}(n,e)}}function y(){c("profile","nekidBtn")
const n=h.nextElementSibling
f("a",n).forEach(x)}function B(){if(h=i("profileCombatSetDiv"),!h)return
const n=h.parentNode.nextElementSibling
if(!n)return
const t=function(){const n=o({className:"fshCenter"}),t=m({className:"fshBl fshBls",textContent:"Nekid"})
return d(n,"[ "),r(n,t),d(n," ]"),a(t,y),n}()
i("profileRightColumn").replaceChild(t,n)}export{B as default}
//# sourceMappingURL=nekidBtn-1e3ff856.js.map
