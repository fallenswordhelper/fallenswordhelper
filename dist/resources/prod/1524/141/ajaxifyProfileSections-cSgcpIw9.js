import{e,s as t,ax as s,bM as a,g as n,aT as i,p as o}from"./calfSystem-Blt4DbaE.js"
let c=0
function l(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&a(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function r(e){t("ajaxifyProfileSections","toggleSection")
l(5===Number(s(e.search,"section_id"))?(c||(c=n("backpackContainer")),c):e.parentNode.parentNode.nextElementSibling)}function f(e){const{target:t}=e
t.href?.includes("togglesection")&&(r(t),i(t.href),e.preventDefault())}function u(){e(o(),f)}export{u as default}
//# sourceMappingURL=ajaxifyProfileSections-cSgcpIw9.js.map
