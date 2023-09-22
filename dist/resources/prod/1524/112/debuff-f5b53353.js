import{bB as e,$ as t,g as a,o as s,c as n,n as r,r as o,bL as i,aD as l,s as f}from"./calfSystem-4830a18d.js"
import{a as u}from"./aGenericFallback-b980050e.js"
import{e as c}from"./errorDialog-9e633a62.js"
import"./dialogMsg-7c5fba89.js"
function m(t){return e({subcmd:"removeskill",skill_id:t})}function d(e){return u({cmd:"profile",subcmd:"removeskill",skill_id:e},"Skill de-activated successfully.")}async function p(e,a){if(e){r("profile","doDebuff")
const e=o(/d=(?<id>\d{1,3})$/,a.href),s=await function(e){return t(m,d,e)}(e)
c(s),function(e,t){t?.s&&f("",e.parentNode)}(a,s)}else i(a.href)}function g(e,t){if(!t.returnValue)return
const a=function(e){let t=e
return"IMG"===t.tagName&&(l(e),t=t.parentNode),t}(t.target)
"A"===a.tagName&&(!function(e){1===e.eventPhase&&e.stopPropagation()}(t),t.preventDefault(),p(e,a))}function b(e,t){const r=a("profileRightColumn")
r&&s(r.lastElementChild,n(g,e),t)}export{b as default}
//# sourceMappingURL=debuff-f5b53353.js.map
