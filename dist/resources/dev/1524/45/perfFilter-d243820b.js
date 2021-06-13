import{y as t,m as s,i as e,h as a,p as c,o,z as n,R as r}from"./calfSystem-6a3c85e0.js"
import{g as f}from"./getArrayByClassName-039bb6c6.js"
import{g as m}from"./getInventoryById-e5962aec.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&r(t)}function h(){const t=f("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=s({className:"fshAC"})
e(n,'<button class="fshBl">Perfect</button>'),a(c,n),o(n,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-d243820b.js.map
