import{c as a,p as e,s,g as t,e as n,n as o,i as r}from"./calfSystem-DiXGAkgN.js"
import{a as c}from"./addCommas-C_h2HN8s.js"
let f=0,i=0,u=0
function l(a){const s=(f||(f=t("amount")),f).value
n(`You are offering to buy <b>${s}</b> FSP for >> <b>${c(a)}</b> (Total: ${c(function(a,e){const s=a*e
return s+Math.ceil(s/200)}(s,a))})`,(u||(u=o({className:"fshBlue fshCenter"}),r(e(),u)),u))}function m(){s("marketplace","addMarketplaceWarning")
const a=(i||(i=t("price")),i)
if(a){const e=a.value;-1!==e.search(/^\d+$/)?l(e):""!==u?.innerHTML&&n("",u)}}function p(){a(e(),"keyup",m)}export{p as default}
//# sourceMappingURL=marketplace-BQ8qnR1l.js.map
