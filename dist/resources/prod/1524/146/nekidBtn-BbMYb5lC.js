import{ci as n,h as t,cg as e,$ as s,g as i,n as a,ac as o,at as r,i as c,o as f,s as u,z as l,r as m,e as d}from"./calfSystem-DiXGAkgN.js"
function p(t){return n({subcmd:"unequipitem",inventory_id:t})}async function h(n){const s=await t({cmd:"profile",subcmd:"unequipitem",inventory_id:n})
return s?function(n){const t=e(n)
return t?{e:{message:t},s:!1}:{s:!0}}(s):{s:!1}}let g=0
async function y(n){const t=m(/inventory_id=(?<id>\d+)/,n.href)
if(t){const e=await function(n){return s(p,h,n)}(t)
!function(n,t){t?.s&&d("",n.parentNode)}(n,e)}}function b(){u("profile","nekidBtn")
const n=g.nextElementSibling
l("a",n).forEach(y)}function C(){if(g=i("profileCombatSetDiv"),!g)return
const n=g.parentNode.nextElementSibling
if(!n)return
const t=function(){const n=a({className:"fshCenter"}),t=o({className:"fshBl fshBls",textContent:"Nekid"})
return r(n,"[ "),c(n,t),r(n," ]"),f(t,b),n}()
i("profileRightColumn").replaceChild(t,n)}export{C as default}
//# sourceMappingURL=nekidBtn-BbMYb5lC.js.map
