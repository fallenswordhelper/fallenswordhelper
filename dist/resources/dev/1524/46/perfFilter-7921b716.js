import{y as t,m as s,i as a,h as e,p as o,o as c,z as n,R as f}from"./calfSystem-d3f0a380.js"
import{g as r}from"./getArrayByClassName-aab7cb65.js"
import{g as m}from"./getInventoryById-41db4f82.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function b(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function h(t){i=t.items
const n=s({className:"fshAC"})
a(n,'<button class="fshBl">Perfect</button>'),e(o,n),c(n,b)}function u(s){t()||(l=s,m().then(h))}export{u as p}
//# sourceMappingURL=perfFilter-7921b716.js.map
