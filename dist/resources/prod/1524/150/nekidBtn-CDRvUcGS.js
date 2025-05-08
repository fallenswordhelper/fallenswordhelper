import{cg as n,$ as t,k as e,ce as s,g as i,u as a,a9 as o,ar as r,i as c,o as u,s as f,B as l,r as m,h as d}from"./calfSystem-BGOTz8de.js"
function p(t){return n({subcmd:"unequipitem",inventory_id:t})}async function h(n){const t=await e({cmd:"profile",subcmd:"unequipitem",inventory_id:n})
return t?function(n){const t=s(n)
return t?{e:{message:t},s:!1}:{s:!0}}(t):{s:!1}}let g=0
async function y(n){const e=m(/inventory_id=(?<id>\d+)/,n.href)
if(e){const s=await function(n){return t(p,h,n)}(e)
!function(n,t){t?.s&&d("",n.parentNode)}(n,s)}}function b(){f("profile","nekidBtn")
const n=g.nextElementSibling
l("a",n).forEach(y)}function C(){if(g=i("profileCombatSetDiv"),!g)return
const n=g.parentNode.nextElementSibling
if(!n)return
const t=function(){const n=a({className:"fshCenter"}),t=o({className:"fshBl fshBls",textContent:"Nekid"})
return r(n,"[ "),c(n,t),r(n," ]"),u(t,b),n}()
i("profileRightColumn").replaceChild(t,n)}export{C as default}
//# sourceMappingURL=nekidBtn-CDRvUcGS.js.map
