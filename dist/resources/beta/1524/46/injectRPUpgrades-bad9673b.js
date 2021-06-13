import{y as s,p as a,g as t,t as e,i as r}from"./calfSystem-cbf77dd7.js"
import{m as o}from"./myStats-4138d69d.js"
import{r as i}from"./reduceBuffArray-867d4e68.js"
import"./getProfile-0a56bf78.js"
import"./cmdExport-cd0ba453.js"
import"./indexAjaxJson-167a69fe.js"
import"./playerName-448aa7ca.js"
import"./idb-82a91df1.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,a){const{tipped:t}=a.dataset,e=[...t.matchAll(n)].filter((a=>s[a[1]]===Number(a[2])))
e.length>0&&r(a.parentNode,e.map(f).join(""))}function d(s){if(0!==s._skills.length){!function(s){const r=a.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(e(c,s))}(i(s._skills))}}function l(){s()||o(!0).then(d)}export default l
//# sourceMappingURL=injectRPUpgrades-bad9673b.js.map
