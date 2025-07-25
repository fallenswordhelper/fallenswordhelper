import{i as e}from"./insertHtmlAfterBegin-UHwjB-kO.js"
import{k as t,r as i}from"./calfSystem-C1X5YxJZ.js"
function n(t){const n=i(/Level: (?<lvl>\d+)/,t.dataset.tipped)
if(!n)return
let l=t.nextElementSibling
t.nextElementSibling||(l=t.parentNode.nextElementSibling),e(l,`<b>(${n})</b><br>`)}function l(){t('#profileRightColumn img[src*="/skills/"]').forEach(n)}export{l as default}
//# sourceMappingURL=buffLevelDisplay-nZTvTx6b.js.map
