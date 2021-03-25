import{y as t,m as s,i as e,h as a,p as c,o,z as n,S as f}from"./calfSystem-5d0c721b.js"
import{g as r}from"./getArrayByClassName-b9fdeb7c.js"
import{g as m}from"./getInventoryById-c1d4b56a.js"
let i,l
function b(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function p(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(b)}function h(t){i=t.items
const n=s({className:"fshAC"})
e(n,'<button class="fshBl">Perfect</button>'),a(c,n),o(n,p)}function u(s){t()||(l=s,m().then(h))}export{u as p}
//# sourceMappingURL=perfFilter-ba6135c1.js.map
