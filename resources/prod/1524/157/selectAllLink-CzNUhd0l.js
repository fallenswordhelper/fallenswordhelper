import{q as a,ey as t,aR as e,o as s,i as n,a2 as c,cB as o,s as i,g as l,br as b,h as r,bk as p}from"./calfSystem-CQOGdqPv.js"
function k(){i("profile","select all")
const a=l("backpack_tabs"),t=b("tab-selected",a)[0].getAttribute("data-type")
let e=r(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(!e.length)return
const s=r(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
s.length>0&&(e=s),e.forEach(p)}function d(){const i=a(`#profileRightColumn a[href="${t}"]`)
if(!i)return
const l=e({className:"sendLink",textContent:"All"})
s(l,k)
const b=e({innerHTML:"[&nbsp;"})
n(b,l),c(b,"&nbsp;]&nbsp;"),o(i.parentNode,b)}export{d as default}
//# sourceMappingURL=selectAllLink-CzNUhd0l.js.map
