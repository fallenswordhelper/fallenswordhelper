import{y as s,p as a,g as t,t as e,i as r}from"./calfSystem-6ad077b7.js"
import{m as o}from"./myStats-1aebe4bb.js"
import{r as i}from"./reduceBuffArray-a59bb5c3.js"
import"./getProfile-dbf285d8.js"
import"./cmdExport-f73a707b.js"
import"./indexAjaxJson-d462ea95.js"
import"./playerName-7e6569ce.js"
import"./idb-9caca870.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,a){const{tipped:t}=a.dataset,e=[...t.matchAll(n)].filter((a=>s[a[1]]===Number(a[2])))
e.length>0&&r(a.parentNode,e.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=a.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-a0994caa.js.map
