import{D as t,m as e,g as n,H as o,ap as r,z as s}from"./calfSystem-ae2e69af.js"
import{n as a}from"./numberIsNaN-c7db67d0.js"
import{s as i}from"./setTipped-031e6715.js"
function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const c=98,p=85,m=60
function d(t){return Number(r(s(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(o).join(""))}function u(t){const r=e({innerHTML:t.dataset.tipped}),s=n("b",r).map((t=>o(t))),f=d(s[2])
a(f)||function(t,e,n){const o=d(e[3]),r=Math.floor(n*(Number(e[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${e[2]}: ${String(n-r)}&nbsp;&nbsp;${e[3]}: ${String(o+r)}$&`),t)}(t,s,f)}function b(e){const n=t(`#profileRightColumn img[src$="/${String(e)}.png"]`)
n&&u(n)}function g(){[c,p,m].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-bc24f762.js.map
