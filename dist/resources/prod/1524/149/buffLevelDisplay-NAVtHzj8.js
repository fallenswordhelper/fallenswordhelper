import{i as e}from"./insertHtmlAfterBegin-DtSVBFQz.js"
import{n as t,r as n}from"./calfSystem-BGW9cdWN.js"
function i(t){const i=n(/Level: (?<lvl>\d+)/,t.dataset.tipped)
if(!i)return
let l=t.nextElementSibling
t.nextElementSibling||(l=t.parentNode.nextElementSibling),e(l,`<b>(${i})</b><br>`)}function l(){t('#profileRightColumn img[src*="/skills/"]').forEach(i)}export{l as default}
//# sourceMappingURL=buffLevelDisplay-NAVtHzj8.js.map
