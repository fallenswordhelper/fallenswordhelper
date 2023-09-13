import{m as s}from"./myStats-a7e00096.js"
import{w as t,p as a,x as r,c as o,v as i}from"./calfSystem-2f15e074.js"
import{r as e}from"./reduceBuffArray-e31428bc.js"
import"./profile-68b6c45b.js"
import"./now-6f22aec9.js"
import"./idb-28aa7d4a.js"
const n=/>(?<a>[^>(]+) \(Level (?<b>\d{1,4})/g,l=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:a}=t.dataset,r=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
r.length>0&&i(t.parentNode,r.map(l).join(""))}function f(s){if(0!==s._skills.length){!function(s){const t=a().children[0].rows[9]
t&&r("a",t.cells[0].children[0]).forEach(o(c,s))}(e(s._skills))}}async function p(){if(t())return
f(await s(!0))}export{p as default}
//# sourceMappingURL=injectRPUpgrades-fdded3a6.js.map
