import{b as e}from"./buffObj-BIwiFUIW.js"
import{k as t,as as r,cc as n,b$ as o}from"./calfSystem-DKih1pr1.js"
function s(t){return e.find((e=>e.name===t))}let a=0
const f=["Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'","The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'","Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them.","Player '\\w*' could not be found to buff."]
function c(e){const t=n((a||(a=new RegExp(f.join("|"))),a),e)
return t||o(`unmatched buffReportParser - ${e}`),t}function i(e){return t("#quickbuff-report font:not(font *)",e).map(r).map(c).filter((e=>e))}export{i as b,s as g}
//# sourceMappingURL=buffReportParser-RJm2qNez.js.map
