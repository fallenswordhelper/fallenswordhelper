import{b as a,p as s,g as o,s as t,l as e,i as n}from"./calfSystem-abb16b0d.js"
import{a as f}from"./addCommas-47d6aaa1.js"
let r=0,c=0,u=0
function i(a){const c=(r||(r=o("amount")),r).value
t(`You are offering to buy <b>${c}</b> FSP for >> <b>${f(a)}</b> (Total: ${f(function(a,s){const o=a*s
return o+Math.ceil(o/200)}(c,a))})`,(u||(u=e({className:"fshBlue fshCenter"}),n(s(),u)),u))}function l(){const a=(c||(c=o("price")),c)
if(a){const s=a.value;-1!==s.search(/^\d+$/)?i(s):""!==u?.innerHTML&&t("",u)}}function m(){a(s(),"keyup",l)}export{m as default}
//# sourceMappingURL=marketplace-17749373.js.map
