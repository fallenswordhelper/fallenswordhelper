import{x as t,m as s,i as e,h as a,p as c,o,y as n,R as f}from"./calfSystem-37f70deb.js"
import{g as r}from"./getArrayByClassName-6d0c056d.js"
import{g as m}from"./getInventoryById-63c97c31.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function h(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=s({className:"fshAC"})
e(n,'<button class="fshBl">Perfect</button>'),a(c,n),o(n,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-7b23448e.js.map
