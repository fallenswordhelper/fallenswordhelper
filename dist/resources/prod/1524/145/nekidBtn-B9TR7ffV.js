import{cf as n,e as t,cd as e,$ as s,g as i,m as a,ab as o,ar as r,i as c,o as f,s as u,y as l,r as d,d as m}from"./calfSystem-CvwhhJv4.js"
function p(t){return n({subcmd:"unequipitem",inventory_id:t})}async function h(n){const s=await t({cmd:"profile",subcmd:"unequipitem",inventory_id:n})
return s?function(n){const t=e(n)
return t?{e:{message:t},s:!1}:{s:!0}}(s):{s:!1}}let y=0
async function b(n){const t=d(/inventory_id=(?<id>\d+)/,n.href)
if(t){const e=await function(n){return s(p,h,n)}(t)
!function(n,t){t?.s&&m("",n.parentNode)}(n,e)}}function g(){u("profile","nekidBtn")
const n=y.nextElementSibling
l("a",n).forEach(b)}function C(){if(y=i("profileCombatSetDiv"),!y)return
const n=y.parentNode.nextElementSibling
if(!n)return
const t=function(){const n=a({className:"fshCenter"}),t=o({className:"fshBl fshBls",textContent:"Nekid"})
return r(n,"[ "),c(n,t),r(n," ]"),f(t,g),n}()
i("profileRightColumn").replaceChild(t,n)}export{C as default}
//# sourceMappingURL=nekidBtn-B9TR7ffV.js.map
