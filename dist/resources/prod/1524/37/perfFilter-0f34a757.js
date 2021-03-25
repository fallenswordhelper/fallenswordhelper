import{y as t,m as s,i as e,h as a,p as o,o as c,z as n,R as r}from"./calfSystem-60c20ae9.js"
import{g as f}from"./getArrayByClassName-0e6e45d9.js"
import{g as m}from"./getInventoryById-a8240d83.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&r(t)}function h(){const t=f("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=s({className:"fshAC"})
e(n,'<button class="fshBl">Perfect</button>'),a(o,n),c(n,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-0f34a757.js.map
