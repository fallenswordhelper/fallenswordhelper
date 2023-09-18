import{b as e}from"./buffObj-18893259.js"
import{j as t,am as r,c1 as n,bQ as o}from"./calfSystem-929ac228.js"
function a(t){return e.find((e=>e.name===t))}let s=0
const f=["Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'","The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'","Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."]
function i(e){const t=n((s||(s=new RegExp(f.join("|"))),s),e)
return t||o(`unmatched buffReportParser - ${e}`),t}function c(e){return t("#quickbuff-report font:not(font *)",e).map(r).map(i).filter((e=>e))}export{c as b,a as g}
//# sourceMappingURL=buffReportParser-9e77ea1e.js.map
