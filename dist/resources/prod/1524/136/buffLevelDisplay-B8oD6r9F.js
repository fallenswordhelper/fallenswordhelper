import{i as e}from"./insertHtmlAfterBegin-DFptfzkk.js"
import{k as t,r as i}from"./calfSystem-CUgWHLtG.js"
function n(t){const n=i(/Level: (?<lvl>\d+)/,t.dataset.tipped)
if(!n)return
let l=t.nextElementSibling
t.nextElementSibling||(l=t.parentNode.nextElementSibling),e(l,`<b>(${n})</b><br>`)}function l(){t('#profileRightColumn img[src*="/skills/"]').forEach(n)}export{l as default}
//# sourceMappingURL=buffLevelDisplay-B8oD6r9F.js.map
