import{x as s,p as t,g as a,t as e,i as r}from"./calfSystem-37f70deb.js"
import{m as o}from"./myStats-6a0c2702.js"
import{r as i}from"./reduceBuffArray-0721627c.js"
import"./getProfile-0eddc751.js"
import"./cmdExport-de9079b1.js"
import"./indexAjaxJson-82f32240.js"
import"./playerName-fa80c59b.js"
import"./idb-416129aa.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-84bbf5b9.js.map
