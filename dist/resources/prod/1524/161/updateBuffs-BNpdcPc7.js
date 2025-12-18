import{q as t,v as n,a5 as e,aT as o,aw as s,bz as a,g as i}from"./calfSystem-Cs6CSxoU.js"
import{s as r}from"./setTipped-_gKWzwad.js"
function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const c=98,p=85,u=60
function d(t){return Number(a(i(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(o).join("").split(",").join(""))}function m(t){const a=n({innerHTML:t.dataset.tipped}),i=e("b",a).map(t=>o(t)),f=d(i[2])
s(f)||function(t,n,e){const o=d(n[3]),s=Math.floor(e*(Number(n[1].replace(/[+%]/g,""))/100))
r(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(s)}<br>${n[2]}: ${String(e-s)}&nbsp;&nbsp;${n[3]}: ${String(o+s)}$&`),t)}(t,i,f)}function l(n){const e=t(`#profileRightColumn img[src$="/${String(n)}.png"]`)
e&&m(e)}function g(){[c,p,u].forEach(l)}export{g as default}
//# sourceMappingURL=updateBuffs-BNpdcPc7.js.map
