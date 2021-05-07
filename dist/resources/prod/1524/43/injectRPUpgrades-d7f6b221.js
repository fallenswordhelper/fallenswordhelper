import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-9942149b.js"
import{m as o}from"./myStats-5331506c.js"
import{r as i}from"./reduceBuffArray-d0911495.js"
import"./getProfile-ccaddef4.js"
import"./cmdExport-ded2df3e.js"
import"./indexAjaxJson-21b8f9a5.js"
import"./playerName-b83afe17.js"
import"./idb-6116f2a7.js"
const f=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(f)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(c,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-d7f6b221.js.map
