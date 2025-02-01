import{i as e}from"./insertHtmlAfterBegin-CVtY5v23.js"
import{l as t,r as i}from"./calfSystem-DiXGAkgN.js"
function n(t){const n=i(/Level: (?<lvl>\d+)/,t.dataset.tipped)
if(!n)return
let l=t.nextElementSibling
t.nextElementSibling||(l=t.parentNode.nextElementSibling),e(l,`<b>(${n})</b><br>`)}function l(){t('#profileRightColumn img[src*="/skills/"]').forEach(n)}export{l as default}
//# sourceMappingURL=buffLevelDisplay-Bex8EuZ0.js.map
