import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-5d0c721b.js"
import{m as o}from"./myStats-14e55c17.js"
import{r as i}from"./reduceBuffArray-87d130c4.js"
import"./getProfile-982b1370.js"
import"./cmdExport-09ebfe19.js"
import"./indexAjaxJson-f1851d17.js"
import"./playerName-6d380f14.js"
import"./idb-a2aaccdb.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(c)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-95591ed1.js.map
