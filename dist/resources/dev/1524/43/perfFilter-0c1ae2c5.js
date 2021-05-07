import{y as t,m as s,i as e,h as a,p as o,o as c,z as n,S as f}from"./calfSystem-3cb2f93e.js"
import{g as r}from"./getArrayByClassName-b128b43c.js"
import{g as m}from"./getInventoryById-74030f86.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function b(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function h(t){i=t.items
const n=s({className:"fshAC"})
e(n,'<button class="fshBl">Perfect</button>'),a(o,n),c(n,b)}function u(s){t()||(l=s,m().then(h))}export{u as p}
//# sourceMappingURL=perfFilter-0c1ae2c5.js.map
