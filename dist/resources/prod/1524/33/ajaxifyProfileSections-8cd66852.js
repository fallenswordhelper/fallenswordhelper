import{o as e,p as t,t as n,av as o,b9 as a,y as s}from"./calfSystem-0708a9bb.js"
import{h as r}from"./hideElement-eb117e0e.js"
let i
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function l(e,t){return t(e)}function f(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){f(5===Number(a(e.search,"section_id"))?(i||(i=s("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function b(e){const{target:t}=e;(function(e){return c.every(n(l,e))})(t)&&(u(t),o(t.href),e.preventDefault())}function m(){e(t,b)}export default m
//# sourceMappingURL=ajaxifyProfileSections-8cd66852.js.map
