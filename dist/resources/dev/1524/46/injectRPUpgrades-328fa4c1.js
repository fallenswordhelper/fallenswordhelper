import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-d3f0a380.js"
import{m as o}from"./myStats-39a705ba.js"
import{r as i}from"./reduceBuffArray-867d4e68.js"
import"./getProfile-31c8f504.js"
import"./cmdExport-2e38b85e.js"
import"./indexAjaxJson-00baab20.js"
import"./playerName-9d5fb2c2.js"
import"./idb-13440348.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(f).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(c,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-328fa4c1.js.map
