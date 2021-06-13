import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-e1e858cd.js"
import{m as o}from"./myStats-a8dc19ff.js"
import{r as i}from"./reduceBuffArray-ba72d525.js"
import"./getProfile-bf79b6fb.js"
import"./cmdExport-ac312c58.js"
import"./indexAjaxJson-fc55a4e0.js"
import"./playerName-26e59290.js"
import"./idb-ef443609.js"
const f=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function n(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(f)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(n,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-0c66872b.js.map
