import{b as a,p as e,s,g as t,d as n,m as o,i as r}from"./calfSystem-DKih1pr1.js"
import{a as c}from"./addCommas-C_h2HN8s.js"
let f=0,i=0,u=0
function l(a){const s=(f||(f=t("amount")),f).value
n(`You are offering to buy <b>${s}</b> FSP for >> <b>${c(a)}</b> (Total: ${c(function(a,e){const s=a*e
return s+Math.ceil(s/200)}(s,a))})`,(u||(u=o({className:"fshBlue fshCenter"}),r(e(),u)),u))}let m=!1
function p(){m||(s("marketplace","addMarketplaceWarning"),m=!0)
const a=(i||(i=t("price")),i)
if(a){const e=a.value;-1!==e.search(/^\d+$/)?l(e):""!==u?.innerHTML&&n("",u)}}function d(){a(e(),"keyup",p)}export{d as default}
//# sourceMappingURL=marketplace-CzQbXp4z.js.map
