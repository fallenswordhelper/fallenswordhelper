import{E as e,H as r}from"./calfSystem-6a3c85e0.js"
import{b as t}from"./buffObj-c673ca2f.js"
let n
function a(e){return n.exec(e)}function o(t){n||(n=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(r).map(a)}function c(e){return t.find((r=>r.name===e))}export{o as b,c as g}
//# sourceMappingURL=getBuff-4ce09167.js.map
