import{b as e}from"./buffObj-BIwiFUIW.js"
import{k as t,aF as n,cU as o,cr as r}from"./calfSystem-ChzN4Q-P.js"
function a(t){return e.find((e=>e.name===t))}let f=0
const s=["Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'","The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'","Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them.","Player '\\w*' could not be found to buff.","You do not have enough stamina remaining."]
function i(e){const t=o((f||(f=new RegExp(s.join("|"))),f),e)
return t||r(`unmatched buffReportParser - ${e}`),t}function c(e){return t("#quickbuff-report font:not(font *)",e).map(n).map(i).filter((e=>e))}export{c as b,a as g}
//# sourceMappingURL=buffReportParser-Bdukf5Lh.js.map
