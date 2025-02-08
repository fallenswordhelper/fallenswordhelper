import{i as e}from"./insertHtmlAfterBegin-Bsjm51tM.js"
import{l as t,r as i}from"./calfSystem-BldO1y8X.js"
function n(t){const n=i(/Level: (?<lvl>\d+)/,t.dataset.tipped)
if(!n)return
let l=t.nextElementSibling
t.nextElementSibling||(l=t.parentNode.nextElementSibling),e(l,`<b>(${n})</b><br>`)}function l(){t('#profileRightColumn img[src*="/skills/"]').forEach(n)}export{l as default}
//# sourceMappingURL=buffLevelDisplay-Rr2fqFC4.js.map
