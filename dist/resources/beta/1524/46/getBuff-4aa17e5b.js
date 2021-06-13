import{E as e,H as r}from"./calfSystem-cbf77dd7.js"
import{b as t}from"./buffObj-c604f006.js"
let n
function o(e){return n.exec(e)}function f(t){n||(n=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(r).map(o)}function a(e){return t.find((r=>r.name===e))}export{f as b,a as g}
//# sourceMappingURL=getBuff-4aa17e5b.js.map
