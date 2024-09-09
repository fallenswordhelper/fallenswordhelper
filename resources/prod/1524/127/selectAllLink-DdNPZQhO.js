import{q as a,dH as t,o as e,i as s,v as n,bU as c,s as o,g as i,aU as l,k as p,aA as r}from"./calfSystem-DCvZki7i.js"
import{c as b}from"./createSpan-CyrmgeKx.js"
function k(){o("profile","select all")
const a=i("backpack_tabs"),t=l("tab-selected",a)[0].getAttribute("data-type")
let e=p(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(!e.length)return
const s=p(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
s.length>0&&(e=s),e.forEach(r)}function d(){const o=a(`#profileRightColumn a[href="${t}"]`)
if(!o)return
const i=b({className:"sendLink",textContent:"All"})
e(i,k)
const l=b({innerHTML:"[&nbsp;"})
s(l,i),n(l,"&nbsp;]&nbsp;"),c(o.parentNode,l)}export{d as default}
//# sourceMappingURL=selectAllLink-DdNPZQhO.js.map
