import{i as e}from"./insertHtmlAfterBegin-DCUmpZPb.js"
import{h as t,r as i}from"./calfSystem-CIuUjh4H.js"
function n(t){const n=i(/Level: (?<lvl>\d+)/,t.dataset.tipped)
if(!n)return
let l=t.nextElementSibling
t.nextElementSibling||(l=t.parentNode.nextElementSibling),e(l,`<b>(${n})</b><br>`)}function l(){t('#profileRightColumn img[src*="/skills/"]').forEach(n)}export{l as default}
//# sourceMappingURL=buffLevelDisplay-C4ptUJ1N.js.map
