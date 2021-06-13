import{D as t,m as e,g as n,H as o,ap as r,z as s}from"./calfSystem-e1e858cd.js"
import{n as i}from"./numberIsNaN-c7db67d0.js"
import{s as a}from"./setTipped-031e6715.js"
function c(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const f=98,p=85,d=60
function m(t){return Number(r(s(`stat-${t.toLowerCase()}`).childNodes).filter(c).map(o).join(""))}function u(t){const r=e({innerHTML:t.dataset.tipped}),s=n("b",r).map((t=>o(t))),c=m(s[2])
i(c)||function(t,e,n){const o=m(e[3]),r=Math.floor(n*(Number(e[1].replace(/[+%]/g,""))/100))
a(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${e[2]}: ${String(n-r)}&nbsp;&nbsp;${e[3]}: ${String(o+r)}$&`),t)}(t,s,c)}function b(e){const n=t(`#profileRightColumn img[src$="/${String(e)}.png"]`)
n&&u(n)}function g(){[f,p,d].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-43314bd5.js.map
