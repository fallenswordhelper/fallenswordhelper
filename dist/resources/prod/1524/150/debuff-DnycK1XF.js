import{cg as e,$ as t,b as s,g as a,o as n,e as o,b2 as r,s as i,r as l,co as f,h as u}from"./calfSystem-BGOTz8de.js"
import{e as c}from"./errorDialog-B4_TjdGG.js"
import"./dialogMsg-rKdvzvMA.js"
function d(t){return e({subcmd:"removeskill",skill_id:t})}function m(e){return s({cmd:"profile",subcmd:"removeskill",skill_id:e},"Skill de-activated successfully.")}async function p(e,s){if(e){i("profile","doDebuff")
const e=l(/d=(?<id>\d{1,3})$/,s.href),a=await function(e){return t(d,m,e)}(e)
c(a),function(e,t){t?.s&&u("",e.parentNode)}(s,a)}else f(s.href)}function g(e,t){if(!t.returnValue)return
const s=function(e){let t=e
return"IMG"===t.tagName&&(r(e),t=t.parentNode),t}(t.target)
"A"===s.tagName&&(!function(e){1===e.eventPhase&&e.stopPropagation()}(t),t.preventDefault(),p(e,s))}function h(e,t){const s=a("profileRightColumn")
s&&n(s.lastElementChild,o(g,e),t)}export{h as default}
//# sourceMappingURL=debuff-DnycK1XF.js.map
