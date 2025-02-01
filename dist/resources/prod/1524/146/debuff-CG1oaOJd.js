import{ci as e,b as t,$ as s,g as a,o as n,d as o,b2 as r,s as i,r as l,cq as f,e as u}from"./calfSystem-DiXGAkgN.js"
import{e as c}from"./errorDialog-B4_TjdGG.js"
import"./dialogMsg-rKdvzvMA.js"
function d(t){return e({subcmd:"removeskill",skill_id:t})}function m(e){return t({cmd:"profile",subcmd:"removeskill",skill_id:e},"Skill de-activated successfully.")}async function p(e,t){if(e){i("profile","doDebuff")
const e=l(/d=(?<id>\d{1,3})$/,t.href),a=await function(e){return s(d,m,e)}(e)
c(a),function(e,t){t?.s&&u("",e.parentNode)}(t,a)}else f(t.href)}function g(e,t){if(!t.returnValue)return
const s=function(e){let t=e
return"IMG"===t.tagName&&(r(e),t=t.parentNode),t}(t.target)
"A"===s.tagName&&(!function(e){1===e.eventPhase&&e.stopPropagation()}(t),t.preventDefault(),p(e,s))}function b(e,t){const s=a("profileRightColumn")
s&&n(s.lastElementChild,o(g,e),t)}export{b as default}
//# sourceMappingURL=debuff-CG1oaOJd.js.map
