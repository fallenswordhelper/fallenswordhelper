import{q as a,dQ as t,e,s,g as n,aW as c,n as o,aP as i,i as l,v as r,b_ as b}from"./calfSystem-Blt4DbaE.js"
import{c as p}from"./createSpan-qOSQqjTl.js"
function d(){s("profile","select all")
const a=n("backpack_tabs"),t=c("tab-selected",a)[0].getAttribute("data-type")
let e=o(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(!e.length)return
const l=o(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
l.length>0&&(e=l),e.forEach(i)}function f(){const s=a(`#profileRightColumn a[href="${t}"]`)
if(!s)return
const n=p({className:"sendLink",textContent:"All"})
e(n,d)
const c=p({innerHTML:"[&nbsp;"})
l(c,n),r(c,"&nbsp;]&nbsp;"),b(s.parentNode,c)}export{f as default}
//# sourceMappingURL=selectAllLink-DaSrrrFm.js.map
