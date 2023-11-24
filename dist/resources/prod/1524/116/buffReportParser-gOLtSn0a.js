import{b as e}from"./buffObj-QxLUrgH2.js"
import{k as t,al as r,b$ as n,bO as o}from"./calfSystem-ZGMc097r.js"
function a(t){return e.find((e=>e.name===t))}let s=0
const f=["Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'","The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'","Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."]
function i(e){const t=n((s||(s=new RegExp(f.join("|"))),s),e)
return t||o(`unmatched buffReportParser - ${e}`),t}function l(e){return t("#quickbuff-report font:not(font *)",e).map(r).map(i).filter((e=>e))}export{l as b,a as g}
//# sourceMappingURL=buffReportParser-gOLtSn0a.js.map
