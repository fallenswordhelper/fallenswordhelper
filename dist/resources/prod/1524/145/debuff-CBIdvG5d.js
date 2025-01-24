import{cf as e,$ as t,g as a,o as s,c as n,s as r,r as o,cn as i,a$ as l,d as f}from"./calfSystem-CvwhhJv4.js"
import{a as c}from"./aGenericFallback-Ovyuk4LC.js"
import{e as u}from"./errorDialog-B4_TjdGG.js"
import"./dialogMsg-rKdvzvMA.js"
function d(t){return e({subcmd:"removeskill",skill_id:t})}function m(e){return c({cmd:"profile",subcmd:"removeskill",skill_id:e},"Skill de-activated successfully.")}async function p(e,a){if(e){r("profile","doDebuff")
const e=o(/d=(?<id>\d{1,3})$/,a.href),s=await function(e){return t(d,m,e)}(e)
u(s),function(e,t){t?.s&&f("",e.parentNode)}(a,s)}else i(a.href)}function g(e,t){if(!t.returnValue)return
const a=function(e){let t=e
return"IMG"===t.tagName&&(l(e),t=t.parentNode),t}(t.target)
"A"===a.tagName&&(!function(e){1===e.eventPhase&&e.stopPropagation()}(t),t.preventDefault(),p(e,a))}function k(e,t){const r=a("profileRightColumn")
r&&s(r.lastElementChild,n(g,e),t)}export{k as default}
//# sourceMappingURL=debuff-CBIdvG5d.js.map
