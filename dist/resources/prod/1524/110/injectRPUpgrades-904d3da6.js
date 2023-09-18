import{m as s}from"./myStats-439c5e74.js"
import{w as t,p as a,x as r,c as i,v as o}from"./calfSystem-929ac228.js"
import{r as e}from"./reduceBuffArray-e31428bc.js"
import"./profile-ceb86d3e.js"
import"./now-6f22aec9.js"
import"./idb-8fd6b5d1.js"
const n=/>(?<a>[^>(]+) \(Level (?<b>\d{1,4})/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,r=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
r.length>0&&o(t.parentNode,r.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const t=a().children[0].rows[9]
t&&r("a",t.cells[0].children[0]).forEach(i(f,s))}(e(s._skills))}}async function p(){if(t())return
l(await s(!0))}export{p as default}
//# sourceMappingURL=injectRPUpgrades-904d3da6.js.map
