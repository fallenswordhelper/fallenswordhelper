import{b as e}from"./buffObj-BIwiFUIW.js"
import{k as t,as as n,cc as o,b$ as r}from"./calfSystem-DZGU7L1H.js"
function a(t){return e.find((e=>e.name===t))}let s=0
const f=["Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'","The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'","Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them.","Player '\\w*' could not be found to buff.","You do not have enough stamina remaining."]
function i(e){const t=o((s||(s=new RegExp(f.join("|"))),s),e)
return t||r(`unmatched buffReportParser - ${e}`),t}function c(e){return t("#quickbuff-report font:not(font *)",e).map(n).map(i).filter((e=>e))}export{c as b,a as g}
//# sourceMappingURL=buffReportParser-4iK1FRfm.js.map
