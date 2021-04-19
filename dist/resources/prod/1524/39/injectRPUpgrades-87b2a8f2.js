import{y as a,p as s,g as t,t as e,i as r}from"./calfSystem-fe534823.js"
import{m as o}from"./myStats-ee336f33.js"
import{r as f}from"./reduceBuffArray-f33baf47.js"
import"./getProfile-03c58c40.js"
import"./cmdExport-5c4a04e0.js"
import"./indexAjaxJson-6f85f3e9.js"
import"./playerName-faaca46a.js"
import"./idb-1aaf30fa.js"
const i=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=a=>`<br><span class="fshRed fshNoWrap">${a[1]} ${a[2]} active</span>`
function c(a,s){const{tipped:t}=s.dataset,e=[...t.matchAll(i)].filter((s=>a[s[1]]===Number(s[2])))
e.length>0&&r(s.parentNode,e.map(n).join(""))}function l(a){if(0!==a._skills.length){!function(a){const r=s.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(e(c,a))}(f(a._skills))}}function m(){a()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-87b2a8f2.js.map
