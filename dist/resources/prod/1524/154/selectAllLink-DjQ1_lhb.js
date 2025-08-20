import{q as a,eE as t,aP as e,o as s,i as n,a1 as c,cw as o,s as i,g as l,bo as b,h as p,bh as r}from"./calfSystem-KFszEm2S.js"
function h(){i("profile","select all")
const a=l("backpack_tabs"),t=b("tab-selected",a)[0].getAttribute("data-type")
let e=p(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(!e.length)return
const s=p(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
s.length>0&&(e=s),e.forEach(r)}function k(){const i=a(`#profileRightColumn a[href="${t}"]`)
if(!i)return
const l=e({className:"sendLink",textContent:"All"})
s(l,h)
const b=e({innerHTML:"[&nbsp;"})
n(b,l),c(b,"&nbsp;]&nbsp;"),o(i.parentNode,b)}export{k as default}
//# sourceMappingURL=selectAllLink-DjQ1_lhb.js.map
