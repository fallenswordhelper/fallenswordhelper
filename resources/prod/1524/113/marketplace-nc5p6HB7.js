import{b as a,p as s,s as e,g as t,d as n,m as o,i as r}from"./calfSystem-VUa7wwu1.js"
import{a as c}from"./addCommas-olJWnOGa.js"
let f=0,i=0,u=0
function l(a){const e=(f||(f=t("amount")),f).value
n(`You are offering to buy <b>${e}</b> FSP for >> <b>${c(a)}</b> (Total: ${c(function(a,s){const e=a*s
return e+Math.ceil(e/200)}(e,a))})`,(u||(u=o({className:"fshBlue fshCenter"}),r(s(),u)),u))}function m(){e("marketplace","addMarketplaceWarning")
const a=(i||(i=t("price")),i)
if(a){const s=a.value;-1!==s.search(/^\d+$/)?l(s):""!==u?.innerHTML&&n("",u)}}function p(){a(s(),"keyup",m)}export{p as default}
//# sourceMappingURL=marketplace-nc5p6HB7.js.map
