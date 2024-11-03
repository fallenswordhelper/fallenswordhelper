import{bP as n,e as t,bN as e,$ as s,g as i,m as o,i as r,o as a,s as c,x as f,r as u,d as m}from"./calfSystem-B_VkFJhM.js"
import{c as l}from"./createButton-BRLkkjaw.js"
import{i as d}from"./insertTextBeforeEnd-CpBA09Gi.js"
function p(t){return n({subcmd:"unequipitem",inventory_id:t})}async function b(n){const s=await t({cmd:"profile",subcmd:"unequipitem",inventory_id:n})
return s?function(n){const t=e(n)
return t?{e:{message:t},s:!1}:{s:!0}}(s):{s:!1}}let h=0
async function x(n){const t=u(/inventory_id=(?<id>\d+)/,n.href)
if(t){const e=await function(n){return s(p,b,n)}(t)
!function(n,t){t?.s&&m("",n.parentNode)}(n,e)}}function y(){c("profile","nekidBtn")
const n=h.nextElementSibling
f("a",n).forEach(x)}function N(){if(h=i("profileCombatSetDiv"),!h)return
const n=h.parentNode.nextElementSibling
if(!n)return
const t=function(){const n=o({className:"fshCenter"}),t=l({className:"fshBl fshBls",textContent:"Nekid"})
return d(n,"[ "),r(n,t),d(n," ]"),a(t,y),n}()
i("profileRightColumn").replaceChild(t,n)}export{N as default}
//# sourceMappingURL=nekidBtn-DaVWSGk6.js.map
