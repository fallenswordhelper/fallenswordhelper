import{bJ as n,e as t,bI as e,$ as s,g as i,m as o,i as r,o as a,s as c,x as f,r as u,d as m}from"./calfSystem-C4gAE-9q.js"
import{c as l}from"./createButton-B-A34pvk.js"
import{i as d}from"./insertTextBeforeEnd-eQ3lHwuR.js"
function p(t){return n({subcmd:"unequipitem",inventory_id:t})}async function b(n){const s=await t({cmd:"profile",subcmd:"unequipitem",inventory_id:n})
return s?function(n){const t=e(n)
return t?{e:{message:t},s:!1}:{s:!0}}(s):{s:!1}}let h=0
async function x(n){const t=u(/inventory_id=(?<id>\d+)/,n.href)
if(t){const e=await function(n){return s(p,b,n)}(t)
!function(n,t){t?.s&&m("",n.parentNode)}(n,e)}}function y(){c("profile","nekidBtn")
const n=h.nextElementSibling
f("a",n).forEach(x)}function g(){if(h=i("profileCombatSetDiv"),!h)return
const n=h.parentNode.nextElementSibling
if(!n)return
const t=function(){const n=o({className:"fshCenter"}),t=l({className:"fshBl fshBls",textContent:"Nekid"})
return d(n,"[ "),r(n,t),d(n," ]"),a(t,y),n}()
i("profileRightColumn").replaceChild(t,n)}export{g as default}
//# sourceMappingURL=nekidBtn-cNO_2OZ7.js.map
