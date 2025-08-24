import{o as e,p as t,bl as s,s as a,a$ as n,g as o,cl as i}from"./calfSystem-79LsojAC.js"
let l=0
function c(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&i(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function r(e){a("ajaxifyProfileSections","toggleSection")
c(5===Number(n(e.search,"section_id"))?(l||(l=o("backpackContainer")),l):e.parentNode.parentNode.nextElementSibling)}function f(e){const{target:t}=e
t.href?.includes("togglesection")&&(r(t),s(t.href),e.preventDefault())}function u(){e(t(),f)}export{u as default}
//# sourceMappingURL=ajaxifyProfileSections-BFUfLhXl.js.map
