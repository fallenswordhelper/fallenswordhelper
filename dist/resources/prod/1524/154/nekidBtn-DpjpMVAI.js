import{co as n,$ as t,e,cm as s,g as i,u as a,ap as o,aC as r,i as c,o as u,s as f,a3 as l,r as m,d}from"./calfSystem-KFszEm2S.js"
function p(t){return n({subcmd:"unequipitem",inventory_id:t})}async function h(n){const t=await e({cmd:"profile",subcmd:"unequipitem",inventory_id:n})
return t?function(n){const t=s(n)
return t?{e:{message:t},s:!1}:{s:!0}}(t):{s:!1}}let y=0
async function C(n){const e=m(/inventory_id=(?<id>\d+)/,n.href)
if(e){const s=await function(n){return t(p,h,n)}(e)
!function(n,t){t?.s&&d("",n.parentNode)}(n,s)}}function b(){f("profile","nekidBtn")
const n=y.nextElementSibling
l("a",n).forEach(C)}function g(){if(y=i("profileCombatSetDiv"),!y)return
const n=y.parentNode.nextElementSibling
if(!n)return
const t=function(){const n=a({className:"fshCenter"}),t=o({className:"fshBl fshBls",textContent:"Nekid"})
return r(n,"[ "),c(n,t),r(n," ]"),u(t,b),n}()
i("profileRightColumn").replaceChild(t,n)}export{g as default}
//# sourceMappingURL=nekidBtn-DpjpMVAI.js.map
