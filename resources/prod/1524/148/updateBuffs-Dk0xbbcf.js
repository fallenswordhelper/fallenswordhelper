import{q as t,n,z as e,aH as o,am as r,bk as s,g as a}from"./calfSystem-BldO1y8X.js"
import{s as i}from"./setTipped-_gKWzwad.js"
function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const c=98,p=85,u=60
function d(t){return Number(s(a(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(o).join(""))}function m(t){const s=n({innerHTML:t.dataset.tipped}),a=e("b",s).map((t=>o(t))),f=d(a[2])
r(f)||function(t,n,e){const o=d(n[3]),r=Math.floor(e*(Number(n[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${n[2]}: ${String(e-r)}&nbsp;&nbsp;${n[3]}: ${String(o+r)}$&`),t)}(t,a,f)}function g(n){const e=t(`#profileRightColumn img[src$="/${String(n)}.png"]`)
e&&m(e)}function l(){[c,p,u].forEach(g)}export{l as default}
//# sourceMappingURL=updateBuffs-Dk0xbbcf.js.map
