import{D as t,m as n,g as e,H as o,aq as r,z as s}from"./calfSystem-6a3c85e0.js"
import{n as a}from"./numberIsNaN-c7db67d0.js"
import{s as i}from"./setTipped-031e6715.js"
function c(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const f=98,p=85,m=60
function d(t){return Number(r(s(`stat-${t.toLowerCase()}`).childNodes).filter(c).map(o).join(""))}function u(t){const r=n({innerHTML:t.dataset.tipped}),s=e("b",r).map((t=>o(t))),c=d(s[2])
a(c)||function(t,n,e){const o=d(n[3]),r=Math.floor(e*(Number(n[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${n[2]}: ${String(e-r)}&nbsp;&nbsp;${n[3]}: ${String(o+r)}$&`),t)}(t,s,c)}function b(n){const e=t(`#profileRightColumn img[src$="/${String(n)}.png"]`)
e&&u(e)}function g(){[f,p,m].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-cc2c34b8.js.map
