import{q as t,w as n,a5 as e,aT as o,ax as a,bw as r,g as s}from"./calfSystem-C1X5YxJZ.js"
import{s as i}from"./setTipped-_gKWzwad.js"
function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const c=98,p=85,u=60
function d(t){return Number(r(s(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(o).join(""))}function m(t){const r=n({innerHTML:t.dataset.tipped}),s=e("b",r).map((t=>o(t))),f=d(s[2])
a(f)||function(t,n,e){const o=d(n[3]),a=Math.floor(e*(Number(n[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(a)}<br>${n[2]}: ${String(e-a)}&nbsp;&nbsp;${n[3]}: ${String(o+a)}$&`),t)}(t,s,f)}function g(n){const e=t(`#profileRightColumn img[src$="/${String(n)}.png"]`)
e&&m(e)}function l(){[c,p,u].forEach(g)}export{l as default}
//# sourceMappingURL=updateBuffs-DDlSHzzQ.js.map
