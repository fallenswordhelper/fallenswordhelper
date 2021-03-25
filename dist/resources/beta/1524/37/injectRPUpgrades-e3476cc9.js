import{y as s,p as a,g as t,t as e,i as r}from"./calfSystem-cb2a6f39.js"
import{m as o}from"./myStats-d153a9ab.js"
import{r as i}from"./reduceBuffArray-87d130c4.js"
import"./getProfile-35a7ea32.js"
import"./cmdExport-d6be62af.js"
import"./indexAjaxJson-6c7e44df.js"
import"./playerName-809cf32e.js"
import"./idb-b27e17a7.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,a){const{tipped:t}=a.dataset,e=[...t.matchAll(n)].filter((a=>s[a[1]]===Number(a[2])))
e.length>0&&r(a.parentNode,e.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=a.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-e3476cc9.js.map
