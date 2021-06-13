import{y as t,m as s,i as e,h as a,p as o,o as c,z as n,Q as f}from"./calfSystem-7991d843.js"
import{g as r}from"./getArrayByClassName-7f937df4.js"
import{g as m}from"./getInventoryById-215c7d87.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function h(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=s({className:"fshAC"})
e(n,'<button class="fshBl">Perfect</button>'),a(o,n),c(n,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-dc98c062.js.map
