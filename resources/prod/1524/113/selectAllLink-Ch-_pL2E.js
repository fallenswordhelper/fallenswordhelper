import{q as a,ds as t,o as e,i as s,v as n,bN as c,s as o,g as i,aM as l,k as r,av as b}from"./calfSystem-VUa7wwu1.js"
import{c as p}from"./createSpan-3W4T-7NF.js"
function k(){o("profile","select all")
const a=i("backpack_tabs"),t=l("tab-selected",a)[0].getAttribute("data-type")
let e=r(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(!e.length)return
const s=r(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
s.length>0&&(e=s),e.forEach(b)}function d(){const o=a(`#profileRightColumn a[href="${t}"]`)
if(!o)return
const i=p({className:"sendLink",textContent:"All"})
e(i,k)
const l=p({innerHTML:"[&nbsp;"})
s(l,i),n(l,"&nbsp;]&nbsp;"),c(o.parentNode,l)}export{d as default}
//# sourceMappingURL=selectAllLink-Ch-_pL2E.js.map
