import{y as t,m as s,i as e,h as a,p as o,o as c,z as n,S as f}from"./calfSystem-817ceb25.js"
import{g as r}from"./getArrayByClassName-fde4b553.js"
import{g as m}from"./getInventoryById-498734d2.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function h(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=s({className:"fshAC"})
e(n,'<button class="fshBl">Perfect</button>'),a(o,n),c(n,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-0761384d.js.map