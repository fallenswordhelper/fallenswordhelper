import{o as e,p as t,t as n,az as o,bc as a,z as s}from"./calfSystem-cb2a6f39.js"
import{h as r}from"./hideElement-4575b6b4.js"
let i
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function f(e,t){return t(e)}function l(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){l(5===Number(a(e.search,"section_id"))?(i||(i=s("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function b(e){const{target:t}=e;(function(e){return c.every(n(f,e))})(t)&&(u(t),o(t.href),e.preventDefault())}function m(){e(t,b)}export default m
//# sourceMappingURL=ajaxifyProfileSections-0de03c8d.js.map
