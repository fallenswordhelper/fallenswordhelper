import{y as s,p as a,g as t,t as e,i as r}from"./calfSystem-a8d582b6.js"
import{m as o}from"./myStats-a3bdf6c3.js"
import{r as i}from"./reduceBuffArray-a59bb5c3.js"
import"./getProfile-d9b6d52e.js"
import"./cmdExport-70bb9819.js"
import"./indexAjaxJson-f3656c2a.js"
import"./playerName-9ba8ea6b.js"
import"./idb-d8c9a883.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,a){const{tipped:t}=a.dataset,e=[...t.matchAll(n)].filter((a=>s[a[1]]===Number(a[2])))
e.length>0&&r(a.parentNode,e.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=a.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-b34d094e.js.map
