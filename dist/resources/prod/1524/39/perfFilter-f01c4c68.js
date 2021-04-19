import{y as t,m as s,i as e,h as a,p as o,o as c,z as n,R as f}from"./calfSystem-fe534823.js"
import{g as r}from"./getArrayByClassName-ab8b7067.js"
import{g as m}from"./getInventoryById-b86c65f0.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function b(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function h(t){i=t.items
const n=s({className:"fshAC"})
e(n,'<button class="fshBl">Perfect</button>'),a(o,n),c(n,b)}function u(s){t()||(l=s,m().then(h))}export{u as p}
//# sourceMappingURL=perfFilter-f01c4c68.js.map
