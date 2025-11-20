import{o as e,p as t,bo as s,s as n,b0 as o,g as a,cn as i}from"./calfSystem-HVCiy-VV.js"
let c=0
function l(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&i(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function r(e){n("ajaxifyProfileSections","toggleSection")
l(5===Number(o(e.search,"section_id"))?(c||(c=a("backpackContainer")),c):e.parentNode.parentNode.nextElementSibling)}function f(e){const{target:t}=e
t.href?.includes("togglesection")&&(r(t),s(t.href),e.preventDefault())}function u(){e(t(),f)}export{u as default}
//# sourceMappingURL=ajaxifyProfileSections-kOEnsXUV.js.map
