import{b as n,p as t,s as a,g as e,d as o,aM as s,u as r,i as u,o as c,ap as i,aN as f,l}from"./calfSystem-CIuUjh4H.js"
import{c as p}from"./closestTd-B7y5yK0X.js"
let b=0,m=0,d=0
function M(){return b||(b=e("amount")),b}function g(){return m||(m=e("price")),m}function h(n){const a=M().value
o(`You are offering to buy <b>${a}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(n,t){const a=n*t
return a+Math.ceil(a/200)}(a,n))})`,(d||(d=r({className:"fshBlue fshCenter"}),u(t(),d)),d))}function v(){a("marketplace","addMarketplaceWarning")
const n=g()
if(n){const t=Number(n.value)
t?h(t):""!==d?.innerHTML&&o("",d)}}function y(){return i({innerText:"Spend It All",style:"font-size: 8px; position: absolute;"})}function N(n,t){if(!n||!t)return
const a=Number(n.value)
t.value=a&&a>0?Math.floor(f(l(e("statbar-gold")))/a/1.005):"",v()}function T(n,t){p(n).append(t)}function k(){!function(){if(!M()||!g())return
const n=y()
c(n,()=>N(M(),g())),T(M(),n)
const t=y()
c(t,()=>N(g(),M())),T(g(),t)}(),n(t(),"keyup",v)}export{k as default}
//# sourceMappingURL=marketplace-CSfNCHB7.js.map
