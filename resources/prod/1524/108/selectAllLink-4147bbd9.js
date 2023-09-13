import{c as a}from"./createSpan-d7c936c3.js"
import{q as t,du as e,o as n,i as s,v as c,bR as o,g as i,aQ as b,j as r,ax as p}from"./calfSystem-34913441.js"
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
//# sourceMappingURL=selectAllLink-4147bbd9.js.map
