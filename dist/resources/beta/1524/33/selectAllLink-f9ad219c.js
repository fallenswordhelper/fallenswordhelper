import{C as a,bS as t,o as e,h as n,i as c,y as s,J as o,D as i,Q as b}from"./calfSystem-c91a5c89.js"
import{c as l}from"./createSpan-1ad5cfdb.js"
function r(){const a=s("backpack_tabs"),t=o("tab-selected",a)[0].getAttribute("data-type")
let e=i(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(0===e.length)return
const n=i(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
n.length>0&&(e=n),e.forEach(b)}function p(){const s=a(`#profileRightColumn a[href="${t}"]`)
if(!s)return
const o=l({className:"smallLink",textContent:"All"})
e(o,r)
const i=l({innerHTML:"[&nbsp;"})
n(i,o),c(i,"&nbsp;]&nbsp;"),n(s.parentNode,i)}export default p
//# sourceMappingURL=selectAllLink-f9ad219c.js.map
