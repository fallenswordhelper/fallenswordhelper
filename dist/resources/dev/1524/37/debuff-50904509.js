import{bq as t,z as e,o as n,t as o,X as r,O as a,aQ as s,B as f}from"./calfSystem-5d0c721b.js"
import{e as i}from"./errorDialog-dd9ceb95.js"
import"./dialogMsg-f2f50c63.js"
function u(e){return function(e){return t({subcmd:"removeskill",skill_id:e})}(e)}function l(t,e){e&&e.s&&f("",t.parentNode)}function c(t,e){if(!e.returnValue)return
const n=function(t){let e=t
return"IMG"===e.tagName&&(s(t),e=e.parentNode),e}(e.target)
"A"===n.tagName&&(function(t){1===t.eventPhase&&t.stopPropagation()}(e),e.preventDefault(),function(t,e){t?(r("profile","doDebuff"),u(e.href.match(/(\d+)$/)[1]).then(i).then(o(l,e))):a(e.href)}(t,n))}function m(t,r){const a=e("profileRightColumn")
a&&n(a.lastElementChild,o(c,t),r)}export default m
//# sourceMappingURL=debuff-50904509.js.map
