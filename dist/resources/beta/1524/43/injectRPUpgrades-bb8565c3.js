import{y as s,p as t,g as a,t as r,i as o}from"./calfSystem-1d588248.js"
import{m as e}from"./myStats-a750d38a.js"
import{r as i}from"./reduceBuffArray-d0911495.js"
import"./getProfile-76213cf6.js"
import"./cmdExport-a5395bb5.js"
import"./indexAjaxJson-7770951b.js"
import"./playerName-95f1f2a8.js"
import"./idb-dfc3696a.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:a}=t.dataset,r=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
r.length>0&&o(t.parentNode,r.map(f).join(""))}function l(s){if(0!==s._skills.length){!function(s){const o=t.children[0].rows[9]
o&&a("a",o.cells[0].children[0]).forEach(r(c,s))}(i(s._skills))}}function m(){s()||e(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-bb8565c3.js.map
