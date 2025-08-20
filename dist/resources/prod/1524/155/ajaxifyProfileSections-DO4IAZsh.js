import{o as e,p as t,bk as s,s as a,a_ as n,g as o,ck as i}from"./calfSystem-UyQ_FKFu.js"
let c=0
function l(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&i(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function r(e){a("ajaxifyProfileSections","toggleSection")
l(5===Number(n(e.search,"section_id"))?(c||(c=o("backpackContainer")),c):e.parentNode.parentNode.nextElementSibling)}function f(e){const{target:t}=e
t.href?.includes("togglesection")&&(r(t),s(t.href),e.preventDefault())}function u(){e(t(),f)}export{u as default}
//# sourceMappingURL=ajaxifyProfileSections-DO4IAZsh.js.map
