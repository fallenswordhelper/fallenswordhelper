import{o as e,p as t,t as n,aI as o,ai as a,z as s}from"./calfSystem-3cb2f93e.js"
import{h as i}from"./hideElement-0d0f9065.js"
let r
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function f(e,t){return t(e)}function l(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&i(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){l(5===Number(a(e.search,"section_id"))?(r||(r=s("backpackContainer")),r):e.parentNode.parentNode.nextElementSibling)}function m(e){const{target:t}=e;(function(e){return c.every(n(f,e))})(t)&&(u(t),o(t.href),e.preventDefault())}function d(){e(t,m)}export default d
//# sourceMappingURL=ajaxifyProfileSections-9be3d26e.js.map
