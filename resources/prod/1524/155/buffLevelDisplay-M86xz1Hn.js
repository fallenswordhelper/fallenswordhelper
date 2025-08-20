import{i as e}from"./insertHtmlAfterBegin-jBb92bbU.js"
import{h as t,r as i}from"./calfSystem-UyQ_FKFu.js"
function n(t){const n=i(/Level: (?<lvl>\d+)/,t.dataset.tipped)
if(!n)return
let l=t.nextElementSibling
t.nextElementSibling||(l=t.parentNode.nextElementSibling),e(l,`<b>(${n})</b><br>`)}function l(){t('#profileRightColumn img[src*="/skills/"]').forEach(n)}export{l as default}
//# sourceMappingURL=buffLevelDisplay-M86xz1Hn.js.map
