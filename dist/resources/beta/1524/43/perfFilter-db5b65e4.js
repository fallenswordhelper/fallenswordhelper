import{y as t,m as s,i as a,h as e,p as o,o as f,z as n,R as c}from"./calfSystem-1d588248.js"
import{g as r}from"./getArrayByClassName-8fef58fe.js"
import{g as m}from"./getInventoryById-5ab299aa.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&c(t)}function h(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=s({className:"fshAC"})
a(n,'<button class="fshBl">Perfect</button>'),e(o,n),f(n,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-db5b65e4.js.map
