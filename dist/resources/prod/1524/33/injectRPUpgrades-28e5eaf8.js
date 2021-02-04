import{x as s,p as t,g as a,t as e,i as r}from"./calfSystem-0708a9bb.js"
import{m as o}from"./myStats-aba8e6da.js"
import{r as i}from"./reduceBuffArray-0721627c.js"
import"./getProfile-16796490.js"
import"./cmdExport-3f5943d2.js"
import"./indexAjaxJson-7132e6ef.js"
import"./playerName-e75bbf9f.js"
import"./idb-9ebd251c.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(f).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(c,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-28e5eaf8.js.map
