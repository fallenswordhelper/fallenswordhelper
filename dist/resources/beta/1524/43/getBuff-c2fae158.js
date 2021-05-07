import{E as e,H as r}from"./calfSystem-1d588248.js"
import{b as t}from"./buffObj-b66afe66.js"
let n
function o(e){return n.exec(e)}function a(t){n||(n=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(r).map(o)}function f(e){return t.find((r=>r.name===e))}export{a as b,f as g}
//# sourceMappingURL=getBuff-c2fae158.js.map
