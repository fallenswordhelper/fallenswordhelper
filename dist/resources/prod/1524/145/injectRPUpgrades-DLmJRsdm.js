import{x as a,ca as s,p as t,y as e,c as n,w as r}from"./calfSystem-CvwhhJv4.js"
import{r as c}from"./reduceBuffArray-Diy1E3zc.js"
const i=/>(?<a>[^>(]+) \(Level (?<b>\d{1,4})/g,l=a=>`<br><span class="fshRed fshNoWrap">${a[1]} ${a[2]} active</span>`
function o(a,s){const{tipped:t}=s.dataset,e=[...t.matchAll(i)].filter((s=>a[s[1]]===Number(s[2])))
e.length>0&&r(s.parentNode,e.map(l).join(""))}function f(a){if(a._skills?.length){!function(a){const s=t().children[0].rows[9]
s&&e("a",s.cells[0].children[0]).forEach(n(o,a))}(c(a._skills))}}async function p(){if(a())return
f(await s(!0))}export{p as default}
//# sourceMappingURL=injectRPUpgrades-DLmJRsdm.js.map
