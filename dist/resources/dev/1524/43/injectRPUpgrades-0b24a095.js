import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-3cb2f93e.js"
import{m as o}from"./myStats-259c633e.js"
import{r as i}from"./reduceBuffArray-d0911495.js"
import"./getProfile-7ebbf2f4.js"
import"./cmdExport-7784a81f.js"
import"./indexAjaxJson-a55a7596.js"
import"./playerName-9a988c39.js"
import"./idb-c9ce87e3.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(c)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-0b24a095.js.map
