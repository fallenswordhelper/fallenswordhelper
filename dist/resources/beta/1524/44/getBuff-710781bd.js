import{E as e,H as r}from"./calfSystem-a8d582b6.js"
import{b as t}from"./buffObj-1b3bee9b.js"
let n
function o(e){return n.exec(e)}function a(t){n||(n=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(r).map(o)}function i(e){return t.find((r=>r.name===e))}export{a as b,i as g}
//# sourceMappingURL=getBuff-710781bd.js.map
