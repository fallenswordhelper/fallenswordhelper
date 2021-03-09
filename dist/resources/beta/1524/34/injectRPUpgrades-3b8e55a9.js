import{x as s,p as t,g as a,t as e,i as r}from"./calfSystem-dfa26790.js"
import{m as o}from"./myStats-577a668b.js"
import{r as i}from"./reduceBuffArray-7cd20b37.js"
import"./getProfile-097c83cc.js"
import"./cmdExport-b0c06830.js"
import"./indexAjaxJson-3825eadb.js"
import"./playerName-b7be03d7.js"
import"./idb-93f11a94.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(c)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-3b8e55a9.js.map
