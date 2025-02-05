import{ci as n,$ as t,h as e,cg as s,g as i,n as a,ac as o,at as r,i as c,o as f,s as u,z as l,r as m,e as d}from"./calfSystem-BAeDn21M.js"
function p(t){return n({subcmd:"unequipitem",inventory_id:t})}async function h(n){const t=await e({cmd:"profile",subcmd:"unequipitem",inventory_id:n})
return t?function(n){const t=s(n)
return t?{e:{message:t},s:!1}:{s:!0}}(t):{s:!1}}let g=0
async function y(n){const e=m(/inventory_id=(?<id>\d+)/,n.href)
if(e){const s=await function(n){return t(p,h,n)}(e)
!function(n,t){t?.s&&d("",n.parentNode)}(n,s)}}function b(){u("profile","nekidBtn")
const n=g.nextElementSibling
l("a",n).forEach(y)}function C(){if(g=i("profileCombatSetDiv"),!g)return
const n=g.parentNode.nextElementSibling
if(!n)return
const t=function(){const n=a({className:"fshCenter"}),t=o({className:"fshBl fshBls",textContent:"Nekid"})
return r(n,"[ "),c(n,t),r(n," ]"),f(t,b),n}()
i("profileRightColumn").replaceChild(t,n)}export{C as default}
//# sourceMappingURL=nekidBtn-B9V_Wljg.js.map
