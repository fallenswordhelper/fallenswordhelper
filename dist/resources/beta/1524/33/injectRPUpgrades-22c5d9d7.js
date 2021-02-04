import{x as s,p as e,g as t,t as a,i as r}from"./calfSystem-c91a5c89.js"
import{m as o}from"./myStats-2e0ed997.js"
import{r as i}from"./reduceBuffArray-0721627c.js"
import"./getProfile-6ab0dd0e.js"
import"./cmdExport-6ed03a19.js"
import"./indexAjaxJson-6b76870e.js"
import"./playerName-542e8d11.js"
import"./idb-ba7ef5fa.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,e){const{tipped:t}=e.dataset,a=[...t.matchAll(n)].filter((e=>s[e[1]]===Number(e[2])))
a.length>0&&r(e.parentNode,a.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=e.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(a(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-22c5d9d7.js.map
