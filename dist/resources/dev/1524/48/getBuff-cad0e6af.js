import{E as e,H as r}from"./calfSystem-01849445.js"
import{b as t}from"./buffObj-7ab8e1a0.js"
let n
function a(e){return n.exec(e)}function o(t){n||(n=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(r).map(a)}function i(e){return t.find((r=>r.name===e))}export{o as b,i as g}
//# sourceMappingURL=getBuff-cad0e6af.js.map
