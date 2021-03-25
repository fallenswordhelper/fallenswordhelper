import{o as e,p as t,t as n,aA as o,bd as s,z as a}from"./calfSystem-5d0c721b.js"
import{h as r}from"./hideElement-4575b6b4.js"
let i
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function l(e,t){return t(e)}function f(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){f(5===Number(s(e.search,"section_id"))?(i||(i=a("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function b(e){const{target:t}=e;(function(e){return c.every(n(l,e))})(t)&&(u(t),o(t.href),e.preventDefault())}function d(){e(t,b)}export default d
//# sourceMappingURL=ajaxifyProfileSections-4f592ba0.js.map
