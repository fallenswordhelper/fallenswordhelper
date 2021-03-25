import{y as t,m as s,i as e,h as a,p as o,o as c,z as n,R as r}from"./calfSystem-e7bde0c3.js"
import{g as f}from"./getArrayByClassName-7d00a4d5.js"
import{g as m}from"./getInventoryById-e3966c2d.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&r(t)}function d(){const t=f("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function h(t){i=t.items
const n=s({className:"fshAC"})
e(n,'<button class="fshBl">Perfect</button>'),a(o,n),c(n,d)}function u(s){t()||(l=s,m().then(h))}export{u as p}
//# sourceMappingURL=perfFilter-357d6691.js.map
