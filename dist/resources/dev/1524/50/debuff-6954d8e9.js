import{bx as t,z as e,o as n,t as o,T as r,N as a,b1 as f,B as s}from"./calfSystem-b3667af8.js"
import{e as i}from"./errorDialog-991fe014.js"
function u(e){return function(e){return t({subcmd:"removeskill",skill_id:e})}(e)}function l(t,e){e&&e.s&&s("",t.parentNode)}function c(t,e){if(!e.returnValue)return
const n=function(t){let e=t
return"IMG"===e.tagName&&(f(t),e=e.parentNode),e}(e.target)
"A"===n.tagName&&(function(t){1===t.eventPhase&&t.stopPropagation()}(e),e.preventDefault(),function(t,e){t?(r("profile","doDebuff"),u(e.href.match(/(\d+)$/)[1]).then(i).then(o(l,e))):a(e.href)}(t,n))}function m(t,r){const a=e("profileRightColumn")
a&&n(a.lastElementChild,o(c,t),r)}export default m
//# sourceMappingURL=debuff-6954d8e9.js.map