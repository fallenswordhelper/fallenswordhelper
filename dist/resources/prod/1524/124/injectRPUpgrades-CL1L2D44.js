import{m as s}from"./myStats-DG_EoEVs.js"
import{w as a,p as t,x as r,c as o,v as e}from"./calfSystem-0LeC9ahe.js"
import{r as i}from"./reduceBuffArray-Diy1E3zc.js"
import"./profile-ktGq4Lex.js"
import"./now-Cx4PsKjI.js"
const n=/>(?<a>[^>(]+) \(Level (?<b>\d{1,4})/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,a){const{tipped:t}=a.dataset,r=[...t.matchAll(n)].filter((a=>s[a[1]]===Number(a[2])))
r.length>0&&e(a.parentNode,r.map(c).join(""))}function l(s){if(0!==s._skills?.length){!function(s){const a=t().children[0].rows[9]
a&&r("a",a.cells[0].children[0]).forEach(o(f,s))}(i(s._skills))}}async function p(){if(a())return
l(await s(!0))}export{p as default}
//# sourceMappingURL=injectRPUpgrades-CL1L2D44.js.map
