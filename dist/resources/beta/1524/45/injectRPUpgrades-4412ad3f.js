import{y as s,p as a,g as t,t as e,i as r}from"./calfSystem-ae2e69af.js"
import{m as o}from"./myStats-76b40e27.js"
import{r as i}from"./reduceBuffArray-ba72d525.js"
import"./getProfile-8130640f.js"
import"./cmdExport-aa80361b.js"
import"./indexAjaxJson-6eadb7fa.js"
import"./playerName-1b929217.js"
import"./idb-225659e6.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function l(s,a){const{tipped:t}=a.dataset,e=[...t.matchAll(n)].filter((a=>s[a[1]]===Number(a[2])))
e.length>0&&r(a.parentNode,e.map(f).join(""))}function m(s){if(0!==s._skills.length){!function(s){const r=a.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(e(l,s))}(i(s._skills))}}function p(){s()||o(!0).then(m)}export default p
//# sourceMappingURL=injectRPUpgrades-4412ad3f.js.map
