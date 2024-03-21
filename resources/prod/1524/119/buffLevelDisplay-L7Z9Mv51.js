import{i as e}from"./insertHtmlAfterBegin-GLMn5C2Y.js"
import{k as t,r as i}from"./calfSystem-Bit7wh4p.js"
function n(t){const n=i(/Level: (?<lvl>\d+)/,t.dataset.tipped)
if(!n)return
let l=t.nextElementSibling
t.nextElementSibling||(l=t.parentNode.nextElementSibling),e(l,`<b>(${n})</b><br>`)}function l(){t('#profileRightColumn img[src*="/skills/"]').forEach(n)}export{l as default}
//# sourceMappingURL=buffLevelDisplay-L7Z9Mv51.js.map
