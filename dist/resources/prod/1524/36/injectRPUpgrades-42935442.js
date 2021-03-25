import{y as s,p as a,g as t,t as e,i as r}from"./calfSystem-e7bde0c3.js"
import{m as o}from"./myStats-5144aded.js"
import{r as i}from"./reduceBuffArray-3976c24a.js"
import"./getProfile-74316bba.js"
import"./cmdExport-073f9de0.js"
import"./indexAjaxJson-9da74e49.js"
import"./playerName-523ac3f3.js"
import"./idb-47978eaa.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,a){const{tipped:t}=a.dataset,e=[...t.matchAll(n)].filter((a=>s[a[1]]===Number(a[2])))
e.length>0&&r(a.parentNode,e.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=a.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-42935442.js.map
