import{x as s,p as t,g as a,t as e,i as r}from"./calfSystem-793da633.js"
import{m as o}from"./myStats-613f3819.js"
import{r as i}from"./reduceBuffArray-7cd20b37.js"
import"./getProfile-b68e9095.js"
import"./cmdExport-6a61d44d.js"
import"./indexAjaxJson-bfa28533.js"
import"./playerName-5c267470.js"
import"./idb-e7344221.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-a8b7aab3.js.map
