import{b as n,p as t,s as a,g as e,d as o,aN as s,v as r,i as u,o as c,aq as i,aO as f,m as l}from"./calfSystem-CIdPz3EO.js"
import{c as p}from"./closestTd-Cte_STWk.js"
let m=0,b=0,d=0
function v(){return m||(m=e("amount")),m}function g(){return b||(b=e("price")),b}function h(n){const a=v().value
o(`You are offering to buy <b>${a}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(n,t){const a=n*t
return a+Math.ceil(a/200)}(a,n))})`,(d||(d=r({className:"fshBlue fshCenter"}),u(t(),d)),d))}function y(){a("marketplace","addMarketplaceWarning")
const n=g()
if(n){const t=Number(n.value)
t?h(t):""!==d?.innerHTML&&o("",d)}}function M(){return i({innerText:"Spend It All",style:"font-size: 8px; position: absolute;"})}function N(n,t){if(!n||!t)return
const a=Number(n.value)
t.value=a&&a>0?Math.floor(f(l(e("statbar-gold")))/a/1.005):"",y()}function T(n,t){p(n).append(t)}function k(){!function(){if(!v()||!g())return
const n=M()
c(n,()=>N(v(),g())),T(v(),n)
const t=M()
c(t,()=>N(g(),v())),T(g(),t)}(),n(t(),"keyup",y)}export{k as default}
//# sourceMappingURL=marketplace-lC2iuKUi.js.map
