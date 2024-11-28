import{i as e}from"./insertHtmlAfterBegin-CxpRhMr7.js"
import{k as t,r as i}from"./calfSystem-KuDT30_2.js"
function n(t){const n=i(/Level: (?<lvl>\d+)/,t.dataset.tipped)
if(!n)return
let l=t.nextElementSibling
t.nextElementSibling||(l=t.parentNode.nextElementSibling),e(l,`<b>(${n})</b><br>`)}function l(){t('#profileRightColumn img[src*="/skills/"]').forEach(n)}export{l as default}
//# sourceMappingURL=buffLevelDisplay-BUEqu9YE.js.map
