import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-f7cf24f6.js"
import{m as o}from"./myStats-1bcedc5e.js"
import{r as i}from"./reduceBuffArray-a59bb5c3.js"
import"./getProfile-9279556b.js"
import"./cmdExport-a23d53af.js"
import"./indexAjaxJson-57024e17.js"
import"./playerName-c3c6c732.js"
import"./idb-62b65e66.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(c)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-2c084885.js.map
