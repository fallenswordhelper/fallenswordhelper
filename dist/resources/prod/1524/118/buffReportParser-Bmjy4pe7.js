import{b as e}from"./buffObj-BIwiFUIW.js"
import{k as t,aq as r,c7 as n,bW as o}from"./calfSystem-hszmVKJw.js"
function s(t){return e.find((e=>e.name===t))}let a=0
const f=["Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'","The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'","Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."]
function i(e){const t=n((a||(a=new RegExp(f.join("|"))),a),e)
return t||o(`unmatched buffReportParser - ${e}`),t}function c(e){return t("#quickbuff-report font:not(font *)",e).map(r).map(i).filter((e=>e))}export{c as b,s as g}
//# sourceMappingURL=buffReportParser-Bmjy4pe7.js.map
