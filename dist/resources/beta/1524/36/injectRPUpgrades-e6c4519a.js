import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-4a40365f.js"
import{m as o}from"./myStats-19dc8f94.js"
import{r as i}from"./reduceBuffArray-3976c24a.js"
import"./getProfile-e1217259.js"
import"./cmdExport-92971757.js"
import"./indexAjaxJson-6d511c0e.js"
import"./playerName-9305cfda.js"
import"./idb-2c15fd0c.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(c)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-e6c4519a.js.map
