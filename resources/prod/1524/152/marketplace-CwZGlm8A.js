import{b as a,p as e,s,g as t,e as n,aN as o,w as c,i as r}from"./calfSystem-BlPuMQGT.js"
let f=0,u=0,i=0
function l(a){const s=(f||(f=t("amount")),f).value
n(`You are offering to buy <b>${s}</b> FSP for >> <b>${o(a)}</b> (Total: ${o(function(a,e){const s=a*e
return s+Math.ceil(s/200)}(s,a))})`,(i||(i=c({className:"fshBlue fshCenter"}),r(e(),i)),i))}function p(){s("marketplace","addMarketplaceWarning")
const a=(u||(u=t("price")),u)
if(a){const e=a.value;-1!==e.search(/^\d+$/)?l(e):""!==i?.innerHTML&&n("",i)}}function b(){a(e(),"keyup",p)}export{b as default}
//# sourceMappingURL=marketplace-CwZGlm8A.js.map
