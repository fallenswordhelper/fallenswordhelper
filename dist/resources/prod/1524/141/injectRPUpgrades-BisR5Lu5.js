import{m as s}from"./myStats-CJTu9lO4.js"
import{w as a,p as t,x as r,b as e,v as n}from"./calfSystem-Blt4DbaE.js"
import{r as o}from"./reduceBuffArray-Diy1E3zc.js"
import"./profile-BPaCJRNe.js"
const i=/>(?<a>[^>(]+) \(Level (?<b>\d{1,4})/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function l(s,a){const{tipped:t}=a.dataset,r=[...t.matchAll(i)].filter((a=>s[a[1]]===Number(a[2])))
r.length>0&&n(a.parentNode,r.map(f).join(""))}function c(s){if(s._skills?.length){!function(s){const a=t().children[0].rows[9]
a&&r("a",a.cells[0].children[0]).forEach(e(l,s))}(o(s._skills))}}async function p(){if(a())return
c(await s(!0))}export{p as default}
//# sourceMappingURL=injectRPUpgrades-BisR5Lu5.js.map
