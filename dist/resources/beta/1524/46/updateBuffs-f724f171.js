import{D as t,m as n,g as e,H as o,ap as r,z as s}from"./calfSystem-cbf77dd7.js"
import{n as a}from"./numberIsNaN-c0e87dea.js"
import{s as i}from"./setTipped-c38098a5.js"
function c(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const f=98,p=85,d=60
function m(t){return Number(r(s(`stat-${t.toLowerCase()}`).childNodes).filter(c).map(o).join(""))}function u(t){const r=n({innerHTML:t.dataset.tipped}),s=e("b",r).map((t=>o(t))),c=m(s[2])
a(c)||function(t,n,e){const o=m(n[3]),r=Math.floor(e*(Number(n[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${n[2]}: ${String(e-r)}&nbsp;&nbsp;${n[3]}: ${String(o+r)}$&`),t)}(t,s,c)}function b(n){const e=t(`#profileRightColumn img[src$="/${String(n)}.png"]`)
e&&u(e)}function g(){[f,p,d].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-f724f171.js.map
