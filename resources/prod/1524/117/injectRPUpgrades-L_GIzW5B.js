import{m as s}from"./myStats--KJiIj1a.js"
import{w as a,p as t,x as r,c as o,v as e}from"./calfSystem-G1dN925O.js"
import{r as n}from"./reduceBuffArray-twG3MySG.js"
import"./profile-YuJ83wb9.js"
import"./now-pQzGw6vd.js"
const i=/>(?<a>[^>(]+) \(Level (?<b>\d{1,4})/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,a){const{tipped:t}=a.dataset,r=[...t.matchAll(i)].filter((a=>s[a[1]]===Number(a[2])))
r.length>0&&e(a.parentNode,r.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const a=t().children[0].rows[9]
a&&r("a",a.cells[0].children[0]).forEach(o(f,s))}(n(s._skills))}}async function p(){if(a())return
l(await s(!0))}export{p as default}
//# sourceMappingURL=injectRPUpgrades-L_GIzW5B.js.map
