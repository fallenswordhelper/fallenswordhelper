import{c as a}from"./createSpan-14f0ab30.js"
import{q as t,du as e,o as n,i as s,v as c,bR as o,g as i,aQ as r,j as b,ax as p}from"./calfSystem-2f15e074.js"
function l(){const a=i("backpack_tabs"),t=r("tab-selected",a)[0].getAttribute("data-type")
let e=b(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(!e.length)return
const n=b(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
n.length>0&&(e=n),e.forEach(p)}function d(){const i=t(`#profileRightColumn a[href="${e}"]`)
if(!i)return
const r=a({className:"sendLink",textContent:"All"})
n(r,l)
const b=a({innerHTML:"[&nbsp;"})
s(b,r),c(b,"&nbsp;]&nbsp;"),o(i.parentNode,b)}export{d as default}
//# sourceMappingURL=selectAllLink-51738c5c.js.map
