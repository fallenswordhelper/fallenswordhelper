import{m as s}from"./myStats-0c66109a.js"
import{w as t,p as a,x as r,c as i,v as o}from"./calfSystem-abb16b0d.js"
import{r as e}from"./reduceBuffArray-e31428bc.js"
import"./profile-f1cc6452.js"
import"./now-6f22aec9.js"
import"./idb-e719862a.js"
const n=/>(?<a>[^>(]+) \(Level (?<b>\d{1,4})/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,r=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
r.length>0&&o(t.parentNode,r.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const t=a().children[0].rows[9]
t&&r("a",t.cells[0].children[0]).forEach(i(f,s))}(e(s._skills))}}async function p(){if(t())return
l(await s(!0))}export{p as default}
//# sourceMappingURL=injectRPUpgrades-95d34f0a.js.map
