import{D as a,bU as t,o as e,h as n,i as s,z as c,K as o,E as b,R as i}from"./calfSystem-26fbeaeb.js"
import{c as l}from"./createSpan-2c557b8b.js"
function r(){const a=c("backpack_tabs"),t=o("tab-selected",a)[0].getAttribute("data-type")
let e=b(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(0===e.length)return
const n=b(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
n.length>0&&(e=n),e.forEach(i)}function p(){const c=a(`#profileRightColumn a[href="${t}"]`)
if(!c)return
const o=l({className:"smallLink",textContent:"All"})
e(o,r)
const b=l({innerHTML:"[&nbsp;"})
n(b,o),s(b,"&nbsp;]&nbsp;"),n(c.parentNode,b)}export default p
//# sourceMappingURL=selectAllLink-7a215d60.js.map
