import{c as a}from"./createSpan-6761e587.js"
import{q as t,dt as e,o as n,i as s,v as c,bP as o,g as i,aO as b,j as r,aw as p}from"./calfSystem-929ac228.js"
function l(){const a=i("backpack_tabs"),t=b("tab-selected",a)[0].getAttribute("data-type")
let e=r(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(!e.length)return
const n=r(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
n.length>0&&(e=n),e.forEach(p)}function d(){const i=t(`#profileRightColumn a[href="${e}"]`)
if(!i)return
const b=a({className:"sendLink",textContent:"All"})
n(b,l)
const r=a({innerHTML:"[&nbsp;"})
s(r,b),c(r,"&nbsp;]&nbsp;"),o(i.parentNode,r)}export{d as default}
//# sourceMappingURL=selectAllLink-2850a1cb.js.map
