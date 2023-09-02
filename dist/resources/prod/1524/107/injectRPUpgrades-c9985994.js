import{m as s}from"./myStats-8a5ad298.js"
import{w as t,p as a,x as r,c as o,v as i}from"./calfSystem-2fff342b.js"
import{r as e}from"./reduceBuffArray-e31428bc.js"
import"./profile-3c9458c7.js"
import"./now-6f22aec9.js"
import"./idb-0ebea50c.js"
const n=/>(?<a>[^>(]+) \(Level (?<b>\d{1,4})/g,l=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:a}=t.dataset,r=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
r.length>0&&i(t.parentNode,r.map(l).join(""))}function f(s){if(0!==s._skills.length){!function(s){const t=a().children[0].rows[9]
t&&r("a",t.cells[0].children[0]).forEach(o(c,s))}(e(s._skills))}}async function p(){if(t())return
f(await s(!0))}export{p as default}
//# sourceMappingURL=injectRPUpgrades-c9985994.js.map
