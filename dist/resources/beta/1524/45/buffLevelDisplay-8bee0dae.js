import{E as e,a9 as t}from"./calfSystem-ae2e69af.js"
function n(e){const n=/Level: (\d+)/.exec(e.dataset.tipped)
if(!n)return
const i=n[1]
let l=e.nextElementSibling
e.nextElementSibling||(l=e.parentNode.nextElementSibling),t(l,`<b>(${i})</b><br>`)}function i(){e('#profileRightColumn img[src*="/skills/"]').forEach(n)}export default i
//# sourceMappingURL=buffLevelDisplay-8bee0dae.js.map
