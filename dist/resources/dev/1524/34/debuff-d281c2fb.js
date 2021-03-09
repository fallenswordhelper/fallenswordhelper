import{bp as t,y as e,o as n,t as o,W as a,N as r,aP as s,A as f}from"./calfSystem-c07e3259.js"
import{e as i}from"./errorDialog-da819f92.js"
import"./dialogMsg-2f52cc12.js"
function u(e){return function(e){return t({subcmd:"removeskill",skill_id:e})}(e)}function l(t,e){e&&e.s&&f("",t.parentNode)}function c(t,e){if(!e.returnValue)return
const n=function(t){let e=t
return"IMG"===e.tagName&&(s(t),e=e.parentNode),e}(e.target)
"A"===n.tagName&&(function(t){1===t.eventPhase&&t.stopPropagation()}(e),e.preventDefault(),function(t,e){t?(a("profile","doDebuff"),u(e.href.match(/(\d+)$/)[1]).then(i).then(o(l,e))):r(e.href)}(t,n))}function m(t,a){const r=e("profileRightColumn")
r&&n(r.lastElementChild,o(c,t),a)}export default m
//# sourceMappingURL=debuff-d281c2fb.js.map
