import{x as t,m as s,i as a,h as e,p as o,o as c,y as n,Q as f}from"./calfSystem-dfa26790.js"
import{g as r}from"./getArrayByClassName-30ef3369.js"
import{g as m}from"./getInventoryById-580a84c8.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function h(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=s({className:"fshAC"})
a(n,'<button class="fshBl">Perfect</button>'),e(o,n),c(n,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-15daddbf.js.map
