import{y as t,m as s,i as e,h as a,p as o,o as c,z as n,Q as r}from"./calfSystem-e1e858cd.js"
import{g as f}from"./getArrayByClassName-2d2ea79b.js"
import{g as m}from"./getInventoryById-d4059c8b.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&r(t)}function h(){const t=f("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=s({className:"fshAC"})
e(n,'<button class="fshBl">Perfect</button>'),a(o,n),c(n,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-86ad443b.js.map
