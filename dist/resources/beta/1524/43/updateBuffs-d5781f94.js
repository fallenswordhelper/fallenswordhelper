import{D as t,m as n,g as e,H as o,N as r,z as s}from"./calfSystem-1d588248.js"
import{n as i}from"./numberIsNaN-885a5556.js"
import{s as a}from"./setTipped-2c9c4c64.js"
function c(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const f=98,p=85,m=60
function u(t){return Number(r(s(`stat-${t.toLowerCase()}`).childNodes).filter(c).map(o).join(""))}function d(t){const r=n({innerHTML:t.dataset.tipped}),s=e("b",r).map((t=>o(t))),c=u(s[2])
i(c)||function(t,n,e){const o=u(n[3]),r=Math.floor(e*(Number(n[1].replace(/[+%]/g,""))/100))
a(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${n[2]}: ${String(e-r)}&nbsp;&nbsp;${n[3]}: ${String(o+r)}$&`),t)}(t,s,c)}function g(n){const e=t(`#profileRightColumn img[src$="/${String(n)}.png"]`)
e&&d(e)}function l(){[f,p,m].forEach(g)}export default l
//# sourceMappingURL=updateBuffs-d5781f94.js.map
