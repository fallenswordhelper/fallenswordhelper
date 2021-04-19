import{o as e,p as t,t as n,aH as a,ai as o,z as s}from"./calfSystem-b31aba65.js"
import{h as i}from"./hideElement-d197c06b.js"
let r
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function l(e,t){return t(e)}function f(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&i(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){f(5===Number(o(e.search,"section_id"))?(r||(r=s("backpackContainer")),r):e.parentNode.parentNode.nextElementSibling)}function m(e){const{target:t}=e;(function(e){return c.every(n(l,e))})(t)&&(u(t),a(t.href),e.preventDefault())}function b(){e(t,m)}export default b
//# sourceMappingURL=ajaxifyProfileSections-a6df29a6.js.map
