import{m as s}from"./myStats-B7ZZ_NcE.js"
import{w as a,p as t,x as r,c as e,v as n}from"./calfSystem-BjarbvkO.js"
import{r as o}from"./reduceBuffArray-Diy1E3zc.js"
import"./profile-DL2Vy9w6.js"
const i=/>(?<a>[^>(]+) \(Level (?<b>\d{1,4})/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,a){const{tipped:t}=a.dataset,r=[...t.matchAll(i)].filter((a=>s[a[1]]===Number(a[2])))
r.length>0&&n(a.parentNode,r.map(c).join(""))}function l(s){if(s._skills?.length){!function(s){const a=t().children[0].rows[9]
a&&r("a",a.cells[0].children[0]).forEach(e(f,s))}(o(s._skills))}}async function p(){if(a())return
l(await s(!0))}export{p as default}
//# sourceMappingURL=injectRPUpgrades-BJcEbW1T.js.map
