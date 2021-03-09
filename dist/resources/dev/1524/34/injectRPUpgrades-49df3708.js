import{x as s,p as t,g as a,t as e,i as r}from"./calfSystem-c07e3259.js"
import{m as o}from"./myStats-ea8ed6db.js"
import{r as i}from"./reduceBuffArray-7cd20b37.js"
import"./getProfile-c197091b.js"
import"./cmdExport-73f6ff02.js"
import"./indexAjaxJson-18a12ea8.js"
import"./playerName-54b31a1f.js"
import"./idb-dd65ea6c.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-49df3708.js.map
