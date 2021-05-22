import{y as t,m as s,i as e,h as a,p as c,o,z as f,R as n}from"./calfSystem-f7cf24f6.js"
import{g as r}from"./getArrayByClassName-f4491c81.js"
import{g as m}from"./getInventoryById-46c0ed75.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&n(t)}function h(){const t=r("selectable-item",f(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const f=s({className:"fshAC"})
e(f,'<button class="fshBl">Perfect</button>'),a(c,f),o(f,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-79f11a93.js.map
