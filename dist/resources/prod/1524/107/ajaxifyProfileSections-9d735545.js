import{o as e,p as t,aN as n,c as s,as as a,g as o}from"./calfSystem-2fff342b.js"
import{h as r}from"./hideElement-baffa60f.js"
let i=0
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function l(e,t){return t(e)}function f(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){f(5===Number(a(e.search,"section_id"))?(i||(i=o("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function m(e){const{target:t}=e;(function(e){return c.every(s(l,e))})(t)&&(u(t),n(t.href),e.preventDefault())}function p(){e(t(),m)}export{p as default}
//# sourceMappingURL=ajaxifyProfileSections-9d735545.js.map
