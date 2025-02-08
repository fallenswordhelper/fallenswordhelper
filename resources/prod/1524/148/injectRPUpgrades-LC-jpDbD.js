import{y as s,cd as a,p as t,z as e,d as n,x as r}from"./calfSystem-BldO1y8X.js"
import{r as c}from"./reduceBuffArray-Diy1E3zc.js"
const i=/>(?<a>[^>(]+) \(Level (?<b>\d{1,4})/g,l=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function o(s,a){const{tipped:t}=a.dataset,e=[...t.matchAll(i)].filter((a=>s[a[1]]===Number(a[2])))
e.length>0&&r(a.parentNode,e.map(l).join(""))}function f(s){if(s._skills?.length){!function(s){const a=t().children[0].rows[9]
a&&e("a",a.cells[0].children[0]).forEach(n(o,s))}(c(s._skills))}}async function d(){if(s())return
f(await a(!0))}export{d as default}
//# sourceMappingURL=injectRPUpgrades-LC-jpDbD.js.map
