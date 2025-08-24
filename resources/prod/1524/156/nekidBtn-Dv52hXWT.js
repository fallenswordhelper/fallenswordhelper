import{cp as n,$ as t,e,cn as s,g as i,u as a,aq as o,aD as r,i as c,o as u,s as f,a4 as l,r as d,d as m}from"./calfSystem-79LsojAC.js"
function p(t){return n({subcmd:"unequipitem",inventory_id:t})}async function h(n){const t=await e({cmd:"profile",subcmd:"unequipitem",inventory_id:n})
return t?function(n){const t=s(n)
return t?{e:{message:t},s:!1}:{s:!0}}(t):{s:!1}}let y=0
async function b(n){const e=d(/inventory_id=(?<id>\d+)/,n.href)
if(e){const s=await function(n){return t(p,h,n)}(e)
!function(n,t){t?.s&&m("",n.parentNode)}(n,s)}}function g(){f("profile","nekidBtn")
const n=y.nextElementSibling
l("a",n).forEach(b)}function C(){if(y=i("profileCombatSetDiv"),!y)return
const n=y.parentNode.nextElementSibling
if(!n)return
const t=function(){const n=a({className:"fshCenter"}),t=o({className:"fshBl fshBls",textContent:"Nekid"})
return r(n,"[ "),c(n,t),r(n," ]"),u(t,g),n}()
i("profileRightColumn").replaceChild(t,n)}export{C as default}
//# sourceMappingURL=nekidBtn-Dv52hXWT.js.map
