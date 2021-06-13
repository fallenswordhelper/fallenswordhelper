import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-6a3c85e0.js"
import{m as o}from"./myStats-bf697fe1.js"
import{r as i}from"./reduceBuffArray-ba72d525.js"
import"./getProfile-b9c4b8d7.js"
import"./cmdExport-cce4a501.js"
import"./indexAjaxJson-c7dd57d3.js"
import"./playerName-338c35a7.js"
import"./idb-66004b57.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(c)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-344ed54e.js.map
