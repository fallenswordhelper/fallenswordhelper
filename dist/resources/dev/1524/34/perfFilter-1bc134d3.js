import{x as t,m as s,i as a,h as e,p as o,o as c,y as n,R as f}from"./calfSystem-c07e3259.js"
import{g as r}from"./getArrayByClassName-abf6bba3.js"
import{g as m}from"./getInventoryById-78665853.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function b(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function h(t){i=t.items
const n=s({className:"fshAC"})
a(n,'<button class="fshBl">Perfect</button>'),e(o,n),c(n,b)}function u(s){t()||(l=s,m().then(h))}export{u as p}
//# sourceMappingURL=perfFilter-1bc134d3.js.map
