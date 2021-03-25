import{y as s,p as t,g as e,t as a,i as r}from"./calfSystem-60c20ae9.js"
import{m as o}from"./myStats-6f8e6371.js"
import{r as i}from"./reduceBuffArray-87d130c4.js"
import"./getProfile-a21f618e.js"
import"./cmdExport-10c01f6a.js"
import"./indexAjaxJson-6bb34fec.js"
import"./playerName-c88ee86b.js"
import"./idb-a07bf138.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function n(s,t){const{tipped:e}=t.dataset,a=[...e.matchAll(c)].filter((t=>s[t[1]]===Number(t[2])))
a.length>0&&r(t.parentNode,a.map(f).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&e("a",r.cells[0].children[0]).forEach(a(n,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-af86e22b.js.map
