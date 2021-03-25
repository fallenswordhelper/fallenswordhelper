import{D as a,bU as t,o as e,h as n,i as s,z as c,K as o,E as i,R as b}from"./calfSystem-4a40365f.js"
import{c as l}from"./createSpan-3ab35394.js"
function r(){const a=c("backpack_tabs"),t=o("tab-selected",a)[0].getAttribute("data-type")
let e=i(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(0===e.length)return
const n=i(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
n.length>0&&(e=n),e.forEach(b)}function p(){const c=a(`#profileRightColumn a[href="${t}"]`)
if(!c)return
const o=l({className:"smallLink",textContent:"All"})
e(o,r)
const i=l({innerHTML:"[&nbsp;"})
n(i,o),s(i,"&nbsp;]&nbsp;"),n(c.parentNode,i)}export default p
//# sourceMappingURL=selectAllLink-adaeb0aa.js.map
