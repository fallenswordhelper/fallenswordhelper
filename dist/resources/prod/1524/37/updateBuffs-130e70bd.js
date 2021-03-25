import{D as t,m as n,g as e,H as o,N as r,z as s}from"./calfSystem-60c20ae9.js"
import{n as a}from"./numberIsNaN-a6723163.js"
import{s as i}from"./setTipped-f5389fab.js"
function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const c=98,p=85,m=60
function u(t){return Number(r(s(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(o).join(""))}function d(t){const r=n({innerHTML:t.dataset.tipped}),s=e("b",r).map((t=>o(t))),f=u(s[2])
a(f)||function(t,n,e){const o=u(n[3]),r=Math.floor(e*(Number(n[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${n[2]}: ${String(e-r)}&nbsp;&nbsp;${n[3]}: ${String(o+r)}$&`),t)}(t,s,f)}function b(n){const e=t(`#profileRightColumn img[src$="/${String(n)}.png"]`)
e&&d(e)}function g(){[c,p,m].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-130e70bd.js.map
