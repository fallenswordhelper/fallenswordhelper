import{y as t,m as s,i as e,h as a,p as o,o as c,z as f,Q as n}from"./calfSystem-cbf77dd7.js"
import{g as r}from"./getArrayByClassName-f5e2f789.js"
import{g as m}from"./getInventoryById-eb3b3485.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&n(t)}function b(){const t=r("selectable-item",f(`${l}-items`))
0!==t.length&&t.forEach(p)}function h(t){i=t.items
const f=s({className:"fshAC"})
e(f,'<button class="fshBl">Perfect</button>'),a(o,f),c(f,b)}function u(s){t()||(l=s,m().then(h))}export{u as p}
//# sourceMappingURL=perfFilter-88d1c955.js.map
