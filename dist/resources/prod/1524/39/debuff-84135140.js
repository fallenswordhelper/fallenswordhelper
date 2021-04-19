import{bn as e,z as t,o as n,t as a,W as o,O as r,aR as s,B as i}from"./calfSystem-fe534823.js"
import{e as f}from"./errorDialog-e19553de.js"
import"./dialogMsg-a960ad1e.js"
function u(t){return function(t){return e({subcmd:"removeskill",skill_id:t})}(t)}function l(e,t){t&&t.s&&i("",e.parentNode)}function c(e,t){if(!t.returnValue)return
const n=function(e){let t=e
return"IMG"===t.tagName&&(s(e),t=t.parentNode),t}(t.target)
"A"===n.tagName&&(function(e){1===e.eventPhase&&e.stopPropagation()}(t),t.preventDefault(),function(e,t){e?(o("profile","doDebuff"),u(t.href.match(/(\d+)$/)[1]).then(f).then(a(l,t))):r(t.href)}(e,n))}function m(e,o){const r=t("profileRightColumn")
r&&n(r.lastElementChild,a(c,e),o)}export default m
//# sourceMappingURL=debuff-84135140.js.map
