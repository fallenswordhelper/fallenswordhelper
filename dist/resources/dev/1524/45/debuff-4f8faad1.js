import{bv as t,z as e,o as n,t as a,T as o,N as r,a$ as s,B as i}from"./calfSystem-6a3c85e0.js"
import{e as f}from"./errorDialog-0a862506.js"
import"./dialogMsg-f24b55b1.js"
function u(e){return function(e){return t({subcmd:"removeskill",skill_id:e})}(e)}function l(t,e){e&&e.s&&i("",t.parentNode)}function c(t,e){if(!e.returnValue)return
const n=function(t){let e=t
return"IMG"===e.tagName&&(s(t),e=e.parentNode),e}(e.target)
"A"===n.tagName&&(function(t){1===t.eventPhase&&t.stopPropagation()}(e),e.preventDefault(),function(t,e){t?(o("profile","doDebuff"),u(e.href.match(/(\d+)$/)[1]).then(f).then(a(l,e))):r(e.href)}(t,n))}function m(t,o){const r=e("profileRightColumn")
r&&n(r.lastElementChild,a(c,t),o)}export default m
//# sourceMappingURL=debuff-4f8faad1.js.map
