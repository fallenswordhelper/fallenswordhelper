import{o as e,p as t,aT as s,s as a,ax as n,g as o,bM as i}from"./calfSystem-DKih1pr1.js"
let c=0
function l(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&i(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function r(e){a("ajaxifyProfileSections","toggleSection")
l(5===Number(n(e.search,"section_id"))?(c||(c=o("backpackContainer")),c):e.parentNode.parentNode.nextElementSibling)}function f(e){const{target:t}=e
t.href?.includes("togglesection")&&(r(t),s(t.href),e.preventDefault())}function u(){e(t(),f)}export{u as default}
//# sourceMappingURL=ajaxifyProfileSections-B49uzBAY.js.map
