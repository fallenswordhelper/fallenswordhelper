import{b as e}from"./buffObj-BIwiFUIW.js"
import{h as t,aR as n,c_ as o,cv as r}from"./calfSystem-CT1aM4VG.js"
function a(t){return e.find((e=>e.name===t))}let s=0
const f=["Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'","The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'","Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them\\.","Player '\\w*' could not be found to buff\\.","You do not have enough stamina remaining\\.","Unable to cast skill\\(s\\) on '\\w*' due to their preferences\\."]
function i(e){const t=o((s||(s=new RegExp(f.join("|"))),s),e)
return t||r(`unmatched buffReportParser - ${e}`),t}function l(e){return t("#quickbuff-report font:not(font *)",e).map(n).map(i).filter((e=>e))}export{l as b,a as g}
//# sourceMappingURL=buffReportParser-8Mz1e59y.js.map
