import{o as a,s,g as e,c as t,k as o,i as n,p as r}from"./calfSystem-Blt4DbaE.js"
import{a as c}from"./addCommas-C_h2HN8s.js"
let f=0,i=0,u=0
function l(a){const s=(f||(f=e("amount")),f).value
t(`You are offering to buy <b>${s}</b> FSP for >> <b>${c(a)}</b> (Total: ${c(function(a,s){const e=a*s
return e+Math.ceil(e/200)}(s,a))})`,(u||(u=o({className:"fshBlue fshCenter"}),n(r(),u)),u))}function m(){s("marketplace","addMarketplaceWarning")
const a=(i||(i=e("price")),i)
if(a){const s=a.value;-1!==s.search(/^\d+$/)?l(s):""!==u?.innerHTML&&t("",u)}}function p(){a(r(),"keyup",m)}export{p as default}
//# sourceMappingURL=marketplace-22XRjQ8M.js.map
