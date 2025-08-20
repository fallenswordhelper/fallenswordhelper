import{b as a,p as e,s,g as t,d as n,aL as o,u as c,i as r}from"./calfSystem-CT1aM4VG.js"
let u=0,f=0,i=0
function l(a){const s=(u||(u=t("amount")),u).value
n(`You are offering to buy <b>${s}</b> FSP for >> <b>${o(a)}</b> (Total: ${o(function(a,e){const s=a*e
return s+Math.ceil(s/200)}(s,a))})`,(i||(i=c({className:"fshBlue fshCenter"}),r(e(),i)),i))}function p(){s("marketplace","addMarketplaceWarning")
const a=(f||(f=t("price")),f)
if(a){const e=a.value;-1!==e.search(/^\d+$/)?l(e):""!==i?.innerHTML&&n("",i)}}function b(){a(e(),"keyup",p)}export{b as default}
//# sourceMappingURL=marketplace-Cw2XqnIW.js.map
