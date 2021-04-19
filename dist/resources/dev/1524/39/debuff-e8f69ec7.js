import{bq as t,z as e,o as a,t as n,X as o,O as r,aW as s,B as i}from"./calfSystem-b31aba65.js"
import{e as f}from"./errorDialog-e19553de.js"
import"./dialogMsg-a960ad1e.js"
function u(e){return function(e){return t({subcmd:"removeskill",skill_id:e})}(e)}function l(t,e){e&&e.s&&i("",t.parentNode)}function c(t,e){if(!e.returnValue)return
const a=function(t){let e=t
return"IMG"===e.tagName&&(s(t),e=e.parentNode),e}(e.target)
"A"===a.tagName&&(function(t){1===t.eventPhase&&t.stopPropagation()}(e),e.preventDefault(),function(t,e){t?(o("profile","doDebuff"),u(e.href.match(/(\d+)$/)[1]).then(f).then(n(l,e))):r(e.href)}(t,a))}function m(t,o){const r=e("profileRightColumn")
r&&a(r.lastElementChild,n(c,t),o)}export default m
//# sourceMappingURL=debuff-e8f69ec7.js.map
