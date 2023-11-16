import{o as e,p as t,aJ as s,s as a,aq as n,g as o}from"./calfSystem-dEoRVG2S.js"
import{h as i}from"./hideElement-RABq1RME.js"
let l=0
function r(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&i(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function c(e){a("ajaxifyProfileSections","toggleSection")
r(5===Number(n(e.search,"section_id"))?(l||(l=o("backpackContainer")),l):e.parentNode.parentNode.nextElementSibling)}function f(e){const{target:t}=e
t.href?.includes("togglesection")&&(c(t),s(t.href),e.preventDefault())}function u(){e(t(),f)}export{u as default}
//# sourceMappingURL=ajaxifyProfileSections-a9DiXHAq.js.map
