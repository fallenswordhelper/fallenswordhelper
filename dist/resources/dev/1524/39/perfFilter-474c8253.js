import{y as t,m as a,i as s,h as e,p as o,o as c,z as n,S as f}from"./calfSystem-b31aba65.js"
import{g as r}from"./getArrayByClassName-17a8a2fa.js"
import{g as m}from"./getInventoryById-cae61a80.js"
let i,l
function p(t){const a=t.id.replace(`${l}-item-`,"")
i[a]&&"Perfect"===i[a].craft&&f(t)}function h(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=a({className:"fshAC"})
s(n,'<button class="fshBl">Perfect</button>'),e(o,n),c(n,h)}function y(a){t()||(l=a,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-474c8253.js.map
