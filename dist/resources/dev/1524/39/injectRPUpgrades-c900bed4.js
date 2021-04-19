import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-b31aba65.js"
import{m as o}from"./myStats-4fa379c1.js"
import{r as i}from"./reduceBuffArray-f33baf47.js"
import"./getProfile-64f99e16.js"
import"./cmdExport-8d5cf03e.js"
import"./indexAjaxJson-0fdc3cdc.js"
import"./playerName-68c14b2a.js"
import"./idb-71729176.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function n(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(c)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(f).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(n,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-c900bed4.js.map
