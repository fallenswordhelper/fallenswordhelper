import{i as e}from"./insertHtmlAfterBegin-eEM8BtQM.js"
import{k as t,r as i}from"./calfSystem-ChzN4Q-P.js"
function n(t){const n=i(/Level: (?<lvl>\d+)/,t.dataset.tipped)
if(!n)return
let l=t.nextElementSibling
t.nextElementSibling||(l=t.parentNode.nextElementSibling),e(l,`<b>(${n})</b><br>`)}function l(){t('#profileRightColumn img[src*="/skills/"]').forEach(n)}export{l as default}
//# sourceMappingURL=buffLevelDisplay-CJbgBZ3w.js.map
