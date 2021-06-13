import{D as t,m as n,g as e,H as o,aq as r,z as a}from"./calfSystem-d3f0a380.js"
import{n as s}from"./numberIsNaN-c0e87dea.js"
import{s as i}from"./setTipped-c38098a5.js"
function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const c=98,p=85,m=60
function d(t){return Number(r(a(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(o).join(""))}function u(t){const r=n({innerHTML:t.dataset.tipped}),a=e("b",r).map((t=>o(t))),f=d(a[2])
s(f)||function(t,n,e){const o=d(n[3]),r=Math.floor(e*(Number(n[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${n[2]}: ${String(e-r)}&nbsp;&nbsp;${n[3]}: ${String(o+r)}$&`),t)}(t,a,f)}function g(n){const e=t(`#profileRightColumn img[src$="/${String(n)}.png"]`)
e&&u(e)}function l(){[c,p,m].forEach(g)}export default l
//# sourceMappingURL=updateBuffs-e570eea7.js.map
