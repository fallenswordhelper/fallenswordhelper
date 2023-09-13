import{bE as n,d as t,bD as e,$ as s,g as i,l as o,i as r,o as a,n as c,x as f,r as u,s as l}from"./calfSystem-2f15e074.js"
import{c as m}from"./createButton-afda5474.js"
import{i as d}from"./insertTextBeforeEnd-7abd3e1f.js"
function p(t){return n({subcmd:"unequipitem",inventory_id:t})}async function b(n){return function(n){const t=e(n)
return t?{e:{message:t},s:!1}:{s:!0}}(await t({cmd:"profile",subcmd:"unequipitem",inventory_id:n}))}let h=0
async function x(n){const t=u(/inventory_id=(?<id>\d+)/,n.href)
if(t){const e=await function(n){return s(p,b,n)}(t)
!function(n,t){t&&t.s&&l("",n.parentNode)}(n,e)}}function y(){c("profile","nekidBtn")
const n=h.nextElementSibling
f("a",n).forEach(x)}function g(){if(h=i("profileCombatSetDiv"),!h)return
const n=h.parentNode.nextElementSibling
if(!n)return
const t=function(){const n=o({className:"fshCenter"}),t=m({className:"fshBl fshBls",textContent:"Nekid"})
return d(n,"[ "),r(n,t),d(n," ]"),a(t,y),n}()
i("profileRightColumn").replaceChild(t,n)}export{g as default}
//# sourceMappingURL=nekidBtn-f44805d1.js.map
