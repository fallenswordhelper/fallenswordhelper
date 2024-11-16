import{bP as e,$ as t,g as a,e as s,b as r,aH as n,s as o,r as i,c as l,bX as f}from"./calfSystem-Blt4DbaE.js"
import{a as u}from"./aGenericFallback-BVLHkg3J.js"
import{e as c}from"./errorDialog-B4_TjdGG.js"
import"./dialogMsg-rKdvzvMA.js"
function m(t){return e({subcmd:"removeskill",skill_id:t})}function d(e){return u({cmd:"profile",subcmd:"removeskill",skill_id:e},"Skill de-activated successfully.")}async function p(e,a){if(e){o("profile","doDebuff")
const e=i(/d=(?<id>\d{1,3})$/,a.href),s=await function(e){return t(m,d,e)}(e)
c(s),function(e,t){t?.s&&l("",e.parentNode)}(a,s)}else f(a.href)}function g(e,t){if(!t.returnValue)return
const a=function(e){let t=e
return"IMG"===t.tagName&&(n(e),t=t.parentNode),t}(t.target)
"A"===a.tagName&&(!function(e){1===e.eventPhase&&e.stopPropagation()}(t),t.preventDefault(),p(e,a))}function b(e,t){const n=a("profileRightColumn")
n&&s(n.lastElementChild,r(g,e),t)}export{b as default}
//# sourceMappingURL=debuff-BAYeFEf5.js.map
