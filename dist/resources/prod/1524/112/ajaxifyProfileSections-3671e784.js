import{o as e,p as t,aK as n,c as a,aq as o,g as s}from"./calfSystem-4830a18d.js"
import{h as r}from"./hideElement-85f33001.js"
let i=0
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function l(e,t){return t(e)}function f(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){f(5===Number(o(e.search,"section_id"))?(i||(i=s("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function m(e){const{target:t}=e;(function(e){return c.every(a(l,e))})(t)&&(u(t),n(t.href),e.preventDefault())}function p(){e(t(),m)}export{p as default}
//# sourceMappingURL=ajaxifyProfileSections-3671e784.js.map
