import{cq as n,$ as t,j as e,co as s,g as i,w as a,ar as o,aE as r,i as c,o as f,s as u,a5 as l,r as m,e as d}from"./calfSystem-C1X5YxJZ.js"
function p(t){return n({subcmd:"unequipitem",inventory_id:t})}async function h(n){const t=await e({cmd:"profile",subcmd:"unequipitem",inventory_id:n})
return t?function(n){const t=s(n)
return t?{e:{message:t},s:!1}:{s:!0}}(t):{s:!1}}let y=0
async function b(n){const e=m(/inventory_id=(?<id>\d+)/,n.href)
if(e){const s=await function(n){return t(p,h,n)}(e)
!function(n,t){t?.s&&d("",n.parentNode)}(n,s)}}function g(){u("profile","nekidBtn")
const n=y.nextElementSibling
l("a",n).forEach(b)}function C(){if(y=i("profileCombatSetDiv"),!y)return
const n=y.parentNode.nextElementSibling
if(!n)return
const t=function(){const n=a({className:"fshCenter"}),t=o({className:"fshBl fshBls",textContent:"Nekid"})
return r(n,"[ "),c(n,t),r(n," ]"),f(t,g),n}()
i("profileRightColumn").replaceChild(t,n)}export{C as default}
//# sourceMappingURL=nekidBtn-BIy4L41w.js.map
