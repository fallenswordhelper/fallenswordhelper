import{y as s,p as a,g as t,t as e,i as r}from"./calfSystem-26fbeaeb.js"
import{m as o}from"./myStats-0fbbe5d0.js"
import{r as i}from"./reduceBuffArray-f33baf47.js"
import"./getProfile-d835f1ae.js"
import"./cmdExport-c9d580f0.js"
import"./indexAjaxJson-0408c27b.js"
import"./playerName-a1b7a513.js"
import"./idb-7ea76af7.js"
const f=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,a){const{tipped:t}=a.dataset,e=[...t.matchAll(f)].filter((a=>s[a[1]]===Number(a[2])))
e.length>0&&r(a.parentNode,e.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=a.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(e(c,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-e1d0fcc0.js.map
