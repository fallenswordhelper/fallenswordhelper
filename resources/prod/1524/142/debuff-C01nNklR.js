import{bP as e,$ as t,g as a,o as s,c as r,s as n,r as o,bX as i,aJ as l,d as f}from"./calfSystem-KuDT30_2.js"
import{a as u}from"./aGenericFallback-DtK78Sir.js"
import{e as c}from"./errorDialog-B4_TjdGG.js"
import"./dialogMsg-rKdvzvMA.js"
function d(t){return e({subcmd:"removeskill",skill_id:t})}function m(e){return u({cmd:"profile",subcmd:"removeskill",skill_id:e},"Skill de-activated successfully.")}async function p(e,a){if(e){n("profile","doDebuff")
const e=o(/d=(?<id>\d{1,3})$/,a.href),s=await function(e){return t(d,m,e)}(e)
c(s),function(e,t){t?.s&&f("",e.parentNode)}(a,s)}else i(a.href)}function g(e,t){if(!t.returnValue)return
const a=function(e){let t=e
return"IMG"===t.tagName&&(l(e),t=t.parentNode),t}(t.target)
"A"===a.tagName&&(!function(e){1===e.eventPhase&&e.stopPropagation()}(t),t.preventDefault(),p(e,a))}function b(e,t){const n=a("profileRightColumn")
n&&s(n.lastElementChild,r(g,e),t)}export{b as default}
//# sourceMappingURL=debuff-C01nNklR.js.map
