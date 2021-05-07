import{br as t,z as e,o as n,t as o,U as r,O as a,aX as f,B as s}from"./calfSystem-3cb2f93e.js"
import{e as i}from"./errorDialog-0f2ff56e.js"
import"./dialogMsg-3c26aecb.js"
function u(e){return function(e){return t({subcmd:"removeskill",skill_id:e})}(e)}function l(t,e){e&&e.s&&s("",t.parentNode)}function c(t,e){if(!e.returnValue)return
const n=function(t){let e=t
return"IMG"===e.tagName&&(f(t),e=e.parentNode),e}(e.target)
"A"===n.tagName&&(function(t){1===t.eventPhase&&t.stopPropagation()}(e),e.preventDefault(),function(t,e){t?(r("profile","doDebuff"),u(e.href.match(/(\d+)$/)[1]).then(i).then(o(l,e))):a(e.href)}(t,n))}function m(t,r){const a=e("profileRightColumn")
a&&n(a.lastElementChild,o(c,t),r)}export default m
//# sourceMappingURL=debuff-48534428.js.map
