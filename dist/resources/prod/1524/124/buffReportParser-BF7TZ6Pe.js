import{b as e}from"./buffObj-BIwiFUIW.js"
import{k as t,aq as r,c6 as n,bV as o}from"./calfSystem-0LeC9ahe.js"
function a(t){return e.find((e=>e.name===t))}let f=0
const s=["Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'","The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'","Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them.","Player '\\w*' could not be found to buff."]
function i(e){const t=n((f||(f=new RegExp(s.join("|"))),f),e)
return t||o(`unmatched buffReportParser - ${e}`),t}function l(e){return t("#quickbuff-report font:not(font *)",e).map(r).map(i).filter((e=>e))}export{l as b,a as g}
//# sourceMappingURL=buffReportParser-BF7TZ6Pe.js.map
