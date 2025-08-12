import{q as a,eJ as t,b2 as e,o as s,i as n,a3 as c,cy as o,s as i,g as b,bn as l,k as p,bg as r}from"./calfSystem-BlPuMQGT.js"
function k(){i("profile","select all")
const a=b("backpack_tabs"),t=l("tab-selected",a)[0].getAttribute("data-type")
let e=p(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(!e.length)return
const s=p(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
s.length>0&&(e=s),e.forEach(r)}function d(){const i=a(`#profileRightColumn a[href="${t}"]`)
if(!i)return
const b=e({className:"sendLink",textContent:"All"})
s(b,k)
const l=e({innerHTML:"[&nbsp;"})
n(l,b),c(l,"&nbsp;]&nbsp;"),o(i.parentNode,l)}export{d as default}
//# sourceMappingURL=selectAllLink-BfJKk88r.js.map
