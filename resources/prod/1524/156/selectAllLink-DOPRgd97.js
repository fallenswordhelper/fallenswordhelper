import{q as a,ex as t,aQ as e,o as s,i as n,a2 as c,cx as o,s as i,g as l,bp as b,h as p,bi as r}from"./calfSystem-79LsojAC.js"
function k(){i("profile","select all")
const a=l("backpack_tabs"),t=b("tab-selected",a)[0].getAttribute("data-type")
let e=p(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(!e.length)return
const s=p(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
s.length>0&&(e=s),e.forEach(r)}function d(){const i=a(`#profileRightColumn a[href="${t}"]`)
if(!i)return
const l=e({className:"sendLink",textContent:"All"})
s(l,k)
const b=e({innerHTML:"[&nbsp;"})
n(b,l),c(b,"&nbsp;]&nbsp;"),o(i.parentNode,b)}export{d as default}
//# sourceMappingURL=selectAllLink-DOPRgd97.js.map
