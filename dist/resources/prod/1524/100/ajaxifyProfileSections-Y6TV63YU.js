import{a as s}from"./chunk-V4KN4E4X.js";import{a as n}from"./chunk-EWKAFMUH.js";import{b as c}from"./chunk-MCG7PUE5.js";import{a as i}from"./chunk-QGMSNVNO.js";import{a as l}from"./chunk-CPWTUMEP.js";import{b as f}from"./chunk-FTXPWRDQ.js";import{a as r}from"./chunk-PTNJTFVL.js";import"./chunk-7V4YID4M.js";var o=0;function a(){return o||(o=i("backpackContainer")),o}var u=[e=>e.tagName==="A",e=>!!e.href,e=>e.href.includes("togglesection")];function p(e,t){return t(e)}function d(e){return u.every(r(p,e))}function g(e){e.style.display==="block"&&s(e),e.removeAttribute("style")}function m(e){e.hasAttribute("style")?g(e):e.classList.toggle("fshHide")}function y(e){let t=Number(n(e.search,"section_id"));m(t===5?a():e.parentNode.parentNode.nextElementSibling)}function b(e){let{target:t}=e;d(t)&&(y(t),f(t.href),e.preventDefault())}function h(){l(c(),b)}export{h as default};
//# sourceMappingURL=ajaxifyProfileSections-Y6TV63YU.js.map
