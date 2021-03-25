import{y as s,p as e,g as t,t as a,i as r}from"./calfSystem-eeb1d862.js"
import{m as o}from"./myStats-fb0c0c4d.js"
import{r as i}from"./reduceBuffArray-3976c24a.js"
import"./getProfile-52958e59.js"
import"./cmdExport-7e823e95.js"
import"./indexAjaxJson-2deb257d.js"
import"./playerName-018cf18c.js"
import"./idb-874d144e.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,e){const{tipped:t}=e.dataset,a=[...t.matchAll(c)].filter((e=>s[e[1]]===Number(e[2])))
a.length>0&&r(e.parentNode,a.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=e.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(a(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-e0a813bf.js.map
