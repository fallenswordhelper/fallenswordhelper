import{o as e,p as t,t as n,ax as a,ba as o,z as s}from"./calfSystem-60c20ae9.js"
import{h as r}from"./hideElement-4575b6b4.js"
let i
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function l(e,t){return t(e)}function f(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){f(5===Number(o(e.search,"section_id"))?(i||(i=s("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function m(e){const{target:t}=e;(function(e){return c.every(n(l,e))})(t)&&(u(t),a(t.href),e.preventDefault())}function b(){e(t,m)}export default b
//# sourceMappingURL=ajaxifyProfileSections-b35174a2.js.map
